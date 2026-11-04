import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { MobileNav } from "./MobileNav";

const NAV_ITEMS = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/writing", label: "Writing" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

/**
 * Header renders the restrained masthead, persistent navigation bar, and theme toggle.
 * Follows Modern Scholar principles: typographic masthead, high accessibility, responsive controls.
 */
export function Header() {
  return (
    <header className="relative border-b border-border bg-background/95 backdrop-blur-md sticky top-0 z-40 transition-colors">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-navy hover:text-teal transition-colors font-serif text-lg sm:text-xl font-bold tracking-tight shrink-0"
        >
          Ayush Bhattarai
        </Link>

        <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex md:items-center md:gap-6 lg:gap-8"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-teal transition-colors py-1"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Light / Dark Mode Toggle */}
          <ThemeToggle />

          {/* Mobile Navigation Toggle */}
          <MobileNav navItems={NAV_ITEMS} />
        </div>
      </Container>
    </header>
  );
}
