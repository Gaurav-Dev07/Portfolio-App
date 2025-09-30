import { Text } from "@/components/atoms/Text";
import { cn } from "@/lib/utils";

interface NavigationItemProps {
  label: string;
  href: string;
  active?: boolean;
  onClick?: () => void;
}

export const NavigationItem = ({ 
  label, 
  href, 
  active, 
  onClick 
}: NavigationItemProps) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "relative px-4 py-2 text-text-secondary hover:text-text-primary transition-all duration-300",
        "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5",
        "after:bg-primary after:scale-x-0 after:transition-transform after:duration-300",
        "hover:after:scale-x-100",
        active && "text-text-primary after:scale-x-100"
      )}
    >
      <Text variant="small" className="font-medium">
        {label}
      </Text>
    </a>
  );
};