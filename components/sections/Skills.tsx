"use client";

import React from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { techStackData } from "@/lib/data";

export interface SkillsProps {
  className?: string;
}

export function Skills({ className = "" }: SkillsProps) {
  return (
    <AnimatedSection id="tech-stack" className={`py-20 border-t border-outline-variant/30 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <span className="font-mono text-label-caps text-on-surface-variant uppercase tracking-[0.08em] block">
            02 // TECH STACK
          </span>
          <h2 className="font-display font-bold text-headline-lg text-on-surface">
            Tech Stack
          </h2>
        </div>

        {/* 3 Column Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {techStackData.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-xl border border-outline-variant/40 bg-white shadow-xs hover:border-outline-variant transition-colors"
            >
              <h3 className="font-display font-bold text-base text-on-surface mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-3 py-1.5 rounded-md bg-surface-container-low text-on-surface border border-outline-variant/30 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
