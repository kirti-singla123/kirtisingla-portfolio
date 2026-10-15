import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin } from "lucide-react";
import kirti_singla from "@/assets/kirti_singla.png";

const Home = () => {

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-subtle">
        <div className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Text */}
            <div className="space-y-8 animate-fade-in text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Hi, I'm <span className="text-primary">Kirti Singla</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mt-4">
               AI Engineer
              </p>
              <p className="text-base sm:text-lg text-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
                 I build AI-powered applications, from RAG pipelines and chatbots to the APIs and React interfaces around them. 
                  With nearly 5 years of software experience, 
                  I work with Python, Django, React.js, LangChain, and MCP to turn ideas into reliable, user-friendly products.
              </p>

              <div className="flex justify-center lg:justify-start space-x-4 mt-2">
                <Button variant="ghost" size="sm" asChild>
                  <a
                    href="https://github.com/kirti-singla123"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a
                    href="https://linkedin.com/in/kirti-singla-web-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative flex justify-center mt-10 lg:mt-0 animate-slide-up">
              <div className="relative w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 rounded-full overflow-hidden shadow-elegant bg-blue-50">
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
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
              About Me
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6 shadow-soft hover:shadow-elegant transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  Background
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I’m an AI Engineer with nearly 5 years of software experience. 
                  I’ve built AI chatbots with React and Django and worked on prompts and AI-assisted workflows. 
                  In my projects, I build things like a RAG pipeline with LangChain and a local AI assistant using Ollama. 
                  I work with Python, Django, React, and SQL, and I enjoy solving problems with clean, efficient code and building applications that help users.
                </p>
              </Card>

              <Card className="p-6 shadow-soft hover:shadow-elegant transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  What I'm Looking For
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I’m looking for a full-time AI Engineer role where I can build AI-powered products, such as chatbots and RAG applications, with a strong team. 
                  I want to keep learning new tools and techniques and grow as an engineer..
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
