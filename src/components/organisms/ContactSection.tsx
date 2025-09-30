import { Text } from "@/components/atoms/Text";
import { GlowButton } from "@/components/atoms/GlowButton";
import { GradientCard } from "@/components/atoms/GradientCard";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    label: "Email",
    value: "shuklagaurav781@gmail.com",
    href: "mailto:shuklagaurav781@gmail.com"
  },
  {
    icon: <Phone className="w-6 h-6" />,
    label: "Phone",
    value: "+91 9971521041",
    href: "tel:+919971521041"
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    label: "Location",
    value: "Gautam Buddha Nagar, UP, India",
    href: "https://www.google.com/maps/place/Punch+Enclave+Colony,+Lal+Kuan,+Ghaziabad,+Uttar+Pradesh+201009/@28.6282755,77.4691596,15z/data=!4m15!1m8!3m7!1s0x390cede6526f12bb:0xc21ead7c7fc8422b!2sPunch+Enclave+Colony,+Lal+Kuan,+Ghaziabad,+Uttar+Pradesh+201009!3b1!8m2!3d28.6282575!4d77.4794593!16s%2Fg%2F11gk8rqc71!3m5!1s0x390cede6526f12bb:0xc21ead7c7fc8422b!8m2!3d28.6282575!4d77.4794593!16s%2Fg%2F11gk8rqc71?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
  }
];

const socialLinks = [
  {
    icon: <Github className="w-6 h-6" />,
    label: "GitHub",
    href: "https://github.com/Gaurav-Dev07",
    color: "hover:text-text-primary"
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gaurav-shukla-8350b01a5/",
    color: "hover:text-primary"
  },
  {
    icon: <Twitter className="w-6 h-6" />,
    label: "Twitter",
    href: "https://x.com/Gaurav_2513",
    color: "hover:text-accent"
  }
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Text variant="h2" className="mb-4">
              Get In Touch
            </Text>
            <Text variant="body" className="max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hello, feel free to reach out!
            </Text>
          </div>

          <div >
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <Text variant="h3" className="mb-6 text-primary">
                  Let's Connect
                </Text>
                <div className="space-y-4" >
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-center gap-4 p-4 bg-card border border-card-border rounded-lg hover:bg-surface-hover hover:border-primary/30 transition-all duration-300 group"
                    >
                      <div className="text-primary group-hover:scale-110 transition-transform">
                        {info.icon}
                      </div>
                      <div>
                        <Text variant="small" className="text-text-muted uppercase">
                          {info.label}
                        </Text>
                        <Text variant="body" className="text-text-primary font-medium">
                          {info.value}
                        </Text>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <Text variant="h4" className="mb-4">
                  Follow Me
                </Text>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className={`p-3 bg-card border border-card-border rounded-lg text-text-muted transition-all duration-300 hover:border-primary/30 hover:scale-110 ${social.color}`}
                      aria-label={social.label}
                      target="_blank"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            {/* <GradientCard>
              <Text variant="h3" className="mb-6 text-primary">
                Send a Message
              </Text>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-surface border border-card-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-text-primary"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-surface border border-card-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-text-primary"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-surface border border-card-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-text-primary"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-surface border border-card-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-text-primary resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <GlowButton variant="primary" size="lg" className="w-full">
                  Send Message
                </GlowButton>
              </form>
            </GradientCard> */}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 p-8 bg-card border border-card-border rounded-2xl">
            <Text variant="h3" className="mb-4">
              Ready to Start a Project?
            </Text>
            <Text variant="body" className="mb-6 text-text-muted">
              I'm available for full-time opportunities.
            </Text>
            <GlowButton variant="primary" size="lg" href="mailto:shuklagaurav781@gmail.com">
              Let's Work Together
            </GlowButton>
          </div>
        </div>
      </div>
    </section>
  );
};