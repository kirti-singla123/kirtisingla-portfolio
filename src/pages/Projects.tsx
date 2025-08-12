import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Image } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard. Features include product management, shopping cart, and order tracking.",
      technologies: ["React", "Django", "PostgreSQL", "Stripe", "Tailwind CSS"],
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
      liveUrl: "https://your-ecommerce-demo.com",
      image: "/homepage.png",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and project tracking capabilities.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Express"],
      githubUrl: "https://github.com/yourusername/task-manager",
      liveUrl: "https://your-taskmanager-demo.com",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application that provides current conditions, forecasts, and weather maps using multiple APIs for comprehensive weather data.",
      technologies: ["JavaScript", "Weather API", "Chart.js", "CSS3", "HTML5"],
      githubUrl: "https://github.com/yourusername/weather-dashboard",
      liveUrl: "https://your-weather-demo.com", 
      image: "/api/placeholder/400/250"
    },
    {
      title: "Blog CMS",
      description: "A content management system for bloggers with markdown support, SEO optimization, and analytics dashboard for tracking engagement.",
      technologies: ["Django", "Python", "SQLite", "Bootstrap", "TinyMCE"],
      githubUrl: "https://github.com/yourusername/blog-cms",
      liveUrl: "https://your-blog-demo.com",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Portfolio Website",
      description: "This very portfolio website built with modern React and beautiful animations. Fully responsive and optimized for performance.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Lovable"],
      githubUrl: "https://github.com/yourusername/portfolio",
      liveUrl: "https://your-portfolio.com",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Data Visualization Tool",
      description: "Interactive charts and graphs for data analysis with filtering, export capabilities, and real-time data updates from external APIs.",
      technologies: ["React", "D3.js", "Python", "FastAPI", "Chart.js"],
      githubUrl: "https://github.com/yourusername/data-viz",
      liveUrl: "https://your-dataviz-demo.com",
      image: "/api/placeholder/400/250"
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
                {/* Project Image Placeholder */}
                <div className="bg-muted rounded-lg h-48 flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                  <Image className="h-12 w-12 text-muted-foreground" />
                  <span className="ml-2 text-muted-foreground">Project Screenshot</span>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
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

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="p-8 max-w-2xl mx-auto shadow-soft">
            <h2 className="text-2xl font-bold mb-4">Want to see more?</h2>
            <p className="text-muted-foreground mb-6">
              Check out my GitHub profile for additional projects and contributions to open source.
            </p>
            <Button asChild className="bg-gradient-primary">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2" />
                View GitHub Profile
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;
