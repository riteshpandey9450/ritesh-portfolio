import project1 from "@/assets/projects_img/project-1.png";
import project2 from "@/assets/projects_img/project-2.png";
import project3 from "@/assets/projects_img/project-3.png";
import project4 from "@/assets/projects_img/project-4.png";
import project5 from "@/assets/projects_img/project-5.png";
import project6 from "@/assets/projects_img/project-6.png";
import project7 from "@/assets/projects_img/project-7.png";
import project8 from "@/assets/projects_img/project-8.png";
import project9 from "@/assets/projects_img/project-9.png";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Society HomeChef",
    description: "Production-grade multi-role hyperlocal food delivery platform supporting chefs, customers and delivery riders. Features real-time order dispatch via Socket.io, Haversine proximity for nearest-rider assignment, Gemini API AI nutrition analysis, and atomic MongoDB transactions.",
    image: project1,
    github: "https://github.com/riteshpandey9450/Society-homechef",
    live: "https://society-homechef.vercel.app/",
    tags: ["React.js", "Node.js", "MongoDB", "Socket.io", "Gemini API", "JWT"],
  },
  {
    id: 2,
    title: "SoulCare",
    description:
      "Secure AI-powered mental health platform with real-time anonymous messaging via WebSocket integration. Built a RAG pipeline using ML models for context-aware wellness resources, and used Supabase for distributed backend with 500+ users.",
    image: project2,
    github: "https://github.com/riteshpandey9450/SoulCare",
    live: "https://soulcare-nar5.onrender.com/",
    tags: ["React.js", "Node.js", "RAG Pipeline", "Supabase", "WebSockets"],
  },
  {
    id: 3,
    title: "QuizCraft",
    description: "Full-stack assessment platform with dynamic quiz creation, multi-format management and real-time result processing. Features JWT authentication, Zustand state management, RESTful APIs, schema-enforced MongoDB models, and per-user analytics dashboard.",
    image: project3,
    github: "https://github.com/riteshpandey9450/QuizCraft",
    live: "https://quizcraft-1-i98i.onrender.com/",
    tags: ["Node.js", "Express.js", "React.js", "MongoDB", "Zustand", "JWT"],
  },
  {
    id: 4,
    title: "FoodWise - Smart Retail Inventory & Waste Reduction Platform",
    description: "An intelligent inventory management system built to tackle food waste in retail environments. Tracks product expiry dates and automatically categorizes stock into Urgent, Critical, and Warning tiers - enabling retailers to either trigger smart discount campaigns or route near-expiry items to NGO donation channels. Features a centralized dashboard with real-time inventory metrics, monthly sales analytics, and donation tracking, all backed by seamless stock CRUD operations.",
    image: project4,
    github: "https://github.com/riteshpandey9450/Foodie",
    live: "https://youtu.be/TpBIOnNMM1g?si=jE0QvMcd_yfmVyLo",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API", "Inventory Management"],
  },
  {
    id: 5,
    image: project5,
    title: "GlobeQuest - Interactive World Atlas & Country",
    description: "A multi-page, data-driven world atlas application built with React 19 and React Router DOM. Integrates live country APIs to serve real-time data across 190+ nations with built-in search, filtering, and bi-directional sorting over large datasets. Demonstrates clean SPA architecture, native browser form APIs for lean input handling without state boilerplate, and a fully responsive CSS Grid/Flexbox layout optimized across all device sizes.",
    github: "https://github.com/riteshpandey9450/GlobeQuest",
    live: "https://globe-quest-nfug.vercel.app/",
    tags: ["React.js", "React Router DOM", "Axios", "REST API", "Responsive Design","JavaScript"],
  },
  {
    id: 6,
    image: project6,
    title: "Pokédex - Live Pokémon Search & Stats Explorer",
    description: "A fast, responsive Pokédex web app built with React 19 and Vite. Fetches comprehensive Pokémon data - stats, types, abilities, and images - from the PokéAPI using async/await patterns. Features real-time live search by name, clean card-based UI, and efficient async data handling across a large collection. A clean demonstration of API integration, component architecture, and modern JavaScript data manipulation.",
    github: "https://github.com/riteshpandey9450/Pockemon",
    live: "https://pockemon-gules.vercel.app/",
    tags: ["React.js", "Vite", "PokeAPI", "JavaScript", "Async/Await", "Tailwind CSS"],
  },
  {
    id: 7,
    image: project7,
    title: "FitForge - All-in-One Fitness, Nutrition & Psychology Hub",
    description: "A comprehensive wellness platform covering physical fitness, mental health, and nutritional guidance in one cohesive interface. Includes an interactive BMI Calculator, Calorie Calculator, and a self-assessment Quiz to help users evaluate and track their wellness state. Bridges fitness programs with psychology modules - covering cognitive dissonance, Maslow's Hierarchy, and operant conditioning - making it a unique blend of health science and practical tools.",
    github: "https://github.com/riteshpandey9450/FitForge",
    live: "https://fit-forge-eta.vercel.app/",
    tags: ["HTML5", "CSS3", "JavaScript", "BMI Calculator", "Calorie Tracker", "Responsive Design"],
  },
  {
    id: 8,
    image: project8,
    title: "Tech Titans - Video-First Educational Learning Platform",
    description: "A feature-rich educational website providing structured learning through video content, interactive quizzes, doubt support, and a goal-tracking To-Do system - all in one place. Designed to give learners a complete self-study workflow: watch, test, ask, and track. Built with vanilla HTML, CSS, and JavaScript, demonstrating clean UI architecture and multi-feature integration without any framework overhead.",
    github: "https://github.com/riteshpandey9450/Educational-Website",
    live: "https://riteshpandey9450.github.io/Educational-Website/",
    tags: ["HTML5", "CSS3", "JavaScript", "Quiz Engine", "Goal Tracking", "Educational Platform"],
  },
  {
    id: 9,
    image: project9,
    title: "Real-Time Currency Converter",
    description: "A clean, real-time currency conversion tool supporting live exchange rates across multiple world currencies. Built with vanilla HTML, CSS, and JavaScript - a focused utility project demonstrating API integration, DOM manipulation, and instant UI feedback without any framework dependency.",
    github: "https://github.com/riteshpandey9450/Currency-Convertor",
    live: "https://riteshpandey9450.github.io/Currency-Convertor/",
    tags: ["HTML5", "CSS3", "JavaScript", "Exchange Rate API", "DOM Manipulation"],
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <h2 className="text-4xl font-bold mb-4 gradient-text">
          Featured Projects
        </h2>
      </ScrollAnimation>
      <ScrollAnimation>
        <p className="text-gray-400 mb-12 max-w-2xl">
          Production-grade full-stack applications built with scalability,
          real-world usage, and clean architecture in mind.
        </p>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ScrollAnimation key={project.id}>
            <div className="bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm h-full flex flex-col">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                width={600}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-sm bg-purple-500/20 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Projects;
