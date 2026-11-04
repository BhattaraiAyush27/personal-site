# Product Requirements Document (PRD)

## 1. Project Purpose & Long-Term Vision

The purpose of this project is to establish a personal digital home for Ayush Bhattarai that serves two parallel objectives:
1. **Immediate (Nov–Dec 2026):** Position the candidate as an experienced, thoughtful software engineer specializing in React, TypeScript, and Laravel architectures to prospective employers and engineering teams.
2. **Long-Term:** Provide a resilient, extensible, static-first publishing platform for technical writing, engineering case studies, mathematical/philosophical essays, and neurotechnology research notes.

## 2. Target Audiences

- **Hiring Managers & Engineering Leads:** Reviewing candidates for mid-to-senior frontend or full-stack software engineering roles. They need clear proof of technical depth, architectural taste, code quality, and verifiable project impact within seconds.
- **Technical Peers & Fellow Engineers:** Reading technical tutorials and architectural retrospectives.
- **Academic / Cross-Disciplinary Readers:** Reading long-form essays on philosophy, mathematics, and cognitive science.
- **Future Self:** A zero-maintenance personal repository that remains functional for years without routine CMS upgrades or server billing.

## 3. Core User Journeys

### Journey 1: The Engineering Recruiter / Hiring Lead
1. Arrives at the **Homepage (`/`)** via a job application or LinkedIn.
2. Immediately understands the core competency (React, TypeScript, Laravel) and sees clear call-to-actions.
3. Clicks **"View Projects" (`/projects`)** to review architecture and case study breakdowns.
4. Clicks **"Resume" (`/resume`)** for a clean, structured overview of competencies and employment history, with print-ready formatting.
5. Clicks **"Contact" (`/contact`)** or email link to initiate outreach.

### Journey 2: The Technical Peer / Search Visitor
1. Arrives at a specific technical tutorial or essay via search engine or link sharing.
2. Experiences rapid load times, zero layout shift, readable typography (Modern Scholar theme), and accessible contrast.
3. Navigates to the author's background and projects via persistent header navigation.

## 4. MVP Scope (Vertical Slice)

### In-Scope (Phase 0 & 1):
- Fully responsive global layout with accessible persistent navigation (`Header`, `Footer`, `Container`).
- Accessible mobile drawer with keyboard navigation (Escape to close, aria attributes).
- Semantic homepage with hero intro, selected projects preview, and writing section preview.
- Dedicated routes with semantic scaffolding and marked content placeholders:
  - `/about` — Professional background and focus areas.
  - `/projects` — Project catalog and case study summaries.
  - `/writing` — Technical essays and publications placeholder.
  - `/resume` — Structured CV layout with print styles.
  - `/contact` — Direct contact channels and public profiles.
  - `404` — Custom accessible not-found page.
- Static export build pipeline (`output: 'export'`) with zero server dependency.
- Modern Scholar design system tokens adhering to WCAG 2.1 AA contrast requirements.

### Out-of-Scope for Initial Slice:
- Database, CMS, authentication, or server actions.
- MDX parsing runtime (deferred to Phase 2 content pipeline).
- Full-text search or RSS generation (Phase 3).
- Dark mode toggle (tokens architected, deferred to post-MVP).
- Synthetic or auto-generated personal biography/metrics.

## 5. Non-Functional Requirements

- **Performance:** 95+ score across all Lighthouse categories (Performance, Accessibility, Best Practices, SEO). Zero layout shift (CLS < 0.05).
- **Accessibility:** Strict adherence to WCAG 2.1 AA. All text elements satisfy minimum 4.5:1 contrast against backgrounds. Focus rings visible for keyboard users. Semantic landmarks (`<header>`, `<main>`, `<footer>`, `<nav>`) across all views.
- **Cost:** $0 infrastructure cost using static hosting (Cloudflare Pages or Vercel).
- **SEO:** Built-in metadata, Open Graph tags, canonical URLs, and valid semantic structure.

## 6. Acceptance Criteria

1. `npm run build` succeeds cleanly with static HTML exported to `out/`.
2. `npm run type-check` and `npm run lint` execute with 0 errors.
3. All primary navigation links navigate to valid HTTP 200 pages.
4. Viewport scales gracefully from 320px mobile to 1920px+ desktop.
5. Keyboard users can navigate via Tab and skip to main content via hidden accessible skip link.
