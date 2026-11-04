"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  href: string;
  label: string;
}

interface MobileNavProps {
  navItems: NavItem[];
}

/**
 * MobileNav provides accessible mobile drawer navigation with backdrop dismissal and scroll locking.
 */
export function MobileNav({ navItems }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile drawer when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Handle escape key and lock body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={isOpen ? "Close main menu" : "Open main menu"}
        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border/80 bg-surface/50 text-foreground hover:bg-black/5 dark:hover:bg-white/5 hover:text-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal transition-colors"
      >
        <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
        {isOpen ? (
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.75"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.75"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        )}
      </button>

      {isOpen && (
        <>
          {/* Backdrop overlay for dismissing */}
          <div
            className="fixed inset-0 top-16 bg-black/40 z-40 backdrop-blur-[2px] transition-opacity"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Navigation drawer */}
          <nav
            id="mobile-navigation"
            aria-label="Mobile Navigation"
            className="absolute left-0 right-0 top-full z-50 border-b border-border bg-background/98 backdrop-blur-md px-4 py-4 sm:px-6 shadow-xl max-h-[calc(100vh-4.5rem)] overflow-y-auto"
          >
            <ul className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center min-h-[44px] px-3.5 py-2.5 rounded-md text-base font-medium transition-colors ${
                        isActive
                          ? "bg-teal-muted/40 text-teal font-semibold dark:bg-teal-muted/30"
                          : "text-foreground hover:text-teal hover:bg-black/5 dark:hover:bg-white/5"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </>
      )}
    </div>
  );
}
