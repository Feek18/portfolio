"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { personalInfo } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-40 dark:opacity-20 pointer-events-none">
        <div className="w-[450px] h-[450px] rounded-full bg-primary/10 blur-[100px] animate-pulse" style={{ animationDuration: "10s" }} />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center select-none">
        {/* Remote badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs font-semibold text-primary tracking-wide mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span>{personalInfo.badgeText}</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl font-heading font-extrabold tracking-tight mb-5 text-gradient"
        >
          {personalInfo.name}
        </motion.h1>

        {/* Role */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-2xl font-medium text-muted-foreground mb-8 tracking-wide font-heading"
        >
          {personalInfo.title}
        </motion.h2>

        {/* Value Proposition */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-xl text-muted-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {personalInfo.valueProp}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-lg bg-primary hover:bg-primary/95 text-primary-foreground font-semibold transition-all shadow-md shadow-primary/10 group focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <span>View My Work</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={personalInfo.cvUrl}
            download
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-lg border border-border bg-card hover:bg-secondary text-foreground font-semibold transition-all group focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <Download className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
            <span>Download CV</span>
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-lg border border-transparent hover:border-border text-muted-foreground hover:text-foreground font-semibold transition-all focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <Mail className="w-4 h-4" />
            <span>Contact Me</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
