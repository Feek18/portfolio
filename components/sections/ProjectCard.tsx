"use client";

import React from "react";
import { ArrowUpRight, Lock } from "lucide-react";
import { Project } from "@/lib/data";

export interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className = "" }: ProjectCardProps) {
  return (
    <div
      className={`group relative p-6 sm:p-8 rounded-xl border border-outline-variant/40 bg-white shadow-xs transition-all duration-200 ease-out hover:-translate-y-1 hover:border-primary ${className}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Context, Title, Description, Tech Stack */}
        <div className="lg:col-span-8 space-y-4">
          <span className="font-mono text-label-caps text-on-surface-variant uppercase tracking-[0.08em] block">
            {project.subLabel}
          </span>

          <h3 className="font-display font-bold text-xl sm:text-2xl text-on-surface group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs px-2.5 py-1 rounded-md bg-surface-container-low text-on-surface border border-outline-variant/30 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Metric, Confidential Status, or Links */}
        <div className="lg:col-span-4 flex flex-col justify-between h-full pt-4 lg:pt-0 lg:border-l lg:border-outline-variant/20 lg:pl-8 space-y-4">
          {project.rightColType === "metric" && (
            <div className="space-y-1">
              <span className="font-mono text-label-caps text-on-surface-variant uppercase tracking-[0.08em] block">
                {project.metricLabel || "METRIC"}
              </span>
              <div className="font-display font-bold text-3xl sm:text-4xl text-primary">
                {project.metricValue}
              </div>
              <p className="font-sans text-xs text-on-surface-variant">
                {project.metricSubtext}
              </p>
            </div>
          )}

          {project.rightColType === "confidential" && (
            <div className="space-y-3">
              <span className="font-mono text-label-caps text-on-surface-variant uppercase tracking-[0.08em] block">
                CLIENT ACT
              </span>
              <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                {project.rightColText}
              </p>
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-md bg-surface-container-low border border-outline-variant/40 text-xs font-mono text-on-surface-variant">
                <Lock className="w-3.5 h-3.5 text-on-surface-variant" />
                <span>Private / Confidential</span>
              </div>
            </div>
          )}

          {project.rightColType === "academic" && (
            <div className="space-y-2">
              <span className="font-mono text-label-caps text-on-surface-variant uppercase tracking-[0.08em] block">
                PROJECT ROLE
              </span>
              <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                {project.rightColText}
              </p>
            </div>
          )}

          {project.rightColType === "exploratory" && (
            <div className="space-y-2">
              <span className="font-mono text-label-caps text-on-surface-variant uppercase tracking-[0.08em] block">
                CLIENT ACT
              </span>
              <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                {project.rightColText}
              </p>
            </div>
          )}

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 px-3.5 py-1.5 rounded-md bg-primary hover:bg-primary-container text-white text-xs font-semibold transition-colors shadow-xs"
              >
                <span>View Site</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 px-3.5 py-1.5 rounded-md border border-outline-variant/60 hover:border-primary text-on-surface-variant hover:text-primary text-xs font-semibold transition-colors"
              >
                <span>Github</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
