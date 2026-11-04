import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <div className="py-20 sm:py-28 text-center">
      <Container size="narrow">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-navy tracking-tight">
          Page Not Found
        </h1>
        <p className="mt-4 text-base text-foreground/85 max-w-md mx-auto leading-relaxed">
          The requested page could not be located. It may have been relocated, renamed, or is still being drafted.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="text-sm font-medium text-teal hover:underline inline-flex items-center gap-1"
          >
            &larr; Return to homepage
          </Link>
        </div>
      </Container>
    </div>
  );
}
