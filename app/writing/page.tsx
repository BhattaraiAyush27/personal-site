import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Technical articles, research notes, and essays by Ayush Bhattarai covering software architecture, mathematics, neurotechnology, and philosophy.",
};

export default function WritingPage() {
  return (
    <div className="py-12 sm:py-16 md:py-20">
      <Container size="narrow">
        <header className="mb-12">
          <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-bronze font-semibold mb-3">
            Essays &middot; Research Notes
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-navy tracking-tight">
            Writing &amp; Research Notes
          </h1>
          <p className="mt-4 text-base sm:text-lg text-foreground/85 leading-relaxed">
            Explorations across software engineering, mathematics, neurotechnology, and philosophy.
            This space documents what I build, notes from my self-directed studies, and ideas worth
            thinking about.
          </p>
        </header>

        <div className="space-y-8">
          <article className="border-t border-border pt-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
              <h2 className="font-serif text-xl font-bold text-navy">
                Architectural Simplicity in Business Web Systems
              </h2>
              <span className="text-xs font-mono text-muted shrink-0">
                Forthcoming &middot; Software Architecture
              </span>
            </div>
            <p className="text-sm leading-relaxed text-foreground/85">
              Reflections on balancing practical problem-solving with clean domain models in
              production-line and ERP architectures. Why maintainability outlives fashionable abstractions.
            </p>
          </article>

          <article className="border-t border-border pt-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
              <h2 className="font-serif text-xl font-bold text-navy">
                Developing Foundations in Neurotechnology &amp; BCIs
              </h2>
              <span className="text-xs font-mono text-muted shrink-0">
                Drafting &middot; Research Note
              </span>
            </div>
            <p className="text-sm leading-relaxed text-foreground/85">
              A self-directed study roadmap into computational neuroscience, signal processing, and
              the mathematical foundations underpinning brain-computer interfaces.
            </p>
          </article>

          <article className="border-t border-border pt-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
              <h2 className="font-serif text-xl font-bold text-navy">
                Reasoning Independently in an Age of Automated Tools
              </h2>
              <span className="text-xs font-mono text-muted shrink-0">
                Drafting &middot; Engineering Craft
              </span>
            </div>
            <p className="text-sm leading-relaxed text-foreground/85">
              Why cultivating the ability to reason about, implement, and maintain software from
              first principles remains indispensable, even while leveraging modern AI assistants.
            </p>
          </article>

          <article className="border-t border-border pt-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
              <h2 className="font-serif text-xl font-bold text-navy">
                Epistemology, Human Agency, and Living Well
              </h2>
              <span className="text-xs font-mono text-muted shrink-0">
                Outline &middot; Philosophy
              </span>
            </div>
            <p className="text-sm leading-relaxed text-foreground/85">
              Questions concerning how we know what is true, the preservation of personal agency,
              and why technical competence and intellectual inquiry must inform one another.
            </p>
          </article>
        </div>

        <aside
          aria-label="Publishing note"
          className="mt-12 border-l-2 border-bronze/60 bg-bronze-muted/30 px-4 py-3 text-xs leading-relaxed text-muted"
        >
          <strong className="font-semibold text-bronze">Publishing Note:</strong> Full-length MDX essays will be published directly here as the static content pipeline is completed.
        </aside>
      </Container>
    </div>
  );
}
