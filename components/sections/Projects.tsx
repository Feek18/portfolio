"use client";

import React from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { projectsData } from "@/lib/data";
import { ProjectCard } from "@/components/sections/ProjectCard";

export interface ProjectsProps {
  className?: string;
}

export function Projects({ className = "" }: ProjectsProps) {
  return (
    <AnimatedSection id="selected-work" className={`py-20 border-t border-outline-variant/30 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <span className="font-mono text-label-caps text-on-surface-variant uppercase tracking-[0.08em] block">
            03 // SELECTED WORK & CASE STUDIES
          </span>
          <h2 className="font-display font-bold text-headline-lg text-on-surface">
            Selected Work
          </h2>
        </div>

        {/* Projects List */}
        <div className="space-y-6">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
