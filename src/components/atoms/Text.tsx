import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  variant?: "h1" | "h2" | "h3" | "h4" | "body" | "small" | "caption";
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  style?: React.CSSProperties;
}

const textVariants = {
  h1: "text-4xl md:text-6xl font-bold tracking-tight text-text-primary",
  h2: "text-3xl md:text-4xl font-bold tracking-tight text-text-primary",
  h3: "text-2xl md:text-3xl font-semibold tracking-tight text-text-primary",
  h4: "text-xl md:text-2xl font-semibold text-text-primary",
  body: "text-base md:text-lg text-text-secondary leading-relaxed",
  small: "text-sm text-text-muted",
  caption: "text-xs text-text-muted uppercase tracking-wider",
};

export const Text = ({ 
  children, 
  variant = "body", 
  className, 
  as,
  style 
}: TextProps) => {
  const Component = as || (variant.startsWith('h') ? variant : 'p');
  
  return (
    <Component className={cn(textVariants[variant], className)} style={style}>
      {children}
    </Component>
  );
};