import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Curriculum Vitae and professional software engineering experience of Ayush Bhattarai — software developer specializing in React, TypeScript, PHP, and Laravel.",
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
              Software Developer &middot; React, TypeScript, PHP &amp; Laravel
            </p>
          </div>
          <div className="text-xs font-mono text-muted space-y-1 sm:text-right">
            <p>Nepal</p>
            <p className="text-teal">[contact@yourdomain.com]</p>
          </div>
        </header>

        {/* Technical Competencies */}
        <section className="mt-10 border-b border-border pb-10" aria-labelledby="skills-heading">
          <h2 id="skills-heading" className="font-serif text-xl font-bold text-navy mb-6">
            Technical Competencies
          </h2>
          <dl className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-3 sm:gap-6 text-sm">
            <dt className="font-semibold text-navy">
              Languages &amp; Core
            </dt>
            <dd className="text-foreground/85 leading-relaxed">
              TypeScript, JavaScript (ESNext), PHP, React, Next.js, HTML5, CSS3, Tailwind CSS
            </dd>

            <dt className="font-semibold text-navy">
              Frameworks &amp; Data
            </dt>
            <dd className="text-foreground/85 leading-relaxed">
              Laravel, RESTful API design, PostgreSQL, MySQL, Relational Database Modeling
            </dd>

            <dt className="font-semibold text-navy">
              Domain Experience
            </dt>
            <dd className="text-foreground/85 leading-relaxed">
              Production-Line Tracking, Accounting &amp; ERP, Restaurant Billing, Parking &amp; Ticketing, E-Commerce
            </dd>

            <dt className="font-semibold text-navy">
              Engineering Practices
            </dt>
            <dd className="text-foreground/85 leading-relaxed">
              Pragmatic Architecture, Web Accessibility (WCAG 2.1 AA), Independent System Reasoning, Git Workflow
            </dd>
          </dl>
        </section>

        {/* Experience Section */}
        <section className="mt-10 border-b border-border pb-10" aria-labelledby="experience-heading">
          <h2 id="experience-heading" className="font-serif text-xl font-bold text-navy mb-6">
            Professional Experience
          </h2>

          <div className="space-y-8">
            <article>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <h3 className="font-serif text-lg font-bold text-navy">
                  Software Developer &middot; Web Applications &amp; Business Systems
                </h3>
                <span className="text-xs font-mono text-muted shrink-0">
                  [Dates / Ongoing Placeholder]
                </span>
              </div>
              <p className="text-xs font-mono text-bronze mb-3">
                [Company / Client Engagement Placeholder] &middot; Nepal
              </p>
              <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-foreground/85 leading-relaxed">
                <li>
                  Developed and maintained business management web applications utilizing React, TypeScript, PHP, and Laravel.
                </li>
                <li>
                  Contributed to production tracking systems enabling accurate monitoring of manufacturing and assembly workflows.
                </li>
                <li>
                  Engineered modules for accounting and ERP platforms, focusing on database integrity, billing reconciliations, and reporting accuracy.
                </li>
                <li>
                  Implemented specialized commercial tools including restaurant billing systems, parking and ticketing solutions, and e-commerce platforms.
                </li>
                <li>
                  Prioritized simplicity, maintainable code architectures, and long-term readability over fleeting abstractions.
                </li>
              </ul>
            </article>
          </div>
        </section>

        {/* Long-term Study & Intellectual Interests */}
        <section className="mt-10 border-b border-border pb-10" aria-labelledby="interests-heading">
          <h2 id="interests-heading" className="font-serif text-xl font-bold text-navy mb-4">
            Long-Term Intellectual Interests
          </h2>
          <p className="text-sm text-foreground/85 leading-relaxed">
            Independent study in <strong className="font-semibold text-navy">mathematics, computational neuroscience, and neurotechnology</strong>—specifically brain-computer interfaces (BCIs) and human-machine interaction. Sustained interest in epistemological philosophy and ethical agency.
          </p>
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
              [Institution Name Placeholder] &middot; Nepal &middot; [Graduation Year Placeholder]
            </p>
          </div>
        </section>
      </Container>
    </div>
  );
}
