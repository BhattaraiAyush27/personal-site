import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description: "Software engineering projects, architectural case studies, and open-source contributions.",
};

export default function ProjectsPage() {
  return (
    <div className="py-12 sm:py-16 md:py-20">
      <Container size="wide">
        <header className="max-w-2xl mb-12">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-navy tracking-tight">
            Projects &amp; Case Studies
          </h1>
          <p className="mt-4 text-base sm:text-lg text-foreground/85 leading-relaxed">
            A selection of software systems, tools, and technical explorations. Each entry communicates architectural rationale and implementation details.
          </p>
        </header>

        <div className="space-y-10">
          <ProjectCard
            title="[Project 1 Placeholder: Core Web Platform]"
            description="Full-stack application engineered with React, TypeScript, and Laravel. Demonstrates domain modeling, caching strategy, and test-driven development."
            tags={["React", "TypeScript", "Laravel", "Tailwind CSS", "MySQL"]}
            status="Case Study"
            year="2026"
          />
          <ProjectCard
            title="[Project 2 Placeholder: Developer Tooling / API]"
            description="Clean architectural implementation emphasizing strict typing, minimal latency, and developer ergonomics."
            tags={["TypeScript", "Node.js", "REST", "Testing"]}
            status="In Progress"
            year="2026"
          />
        </div>

        <aside
          aria-label="Editorial note"
          className="mt-12 border-l-2 border-bronze/60 bg-bronze-muted/30 px-4 py-3 text-xs leading-relaxed text-muted max-w-2xl"
        >
          <strong className="font-semibold text-bronze">Note:</strong> Individual in-depth MDX case studies (`/projects/[slug]`) will be linked once the content pipeline is established in Phase 2.
        </aside>
      </Container>
    </div>
  );
}
