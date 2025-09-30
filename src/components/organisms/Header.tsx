import { NavigationItem } from "@/components/molecules/NavigationItem";
import { Text } from "@/components/atoms/Text";
import { ThemeToggle } from "@/components/atoms/ThemeToggle";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-nav-background/80 backdrop-blur-md border-b border-card-border"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Text variant="h4" className="font-bold text-primary">
            &lt;Portfolio/&gt;
          </Text>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <NavigationItem
                key={item.label}
                label={item.label}
                href={item.href}
                active={activeSection === item.href.slice(1)}
                onClick={() => handleNavClick(item.href)}
              />
            ))}
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              className="p-2 text-text-primary hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-card-border">
            <div className="flex flex-col space-y-2 pt-4">
              {navItems.map((item) => (
                <NavigationItem
                  key={item.label}
                  label={item.label}
                  href={item.href}
                  active={activeSection === item.href.slice(1)}
                  onClick={() => handleNavClick(item.href)}
                />
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};