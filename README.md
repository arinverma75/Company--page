# Aethryn Software Solutions – Website

A fast, SEO-friendly, fully accessible business website for **Aethryn Software Solutions**, built with **Next.js 16 (App Router)** and **Tailwind CSS v4**.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 |
| Language | TypeScript |
| Email (primary) | [Resend](https://resend.com) |
| Email (fallback) | Nodemailer (SMTP) |
| Deployment | Vercel (recommended) or Netlify |
| Analytics | Google Analytics 4 |

---

## Pages & Features

| Page | Route | Description |
|---|---|---|
| Home | `/` | Hero, services overview, portfolio preview, process, testimonials, CTA |
| Services | `/services` | Full 3×3 service card grid with feature bullets |
| Portfolio | `/portfolio` | 6 project cards with tech tags and result badges |
| About | `/about` | Company story, team, values |
| Contact | `/contact` | Form with validation, spam protection, email sending |
| Privacy | `/privacy` | GDPR-ready privacy policy |
| 404 | auto | Custom not-found page |

### Key Features

- ✅ **Mobile-first** responsive layout, no horizontal scroll
- ✅ **SEO**: page titles, meta descriptions, Open Graph tags, sitemap.xml, robots.txt
- ✅ **Performance**: WebP images, lazy loading, minimal JS, `compress: true`
- ✅ **Security**: HTTP security headers (CSP, HSTS, X-Frame-Options, etc.), no secrets in frontend
- ✅ **Accessibility**: keyboard navigation, ARIA labels, skip link, focus indicators, WCAG-compliant contrast
- ✅ **Contact form**: frontend + backend validation, honeypot spam protection, rate limiting, Resend email
- ✅ **Google Analytics 4** with IP anonymisation
- ✅ **Floating WhatsApp button** + Book a Call link
- ✅ **Privacy policy** page

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (metadata, GA, Header, Footer)
│   ├── page.tsx            # Home page
│   ├── globals.css         # Design tokens & global styles
│   ├── sitemap.ts          # Dynamic sitemap.xml
│   ├── robots.ts           # robots.txt
│   ├── not-found.tsx       # Custom 404
│   ├── about/page.tsx
│   ├── contact/
│   │   ├── page.tsx        # Contact page (server component)
│   │   └── ContactForm.tsx # Client-side form with validation
│   ├── portfolio/page.tsx
│   ├── privacy/page.tsx
│   ├── services/page.tsx
│   └── api/
│       └── contact/route.ts  # Form submission API (backend validation + email)
├── components/
│   ├── Header.tsx          # Sticky nav with mobile menu
│   ├── Footer.tsx          # Footer with links
│   ├── WhatsAppButton.tsx  # Floating WhatsApp CTA
│   └── GoogleAnalytics.tsx # GA4 script loader
public/
├── site.webmanifest
└── og-image.png            # (add your own 1200×630 OG image)
```

---

## Local Development Setup

### Prerequisites

- Node.js 20+ (LTS)
- npm 10+

### 1. Clone and install

```bash
git clone <your-repo-url>
cd aethryn-web
npm install
```

### 2. Configure environment variables

```bash
cp .env.example .env.local
```

Open `.env.local` and fill in:

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Yes | Your domain, e.g. `https://aethryn.com` |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Optional | Google Analytics 4 ID (format: `G-XXXXXXXXXX`) |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Yes | WhatsApp number with country code |
| `CONTACT_TO_EMAIL` | Yes | Where contact form submissions are sent |
| `RESEND_API_KEY` | Recommended | Get free key at [resend.com](https://resend.com) |
| `SMTP_HOST` / `SMTP_USER` / `SMTP_PASS` | Alt. to Resend | SMTP credentials if not using Resend |

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Deployment Guide

### Option A: Vercel (Recommended)

Vercel is the easiest option — built by the creators of Next.js, with automatic CI/CD.

#### Steps:

1. **Push your code to GitHub** (or GitLab / Bitbucket)

2. **Import project on Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Git Repository"
   - Select your repository
   - Vercel auto-detects Next.js — no build config needed

3. **Add environment variables**
   - In Vercel dashboard → Settings → Environment Variables
   - Add all variables from your `.env.local`
   - Set them for **Production**, **Preview**, and **Development** as appropriate

4. **Add custom domain**
   - Vercel dashboard → Settings → Domains
   - Add `aethryn.com` and `www.aethryn.com`
   - Update your DNS records as instructed:
     - `A` record: `76.76.21.21` (Vercel IP)
     - Or use Vercel nameservers for automatic SSL management

5. **Deploy**
   - Push to `main` branch → auto-deploys to production
   - Push to any other branch → creates a preview URL

#### Vercel CLI (alternative)

```bash
npm install -g vercel
vercel login
vercel --prod
```

---

### Option B: Netlify

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   netlify login
   ```

2. **Create `netlify.toml`** in project root:
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"

   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

3. **Install the Next.js plugin**
   ```bash
   npm install --save-dev @netlify/plugin-nextjs
   ```

4. **Deploy**
   ```bash
   netlify deploy --prod
   ```

5. **Add environment variables**
   - Netlify dashboard → Site configuration → Environment variables
   - Add all variables from `.env.example`

6. **Custom domain**
   - Netlify dashboard → Domain management → Add domain
   - Update DNS `A` record to Netlify's IP (shown in dashboard)

---

## Custom Domain DNS Configuration

For both platforms, typical DNS setup:

| Type | Name | Value |
|---|---|---|
| `A` | `@` | Platform IP (shown in dashboard) |
| `CNAME` | `www` | `aethryn.com` |

SSL/TLS certificates are **automatically provisioned** by both Vercel and Netlify via Let's Encrypt.

---

## Performance Targets

| Metric | Target |
|---|---|
| Lighthouse Performance | 90+ |
| Lighthouse Accessibility | 95+ |
| Lighthouse SEO | 100 |
| Lighthouse Best Practices | 95+ |
| Core Web Vitals LCP | < 2.5s |
| Core Web Vitals CLS | < 0.1 |
| Core Web Vitals FID | < 100ms |

### Tips for 90+ Lighthouse

- Add real WebP images to `/public` (< 100KB each)
- Replace emoji icons in service cards with optimised SVG icons
- Enable Vercel's Edge Caching for static assets
- Add `priority` prop to above-the-fold `<Image>` components

---

## Customisation

### Updating content

All content is in the page files — no CMS required:

- **Services**: `src/app/services/page.tsx` → `SERVICES` array
- **Portfolio**: `src/app/portfolio/page.tsx` → `PROJECTS` array  
- **Team**: `src/app/about/page.tsx` → `TEAM` array
- **Testimonials**: `src/app/page.tsx` → `TESTIMONIALS` array
- **Contact email**: Set `CONTACT_TO_EMAIL` env var

### Updating branding

- **Colors**: `src/app/globals.css` → `:root` CSS variables
- **Logo**: `src/components/Header.tsx` and `Footer.tsx` → SVG logo markup
- **Font**: `src/app/globals.css` → `@import url(...)` and `--font-family`

### Adding Google Analytics

1. Create a GA4 property at [analytics.google.com](https://analytics.google.com)
2. Copy the Measurement ID (format: `G-XXXXXXXXXX`)
3. Set `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX` in your env vars

---

## Security Checklist

- [x] HTTPS enforced (handled by Vercel/Netlify)
- [x] Security headers set in `next.config.ts`
- [x] No API keys or secrets in frontend code
- [x] Environment variables for all sensitive values
- [x] Backend validation on contact form API route
- [x] Rate limiting on contact form (5 req/min per IP)
- [x] Honeypot spam protection on contact form
- [x] CSP headers configured

---

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server locally
npm run lint     # Run ESLint
```

---

## License

MIT © Aethryn Software Solutions
