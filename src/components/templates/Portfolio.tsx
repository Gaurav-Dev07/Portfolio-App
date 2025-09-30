import { Header } from "@/components/organisms/Header";
import { HeroSection } from "@/components/organisms/HeroSection";
import { AboutSection } from "@/components/organisms/AboutSection";
import { SkillsSection } from "@/components/organisms/SkillsSection";
import { ProjectsSection } from "@/components/organisms/ProjectsSection";
import { ContactSection } from "@/components/organisms/ContactSection";
import { PERSONAL_PROJECTS, PROFESSIONAL_PROJECTS } from "@/utils";

export const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection
          title={"Professional Projects"}
          description={
            "The following projects highlight my professional experience working under my employer, where I played a significant role in designing, developing, and optimizing scalable applications. Each project reflects my ability to deliver business-driven solutions with clean architecture and robust performance."
          }
          projects={PROFESSIONAL_PROJECTS}
        />
        <ProjectsSection
          title={"Personal Projects"}
          description={
            "The following personal projects showcase my problem-solving mindset and passion for building impactful solutions. Beyond my professional work, these projects reflect my solution-driven approach, demonstrating how software can be leveraged to tackle complex challenges while also highlighting my deep interest in AI agents."
          }
          projects={PERSONAL_PROJECTS}
        />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-surface border-t border-card-border py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-text-muted text-sm">
            © 2024 Gaurav Shukla. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};
