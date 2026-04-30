"use client";

import React from "react";

const techItems = [
  { icon: "html", label: "HTML5", color: "bg-orange-100 text-orange-600" },
  { icon: "css", label: "CSS3", color: "bg-blue-100 text-blue-600" },
  { icon: "palette", label: "Tailwind", color: "bg-sky-100 text-sky-500" },
  {
    icon: "javascript",
    label: "JS (ES6+)",
    color: "bg-yellow-100 text-yellow-600",
  },
  { icon: "api", label: "React", color: "bg-cyan-100 text-cyan-600" },
  { icon: "terminal", label: "Node.js", color: "bg-slate-100 text-slate-800" },
];

const TechStack = () => {
  return (
    <section className="py-24 px-8 lg:px-32" id="skills">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-xs tracking-widest uppercase font-manrope">
            Toolbox
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-on-surface mt-2 font-manrope">
            Technical Proficiency
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {techItems.map((item, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-[2rem] flex flex-col items-center justify-center gap-4 group hover:serene-glow transition-all"
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-xl ${item.color} transition-transform group-hover:scale-110`}
              >
                <span className="material-symbols-outlined text-3xl">
                  {item.icon}
                </span>
              </div>
              <span className="font-manrope text-sm font-semibold text-on-surface">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
