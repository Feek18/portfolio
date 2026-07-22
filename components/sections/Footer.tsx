import { personalInfo } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/40 bg-background">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-xs text-muted-foreground text-center md:text-left">
          &copy; {currentYear} {personalInfo.name}. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center space-x-6 text-xs font-semibold text-muted-foreground">
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors focus:ring-2 focus:ring-primary rounded p-1"
          >
            LinkedIn
          </a>
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors focus:ring-2 focus:ring-primary rounded p-1"
          >
            GitHub
          </a>
          <a
            href={personalInfo.socials.dribbble}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors focus:ring-2 focus:ring-primary rounded p-1"
          >
            Dribbble
          </a>
        </div>

        <p className="text-[10px] text-muted-foreground/60 text-center md:text-right">
          Designed &amp; coded by Feek.
        </p>
      </div>
    </footer>
  );
}
