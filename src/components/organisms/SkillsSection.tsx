import { Text } from "@/components/atoms/Text";
import { SkillBadge } from "@/components/molecules/SkillBadge";
import { GradientCard } from "@/components/atoms/GradientCard";

const skillCategories = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: [
      { name: "html", level: "expert" as const },
      { name: "css", level: "expert" as const },
      { name: "javascript", level: "expert" as const },
      { name: "react-query", level: "intermediate" as const },
      { name: "React", level: "expert" as const },
      { name: "TypeScript", level: "advanced" as const },
      { name: "material-ui", level: "advanced" as const },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: "expert" as const },
      {name: "nest.js", level: "expert" as const},
      { name: "Express.js", level: "expert" as const },
      { name: "GraphQL", level: "intermediate" as const },
      { name: "REST APIs", level: "expert" as const },
      { name: "Microservices", level: "advanced" as const },
      
    ],
  },
  {
    title: "Database",
    icon: "💾",
    skills: [
      { name: "PostgreSQL", level: "advanced" as const },
      { name: "MongoDB", level: "beginner" as const },
      { name: "Redis", level: "intermediate" as const },
      { name: "SQL", level: "expert" as const },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: "🚀",
    skills: [
      { name: "Docker", level: "beginner" as const },
      { name: "Git", level: "expert" as const },
      { name: "CI/CD", level: "beginner" as const },
      { name: "Linux", level: "advanced" as const },
      { name: "Kubernetes", level: "beginner" as const },
    ],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Text variant="h2" className="mb-4">
              Skills & Technologies
            </Text>
            <Text variant="body" className="max-w-3xl mx-auto">
              A comprehensive toolkit built through years of hands-on experience
              and continuous learning in modern software development.
            </Text>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <GradientCard
                key={category.title}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <Text variant="h4" className="text-primary">
                    {category.title}
                  </Text>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <SkillBadge
                      key={skill.name}
                      skill={skill.name}
                      level={skill.level}
                      className="w-full justify-center"
                    />
                  ))}
                </div>
              </GradientCard>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="mt-16 text-center">
            <Text variant="h3" className="mb-8 text-primary">
              Other Technologies
            </Text>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Jest",
                "Cypress",
                "Webpack",
                "Vite",
                "ESLint",
                "Prettier",
                "Figma",
                "Agile",
                "Scrum",
                "TDD",
                "Clean Architecture",
              ].map((tech) => (
                <SkillBadge
                  key={tech}
                  skill={tech}
                  level="intermediate"
                  className="hover:scale-110"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
