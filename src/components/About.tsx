"use client";

import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="py-24 px-8 lg:px-32" id="about">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute inset-0 bg-tertiary-fixed rounded-[2rem] rotate-3 scale-95 opacity-50 group-hover:rotate-0 transition-transform duration-700"></div>
          <div className="relative glass-card p-4 rounded-[2.5rem]">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHqieKP2g0De4hnnwQAJI9-vZSsCPz7aTtzm7orj81u52bO58iVgnPAS-90CeoSW3gXIj0pOO4pUwudPQfim8mMLgnuX6ncGIzE1FwYObP7Gc8abmHDVDHRAiTadKUAl3fpzl5NPRGfkzKow2661qIyzB_PcRmR_GnEUZ9lqJ2x6JYiWqxKUOwbjsW5RfkqvUbmJbONDnxnzAZHEmVCmxLIR2WPFwBz_O2JwY0H866ZjaIpy5ibWyHo5O7LKjFK1YD1wFU0VkF1AY"
              alt="About image"
              width={600}
              height={750}
              className="rounded-[2rem] w-full aspect-[4/5] object-cover"
            />
          </div>
        </div>
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-on-surface mb-8 font-manrope">
            Architect of Elegant Code
          </h2>
          <div className="space-y-6 text-lg text-on-surface/80 font-manrope">
            <p>
              I believe that technology should be an invisible enabler. My approach
              to development is rooted in the philosophy of "Calm
              Confidence"—where every interaction is intentional, every animation is
              purposeful, and every line of code serves the end-user's tranquility.
            </p>
            <p>
              With half a decade of experience in building bespoke digital solutions
              for wellness tech and luxury boutiques, I focus on creating
              interfaces that feel weightless and illuminated.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-6 glass-card rounded-2xl">
                <h4 className="text-primary font-bold text-3xl">3+</h4>
                <p className="text-xs uppercase tracking-widest text-on-surface/50 font-bold mt-1">
                  Years Exp.
                </p>
              </div>
              <div className="p-6 glass-card rounded-2xl">
                <h4 className="text-primary font-bold text-3xl">10+</h4>
                <p className="text-xs uppercase tracking-widest text-on-surface/50 font-bold mt-1">
                  Projects Delivered
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
