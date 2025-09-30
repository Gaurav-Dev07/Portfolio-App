import { Text } from "@/components/atoms/Text";
import { GradientCard } from "@/components/atoms/GradientCard";
import { Code2, Lightbulb, Users, Zap } from "lucide-react";
import ProfileImg from "../../../public/assets/images/profile.jpg";
import { ABOUT_ME_SUMMARY, JORNEY_SUMMARY } from "@/utils";

const highlights = [
  {
    icon: <Code2 className="w-8 h-8 text-primary" />,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code that stands the test of time."
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-accent" />,
    title: "Innovation",
    description: "Always exploring new technologies and methodologies to solve complex problems creatively."
  },
  {
    icon: <Users className="w-8 h-8 text-success" />,
    title: "Collaboration",
    description: "Working effectively in cross-functional teams to deliver exceptional user experiences."
  },
  {
    icon: <Zap className="w-8 h-8 text-warning" />,
    title: "Performance",
    description: "Optimizing applications for speed, efficiency, and scalability across all platforms."
  }
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Text variant="h2" className="mb-4">
              About Me
            </Text>
            <Text variant="body" className="max-w-3xl mx-auto">
              {ABOUT_ME_SUMMARY}
            </Text>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <Text variant="h3" className="text-primary">
                My Journey
              </Text>
              <div className="space-y-4">
                <Text variant="body">
                  {JORNEY_SUMMARY.first}
                </Text>
                <Text variant="body">
                  {JORNEY_SUMMARY.second}
                </Text>
                <Text variant="body">
                  {JORNEY_SUMMARY.third}
                </Text>
              </div>
            </div>

            

            <div className="relative">
              <div className="w-full h-96 bg-surface-secondary rounded-2xl overflow-hidden shadow-lg">
                <img src={ProfileImg} alt="profile-img"/>
                {/* <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center">
                    <Code2 className="w-24 h-24 text-primary mx-auto mb-4" />
                    <Text variant="h4" className="text-text-primary">
                      Profile Image
                    </Text>
                    <Text variant="small" className="text-text-muted">
                      Coming Soon
                    </Text>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <GradientCard key={highlight.title} className="text-center">
                <div className="mb-4 flex justify-center">
                  {highlight.icon}
                </div>
                <Text variant="h4" className="mb-2">
                  {highlight.title}
                </Text>
                <Text variant="small" className="text-text-muted">
                  {highlight.description}
                </Text>
              </GradientCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};