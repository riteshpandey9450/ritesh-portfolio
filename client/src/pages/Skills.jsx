import {
  Code2,
  Layout,
  Server,
  Database,
  GitBranch,
  Wrench,
  Brain,
  MessageSquare,
  Users,
  Trophy,
} from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import {
  JavaScriptLogo,
  ReactLogo,
  TypeScriptLogo,
  NodeLogo,
  MongoDBLogo,
  VSCodeLogo,
  GitLogo,
  TailwindLogo,
  NextjsLogo,
  VercelLogo,
  PythonLogo,
  ExpressLogo,
  JWTLogo,
  AWSLogo,
  PostmanLogo,
  WindowsLogo,
  UbuntuLogo,
  LinuxLogo,
} from "@/components/TechLogos";

const skills = [
  {
    category: "Programming Languages",
    icon: <Code2 className="w-6 h-6" />,
    items: [
      { name: "C++", icon: <Code2 className="w-4 h-4" /> },
      { name: "JavaScript", icon: <JavaScriptLogo /> },
      { name: "TypeScript", icon: <TypeScriptLogo /> },
      { name: "Python", icon: <PythonLogo /> },
      { name: "Java", icon: <Code2 className="w-4 h-4" /> },
      { name: "SQL", icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    category: "Front-End Development",
    icon: <Layout className="w-6 h-6" />,
    items: [
      { name: "React.js", icon: <ReactLogo /> },
      { name: "Next.js", icon: <NextjsLogo /> },
      { name: "Tailwind CSS", icon: <TailwindLogo /> },
      { name: "HTML5/CSS3", icon: <Layout className="w-4 h-4" /> },
    ],
  },
  {
    category: "Back-End Development",
    icon: <Server className="w-6 h-6" />,
    items: [
      { name: "Node.js", icon: <NodeLogo /> },
      { name: "Express.js", icon: <ExpressLogo /> },
      { name: "Socket.io", icon: <Server className="w-4 h-4" /> },
      { name: "JWT Auth", icon: <JWTLogo /> },
      { name: "RESTful APIs", icon: <Server className="w-4 h-4" /> },
    ],
  },
  {
    category: "Databases & Cloud",
    icon: <Database className="w-6 h-6" />,
    items: [
      { name: "MongoDB", icon: <MongoDBLogo /> },
      { name: "PostgreSQL", icon: <Database className="w-4 h-4" /> },
      { name: "MySQL", icon: <Database className="w-4 h-4" /> },
      { name: "Supabase", icon: <Database className="w-4 h-4" /> },
      { name: "Firebase", icon: <Database className="w-4 h-4" /> },
      { name: "AWS", icon: <AWSLogo /> },
    ],
  },
  {
    category: "DevOps & Tools",
    icon: <GitBranch className="w-6 h-6" />,
    items: [
      { name: "Git/GitHub", icon: <GitLogo /> },
      { name: "Docker", icon: <Wrench className="w-4 h-4" /> },
      { name: "Postman", icon: <PostmanLogo /> },
      { name: "VS Code", icon: <VSCodeLogo /> },
      { name: "Vercel", icon: <VercelLogo /> },
    ],
  },
  {
    category: "CS Fundamentals",
    icon: <Brain className="w-6 h-6" />,
    items: [
      { name: "DSA", icon: <Trophy className="w-4 h-4" /> },
      { name: "OOP", icon: <Code2 className="w-4 h-4" /> },
      { name: "DBMS", icon: <Database className="w-4 h-4" /> },
      { name: "OS", icon: <LinuxLogo /> },
      { name: "Networking", icon: <Server className="w-4 h-4" /> },
    ],
  },
  {
    category: "Soft Skills",
    icon: <Users className="w-6 h-6" />,
    items: [
      { name: "Leadership", icon: <Users className="w-4 h-4" /> },
      { name: "Mentoring", icon: <Users className="w-4 h-4" /> },
      { name: "Communication", icon: <MessageSquare className="w-4 h-4" /> },
      { name: "Problem Solving", icon: <Brain className="w-4 h-4" /> },
    ],
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <h2 className="text-4xl font-bold mb-4 gradient-text">
          Technical Skills
        </h2>
      </ScrollAnimation>

      <ScrollAnimation>
        <p className="text-gray-400 mb-12 max-w-2xl">
          A comprehensive overview of my technical expertise — from competitive
          programming fundamentals to full-stack production systems.
        </p>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skillGroup) => (
          <ScrollAnimation key={skillGroup.category}>
            <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-white/10 rounded-lg">
                  {skillGroup.icon}
                </div>
                <h3 className="text-lg font-semibold">{skillGroup.category}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {skillGroup.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-gray-700/50 px-4 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all group"
                  >
                    <div className="text-gray-400 group-hover:text-white transition-colors">
                      {skill.icon}
                    </div>
                    <span className="text-gray-400 group-hover:text-white transition-colors text-sm">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Skills;
