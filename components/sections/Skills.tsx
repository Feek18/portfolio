import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { skillsData } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-border/40">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="space-y-12">
          {/* Header */}
          <div className="space-y-2 text-center">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight">Skills & Tech Stack</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
              A curated overview of technologies I focus on, design methodologies I practice, and systems I am currently exploring.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillsData.map((category, catIndex) => (
              <div
                key={catIndex}
                className="p-6 rounded-2xl border border-border bg-card shadow-sm hover:border-primary/20 transition-all duration-300"
              >
                <h3 className="text-lg font-heading font-bold text-foreground mb-4 pb-2 border-b border-border">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3.5 py-1.5 rounded-lg border border-border bg-secondary/50 text-sm font-medium hover:border-primary hover:bg-primary/5 hover:text-primary transition-all duration-200 cursor-default select-none"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
