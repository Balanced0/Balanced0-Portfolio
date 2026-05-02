"use client";

import React from "react";

const Journey = () => {
  return (
    <section
      className="py-24 px-8 lg:px-32 bg-surface-container-low/50"
      id="experience"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-4xl md:text-5xl font-bold text-on-surface lg:sticky lg:top-32 font-manrope">
              Professional Journey
            </h2>
            <p className="text-on-surface/60 mt-4 pr-8 font-manrope">
              A timeline of intellectual growth and professional milestones across
              the tech landscape.
            </p>
          </div>
          <div className="md:col-span-8 space-y-12 relative before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-2 before:w-px before:bg-primary/20">
            <div className="relative pl-12">
              <div className="absolute left-[-6px] top-1 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(103,80,164,0.5)]"></div>
              <span className="text-xs font-bold text-primary uppercase tracking-widest font-manrope">
                2026
              </span>
              <h3 className="text-2xl font-bold text-on-surface mt-2 font-manrope">
                Modern Development Phase
              </h3>
              <p className="text-on-surface/70 bg-white/40 p-6 rounded-2xl border border-white/40 font-manrope leading-relaxed mt-4">
                Progression into modern development practices with JavaScript and ecosystem tooling, shifting focus toward building production-oriented applications. Emphasis placed on scalable design thinking, code organization, and real-world project development. Continued strengthening of Java fundamentals alongside deeper exploration of full-stack architecture patterns and system-level reasoning.
              </p>
            </div>
            
            <div className="relative pl-12">
              <div className="absolute left-[-6px] top-1 w-3 h-3 rounded-full bg-tertiary/60"></div>
              <span className="text-xs font-bold text-on-surface/40 uppercase tracking-widest font-manrope">
                2025
              </span>
              <h3 className="text-2xl font-bold text-on-surface mt-2 font-manrope">
                Web Development Transition
              </h3>
              <p className="text-on-surface/70 font-manrope leading-relaxed mt-4">
                Transition into web development focused on mastering HTML and CSS with an emphasis on semantic structure, layout systems, and responsive design principles. Practical implementation through static web projects strengthened understanding of UI composition, accessibility fundamentals, and frontend architecture basics.
              </p>
            </div>

            <div className="relative pl-12">
              <div className="absolute left-[-6px] top-1 w-3 h-3 rounded-full bg-primary/40"></div>
              <span className="text-xs font-bold text-on-surface/40 uppercase tracking-widest font-manrope">
                2024
              </span>
              <h3 className="text-2xl font-bold text-on-surface mt-2 font-manrope">
                Programming Foundations
              </h3>
              <p className="text-on-surface/70 font-manrope leading-relaxed mt-4">
                Initial programming foundation established through Python, C, and C++ with strong emphasis on algorithmic thinking and core computer science fundamentals. Java played a significant role during this phase, reinforcing object-oriented programming and structured problem-solving. Early projects included small-scale games, utility applications, and logic-driven implementations, along with the development of a simple chatbot that introduced basic applied system design concepts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
