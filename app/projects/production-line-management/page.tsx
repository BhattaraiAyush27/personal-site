import React from "react";
import type { Metadata } from "next";
import { CaseStudyLayout, CaseStudySection } from "@/components/layout/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Case Study: Production Line Management System",
  description:
    "An architectural case study detailing the design and engineering of an operational tracking system for manufacturing workflows using React, TypeScript, and Laravel.",
};

export default function ProductionLineCaseStudyPage() {
  const metadata = {
    role: "Full-Stack Developer",
    technologies: ["React", "TypeScript", "Laravel", "PHP", "MySQL", "Tailwind CSS", "REST APIs"],
    database: "MySQL (Relational)",
    status: "Production Deployment",
  };

  return (
    <CaseStudyLayout
      title="Production Line Management System"
      subtitle="An operational system engineered for tracking manufacturing workflows, station handoffs, and assembly throughput in real time."
      category="Professional Experience · Case Study"
      metadata={metadata}
      backHref="/projects"
      backLabel="Back to Selected Work"
    >
      {/* 1. Overview */}
      <CaseStudySection title="1. Overview" id="overview-heading">
        <p>
          The Production Line Management System is an operational web platform designed to track
          discrete assembly workflows in a manufacturing setting. It provides real-time visibility
          into job order progress across assembly stations, replaces manual status logs with digital
          verification, and surfaces live throughput metrics for shop-floor supervisors.
        </p>
        <p>
          The application serves two distinct user groups: floor operators responsible for executing
          station tasks and updating job status via workstation terminals, and operations managers
          requiring consolidated metrics on line efficiency, pending queues, and inspection results.
        </p>

        {/* Workflow Architecture Diagram */}
        <div className="my-6 rounded-lg border border-border bg-surface/60 p-5 font-mono text-xs text-foreground/90 overflow-x-auto">
          <p className="text-[11px] font-sans font-semibold uppercase tracking-wider text-bronze mb-3">
            System Workflow &amp; State Validation Architecture
          </p>
          <pre className="leading-relaxed whitespace-pre font-mono text-[11px] sm:text-xs">
{`[ Work Order Created ]
         │
         ▼
┌──────────────────┐
│  Material Intake │ ──(Batch Assignment)──┐
└──────────────────┘                       │
         │                                 │ (Idempotent State Check)
         ▼                                 │
┌──────────────────┐                       │
│ Assembly Station │ ──(Status Mutation)───┤
└──────────────────┘                       │
         │                                 │
         ▼                                 │
┌──────────────────┐                       │
│ Quality Control  │ ──(QA Verification)───┤
└──────────────────┘                       │
         │                                 │
         ▼                                 ▼
┌──────────────────┐            ┌────────────────────────┐
│ Final Packaging  │            │ Supervisor Live Status │
└──────────────────┘            └────────────────────────┘`}
          </pre>
        </div>
      </CaseStudySection>

      {/* 2. The Operational Problem */}
      <CaseStudySection title="2. The Operational Problem" id="problem-heading">
        <p>
          Prior to this implementation, assembly progress was tracked through physical job tickets
          and handwritten tally sheets. While simple to deploy, this approach introduced severe
          operational friction as manufacturing volume increased:
        </p>
        <ul className="list-disc list-outside ml-6 space-y-2 text-base text-foreground/85">
          <li>
            <strong className="text-navy">Station Starvation &amp; Bottlenecks:</strong> When an
            upstream machine experienced downtime or parts shortage, downstream stations were
            idled. Floor supervisors had no proactive indicator of these delays until physical queues
            visibly emptied.
          </li>
          <li>
            <strong className="text-navy">Traceability Deficits:</strong> If an assembly defect was
            detected during final packaging or post-dispatch, locating the specific workstation,
            batch run, or operator log required hours of manual ticket cross-referencing.
          </li>
          <li>
            <strong className="text-navy">Reporting Latency:</strong> Daily production metrics
            could only be compiled hours after a shift concluded, preventing managers from making
            adjustments during active production runs.
          </li>
        </ul>
      </CaseStudySection>

      {/* 3. My Role & Responsibilities */}
      <CaseStudySection title="3. My Role &amp; Responsibilities" id="role-heading">
        <p>
          As a full-stack developer on the project, I was responsible for delivering the core
          station tracking interface, the backend routing architecture, and the data schema
          supporting batch transitions. My personal responsibilities included:
        </p>
        <ul className="list-disc list-outside ml-6 space-y-2 text-base text-foreground/85">
          <li>
            <strong className="text-navy">Frontend Station Terminal:</strong> Architected the
            touchscreen interface in React and TypeScript, handling input from barcode scanners,
            optimistic local UI updates, and clear status feedback.
          </li>
          <li>
            <strong className="text-navy">Backend API Contracts:</strong> Designed and implemented
            RESTful endpoints in Laravel for order creation, station handoff transitions, and batch
            cancellations.
          </li>
          <li>
            <strong className="text-navy">Relational Data Modeling:</strong> Structured MySQL database
            schemas with foreign-key constraints, audit log tables, and indexing optimized for
            frequent status lookups by active order ID.
          </li>
          <li>
            <strong className="text-navy">Supervisor Summary Dashboard:</strong> Built responsive
            overview pages aggregating station queue lengths, active cycle times, and inspection pass
            rates for floor monitors.
          </li>
        </ul>
      </CaseStudySection>

      {/* 4. Technology Stack */}
      <CaseStudySection title="4. Technology Stack" id="tech-heading">
        <p>
          We chose proven, maintainable technologies that prioritized long-term reliability and
          straightforward maintainability over complex runtime environments:
        </p>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mt-3">
          <div className="rounded border border-border bg-surface/40 p-4">
            <dt className="font-semibold text-navy">Frontend: React &amp; TypeScript</dt>
            <dd className="mt-1 text-foreground/80 text-xs sm:text-sm leading-relaxed">
              Provides strict typing across work-order models, deterministic client state transitions,
              and low-overhead DOM rendering on floor terminals.
            </dd>
          </div>
          <div className="rounded border border-border bg-surface/40 p-4">
            <dt className="font-semibold text-navy">Backend: PHP &amp; Laravel</dt>
            <dd className="mt-1 text-foreground/80 text-xs sm:text-sm leading-relaxed">
              Delivers reliable database transaction management, structured routing, request
              validation, and clean domain services for order lifecycle management.
            </dd>
          </div>
          <div className="rounded border border-border bg-surface/40 p-4">
            <dt className="font-semibold text-navy">Database: MySQL (InnoDB)</dt>
            <dd className="mt-1 text-foreground/80 text-xs sm:text-sm leading-relaxed">
              Enforces ACID transactional guarantees, row-level locking for concurrent station updates,
              and relational integrity across work orders, stations, and logs.
            </dd>
          </div>
          <div className="rounded border border-border bg-surface/40 p-4">
            <dt className="font-semibold text-navy">Styling: Tailwind CSS</dt>
            <dd className="mt-1 text-foreground/80 text-xs sm:text-sm leading-relaxed">
              Allowed rapid construction of accessible, high-contrast user interfaces with
              touch-friendly sizing (48px+ touch targets) and consistent utility tokens.
            </dd>
          </div>
        </dl>
      </CaseStudySection>

      {/* 5. Key Engineering Challenge */}
      <CaseStudySection title="5. Key Engineering Challenge: Concurrency &amp; State Integrity" id="challenge-heading">
        <p>
          In a fast-paced manufacturing environment, workstation terminals are subject to erratic
          user inputs. Operators frequently trigger multiple scanner inputs in rapid succession,
          or multiple stations may simultaneously attempt to record actions on adjacent batch items.
        </p>
        <div className="rounded-lg border border-border bg-surface/40 p-5 sm:p-6 space-y-3">
          <h3 className="font-serif text-lg sm:text-xl font-bold text-navy">
            The Problem: Out-of-Sequence Mutations &amp; Duplicate Records
          </h3>
          <p className="text-sm sm:text-base leading-relaxed text-foreground/85">
            Without strict safeguards, rapid double-scanning could cause an order to register
            completion twice, log contradictory timestamps, or prematurely advance to &ldquo;Packaging&rdquo;
            before receiving formal &ldquo;QA Inspection&rdquo; sign-off. In addition, temporary factory
            Wi-Fi degradation meant client terminals could queue and resend requests out of order.
          </p>
        </div>
      </CaseStudySection>

      {/* 6. The Engineering Solution */}
      <CaseStudySection title="6. The Engineering Solution" id="solution-heading">
        <p>
          To ensure absolute data consistency, I implemented a two-part architectural pattern
          combining an explicit backend state machine with database transaction locks:
        </p>
        <div className="space-y-4 text-sm sm:text-base">
          <div className="border-l-2 border-teal pl-4 space-y-1.5">
            <h4 className="font-semibold text-navy">1. Enforced State Machine Transition Rules</h4>
            <p className="text-foreground/85 leading-relaxed">
              Every job order lifecycle was modeled as an explicit state graph (e.g. <code>PENDING</code> &rarr;{" "}
              <code>IN_ASSEMBLY</code> &rarr; <code>AWAITING_QA</code> &rarr; <code>QA_PASSED</code> &rarr;{" "}
              <code>PACKAGED</code>). Each transition required validating that all prerequisite conditions were
              satisfied before the state could advance.
            </p>
          </div>

          <div className="border-l-2 border-teal pl-4 space-y-1.5">
            <h4 className="font-semibold text-navy">2. Pessimistic Row Locking &amp; Idempotent API Keys</h4>
            <p className="text-foreground/85 leading-relaxed">
              Within Laravel, status mutation requests were wrapped in database transactions using{" "}
              <code>SELECT ... FOR UPDATE</code> on the target order row. If a duplicate request arrived
              with the same transition payload, the server recognized the current order state and
              safely returned the existing record without applying redundant mutations.
            </p>
          </div>

          <div className="border-l-2 border-teal pl-4 space-y-1.5">
            <h4 className="font-semibold text-navy">3. Contract Synchronization with TypeScript</h4>
            <p className="text-foreground/85 leading-relaxed">
              I established shared TypeScript interface definitions reflecting the exact Laravel API
              resource schemas. This prevented contract drift and ensured client-side validation
              mirrored backend rules, notifying operators immediately if a barcode did not meet batch
              criteria.
            </p>
          </div>
        </div>
      </CaseStudySection>

      {/* 7. Lessons & Takeaways */}
      <CaseStudySection title="7. Lessons &amp; Engineering Reflections" id="lessons-heading">
        <p>
          Building software for physical operations reinforced several core engineering principles:
        </p>
        <ul className="list-disc list-outside ml-6 space-y-2 text-base text-foreground/85">
          <li>
            <strong className="text-navy">Simplicity Trumps Cleverness:</strong> High-stress workplace
            tools must prioritize straightforward workflows and predictable behavior over complex,
            multi-layer abstractions that are difficult to diagnose during a production stop.
          </li>
          <li>
            <strong className="text-navy">Defensive Boundaries are Mandatory:</strong> Never rely
            solely on frontend validation. In operational systems, network hiccups and unintended
            double-taps are regular occurrences, making idempotent backend checks essential.
          </li>
          <li>
            <strong className="text-navy">Ergonomics Extend Beyond Code:</strong> Developing a good
            system requires understanding the physical workstation: screen distance, lighting,
            hardware scanners, and glove use all inform UI layout, contrast, and tap targets.
          </li>
        </ul>
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
