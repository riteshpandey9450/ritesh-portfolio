import { ScrollAnimation } from "@/components/ScrollAnimation";
import { motion } from "framer-motion";
import { Award, ExternalLink, Trophy } from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "ICPC 2025 Regionalist",
    issuer: "ICPC Foundation",
    date: "2025",
    link: "https://drive.google.com/file/d/1F1awhPxVcK-4UgmIc3xN7e5xUF49DP05/view",
    description:
      "Qualified for both Amritapuri & Chennai Regionals. Achieved Rank 81 at Chennai Regional and Rank 180 at Amritapuri Regional.",
    skills: ["Competitive Programming", "Team Algorithms", "Problem Solving"],
    highlight: true,
  },
  {
    id: 2,
    title: "LeetCode Knight",
    issuer: "LeetCode",
    date: "",
    link: "https://leetcode.com/u/Pandey_Ritesh/",
    description:
      "Max Rating 1979+. Global Rank 589 in Biweekly Contest 168 among worldwide participants.",
    skills: ["DSA", "Algorithms", "Data Structures"],
    highlight: true,
  },
  {
    id: 3,
    title: "Codeforces Specialist",
    issuer: "Codeforces",
    date: "",
    link: "https://codeforces.com/profile/riteshpandey",
    description:
      "Max Rating 1419+. Global Rank 1171 in Codeforces Round 1054 among worldwide participants.",
    skills: ["Competitive Programming", "Mathematics", "Greedy Algorithms"],
    highlight: false,
  },
  {
    id: 4,
    title: "CodeChef 3-Star",
    issuer: "CodeChef",
    date: "",
    link: "https://www.codechef.com/users/r1teshpandey",
    description:
      "Max Rating 1700+. Global Rank 197 in Starters 177 among worldwide participants.",
    skills: ["Competitive Programming", "Problem Solving"],
    highlight: false,
  },
  {
    id: 5,
    title: "Meta Hacker Cup 2025 Round 2",
    issuer: "Meta",
    date: "2025",
    link: "https://drive.google.com/file/d/1-VzrWMRRL5_-C6Tm8vxBWwa5sbHyf-rd/view",
    description:
      "Achieved Global Rank 1598 in Round 2 of Meta Hacker Cup 2025 among worldwide participants.",
    skills: ["Competitive Programming", "Algorithmic Thinking"],
    highlight: false,
  },
  {
    id: 6,
    title: "TCS CodeVita Season 13",
    issuer: "TCS",
    date: "2025",
    link: "https://drive.google.com/file/d/1B49q2Gl4c0Aoh_EklVyuyr5MEzLuQrNZ/view",
    description:
      "Secured Global Rank 1670 among worldwide participants in one of India's largest coding contests.",
    skills: ["Competitive Programming", "Problem Solving", "C++"],
    highlight: false,
  },
];

const Certificates = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <motion.div
          className="flex items-center gap-3 mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Trophy className="w-8 h-8" />
          <h2 className="text-4xl font-bold gradient-text">Achievements</h2>
        </motion.div>
      </ScrollAnimation>

      <ScrollAnimation>
        <p className="text-gray-400 mb-12 max-w-2xl">
          Competitive programming rankings and contest achievements that
          demonstrate algorithmic thinking and problem-solving at a global level.
        </p>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 gap-6">
        {achievements.map((cert) => (
          <ScrollAnimation key={cert.id}>
            <div
              className={`bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all group border h-full flex flex-col ${
                cert.highlight ? "border-white/20" : "border-white/5"
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-semibold">{cert.title}</h3>
                {cert.highlight && (
                  <Award className="w-5 h-5 text-yellow-400 flex-shrink-0 ml-2" />
                )}
              </div>
              <div className="text-gray-400 space-y-2 flex flex-col flex-grow">
                <div className="flex items-center justify-between">
                  <span className="text-lg">{cert.issuer}</span>
                  <span className="text-sm">{cert.date}</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {cert.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-sm bg-white/10 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-4">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 group-hover:translate-x-2 transition-transform"
                  >
                    Verify
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
