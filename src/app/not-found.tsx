/**
 * Custom 404 Not Found page
 */
import Link from "next/link";

export default function NotFound() {
  return (
    <section
      className="section-padding flex items-center justify-center min-h-[60vh]"
      style={{ background: "#f8fafc" }}
    >
      <div className="text-center px-4">
        <p className="text-8xl font-extrabold" style={{ color: "#2563eb" }}>
          404
        </p>
        <h1 className="text-3xl font-bold mt-4 mb-3" style={{ color: "#0f172a" }}>
          Page not found
        </h1>
        <p className="text-lg mb-8 max-w-md mx-auto" style={{ color: "#64748b" }}>
          Sorry, we couldn&apos;t find the page you&apos;re looking for. Let&apos;s get
          you back on track.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="btn-primary">
            ← Back to home
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
