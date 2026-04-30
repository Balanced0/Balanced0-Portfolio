"use client";

import React from "react";

const Header = () => {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/40 bg-white/60 backdrop-blur-md shadow-[0_20px_30px_rgba(79,55,138,0.05)]">
      <div className="flex justify-between items-center h-16 px-8 max-w-7xl mx-auto">
        <div className="text-xl font-bold text-primary flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-sm">
            P
          </span>
          <span className="tracking-tight font-manrope">Portfolio</span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-manrope tracking-tight text-on-surface">
          <a
            className="text-primary font-semibold border-b-2 border-primary transition-colors duration-300"
            href="#home"
          >
            Home
          </a>
          <a
            className="text-on-surface hover:text-primary transition-colors duration-300"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="text-on-surface hover:text-primary transition-colors duration-300"
            href="#about"
          >
            About
          </a>
          <a
            className="text-on-surface hover:text-primary transition-colors duration-300"
            href="#contact"
          >
            Contact
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-on-surface cursor-pointer p-2 hover:bg-white/40 rounded-full transition-all">
            dark_mode
          </span>
          <button className="bg-primary text-white px-6 py-2.5 rounded-full font-bold shadow-[0_0_12px_rgba(103,80,164,0.4)] hover:opacity-90 active:scale-95 transition-all text-sm font-manrope">
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
