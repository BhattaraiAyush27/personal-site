import React from "react";
import Link from "next/link";

export interface ProjectPreviewProps {
  title: string;
  oneLiner: string;
  contribution: string;
  technologies: string[];
  type?: string;
  year?: string;
  caseStudyHref?: string;
}

/**
 * ProjectPreview renders an editorial entry for a professional or independent project.
 * Adheres strictly to the 4-part structure:
 * 1. Project name
 * 2. One-line description
 * 3. Personal engineering contribution
 * 4. Verified technologies
 * Followed by an accessible case study link.
 */
export function ProjectPreview({
  title,
  oneLiner,
  contribution,
  technologies,
  type,
  year,
  caseStudyHref,
}: ProjectPreviewProps) {
  return (
    <article className="border-t border-border pt-6 pb-4 transition-colors">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy">
          {caseStudyHref ? (
            <Link
              href={caseStudyHref}
              className="hover:text-teal focus-visible:outline-none focus-visible:underline transition-colors"
            >
              {title}
            </Link>
          ) : (
            title
          )}
        </h3>

        {(type || year) && (
          <div className="flex items-center gap-2 text-xs font-mono text-muted shrink-0">
            {type && <span className="text-bronze font-medium">{type}</span>}
            {type && year && <span>&middot;</span>}
            {year && <span>{year}</span>}
          </div>
        )}
      </div>

      {/* One-line description */}
      <p className="text-base text-foreground/90 font-medium leading-relaxed">
        {oneLiner}
      </p>

      {/* Actual personal contribution */}
      <p className="mt-3 text-sm leading-relaxed text-foreground/80 max-w-3xl">
        <strong className="font-semibold text-navy">My Contribution: </strong>
        {contribution}
      </p>

      {/* Verified technologies */}
      <div className="mt-4 flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs font-mono">
        <span className="text-foreground/50 font-sans text-[11px] uppercase tracking-wider mr-1">
          Technologies:
        </span>
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded border border-border/80 bg-surface/60 px-2 py-0.5 text-xs text-foreground/85"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Link to case study if available */}
      {caseStudyHref && (
        <div className="mt-4">
          <Link
            href={caseStudyHref}
            className="inline-flex items-center gap-1 text-sm font-semibold text-teal hover:underline"
          >
            Read Case Study &rarr;
          </Link>
        </div>
      )}
    </article>
  );
}
