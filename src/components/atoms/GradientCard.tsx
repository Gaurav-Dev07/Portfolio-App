import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GradientCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  style?: React.CSSProperties;
}

export const GradientCard = ({ 
  children, 
  className, 
  hover = true,
  glow = false,
  style 
}: GradientCardProps) => {
  return (
    <div
      className={cn(
        "bg-card border border-card-border rounded-xl p-6 backdrop-blur-sm",
        "transition-all duration-300",
        hover && "hover:bg-surface-hover hover:border-primary/30 hover:-translate-y-1",
        glow && "shadow-accent-glow",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};