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
      image: "/homepage.png",
      featured: true
    },
    {
      title: "Glamour Haven – Salon Booking Website",
      description: "A full-stack salon booking platform where customers can schedule services online and the admin can manage appointments via a secure dashboard. Includes booking confirmation, real-time updates, and automated WhatsApp notifications for rebooking suggestions.",
      technologies: ["React", "Tailwind CSS", "Django", "Django REST Framework", "SQLite", "Render", "Netlify", "WhatsApp API"],
      liveUrl: "https://glamourheaven.netlify.app",
      featured: true
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
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-2xl overflow-hidden group border border-gray-100 ${
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

              <CardContent className="space-y-5 px-6 pb-6">
                {/* Project Image */}
                <div className="rounded-xl overflow-hidden h-60 shadow-md group-hover:shadow-xl transition-shadow duration-300">
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
                <div className="flex gap-4 pt-3">
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
