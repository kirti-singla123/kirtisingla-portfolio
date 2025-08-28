import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing services, projects, and contact information. Built with React and Tailwind CSS, deployed on Netlify.",
    image: "/projects/portfolio.png",
    link: "https://your-portfolio.netlify.app",
    featured: true,
  },
  {
    title: "Glamour Heaven – Salon Booking App",
    description:
      "A full-stack salon booking platform with customer appointment management and an admin dashboard. Built with React (frontend) and Django (backend).",
    image: "/projects/glamourheaven.png",
    link: "https://glamourheaven.netlify.app",
    featured: true,
  },
  {
    title: "ToDoFlow – Task Management App",
    description:
      "A clean and responsive task management tool with real-time updates, task persistence via localStorage, and features for adding, completing, and deleting tasks.",
    image: "/projects/todoflow.png",
    link: "https://todoflow.netlify.app",
    featured: false,
  },
  {
    title: "MovieHub – Movie Explorer",
    description:
      "A movie discovery app integrating with a public API, featuring search, filters, and detailed movie pages. Built with React and styled with Tailwind CSS.",
    image: "/projects/moviehub.png",
    link: "https://moviehub.netlify.app",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Featured Projects
        </h2>
        <p className="text-gray-600">
          A selection of projects I’ve worked on, ranging from full-stack apps
          to frontend interfaces.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <Card
            key={idx}
            className={`flex flex-col rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ${
              project.featured ? "md:col-span-2" : ""
            }`}
          >
            {/* Image Section */}
            <div className="h-64 w-full overflow-hidden">
              <img
                src={project.image}
                alt={`${project.title} Screenshot`}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Content */}
            <CardContent className="flex-grow p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600">{project.description}</p>
            </CardContent>

            {/* Footer */}
            <CardFooter className="p-6 pt-0">
              <Button
                asChild
                className="w-full bg-teal-600 text-white hover:bg-teal-700 transition-colors"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
