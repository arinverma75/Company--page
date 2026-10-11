/**
 * Services page – full 3×3 service card grid with detailed descriptions
 */
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services – Mobile Apps, Web Development & Cloud Solutions",
  description:
    "Aethryn builds mobile apps, websites, web apps, e-commerce stores, custom software, MVPs, UI/UX designs, cloud solutions, and provides ongoing maintenance.",
  openGraph: {
    title: "Our Services – Aethryn Software Solutions",
    description:
      "Full-stack software development services for startups and scale-ups.",
  },
};

const SERVICES = [
  {
    id: "mobile",
    icon: "📱",
    title: "Mobile Apps",
    desc: "Native-quality iOS & Android apps built with React Native or Flutter. From MVP to production-ready, we handle the full lifecycle.",
    bullets: ["iOS & Android", "React Native / Flutter", "App Store submission", "Push notifications & offline support"],
  },
  {
    id: "websites",
    icon: "🌐",
    title: "Websites",
    desc: "Lightning-fast marketing sites, landing pages, and blogs optimised for search engines and conversions.",
    bullets: ["Next.js / Astro", "Core Web Vitals optimized", "SEO-first architecture", "CMS integration"],
  },
  {
    id: "webapps",
    icon: "⚙️",
    title: "Web Apps",
    desc: "Complex single-page applications, SaaS dashboards, and internal tools built with modern React.",
    bullets: ["React / Next.js", "Real-time features", "Role-based access control", "Scalable architecture"],
  },
  {
    id: "ecommerce",
    icon: "🛒",
    title: "E-Commerce",
    desc: "Custom storefronts and headless commerce solutions designed to maximise revenue and conversion.",
    bullets: ["Shopify / WooCommerce", "Custom checkout flows", "Payment gateway integration", "Inventory management"],
  },
  {
    id: "backend",
    icon: "🗄️",
    title: "Custom Software & Backend",
    desc: "Scalable REST and GraphQL APIs, microservices, event-driven systems, and database design.",
    bullets: ["Node.js / Python / Go", "PostgreSQL / MongoDB", "API design & docs", "Microservices & queues"],
  },
  {
    id: "mvp",
    icon: "🚀",
    title: "MVP Development",
    desc: "Go from idea to live product in 4–8 weeks. We help you validate assumptions before heavy investment.",
    bullets: ["Rapid prototyping", "User-ready in weeks", "Investor-deck ready", "Feedback loop built-in"],
  },
  {
    id: "design",
    icon: "🎨",
    title: "UI/UX Design",
    desc: "Research-driven design that creates intuitive, beautiful interfaces your users actually enjoy.",
    bullets: ["User research", "Wireframes & prototypes", "Design systems", "Figma handoff"],
  },
  {
    id: "cloud",
    icon: "☁️",
    title: "Cloud & Deployment",
    desc: "Reliable, auto-scaling infrastructure on AWS, GCP, or Vercel with CI/CD pipelines and monitoring.",
    bullets: ["AWS / GCP / Azure", "Docker & Kubernetes", "CI/CD pipelines", "Uptime monitoring"],
  },
  {
    id: "support",
    icon: "🛠️",
    title: "Maintenance & Support",
    desc: "Ongoing retainer packages to keep your product fast, secure, and up to date.",
    bullets: ["Monthly retainers", "Security patches", "Performance audits", "Priority support SLA"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Page hero ── */}
      <section className="section-padding" style={{ background: "#f8fafc" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label">What we offer</span>
          <h1
            className="text-4xl sm:text-5xl font-extrabold mt-2"
            style={{ color: "#0f172a" }}
          >
            Our Services
          </h1>
          <p className="mt-4 text-xl max-w-2xl mx-auto" style={{ color: "#64748b" }}>
            End-to-end software development for startups and scale-ups. We cover
            every layer of your product stack.
          </p>
        </div>
      </section>

      {/* ── Services grid ── */}
      <section className="section-padding" aria-label="Service offerings">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map(({ id, icon, title, desc, bullets }) => (
              <article
                key={id}
                id={id}
                className="card p-8 flex flex-col"
              >
                <div
                  className="text-3xl w-14 h-14 flex items-center justify-center rounded-xl mb-5"
                  style={{ background: "#eff6ff" }}
                  aria-hidden="true"
                >
                  {icon}
                </div>
                <h2
                  className="font-bold text-xl mb-3"
                  style={{ color: "#0f172a" }}
                >
                  {title}
                </h2>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "#64748b" }}>
                  {desc}
                </p>
                <ul className="space-y-2 mt-auto" role="list">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm" style={{ color: "#64748b" }}>
                      <svg
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M13.5 4.5L6 12L2.5 8.5"
                          stroke="#2563eb"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
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
            Not sure what you need?
          </h2>
          <p className="text-lg mb-8" style={{ color: "#64748b" }}>
            Book a free 30-minute discovery call. We&apos;ll help you figure out the
            best path forward.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Get a free quote
            </Link>
            <a
              href="https://cal.com/aethryn"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              📅 Book a call
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
