import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export interface CaseStudyMetadata {
  role: string;
  technologies: string[];
  database: string;
  status: string;
  timeline?: string;
}

export interface CaseStudyLayoutProps {
  title: string;
  subtitle: string;
  category?: string;
  metadata: CaseStudyMetadata;
  backHref?: string;
  backLabel?: string;
  nextProjectHref?: string;
  nextProjectLabel?: string;
  children: React.ReactNode;
}

/**
 * CaseStudyLayout provides a structured, responsive, and editorial layout
 * for technical project case studies following the Modern Scholar aesthetic.
 */
export function CaseStudyLayout({
  title,
  subtitle,
  category = "Professional Experience · Case Study",
  metadata,
  backHref = "/projects",
  backLabel = "Back to Selected Work",
  nextProjectHref,
  nextProjectLabel,
  children,
}: CaseStudyLayoutProps) {
  return (
    <div className="py-12 sm:py-16 md:py-20">
      <Container size="narrow">
        {/* Navigation Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <Link
            href={backHref}
            className="text-xs sm:text-sm font-medium text-teal hover:underline inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded"
          >
            &larr; {backLabel}
          </Link>
        </nav>

        {/* Masthead Header */}
        <header className="border-b border-border pb-8">
          <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-bronze font-semibold mb-3">
            {category}
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight leading-tight">
            {title}
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-foreground/90 font-medium leading-relaxed">
            {subtitle}
          </p>

          {/* Project Metadata Grid */}
          <dl className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-border/80 pt-6 text-xs font-mono">
            <div>
              <dt className="text-muted uppercase tracking-wider text-[11px]">My Role</dt>
              <dd className="mt-1 font-semibold text-navy">{metadata.role}</dd>
            </div>
            <div>
              <dt className="text-muted uppercase tracking-wider text-[11px]">Database</dt>
              <dd className="mt-1 font-semibold text-navy">{metadata.database}</dd>
            </div>
            <div>
              <dt className="text-muted uppercase tracking-wider text-[11px]">Deployment Status</dt>
              <dd className="mt-1 font-semibold text-teal">{metadata.status}</dd>
            </div>
            <div>
              <dt className="text-muted uppercase tracking-wider text-[11px]">Key Tech</dt>
              <dd className="mt-1 font-semibold text-navy">
                {metadata.technologies.slice(0, 3).join(", ")}
              </dd>
            </div>
          </dl>

          {/* Full Tech Stack Badges */}
          <div className="mt-4 flex flex-wrap items-center gap-1.5 text-xs font-mono">
            <span className="text-foreground/50 font-sans text-[11px] uppercase tracking-wider mr-1">
              Stack:
            </span>
            {metadata.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded border border-border/80 bg-surface/60 px-2 py-0.5 text-xs text-foreground/85"
              >
                {tech}
              </span>
            ))}
          </div>
        </header>

        {/* Case Study Content Stream */}
        <article className="mt-10 space-y-12 text-foreground/85 text-base sm:text-lg leading-relaxed">
          {children}

          {/* Cross-navigation Footer */}
          <div className="border-t border-border pt-8 mt-12 flex flex-wrap items-center justify-between gap-4 text-sm font-medium">
            <Link
              href={backHref}
              className="text-teal hover:underline inline-flex items-center gap-1 font-semibold"
            >
              &larr; {backLabel}
            </Link>

            {nextProjectHref ? (
              <Link
                href={nextProjectHref}
                className="text-navy hover:text-teal hover:underline transition-colors"
              >
                {nextProjectLabel || "Next Project"} &rarr;
              </Link>
            ) : (
              <Link
                href="/contact"
                className="text-navy hover:text-teal hover:underline transition-colors"
              >
                Discuss Technical Details &rarr;
              </Link>
            )}
          </div>
        </article>
      </Container>
    </div>
  );
}

/**
 * Reusable Section block inside a case study with uniform typography.
 */
export function CaseStudySection({
  title,
  id,
  children,
}: {
  title: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section aria-labelledby={id} className="space-y-4">
      <h2
        id={id}
        className="font-serif text-2xl sm:text-3xl font-bold text-navy tracking-tight pt-2"
      >
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}
