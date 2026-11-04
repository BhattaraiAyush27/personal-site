import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Resume",
  description: "Curriculum Vitae and professional software engineering experience of Ayush Bhattarai.",
};

export default function ResumePage() {
  return (
    <div className="py-12 sm:py-16 md:py-20 print:py-0">
      <Container>
        {/* Header / Masthead */}
        <header className="border-b border-border pb-8 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-4">
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-navy tracking-tight">
              Ayush Bhattarai
            </h1>
            <p className="mt-2 text-sm sm:text-base font-mono text-bronze">
              Software Engineer &middot; React, TypeScript &amp; Laravel
            </p>
          </div>
          <div className="text-xs font-mono text-muted space-y-1 sm:text-right">
            <p>[Location Placeholder]</p>
            <p>[Email / Contact Link Placeholder]</p>
          </div>
        </header>

        {/* Technical Competencies (Editorial Definition Layout) */}
        <section className="mt-10 border-b border-border pb-10" aria-labelledby="skills-heading">
          <h2 id="skills-heading" className="font-serif text-xl font-bold text-navy mb-6">
            Technical Competencies
          </h2>
          <dl className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-2 sm:gap-6 text-sm">
            <dt className="font-semibold text-navy">
              Languages &amp; Core
            </dt>
            <dd className="text-foreground/85 leading-relaxed">
              TypeScript, JavaScript (ESNext), PHP, React, Next.js, HTML5, CSS3, Tailwind CSS
            </dd>

            <dt className="font-semibold text-navy">
              Architecture &amp; Data
            </dt>
            <dd className="text-foreground/85 leading-relaxed">
              Laravel, RESTful API design, PostgreSQL, MySQL, State Management, Domain Modeling
            </dd>

            <dt className="font-semibold text-navy">
              Engineering Practices
            </dt>
            <dd className="text-foreground/85 leading-relaxed">
              Static Site Generation, Web Accessibility (WCAG 2.1 AA), Git workflow, Automated Testing
            </dd>
          </dl>
        </section>

        {/* Experience Section */}
        <section className="mt-10 border-b border-border pb-10" aria-labelledby="experience-heading">
          <h2 id="experience-heading" className="font-serif text-xl font-bold text-navy mb-6">
            Professional Experience
          </h2>

          <aside
            aria-label="Editorial note"
            className="border-l-2 border-bronze/60 bg-bronze-muted/30 px-4 py-3 text-xs leading-relaxed text-muted"
          >
            <strong className="font-semibold text-bronze">Experience Placeholder:</strong> Populate with your verified professional history:
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Role Title &middot; Organization &middot; Dates (e.g. 2023 &ndash; Present)</li>
              <li>Bullet 1: Concrete technical challenge solved and architectural contribution.</li>
              <li>Bullet 2: Production systems engineered with React, TypeScript, or Laravel.</li>
              <li>Bullet 3: Quantifiable business or engineering outcome.</li>
            </ul>
          </aside>
        </section>

        {/* Education Section */}
        <section className="mt-10" aria-labelledby="education-heading">
          <h2 id="education-heading" className="font-serif text-xl font-bold text-navy mb-4">
            Education
          </h2>
          <div className="text-sm">
            <h3 className="font-semibold text-navy">
              [Degree / Field of Study Placeholder]
            </h3>
            <p className="mt-1 text-xs font-mono text-muted">
              [Institution Name Placeholder] &middot; [Graduation Year Placeholder]
            </p>
          </div>
        </section>
      </Container>
    </div>
  );
}
