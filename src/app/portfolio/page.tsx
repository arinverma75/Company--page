/**
 * Portfolio page – project showcase with tech tags and case study links
 */
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio – Our Work & Case Studies",
  description:
    "Browse Aethryn's portfolio of mobile apps, websites, web apps, and cloud solutions built for startups and international clients.",
  openGraph: {
    title: "Portfolio – Aethryn Software Solutions",
    description:
      "Projects we've built: mobile apps, SaaS platforms, e-commerce stores, and more.",
  },
};

export default function PortfolioPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="section-padding" style={{ background: "#f8fafc" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label">Our work</span>
          <h1
            className="text-4xl sm:text-5xl font-extrabold mt-2"
            style={{ color: "#0f172a" }}
          >
            Case Studies & Projects
          </h1>
          <p className="mt-4 text-xl max-w-2xl mx-auto" style={{ color: "#64748b" }}>
            We engineer high-performance mobile apps, web platforms, and backend systems for businesses and startups.
          </p>
        </div>
      </section>

      {/* ── In-Progress Showcase ── */}
      <section className="section-padding" aria-label="Portfolio status">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="card p-8 sm:p-14 text-center mb-12">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6"
              style={{ background: "#eff6ff" }}
              aria-hidden="true"
            >
              💼
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: "#0f172a" }}>
              Public case studies are being updated
            </h2>
            <p className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8" style={{ color: "#64748b" }}>
              Many of our client projects are proprietary or developed under non-disclosure agreements (NDAs). We are currently compiling sanitized case studies, architecture breakdowns, and interactive walk-throughs to showcase publicly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary text-base px-8 py-3.5">
                Request private demo & samples
              </Link>
              <Link href="/services" className="btn-secondary text-base px-8 py-3.5">
                View what we build
              </Link>
            </div>
          </div>

          {/* Capabilities overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                style={{ background: "#eff6ff" }}
                aria-hidden="true"
              >
                📱
              </div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#0f172a" }}>
                Mobile Applications
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#64748b" }}>
                Cross-platform and native apps built with Flutter, React Native, and Android (Java & Kotlin).
              </p>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {["Flutter", "React Native", "Android", "Spring Boot"].map((t) => (
                  <span key={t} className="tag text-xs">{t}</span>
                ))}
              </div>
            </div>

            <div className="card p-6">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                style={{ background: "#f0fdf4" }}
                aria-hidden="true"
              >
                🌐
              </div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#0f172a" }}>
                Web Applications
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#64748b" }}>
                Scalable dashboards, SaaS platforms, and dynamic web applications built with Next.js and React.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {["Next.js", "React", "TypeScript", "Tailwind"].map((t) => (
                  <span key={t} className="tag text-xs">{t}</span>
                ))}
              </div>
            </div>

            <div className="card p-6">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                style={{ background: "#fefce8" }}
                aria-hidden="true"
              >
                ⚙️
              </div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#0f172a" }}>
                Backend & Cloud
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#64748b" }}>
                Secure REST APIs, database architecture, and cloud deployment pipelines on AWS and Vercel.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {["Spring Boot", "Node.js", "PostgreSQL", "AWS"].map((t) => (
                  <span key={t} className="tag text-xs">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="section-padding"
        style={{ background: "#f8fafc", borderTop: "1px solid #e2e8f0" }}
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#0f172a" }}>
            Have a project in mind?
          </h2>
          <p className="text-lg mb-8" style={{ color: "#64748b" }}>
            Let&apos;s talk about your idea and how we can bring it to life.
          </p>
          <Link href="/contact" className="btn-primary">
            Start a project →
          </Link>
        </div>
      </section>
    </>
  );
}
