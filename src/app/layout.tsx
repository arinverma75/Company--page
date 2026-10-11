/**
 * Root layout for Aethryn Software Solutions
 * Handles: metadata, Open Graph, Google Analytics, fonts
 */
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import GoogleAnalytics from "@/components/GoogleAnalytics";

// ── Base metadata (override per page) ──────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://aethrynsoftwaresolution.com"
  ),
  title: {
    default: "Aethryn Software Solutions – Mobile Apps, Websites & Cloud",
    template: "%s | Aethryn Software Solutions",
  },
  description:
    "Aethryn Software Solutions builds fast, scalable mobile apps, websites, and cloud solutions for startups and international clients. Get a free quote today.",
  keywords: [
    "software development",
    "mobile app development",
    "web development",
    "cloud solutions",
    "MVP development",
    "UI/UX design",
    "startup development",
  ],
  authors: [{ name: "Aethryn Software Solutions" }],
  creator: "Aethryn Software Solutions",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Aethryn Software Solutions",
    title: "Aethryn Software Solutions – Mobile Apps, Websites & Cloud",
    description:
      "We build fast, scalable mobile apps, websites, and cloud solutions for startups and international clients.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aethryn Software Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aethryn Software Solutions",
    description:
      "We build fast, scalable mobile apps, websites, and cloud solutions.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to Google Fonts for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        {/* Skip to main content for keyboard/screen reader users */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        {/* Google Analytics (loads after hydration, no blocking) */}
        <GoogleAnalytics
          gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ""}
        />

        <Header />

        <main id="main-content" tabIndex={-1}>
          {children}
        </main>

        <Footer />

        {/* Floating WhatsApp button */}
        <WhatsAppButton
          phone={process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+918957432539"}
          message="Hi! I'd like to discuss a project with Aethryn Software Solutions"
        />
      </body>
    </html>
  );
}
