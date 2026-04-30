"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useMotion } from "@/context/MotionContext";
import { FADE_UP, STAGGER_CHILDREN } from "@/animations/MotionPresets";
import { useParallax } from "@/hooks/useAnimation";

const Hero = () => {
  const { mode } = useMotion();
  const parallaxRef = useParallax(mode === "experimental" ? 150 : 80);

  return (
    <section
      className="min-h-[90vh] flex items-center px-8 lg:px-32 relative overflow-hidden"
      id="home"
    >
      <motion.div
        className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center"
        initial="initial"
        animate="animate"
        variants={STAGGER_CHILDREN[mode]}
        key={mode} // Re-animate on mode change
      >
        <div className="z-10 order-2 lg:order-1">
          <motion.span
            variants={FADE_UP[mode]}
            className="text-primary font-bold text-xs tracking-widest mb-4 block uppercase font-manrope"
          >
            Available for New Projects
          </motion.span>
          <motion.h1
            variants={FADE_UP[mode]}
            className="text-5xl md:text-7xl font-bold text-on-surface mb-6 leading-tight font-manrope"
          >
            Building{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">
              Digital Ecosystems
            </span>{" "}
            with Calm Precision.
          </motion.h1>
          <motion.p
            variants={FADE_UP[mode]}
            className="text-lg text-on-surface/70 mb-10 max-w-2xl leading-relaxed font-manrope"
          >
            Full-stack developer specialized in high-end, performant interfaces
            that bridge the gap between complex engineering and human-centered
            design.
          </motion.p>
          <motion.div variants={FADE_UP[mode]} className="flex flex-wrap gap-4">
            <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold shadow-[0_10px_20px_rgba(103,80,164,0.3)] hover:scale-105 active:scale-95 transition-all font-manrope">
              Explore Work
            </button>
            <button className="glass-card text-on-surface px-8 py-4 rounded-xl font-bold border border-primary/10 hover:bg-white/80 transition-all active:scale-95 font-manrope">
              Let's Talk
            </button>
          </motion.div>
        </div>

        <motion.div
          className="order-1 lg:order-2 flex justify-center"
          variants={FADE_UP[mode]}
        >
          <div
            ref={parallaxRef}
            className="relative w-full max-w-md aspect-[4/5] rounded-[3rem] overflow-hidden glass-card p-3 shadow-2xl"
          >
            <Image
              src="https://lh3.googleusercontent.com/aida/ADBb0ui9RXqBV82uiQWPON54dGSN407q6UiUKsmvVguSj_2SLLutSgepVKX1RvdI7KsprzmMowgHZCihUJjOt6etyRbqsfj_Vy71dFcPJp552V0Xue-xAKuZSX_MVJ7uTwv2l6wx2eJhnIepaCAru24YAwom-1kXzvH3vnvBx4Y0S2y9Ls89wEvqZrtFABLRIGMK-WloermuwYDdU5afD3fQNZH0Eg20IwbnYQJV0Cd9C7LBvL8cyf9kqdrRwxThGMYtcWWQ4-jRH1eucg"
              alt="Professional portrait"
              fill
              className="object-cover rounded-[2.5rem]"
              priority
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Mode-Specific Background Orbs */}
      <div
        className={`absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] blur-[120px] rounded-full -z-10 transition-colors duration-1000 ${
          mode === "float"
            ? "bg-tertiary/20"
            : mode === "dynamic"
            ? "bg-primary/30"
            : "bg-brand-accent/40 animate-pulse"
        }`}
      ></div>
      <div
        className={`absolute bottom-0 left-1/4 w-[300px] h-[300px] blur-[100px] rounded-full -z-10 transition-colors duration-1000 ${
          mode === "float"
            ? "bg-primary/10"
            : mode === "dynamic"
            ? "bg-tertiary/20"
            : "bg-brand-warm/30"
        }`}
      ></div>
    </section>
  );
};

export default Hero;
