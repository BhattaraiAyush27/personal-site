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
              TypeScript, JavaScript (ESNext), C#, Dart, PHP, React, Next.js, Flutter, HTML5, CSS3, Tailwind CSS
            </dd>

            <dt className="font-semibold text-navy">
              Frameworks &amp; Data
            </dt>
            <dd className="text-foreground/85 leading-relaxed">
              .NET 8, ASP.NET Core, Laravel, EF Core, MediatR (CQRS), MySQL, PostgreSQL, Redis, MinIO, RESTful APIs
            </dd>

            <dt className="font-semibold text-navy">
              Domain Experience
            </dt>
            <dd className="text-foreground/85 leading-relaxed">
              Cross-Border Social Commerce, Shoppable Video Feeds, Customs &amp; Tariff Engines, Production-Line Tracking, Accounting &amp; ERP, POS Billing
            </dd>

            <dt className="font-semibold text-navy">
              Engineering Practices
            </dt>
            <dd className="text-foreground/85 leading-relaxed">
              CQRS Architecture, Mobile Performance &amp; Memory Lifecycle, Web Accessibility (WCAG 2.1 AA), Automated Testing, Git Workflow
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
                  Full-Stack &amp; Mobile Developer &middot; Bhetiyo
                </h3>
                <span className="text-xs font-mono text-muted shrink-0">
                  Cross-Border Social Commerce
                </span>
              </div>
              <p className="text-xs font-mono text-bronze mb-3">
                Flutter &middot; .NET 8 &middot; Next.js 16 &middot; MySQL &middot; Redis
              </p>
              <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-foreground/85 leading-relaxed">
                <li>
                  Engineered core features for a cross-border social-commerce platform connecting Nepali buyers with Chinese suppliers and local merchants.
                </li>
                <li>
                  Shipped ~42k net lines of production code across mobile, backend, and web repositories, expanding backend coverage from 218 to 341 endpoints and doubling automated test suites (80 to 176 backend tests).
                </li>
                <li>
                  Designed an Instagram/TikTok-style shoppable video feed: ranked &ldquo;For You&rdquo; reels, follow graph, stories, and LiveKit live streaming. Implemented single-active-player lifecycle management and image decoding at screen size to eliminate memory leaks and device overheating.
                </li>
                <li>
                  Implemented an automated Nepal HS-code customs and tariff engine, eSewa payment integration, verified-purchase reviews, and seller payouts.
                </li>
                <li>
                  Built the Next.js administrative console (moderation, payouts, suspensions, audit logs) and implemented App Store submission requirements (privacy manifests, in-app account deletion, dark mode).
                </li>
              </ul>
            </article>

            <article>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <h3 className="font-serif text-lg font-bold text-navy">
                  Software Developer &middot; Web Applications &amp; Business Systems
                </h3>
                <span className="text-xs font-mono text-muted shrink-0">
                  Production Systems &amp; ERP
                </span>
              </div>
              <p className="text-xs font-mono text-bronze mb-3">
                React &middot; TypeScript &middot; PHP &middot; Laravel &middot; MySQL
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
