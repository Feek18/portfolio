"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  // Abbreviated logo name: "Fikri B." or initials
  const logoText = "FeekPORT";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-350 ${scrolled
          ? "border-b border-border/40 bg-background/70 backdrop-blur-md py-4"
          : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo/Name */}
        <a
          href="#"
          className="font-heading font-bold text-lg tracking-tight hover:text-primary transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-1"
        >
          {logoText}<span className="text-primary">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-1"
            >
              {link.name}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 text-muted-foreground hover:text-foreground transition-colors focus:ring-2 focus:ring-primary rounded"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 border-b border-border bg-background/95 backdrop-blur-lg py-6 px-6 shadow-lg">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2 focus:ring-2 focus:ring-primary rounded px-1"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
