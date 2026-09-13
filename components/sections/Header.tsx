"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export interface HeaderProps {
  className?: string;
}

export function Header({ className = "" }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Tech Stack", href: "#tech-stack" },
    { label: "Selected Work", href: "#selected-work" },
    { label: "Chronology", href: "#chronology" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-surface/90 backdrop-blur-md border-b ${
        isScrolled ? "border-outline-variant/40 shadow-sm py-3" : "border-outline-variant/20 py-4"
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-display font-extrabold text-xl tracking-tight text-on-surface hover:text-primary transition-colors"
        >
          Feek
        </a>

        {/* Center Nav Links - Desktop */}
        <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Status Badge & Contact Action */}
        <div className="hidden sm:flex items-center space-x-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-surface-container-low border border-outline-variant/40 text-xs font-mono font-medium text-on-surface-variant">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>Open to work</span>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-md bg-primary hover:bg-primary-container text-white text-xs font-semibold tracking-wide transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <span>Contact me</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center space-x-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 rounded-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-outline-variant/30 bg-surface px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-on-surface-variant hover:text-primary py-1"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3 border-t border-outline-variant/20 flex flex-col space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-on-surface-variant">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span>Open to work</span>
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-md bg-primary text-white text-xs font-semibold"
            >
              Contact me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
