import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Creamy – Ice Cream E-commerce Website",
      description: "A Django-powered ice cream shop where users can browse flavors, manage their cart, and place orders. Includes secure authentication, product browsing, and a responsive Bootstrap design.",
      technologies: ["Python", "Django", "HTML", "CSS", "JavaScript", "Bootstrap", "SQLite", "PayPal Sandbox"],
      liveUrl: "https://creamy-com.onrender.com",
      image: "/homepage.png"
    },
    {
      title: "Glamour Haven – Salon Booking Website",
      description: "A full-stack salon booking platform where customers can schedule services online and the admin can manage appointments via a secure dashboard. Includes booking confirmation, real-time updates, and automated WhatsApp notifications for rebooking suggestions.",
      technologies: ["React", "Tailwind CSS", "Django", "Django REST Framework", "SQLite", "Render", "Netlify", "WhatsApp API"],
      liveUrl: "https://glamourheaven.netlify.app",
      image: "/GlamourHaven.png"
    },
    {
      title: "ToDoFlow – Task Management App",
      description: "A clean and responsive task management tool with real-time updates, task persistence via localStorage, and features for adding, completing, and deleting tasks.",
      technologies: ["React", "JavaScript (ES6+)", "HTML", "CSS", "LocalStorage", "React-router-dom"],
      liveUrl: "https://todoflow-six.vercel.app",
      image: "/ToDo.png"
    },
    {
      title: "MovieHub – React Movie Wishlist App",
      description: "A modern and responsive movie discovery platform that lets users browse trending films from TMDB, add favorites to a wishlist, and persist selections using localStorage.",
      technologies: ["React", "JavaScript (ES6+)", "Bootstrap", "TMDB API", "React Context API", "LocalStorage", "HTML5", "CSS3"],
      liveUrl: "https://popcornplanet.netlify.app", 
      image: "/MovieHub.png"
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="container mx-auto px-6 py-16">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-3 bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my best work demonstrating various technologies and problem-solving approaches.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-2xl overflow-hidden group border border-gray-100 flex flex-col"
            >
              <div className="w-full h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} Screenshot`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <CardHeader className="pb-3 px-6 pt-6">
                <CardTitle className="text-2xl font-semibold mb-2 group-hover:text-teal-600 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm text-gray-700 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-5 px-6 pb-6 flex-grow flex flex-col justify-between">
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs px-3 py-1 rounded-full border-gray-300 text-gray-700 hover:bg-gray-100 transition"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Live Demo Button */}
                <div className="pt-3">
                  <Button
                    size="sm"
                    asChild
                    className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 shadow-md transition transform hover:-translate-y-0.5"
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
