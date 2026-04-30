"use client";

import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-16 min-h-[614px] pt-32 pb-16">
      <div className="max-w-2xl relative z-10">
        <span className="inline-block py-2 px-4 rounded-full bg-serene-peach text-serene-blue font-bold text-[12px] tracking-widest mb-6 uppercase">
          Portfolio '24
        </span>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-serene-blue leading-tight mb-8 font-manrope">
          Fluid <span className="text-serene-accent">Expressions</span> in Design
        </h1>
        <p className="text-xl text-serene-blue/80 max-w-lg mb-12 leading-relaxed">
          A radical exploration of suspended aesthetics. We challenge linear grids
          by creating interfaces that breathe, float, and respond with organic
          intelligence.
        </p>
        <div className="flex gap-6">
          <button className="bg-serene-accent text-white px-8 py-4 rounded-full text-lg font-bold serene-glow-primary hover:scale-105 transition-transform">
            View Archive
          </button>
          <button className="glass-card border-serene-blue px-8 py-4 rounded-full text-lg font-bold hover:bg-serene-blue/5 transition-all">
            The Process
          </button>
        </div>
      </div>

      {/* Suspended Hero Image */}
      <div
        className="relative w-full md:w-[500px] h-[500px] liquid-blob overflow-hidden serene-glow-secondary floating-artifact"
        style={{ animationDelay: "-2s" }}
      >
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlx5cnX1gyhkYZsiV-A0tWksDEalboHpFt4KO-hGQ4_KFXlRrQIrvYVtUOa8yrv9f1tO1ehufczNK0GBAuzMYLho3zu_LVWfXOyku3XWvefXm5OdUxqZ4yqgmEyCExXTibS7mgiAOVEPZldpOLU80tllqro7LMNAjgZzTPy7lOeT97sEsWLZW1wOdEKHrxR3P_rGEKSQdpY1AWGHLB3NGUR7z6FkUhuXew7jxFMQcPL-nM7IpSz4Tqhp00qo88NbW8pCTnsfdGVEs"
          alt="Futuristic digital artwork featuring soft, glowing liquid shapes"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
