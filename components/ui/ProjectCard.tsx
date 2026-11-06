import React from "react";
import { ProjectPreview, ProjectPreviewProps } from "./ProjectPreview";

export interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  status?: string;
  year?: string;
  contribution?: string;
}

/**
 * ProjectCard adapts legacy call sites to ProjectPreview.
 */
export function ProjectCard({
  title,
  description,
  tags,
  href,
  status,
  year,
  contribution,
}: ProjectCardProps) {
  return (
    <ProjectPreview
      title={title}
      oneLiner={description}
      contribution={
        contribution ||
        "Engineered reliable system logic, state management, and accessible interfaces tailored for operational users."
      }
      technologies={tags}
      type={status}
      year={year}
      caseStudyHref={href}
    />
  );
}

export { ProjectPreview };
export type { ProjectPreviewProps };
