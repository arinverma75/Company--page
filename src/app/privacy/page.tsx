/**
 * Privacy Policy page
 * Required for Google Analytics, GDPR, and general trust.
 */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Aethryn Software Solutions privacy policy — how we collect, use, and protect your data.",
  robots: { index: true, follow: false },
};

const LAST_UPDATED = "28 September 2026";

export default function PrivacyPage() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold mb-2" style={{ color: "#0f172a" }}>
          Privacy Policy
        </h1>
        <p className="text-sm mb-10" style={{ color: "#94a3b8" }}>
          Last updated: {LAST_UPDATED}
        </p>

        <div className="space-y-8 text-base leading-relaxed" style={{ color: "#64748b" }}>
          <section aria-labelledby="intro">
            <h2 id="intro" className="text-xl font-bold mb-3" style={{ color: "#0f172a" }}>
              1. Introduction
            </h2>
            <p>
              Aethryn Software Solutions (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or
              &ldquo;our&rdquo;) is committed to protecting your personal information. This
              Privacy Policy explains what data we collect, how we use it, and your
              rights.
            </p>
          </section>

          <section aria-labelledby="data-collected">
            <h2 id="data-collected" className="text-xl font-bold mb-3" style={{ color: "#0f172a" }}>
              2. Information we collect
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Contact form data:</strong> Your name, email address, project
                description, and budget range when you submit our contact form.
              </li>
              <li>
                <strong>Usage data:</strong> Anonymised analytics data including pages
                visited, time on site, and general geographic region, collected via
                Google Analytics 4.
              </li>
              <li>
                <strong>Technical data:</strong> IP address, browser type, and device
                type for security and rate-limiting purposes.
              </li>
            </ul>
          </section>

          <section aria-labelledby="how-we-use">
            <h2 id="how-we-use" className="text-xl font-bold mb-3" style={{ color: "#0f172a" }}>
              3. How we use your information
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To respond to your project enquiries and provide quotes.</li>
              <li>To improve our website and services using anonymous analytics.</li>
              <li>To protect against spam and fraudulent submissions.</li>
            </ul>
            <p className="mt-3">
              We do <strong>not</strong> sell, rent, or share your personal data with
              third parties for marketing purposes.
            </p>
          </section>

          <section aria-labelledby="cookies">
            <h2 id="cookies" className="text-xl font-bold mb-3" style={{ color: "#0f172a" }}>
              4. Cookies & analytics
            </h2>
            <p>
              We use Google Analytics 4 with IP anonymisation enabled. GA4 uses cookies
              to track aggregate usage. You can opt out by installing the{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#2563eb" }}
              >
                Google Analytics Opt-out Browser Add-on
              </a>
              .
            </p>
          </section>

          <section aria-labelledby="data-retention">
            <h2 id="data-retention" className="text-xl font-bold mb-3" style={{ color: "#0f172a" }}>
              5. Data retention
            </h2>
            <p>
              Contact form submissions are retained in our email inbox for up to 2 years
              for business correspondence purposes. Analytics data is retained for 14
              months as per Google Analytics default settings.
            </p>
          </section>

          <section aria-labelledby="your-rights">
            <h2 id="your-rights" className="text-xl font-bold mb-3" style={{ color: "#0f172a" }}>
              6. Your rights
            </h2>
            <p>
              Depending on your jurisdiction, you may have the right to access, correct,
              delete, or restrict processing of your personal data. To exercise these
              rights, please contact us at{" "}
              <a href="mailto:privacy@aethryn.com" style={{ color: "#2563eb" }}>
                privacy@aethryn.com
              </a>
              .
            </p>
          </section>

          <section aria-labelledby="security">
            <h2 id="security" className="text-xl font-bold mb-3" style={{ color: "#0f172a" }}>
              7. Security
            </h2>
            <p>
              We implement appropriate technical and organisational measures to protect
              your data, including HTTPS encryption, rate limiting on form submissions,
              and access controls.
            </p>
          </section>

          <section aria-labelledby="contact-privacy">
            <h2 id="contact-privacy" className="text-xl font-bold mb-3" style={{ color: "#0f172a" }}>
              8. Contact us
            </h2>
            <p>
              If you have questions about this Privacy Policy, please contact us:
            </p>
            <address className="not-italic mt-2">
              <strong>Aethryn Software Solutions</strong>
              <br />
              <a href="mailto:privacy@aethryn.com" style={{ color: "#2563eb" }}>
                privacy@aethryn.com
              </a>
            </address>
          </section>
        </div>
      </div>
    </section>
  );
}
