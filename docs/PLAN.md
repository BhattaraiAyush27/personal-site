# Implementation Plan & Roadmap

## Overview

This implementation roadmap outlines the sequence of phases from the initial vertical slice to a complete personal publishing platform.

---

### Phase 0: Foundation & Core Layout (Current Session)
- [x] Configure TypeScript, Next.js App Router, Tailwind CSS, and PostCSS.
- [x] Implement Modern Scholar design tokens with WCAG 2.1 AA verified contrast ratios.
- [x] Establish global layout architecture: `Header`, `Footer`, `Container`, `MobileNav`.
- [x] Create homepage with semantic hero section, selected project previews, and writing preview.
- [x] Add placeholder routes: `/about`, `/projects`, `/writing`, `/resume`, `/contact`, and `404`.
- [x] Configure static export (`output: 'export'`) and verify type-check and linting.
- **Verification:** `npm run build` generates `/out` without errors.

---

### Phase 1: Real Profile Content & Resume Detailing (Next Immediate Step)
- [ ] Replace `[Bio Content Placeholder]` with your actual engineering background and statement.
- [ ] Fill out `/resume` with your real employment history, bullet points, and education details.
- [ ] Add real contact email and active profile links in `/contact` and `/components/layout/Footer.tsx`.
- [ ] Add `@media print` styling refinements for one-click browser PDF export of `/resume`.
- **Tasks for You (Manual):** Writing personal career details and verifying achievement statements.
- **Tasks for AI:** Polishing print CSS, typography spacing, and metadata tags.

---

### Phase 2: MDX Content Pipeline (Publishing System)
- [ ] Install minimal MDX dependencies: `next-mdx-remote/rsc`, `gray-matter`, `remark-gfm`, `rehype-pretty-code`, `shiki`.
- [ ] Create `lib/content.ts` for reading and sorting local Markdown/MDX files.
- [ ] Create `content/projects/*.mdx` for in-depth engineering case studies.
- [ ] Create `content/writing/*.mdx` for technical articles and essays.
- [ ] Implement dynamic routes with `generateStaticParams`:
  - `app/projects/[slug]/page.tsx`
  - `app/writing/[slug]/page.tsx`
- **Verification:** Adding a `.mdx` file automatically produces an accessible static page upon build.

---

### Phase 3: SEO, Social Cards & Analytics
- [ ] Configure dynamic `sitemap.ts` and `robots.txt`.
- [ ] Implement Open Graph and Twitter card image generation (`opengraph-image.tsx`).
- [ ] Add Schema.org structured data (`JSON-LD`) for Person and Article types.
- [ ] Connect lightweight privacy-friendly analytics (Cloudflare Web Analytics or Plausible).
- **Verification:** Lighthouse SEO score 100/100, rich preview validation on opengraph.xyz.

---

### Phase 4: Long-Term Enhancements (Post-Launch)
- [ ] RSS/Atom feed generation (`/feed.xml`).
- [ ] Dark mode toggle (using predefined dark tokens).
- [ ] Math rendering via `remark-math` and `rehype-katex` for mathematical essays.
- [ ] Client-side lightweight search (Fuse.js) for articles and projects.
