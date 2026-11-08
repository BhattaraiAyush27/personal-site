import React from "react";
import type { Metadata } from "next";
import { CaseStudyLayout, CaseStudySection } from "@/components/layout/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Case Study: Bhetiyo — Cross-Border Social Commerce Platform",
  description:
    "An architectural case study detailing the engineering, performance stabilization, and feature expansion of Bhetiyo, a cross-border social-commerce platform built with Flutter, .NET 8 CQRS, and Next.js.",
};

export default function BhetiyoCaseStudyPage() {
  const metadata = {
    role: "Full-Stack & Mobile Developer",
    technologies: [
      ".NET 8",
      "C#",
      "Flutter",
      "Dart",
      "Next.js 16",
      "React 19",
      "TypeScript",
      "EF Core",
      "MySQL",
      "Redis",
      "LiveKit",
    ],
    database: "MySQL (EF Core) + Redis Cache",
    status: "Production Architecture",
  };

  return (
    <CaseStudyLayout
      title="Bhetiyo — Cross-Border Social Commerce Platform"
      subtitle="Connecting Nepali consumers with international suppliers and local merchants through shoppable video feeds, live streaming, and a Nepal customs tariff engine."
      category="Production Platform · Case Study"
      metadata={metadata}
      backHref="/projects"
      backLabel="Back to Selected Work"
      nextProjectHref="/projects/production-line-management"
      nextProjectLabel="Production Line Management System"
    >
      {/* 1. Overview */}
      <CaseStudySection title="1. Platform Overview" id="overview-heading">
        <p>
          Bhetiyo is a cross-border social-commerce platform engineered specifically for the Nepali
          market. It bridges local consumers directly with Chinese manufacturers and verified domestic
          sellers through an interactive, shoppable video experience combining short-form reels, live
          streaming broadcasts, group buying, and flash sales.
        </p>
        <p>
          Unlike conventional e-commerce storefronts, Bhetiyo integrates a full landed-cost engine
          that computes Nepal customs tariffs, HS-code duties, and cross-border freight fees in real
          time prior to checkout.
        </p>

        {/* Multi-tier Architecture Diagram */}
        <div className="my-6 rounded-lg border border-border bg-surface/60 p-5 font-mono text-xs text-foreground/90 overflow-x-auto">
          <p className="text-[11px] font-sans font-semibold uppercase tracking-wider text-bronze mb-3">
            Multi-Tier System Architecture
          </p>
          <pre className="leading-relaxed whitespace-pre font-mono text-[11px] sm:text-xs">
{`┌────────────────────────────────┐     ┌────────────────────────────────┐
│   Flutter Mobile Application   │     │    Next.js 16 Web Storefront   │
│   (iOS & Android / LiveKit)    │     │   (Seller & Admin Consoles)    │
└───────────────┬────────────────┘     └───────────────┬────────────────┘
                │                                      │
                ▼                                      ▼
    ┌──────────────────────────────────────────────────────┐
    │          .NET 8 Web API (CQRS with MediatR)          │
    │   Auth · Social Feed · Customs Engine · Orders · Pay │
    └───────────┬──────────────────────────────┬───────────┘
                │                              │
                ▼                              ▼
    ┌───────────────────────┐      ┌───────────────────────┐
    │   MySQL (EF Core 8)   │      │   Redis Cache / MinIO │
    │ 43 Relational Entities│      │ Video & S3 Object Host│
    └───────────────────────┘      └───────────────────────┘`}
          </pre>
        </div>
      </CaseStudySection>

      {/* 2. Before vs. After Sprint Metrics */}
      <CaseStudySection title="2. Engineering Velocity & Measurable Outcomes" id="metrics-heading">
        <p>
          I joined an existing early-stage codebase and executed an intensive 6-day sprint (161 commits,
          averaging ~27 commits per day) focused on shipping the missing social infrastructure,
          stabilizing critical video performance bottlenecks, expanding backend API coverage, and
          hardening security.
        </p>
        <p>
          The quantitative impact across the three repositories (hand-written Dart, C#, and TypeScript,
          excluding generated assets):
        </p>

        <div className="my-4 overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse border border-border">
            <thead>
              <tr className="bg-surface/80 text-navy font-semibold">
                <th className="border border-border p-2.5 sm:p-3">System Dimension</th>
                <th className="border border-border p-2.5 sm:p-3">Baseline</th>
                <th className="border border-border p-2.5 sm:p-3">After Sprint</th>
                <th className="border border-border p-2.5 sm:p-3">Net Impact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60 text-foreground/85">
              <tr>
                <td className="border border-border p-2.5 sm:p-3 font-medium text-navy">
                  Production Source Lines
                </td>
                <td className="border border-border p-2.5 sm:p-3 font-mono">~92,000</td>
                <td className="border border-border p-2.5 sm:p-3 font-mono">~134,500</td>
                <td className="border border-border p-2.5 sm:p-3 font-mono text-teal font-semibold">
                  +42,500 (+46%)
                </td>
              </tr>
              <tr>
                <td className="border border-border p-2.5 sm:p-3 font-medium text-navy">
                  .NET 8 API Endpoints
                </td>
                <td className="border border-border p-2.5 sm:p-3 font-mono">218</td>
                <td className="border border-border p-2.5 sm:p-3 font-mono">341</td>
                <td className="border border-border p-2.5 sm:p-3 font-mono text-teal font-semibold">
                  +123 endpoints (+56%)
                </td>
              </tr>
              <tr>
                <td className="border border-border p-2.5 sm:p-3 font-medium text-navy">
                  Database Entities &amp; Migrations
                </td>
                <td className="border border-border p-2.5 sm:p-3 font-mono">33 entities, 1 migration</td>
                <td className="border border-border p-2.5 sm:p-3 font-mono">43 entities, 28 migrations</td>
                <td className="border border-border p-2.5 sm:p-3 font-mono text-teal font-semibold">
                  +10 core models
                </td>
              </tr>
              <tr>
                <td className="border border-border p-2.5 sm:p-3 font-medium text-navy">
                  Backend Automated Tests
                </td>
                <td className="border border-border p-2.5 sm:p-3 font-mono">80 tests</td>
                <td className="border border-border p-2.5 sm:p-3 font-mono">176 tests</td>
                <td className="border border-border p-2.5 sm:p-3 font-mono text-teal font-semibold">
                  2.2&times; test coverage
                </td>
              </tr>
              <tr>
                <td className="border border-border p-2.5 sm:p-3 font-medium text-navy">
                  Mobile Test Coverage
                </td>
                <td className="border border-border p-2.5 sm:p-3 font-mono">37 files (4.7k lines)</td>
                <td className="border border-border p-2.5 sm:p-3 font-mono">80 files (10.6k lines)</td>
                <td className="border border-border p-2.5 sm:p-3 font-mono text-teal font-semibold">
                  +125% test suite expansion
                </td>
              </tr>
              <tr>
                <td className="border border-border p-2.5 sm:p-3 font-medium text-navy">
                  Mobile Codebase Health
                </td>
                <td className="border border-border p-2.5 sm:p-3 font-mono">366 files (fragmented)</td>
                <td className="border border-border p-2.5 sm:p-3 font-mono">299 clean files</td>
                <td className="border border-border p-2.5 sm:p-3 font-mono text-teal font-semibold">
                  Pruned 67 dead/duplicate files
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </CaseStudySection>

      {/* 3. Key Responsibilities & Contributions */}
      <CaseStudySection title="3. My Personal Contributions" id="contributions-heading">
        <p>
          My engineering work spanned all three tiers of the platform:
        </p>
        <ul className="list-disc list-outside ml-6 space-y-2 text-base text-foreground/85">
          <li>
            <strong className="text-navy">Social Feed &amp; Streaming Architecture:</strong> Implemented
            the complete social graph—follow/unfollow, user blocking, ranked &ldquo;For You&rdquo; reels
            feed with infinite pagination, stories, reactions, comments, and real-time live broadcasting
            via LiveKit.
          </li>
          <li>
            <strong className="text-navy">Customs &amp; Tariffs Engine:</strong> Designed the Nepal
            landed-cost calculation service in .NET 8, applying HS-code tariff categories, variable
            shipping modes, VAT, and eSewa payment integration.
          </li>
          <li>
            <strong className="text-navy">Commercial Marketplace Features:</strong> Added multi-option
            product attributes (size, color, storage), verified buyer reviews with photo uploads,
            sourcing order sheet exports (PDF), and multi-company seller ownership.
          </li>
          <li>
            <strong className="text-navy">Admin &amp; Moderation Console:</strong> Built web portals in
            Next.js for user suspensions, content moderation, seller payout approvals, banner
            management, support inbox, and system activity auditing.
          </li>
          <li>
            <strong className="text-navy">Release Readiness &amp; Security Hardening:</strong> Configured
            Apple privacy manifests, in-app account deletion workflows, content reporting endpoints,
            dark mode UI tokens, and closed unauthenticated order access vulnerabilities found in an early
            audit.
          </li>
        </ul>
      </CaseStudySection>

      {/* 4. Engineering Challenges & Solutions */}
      <CaseStudySection title="4. Technical Challenges &amp; Solutions" id="challenges-heading">
        <div className="space-y-6">
          {/* Challenge 1 */}
          <div className="rounded-lg border border-border bg-surface/40 p-5 sm:p-6 space-y-3">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-navy">
              Challenge 1: Video Player Leaks, Scroll Jank &amp; Device Heat
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-foreground/85">
              <strong className="text-navy">Problem:</strong> In the initial mobile implementation,
              scrolling through the video reels feed created active video controller instances that were
              never disposed. Within minutes of scrolling, physical test devices suffered severe frame
              drops, runaway memory growth, and extreme thermal throttling.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-foreground/85">
              <strong className="text-navy">Solution:</strong> I engineered a strict single-active-player
              lifecycle. When a reel leaves the viewport, its controller and underlying hardware
              decoders are released immediately. I paired this with intelligent one-video ahead preloading,
              downsampled image decoding capped at exact device screen dimensions, and strict media upload
              limits (1 MB for images, 10 MB for video). Device heating was mitigated and scrolling stabilized
              at a consistent 60 FPS.
            </p>
          </div>

          {/* Challenge 2 */}
          <div className="rounded-lg border border-border bg-surface/40 p-5 sm:p-6 space-y-3">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-navy">
              Challenge 2: Cross-Border Landed Cost Modeling
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-foreground/85">
              <strong className="text-navy">Problem:</strong> Importing goods from foreign suppliers into
              Nepal involves multifaceted calculation criteria: Harmonized System (HS) classifications,
              variable customs duty rates, freight surcharges per delivery mode (air vs. overland), and
              statutory value-added taxes. Discrepancies between estimated and actual landed costs lead to
              disputed deliveries.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-foreground/85">
              <strong className="text-navy">Solution:</strong> Modeled a deterministic calculation
              pipeline inside the .NET 8 API. Each product variant links to verified HS codes that feed
              into an extensible tax and duty pipeline. The API returns an itemized landed-cost breakdown
              at checkout, securing customer consent before dispatch and settling transactions via
              eSewa.
            </p>
          </div>

          {/* Challenge 3 */}
          <div className="rounded-lg border border-border bg-surface/40 p-5 sm:p-6 space-y-3">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-navy">
              Challenge 3: Rapid Backend Scaling with CQRS &amp; MediatR
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-foreground/85">
              <strong className="text-navy">Problem:</strong> Adding over 120 new endpoints, 10 database
              entities, and 28 schema migrations within 6 days posed a severe risk of regressions across
              existing checkout and catalog queries.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-foreground/85">
              <strong className="text-navy">Solution:</strong> Leveraged the Command Query Responsibility
              Segregation (CQRS) pattern with MediatR. Each new business capability was authored as an
              isolated command or query handler with discrete validation pipelines, decoupling mutations
              from reads and allowing the automated test suite to expand cleanly from 80 to 176 backend
              unit and integration tests.
            </p>
          </div>
        </div>
      </CaseStudySection>

      {/* 5. Key Lessons */}
      <CaseStudySection title="5. Engineering Takeaways" id="lessons-heading">
        <ul className="list-disc list-outside ml-6 space-y-2 text-base text-foreground/85">
          <li>
            <strong className="text-navy">Resource Lifecycle is Paramount on Mobile:</strong> Rich media
            applications must manage hardware-level resources (camera, microphone, video codecs) with
            extreme defensive discipline. Releasing players and bounding image decode buffers is not an
            optimization—it is a core functional requirement.
          </li>
          <li>
            <strong className="text-navy">CQRS Enables Safe Velocity:</strong> Isolating business actions
            into atomic MediatR handlers enabled adding dozens of endpoints without introducing side
            effects to established workflows.
          </li>
          <li>
            <strong className="text-navy">Honest Codebase Pruning:</strong> Expanding features does not
            mean blindly accumulating code. Deleting 67 duplicated or dead mobile files while expanding
            test coverage 2.2&times; resulted in a far healthier, more maintainable project.
          </li>
        </ul>
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
