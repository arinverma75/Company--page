/**
 * Home page – Aethryn Software Solutions
 * Sections: Hero, Services overview, Portfolio preview, Process, Testimonials, CTA
 */
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "We Build Apps & Websites That Help Your Business Grow",
  description:
    "Aethryn Software Solutions builds fast, scalable mobile apps, websites, and cloud solutions for startups and international clients. Get a free quote today.",
  openGraph: {
    title: "Aethryn Software Solutions – Mobile Apps, Websites & Cloud",
    description:
      "We build apps and websites that help your business grow. Mobile apps, web apps, cloud solutions for startups.",
  },
};

// ── Service data ────────────────────────────────────────────────────────────
const SERVICES = [
  {
    id: "mobile",
    icon: "📱",
    title: "Mobile Apps",
    desc: "iOS & Android apps built with React Native or Flutter.",
  },
  {
    id: "websites",
    icon: "🌐",
    title: "Websites",
    desc: "Fast, SEO-friendly marketing sites and landing pages.",
  },
  {
    id: "webapps",
    icon: "⚙️",
    title: "Web Apps",
    desc: "Complex SaaS platforms and internal tools.",
  },
  {
    id: "ecommerce",
    icon: "🛒",
    title: "E-Commerce",
    desc: "Custom online stores built for conversion.",
  },
  {
    id: "backend",
    icon: "🗄️",
    title: "Custom Software & Backend",
    desc: "Scalable APIs, microservices, and database architecture.",
  },
  {
    id: "mvp",
    icon: "🚀",
    title: "MVP Development",
    desc: "Launch your product fast – validate before you scale.",
  },
  {
    id: "design",
    icon: "🎨",
    title: "UI/UX Design",
    desc: "Clean, intuitive interfaces users love to use.",
  },
  {
    id: "cloud",
    icon: "☁️",
    title: "Cloud & Deployment",
    desc: "AWS, GCP, Vercel — CI/CD pipelines and DevOps.",
  },
  {
    id: "support",
    icon: "🛠️",
    title: "Maintenance & Support",
    desc: "Ongoing updates, monitoring, and performance tuning.",
  },
];

// ── Process steps ────────────────────────────────────────────────────────────
const PROCESS = [
  {
    step: "01",
    title: "Discover",
    desc: "We learn your business goals, users, and constraints in a structured kick-off session.",
  },
  {
    step: "02",
    title: "Design",
    desc: "Wireframes, prototypes, and a design system — all reviewed and approved by you.",
  },
  {
    step: "03",
    title: "Build",
    desc: "Agile sprints, weekly demos, and daily communication. Zero surprises.",
  },
  {
    step: "04",
    title: "Launch & Support",
    desc: "We handle deployment, monitoring, and post-launch support to ensure success.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ background: "#f8fafc" }}
        aria-labelledby="hero-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
            style={{ background: "#eff6ff", color: "#2563eb" }}>
            <span className="w-2 h-2 rounded-full bg-current animate-pulse" aria-hidden="true" />
            Now accepting new projects
          </div>

          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto"
            style={{ color: "#0f172a", lineHeight: 1.1 }}
          >
            We build apps and websites that help your{" "}
            <span style={{ color: "#2563eb" }}>business grow</span>
          </h1>

          <p
            className="mt-6 text-xl max-w-2xl mx-auto"
            style={{ color: "#64748b" }}
          >
            Mobile apps, web platforms, and cloud solutions — crafted for
            startups and international clients who demand quality.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary text-base px-8 py-3.5">
              Get a free quote
            </Link>
            <Link href="/portfolio" className="btn-secondary text-base px-8 py-3.5">
              View our work
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ─────────────────────────────────────────────── */}
      <section className="section-padding" id="services" aria-labelledby="services-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label">What we do</span>
            <h2
              id="services-heading"
              className="text-3xl sm:text-4xl font-bold"
              style={{ color: "#0f172a" }}
            >
              Everything your product needs
            </h2>
            <p className="mt-3 text-lg max-w-xl mx-auto" style={{ color: "#64748b" }}>
              From idea to launch and beyond — we cover the full product lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(({ id, icon, title, desc }) => (
              <div key={id} className="card p-6">
                <div
                  className="text-3xl mb-4 w-12 h-12 flex items-center justify-center rounded-xl"
                  style={{ background: "#eff6ff" }}
                  aria-hidden="true"
                >
                  {icon}
                </div>
                <h3
                  className="font-semibold text-lg mb-2"
                  style={{ color: "#0f172a" }}
                >
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/services" className="btn-secondary">
              See all services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO PREVIEW ─────────────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ background: "#f8fafc" }}
        id="work"
        aria-labelledby="portfolio-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="section-label">Our work</span>
            <h2
              id="portfolio-heading"
              className="text-3xl sm:text-4xl font-bold"
              style={{ color: "#0f172a" }}
            >
              Featured Projects & Case Studies
            </h2>
          </div>

          <div className="card p-8 sm:p-12 text-center max-w-3xl mx-auto">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6"
              style={{ background: "#eff6ff" }}
              aria-hidden="true"
            >
              🚀
            </div>
            <h3 className="text-2xl font-bold mb-3" style={{ color: "#0f172a" }}>
              Case studies currently being updated
            </h3>
            <p className="text-base leading-relaxed mb-8 max-w-xl mx-auto" style={{ color: "#64748b" }}>
              We are actively preparing detailed showcases of our recent web and mobile applications. In the meantime, you can explore our full capabilities or contact us directly for project demos and code samples.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Request project samples
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore our services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────────────────── */}
      <section className="section-padding" id="process" aria-labelledby="process-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label">How we work</span>
            <h2
              id="process-heading"
              className="text-3xl sm:text-4xl font-bold"
              style={{ color: "#0f172a" }}
            >
              A process built for clarity
            </h2>
          </div>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" role="list">
            {PROCESS.map(({ step, title, desc }) => (
              <li key={step} className="relative">
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl font-bold text-lg mb-4"
                  style={{ background: "#eff6ff", color: "#2563eb" }}
                  aria-hidden="true"
                >
                  {step}
                </div>
                <h3
                  className="font-semibold text-lg mb-2"
                  style={{ color: "#0f172a" }}
                >
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
                  {desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ background: "#2563eb" }}
        aria-labelledby="cta-heading"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="cta-heading"
            className="text-3xl sm:text-4xl font-extrabold text-white"
          >
            Ready to build something great?
          </h2>
          <p className="mt-4 text-xl" style={{ color: "#bfdbfe" }}>
            Book a free 30-minute discovery call. No commitment, no pressure.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white font-semibold text-base rounded-lg text-blue-700 transition-transform hover:-translate-y-0.5"
            >
              Get a free quote
            </Link>
            <a
              href="https://cal.com/aethryn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white text-white font-semibold text-base rounded-lg transition-all hover:bg-white hover:text-blue-700"
            >
              📅 Book a call
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
