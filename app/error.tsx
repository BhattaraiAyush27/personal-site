"use client";

import React, { useEffect } from "react";
import { Container } from "@/components/ui/Container";

/**
 * Error boundary component for handling runtime and asset loading errors.
 * Automatically recovers from stale chunk or Webpack module mismatches by refreshing once.
 */
export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Detect chunk loading or Webpack module runtime mismatch error
    const isChunkMismatch =
      error?.message?.includes("reading 'call'") ||
      error?.message?.includes("Loading chunk") ||
      error?.message?.includes("undefined (reading 'call')");

    if (isChunkMismatch) {
      const hasRetried = typeof window !== "undefined" && sessionStorage.getItem("chunk_retry");
      if (!hasRetried) {
        sessionStorage.setItem("chunk_retry", "true");
        window.location.reload();
      }
    }
  }, [error]);

  return (
    <div className="py-20 sm:py-28 text-center">
      <Container size="narrow">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-navy tracking-tight">
          Something went wrong
        </h1>
        <p className="mt-4 text-base text-foreground/85 max-w-md mx-auto leading-relaxed">
          An unexpected error occurred. This is usually caused by outdated browser cache or updated
          application assets.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={() => {
              if (typeof window !== "undefined") {
                sessionStorage.removeItem("chunk_retry");
                window.location.reload();
              }
            }}
            className="inline-flex items-center justify-center rounded-md bg-teal px-4 py-2.5 text-sm font-medium text-white hover:bg-teal-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
          >
            Refresh page
          </button>
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center justify-center rounded-md border border-border px-4 py-2.5 text-sm font-medium text-foreground hover:bg-black/5 dark:hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
          >
            Try again
          </button>
        </div>
      </Container>
    </div>
  );
}
