"use client";

import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/40 bg-white/60 backdrop-blur-xl shadow-[0_20px_30px_-10px_rgba(93,104,138,0.1)] flex justify-between items-center px-8 py-4">
      <div className="text-2xl font-black tracking-tighter text-serene-blue dark:text-white font-manrope">
        SereneYOLO
      </div>
      <nav className="hidden md:flex gap-8 items-center">
        <a
          className="text-serene-accent border-b-2 border-serene-accent pb-1 font-manrope tracking-tight font-semibold"
          href="#"
        >
          Work
        </a>
        <a
          className="text-serene-blue hover:text-serene-accent transition-colors font-manrope tracking-tight font-semibold"
          href="#"
        >
          Process
        </a>
        <a
          className="text-serene-blue hover:text-serene-accent transition-colors font-manrope tracking-tight font-semibold"
          href="#"
        >
          About
        </a>
        <a
          className="text-serene-blue hover:text-serene-accent transition-colors font-manrope tracking-tight font-semibold"
          href="#"
        >
          Connect
        </a>
      </nav>
      <button className="bg-serene-accent text-white px-6 py-2 rounded-full font-bold shadow-[0_12px_20px_rgba(247,165,165,0.4)] active:scale-95 transition-all duration-200">
        Let's Talk
      </button>
    </header>
  );
};

export default Header;
