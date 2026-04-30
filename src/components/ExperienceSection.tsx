"use client";

import React from "react";

const ExperienceSection = () => {
  return (
    <section className="mt-64 relative">
      <div className="absolute -top-32 right-0 w-96 h-96 liquid-blob bg-serene-peach/40 blur-3xl -z-10 floating-artifact"></div>
      <div className="flex flex-col md:flex-row items-end gap-12">
        <div className="md:w-1/3 glass-card p-8 rounded-[2rem] border-white/20 serene-glow-secondary transform -rotate-3">
          <h4 className="text-xl font-bold mb-4">The Methodology</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-serene-accent shadow-[0_0_12px_#F7A5A5]"></span>
              <span className="text-sm">12-column fluid grid</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-serene-accent shadow-[0_0_12px_#F7A5A5]"></span>
              <span className="text-sm">Round Eight Rhythm</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-serene-accent shadow-[0_0_12px_#F7A5A5]"></span>
              <span className="text-sm">Glassmorphic Depth</span>
            </li>
          </ul>
        </div>
        <div className="md:w-2/3 glass-card p-16 rounded-[4rem] border-white/40 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-50"></div>
          <div className="relative z-10">
            <h2 className="text-5xl font-bold text-serene-blue mb-8 leading-tight font-manrope">
              Elevating Digital <br />
              Experience to Art.
            </h2>
            <p className="text-xl opacity-80 mb-12 max-w-xl">
              We treat high-stakes UI with the same reverence as a boutique
              financial service or a wellness retreat. Every interaction is a
              moment of calm confidence.
            </p>
            <a
              className="inline-flex items-center gap-4 text-serene-accent font-bold text-lg group-hover:translate-x-2 transition-transform"
              href="#"
            >
              Start a Conversation
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
