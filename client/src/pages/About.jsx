import cvPdf from "@/assets/files/cv_pdf/Ritesh_Pandey_Resume.pdf";
import profileImg from "@/assets/profile/profile.jpg";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { motion } from "framer-motion";
import { Code2, Target, GraduationCap, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const achievements = [
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "ICPC 2025 Regionalist",
    description: "Rank 81 at Chennai Regional, Rank 180 at Amritapuri",
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "1500+ Problems Solved",
    description: "Across LeetCode, Codeforces, CodeChef, GFG and more",
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "8.50 CGPA",
    description: "B.Tech CSE at MMMUT Gorakhpur",
  },
];

const interests = [
  "Full Stack Development",
  "Competitive Programming",
  "System Design",
  "AI Integration",
  "Backend Scalability",
  "Open Source",
];

const quickFacts = [
  "Based in Ghazipur, Uttar Pradesh, India",
  "B.Tech CSE @ MMMUT Gorakhpur (2023–2027)",
  "CGPA: 8.50/10.0",
  "DSA Head @ MMMUT Resources - Mentored 200+ students",
];

const About = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-4xl mx-auto pb-20">
      <ScrollAnimation>
        <motion.h2 className="text-4xl font-bold mb-8 gradient-text">
          About Me
        </motion.h2>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 gap-8">
        <ScrollAnimation>
          <div className="aspect-square overflow-hidden rounded-2xl">
            <img
              src={profileImg}
              alt="Ritesh Pandey"
              width={600}
              height={600}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </ScrollAnimation>

        <ScrollAnimation className="space-y-6">
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Hi! I'm Ritesh Pandey — a passionate full-stack developer and
              competitive programmer pursuing B.Tech in Computer Science at
              MMMUT Gorakhpur. I thrive at the intersection of scalable
              engineering and elegant problem-solving.
            </p>
            <p className="text-gray-300 leading-relaxed">
              As an ICPC 2025 Regionalist, Codeforces Specialist, LeetCode Knight, Codechef 3-star, I've
              solved 1500+ problems across platforms. This competitive
              programming foundation directly informs how I architect robust,
              performance-optimized systems.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I specialize in the MERN stack and have built production-grade
              platforms like SoulCare (AI mental health), Society HomeChef (food
              delivery application), and QuizCraft (Assessment platform). I also serve as DSA Head at MMMUT
              Resources, mentoring 200+ students.
            </p>
          </div>

          <div className="pt-4">
            <h3 className="text-2xl font-semibold mb-4 gradient-text">
              Quick Facts
            </h3>
            <ul className="list-none space-y-3">
              {quickFacts.map((fact) => (
                <motion.li
                  key={fact}
                  className="flex items-center space-x-2 text-gray-300"
                >
                  <span className="w-2 h-2 bg-white rounded-full" />
                  <span>{fact}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="flex justify-start space-x-4">
            <a
              href={cvPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Download Resume
            </a>
            <Link
              to="/skills"
              className="px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors"
            >
              My Skills
            </Link>
          </div>
        </ScrollAnimation>
      </div>

      <ScrollAnimation>
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 gradient-text">
            Highlights
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement) => (
              <div
                key={achievement.title}
                className="bg-white/5 p-6 rounded-xl backdrop-blur-sm"
              >
                <div className="text-white mb-4">{achievement.icon}</div>
                <h4 className="text-xl font-semibold mb-2">
                  {achievement.title}
                </h4>
                <p className="text-gray-400">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation>
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 gradient-text">
            Areas of Interest
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {interests.map((interest) => (
              <div
                key={interest}
                className="bg-white/5 p-4 rounded-xl backdrop-blur-sm flex items-center gap-3"
              >
                <Target className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">{interest}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default About;
