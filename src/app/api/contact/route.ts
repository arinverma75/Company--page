/**
 * Contact form API route – /api/contact
 * Backend validation + rate limiting + sends email via Resend / Nodemailer
 * Secrets read from environment variables only.
 *
 * Environment variables required:
 *   CONTACT_TO_EMAIL      – recipient email (your inbox)
 *   RESEND_API_KEY        – Resend.com API key (or use SMTP below)
 *   RATE_LIMIT_WINDOW_MS  – optional, defaults to 60000 (1 min)
 *   RATE_LIMIT_MAX        – optional, defaults to 5 requests / window
 */

import { NextRequest, NextResponse } from "next/server";

// ── In-memory rate limiter (per IP) ──────────────────────────────────────────
// For production at scale, replace with Redis / Upstash.
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

const WINDOW_MS = parseInt(process.env.RATE_LIMIT_WINDOW_MS || "60000", 10);
const MAX_REQUESTS = parseInt(process.env.RATE_LIMIT_MAX || "5", 10);

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  if (entry.count >= MAX_REQUESTS) return true;

  entry.count++;
  return false;
}

// ── Input validation ──────────────────────────────────────────────────────────
interface ContactPayload {
  name: string;
  email: string;
  project: string;
  budget: string;
}

function validatePayload(body: unknown): ContactPayload | null {
  if (!body || typeof body !== "object") return null;

  const b = body as Record<string, unknown>;

  if (
    typeof b.name !== "string" ||
    typeof b.email !== "string" ||
    typeof b.project !== "string" ||
    typeof b.budget !== "string"
  ) {
    return null;
  }

  const name = b.name.trim();
  const email = b.email.trim().toLowerCase();
  const project = b.project.trim();
  const budget = b.budget.trim();

  if (!name || name.length > 100) return null;
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null;
  if (!project || project.length < 20 || project.length > 5000) return null;
  if (!budget) return null;

  return { name, email, project, budget };
}

// ── Email sender (Resend) ─────────────────────────────────────────────────────
async function sendEmail(payload: ContactPayload): Promise<void> {
  const toEmail = process.env.CONTACT_TO_EMAIL || "aethrynsoftware@gmail.com";
  const resendKey = process.env.RESEND_API_KEY;

  if (!toEmail) {
    console.warn("CONTACT_TO_EMAIL not set — skipping email send");
    return;
  }

  const budgetLabels: Record<string, string> = {
    "under-5k": "Under $5,000",
    "5k-15k": "$5,000 – $15,000",
    "15k-30k": "$15,000 – $30,000",
    "30k-50k": "$30,000 – $50,000",
    "50k-plus": "$50,000+",
    "not-sure": "Not sure yet",
  };

  const htmlBody = `
    <h2>New project enquiry from ${payload.name}</h2>
    <table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px;">
      <tr><td style="padding:8px;font-weight:bold;background:#f8fafc;">Name</td><td style="padding:8px;">${payload.name}</td></tr>
      <tr><td style="padding:8px;font-weight:bold;background:#f8fafc;">Email</td><td style="padding:8px;"><a href="mailto:${payload.email}">${payload.email}</a></td></tr>
      <tr><td style="padding:8px;font-weight:bold;background:#f8fafc;">Budget</td><td style="padding:8px;">${budgetLabels[payload.budget] || payload.budget}</td></tr>
      <tr><td style="padding:8px;font-weight:bold;background:#f8fafc;vertical-align:top;">Project</td><td style="padding:8px;white-space:pre-wrap;">${payload.project}</td></tr>
    </table>
    <p style="margin-top:16px;color:#64748b;font-size:12px;">Submitted via aethryn.com/contact</p>
  `;

  if (resendKey) {
    // Use Resend (https://resend.com)
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "contact@aethryn.com",
        to: [toEmail],
        reply_to: payload.email,
        subject: `New enquiry from ${payload.name} – Aethryn`,
        html: htmlBody,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Resend error: ${err}`);
    }
  } else {
    // Fallback: Nodemailer via SMTP (set SMTP_* env vars)
    // Imported dynamically to avoid edge runtime issues
    const nodemailer = await import("nodemailer");
    const transporter = nodemailer.default.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587", 10),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Aethryn Website" <${process.env.SMTP_USER}>`,
      to: toEmail,
      replyTo: payload.email,
      subject: `New enquiry from ${payload.name} – Aethryn`,
      html: htmlBody,
    });
  }
}

// ── Route handler ─────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  // Rate limiting
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { message: "Too many requests. Please wait a minute and try again." },
      { status: 429 }
    );
  }

  // Parse body
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  // Validate
  const payload = validatePayload(body);
  if (!payload) {
    return NextResponse.json(
      { message: "Please fill in all required fields correctly." },
      { status: 422 }
    );
  }

  // Send email
  try {
    await sendEmail(payload);
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json(
      {
        message:
          "We received your message but failed to send a confirmation. Please email us at aethrynsoftware@gmail.com",
      },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { message: "Your message has been sent. We'll be in touch within 24 hours!" },
    { status: 200 }
  );
}

// Only allow POST
export async function GET() {
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}
