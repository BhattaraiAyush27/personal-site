import React from "react";
import type { Metadata } from "next";
import { CaseStudyLayout, CaseStudySection } from "@/components/layout/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Case Study: Garment Factory Production Management System (PMS)",
  description:
    "An architectural case study detailing the refactoring, multi-tenant engineering, domain service extraction, and test automation of a 106k-line garment-factory PMS built with Laravel 10, React 18, and TypeScript.",
};

export default function ProductionLineCaseStudyPage() {
  const metadata = {
    role: "Full-Stack & Backend Architect",
    technologies: [
      "Laravel 10",
      "PHP 8.2",
      "React 18",
      "TypeScript",
      "MySQL",
      "PHPUnit",
      "Vitest",
      "Tailwind CSS",
    ],
    database: "MySQL (Multi-Tenant, 115 Migrations)",
    status: "Rehearsal Verified",
  };

  return (
    <CaseStudyLayout
      title="Garment Factory Production Management System (PMS)"
      subtitle="Architecting a multi-tenant factory operations platform on Laravel 10 and React 18/TypeScript with 3 portals (Super-Admin, Admin, Worker), a unified work-run state machine, and fail-closed test architecture."
      category="Professional Experience · Case Study"
      metadata={metadata}
      backHref="/projects"
      backLabel="Back to Selected Work"
      nextProjectHref="/projects/bhetiyo"
      nextProjectLabel="Bhetiyo Social Commerce"
    >
      {/* 1. Overview */}
      <CaseStudySection title="1. Platform Overview" id="overview-heading">
        <p>
          This application is an enterprise-scale, multi-tenant Production Management System (PMS)
          specifically engineered for commercial garment factories. It tracks the full manufacturing
          lifecycle—from fabric roll intake and sample prototyping to high-volume assembly, quality
          rejection routing, subcontracting, and commercial billing.
        </p>
        <p>
          The system spans three isolated portal interfaces:
        </p>
        <ul className="list-disc list-outside ml-6 space-y-1.5 text-base text-foreground/85">
          <li>
            <strong className="text-navy">Super-Admin Portal:</strong> Platform-wide tenant provisioning,
            multi-database migration orchestration, company onboarding, and cross-tenant auditing.
          </li>
          <li>
            <strong className="text-navy">Factory Admin Portal:</strong> Work-order routing, specification
            versioning, inventory roll allocation, commercial invoicing, subcontract tracking, and 10
            specialized operational reports.
          </li>
          <li>
            <strong className="text-navy">Floor Worker Portal:</strong> High-contrast, touch-friendly terminal
            views allowing station operators to log roll consumption, record defect causes, and update stage
            handoffs.
          </li>
        </ul>

        {/* Workflow Architecture Diagram */}
        <div className="my-6 rounded-lg border border-border bg-surface/60 p-5 font-mono text-xs text-foreground/90 overflow-x-auto">
          <p className="text-[11px] font-sans font-semibold uppercase tracking-wider text-bronze mb-3">
            Garment Manufacturing State Machine &amp; Multi-Tenant Topology
          </p>
          <pre className="leading-relaxed whitespace-pre font-mono text-[11px] sm:text-xs">
{`┌────────────────────────────────────────────────────────────────────────┐
│                        Multi-Tenant Routing Layer                      │
│      (Host-derived tenant database resolution / Non-destructive schema) │
└────────────────────────────────────┬───────────────────────────────────┘
                                     │
           ┌─────────────────────────┴─────────────────────────┐
           ▼                                                   ▼
┌─────────────────────────────┐                     ┌────────────────────┐
│   Work-Run State Engine     │                     │ Material Inventory │
│ 4 Work Types:               │                     │ (Roll-Level Stock) │
│ - Sampling                  │                     │ - Rolls In/Out     │
│ - Re-sampling               │                     │ - Shrinkage/Cut    │
│ - Final Re-sampling         │                     │ - Balance Reconcil │
│ - Full Production           │                     └──────────┬─────────┘
└──────────┬──────────────────┘                                │
           │                                                   │
           ▼                                                   │
┌─────────────────────────────┐                                │
│ Sequential Department Stages│ ◄──────────────────────────────┘
│ Cutting ──► Sewing ──► QA Inspection ──► Packing & Dispatch
│             │          │
│             ▼          ▼
│      [Subcontract] [Rejection Routing by Cause Code]`}
          </pre>
        </div>
      </CaseStudySection>

      {/* 2. Before vs. After Engineering Metrics */}
      <CaseStudySection title="2. Codebase Transformation: Before vs. After" id="metrics-heading">
        <p>
          Over a 6-month period across 214 commits (including a 43.6k-line refactoring milestone touching
          361 files), I drove the structural transition from a fragile, controller-heavy monolithic
          prototype into a strictly typed, tested, service-oriented architecture.
        </p>

        <div className="my-4 overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse border border-border">
            <thead>
              <tr className="bg-surface/80 text-navy font-semibold">
                <th className="border border-border p-2.5 sm:p-3">Structural Area</th>
                <th className="border border-border p-2.5 sm:p-3">Baseline (Oct 1)</th>
                <th className="border border-border p-2.5 sm:p-3">Refactored</th>
                <th className="border border-border p-2.5 sm:p-3">Net Impact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60 text-foreground/85">
              <tr>
                <td className="border border-border p-2.5 sm:p-3 font-medium text-navy">
                  Domain Service Classes
                </td>
                <td className="border border-border p-2.5 sm:p-3 font-mono">1 service</td>
                <td className="border border-border p-2.5 sm:p-3 font-mono">20 services</td>
                <td className="border border-border p-2.5 sm:p-3 font-mono text-teal font-semibold">
                  +1,900% (domain decoupling)
                </td>
              </tr>
              <tr>
                <td className="border border-border p-2.5 sm:p-3 font-medium text-navy">
                  Repository Classes
                </td>
                <td className="border border-border p-2.5 sm:p-3 font-mono">22 repositories</td>
                <td className="border border-border p-2.5 sm:p-3 font-mono">40 repositories</td>
                <td className="border border-border p-2.5 sm:p-3 font-mono text-teal font-semibold">
                  +82% (query isolation)
                </td>
              </tr>
              <tr>
                <td className="border border-border p-2.5 sm:p-3 font-medium text-navy">
                  Backend Automated Tests
                </td>
                <td className="border border-border p-2.5 sm:p-3 font-mono">1 PHP test file</td>
                <td className="border border-border p-2.5 sm:p-3 font-mono">45 test files (279 tests)</td>
                <td className="border border-border p-2.5 sm:p-3 font-mono text-teal font-semibold">
                  +4,400% (533 assertions)
                </td>
              </tr>
              <tr>
                <td className="border border-border p-2.5 sm:p-3 font-medium text-navy">
                  Frontend Test Suites
                </td>
                <td className="border border-border p-2.5 sm:p-3 font-mono">0 test files</td>
                <td className="border border-border p-2.5 sm:p-3 font-mono">33 Vitest files (166 tests)</td>
                <td className="border border-border p-2.5 sm:p-3 font-mono text-teal font-semibold">
                  New automated harness
                </td>
              </tr>
              <tr>
                <td className="border border-border p-2.5 sm:p-3 font-medium text-navy">
                  TypeScript Compilation
                </td>
                <td className="border border-border p-2.5 sm:p-3 font-mono text-bronze">Failing (exit code 2)</td>
                <td className="border border-border p-2.5 sm:p-3 font-mono text-teal font-semibold">0 type errors</td>
                <td className="border border-border p-2.5 sm:p-3 font-mono text-teal font-semibold">
                  Strict mode clean
                </td>
              </tr>
              <tr>
                <td className="border border-border p-2.5 sm:p-3 font-medium text-navy">
                  Database Migrations
                </td>
                <td className="border border-border p-2.5 sm:p-3 font-mono">83 migrations</td>
                <td className="border border-border p-2.5 sm:p-3 font-mono">115 migrations</td>
                <td className="border border-border p-2.5 sm:p-3 font-mono text-teal font-semibold">
                  +32 versioned schemas
                </td>
              </tr>
              <tr>
                <td className="border border-border p-2.5 sm:p-3 font-medium text-navy">
                  Shared UI Components
                </td>
                <td className="border border-border p-2.5 sm:p-3 font-mono">15 components</td>
                <td className="border border-border p-2.5 sm:p-3 font-mono">29 components</td>
                <td className="border border-border p-2.5 sm:p-3 font-mono text-teal font-semibold">
                  +93% reuse in <code>common/</code>
                </td>
              </tr>
              <tr>
                <td className="border border-border p-2.5 sm:p-3 font-medium text-navy">
                  Total Code Volume
                </td>
                <td className="border border-border p-2.5 sm:p-3 font-mono">91.6k lines (PHP/TS)</td>
                <td className="border border-border p-2.5 sm:p-3 font-mono">106.6k lines</td>
                <td className="border border-border p-2.5 sm:p-3 font-mono text-teal font-semibold">
                  413 API routes across 85 controllers
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </CaseStudySection>

      {/* 3. Core Architectural Contributions */}
      <CaseStudySection title="3. Core Architectural Contributions" id="contributions-heading">
        <div className="space-y-6">
          {/* Contribution 1 */}
          <div className="rounded-lg border border-border bg-surface/40 p-5 sm:p-6 space-y-3">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-navy">
              1. Domain Service Layer Refactoring (1 &rarr; 20 Services)
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-foreground/85">
              The original architecture stuffed multi-thousand-line database queries, validation rules,
              and PDF exports directly into controller methods. I spearheaded the extraction of domain
              logic into 20 focused, testable domain services.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-foreground/85">
              These services encapsulate core factory operations: stock posting, commercial billing, the
              work-run state machine, specification versioning, subcontract ledger management, and tenant
              database provisioning.
            </p>
          </div>

          {/* Contribution 2 */}
          <div className="rounded-lg border border-border bg-surface/40 p-5 sm:p-6 space-y-3">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-navy">
              2. Unified Work-Run State Engine (4 Work Types)
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-foreground/85">
              Garment factories handle prototyping fundamentally differently than bulk production. I
              architected a single, unified work-run state machine that reliably orchestrates four
              distinct order workflows: <em>Sampling</em>, <em>Re-sampling</em>, <em>Final Re-sampling</em>,
              and <em>Full Production</em>.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-foreground/85">
              The engine enforces sequential department stage handoffs (Cutting &rarr; Sewing &rarr; QA &rarr; Packing),
              manages rejection routing by cause code (e.g. stitch defect, measurement variance, dye stain),
              and provides idempotent publication to prevent double-logging completions.
            </p>
          </div>

          {/* Contribution 3 */}
          <div className="rounded-lg border border-border bg-surface/40 p-5 sm:p-6 space-y-3">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-navy">
              3. Resilient Multi-Tenant Database Provisioning
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-foreground/85">
              Tenant database synchronization was previously a high-risk manual procedure prone to schema
              drift. I automated the provisioning pipeline:
            </p>
            <ul className="list-disc list-outside ml-6 space-y-1.5 text-sm sm:text-base text-foreground/85">
              <li>
                In production rehearsals, a single <code>company --all</code> command applied 204 migrations
                across 11 independent tenant databases, reconciling all 11 to 113 of 113 migrations without
                data loss.
              </li>
              <li>
                One legacy tenant was brought from 96 to 113 migrations without requiring a destructive reset.
              </li>
              <li>
                New tenant creation via the Super-Admin UI deterministically bootstraps 113 migrations, 90
                relational tables, and seeded factory administrator roles.
              </li>
              <li>
                Made all master-database migration runs non-destructive by default.
              </li>
            </ul>
          </div>

          {/* Contribution 4 */}
          <div className="rounded-lg border border-border bg-surface/40 p-5 sm:p-6 space-y-3">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-navy">
              4. Critical Data-Integrity Fixes
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-foreground/85">
              Identified and resolved severe data corruption bugs in production logic:
            </p>
            <ul className="list-disc list-outside ml-6 space-y-1.5 text-sm sm:text-base text-foreground/85">
              <li>
                <strong className="text-navy">Roll Stock-Out Reversal Defect:</strong> Material stock-out
                events previously failed to decrement specific source fabric rolls. When an operator deleted
                a stock movement, the system added phantom inventory back that was never actually subtracted.
                Re-engineered roll-level atomic deductions to maintain physical inventory parity.
              </li>
              <li>
                <strong className="text-navy">Worker Roll Measure Reports:</strong> Repaired broken worker
                tracking reports that previously rendered <code>0.00</code> across all measures to accurately
                compute live roll metrics (verified across 15 production rolls).
              </li>
              <li>
                <strong className="text-navy">HTTP 500 Route Hardening:</strong> Replaced 6 legacy unhandled
                error routes with clean 404/validation responses, fixing a hard 500 crash on the sample orders
                list and a hard 400 on the dashboard summary.
              </li>
            </ul>
          </div>
        </div>
      </CaseStudySection>

      {/* 4. Commercial Math & Parity Verification */}
      <CaseStudySection title="4. Exact-Decimal Commercial Calculations &amp; Parity" id="commercial-heading">
        <p>
          Garment manufacturing contracts hinge on fraction-of-a-cent precision across material shrinkage,
          subcontract piece rates, and tiered tax invoicing. Floating-point arithmetic errors previously
          caused rounding discrepancies between backend invoice generation and frontend client previews.
        </p>
        <p>
          I introduced exact-decimal commercial calculation utilities covering invoice totals, tax
          breakdowns, rounding rules, and allocation limits. In addition, I created a spreadsheet-formula-safe
          CSV export engine shared between PHP and the frontend, backed by a parity test suite validating
          25 shared vectors across both runtimes.
        </p>
        <div className="rounded border border-border bg-surface/60 p-4 font-mono text-xs text-navy">
          <p className="font-sans font-semibold text-bronze uppercase tracking-wider text-[11px] mb-2">
            Verified Rehearsal Evidence Figures
          </p>
          <ul className="space-y-1">
            <li>&bull; Worker hours calculation: 8 &times; 250.00 = 2,000.00</li>
            <li>&bull; Subcontract charge rate: 85 &times; 12.50 = 1,062.50</li>
            <li>&bull; Stock dispatch split ratio: 100 / 60 / 40</li>
            <li>&bull; Reconciled invoice total: 48,307.50</li>
          </ul>
        </div>
      </CaseStudySection>

      {/* 5. Security & Test Isolation */}
      <CaseStudySection title="5. Security Hardening &amp; Fail-Closed Test Isolation" id="security-heading">
        <p>
          Operational systems in manufacturing hubs require defensive security posture and strict test
          guardrails:
        </p>
        <div className="space-y-4 text-sm sm:text-base">
          <div className="border-l-2 border-teal pl-4 space-y-1.5">
            <h4 className="font-semibold text-navy">Capability-Based Authorization Middleware</h4>
            <p className="text-foreground/85 leading-relaxed">
              Implemented portal-level capability authorization, locking down endpoints across Super-Admin,
              Admin, and Worker contexts. Pinned approximately 25 route-to-permission mappings with automated
              regression tests. Fixed missing authorization gates on work-run detail reads.
            </p>
          </div>

          <div className="border-l-2 border-teal pl-4 space-y-1.5">
            <h4 className="font-semibold text-navy">Host-Derived Tenant QR Enforcement</h4>
            <p className="text-foreground/85 leading-relaxed">
              Closed a critical tenant-selection spoofing vulnerability on the public QR endpoint. Tenant
              identity is now strictly derived from the validated HTTP request host, preventing malicious
              cross-tenant data leakage. Removed a legacy credential-in-URL debug login route.
            </p>
          </div>

          <div className="border-l-2 border-teal pl-4 space-y-1.5">
            <h4 className="font-semibold text-navy">Fail-Closed Test Database Isolation</h4>
            <p className="text-foreground/85 leading-relaxed">
              Configured automated test suites to refuse execution unless connected to a verified disposable
              test database, eliminating accidental test-data pollution in staging or production factory
              tenants.
            </p>
          </div>
        </div>
      </CaseStudySection>

      {/* 6. Key Engineering Lessons */}
      <CaseStudySection title="6. Engineering Takeaways" id="lessons-heading">
        <ul className="list-disc list-outside ml-6 space-y-2 text-base text-foreground/85">
          <li>
            <strong className="text-navy">Controllers are Gateways, Not Warehouses:</strong> Moving domain
            logic out of controllers into 20 focused services proved that software complexity is best managed
            through small, single-responsibility boundaries that can be individually verified.
          </li>
          <li>
            <strong className="text-navy">Multi-Tenant Migrations Require Strict Rehearsals:</strong> Database
            migrations across dozens of tenant databases cannot rely on hope. Explicit schema reconciliation
            scripts and non-destructive migrations are mandatory for enterprise reliability.
          </li>
          <li>
            <strong className="text-navy">Strict Types Catch What Humans Miss:</strong> Taking TypeScript
            from failing (`exit 2`) to 0 errors eliminated dozens of dormant frontend bugs around nullable API
            payloads and state mismatches.
          </li>
        </ul>
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
