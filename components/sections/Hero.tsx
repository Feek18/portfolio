"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import { personalInfo } from "@/lib/data";

export interface HeroProps {
  className?: string;
}

export function Hero({ className = "" }: HeroProps) {
  return (
    <section
      id="hero"
      className={`pt-32 pb-20 md:pt-40 md:pb-28 max-w-7xl mx-auto px-6 sm:px-8 ${className}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Text & CTAs */}
        <div className="lg:col-span-8 space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-surface-container-low border border-outline-variant/40">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="font-mono text-label-caps text-on-surface-variant uppercase tracking-[0.08em]">
              {personalInfo.badgeText}
            </span>
          </div>

          {/* Name & Role */}
          <div className="space-y-2">
            <h1 className="font-display font-bold text-display-xl-mobile sm:text-display-xl text-on-surface tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="font-display font-bold text-headline-lg text-primary">
              {personalInfo.title}
            </p>
          </div>

          {/* Short Bio */}
          <p className="font-sans text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            {personalInfo.heroBio}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#selected-work"
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-md bg-primary hover:bg-primary-container text-white text-sm font-semibold transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <span>View Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.cvUrl}
              download
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-md bg-surface-container-low hover:bg-outline-variant/20 border border-outline-variant/60 text-on-surface text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <Download className="w-4 h-4 text-on-surface-variant" />
              <span>Download CV</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-md border border-outline-variant/60 hover:border-primary text-on-surface-variant hover:text-primary text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </a>
          </div>
        </div>

        {/* Right Column: Next/Image Duotone Portrait */}
        <div className="lg:col-span-4 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-xl overflow-hidden shadow-md border border-outline-variant/40 bg-surface-container-low group">
            <Image
              src="/assets/hero-portrait.jpg"
              alt={`Portrait photo of ${personalInfo.name}`}
              priority
              fill
              sizes="(max-width: 768px) 100vw, 340px"
              className="object-cover grayscale contrast-110 group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
