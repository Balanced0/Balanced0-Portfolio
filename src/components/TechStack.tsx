"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  SiHtml5, SiCss, SiJavascript, SiTailwindcss, SiReact, 
  SiNextdotjs, SiNodedotjs, SiFirebase, SiMongodb, SiPython, SiC, SiCplusplus 
} from "react-icons/si";
import { useMotion } from "@/context/MotionContext";
import { FADE_UP, STAGGER_CHILDREN } from "@/animations/MotionPresets";

const techItems = [
  { icon: SiHtml5, label: "HTML5", color: "#E34F26" },
  { icon: SiCss, label: "CSS3", color: "#1572B6" },
  { icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
  { icon: SiTailwindcss, label: "Tailwind CSS", color: "#06B6D4" },
  { icon: SiReact, label: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, label: "Next.js", color: "#000000" },
  { icon: SiNodedotjs, label: "Node.js", color: "#339933" },
  { icon: SiFirebase, label: "Firebase", color: "#FFCA28" },
  { icon: SiMongodb, label: "MongoDB", color: "#47A248" },
  { icon: SiPython, label: "Python", color: "#3776AB" },
  { icon: SiC, label: "C", color: "#A8B9CC" },
  { icon: SiCplusplus, label: "C++", color: "#00599C" },
];

const TechStack = () => {
  const { mode } = useMotion();

  return (
    <section className="py-24 px-8 lg:px-32 relative overflow-hidden" id="skills">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={STAGGER_CHILDREN[mode]}
        >
          <motion.span 
            variants={FADE_UP[mode]}
            className="text-primary font-bold text-xs tracking-widest uppercase font-manrope"
          >
            Toolbox
          </motion.span>
          <motion.h2 
            variants={FADE_UP[mode]}
            className="text-4xl md:text-5xl font-bold text-on-surface mt-2 font-manrope"
          >
            Technical Proficiency
          </motion.h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={STAGGER_CHILDREN[mode]}
        >
          {techItems.map((item, index) => (
            <motion.div
              key={index}
              variants={FADE_UP[mode]}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative glass-card p-8 rounded-[2.5rem] flex flex-col items-center justify-center gap-4 hover:serene-glow transition-all duration-500 overflow-hidden"
            >
              {/* Light Sweep Animation */}
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg]"></div>
              
              <div
                className="w-16 h-16 flex items-center justify-center rounded-2xl bg-surface-variant/30 group-hover:bg-surface-variant/50 transition-colors duration-500"
              >
                <item.icon 
                  size={32} 
                  style={{ color: item.color }} 
                  className="transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                />
              </div>
              
              <span className="font-manrope text-sm font-bold text-on-surface/80 group-hover:text-on-surface transition-colors duration-500">
                {item.label}
              </span>

              {/* Subtle Floating Motion */}
              <motion.div
                className="absolute -z-10 w-24 h-24 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{ backgroundColor: item.color }}
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0, 0.2, 0] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative background element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/5 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-accent/5 blur-[120px] rounded-full -z-10"></div>
    </section>
  );
};

export default TechStack;
