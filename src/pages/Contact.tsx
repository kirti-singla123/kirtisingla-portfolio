import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
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
      href: "mailto:kirtisingla38231@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Toronto, Canada",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "https://github.com/kirti-singla123"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn", 
      href: "https://linkedin.com/in/kirti-singla-web-dev"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Open for Opportunities</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Feel free to contact me for job opportunities or to discuss how I can contribute. I look forward to connecting!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Prefer direct contact? Here's how you can reach me.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center space-x-3">
                    <div className="text-primary">{item.icon}</div>
                    <div>
                      <p className="font-medium">{item.label}</p>
                      {item.href ? (
                        <a 
                          href={item.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
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

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Connect on Social</CardTitle>
                <CardDescription>
                  Find me on these platforms for professional networking.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  {socialLinks.map((link) => (
                    <Button
                      key={link.label}
                      variant="outline"
                      size="sm"
                      asChild
                      className="hover:bg-accent transition-colors"
                    >
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.icon}
                        <span className="ml-2">{link.label}</span>
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

        </div>
      </div>
    </div>
  );
};

export default Contact;