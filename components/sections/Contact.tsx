"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { personalInfo } from "@/lib/data";

export interface ContactProps {
  className?: string;
}

export function Contact({ className = "" }: ContactProps) {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mailto fallback & feedback state trigger
    const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`);
    const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <AnimatedSection id="contact" className={`py-20 border-t border-outline-variant/30 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <span className="font-mono text-label-caps text-on-surface-variant uppercase tracking-[0.08em] block">
            05 // CONTACT
          </span>
          <h2 className="font-display font-bold text-headline-lg text-on-surface max-w-2xl">
            Interested in working together or have a question? Reach out.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info Box & Links */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-xl border border-outline-variant/40 bg-white space-y-2">
              <span className="font-mono text-label-caps text-on-surface-variant uppercase tracking-[0.08em] block">
                EMAIL
              </span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="font-sans font-bold text-sm sm:text-base text-on-surface hover:text-primary transition-colors break-all"
              >
                {personalInfo.email}
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-4 rounded-xl border border-outline-variant/40 bg-white hover:border-primary transition-colors flex items-center justify-between font-sans text-xs font-semibold text-on-surface"
              >
                <span>Contact Form</span>
                <ArrowUpRight className="w-4 h-4 text-on-surface-variant" />
              </a>

              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-outline-variant/40 bg-white hover:border-primary transition-colors flex items-center justify-between font-sans text-xs font-semibold text-on-surface"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-4 h-4 text-on-surface-variant" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-xl border border-outline-variant/40 bg-white space-y-6">
            <h3 className="font-display font-bold text-lg text-on-surface">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="font-mono text-label-caps text-on-surface-variant uppercase tracking-[0.08em] block">
                    NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-2.5 rounded-md border border-outline-variant/40 bg-surface-container-low font-sans text-sm text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="font-mono text-label-caps text-on-surface-variant uppercase tracking-[0.08em] block">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    className="w-full px-4 py-2.5 rounded-md border border-outline-variant/40 bg-surface-container-low font-sans text-sm text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="font-mono text-label-caps text-on-surface-variant uppercase tracking-[0.08em] block">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  className="w-full px-4 py-2.5 rounded-md border border-outline-variant/40 bg-surface-container-low font-sans text-sm text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-md bg-primary hover:bg-primary-container text-white font-semibold text-sm transition-colors shadow-xs"
              >
                <span>Send Message</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              {submitted && (
                <div className="flex items-center space-x-2 p-3 rounded-md bg-primary/10 border border-primary/20 text-primary font-sans text-xs font-medium">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>Opening your mail client... Thanks for reaching out!</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
