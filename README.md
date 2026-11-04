# Ayush Bhattarai — Personal Site

Source code for my personal website, engineering portfolio, and writing platform.

Built with **Next.js App Router**, **TypeScript**, and **Tailwind CSS**. Designed around a restrained **Modern Scholar** aesthetic with static-first architecture.

---

## Architecture & Design Principles

- **Static-First:** Compiles entirely to static HTML/CSS/JS via `output: 'export'`. Zero backend runtime, zero database, zero infrastructure cost.
- **Accessible (WCAG 2.1 AA):** High-contrast color palette, visible focus indicators, skip-to-content navigation, and semantic HTML landmarks.
- **Server Components by Default:** Client-side JavaScript is restricted strictly to interactive boundaries (e.g. mobile navigation).
- **Fast & Lightweight:** Self-hosted fonts via `next/font`, zero layout shift, minimal dependencies.

---

## Getting Started

### Prerequisites
- Node.js (v20+ recommended, developed on v24)
- npm or pnpm

### Installation
```bash
git clone git@github.com:BhattaraiAyush27/personal-site.git
cd personal-site
npm install
```

### Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Verification & Build
```bash
npm run type-check   # Validate TypeScript types
npm run lint         # Check code quality via ESLint
npm run build        # Build static production export to /out
```

---

## Project Structure

```
├── app/                  # Next.js App Router routes & layouts
│   ├── about/            # Background & focus areas
│   ├── projects/         # Engineering projects & case studies
│   ├── writing/          # Technical writing & essays
│   ├── resume/           # Structured, printable CV
│   ├── contact/          # Direct contact channels
│   ├── layout.tsx        # Global layout with fonts, header, footer
│   └── page.tsx          # Homepage
├── components/           # Reusable React components
│   ├── layout/           # Header, Footer, MobileNav
│   └── ui/               # Container, ProjectCard
├── docs/                 # Architectural specifications & roadmap
│   ├── PRD.md            # Product requirements
│   ├── ARCHITECTURE.md   # System architecture & design tokens
│   └── PLAN.md           # Implementation phases
└── AGENTS.md             # Guidelines for AI coding agents
```

---

## License

MIT &copy; 2026 Ayush Bhattarai. See [LICENSE](LICENSE) for details.
