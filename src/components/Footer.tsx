/**
 * Footer component
 * Includes: logo, quick links, social links, privacy policy link, copyright.
 */
import Link from "next/link";

const QUICK_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Our Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
];

const SERVICES = [
  { href: "/services#mobile", label: "Mobile Apps" },
  { href: "/services#web", label: "Websites" },
  { href: "/services#cloud", label: "Cloud & Deployment" },
  { href: "/services#mvp", label: "MVP Development" },
  { href: "/services#design", label: "UI/UX Design" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{ background: "#0f172a", color: "#94a3b8" }}
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-bold text-xl text-white"
              aria-label="Aethryn – home"
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <rect width="32" height="32" rx="8" fill="#2563EB" />
                <path
                  d="M8 24L16 8L24 24M11.5 18.5H20.5"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Aethryn
            </Link>
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              We build fast, scalable mobile apps, websites, and cloud solutions
              for startups and international clients.
            </p>

            {/* LinkedIn */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/aethryn-software-solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                aria-label="Aethryn on LinkedIn (opens in new tab)"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Company
            </h3>
            <ul className="space-y-3" role="list">
              {QUICK_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Services
            </h3>
            <ul className="space-y-3" role="list">
              {SERVICES.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / CTA */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Get in touch
            </h3>
            <p className="text-sm mb-4">
              Ready to start your next project? We&apos;d love to hear from you.
            </p>
            <Link
              href="/contact"
              className="btn-primary text-sm"
              style={{ padding: "0.625rem 1.25rem" }}
            >
              Get a free quote
            </Link>
            <p className="mt-4 text-sm">
              <a
                href="mailto:aethrynsoftware@gmail.com"
                className="hover:text-white transition-colors"
              >
                aethrynsoftware@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm"
          style={{ borderTop: "1px solid #1e293b" }}
        >
          <p>© {year} Aethryn Software Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
