import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-surface text-on-surface overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      {/* Dynamic Header / Navigation */}
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* 01 // Biography & Stats */}
        <About />

        {/* 02 // Tech Stack */}
        <Skills />

        {/* 03 // Selected Work & Case Studies */}
        <Projects />

        {/* 04 // Experience & Roles (Chronology & Impact) */}
        <ExperienceTimeline />

        {/* 05 // Contact */}
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
