"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import Image from "next/image";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/40 bg-surface/60 backdrop-blur-md shadow-[0_20px_30px_rgba(79,55,138,0.05)]">
      <div className="flex justify-between items-center h-24 px-8 max-w-7xl mx-auto">
        <a href="#home" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={320}
            height={120}
            className="h-20 w-auto object-contain"
            priority
          />
        </a>
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
          <span
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="material-symbols-outlined text-on-surface cursor-pointer p-2 hover:bg-white/40 rounded-full transition-all"
          >
            {mounted && theme === "dark" ? "light_mode" : "dark_mode"}
          </span>
          <a
            href="#contact"
            className="bg-brand-accent text-white px-6 py-2.5 rounded-full font-bold shadow-[0_0_12px_rgba(247,165,165,0.4)] hover:opacity-90 active:scale-95 transition-all text-sm font-manrope inline-flex items-center"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
