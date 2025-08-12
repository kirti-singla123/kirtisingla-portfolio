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
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Featured Projects</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my best work demonstrating various technologies and problem-solving approaches.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-2xl overflow-hidden group ${
                project.featured ? "lg:col-span-2" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-3 px-6 pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl font-semibold mb-2 group-hover:text-teal-600 transition-colors">
                      {project.title}
                      {project.featured && (
                        <Badge className="ml-3 bg-gradient-to-r from-teal-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </Badge>
                      )}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-700 leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6 px-6 pb-6">
                {/* Project image */}
                <div className="rounded-xl overflow-hidden h-56 shadow-md group-hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={project.image}
                    alt={`${project.title} Screenshot`}
                    className="object-cover w-full h-full"
                    loading="lazy"
                    decoding="async"
                    fetchpriority="low"
                  />
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs px-3 py-1 rounded-full border-gray-300 text-gray-700"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Live Demo Button */}
                <div className="flex gap-4 pt-4">
                  <Button
                    size="sm"
                    asChild
                    className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 shadow-lg"
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <ExternalLink className="h-5 w-5 mr-2" />
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
