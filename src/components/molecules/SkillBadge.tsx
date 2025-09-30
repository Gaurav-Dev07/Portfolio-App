import { Text } from "@/components/atoms/Text";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  skill: string;
  level?: "beginner" | "intermediate" | "advanced" | "expert";
  icon?: React.ReactNode;
  className?: string;
}

const levelColors = {
  beginner: "bg-warning/20 text-warning border-warning/30",
  intermediate: "bg-primary/20 text-primary border-primary/30",
  advanced: "bg-success/20 text-success border-success/30",
  expert: "bg-accent/20 text-accent border-accent/30",
};

export const SkillBadge = ({ 
  skill, 
  level = "intermediate", 
  icon, 
  className 
}: SkillBadgeProps) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm",
        "transition-all duration-300 hover:scale-105 hover:shadow-sm",
        levelColors[level],
        className
      )}
    >
      {icon && <span className="w-4 h-4">{icon}</span>}
      <Text variant="small" className="font-medium">
        {skill}
      </Text>
    </div>
  );
};