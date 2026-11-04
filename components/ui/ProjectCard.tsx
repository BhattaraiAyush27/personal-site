import React from "react";
import Link from "next/link";

export interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  status?: string;
  year?: string;
}

/**
 * ProjectCard displays an editorial entry for a project or case study.
 * Why it exists: Communicates real engineering work through typography rather than dashboard-style card boxes (docs/DESIGN.md).
 */
export function ProjectCard({
  title,
  description,
  tags,
  href = "/projects",
  status,
  year,
}: ProjectCardProps) {
  return (
    <article className="border-t border-border pt-6 pb-2 transition-colors">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
        <h3 className="font-serif text-xl font-bold text-navy">
          <Link
            href={href}
            className="hover:text-teal focus-visible:outline-none focus-visible:underline transition-colors"
          >
            {title}
          </Link>
        </h3>
        <div className="flex items-center gap-2 text-xs font-mono text-muted shrink-0">
          {year && <span>{year}</span>}
          {year && status && <span>&middot;</span>}
          {status && <span>{status}</span>}
        </div>
      </div>

      <p className="text-sm leading-relaxed text-foreground/85 max-w-2xl">
        {description}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-muted">
        <span className="text-foreground/50 font-sans text-[11px] uppercase tracking-wider">
          Technologies:
        </span>
        {tags.join(", ")}
      </div>
    </article>
  );
}
