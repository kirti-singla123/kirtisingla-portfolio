import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Wrench, Users, Brain } from "lucide-react";

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
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Technical Skills</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to build modern web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="p-6 shadow-soft hover:shadow-elegant transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="text-primary mr-3 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className="hover:bg-accent transition-colors duration-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Proficiency Levels */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Proficiency Levels</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center shadow-soft">
              <div className="text-3xl font-bold text-primary mb-2">Expert</div>
              <p className="text-sm text-muted-foreground">HTML, React.js, Python, Django</p>
            </Card>
            <Card className="p-6 text-center shadow-soft">
              <div className="text-3xl font-bold text-primary mb-2">Advanced</div>
              <p className="text-sm text-muted-foreground">Django REST Framework, MySQL, Git</p>
            </Card>
            <Card className="p-6 text-center shadow-soft">
              <div className="text-3xl font-bold text-primary mb-2">Intermediate</div>
              <p className="text-sm text-muted-foreground">Bootstrap, Tailwind CSS, SQLite</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;