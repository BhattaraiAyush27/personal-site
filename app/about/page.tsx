import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "About",
  description: "Background, technical experience, and engineering philosophy of Ayush Bhattarai.",
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-16 md:py-20">
      <Container size="narrow">
        <header>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-navy tracking-tight">
            About
          </h1>
          <p className="mt-4 text-base sm:text-lg text-foreground/90 leading-relaxed">
            I am a software engineer focused on developing resilient, user-centered web applications.
          </p>
        </header>

        <div className="mt-8 space-y-6 text-foreground/85 leading-relaxed">
          <aside
            aria-label="Editorial note"
            className="border-l-2 border-bronze/60 bg-bronze-muted/30 px-4 py-3 text-xs leading-relaxed text-muted"
          >
            <strong className="font-semibold text-bronze">Bio Placeholder:</strong> Insert your personal background here. Suggested outline:
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Core technical focus: React, TypeScript, and Laravel architectures.</li>
              <li>Engineering principles: clarity, accessibility, and static resilience.</li>
              <li>Interests: mathematics, philosophy, and neurotechnology.</li>
              <li>Career trajectory and November–December 2026 goals.</li>
            </ul>
          </aside>
        </div>
      </Container>
    </div>
  );
}
