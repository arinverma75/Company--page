/**
 * About page – company story, team, and core values
 */
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us – Our Story, Team & Values",
  description:
    "Learn about Aethryn Software Solutions: who we are, our mission, and the values that guide every project we build.",
  openGraph: {
    title: "About Aethryn Software Solutions",
    description:
      "We are a software development studio that builds fast, scalable digital products for startups worldwide.",
  },
};

const TEAM = [
  {
    name: "Arin Verma",
    role: "Co-Founder | Android & Backend Developer",
    bio: "Former Android developer intern at Main Craft Technology and AI intern at IBM. Builds mobile apps and backend systems with Java, Kotlin, Spring Boot, and Python.",
    initials: "AV",
  },
  {
    name: "Ayush Gupta",
    role: "Co-Founder | Flutter & UI/UX Developer",
    bio: "Former Mobile App Developer intern at Zyntro Software Solutions. Builds cross-platform apps and backend services with Flutter, Dart, Java, and Spring Boot.",
    initials: "AG",
  }

];

const VALUES = [
  {
    icon: "💬",
    title: "Clear Communication",
    desc: "You'll always know where your project stands. We send weekly updates, hold demos every sprint, and are available across time zones.",
  },
  {
    icon: "💰",
    title: "Transparent Pricing",
    desc: "No surprises, no hidden fees. We provide detailed estimates upfront and flag any scope changes before they affect your budget.",
  },
  {
    icon: "✨",
    title: "Quality Code",
    desc: "We write clean, documented, tested code. Every project is reviewed, linted, and delivered with thorough documentation.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="section-padding" style={{ background: "#f8fafc" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="section-label">Our story</span>
            <h1
              className="text-4xl sm:text-5xl font-extrabold mt-2"
              style={{ color: "#0f172a" }}
            >
              Built by developers who care about your product
            </h1>
            <p className="mt-6 text-xl leading-relaxed" style={{ color: "#64748b" }}>
              Aethryn was founded with a simple belief: great software should be
              accessible to every business, not just big enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="prose-content">
              <h2 className="text-2xl font-bold mb-6" style={{ color: "#0f172a" }}>
                Who we are
              </h2>
              <p>
                Aethryn Software Solutions is a boutique software development studio
                specialising in mobile apps, web platforms, and cloud infrastructure for
                startups and scale-ups worldwide.
              </p>
              <p>
                We started as a small team of engineers frustrated by agencies that
                overpromised and underdelivered. We set out to build something different —
                a studio where communication is proactive, timelines are realistic, and the
                code we ship is something we&apos;re genuinely proud of.
              </p>
              <p>
                We collaborate directly with founders, innovators, and businesses to turn ideas into robust, high-performance software. We take end-to-end ownership from initial wireframes and system architecture to production release and monitoring.
              </p>
            </div>

            {/* Principles card */}
            <div className="card p-8 sm:p-10">
              <h3 className="text-xl font-bold mb-6" style={{ color: "#0f172a" }}>
                How we work with you
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Founder-Led Development",
                    desc: "You talk directly with core engineers building your product, not non-technical middlemen.",
                  },
                  {
                    title: "Modern Tech Standards",
                    desc: "We write clean, modular, and maintainable code with proven frameworks like Flutter, React Native, and Next.js.",
                  },
                  {
                    title: "Agile & Transparent",
                    desc: "Regular sprint demos, continuous feedback cycles, and realistic roadmaps with zero surprises.",
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-0.5" aria-hidden="true">✓</span>
                    <div>
                      <p className="font-semibold text-sm" style={{ color: "#0f172a" }}>
                        {title}
                      </p>
                      <p className="text-xs sm:text-sm mt-0.5" style={{ color: "#64748b" }}>
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section
        className="section-padding"
        style={{ background: "#f8fafc" }}
        aria-labelledby="values-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label">What drives us</span>
            <h2
              id="values-heading"
              className="text-3xl sm:text-4xl font-bold"
              style={{ color: "#0f172a" }}
            >
              Our core values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map(({ icon, title, desc }) => (
              <div key={title} className="card p-8 text-center">
                <div
                  className="text-4xl w-16 h-16 flex items-center justify-center rounded-2xl mx-auto mb-5"
                  style={{ background: "#eff6ff" }}
                  aria-hidden="true"
                >
                  {icon}
                </div>
                <h3
                  className="font-bold text-xl mb-3"
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
        </div>
      </section>

      {/* ── Team ── */}
      <section className="section-padding" aria-labelledby="team-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label">The people</span>
            <h2
              id="team-heading"
              className="text-3xl sm:text-4xl font-bold"
              style={{ color: "#0f172a" }}
            >
              Meet the team
            </h2>
            <p className="mt-3 text-lg" style={{ color: "#64748b" }}>
              A small, focused team with deep expertise in every layer of your stack.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map(({ name, role, bio, initials }) => (
              <div key={name} className="card p-6 text-center">
                {/* Avatar placeholder */}
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4"
                  style={{ background: "#2563eb" }}
                  aria-label={`${name} avatar`}
                >
                  {initials}
                </div>
                <h3 className="font-bold text-base" style={{ color: "#0f172a" }}>
                  {name}
                </h3>
                <p
                  className="text-sm font-medium mt-0.5 mb-3"
                  style={{ color: "#2563eb" }}
                >
                  {role}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
                  {bio}
                </p>
              </div>
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
            Let&apos;s work together
          </h2>
          <p className="text-lg mb-8" style={{ color: "#64748b" }}>
            We take on a select number of new projects each quarter. Start the
            conversation today.
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
