import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ProjectPreview } from "@/components/ui/ProjectPreview";

export default function HomePage() {
  return (
    <div className="py-12 sm:py-16 md:py-20 space-y-16 sm:space-y-20">
      {/* Editorial Hero Section */}
      <section aria-labelledby="intro-heading">
        <Container>
          <div className="max-w-2xl">
            {/* Thematic kicker */}
            <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-bronze font-semibold mb-4">
              Software Development &middot; Neurotechnology &middot; Ideas
            </p>

            <h1
              id="intro-heading"
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-navy leading-tight sm:leading-tight md:leading-[1.15]"
            >
              Building useful software. Exploring complex ideas.
            </h1>

            <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-foreground/90">
              <p>
                I&apos;m a software developer based in Nepal, working primarily with{" "}
                <strong className="font-semibold text-navy">
                  React, TypeScript, PHP, and Laravel
                </strong>
                .
              </p>
              <p>
                My professional experience spans business applications, including production
                tracking, ERP systems, e-commerce, and operational management tools.
              </p>
              <p>
                I&apos;m interested in building reliable, well-designed software while developing a
                deeper understanding of{" "}
                <strong className="font-semibold text-navy">
                  mathematics, neurotechnology, and the systems that connect humans with machines
                </strong>
                .
              </p>
              <p>
                This website is where I share what I build, document what I learn, and explore
                ideas worth thinking about.
              </p>
            </div>

            {/* Restrained Editorial Cross-Navigation */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium">
              <Link
                href="/projects"
                className="text-teal hover:underline inline-flex items-center gap-1 font-semibold"
              >
                Explore My Work &rarr;
              </Link>
              <Link
                href="/writing"
                className="text-navy hover:text-teal hover:underline transition-colors"
              >
                Read My Writing
              </Link>
              <Link
                href="/resume"
                className="text-muted hover:text-navy transition-colors"
              >
                View R&eacute;sum&eacute;
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Selected Projects / Professional Work Section */}
      <section aria-labelledby="featured-projects-heading" className="border-t border-border pt-12 sm:pt-16">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-8">
            <div>
              <h2
                id="featured-projects-heading"
                className="font-serif text-2xl sm:text-3xl font-bold text-navy"
              >
                Selected Work
              </h2>
              <p className="mt-1 text-sm text-muted">
                Practical systems demonstrating engineering competence, workflow tracking, and reliable software architecture.
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
            <ProjectPreview
              title="Bhetiyo — Cross-Border Social Commerce Platform"
              oneLiner="Cross-border social-commerce platform connecting Nepali buyers with Chinese suppliers and local sellers through shoppable video feeds, live streaming, and a Nepal customs tariff engine."
              contribution="Built the social video layer (ranked For-You reels feed, LiveKit live streaming, single-active-player video lifecycle), implemented the Nepal HS-code customs and tariff engine with eSewa payments, shipped the web admin console, and expanded the .NET 8 CQRS backend API from 218 to 341 endpoints."
              technologies={[
                ".NET 8",
                "C#",
                "Flutter",
                "Dart",
                "Next.js 16",
                "TypeScript",
                "EF Core",
                "MySQL",
                "Redis",
                "LiveKit",
              ]}
              type="Production Platform · Case study"
              caseStudyHref="/projects/bhetiyo"
            />
            <ProjectPreview
              title="Garment Factory Production Management System (PMS)"
              oneLiner="A multi-tenant factory operations platform on Laravel 10 and React 18/TypeScript with 3 portals (super-admin, admin, worker) and a unified work-run state machine."
              contribution="Over 214 commits, extracted domain logic into 20 services (1 → 20), built a work-run engine for 4 order types, automated multi-tenant migration reconciliation across 11 databases, fixed critical roll stock-out defects, and scaled test coverage to 279 PHPUnit and 166 Vitest tests with 0 TypeScript errors."
              technologies={["Laravel 10", "PHP", "React 18", "TypeScript", "MySQL", "PHPUnit", "Vitest", "Tailwind CSS"]}
              type="Professional experience · Case study"
              caseStudyHref="/projects/production-line-management"
            />
            <ProjectPreview
              title="Multi-Tenant ERP, Accounting & POS Platform"
              oneLiner="Enterprise cloud platform for Nepali businesses spanning statutory VAT registers, double-entry financial accounting, FIFO inventory costing, and POS tab billing."
              contribution="Over 835 commits (~540k lines added across 10 months), personally built 74% of report controllers (28/38), 67% of report pages (30/45), 54% of database migrations (129/241), and 62% of business logic helpers (26/42), including FIFO stock valuation, backdated cost recalculation, and statutory VAT export engines."
              technologies={["Laravel 10", "PHP", "React 18", "TypeScript", "MySQL", "REST APIs", "Tailwind CSS"]}
              type="Professional experience · Case study"
              caseStudyHref="/projects/erp-accounting-pos"
            />
            <ProjectPreview
              title="Marmat Sewa — Repair Management SaaS"
              oneLiner="A multi-tenant SaaS platform built to streamline equipment maintenance ticketing, repair job lifecycle tracking, and client billing."
              contribution="Designed the multi-tenant database isolation schema, implemented role-based authorization rules (admin, technician, client), and built the full-stack system with Next.js, TypeScript, and Laravel."
              technologies={["Next.js", "React", "TypeScript", "Laravel", "PostgreSQL", "Tailwind CSS"]}
              type="Independent project · In development"
              caseStudyHref="/projects"
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
                Explorations across software design, mathematics, neurotechnology, and philosophy.
              </p>
            </div>
            <Link
              href="/writing"
              className="text-sm font-medium text-teal hover:underline shrink-0"
            >
              All writing &rarr;
            </Link>
          </div>

          <div className="space-y-6">
            <article className="border-t border-border pt-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <h3 className="font-serif text-xl font-bold text-navy">
                  <Link
                    href="/writing"
                    className="hover:text-teal focus-visible:outline-none focus-visible:underline transition-colors"
                  >
                    Architectural Simplicity in Business Web Systems
                  </Link>
                </h3>
                <span className="text-xs font-mono text-muted shrink-0">
                  Forthcoming
                </span>
              </div>
              <p className="text-sm leading-relaxed text-foreground/85 max-w-2xl">
                Reflections on balancing practical problem-solving with clean domain models in production-line and ERP architectures.
              </p>
            </article>

            <article className="border-t border-border pt-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <h3 className="font-serif text-xl font-bold text-navy">
                  <Link
                    href="/writing"
                    className="hover:text-teal focus-visible:outline-none focus-visible:underline transition-colors"
                  >
                    Foundational Mathematics &amp; Neurotechnology Notes
                  </Link>
                </h3>
                <span className="text-xs font-mono text-muted shrink-0">
                  Research Note
                </span>
              </div>
              <p className="text-sm leading-relaxed text-foreground/85 max-w-2xl">
                Documenting self-directed study in computational neuroscience, linear algebra, and brain-computer interface paradigms.
              </p>
            </article>
          </div>
        </Container>
      </section>
    </div>
  );
}
