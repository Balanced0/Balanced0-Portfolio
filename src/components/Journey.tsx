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
          <div className="md:col-span-8 space-y-8">
            <div className="relative pl-12 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-primary/20">
              <div className="absolute left-[-6px] top-1 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(103,80,164,0.5)]"></div>
              <span className="text-xs font-bold text-primary uppercase tracking-widest font-manrope">
                2021 — Present
              </span>
              <h3 className="text-2xl font-bold text-on-surface mt-2 font-manrope">
                Senior Full Stack Developer
              </h3>
              <p className="text-on-surface/50 text-sm mb-4 font-manrope">
                Lumina Digital Solutions
              </p>
              <p className="text-on-surface/70 bg-white/40 p-6 rounded-2xl border border-white/40 font-manrope leading-relaxed">
                Leading the development of wellness-focused SaaS applications.
                Oversaw the migration from legacy monolith to distributed
                microservices architecture using Next.js and Node.js.
              </p>
            </div>
            <div className="relative pl-12 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-primary/20">
              <div className="absolute left-[-6px] top-1 w-3 h-3 rounded-full bg-tertiary"></div>
              <span className="text-xs font-bold text-on-surface/40 uppercase tracking-widest font-manrope">
                2019 — 2021
              </span>
              <h3 className="text-2xl font-bold text-on-surface mt-2 font-manrope">
                Frontend Engineer
              </h3>
              <p className="text-on-surface/50 text-sm mb-4 font-manrope">
                Aether Creative Agency
              </p>
              <p className="text-on-surface/70 font-manrope leading-relaxed">
                Developed award-winning marketing sites for luxury brands. Focused
                on interaction design, Framer Motion animations, and ultra-high SEO
                performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
