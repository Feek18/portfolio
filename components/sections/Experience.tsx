import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { experienceData, personalInfo } from "@/lib/data";
import { Download, Calendar } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-border/40">
      <div className="max-w-3xl mx-auto px-6">
        <AnimatedSection className="space-y-12">
          {/* Header */}
          <div className="space-y-2 text-center">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Journey</span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight">Work Experience</h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-lg mx-auto">
              A summary of my roles and contributions within professional web environments.
            </p>
          </div>

          {/* Timeline list */}
          <div className="relative border-l border-border pl-6 ml-4 space-y-10">
            {experienceData.map((exp, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline node */}
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 border-primary bg-background group-hover:scale-110 transition-transform duration-200" />
                
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5">
                    <h3 className="text-lg font-heading font-bold text-foreground">
                      {exp.role}
                    </h3>
                    <span className="inline-flex items-center text-xs font-semibold text-primary bg-primary/5 border border-primary/10 px-2.5 py-1 rounded-full w-fit">
                      <Calendar className="w-3.5 h-3.5 mr-1" />
                      {exp.duration}
                    </span>
                  </div>
                  
                  <p className="text-sm font-bold text-muted-foreground font-heading">
                    {exp.company}
                  </p>
                  
                  {exp.description && (
                    <ul className="text-sm text-muted-foreground/80 leading-relaxed pt-2 space-y-1.5">
                      {exp.description.split("\n").map((line, lIdx) => (
                        <li key={lIdx} className="flex items-start">
                          <span className="text-primary mr-2 select-none">•</span>
                          <span>{line.replace(/^[•\-\s]+/, "")}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CV Button */}
          <div className="text-center pt-6">
            <a
              href={personalInfo.cvUrl}
              download
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg border border-border bg-card hover:bg-secondary text-foreground text-sm font-semibold transition-all focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <Download className="w-4 h-4 text-muted-foreground" />
              <span>Download Full CV</span>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
