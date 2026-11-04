import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";

export default function HomePage() {
  return (
    <div className="py-12 sm:py-16 md:py-20 space-y-16 sm:space-y-20">
      {/* Editorial Hero Section */}
      <section aria-labelledby="intro-heading">
        <Container>
          <div className="max-w-2xl">
            <h1
              id="intro-heading"
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-navy leading-tight"
            >
              Building thoughtful software with React, TypeScript, and Laravel.
            </h1>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-foreground/90">
              Welcome to my digital home. I design and build full-stack web applications,
              maintainable frontend architectures, and resilient technical systems with an emphasis
              on simplicity and long-term readability.
            </p>

            <aside
              aria-label="Editorial note"
              className="mt-6 border-l-2 border-bronze/60 bg-bronze-muted/30 px-4 py-3 text-xs leading-relaxed text-muted"
            >
              <strong className="font-semibold text-bronze">Note:</strong> Customize this section with your primary areas of engineering focus, research interests, and current availability for November–December 2026 roles.
            </aside>

            {/* Restrained Editorial Cross-Navigation */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium">
              <Link
                href="/projects"
                className="text-teal hover:underline inline-flex items-center gap-1"
              >
                Selected projects &rarr;
              </Link>
              <Link
                href="/resume"
                className="text-navy hover:text-teal hover:underline transition-colors"
              >
                Curriculum Vitae
              </Link>
              <Link
                href="/about"
                className="text-muted hover:text-navy transition-colors"
              >
                About &amp; Background
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Selected Projects Section */}
      <section aria-labelledby="featured-projects-heading" className="border-t border-border pt-12 sm:pt-16">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-8">
            <div>
              <h2
                id="featured-projects-heading"
                className="font-serif text-2xl sm:text-3xl font-bold text-navy"
              >
                Selected Projects
              </h2>
              <p className="mt-1 text-sm text-muted">
                Case studies and applications highlighting technical depth and architectural decisions.
              </p>
            </div>
            <Link
              href="/projects"
              className="text-sm font-medium text-teal hover:underline shrink-0"
            >
              All projects &rarr;
            </Link>
          </div>

          <div className="space-y-8">
            <ProjectCard
              title="[Project 1 Placeholder: Full-Stack Web Application]"
              description="A scalable web application built with React, TypeScript, and Laravel. Features resilient state management, clean API contracts, and an accessible interface."
              tags={["React", "TypeScript", "Laravel", "PostgreSQL"]}
              status="Case Study"
              year="2026"
              href="/projects"
            />
            <ProjectCard
              title="[Project 2 Placeholder: Technical Architecture or Tool]"
              description="Specialized tooling or frontend component system focused on performance, strict typing, and developer ergonomics."
              tags={["TypeScript", "Next.js", "Tailwind CSS", "Architecture"]}
              status="In Progress"
              year="2026"
              href="/projects"
            />
          </div>
        </Container>
      </section>

      {/* Writing & Research Notes Preview */}
      <section aria-labelledby="writing-heading" className="border-t border-border pt-12 sm:pt-16">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-8">
            <div>
              <h2
                id="writing-heading"
                className="font-serif text-2xl sm:text-3xl font-bold text-navy"
              >
                Writing &amp; Notes
              </h2>
              <p className="mt-1 text-sm text-muted">
                Essays on software engineering, architecture, mathematics, and philosophy.
              </p>
            </div>
            <Link
              href="/writing"
              className="text-sm font-medium text-teal hover:underline shrink-0"
            >
              All writing &rarr;
            </Link>
          </div>

          <article className="border-t border-border pt-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
              <h3 className="font-serif text-xl font-bold text-navy">
                <Link
                  href="/writing"
                  className="hover:text-teal focus-visible:outline-none focus-visible:underline transition-colors"
                >
                  [Article Placeholder: Title of your first technical essay or tutorial]
                </Link>
              </h3>
              <span className="text-xs font-mono text-muted shrink-0">
                Forthcoming
              </span>
            </div>
            <p className="text-sm leading-relaxed text-foreground/85 max-w-2xl">
              Summary placeholder: A breakdown of architectural patterns, lessons learned, or engineering explorations. Coming soon.
            </p>
          </article>
        </Container>
      </section>
    </div>
  );
}
