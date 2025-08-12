import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "kirtisingla38231@gmail.com",
      href: "mailto:kirtisingla38231@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Toronto, Canada",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "https://github.com/kirti-singla123",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/kirti-singla-web-dev",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section with Gradient Background */}
      <div className="relative pt-20 pb-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(var(--primary-glow)/0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.1),transparent_50%)]"></div>

        <div className="container relative mx-auto px-6 py-20">
          <div className="text-center mb-10 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full mb-8 shadow-elegant animate-float">
              <Mail className="h-10 w-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Open for Opportunities
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Feel free to contact me for job opportunities or to discuss how I
              can contribute. I look forward to connecting!
            </p>
          </div>
        </div>
      </div>

      {/* Contact Cards Section */}
      <div className="relative -mt-20 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
            {/* Contact Information Card */}
            <Card className="shadow-elegant border-0 bg-card/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 animate-slide-up group">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Contact Information</CardTitle>
                    <CardDescription className="text-base">
                      Prefer direct contact? Here's how you can reach me.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-subtle hover:bg-accent/50 transition-all duration-300 group/item"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-all duration-300">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:underline"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links Card */}
            <Card className="shadow-elegant border-0 bg-card/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 animate-slide-up group">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Github className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Connect on Social</CardTitle>
                    <CardDescription className="text-base">
                      Find me on these platforms for professional networking.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  {socialLinks.map((link, index) => (
                    <Button
                      key={link.label}
                      variant="outline"
                      size="lg"
                      asChild
                      className="h-16 justify-start bg-gradient-subtle border-2 border-primary/20 hover:border-primary hover:bg-gradient-primary hover:text-primary-foreground hover:shadow-elegant transition-all duration-300 group/social"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4"
                      >
                        <div className="w-8 h-8 flex items-center justify-center">
                          {link.icon}
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-lg">{link.label}</div>
                          <div className="text-sm opacity-70 group-hover/social:opacity-100 transition-opacity">
                            {link.label === "GitHub"
                              ? "View my repositories"
                              : "Connect professionally"}
                          </div>
                        </div>
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
