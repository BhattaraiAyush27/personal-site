# AGENTS.md — Instructions for AI Coding Assistants

## 1. Project Context & Philosophy
This repository is the personal portfolio and long-term publishing site of Ayush Bhattarai. It is designed to be lean, fast, accessible, and strictly static-first.

## 2. Core Stack & Locked Conventions
- **Framework:** Next.js (App Router).
- **Language:** TypeScript in strict mode (`tsconfig.json`).
- **Styling:** Tailwind CSS with CSS variable tokens defined in `app/globals.css`.
- **Target Architecture:** Static export (`output: 'export'` in `next.config.ts`).
- **Component Model:**
  - Default to **React Server Components (RSC)**.
  - Only introduce `"use client"` when component state, browser event listeners, or client hooks are strictly required (e.g. mobile drawer menu).
  - Place shared UI primitives in `components/ui/` and structural blocks in `components/layout/`.

## 3. Strict Rules
- **DO NOT invent personal information:** Never hallucinate employment history, metrics, credentials, contact info, or personal achievements. Use marked placeholders (`[Placeholder: ...]`) if information is missing.
- **DO NOT add unnecessary runtime dependencies:** No heavy UI component libraries (shadcn, Radix, MUI) without explicit approval. No external databases, auth systems, or CMS packages.
- **DO NOT break static export:** Avoid server-only APIs (like dynamic headers, cookies, or runtime route handlers) that conflict with `output: 'export'`.
- **Accessibility first:** Preserve WCAG 2.1 AA compliance. Keep focus rings intact. Ensure all interactive elements have descriptive labels or screen reader text.

## 4. Key Files to Consult
- `docs/PRD.md`: Project purpose, user journeys, and feature scope.
- `docs/ARCHITECTURE.md`: Technical specification, design tokens, and architectural decisions.
- `docs/PLAN.md`: Roadmap and pending phases.
- `app/globals.css`: Modern Scholar color variables and accessibility styles.
- `next.config.ts`: Next.js compiler settings.

## 5. Verification Commands
Always verify changes with the following commands before completing a task:
```bash
npm run type-check   # Verifies TypeScript types without emitting files
npm run lint         # Runs Next.js ESLint checks
npm run build        # Verifies static export production build
```
