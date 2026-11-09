import React from "react";
import type { Metadata } from "next";
import { CaseStudyLayout, CaseStudySection } from "@/components/layout/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Case Study: Multi-Tenant ERP, Accounting & POS Platform",
  description:
    "An architectural case study detailing the engineering of an enterprise multi-tenant ERP, accounting, inventory, and POS platform for Nepali businesses across 835 commits, 129 migrations, and 221 frontend pages using Laravel and React.",
};

export default function ErpAccountingCaseStudyPage() {
  const metadata = {
    role: "Core Full-Stack Developer",
    technologies: [
      "Laravel 10",
      "PHP 8.2",
      "React 18",
      "TypeScript",
      "MySQL (Multi-Tenant)",
      "REST APIs",
      "Tailwind CSS",
    ],
    database: "MySQL (Multi-Tenant, 241 Migrations)",
    status: "10-Month Active Deployment (835 Commits)",
    timeline: "Dec 2025 – Oct 2026",
  };

  return (
    <CaseStudyLayout
      title="Multi-Tenant ERP, Accounting &amp; POS Platform"
      subtitle="Scaling a mission-critical commercial ERP for Nepali enterprises: 835 commits over 10 months, 543k lines written, FIFO inventory recalculation, and statutory VAT reporting across 472 pages."
      category="Professional Experience · Case Study"
      metadata={metadata}
      backHref="/projects"
      backLabel="Back to Selected Work"
      nextProjectHref="/projects/production-line-management"
      nextProjectLabel="Garment Factory PMS"
    >
      {/* 1. Overview */}
      <CaseStudySection title="1. Platform Overview" id="overview-heading">
        <p>
          This platform is an enterprise-scale, multi-tenant business management system engineered for
          Nepali enterprises spanning retail, wholesale, food &amp; beverage, and distribution sectors.
          It integrates core commercial operations into a unified system: double-entry financial accounting,
          statutory VAT registers, sales and purchase cycles, FIFO inventory costing, POS tab billing, and
          third-party courier logistics.
        </p>
        <p>
          Between December 2025 and October 2026 (~10 months), I served as a primary developer driving
          a substantial share of the platform&apos;s functional growth, authoring 835 commits (~36% of all
          repository commits) and introducing 1,049 live files that still power the active codebase.
        </p>

        {/* High-level Topology Diagram */}
        <div className="my-6 rounded-lg border border-border bg-surface/60 p-5 font-mono text-xs text-foreground/90 overflow-x-auto">
          <p className="text-[11px] font-sans font-semibold uppercase tracking-wider text-bronze mb-3">
            Modular Subsystems &amp; Data Flow Topology
          </p>
          <pre className="leading-relaxed whitespace-pre font-mono text-[11px] sm:text-xs">
{`┌────────────────────────────────────────────────────────────────────────┐
│                   React 18 / TypeScript Web Interface                  │
│       (472 Total Pages · 221 Personal Pages · 30 Reporting Pages)      │
└────────────────────────────────────┬───────────────────────────────────┘
                                     │
           ┌─────────────────────────┼─────────────────────────┐
           ▼                         ▼                         ▼
┌─────────────────────┐   ┌─────────────────────┐   ┌─────────────────────┐
│  Sales & Purchases  │   │ Inventory & Costing │   │ Statutory Reporting │
│ - Order & Invoices  │   │ - FIFO Valuation    │   │ - Nepal VAT Register│
│ - Debit/Credit Notes│   │ - Backdated Recalc  │   │ - General Ledgers   │
│ - Term Calculations │   │ - BOM Assembly      │   │ - Excel/PDF Exports │
└──────────┬──────────┘   └──────────┬──────────┘   └──────────┬──────────┘
           │                         │                         │
           └─────────────────────────┼─────────────────────────┘
                                     │
                                     ▼
┌────────────────────────────────────────────────────────────────────────┐
│                  Laravel 10 Backend &amp; Business Services                │
│       (366 Total Controllers · 147 Personal · 26 Helper Classes)       │
└────────────────────────────────────┬───────────────────────────────────┘
                                     │
                                     ▼
┌────────────────────────────────────────────────────────────────────────┐
│               MySQL Multi-Tenant Isolated Company Schemas              │
│       (241 Total Migrations · 129 Personal · Fiscal Year Indices)      │
└────────────────────────────────────────────────────────────────────────┘`}
          </pre>
        </div>
      </CaseStudySection>

      {/* 2. Quantified Codebase Contribution */}
      <CaseStudySection title="2. Quantified Codebase Share &amp; Product Growth" id="metrics-heading">
        <p>
          During my 10 months on the project, the platform expanded from an early-stage tool into an
          extensive ERP suite. The whole project grew from 87 to 366 backend controllers (~4.2&times;) and from
          90 to 472 frontend pages (~5.2&times;).
        </p>
        <p>
          Based on direct git history analysis, my personal contributions constitute the largest individual
          share of the current live codebase:
        </p>

        <div className="my-4 overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse border border-border">
            <thead>
              <tr className="bg-surface/80 text-navy font-semibold">
                <th className="border border-border p-2.5 sm:p-3">Functional Module</th>
                <th className="border border-border p-2.5 sm:p-3">My Authored Files</th>
                <th className="border border-border p-2.5 sm:p-3">Total in Platform</th>
                <th className="border border-border p-2.5 sm:p-3">Personal Contribution Share</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60 text-foreground/85">
              <tr>
                <td className="border border-border p-2.5 sm:p-3 font-medium text-navy">
                  Report Controllers
                </td>
                <td className="border border-border p-2.5 sm:p-3 font-mono">28 controllers</td>
                <td className="border border-border p-2.5 sm:p-3 font-mono">38 controllers</td>
                <td className="border border-border p-2.5 sm:p-3 font-mono text-teal font-semibold">
                  74%
                </td>
              </tr>
              <tr>
                <td className="border border-border p-2.5 sm:p-3 font-medium text-navy">
                  Report Frontend Pages
                </td>
                <td className="border border-border p-2.5 sm:p-3 font-mono">30 pages</td>
                <td className="border border-border p-2.5 sm:p-3 font-mono">45 pages</td>
                <td className="border border-border p-2.5 sm:p-3 font-mono text-teal font-semibold">
                  67%
                </td>
              </tr>
              <tr>
                <td className="border border-border p-2.5 sm:p-3 font-medium text-navy">
                  Business Logic Helper Classes
                </td>
                <td className="border border-border p-2.5 sm:p-3 font-mono">26 helpers</td>
                <td className="border border-border p-2.5 sm:p-3 font-mono">42 helpers</td>
                <td className="border border-border p-2.5 sm:p-3 font-mono text-teal font-semibold">
                  62%
                </td>
              </tr>
              <tr>
                <td className="border border-border p-2.5 sm:p-3 font-medium text-navy">
                  Database Migrations
                </td>
                <td className="border border-border p-2.5 sm:p-3 font-mono">129 migrations</td>
                <td className="border border-border p-2.5 sm:p-3 font-mono">241 migrations</td>
                <td className="border border-border p-2.5 sm:p-3 font-mono text-teal font-semibold">
                  54%
                </td>
              </tr>
              <tr>
                <td className="border border-border p-2.5 sm:p-3 font-medium text-navy">
                  All Frontend UI Pages
                </td>
                <td className="border border-border p-2.5 sm:p-3 font-mono">221 pages</td>
                <td className="border border-border p-2.5 sm:p-3 font-mono">472 pages</td>
                <td className="border border-border p-2.5 sm:p-3 font-mono text-teal font-semibold">
                  47%
                </td>
              </tr>
              <tr>
                <td className="border border-border p-2.5 sm:p-3 font-medium text-navy">
                  All Backend Controllers
                </td>
                <td className="border border-border p-2.5 sm:p-3 font-mono">147 controllers</td>
                <td className="border border-border p-2.5 sm:p-3 font-mono">366 controllers</td>
                <td className="border border-border p-2.5 sm:p-3 font-mono text-teal font-semibold">
                  40%
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-xs font-mono text-muted mt-2">
          * Volume data: ~543k lines added over 835 commits; ~244k live lines are directly attributed to my commits today.
        </p>
      </CaseStudySection>

      {/* 3. What Was Built, By Functional Area */}
      <CaseStudySection title="3. Core Subsystems Built" id="subsystems-heading">
        <div className="space-y-6">
          {/* Subsystem 1 */}
          <div className="rounded-lg border border-border bg-surface/40 p-5 sm:p-6 space-y-3">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-navy">
              1. Statutory VAT Registers &amp; Reporting Engine (122 Commits &middot; 80 Pages)
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-foreground/85">
              Reporting represents the largest functional module I created. In Nepal, business accounting
              is governed by strict Inland Revenue Department (IRD) statutory formats.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-foreground/85">
              I designed and delivered official VAT registers for Sales, Purchases, and Sales/Purchase
              Returns, supporting pixel-perfect Excel and PDF exports (33 dedicated export commits). Built
              invoice term reports, customer/vendor balance summaries, and time-column ledger statements
              allowing accountants to review statement histories across customizable date ranges.
            </p>
          </div>

          {/* Subsystem 2 */}
          <div className="rounded-lg border border-border bg-surface/40 p-5 sm:p-6 space-y-3">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-navy">
              2. Sales &amp; Purchase Commercial Lifecycle (145 Commits &middot; 24 Controllers)
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-foreground/85">
              Authored 103 sales commits and 42 purchase commits covering orders, pro-forma quotes, tax
              invoices, returns, import purchase tracking, and cancel/delete approval workflows. Built 51
              transaction UI pages supporting multi-currency pricing, line-item discounts, and credit term
              rules.
            </p>
          </div>

          {/* Subsystem 3 */}
          <div className="rounded-lg border border-border bg-surface/40 p-5 sm:p-6 space-y-3">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-navy">
              3. Inventory Valuation &amp; Costing Engine (31 Commits &middot; 17 Pages)
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-foreground/85">
              Engineered core algorithms for physical stock takes, product opening balances, picklists, and
              Bill of Materials (BOM) assembly relationships. Key helper classes I authored include:
            </p>
            <ul className="list-disc list-outside ml-6 space-y-1 text-sm sm:text-base text-foreground/85">
              <li>
                <code>StockFIFOHelper</code>: Tracks tiered cost layers and consumes inventory units on a
                strict First-In, First-Out basis.
              </li>
              <li>
                <code>BackdatedStockRecalculator</code>: Chronologically re-evaluates downstream inventory
                cost layers and journal balance entries when a user inserts or adjusts a backdated transaction.
              </li>
              <li>
                <code>BomRelationshipHelper</code> &amp; <code>StockValuationDistributor</code>: Computes
                raw material consumption and landed overhead allocation during finished goods assembly.
              </li>
            </ul>
          </div>

          {/* Subsystem 4 */}
          <div className="rounded-lg border border-border bg-surface/40 p-5 sm:p-6 space-y-3">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-navy">
              4. POS, Restaurant Billing &amp; Thermal Printing (49 Commits)
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-foreground/85">
              Built 5 POS controllers, 3 POS device controllers, and 14 frontend screens supporting retail POS
              and restaurant tab billing. Integrated Kitchen Order Ticket (KOT) generation and thermal receipt
              printing (23 print commits) with support for ESC/POS commands and multi-counter cash settlements.
            </p>
          </div>

          {/* Subsystem 5 */}
          <div className="rounded-lg border border-border bg-surface/40 p-5 sm:p-6 space-y-3">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-navy">
              5. Financial Accounting &amp; Integrations
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-foreground/85">
              Delivered 52 accounting commits covering journal vouchers, cash/bank transfers, ledger opening
              balance rollovers, and reconciled purchase return representations. Built 19 V3 external API
              endpoints, 5 payment gateway webhook handlers, and logistics tracking for the Nepal Courier
              Management (NCM) module.
            </p>
          </div>
        </div>
      </CaseStudySection>

      {/* 4. Engineering Challenges & Solutions */}
      <CaseStudySection title="4. Technical Challenges &amp; Solutions" id="challenges-heading">
        <div className="space-y-6">
          {/* Challenge 1 */}
          <div className="rounded-lg border border-border bg-surface/40 p-5 sm:p-6 space-y-3">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-navy">
              Challenge 1: Managing Backdated Transactions in FIFO Costing
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-foreground/85">
              <strong className="text-navy">Problem:</strong> Warehouse managers frequently record stock intake
              vouchers or supplier returns days after goods physically arrive, while sales orders have already
              dispatched items using older cost estimates. Without an automated recalculation engine, backdated
              receipts cause permanent distortion in Cost of Goods Sold (COGS) and inventory valuation.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-foreground/85">
              <strong className="text-navy">Solution:</strong> I architected the{" "}
              <code>BackdatedStockRecalculator</code>. When a transaction is backdated, the service identifies
              the earliest affected date, walks forward through all subsequent stock movements for that SKU,
              and re-applies FIFO cost consumption layers. The recalculator executes within a database
              transaction, generating corrective ledger adjustment vouchers automatically.
            </p>
          </div>

          {/* Challenge 2 */}
          <div className="rounded-lg border border-border bg-surface/40 p-5 sm:p-6 space-y-3">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-navy">
              Challenge 2: Query Optimization on Multi-Year Ledger Statements
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-foreground/85">
              <strong className="text-navy">Problem:</strong> As enterprise tenants accumulated hundreds of
              thousands of transactions over multiple fiscal periods, general ledger queries suffered severe
              latency due to table scans across unindexed transaction dates and unsegmented fiscal boundaries.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-foreground/85">
              <strong className="text-navy">Solution:</strong> I introduced a compound unique database index on{" "}
              <code>(fiscal_year_id, invoice_number)</code> to prevent concurrent sequence collisions, indexed
              posting timestamps, and refactored the ledger SQL query to compute running opening balances via
              indexed subqueries rather than scanning all historical rows.
            </p>
          </div>

          {/* Challenge 3 */}
          <div className="rounded-lg border border-border bg-surface/40 p-5 sm:p-6 space-y-3">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-navy">
              Challenge 3: Scaling a Multi-Tenant Schema without Regressions
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-foreground/85">
              <strong className="text-navy">Problem:</strong> Expanding the product from 90 to 472 UI pages and
              adding 129 database migrations meant schema updates had to execute cleanly across diverse client
              company databases without downtime or data corruption.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-foreground/85">
              <strong className="text-navy">Solution:</strong> Authored strictly versioned, idempotent
              migrations and resolved 162 production edge cases across 162 bug-fix commits (representing 19% of
              my total commits). Built reusable UI primitives in <code>common/</code> (growing from 15 to 29
              components) to maintain UI consistency across all 472 pages.
            </p>
          </div>
        </div>
      </CaseStudySection>

      {/* 5. Key Engineering Lessons */}
      <CaseStudySection title="5. Engineering Takeaways" id="lessons-heading">
        <ul className="list-disc list-outside ml-6 space-y-2 text-base text-foreground/85">
          <li>
            <strong className="text-navy">Commercial Software Demands Exact Precision:</strong> Rounding
            assumptions and floating-point math have no place in accounting. Tax registers and invoice lines must
            be governed by exact decimal calculation helpers with rigid constraint verification.
          </li>
          <li>
            <strong className="text-navy">Separation of Calculation Helpers:</strong> Isolating complex business
            rules into standalone helper classes (FIFO, VAT mapping, term calculations) proved vital for
            preventing controller bloat across 366 backend endpoints.
          </li>
          <li>
            <strong className="text-navy">Sustained Commit Discipline:</strong> Driving 835 commits over 10
            months demonstrated that building substantial enterprise software requires daily consistency,
            pragmatic bug triage (162 fixes), and continuous schema maintenance.
          </li>
        </ul>
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
