import { Text } from "@/components/atoms/Text";
import { GlowButton } from "@/components/atoms/GlowButton";
import { ChevronDown } from "lucide-react";
import { NAME, PROFESSIONAL_SUMMARY, ROLE } from "@/utils";

export const HeroSection = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "-3s" }}
        />
      </div>

      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="space-y-4">
            <Text variant="caption" className="text-primary animate-slide-up">
              Hello, I'm
            </Text>
            <Text
              variant="h1"
              className="animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              {NAME}
            </Text>
            <Text
              variant="h2"
              className="text-text-secondary animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              {ROLE}
            </Text>
          </div>

          <Text
            variant="body"
            className="max-w-2xl mx-auto text-text-muted animate-slide-up"
            style={{ animationDelay: "0.6s" }}
          >
            {PROFESSIONAL_SUMMARY}
          </Text>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up"
            style={{ animationDelay: "0.8s" }}
          >
            <GlowButton variant="primary" size="lg" onClick={scrollToContact}>
              Get In Touch
            </GlowButton>
            <GlowButton variant="outline" size="lg" onClick={scrollToAbout}>
              Learn More
            </GlowButton>
          </div>

          {/* Tech Stack Preview */}
          <div
            className="flex flex-wrap justify-center gap-6 pt-8 animate-slide-up"
            style={{ animationDelay: "1s" }}
          >
            {[
              "Javascript",
              "TypeScript",
              "ReactJs",
              "React-Query",
              "Redux-Toolkit",
              "Node.Js",
              "Nest.Js",
              "Express.Js",
              "PostgresSql",
              "TypeOrm",
              "Redis",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-surface/50 border border-card-border rounded-full text-text-secondary text-sm font-medium backdrop-blur-sm hover:bg-surface-hover hover:text-text-primary transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-text-muted hover:text-text-primary transition-colors animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};
