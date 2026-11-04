import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

/**
 * Footer renders the global semantic page footer.
 * Why it exists: Provides secondary navigation, legal/copyright notices, and architectural transparency.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-background py-10 text-sm text-foreground/85 transition-colors">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium text-navy">
            &copy; {currentYear} Ayush Bhattarai. All rights reserved.
          </p>
          <p className="mt-1 text-xs text-muted">
            Built with Next.js, React, and Tailwind CSS. Static-first architecture.
          </p>
        </div>

        <nav aria-label="Footer Navigation" className="flex flex-wrap gap-x-6 gap-y-2.5 text-xs font-medium">
          <Link href="/about" className="text-foreground hover:text-teal transition-colors py-1">
            About
          </Link>
          <Link href="/projects" className="text-foreground hover:text-teal transition-colors py-1">
            Projects
          </Link>
          <Link href="/writing" className="text-foreground hover:text-teal transition-colors py-1">
            Writing
          </Link>
          <Link href="/resume" className="text-foreground hover:text-teal transition-colors py-1">
            Resume
          </Link>
          <Link href="/contact" className="text-foreground hover:text-teal transition-colors py-1">
            Contact
          </Link>
        </nav>
      </Container>
    </footer>
  );
}
