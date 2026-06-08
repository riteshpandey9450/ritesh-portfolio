import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://ritesh-portfolio-dusky.vercel.app/";

const PAGE_META = {
  "/": {
    title: "Ritesh Pandey - Full Stack Developer | ICPC Regionalist | Competitive Programmer",
    description:
      "Ritesh Pandey — Full Stack Developer, ICPC 2025 Regionalist, LeetCode Knight, and CSE student at MMMUT Gorakhpur. Specializing in MERN stack, React.js, Node.js.",
  },
  "/about": {
    title: "About - Ritesh Pandey | Full Stack Developer & Competitive Programmer",
    description:
      "Learn about Ritesh Pandey — B.Tech CSE student at MMMUT, Full Stack Developer with ICPC Regionalist status, DSA Head, 1000+ problems solved.",
  },
  "/projects": {
    title: "Projects - Ritesh Pandey | Full Stack Portfolio",
    description:
      "Explore full-stack projects by Ritesh Pandey including SoulCare, Society HomeChef, and QuizCraft built with React.js, Node.js, MongoDB.",
  },
  "/skills": {
    title: "Skills - Ritesh Pandey | C++, React, Node.js, MERN Stack",
    description:
      "Technical skills of Ritesh Pandey — C++, JavaScript, React.js, Node.js, Express, MongoDB, SQL, Docker and more.",
  },
  "/education": {
    title: "Education - Ritesh Pandey | MMMUT Gorakhpur",
    description:
      "Educational background of Ritesh Pandey — B.Tech in Computer Science at MMMUT Gorakhpur with 8.50 CGPA.",
  },
  "/certificates": {
    title: "Achievements - Ritesh Pandey | ICPC, LeetCode Knight, Codeforces Specialist",
    description:
      "Competitive programming achievements of Ritesh Pandey — ICPC Regionalist, LeetCode Knight 1979+, Codeforces Specialist 1419+, CodeChef 3-Star.",
  },
  "/contact": {
    title: "Contact - Ritesh Pandey | Hire a Full Stack Developer",
    description:
      "Get in touch with Ritesh Pandey for internships, job opportunities or collaborations.",
  },
};

const FALLBACK_META = {
  title: "Ritesh Pandey - Full Stack Developer",
  description:
    "Portfolio of Ritesh Pandey — Full Stack Developer and Competitive Programmer at MMMUT Gorakhpur.",
};

export const useSEO = () => {
  const location = useLocation();

  useEffect(() => {
    const meta = PAGE_META[location.pathname] ?? FALLBACK_META;
    const url = `${BASE_URL}${location.pathname}`;

    document.title = meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", meta.description);
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", meta.title);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute("content", meta.description);
    document
      .querySelector('meta[property="og:url"]')
      ?.setAttribute("content", url);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", url);
  }, [location.pathname]);
};
