# Midnight Binge — Brand Website

The official website for **Midnight Binge**, a premium makhana snack brand crafted for real moments. Built with Next.js, TypeScript, and Tailwind CSS.

**Live:** [midnightbinge.com](https://midnightbinge.com)

## Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) via `@tailwindcss/postcss`
- **Animations**: [Framer Motion 12](https://www.framer.com/motion/)
- **Particles**: [TSParticles 3](https://particles.js.org/) (desktop-only, decorative)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)
- **Utilities**: clsx + tailwind-merge for `cn()` helper
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)

## Brand Identity

The application reflects a "Midnight" aesthetic — sophisticated, moody, yet comforting.

- **Dark Theme** (default): *Mysterious Depths* (`#060b28`)
- **Light Theme**: *Pale Lavender* (`#d6d2ff`)
- **Accent**: Purple (`#6B5CE7`)
- **Brand Palette**: Nobel Teal (`#045866`), Coral Candy (`#ffe4d9`), Clinker (`#381c07`)
- **Typography**:
  - Display: `Elsie` (Serif)
  - Body: `Poppins` (Sans-serif, 4 weights)
  - Accent: `Borel` (Cursive)
- **Fonts**: Self-hosted TTF/OTF in `/public/fonts/`

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Production build
npm run build

# Serve production build
npm start

# Lint
npm run lint
```

The dev server runs at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (metadata, providers)
│   ├── page.tsx            # Homepage
│   ├── range/              # Product listing + [flavor-slug] detail
│   ├── story/              # Brand story
│   ├── whats-inside/       # Ingredients & process
│   ├── gifts/              # Gifting & corporate bundles
│   ├── contact/            # Contact forms (tabbed)
│   ├── privacy/            # Privacy policy
│   ├── terms/              # Terms of use
│   ├── error.tsx           # Error boundary
│   ├── not-found.tsx       # 404 page
│   ├── sitemap.ts          # Dynamic sitemap from product data
│   ├── robots.ts           # Robots.txt
│   └── globals.css         # Theme variables, font-faces, global styles
├── components/
│   ├── Navbar.tsx           # Fixed navbar with mobile menu + focus trap
│   ├── Footer.tsx           # Footer with newsletter + social links
│   ├── ThemeProvider.tsx    # Dark/light theme context (localStorage)
│   ├── MakhanaFloat.tsx     # TSParticles floating effect (desktop)
│   ├── Analytics.tsx        # Vercel Analytics wrapper
│   └── home/               # Homepage sections
│       ├── EntranceAnimation.tsx  # "11:59 → 12:00" intro (session-gated)
│       ├── Hero.tsx               # Auto-sliding hero with parallax
│       ├── BestSellers.tsx        # Category cards
│       ├── MoodSelector.tsx       # Interactive mood-based recommendations
│       ├── Philosophy.tsx         # Brand beliefs
│       ├── LifestyleBand.tsx      # Auto-scrolling image band
│       ├── Testimonials.tsx       # Customer quotes
│       └── ClosingBridge.tsx      # CTA bridge
├── data/
│   └── products.ts          # Product catalog with typed interfaces
└── lib/
    └── utils.ts             # cn() utility (clsx + tailwind-merge)
```

## Architecture

### Theme System
Custom dual-theme system using CSS custom properties and a `ThemeProvider`.
- **Default**: Dark mode. Light mode toggled via `.day-mode` class on `<html>`.
- **Persistence**: Theme preference saved in `localStorage`.
- **Variables**: Defined in `src/app/globals.css` under `:root` and `.day-mode`.

### Product Data
All product data lives in `src/data/products.ts` with typed interfaces (`Product`, `ProductSize`, `QuickCommerce`). Products include quick-commerce links to Blinkit, Zepto, and Amazon.

To add a new product, add an entry to the `products` array — the sitemap, range page, and product detail pages all derive from this data.

### Key Features
- **Entrance Animation**: Clock flip from 11:59 to 12:00 with skip button. Plays once per session (`sessionStorage`).
- **Hero Slider**: Auto-rotating between lifestyle shots and product mockups.
- **Mood Selector**: "What's your Midnight?" — hover/tap to reveal product recommendations.
- **Category Deep-Linking**: Range page supports `?category=` URL params.
- **Brand Patterns**: Subtle repeating brand pattern (`.brand-pattern-bg`) across sections.

### Accessibility
- Skip-to-content link
- Focus trap on mobile menu
- `useReducedMotion()` respected across all animations
- TSParticles disabled on mobile and when reduced motion is preferred
- Keyboard navigation support on interactive components
- `safe-area-inset` padding for notched devices

### Security Headers
Configured in `next.config.ts`:
- Content-Security-Policy (CSP)
- Strict-Transport-Security (HSTS with preload)
- X-Content-Type-Options, X-Frame-Options, X-XSS-Protection
- Referrer-Policy (strict-origin-when-cross-origin)
- Permissions-Policy (camera, microphone, geolocation disabled)

### SEO
- Root-level Open Graph and Twitter Card metadata
- Dynamic `sitemap.ts` generated from product data + static pages
- `robots.ts` allowing all crawlers, disallowing `/api/`
- `metadataBase` set to `https://midnightbinge.com`

## Notes

- **Forms** are UI placeholders — no backend is connected yet.
- **Tagline**: "Better that feels good." is the canonical brand tagline used site-wide.
- **Images**: All product and lifestyle images served via `next/image` with AVIF/WebP optimization.

---

&copy; 2026 Midnight Binge. All rights reserved.
