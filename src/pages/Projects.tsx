import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Website",
      image: "/E-Commerce.PNG",
      link: "https://creamy-com.onrender.com"
    },
    {
      title: "To-Do Application",
      image: "/ToDo.jpg",
      link: "https://todoflow-six.vercel.app"
    },
    {
      title: "Movie Hub App",
      image: "/MovieHub.png",
      link: "https://popcornplanet.netlify.app"
    },
    {
      title: "Portfolio Website Design",
      image: "/Portfolio.png",
      link: null
    },
    {
      title: "Responsive Layout",
      image: "/responsive.jpeg",
      link: null
    },
    {
      title: "Landing Page Design",
      image: "/homepage.PNG",
      link: null
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-8 py-20 max-w-7xl text-center">
        <h2 className="text-4xl font-bold mb-4 text-primary">
          Turning Ideas into Interactive Websites
        </h2>
        <p className="text-base mt-0 mb-12 text-muted-foreground max-w-2xl mx-auto">
          These projects show my passion for clean design, development, and smooth user experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="rounded-lg overflow-hidden shadow-soft bg-card hover:shadow-elegant transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 text-sm block mb-3 p-3 pb-0 transition-colors"
                >
                  🌐 Open Website
                </a>
              )}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover block"
              />
              <div className="p-3">
                <div className="text-base text-foreground font-medium">
                  {project.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;