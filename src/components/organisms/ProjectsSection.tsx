import { Text } from "@/components/atoms/Text";
import { ProjectCard } from "@/components/molecules/ProjectCard";

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  featured?: boolean;
  liveUrl?: string;
  githubUrl?: string;
}
export interface ProjectSectionProps {
  title: string;
  description: string;
  projects: Project[]
}

export const ProjectsSection = ({title, description, projects}: ProjectSectionProps) => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Text variant="h2" className="mb-4">
              {title}
            </Text>
            <Text variant="body" className="max-w-3xl mx-auto mb-6">
              {description}
            </Text>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>



          {/* <div className="text-center mt-16">
            <Text variant="body" className="mb-6 text-text-muted">
              Want to see more of my work?
            </Text>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-hover transition-colors font-medium"
            >
              View All Projects on GitHub
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};