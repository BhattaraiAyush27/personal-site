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
            title="Production Line Management System"
            oneLiner="An operational system for tracking manufacturing workflows, station handoffs, and assembly throughput in real time."
            contribution="Architected the reactive station state model in React and TypeScript, designed RESTful backend API contracts in Laravel for batch order routing, and engineered responsive floor dashboards for supervisors."
            technologies={["React", "TypeScript", "Laravel", "MySQL", "Tailwind CSS", "REST APIs"]}
            type="Professional experience · Case study"
            caseStudyHref="/projects/production-line-management"
          />

          <ProjectPreview
            title="Accounting / ERP & Restaurant Billing Systems"
            oneLiner="Business platforms handling high-frequency transactions, double-entry ledger records, restaurant billing, and inventory reconciliation."
            contribution="Engineered transactional schemas in MySQL/PostgreSQL, developed billing and receipt workflows, and implemented validation rules to ensure ledger consistency across concurrent user operations."
            technologies={["PHP", "Laravel", "MySQL", "PostgreSQL", "JavaScript", "Tailwind CSS"]}
            type="Professional experience · Case study"
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
