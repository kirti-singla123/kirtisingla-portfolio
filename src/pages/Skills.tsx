import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="h-6 w-6" />,
      skills: ["HTML", "React.js", "Bootstrap", "Tailwind CSS"]
    },
    {
      title: "Backend Development",
      icon: <Code className="h-6 w-6" />,
      skills: ["Python", "Django", "Django REST Framework (DRF)"]
    },
    {
      title: "Database & ORM",
      icon: <Database className="h-6 w-6" />,
      skills: ["SQLite", "MySQL", "Django ORM"]
    },
    {
      title: "API Communication",
      icon: <Globe className="h-6 w-6" />,
      skills: ["RESTful APIs", "Postman"]
    },
    {
      title: "Version Control",
      icon: <Code className="h-6 w-6" />,
      skills: ["Git", "GitHub"]
    },
    {
      title: "Deployment",
      icon: <Wrench className="h-6 w-6" />,
      skills: ["Render", "Netlify", "Vercel"]
    },
    {
      title: "Tools & IDEs",
      icon: <Wrench className="h-6 w-6" />,
      skills: ["Visual Studio Code (VS Code)", "Jupyter Notebook", "PyCharm"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#f0faff] pt-20">
      <div className="container mx-auto px-6 py-20">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent">
            Technical Skills
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise and the tools I
            use to build modern web applications.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="p-6 shadow-md hover:shadow-lg border border-teal-100 transition-all duration-300 animate-fade-in group bg-white/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="text-teal-600 mr-3 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-teal-50 text-teal-700 border border-teal-200 hover:bg-teal-100 hover:text-teal-800 transition-colors duration-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
