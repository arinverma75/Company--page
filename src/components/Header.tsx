/**
 * Header / Navigation component
 * Features: sticky, mobile-responsive hamburger menu, active link highlighting,
 *           keyboard navigation, "Get a free quote" CTA button.
 */
"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/#process", label: "Process" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Add shadow when user scrolls down
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change without cascading renders
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMenuOpen(false);
  }

  // Close mobile menu on Escape
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setMenuOpen(false);
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-40 w-full bg-white transition-shadow duration-200 ${
        scrolled ? "shadow-sm" : ""
      }`}
      style={{ borderBottom: "1px solid #e2e8f0" }}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        style={{ height: "4rem" }}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-xl"
          style={{ color: "#0f172a" }}
          aria-label="Aethryn Software Solutions – home"
        >
          {/* Inline SVG logo mark */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            aria-hidden="true"
          >
            <rect width="32" height="32" rx="8" fill="#2563EB" />
            <path
              d="M8 24L16 8L24 24M11.5 18.5H20.5"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Aethryn</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`nav-link ${
                  pathname === href || (href !== "/" && pathname.startsWith(href.split("#")[0]))
                    ? "active"
                    : ""
                }`}
                aria-current={pathname === href ? "page" : undefined}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link href="/contact" className="btn-primary hidden md:inline-flex">
          Get a free quote
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-md"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span
            className="block w-6 h-0.5 rounded-full transition-transform duration-200"
            style={{
              background: "#0f172a",
              transform: menuOpen ? "translateY(8px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block w-6 h-0.5 rounded-full transition-opacity duration-200"
            style={{
              background: "#0f172a",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-0.5 rounded-full transition-transform duration-200"
            style={{
              background: "#0f172a",
              transform: menuOpen ? "translateY(-8px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile menu drawer */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-white transition-all duration-300 overflow-hidden`}
        style={{
          maxHeight: menuOpen ? "100vh" : "0",
          borderTop: menuOpen ? "1px solid #e2e8f0" : "none",
        }}
        aria-hidden={!menuOpen}
      >
        <ul className="flex flex-col px-4 py-4 gap-1" role="list">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="block py-3 px-2 rounded-lg text-base font-medium"
                style={{
                  color:
                    pathname === href || pathname.startsWith(href.split("#")[0])
                      ? "#2563eb"
                      : "#0f172a",
                  background:
                    pathname === href ? "#eff6ff" : "transparent",
                }}
                tabIndex={menuOpen ? 0 : -1}
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link
              href="/contact"
              className="btn-primary w-full justify-center"
              tabIndex={menuOpen ? 0 : -1}
            >
              Get a free quote
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
