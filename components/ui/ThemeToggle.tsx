"use client";

import React, { useEffect, useState } from "react";

/**
 * ThemeToggle provides a light/dark theme toggle for the header.
 * - Follows Modern Scholar design: subtle, accessible, no heavy runtime dependencies.
 * - Respects system preferences and persists user preference to localStorage.
 * - Prevents hydration mismatches by mounting safely.
 */
export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Check initial active class on <html> (set by inline anti-FOUC script)
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
    setMounted(true);

    // Listen for changes in OS color scheme if user hasn't set an explicit preference
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      const storedTheme = localStorage.getItem("theme");
      if (!storedTheme) {
        if (e.matches) {
          document.documentElement.classList.add("dark");
          setTheme("dark");
        } else {
          document.documentElement.classList.remove("dark");
          setTheme("light");
        }
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    try {
      localStorage.setItem("theme", nextTheme);
    } catch {
      // Ignore if localStorage is disabled in private browsing
    }
    setTheme(nextTheme);
  };

  if (!mounted) {
    // Render static placeholder matching the button shape to prevent layout shift
    return (
      <div
        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border/80 bg-surface/50 text-muted"
        aria-hidden="true"
      >
        <span className="h-5 w-5" />
      </div>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border/80 bg-surface/50 text-foreground hover:bg-black/5 dark:hover:bg-white/5 hover:text-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal transition-colors"
    >
      {isDark ? (
        /* Sun Icon for switching to light */
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5 text-bronze hover:text-teal transition-colors"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      ) : (
        /* Moon Icon for switching to dark */
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5 text-navy hover:text-teal transition-colors"
          aria-hidden="true"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      )}
    </button>
  );
}
