/**
 * Contact page – server component with metadata
 * Renders ContactForm client component
 */
import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us – Start a Project or Book a Call",
  description:
    "Get in touch with Aethryn Software Solutions. Tell us about your project and get a free quote, or book a discovery call.",
  openGraph: {
    title: "Contact – Aethryn Software Solutions",
    description:
      "Start a project with Aethryn. Tell us about your idea and get a free quote.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="section-padding" style={{ background: "#f8fafc" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label">Let&apos;s talk</span>
          <h1
            className="text-4xl sm:text-5xl font-extrabold mt-2"
            style={{ color: "#0f172a" }}
          >
            Start a project
          </h1>
          <p className="mt-4 text-xl max-w-xl mx-auto" style={{ color: "#64748b" }}>
            Tell us about your idea and we&apos;ll get back to you within 24 hours with
            a free quote.
          </p>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* Contact info sidebar */}
            <aside className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-bold text-lg mb-4" style={{ color: "#0f172a" }}>
                  Other ways to reach us
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-base"
                      style={{ background: "#eff6ff" }}
                      aria-hidden="true"
                    >
                      ✉️
                    </div>
                    <div>
                      <p className="text-sm font-medium" style={{ color: "#0f172a" }}>Email</p>
                      <a
                        href="mailto:aethrynsoftware@gmail.com"
                        className="text-sm"
                        style={{ color: "#2563eb" }}
                      >
                        aethrynsoftware@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-base"
                      style={{ background: "#eff6ff" }}
                      aria-hidden="true"
                    >
                      💬
                    </div>
                    <div>
                      <p className="text-sm font-medium" style={{ color: "#0f172a" }}>WhatsApp</p>
                      <a
                        href="https://wa.me/918957432539"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm"
                        style={{ color: "#2563eb" }}
                      >
                        Chat on WhatsApp (+91 89574 32539)
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-base"
                      style={{ background: "#eff6ff" }}
                      aria-hidden="true"
                    >
                      📅
                    </div>
                    <div>
                      <p className="text-sm font-medium" style={{ color: "#0f172a" }}>Book a call</p>
                      <a
                        href="https://cal.com/aethryn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm"
                        style={{ color: "#2563eb" }}
                      >
                        Schedule a 30-min discovery call →
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-base"
                      style={{ background: "#eff6ff" }}
                      aria-hidden="true"
                    >
                      🔗
                    </div>
                    <div>
                      <p className="text-sm font-medium" style={{ color: "#0f172a" }}>LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/company/aethryn-software-solutions"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm"
                        style={{ color: "#2563eb" }}
                      >
                        Aethryn on LinkedIn →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response time badge */}
              <div
                className="rounded-xl p-5"
                style={{ background: "#f0fdf4", border: "1px solid #bbf7d0" }}
              >
                <p className="font-semibold text-sm mb-1" style={{ color: "#166534" }}>
                  ⚡ Fast response
                </p>
                <p className="text-sm" style={{ color: "#15803d" }}>
                  We reply to all enquiries within 24 hours on business days.
                </p>
              </div>

              {/* What to expect */}
              <div>
                <h3 className="font-bold text-base mb-4" style={{ color: "#0f172a" }}>
                  What happens next?
                </h3>
                <ol className="space-y-3" role="list">
                  {[
                    "We review your submission within 24 hours",
                    "We schedule a free 30-min discovery call",
                    "We send a detailed proposal & quote",
                    "You decide — no pressure, no commitment",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "#64748b" }}>
                      <span
                        className="w-5 h-5 rounded-full text-xs font-bold text-white flex-shrink-0 flex items-center justify-center mt-0.5"
                        style={{ background: "#2563eb" }}
                      >
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </aside>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
