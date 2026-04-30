"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/40 bg-surface-container/50 backdrop-blur-sm mt-16">
      <div className="flex flex-col md:flex-row justify-between items-center py-12 px-8 max-w-7xl mx-auto">
        <p className="font-manrope text-xs uppercase tracking-widest text-on-surface/50 mb-8 md:mb-0">
          © 2024 PORTFOLIO DESIGN. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-12">
          <a
            className="font-manrope text-xs uppercase tracking-widest text-on-surface/50 hover:text-primary transition-colors"
            href="#"
          >
            LinkedIn
          </a>
          <a
            className="font-manrope text-xs uppercase tracking-widest text-on-surface/50 hover:text-primary transition-colors"
            href="#"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
