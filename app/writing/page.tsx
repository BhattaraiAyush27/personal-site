import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Writing",
  description: "Technical tutorials, architecture notes, and essays by Ayush Bhattarai.",
};

export default function WritingPage() {
  return (
    <div className="py-12 sm:py-16 md:py-20">
      <Container size="narrow">
        <header className="mb-12">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-navy tracking-tight">
            Writing &amp; Research Notes
          </h1>
          <p className="mt-4 text-base sm:text-lg text-foreground/85 leading-relaxed">
            Explorations across software design, mathematics, neurotechnology, and engineering craft.
          </p>
        </header>

        <div className="space-y-8">
          <article className="border-t border-border pt-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
              <h2 className="font-serif text-xl font-bold text-navy">
                [Article Placeholder: Title of your first essay or technical article]
              </h2>
              <span className="text-xs font-mono text-muted shrink-0">
                Drafting
              </span>
            </div>
            <p className="text-sm leading-relaxed text-foreground/85">
              This section will showcase MDX-powered long-form essays and technical notes once the publishing pipeline is initialized.
            </p>
          </article>
        </div>
      </Container>
    </div>
  );
}
