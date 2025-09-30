import { GradientCard } from "@/components/atoms/GradientCard";
import { Text } from "@/components/atoms/Text";
import { GlowButton } from "@/components/atoms/GlowButton";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const ProjectCard = ({
  title,
  description,
  technologies,
  imageUrl,
  liveUrl,
  githubUrl,
  featured = false,
}: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded((prev) => !prev);
  };

  const truncatedDescription =
    description.length > 25 && !isExpanded
      ? `${description.slice(0, 25)}...`
      : description;

  return (
    <GradientCard
      className={featured ? "border-primary/50 shadow-glow" : ""}
      glow={featured}
      style={{ minHeight: "320px" }}
    >
      {imageUrl && (
        <div className="mb-4 rounded-lg overflow-hidden bg-surface-secondary h-48">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}

      <div className="space-y-4">
        <div>
          <Text variant="h4" className="mb-2">
            {title}
          </Text>
          <Text variant="body" className="text-text-muted">
            {truncatedDescription}
            {description.length > 25 && (
              <span
                onClick={toggleDescription}
                className="text-primary cursor-pointer ml-1"
              >
                {isExpanded ? "Show less" : "Read more"}
              </span>
            )}
          </Text>
        </div>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 pt-2">
          {liveUrl && (
            <GlowButton
              variant="outline"
              size="sm"
              href={liveUrl}
              className="flex items-center gap-2"
              target="_blank"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </GlowButton>
          )}
          {githubUrl && (
            <GlowButton
              variant="secondary"
              size="sm"
              href={githubUrl}
              className="flex items-center gap-2"
              target="_blank"
            >
              <Github className="w-4 h-4" />
              Code
            </GlowButton>
          )}
        </div>
      </div>
    </GradientCard>
  );
};
