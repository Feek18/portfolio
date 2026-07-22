"use client";

import React, { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { personalInfo } from "@/lib/data";
import { Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      // Simulate form submission delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormState({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const socialLinks = [
    {
      name: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/fikriachmada",
      href: personalInfo.socials.linkedin,
      icon: LinkedinIcon,
    },
    {
      name: "GitHub",
      value: "github.com/Feek18",
      href: personalInfo.socials.github,
      icon: GithubIcon,
    },
  ];

  return (
    <section id="contact" className="py-24 border-t border-border/40 bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct channels and copy */}
          <div className="md:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Get In Touch</span>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight">Let&apos;s Work Together</h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Open to remote, contract, &amp; full-time opportunities. Drop me a line, and let&apos;s discuss how I can contribute to your team.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              {socialLinks.map((link, idx) => {
                const Icon = link.icon;
                return (
                  <a
                    key={idx}
                    href={link.href}
                    target={link.name !== "Email" ? "_blank" : undefined}
                    rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                    className="flex items-center space-x-4 p-4 rounded-xl border border-border bg-card shadow-sm hover:border-primary/20 hover:bg-secondary/40 transition-all duration-300 group focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary transition-transform group-hover:scale-105">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{link.name}</h3>
                      <p className="text-sm font-bold text-foreground break-all">{link.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="md:col-span-7 p-8 rounded-2xl border border-border bg-card shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold text-foreground">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-foreground">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="johndoe@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Hi Fikri, I would love to talk about a frontend project..."
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-lg bg-primary hover:bg-primary/95 disabled:bg-primary/70 text-primary-foreground font-bold transition-all shadow-md focus:ring-2 focus:ring-primary"
              >
                {status === "submitting" ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-primary-foreground border-t-transparent animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {status === "success" && (
                <div className="flex items-center space-x-2 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm font-medium animate-fade-in">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>Thank you! Your message has been sent successfully.</span>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center space-x-2 p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm font-medium animate-fade-in">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span>Something went wrong. Please try emailing directly.</span>
                </div>
              )}
            </form>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
