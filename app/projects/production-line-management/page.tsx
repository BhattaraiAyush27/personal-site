import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Case Study: Production Line Management System",
  description:
    "An architectural case study on designing an operational tracking system for manufacturing workflows using React, TypeScript, and Laravel.",
};

export default function ProductionLineCaseStudyPage() {
  return (
    <div className="py-12 sm:py-16 md:py-20">
      <Container size="narrow">
        {/* Navigation Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <Link
            href="/projects"
            className="text-xs sm:text-sm font-medium text-teal hover:underline inline-flex items-center gap-1"
          >
            &larr; Back to Selected Work
          </Link>
        </nav>

        {/* Masthead */}
        <header className="border-b border-border pb-8">
          <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-bronze font-semibold mb-3">
            Professional Experience &middot; Case Study
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight leading-tight">
            Production Line Management System
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-foreground/90 font-medium leading-relaxed">
            An operational system engineered for tracking manufacturing workflows, station
            handoffs, and assembly throughput in real time.
          </p>

          {/* Project Metadata Grid */}
          <dl className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-border/80 pt-6 text-xs font-mono">
            <div>
              <dt className="text-muted uppercase tracking-wider text-[11px]">My Role</dt>
              <dd className="mt-1 font-semibold text-navy">Full-Stack Developer</dd>
            </div>
            <div>
              <dt className="text-muted uppercase tracking-wider text-[11px]">Primary Tech</dt>
              <dd className="mt-1 font-semibold text-navy">React, TypeScript, Laravel</dd>
            </div>
            <div>
              <dt className="text-muted uppercase tracking-wider text-[11px]">Database</dt>
              <dd className="mt-1 font-semibold text-navy">MySQL &middot; Relational</dd>
            </div>
            <div>
              <dt className="text-muted uppercase tracking-wider text-[11px]">Status</dt>
              <dd className="mt-1 font-semibold text-teal">Production System</dd>
            </div>
          </dl>
        </header>

        {/* Content Body */}
        <article className="mt-10 space-y-10 text-foreground/85 text-base sm:text-lg leading-relaxed">
          {/* 1. Context & The Practical Problem */}
          <section aria-labelledby="problem-heading">
            <h2
              id="problem-heading"
              className="font-serif text-2xl sm:text-3xl font-bold text-navy tracking-tight mb-4"
            >
              1. Context &amp; The Practical Problem
            </h2>
            <div className="space-y-4">
              <p>
                In manufacturing and assembly environments, operations move through discrete, sequential
                stages: raw material issuance, component assembly, quality-control inspection, and
                final batch packaging.
              </p>
              <p>
                Before this system was implemented, workflow tracking relied on manual paper logs
                and end-of-shift reporting. This led to persistent operational blind spots:
              </p>
              <ul className="list-disc list-outside ml-6 space-y-2 text-base text-foreground/85">
                <li>
                  <strong className="text-navy">Station Starvation &amp; Bottlenecks:</strong> Floor
                  supervisors had no live visibility into whether upstream delays were halting
                  downstream assembly stations.
                </li>
                <li>
                  <strong className="text-navy">Traceability Gaps:</strong> When quality defects
                  occurred, determining the specific station, batch run, or timestamp required
                  manual audit logs.
                </li>
                <li>
                  <strong className="text-navy">Data Lag:</strong> Throughput metrics could only be
                  reconciled hours after a shift concluded, preventing rapid managerial
                  interventions during active production.
                </li>
              </ul>
            </div>
          </section>

          {/* 2. My Role & Personal Contributions */}
          <section aria-labelledby="role-heading">
            <h2
              id="role-heading"
              className="font-serif text-2xl sm:text-3xl font-bold text-navy tracking-tight mb-4"
            >
              2. My Role &amp; Personal Contributions
            </h2>
            <div className="space-y-4">
              <p>
                I was responsible for developing and maintaining the full-stack architecture
                powering station tracking and supervisor monitoring:
              </p>
              <ul className="list-disc list-outside ml-6 space-y-2 text-base text-foreground/85">
                <li>
                  <strong className="text-navy">Station Dashboard Architecture:</strong> Built the
                  station interface using React and TypeScript, managing local UI state, barcode/scanner
                  inputs, and validation feedback.
                </li>
                <li>
                  <strong className="text-navy">Backend APIs &amp; Data Modeling:</strong> Designed
                  Laravel REST API endpoints and MySQL schemas to record batch transitions, order
                  statuses, and operator actions.
                </li>
                <li>
                  <strong className="text-navy">Concurrency &amp; Idempotency Controls:</strong>{" "}
                  Implemented transactional database locks in Laravel to ensure that double-scans or
                  rapid operator submissions could never corrupt order progression states.
                </li>
                <li>
                  <strong className="text-navy">Supervisor Throughput Views:</strong> Created responsive
                  metrics dashboards allowing managers to inspect station queue lengths, active run
                  times, and quality inspection pass rates.
                </li>
              </ul>
            </div>
          </section>

          {/* 3. Technical Challenges & Architectural Decisions */}
          <section aria-labelledby="challenges-heading">
            <h2
              id="challenges-heading"
              className="font-serif text-2xl sm:text-3xl font-bold text-navy tracking-tight mb-4"
            >
              3. Technical Challenges &amp; Architectural Decisions
            </h2>

            <div className="space-y-6">
              <div className="rounded-lg border border-border bg-surface/40 p-5 sm:p-6">
                <h3 className="font-serif text-xl font-bold text-navy mb-2">
                  Challenge 1: Enforcing Strict Order Progression States
                </h3>
                <p className="text-sm sm:text-base leading-relaxed">
                  In a busy factory setting, operators frequently tap rapidly or rescan barcodes
                  if an interface feels unresponsive. Without strict validation, an order might
                  accidentally bypass quality inspection or log multiple completion timestamps.
                </p>
                <p className="mt-3 text-sm sm:text-base leading-relaxed">
                  <strong className="text-navy">Solution:</strong> We modeled work order lifecycles
                  as an explicit state machine inside Laravel. State mutations are executed within
                  database transactions with optimistic concurrency checks. An order cannot transition
                  to &ldquo;Packaging&rdquo; unless all prerequisite &ldquo;Assembly&rdquo; and
                  &ldquo;QA Passed&rdquo; assertions are verified, rejecting duplicate requests
                  idempotently.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-surface/40 p-5 sm:p-6">
                <h3 className="font-serif text-xl font-bold text-navy mb-2">
                  Challenge 2: Designing for Factory Floor Usability
                </h3>
                <p className="text-sm sm:text-base leading-relaxed">
                  Floor stations use touchscreens and rugged tablets mounted on workstations.
                  Operators frequently wear gloves and work under high fluorescent factory lighting.
                  Delicate modal dialogs, tiny dropdowns, or complex multi-step forms create
                  unacceptable operational friction.
                </p>
                <p className="mt-3 text-sm sm:text-base leading-relaxed">
                  <strong className="text-navy">Solution:</strong> I designed an uncluttered,
                  high-contrast interface adhering to WCAG AA guidelines. Interactive elements were
                  engineered with minimum 48px touch targets, clear status badges (e.g. In Progress,
                  On Hold, Completed), and direct hardware scanner integration that automatically
                  focused input fields without requiring screen taps.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-surface/40 p-5 sm:p-6">
                <h3 className="font-serif text-xl font-bold text-navy mb-2">
                  Challenge 3: Contract Typing Between Frontend &amp; Backend
                </h3>
                <p className="text-sm sm:text-base leading-relaxed">
                  As production requirements adapted, discrepancies between Laravel API resource
                  responses and React state models risked runtime errors on active floor devices.
                </p>
                <p className="mt-3 text-sm sm:text-base leading-relaxed">
                  <strong className="text-navy">Solution:</strong> We enforced strict TypeScript
                  interfaces for all API payloads and work-order data structures. By decoupling
                  display components from raw network payloads through typed transformation
                  utilities, any backend schema updates were detected and resolved during build time
                  rather than on the plant floor.
                </p>
              </div>
            </div>
          </section>

          {/* 4. What I Learned & Engineering Reflections */}
          <section aria-labelledby="learnings-heading">
            <h2
              id="learnings-heading"
              className="font-serif text-2xl sm:text-3xl font-bold text-navy tracking-tight mb-4"
            >
              4. Key Takeaways &amp; Engineering Reflections
            </h2>
            <div className="space-y-4">
              <p>
                Working on operational software highlighted fundamental truths about real-world
                engineering:
              </p>
              <ul className="list-disc list-outside ml-6 space-y-2 text-base text-foreground/85">
                <li>
                  <strong className="text-navy">Simplicity is a Feature:</strong> When systems are
                  used by non-technical operators in high-stress environments, unnecessary
                  abstractions and complex UI hierarchies lead to user error and support overhead.
                </li>
                <li>
                  <strong className="text-navy">Resilience at the Boundaries:</strong> Handling edge
                  cases—scanner disconnects, temporary network drops, and duplicate requests—is what
                  separates toy projects from production-grade enterprise software.
                </li>
                <li>
                  <strong className="text-navy">User Context Dictates Architecture:</strong> Building
                  effective software requires understanding the physical constraints of the
                  operator just as deeply as the technical stack.
                </li>
              </ul>
            </div>
          </section>

          {/* Cross-navigation */}
          <div className="border-t border-border pt-8 mt-12 flex flex-wrap items-center justify-between gap-4 text-sm font-medium">
            <Link
              href="/projects"
              className="text-teal hover:underline inline-flex items-center gap-1 font-semibold"
            >
              &larr; View All Projects
            </Link>
            <Link
              href="/contact"
              className="text-navy hover:text-teal hover:underline transition-colors"
            >
              Discuss Technical Details &rarr;
            </Link>
          </div>
        </article>
      </Container>
    </div>
  );
}
