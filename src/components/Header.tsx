"use client";

import React, { useEffect, useState, useRef } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const isAutoScrolling = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);

    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -25% 0px",
      threshold: [0, 0.1, 0.2],
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (isAutoScrolling.current) return;

      const intersecting = entries.filter((e) => e.isIntersecting);
      if (intersecting.length > 0) {
        setActiveSection(intersecting[0].target.id);
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = ["home", "projects", "about", "contact"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavLinkClick = (id: string) => {
    isAutoScrolling.current = true;
    setActiveSection(id);
    
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      isAutoScrolling.current = false;
    }, 1000); // Timeout to allow smooth scroll to finish
  };

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "About", href: "#about", id: "about" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/40 bg-surface/60 backdrop-blur-md shadow-[0_20px_30px_rgba(79,55,138,0.05)]">
      <div className="flex justify-between items-center h-24 px-8 max-w-7xl mx-auto">
        <a 
          href="#home" 
          className="flex items-center"
          onClick={() => handleNavLinkClick("home")}
        >
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
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => handleNavLinkClick(link.id)}
              className={`${
                activeSection === link.id
                  ? "text-primary font-semibold border-b-2 border-primary"
                  : "text-on-surface hover:text-primary"
              } transition-all duration-300 py-1`}
            >
              {link.name}
            </a>
          ))}
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
