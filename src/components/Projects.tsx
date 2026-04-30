"use client";

import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <section className="py-24 px-8 lg:px-32" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-primary font-bold text-xs tracking-widest uppercase font-manrope">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-on-surface mt-2 font-manrope">
              Selected Works
            </h2>
          </div>
          <div className="flex gap-4">
            <button className="p-4 rounded-full glass-card hover:bg-primary hover:text-white transition-all group">
              <span className="material-symbols-outlined transition-colors">
                west
              </span>
            </button>
            <button className="p-4 rounded-full glass-card hover:bg-primary hover:text-white transition-all group">
              <span className="material-symbols-outlined transition-colors">
                east
              </span>
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Project 1 */}
          <div className="group">
            <div className="relative overflow-hidden rounded-[2.5rem] mb-6 glass-card p-3">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAw03CBZR5zaIWGunrr0Ge6iESwF0bZiD1Sfcn-U28Mh8IL762k0_B5zZm3OMCs4ZPFeeIdgSPM6SQufZWygqkmjAL-MSEEAA8KxjdDwk60LeDd1saXF9YpEOdhKpt7ks-Ox1cp6rjAeK0wKaGmJdAQ5aTqrMO7UT5jvVO6j33nhsGxW9rJg66ZJIN3Swtnj5JEZ2heP4LhfbFNKD2es2Z4G0P63FsHWS9PP24oHUC9jGhbwuVZ8-wuLzV8z8RGPIR247n0f01x1hk"
                alt="Project 1"
                width={800}
                height={450}
                className="rounded-[2rem] w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="px-4">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-tertiary-fixed text-on-surface text-xs font-bold rounded-full font-manrope uppercase tracking-widest">
                  SaaS
                </span>
                <span className="px-3 py-1 bg-tertiary-fixed text-on-surface text-xs font-bold rounded-full font-manrope uppercase tracking-widest">
                  Next.js
                </span>
              </div>
              <h3 className="text-2xl font-bold text-on-surface mb-2 font-manrope">
                Serenity Dashboard
              </h3>
              <p className="text-on-surface/60 line-clamp-2 font-manrope leading-relaxed">
                A comprehensive data visualization platform for mental wellness
                clinics, focusing on privacy and aesthetic clarity.
              </p>
            </div>
          </div>
          {/* Project 2 */}
          <div className="group">
            <div className="relative overflow-hidden rounded-[2.5rem] mb-6 glass-card p-3">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCG_nSvx9zRf6Vezy1K2FB5tJOwZcY3NbzePHbdnGuBPkXHY5U0O1Czbo8rSKlUQGlfa01YzPBHx_R7thl_kqlOLlv6uXHm-h4nMooDS4EJjH1jGBOUAl9sbGq1pJrzjhEIUaCZ4EDpIUKtWm40aAN2GjSGbgIhWH3CWAojCqVnB5Z35UTglhYeP2gA02_ge-Ws4VhnYy-5JbD2QpuSeFVhVUm_lvdpTx5Bnch65Svcy92zY-xGhGQGzRwmInk20QgAZsyfht0iVfA"
                alt="Project 2"
                width={800}
                height={450}
                className="rounded-[2rem] w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="px-4">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-tertiary-fixed text-on-surface text-xs font-bold rounded-full font-manrope uppercase tracking-widest">
                  E-Commerce
                </span>
                <span className="px-3 py-1 bg-tertiary-fixed text-on-surface text-xs font-bold rounded-full font-manrope uppercase tracking-widest">
                  Stripe
                </span>
              </div>
              <h3 className="text-2xl font-bold text-on-surface mb-2 font-manrope">
                Aura Boutique
              </h3>
              <p className="text-on-surface/60 line-clamp-2 font-manrope leading-relaxed">
                High-performance headless e-commerce store with seamless
                micro-interactions and instant page transitions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
