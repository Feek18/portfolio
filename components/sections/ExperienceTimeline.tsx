"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { experienceData, personalInfo } from "@/lib/data";

export interface ExperienceTimelineProps {
  className?: string;
}

export function ExperienceTimeline({ className = "" }: ExperienceTimelineProps) {
  return (
    <AnimatedSection id="chronology" className={`py-20 border-t border-outline-variant/30 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="font-mono text-label-caps text-on-surface-variant uppercase tracking-[0.08em] block">
              04 // EXPERIENCE & ROLES
            </span>
            <h2 className="font-display font-bold text-headline-lg text-on-surface">
              Chronology &amp; impact.
            </h2>
          </div>

          <a
            href={personalInfo.cvUrl}
            download
            className="inline-flex items-center space-x-1 font-sans text-xs font-semibold text-primary hover:underline w-fit"
          >
            <span>Download academic CV (PDF)</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l border-outline-variant/40 pl-6 ml-3 space-y-8">
          {experienceData.map((exp, idx) => (
            <div key={idx} className="relative space-y-4">
              {/* Timeline Dot Node */}
              <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-surface" />

              <div className="p-6 sm:p-8 rounded-xl border border-outline-variant/40 bg-white shadow-xs space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-outline-variant/20 pb-4">
                  <div>
                    <h3 className="font-display font-bold text-lg text-on-surface">
                      {exp.role}
                    </h3>
                    <p className="font-sans text-xs font-semibold text-on-surface-variant">
                      {exp.company}
                    </p>
                  </div>

                  <span className="font-mono text-xs font-medium px-3 py-1 rounded-md bg-surface-container-low text-on-surface border border-outline-variant/30 w-fit">
                    {exp.duration}
                  </span>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                      <span className="text-primary font-bold mr-2 select-none">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-surface-container-low text-on-surface-variant border border-outline-variant/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

// Re-export as Experience for compatibility
export { ExperienceTimeline as Experience };
