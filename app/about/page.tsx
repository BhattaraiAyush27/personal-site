import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Ayush Bhattarai — software developer from Nepal with a background in web applications, business management systems, and an interest in neurotechnology and philosophy.",
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-16 md:py-20">
      <Container size="narrow">
        <header className="border-b border-border pb-8">
          <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-bronze font-semibold mb-3">
            About &middot; Background
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight">
            About Me
          </h1>
        </header>

        <article className="mt-8 space-y-6 text-foreground/90 text-base sm:text-lg leading-relaxed">
          <p>
            I&apos;m a software developer from Nepal with a professional background in building web
            applications and business management systems.
          </p>

          <p>
            My core technologies include{" "}
            <strong className="font-semibold text-navy">
              React, TypeScript, C# (.NET 8), Flutter, PHP, and Laravel
            </strong>
            . I&apos;ve contributed to applications involving cross-border social commerce,
            production-line management, accounting and ERP, restaurant billing, parking and
            ticketing, and operational management tools.
          </p>

          <p>
            These experiences have shaped my interest in software that solves practical problems,
            particularly systems where reliability, maintainability, and thoughtful architecture
            matter.
          </p>

          <section aria-labelledby="beyond-software-heading" className="pt-6">
            <h2
              id="beyond-software-heading"
              className="font-serif text-2xl sm:text-3xl font-bold text-navy tracking-tight mt-6 mb-4"
            >
              Beyond Software Development
            </h2>
            <div className="space-y-4">
              <p>
                While software engineering is my profession, my long-term intellectual interests
                extend into mathematics, neuroscience, and neurotechnology—particularly
                brain-computer interfaces and the interaction between humans and machines.
              </p>
              <p>
                I&apos;m working toward developing the scientific and engineering foundations
                necessary to explore these fields more seriously.
              </p>
              <p>
                I also have a lasting interest in philosophy, especially questions concerning
                knowledge, ethics, human agency, and what it means to live well.
              </p>
              <p>
                I believe technical competence and intellectual curiosity should complement one
                another: learning how things work matters, but so does understanding why they matter.
              </p>
            </div>
          </section>

          <section aria-labelledby="approach-heading" className="pt-6">
            <h2
              id="approach-heading"
              className="font-serif text-2xl sm:text-3xl font-bold text-navy tracking-tight mt-6 mb-4"
            >
              How I Approach My Work
            </h2>
            <div className="space-y-4">
              <p>
                I value clarity over unnecessary complexity, practical solutions over fashionable
                abstractions, and understanding over memorization.
              </p>
              <p>
                I use modern development tools, including AI coding assistants, while continuing to
                cultivate the ability to reason about, implement, and maintain software
                independently.
              </p>
              <p>
                I prefer building things that are useful, understandable, and capable of evolving as
                requirements change.
              </p>
            </div>
          </section>

          <section aria-labelledby="about-website-heading" className="pt-6">
            <h2
              id="about-website-heading"
              className="font-serif text-2xl sm:text-3xl font-bold text-navy tracking-tight mt-6 mb-4"
            >
              About This Website
            </h2>
            <div className="space-y-4">
              <p>This is my personal space on the internet.</p>
              <p>
                It serves as my professional portfolio, a record of projects I&apos;ve worked on,
                and a place for technical articles, research notes, essays, and occasional creative
                writing.
              </p>
              <p>
                Some things you&apos;ll find here are finished projects. Others are experiments,
                works in progress, or questions I&apos;m still investigating.
              </p>

              <blockquote className="my-6 border-l-2 border-bronze bg-bronze-muted/40 dark:bg-bronze-muted/20 px-5 py-4 text-base italic text-navy">
                &ldquo;The common thread is simple: to build thoughtfully, learn continuously, and
                share what I discover.&rdquo;
              </blockquote>
            </div>
          </section>

          {/* Quick editorial cross-links */}
          <div className="border-t border-border pt-8 mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium">
            <Link href="/projects" className="text-teal hover:underline inline-flex items-center gap-1">
              Explore my work &rarr;
            </Link>
            <Link href="/writing" className="text-navy hover:text-teal hover:underline transition-colors">
              Read my writing
            </Link>
            <Link href="/resume" className="text-muted hover:text-navy transition-colors">
              View résumé
            </Link>
          </div>
        </article>
      </Container>
    </div>
  );
}
