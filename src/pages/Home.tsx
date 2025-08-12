import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Eye, Download, Mail, Github, Linkedin } from "lucide-react";
import kirti_singla from "@/assets/kirti_singla.png";

const Home = () => {
  const handleResumeDownload = () => {
    // In a real app, this would trigger a download of your actual resume PDF
    window.open("/Kirti_Resume_Canada.pdf", "_blank");
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-subtle">
        <div className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Hi, I'm{" "}
                  <span className="text-primary">Kirti Singla</span>
                </h1>
                <p className="text-xl text-muted-foreground mt-4">
                  Full-Stack Developer & Problem Solver
                </p>
              </div>
              
              <p className="text-lg text-foreground leading-relaxed max-w-lg">
                Dedicated web developer with strong expertise in React and Django. I focus on creating 
                robust, user-friendly applications and thrive on turning complex requirements into 
                streamlined solutions.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button 
                    onClick={handleResumeDownload}
                    className="bg-gradient-primary hover:shadow-elegant transition-all duration-300"
                     size="lg">
                  <Eye className="mr-2 h-5 w-5" />
                  Explore My Resume
                  </Button>
                
              </div>

              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative animate-slide-up flex justify-center">
  <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-elegant">
    <img 
      src={kirti_singla} 
      alt="Professional workspace" 
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-primary/10"></div>
  </div>
</div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 shadow-soft hover:shadow-elegant transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 text-primary">Background</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I build web applications using React, Django, and SQL. I enjoy solving problems 
                  by writing clean and efficient code. I like working on projects that help users 
                  and make a difference.
                </p>
              </Card>

              <Card className="p-6 shadow-soft hover:shadow-elegant transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 text-primary">What I'm Looking For</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I am looking for a full-time job where I can learn new skills, work with a great team, 
                  and grow as a developer.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
