"use client";

import React from "react";
import Image from "next/image";

const BentoGrid = () => {
  return (
    <section className="mt-32 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
      {/* Bento Item 1 */}
      <div
        className="md:col-span-7 glass-card p-12 rounded-[4rem] serene-glow-secondary floating-artifact"
        style={{ animationDelay: "-1s" }}
      >
        <div className="flex justify-between items-start mb-8">
          <h3 className="text-3xl font-bold text-serene-blue">Selected Works</h3>
          <span className="material-symbols-outlined text-4xl text-serene-accent">
            star
          </span>
        </div>
        <div className="aspect-video w-full rounded-[2rem] overflow-hidden mb-8 relative">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjPGcRcDLKig86IaScJNYHDvKZuwjmHJ5fBqi0LkDgqYclmRsf-eoxtS1lGYHudXE-g44-VE0dbrbHpMRPFMuYTUa1wrVZ1cBRTiJBkXHXNUoDK7mhtgMMpqMwb_3HXxmjkzkjc9xbUX9CLpi31lfkIqiCgClKyNE4LYbKfwS9ej02BJ6EgBmznK1IefPm1mkBm7BDch2GI9_KQM67OsmIGi89ePctDFHdf5zC-klcktpB8ZqxiBqUvz8jY2cM9r8Gtm1CLvwL96M"
            alt="Minimalist tech interface design"
            fill
            className="object-cover"
          />
        </div>
        <p className="text-lg opacity-80 mb-6">
          Our work focuses on high-stakes environments where clarity and serenity
          are paramount. Each pixel is calculated to reduce cognitive load while
          maintaining high emotional resonance.
        </p>
        <div className="flex gap-3">
          <span className="px-4 py-1 rounded-full bg-serene-peach text-serene-blue text-xs font-bold uppercase">
            Executive UI
          </span>
          <span className="px-4 py-1 rounded-full bg-serene-peach text-serene-blue text-xs font-bold uppercase">
            Wellness Tech
          </span>
        </div>
      </div>

      {/* Bento Item 2 (Asymmetric shift) */}
      <div className="md:col-span-5 flex flex-col gap-8 md:mt-24">
        <div
          className="glass-card p-10 rounded-[3rem] serene-glow-primary floating-artifact"
          style={{ animationDelay: "-3s" }}
        >
          <span className="material-symbols-outlined text-serene-accent text-5xl mb-6">
            auto_awesome
          </span>
          <h3 className="text-2xl font-bold mb-4">Serene Philosophy</h3>
          <p className="opacity-70 leading-relaxed">
            Moving away from sterile SaaS design into warm, radiant cores that
            feel weightless and illuminated from within.
          </p>
        </div>

        <div
          className="bg-serene-blue text-serene-bg p-10 rounded-[3rem] shadow-[20px_20px_40px_rgba(93,104,138,0.3)] floating-artifact"
          style={{ animationDelay: "-4s" }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-serene-accent relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkqXOMqT0CzGZwzLpjE7ywXh4bixm0lPURiNyCFhwTzWsOjxUPS-qmjAJCE3Tp8_2mxahbqzS5Y8KtJbN6k6aWE8eyt1orx4Hd4Pa2yuVuYSUEEgLmLAs8zursSD0LS9ho06Dkfz_2xr3KzkZdfl-x0fRx3wYdoAW-TmtGb9JwEN4klXD4OtOQ-e7HtLWH4KFj6SwgIlKLolP8p916BxEJNxXZPMdTLUfF18FSWYGLfc3ect5te8L0grkVi_26ZNNtAJoZvJBdWos"
                alt="Creative Lead Portrait"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-bold">Creative Lead</p>
              <p className="text-xs opacity-60">PORTFOLIO '24 EDITION</p>
            </div>
          </div>
          <p className="text-lg italic font-light leading-relaxed">
            "The goal is not just to see the interface, but to feel the focus it
            provides."
          </p>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
