/**
 * ContactForm – client component with:
 * - Frontend validation
 * - Honeypot spam protection (hp_field)
 * - Budget dropdown
 * - Success / error messages
 * - Accessibility: labels, aria, focus management
 */
"use client";

import { useState, useRef } from "react";

interface FormData {
  name: string;
  email: string;
  project: string;
  budget: string;
  hp_field: string; // honeypot — must stay empty
}

interface FieldError {
  name?: string;
  email?: string;
  project?: string;
  budget?: string;
}

const BUDGET_OPTIONS = [
  { value: "", label: "Select your budget range" },
  { value: "under-5k", label: "Under $5,000" },
  { value: "5k-15k", label: "$5,000 – $15,000" },
  { value: "15k-30k", label: "$15,000 – $30,000" },
  { value: "30k-50k", label: "$30,000 – $50,000" },
  { value: "50k-plus", label: "$50,000+" },
  { value: "not-sure", label: "Not sure yet" },
];

function validate(data: FormData): FieldError {
  const errors: FieldError = {};
  if (!data.name.trim()) errors.name = "Please enter your name.";
  if (!data.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!data.project.trim() || data.project.trim().length < 20) {
    errors.project = "Please describe your project in at least 20 characters.";
  }
  if (!data.budget) errors.budget = "Please select a budget range.";
  return errors;
}

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    project: "",
    budget: "",
    hp_field: "",
  });
  const [errors, setErrors] = useState<FieldError>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMsg, setServerMsg] = useState("");
  const successRef = useRef<HTMLDivElement>(null);
  const errorRef = useRef<HTMLDivElement>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear individual field error on change
    if (errors[name as keyof FieldError]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ── Honeypot check ──
    if (form.hp_field) {
      // Bot filled the hidden field — silently succeed
      setStatus("success");
      return;
    }

    // ── Frontend validation ──
    const fieldErrors = validate(form);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      // Focus first error field
      const firstErr = Object.keys(fieldErrors)[0];
      document.getElementById(`field-${firstErr}`)?.focus();
      return;
    }

    setStatus("loading");
    setServerMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          project: form.project,
          budget: form.budget,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", project: "", budget: "", hp_field: "" });
        setErrors({});
        // Move focus to success message
        setTimeout(() => successRef.current?.focus(), 100);
      } else {
        setStatus("error");
        setServerMsg(data.message || "Something went wrong. Please try again.");
        setTimeout(() => errorRef.current?.focus(), 100);
      }
    } catch {
      setStatus("error");
      setServerMsg(
        "Network error. Please check your connection and try again."
      );
      setTimeout(() => errorRef.current?.focus(), 100);
    }
  };

  return (
    <div className="card p-8">
      <h2 className="text-2xl font-bold mb-2" style={{ color: "#0f172a" }}>
        Tell us about your project
      </h2>
      <p className="text-sm mb-8" style={{ color: "#64748b" }}>
        Fill in the form below and we&apos;ll get back to you within 24 hours.
      </p>

      {/* ── Success message ── */}
      {status === "success" && (
        <div
          ref={successRef}
          tabIndex={-1}
          role="alert"
          aria-live="polite"
          className="rounded-xl p-5 mb-6"
          style={{ background: "#f0fdf4", border: "1px solid #bbf7d0" }}
        >
          <p className="font-semibold text-base mb-1" style={{ color: "#166534" }}>
            ✅ Message sent!
          </p>
          <p className="text-sm" style={{ color: "#15803d" }}>
            Thanks for reaching out. We&apos;ll review your project and reply within 24
            hours.
          </p>
        </div>
      )}

      {/* ── Error message ── */}
      {status === "error" && (
        <div
          ref={errorRef}
          tabIndex={-1}
          role="alert"
          aria-live="assertive"
          className="rounded-xl p-5 mb-6"
          style={{ background: "#fef2f2", border: "1px solid #fecaca" }}
        >
          <p className="font-semibold text-base mb-1" style={{ color: "#991b1b" }}>
            ❌ Submission failed
          </p>
          <p className="text-sm" style={{ color: "#b91c1c" }}>
            {serverMsg || "Please try again or email us at aethrynsoftware@gmail.com"}
          </p>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        noValidate
        aria-label="Project enquiry form"
      >
        {/* ── Honeypot field — hidden from real users ── */}
        <div className="hp-field" aria-hidden="true">
          <label htmlFor="hp_field">Leave this blank</label>
          <input
            id="hp_field"
            name="hp_field"
            type="text"
            value={form.hp_field}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="space-y-6">
          {/* Name */}
          <div>
            <label
              htmlFor="field-name"
              className="block text-sm font-medium mb-1.5"
              style={{ color: "#0f172a" }}
            >
              Full name <span aria-hidden="true" style={{ color: "#ef4444" }}>*</span>
            </label>
            <input
              id="field-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              aria-required="true"
              aria-describedby={errors.name ? "name-error" : undefined}
              aria-invalid={!!errors.name}
              value={form.name}
              onChange={handleChange}
              placeholder="Jane Smith"
              className={`input-base ${errors.name ? "error" : ""}`}
            />
            {errors.name && (
              <p
                id="name-error"
                role="alert"
                className="mt-1.5 text-sm"
                style={{ color: "#dc2626" }}
              >
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="field-email"
              className="block text-sm font-medium mb-1.5"
              style={{ color: "#0f172a" }}
            >
              Email address <span aria-hidden="true" style={{ color: "#ef4444" }}>*</span>
            </label>
            <input
              id="field-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              aria-required="true"
              aria-describedby={errors.email ? "email-error" : undefined}
              aria-invalid={!!errors.email}
              value={form.email}
              onChange={handleChange}
              placeholder="jane@company.com"
              className={`input-base ${errors.email ? "error" : ""}`}
            />
            {errors.email && (
              <p
                id="email-error"
                role="alert"
                className="mt-1.5 text-sm"
                style={{ color: "#dc2626" }}
              >
                {errors.email}
              </p>
            )}
          </div>

          {/* Budget */}
          <div>
            <label
              htmlFor="field-budget"
              className="block text-sm font-medium mb-1.5"
              style={{ color: "#0f172a" }}
            >
              Estimated budget <span aria-hidden="true" style={{ color: "#ef4444" }}>*</span>
            </label>
            <select
              id="field-budget"
              name="budget"
              required
              aria-required="true"
              aria-describedby={errors.budget ? "budget-error" : undefined}
              aria-invalid={!!errors.budget}
              value={form.budget}
              onChange={handleChange}
              className={`input-base ${errors.budget ? "error" : ""}`}
              style={{ cursor: "pointer" }}
            >
              {BUDGET_OPTIONS.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
            {errors.budget && (
              <p
                id="budget-error"
                role="alert"
                className="mt-1.5 text-sm"
                style={{ color: "#dc2626" }}
              >
                {errors.budget}
              </p>
            )}
          </div>

          {/* Project details */}
          <div>
            <label
              htmlFor="field-project"
              className="block text-sm font-medium mb-1.5"
              style={{ color: "#0f172a" }}
            >
              Project details <span aria-hidden="true" style={{ color: "#ef4444" }}>*</span>
            </label>
            <textarea
              id="field-project"
              name="project"
              rows={5}
              required
              aria-required="true"
              aria-describedby={
                errors.project ? "project-error" : "project-hint"
              }
              aria-invalid={!!errors.project}
              value={form.project}
              onChange={handleChange}
              placeholder="Tell us about your project: what are you building, who is it for, and what stage are you at?"
              className={`input-base resize-none ${errors.project ? "error" : ""}`}
            />
            <p
              id="project-hint"
              className="mt-1.5 text-xs"
              style={{ color: "#94a3b8" }}
            >
              Minimum 20 characters. The more detail, the better.
            </p>
            {errors.project && (
              <p
                id="project-error"
                role="alert"
                className="mt-1 text-sm"
                style={{ color: "#dc2626" }}
              >
                {errors.project}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-primary w-full justify-center text-base py-3.5"
            aria-disabled={status === "loading"}
          >
            {status === "loading" ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Sending…
              </>
            ) : (
              "Send message →"
            )}
          </button>

          <p className="text-xs text-center" style={{ color: "#94a3b8" }}>
            By submitting this form you agree to our{" "}
            <a href="/privacy" className="underline" style={{ color: "#2563eb" }}>
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </form>
    </div>
  );
}
