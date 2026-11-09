import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ProjectPreview } from "@/components/ui/ProjectPreview";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Software development projects, business applications, and technical explorations by Ayush Bhattarai.",
};

export default function ProjectsPage() {
  return (
    <div className="py-12 sm:py-16 md:py-20">
      <Container size="wide">
        <header className="max-w-2xl mb-12">
          <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-bronze font-semibold mb-3">
            Portfolio &middot; Engineering
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-navy tracking-tight">
            Projects &amp; Case Studies
          </h1>
          <p className="mt-4 text-base sm:text-lg text-foreground/85 leading-relaxed">
            A selection of software systems, business applications, and technical explorations. My
            work focuses on solving practical problems where reliability, maintainability, and
            thoughtful architecture matter.
          </p>
        </header>

        <div className="space-y-10">
          <ProjectPreview
            title="Bhetiyo — Cross-Border Social Commerce Platform"
            oneLiner="Cross-border social-commerce platform connecting Nepali buyers with Chinese suppliers and local sellers through shoppable video feeds, live streaming, and a Nepal customs tariff engine."
            contribution="Built the social video layer (ranked For-You reels feed, LiveKit live streaming, single-active-player video lifecycle), implemented the Nepal HS-code customs and tariff engine with eSewa payments, shipped the web admin console, and expanded the .NET 8 CQRS backend API from 218 to 341 endpoints."
            technologies={[
              ".NET 8",
              "C#",
              "Flutter",
              "Dart",
              "Next.js 16",
              "TypeScript",
              "EF Core",
              "MySQL",
              "Redis",
              "LiveKit",
            ]}
            type="Production Platform · Case study"
            caseStudyHref="/projects/bhetiyo"
          />

          <ProjectPreview
            title="Garment Factory Production Management System (PMS)"
            oneLiner="A multi-tenant factory operations platform on Laravel 10 and React 18/TypeScript with 3 portals (super-admin, admin, worker) and a unified work-run state machine."
            contribution="Over 214 commits, extracted domain logic into 20 services (1 → 20), built a work-run engine for 4 order types, automated multi-tenant migration reconciliation across 11 databases, fixed critical roll stock-out defects, and scaled test coverage to 279 PHPUnit and 166 Vitest tests with 0 TypeScript errors."
            technologies={["Laravel 10", "PHP", "React 18", "TypeScript", "MySQL", "PHPUnit", "Vitest", "Tailwind CSS"]}
            type="Professional experience · Case study"
            caseStudyHref="/projects/production-line-management"
          />

          <ProjectPreview
            title="Multi-Tenant ERP, Accounting & POS Platform"
            oneLiner="Enterprise cloud platform for Nepali businesses spanning statutory VAT registers, double-entry financial accounting, FIFO inventory costing, and POS tab billing."
            contribution="Over 835 commits (~540k lines added across 10 months), personally built 74% of report controllers (28/38), 67% of report pages (30/45), 54% of database migrations (129/241), and 62% of business logic helpers (26/42), including FIFO stock valuation, backdated cost recalculation, and statutory VAT export engines."
            technologies={["Laravel 10", "PHP", "React 18", "TypeScript", "MySQL", "REST APIs", "Tailwind CSS"]}
            type="Professional experience · Case study"
            caseStudyHref="/projects/erp-accounting-pos"
          />

          <ProjectPreview
            title="Marmat Sewa — Repair Management SaaS"
            oneLiner="A multi-tenant SaaS platform built to streamline equipment maintenance ticketing, repair job lifecycle tracking, and client billing."
            contribution="Designed the multi-tenant database isolation schema, implemented role-based authorization rules (admin, technician, client), and built the full-stack system with Next.js, TypeScript, and Laravel."
            technologies={["Next.js", "React", "TypeScript", "Laravel", "PostgreSQL", "Tailwind CSS"]}
            type="Independent project · In development"
          />

          <ProjectPreview
            title="Personal Publishing & Static Engineering Platform"
            oneLiner="Static-first personal portfolio, digital CV, and research notebook built with Next.js App Router, TypeScript, and Tailwind CSS."
            contribution="Engineered zero-dependency light/dark theme system, WCAG AA accessible layout primitives, and strict static export pipeline with zero client bundle bloat."
            technologies={["Next.js", "React", "TypeScript", "Tailwind CSS"]}
            type="Independent project · Open Source"
            caseStudyHref="https://github.com/BhattaraiAyush27/personal-site"
          />
        </div>

        <aside
          aria-label="Editorial note"
          className="mt-12 border-l-2 border-bronze/60 bg-bronze-muted/30 px-4 py-3 text-xs leading-relaxed text-muted max-w-2xl"
        >
          <strong className="font-semibold text-bronze">Note:</strong> For professional projects, only personal engineering contributions and high-level architectural decisions are documented to respect employer and client confidentiality.
        </aside>
      </Container>
    </div>
  );
}
