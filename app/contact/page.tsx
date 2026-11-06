import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Ayush Bhattarai for software engineering inquiries.",
};

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-16 md:py-20">
      <Container size="narrow">
        <header className="mb-10">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-navy tracking-tight">
            Contact
          </h1>
          <p className="mt-4 text-base sm:text-lg text-foreground/85 leading-relaxed">
            I am a software developer based in Nepal. I welcome conversations regarding software engineering opportunities, business systems architecture, or shared intellectual interests.
          </p>
        </header>

        <div className="border-t border-border pt-8 space-y-8">
          <div>
            <h2 className="font-serif text-lg font-bold text-navy">Direct Inquiries</h2>
            <p className="text-sm text-foreground/85 mt-1 leading-relaxed">
              For hiring discussions, architectural collaborations, or technical questions:
            </p>
            <div className="mt-3 rounded border border-border bg-surface px-4 py-3 text-xs font-mono text-foreground break-all sm:break-normal select-all">
              [email-placeholder: e.g. contact@yourdomain.com]
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <h2 className="font-serif text-lg font-bold text-navy">Public Profiles</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/BhattaraiAyush27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:underline inline-flex items-center gap-1 font-medium"
                >
                  GitHub &middot; BhattaraiAyush27 &rarr;
                </a>
              </li>
              <li className="text-muted text-xs font-mono">
                [LinkedIn Placeholder: Add your profile URL here]
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
