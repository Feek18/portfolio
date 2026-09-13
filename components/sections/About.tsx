"use client";

import React from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { aboutParagraphs, aboutStats } from "@/lib/data";

export interface AboutProps {
  className?: string;
}

export function About({ className = "" }: AboutProps) {
  return (
    <AnimatedSection id="about" className={`py-20 border-t border-outline-variant/30 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Header Column */}
          <div className="lg:col-span-4 space-y-2">
            <span className="font-mono text-label-caps text-on-surface-variant uppercase tracking-[0.08em] block">
              01 // BIOGRAPHY & STATS
            </span>
            <h2 className="font-display font-bold text-headline-lg text-on-surface">
              About
            </h2>
          </div>

          {/* Right Content Column */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4 font-sans text-body-lg text-on-surface-variant leading-relaxed">
              {aboutParagraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Stats / Info Metadata */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-outline-variant/30">
              <div>
                <span className="font-mono text-label-caps text-on-surface-variant uppercase tracking-[0.08em] block mb-1">
                  EDUCATION
                </span>
                <p className="font-sans text-sm font-semibold text-on-surface">
                  {aboutStats.education}
                </p>
              </div>

              <div>
                <span className="font-mono text-label-caps text-on-surface-variant uppercase tracking-[0.08em] block mb-1">
                  LOCATION
                </span>
                <p className="font-sans text-sm font-semibold text-on-surface">
                  {aboutStats.location}
                </p>
              </div>

              <div>
                <span className="font-mono text-label-caps text-on-surface-variant uppercase tracking-[0.08em] block mb-1">
                  FOCUS
                </span>
                <p className="font-sans text-sm font-semibold text-on-surface">
                  {aboutStats.focus}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
