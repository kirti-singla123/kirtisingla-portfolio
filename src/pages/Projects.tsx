import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard. Features include product management, shopping cart, and order tracking.",
      technologies: ["React", "Django", "PostgreSQL", "Stripe", "Tailwind CSS"],
      liveUrl: "https://creamy-com.onrender.com",
      image: "/homepage.png",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and project tracking capabilities.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Express"],
      liveUrl: "https://todoflow-six.vercel.app",
      image: "/ToDo.png"
    },
    {
      title: "MovieHub",
      description: "A responsive weather application that provides current conditions, forecasts, and weather maps using multiple APIs for comprehensive weather data.",
      technologies: ["JavaScript", "Weather API", "Chart.js", "CSS3", "HTML5"],
      liveUrl: "https://popcornplanet.netlify.app", 
      image: "/MovieHub.png"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Featured Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my best work demonstrating various technologies and problem-solving approaches.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className={`shadow-soft hover:shadow-elegant transition-all duration-300 animate-fade-in group ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                      {project.featured && (
                        <Badge className="ml-2 bg-gradient-primary">Featured</Badge>
                      )}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Render project image */}
                <div className="rounded-lg overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={`${project.title} Screenshot`}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Live Demo Button */}
                <div className="flex gap-3 pt-2">
                  <Button size="sm" asChild className="bg-gradient-primary">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
