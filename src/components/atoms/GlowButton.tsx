import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlowButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
}

const glowVariants = {
  primary: "bg-primary hover:bg-primary-hover text-primary-foreground shadow-glow hover:shadow-glow transition-all duration-300 hover:scale-105",
  secondary: "bg-secondary hover:bg-secondary-hover text-secondary-foreground border border-card-border hover:border-primary/50 transition-all duration-300 hover:scale-105",
  outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-glow hover:shadow-glow transition-all duration-300 hover:scale-105",
};

const sizeVariants = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export const GlowButton = ({ 
  children, 
  variant = "primary", 
  size = "md", 
  className, 
  onClick,
  href,
  target
}: GlowButtonProps) => {
  const classes = cn(
    "font-semibold rounded-lg backdrop-blur-sm",
    glowVariants[variant],
    sizeVariants[size],
    className
  );

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} target={target}>
        {children}
      </a>
    );
  }

  return (
    <Button className={classes} onClick={onClick}>
      {children}
    </Button>
  );
};