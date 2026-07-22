import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { projectsData } from "@/lib/data";
import { ExternalLink, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-border/40 bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="space-y-12">
          {/* Header */}
          <div className="space-y-2 text-center">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Showcase</span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight">Featured Projects</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
              A detailed overview of applications I have built and collaborated on, highlighting my contributions from concept to deployment.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-10">
            {projectsData.map((project) => (
              <div
                key={project.id}
                className={`relative p-8 md:p-10 rounded-2xl border bg-card transition-all duration-300 shadow-sm flex flex-col md:flex-row gap-8 items-stretch ${
                  project.isPlaceholder
                    ? "border-border/60 border-dashed opacity-80"
                    : "border-border hover:border-primary/30 hover:shadow-md"
                }`}
              >
                {/* Visual Label for Pipeline */}
                {project.isPlaceholder && (
                  <div className="absolute top-4 right-4 flex items-center space-x-1.5 px-2.5 py-1 rounded bg-secondary/80 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                    <Sparkles className="w-3 h-3 text-primary animate-pulse" />
                    <span>In Pipeline</span>
                  </div>
                )}

                {/* Left Side: Description, Role, and Context */}
                <div className="flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <h3 className="text-xl md:text-2xl font-heading font-extrabold text-foreground">
                        {project.title}
                      </h3>
                      <p className="text-sm font-semibold text-primary font-heading">
                        {project.tagline}
                      </p>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div>
                        <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-1">Context</h4>
                        <p className="text-xs text-muted-foreground/80 leading-relaxed">{project.context}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-1">My Role</h4>
                        <p className="text-xs text-muted-foreground/80 leading-relaxed">{project.role}</p>
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-bold px-2.5 py-1 rounded bg-secondary text-muted-foreground border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Side: Key Achievements & Links */}
                <div className="w-full md:w-80 flex flex-col justify-between border-t md:border-t-0 md:border-l border-border pt-6 md:pt-0 md:pl-8">
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold text-foreground uppercase tracking-wider">Key Results</h4>
                    <ul className="space-y-2.5">
                      {project.results.map((result, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground leading-relaxed flex items-start">
                          <span className="text-primary mr-2 select-none">•</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Links */}
                  {!project.isPlaceholder && (
                    <div className="flex items-center gap-4 mt-8 pt-4 border-t border-border/40">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors focus:ring-2 focus:ring-primary rounded p-1"
                        >
                          <GithubIcon className="w-4 h-4" />
                          <span>Code Repository</span>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1.5 text-xs font-semibold text-primary hover:underline transition-colors focus:ring-2 focus:ring-primary rounded p-1"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Site</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
