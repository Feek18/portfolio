"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/lib/data";

export interface FooterProps {
  className?: string;
}

export function Footer({ className = "" }: FooterProps) {
  return (
    <footer className={`border-t border-outline-variant/30 py-8 bg-surface ${className}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6 font-sans text-xs text-on-surface-variant">
        {/* Left Side Info */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-bold text-on-surface">{personalInfo.name}</span>
          <span className="hidden sm:inline text-outline-variant">•</span>
          <span>{personalInfo.location} · {personalInfo.timezone}</span>
        </div>

        {/* Right Side Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <a
            href={`mailto:${personalInfo.email}`}
            className="hover:text-primary transition-colors"
          >
            {personalInfo.email}
          </a>
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            GitHub
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={personalInfo.socials.dribbble}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Dribbble
          </a>
          <a
            href={personalInfo.cvUrl}
            download
            className="inline-flex items-center space-x-1 font-semibold text-primary hover:underline"
          >
            <span>Resume PDF</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
