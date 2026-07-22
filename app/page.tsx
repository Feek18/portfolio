import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      {/* Dynamic Header / Navigation */}
      <Header />

      <main className="flex-grow">
        {/* Hero Banner Section */}
        <Hero />

        {/* Biography Section */}
        <About />

        {/* Categorized Skills badges */}
        <Skills />

        {/* Detailed Projects with Contexts, Roles, & Accomplishments */}
        <Projects />

        {/* Experience Timeline */}
        <Experience />

        {/* Direct Linkage & Submission Contact Channels */}
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
