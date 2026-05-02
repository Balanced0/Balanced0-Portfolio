"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);
import { useMotion } from "@/context/MotionContext";
import { FADE_UP, STAGGER_CHILDREN, CARD_HOVER } from "@/animations/MotionPresets";

const Projects = () => {
  const { mode } = useMotion();
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for right, -1 for left
  const [projectsPerPage, setProjectsPerPage] = useState(2);

  const projects = [
    {
      title: "Keen Keeper",
      tag1: "Productivity",
      tag2: "React",
      desc: "A productivity and task management app designed to help users stay organized and focused.",
      img: "/images/keen-keeper.png",
      github: "https://github.com/Balanced0/Keen-Keeper",
      live: "https://keen-keeper-orpin.vercel.app/",
    },
    {
      title: "DigiTools",
      tag1: "Utilities",
      tag2: "React",
      desc: "A collection of useful digital tools built for productivity and everyday convenience.",
      img: "/images/digitools.png",
      github: "https://github.com/Balanced0/DigiTools",
      live: "https://digi-tools-orcin.vercel.app/",
    },
    {
      title: "GitHub Issue Tracker",
      tag1: "GitHub API",
      tag2: "JavaScript",
      desc: "A GitHub issue tracking application for managing and monitoring repository issues efficiently.",
      img: "/images/github-issue-tracker.png",
      github: "https://github.com/Balanced0/Github-Issue-Tracker",
      live: "https://balanced0.github.io/Github-Issue-Tracker/",
    },
    {
      title: "English Janala",
      tag1: "Education",
      tag2: "JavaScript",
      desc: "An interactive English learning platform focused on vocabulary and language practice.",
      img: "/images/english-janala.png",
      github: "https://github.com/Balanced0/English-Janala",
      live: "https://balanced0.github.io/English-Janala/",
    },
    {
      title: "Job Tracker",
      tag1: "Career",
      tag2: "Firebase",
      desc: "A job application tracking app that helps users organize applications and opportunities.",
      img: "/images/Job-Tracker.png",
      github: "https://github.com/Balanced0/Job-Tracker",
      live: "https://balanced0.github.io/Job-Tracker/",
    },
    {
      title: "Payoo",
      tag1: "Finance",
      tag2: "JavaScript",
      desc: "A digital payment simulation app featuring balance management and transaction interactions.",
      img: "/images/Payoo.png",
      github: "https://github.com/Balanced0/Payoo",
      live: "https://balanced0.github.io/Payoo/",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setProjectsPerPage(window.innerWidth < 768 ? 1 : 2);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handleNext = () => {
    setDirection(1);
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const displayedProjects = projects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -200 : 200,
      opacity: 0,
    }),
  };

  return (
    <section className="py-24 px-8 lg:px-32 overflow-hidden" id="projects">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={STAGGER_CHILDREN[mode]}
      >
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-8 text-center md:text-left">
          <motion.div variants={FADE_UP[mode]}>
            <span className="text-primary font-bold text-xs tracking-widest uppercase font-manrope">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-on-surface mt-2 font-manrope">
              Selected Works
            </h2>
          </motion.div>
          <motion.div className="flex gap-4" variants={FADE_UP[mode]}>
            <button
              onClick={handlePrev}
              className="p-4 rounded-full glass-card hover:bg-primary hover:text-white transition-all group active:scale-95"
            >
              <span className="material-symbols-outlined transition-colors">
                west
              </span>
            </button>
            <button
              onClick={handleNext}
              className="p-4 rounded-full glass-card hover:bg-primary hover:text-white transition-all group active:scale-95"
            >
              <span className="material-symbols-outlined transition-colors">
                east
              </span>
            </button>
          </motion.div>
        </div>

        <div className="relative min-h-[600px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentPage}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="grid md:grid-cols-2 gap-12 w-full"
            >
              {displayedProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="group"
                  variants={FADE_UP[mode]}
                  whileHover={CARD_HOVER[mode].hover as any}
                >
                  <div className="relative overflow-hidden rounded-[2.5rem] mb-6 glass-card p-3">
                    <Image
                      src={project.img}
                      alt={project.title}
                      width={800}
                      height={450}
                      className="rounded-[2rem] w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="px-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-brand-warm text-on-surface text-xs font-bold rounded-full font-manrope uppercase tracking-widest">
                        {project.tag1}
                      </span>
                      <span className="px-3 py-1 bg-brand-warm text-on-surface text-xs font-bold rounded-full font-manrope uppercase tracking-widest">
                        {project.tag2}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-on-surface mb-2 font-manrope">
                      {project.title}
                    </h3>
                    <p className="text-on-surface/60 line-clamp-2 font-manrope leading-relaxed mb-6">
                      {project.desc}
                    </p>

                    <div className="flex gap-4">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-bold text-sm transition-all hover:bg-primary-container hover:text-on-primary-container font-manrope"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 rounded-full glass-card text-on-surface font-bold text-sm transition-all hover:bg-surface-variant font-manrope"
                      >
                        <GithubIcon size={16} />
                        GitHub
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;


