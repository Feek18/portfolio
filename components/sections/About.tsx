import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { personalInfo } from "@/lib/data";
import { MapPin, GraduationCap, Target, Languages } from "lucide-react";

export function About() {
  const quickFacts = [
    {
      icon: GraduationCap,
      label: "Education",
      value: "Software Engineering, PNB",
      subValue: "GPA 3.76 / 4.00"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Denpasar, Bali",
      subValue: "Indonesia (GMT+8)"
    },
    {
      icon: Target,
      label: "Focus & Aspiration",
      value: "Remote (AU/SG) Roles",
      subValue: "Long-term target: Japan"
    },
    {
      icon: Languages,
      label: "Languages",
      value: "Learning Foreign Languages",
      subValue: "Japanese & Korea"
    }
  ];

  return (
    <section id="about" className="py-24 border-t border-border/40 bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading & Paragraphs */}
          <div className="md:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Introduction</span>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight">About Me</h2>
            </div>

            <div className="space-y-6 text-muted-foreground/90 leading-relaxed text-base sm:text-lg">
              {personalInfo.aboutText.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Right Column: Profile details grid */}
          <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 md:pt-0">
            {quickFacts.map((fact, index) => {
              const Icon = fact.icon;
              return (
                <div
                  key={index}
                  className="p-5 rounded-xl border border-border bg-card shadow-sm hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center text-primary mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">
                    {fact.label}
                  </h3>
                  <p className="text-sm font-bold text-foreground mb-0.5 leading-snug">
                    {fact.value}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {fact.subValue}
                  </p>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
