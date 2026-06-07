import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Building2,
  ArrowRight,
} from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";


const experiences = [
  {
    id: 1,
    title: "DSA Head",
    company: "MMMUT Resources",
    location: "Gorakhpur, UP (On-site)",
    period: "Aug 2024 – Present",
    type: "Leadership",
    description: [
      "Directed academic resource distribution for 2,000+ students; migrated to an optimized cloud repository, significantly reducing download latency and improving resource access reliability.",
      "Mentored 200+ students in DSA and competitive programming, contributing to measurable improvement in student performance in coding contests and placements.",
    ],
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen pt-16 sm:pt-20 px-4 max-w-5xl mx-auto pb-16 sm:pb-20">
      <ScrollAnimation>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 gradient-text flex items-center gap-3">
          <Briefcase className="w-7 h-7 sm:w-8 sm:h-8" />
          Leadership & Experience
        </h2>
      </ScrollAnimation>

      <ScrollAnimation>
        <p className="text-gray-400 mb-10 max-w-2xl">
          Currently in my final year with no formal internships yet — actively
          applying for intenship and full-time roles. Below is my leadership experience at
          MMMUT Resources.
        </p>
      </ScrollAnimation>

      <div className="space-y-8 sm:space-y-12">
        {experiences.map((exp) => (
          <ScrollAnimation key={exp.id}>
            <div className="group relative bg-gray-800/50 rounded-xl sm:rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5">
              <div className="grid grid-cols-1 md:grid-cols-[1fr,300px]">
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <div className="p-2 sm:p-3 bg-white/10 rounded-lg sm:rounded-xl group-hover:bg-white/20 transition-colors">
                      <Building2 className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-gray-400 text-base sm:text-lg">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                    <span>•</span>
                    <span>{exp.period}</span>
                    <span className="px-2 py-0.5 text-xs bg-white/10 rounded-full">
                      {exp.type}
                    </span>
                  </div>

                  <ul className="space-y-3 sm:space-y-4">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-300 text-sm sm:text-base"
                      >
                        <ArrowRight className="w-5 h-5 mt-0.5 text-gray-400 flex-shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>

      {/* Seeking internships notice */}
      <ScrollAnimation>
        <div className="mt-12 p-6 bg-white/5 rounded-xl border border-white/10 text-center">
          <h3 className="text-xl font-semibold mb-2">Open to Internships or Full time </h3>
          <p className="text-gray-400 max-w-xl mx-auto">
            I'm actively seeking software engineering opportunities. Feel free to reach out if you have an opening that
            matches my skill set.
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center gap-2 mt-4 px-6 py-2.5 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.02 }}
          >
            Get in Touch
          </motion.a>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Experience;
