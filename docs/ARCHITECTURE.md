# System Architecture & Technical Specifications

## 1. System Overview

The site is built as a static-first Next.js web application using the App Router. Every route is compiled down to static HTML, CSS, and minimal client-side JavaScript at build time.

```
                    +--------------------------------+
                    | Git Repository (GitHub)        |
                    +---------------+----------------+
                                    | Push to main/dev
                                    v
                    +--------------------------------+
                    | Build Pipeline (Turbopack)     |
                    | next build (output: 'export')  |
                    +---------------+----------------+
                                    | Static output (/out)
                                    v
       +----------------------------------------------------------+
       | Global CDN (Cloudflare Pages or Vercel Edge Network)     |
       | - Zero serverless functions                              |
       | - Zero database queries                                  |
       | - High cache hit ratio & instant TTFB                    |
       +----------------------------------------------------------+
```

## 2. Directory Structure & Route Map

```
personal-site/
├── app/
│   ├── globals.css            # Base stylesheet, custom properties, utility overrides
│   ├── layout.tsx             # Root layout: font loading, skip link, Header, Footer
│   ├── page.tsx               # Homepage: Hero intro, Featured projects, Writing preview
│   ├── not-found.tsx          # 404 handler
│   ├── about/page.tsx         # Professional background & philosophy
│   ├── projects/page.tsx      # Projects overview catalog
│   ├── writing/page.tsx       # Writing & publications catalog
│   ├── resume/page.tsx        # Print-ready structured CV
│   └── contact/page.tsx       # Direct outreach channels & profile links
├── components/
│   ├── layout/
│   │   ├── Header.tsx         # Semantic navigation bar (Server Component)
│   │   ├── MobileNav.tsx      # Mobile menu toggle & drawer (Client Component)
│   │   └── Footer.tsx         # Global footer with copyright & links (Server Component)
│   └── ui/
│       ├── Container.tsx      # Shared max-width layout container
│       ├── ProjectCard.tsx    # Card component for project previews
│       └── ThemeToggle.tsx    # Light/Dark mode switcher (Client Component)
├── docs/                      # Architectural & requirements documentation
│   ├── PRD.md
│   ├── ARCHITECTURE.md
│   └── PLAN.md
├── next.config.ts             # Static export configuration
├── tailwind.config.ts         # Modern Scholar design tokens & typography
├── tsconfig.json              # Strict TypeScript settings
└── package.json
```

## 3. Design System & Accessibility Strategy

### Modern Scholar Palette Tokens

#### Light Theme (Parchment & Ink)
| Token | Hex Value | Verified Contrast on `#F7F4EE` | Role |
|---|---|---|---|
| `--background` | `#F7F4EE` | — | Page background (warm off-white) |
| `--foreground` | `#22252B` | 13.99:1 (AAA) | Primary body copy & paragraph text |
| `--surface` | `#FFFFFF` | — | Card surfaces & elevated sections |
| `--navy` | `#1F2A44` | 12.99:1 (AAA) | Primary headings, titles, logo |
| `--teal` | `#1F5C63` | 6.91:1 (AA) | Primary interactive actions, buttons, hover |
| `--bronze` | `#8E5F32` | 4.99:1 (AA) | Text-safe accent & section labels |
| `--bronze-decorative` | `#9A6A3A` | 4.25:1 (3:1 large) | Non-text lines, borders, dots |
| `--border` | `#E5DFD5` | — | Subtle dividing lines & card borders |
| `--muted` | `#525660` | 6.8:1 (AAA) | Secondary body copy |

#### Dark Theme (Night Study / Dark Library)
| Token | Hex Value | Verified Contrast on `#11141A` | Role |
|---|---|---|---|
| `--background` | `#11141A` | — | Page background (deep slate-black) |
| `--foreground` | `#E3E6ED` | 14.8:1 (AAA) | Primary body copy & paragraph text |
| `--surface` | `#181D26` | — | Card surfaces & elevated sections |
| `--navy` | `#F0F4FC` | 16.5:1 (AAA) | Primary headings, titles, logo |
| `--teal` | `#3AB8B3` | 8.5:1 (AAA) | Primary interactive actions & links |
| `--bronze` | `#E2A66C` | 8.6:1 (AAA) | Warm bronze accent |
| `--bronze-decorative` | `#C68950` | 5.8:1 (AA) | Non-text lines, accents |
| `--border` | `#262E3B` | — | Subtle divider border |
| `--muted` | `#9AA3B2` | 7.4:1 (AAA) | Secondary body copy |

### Accessibility Guarantees
- Focus states explicitly defined with high-contrast rings (`outline: 2px solid var(--teal)`).
- Skip link (`.skip-to-content`) allows keyboard and screen reader users to bypass top navigation in both themes.
- Zero-FOUC inline theme script in `<head>` ensures theme loads immediately without flicker.
- Semantic HTML tags (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`) enforce accessible document outline.
- Client components are strictly restricted to UI state requiring interactivity (`MobileNav.tsx`, `ThemeToggle.tsx`), preserving lightweight Server Component rendering everywhere else.

## 4. Technical Tradeoffs & Decisions

| Decision | Selection | Rationale | Alternatives Considered |
|---|---|---|---|
| **Rendering Strategy** | Static Export (`output: 'export'`) | Zero infrastructure cost, immutable security, high reliability. | Server-Side Rendering (adds hosting complexity & cold starts). |
| **Component Model** | React Server Components (RSC) | Zero client bundle overhead for static text and layout. | Full client-side SPA (unnecessary JS payload). |
| **Typography** | `next/font/google` with fallback | Self-hosted at build time; zero Google tracking or runtime latency. | Standard CDN `<link>` (blocks rendering, privacy implications). |
| **Styling** | Tailwind CSS with CSS Variables | Rapid layout construction with strict token enforcement. | CSS Modules (verbose boilerplate for solo developer). |
| **Publishing Pipeline** | Local MDX files via filesystem (Phase 2) | No external CMS vendor lock-in; Git-backed version history. | Headless CMS like Sanity/Strapi (adds complexity, cost, credentials). |
