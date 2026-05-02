"use client";

import React from "react";

const Contact = () => {
  return (
    <section className="py-24 px-4 md:px-8 lg:px-32" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 lg:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 relative z-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-on-surface mb-6 font-manrope leading-tight">
                Let's create something{" "}
                <span className="text-primary">extraordinary.</span>
              </h2>
              <p className="text-base md:text-lg text-on-surface/70 mb-10 font-manrope leading-relaxed">
                I'm currently open to selective consulting engagements and
                full-time leadership roles. If you have a vision that requires
                precision and a serene touch, let's talk.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-full bg-white/60 flex items-center justify-center text-primary shadow-sm">
                    <span className="material-symbols-outlined text-xl md:text-2xl">mail</span>
                  </div>
                  <span className="font-semibold font-manrope text-sm md:text-base break-all">
                    alvichowdhury013@gmail.com
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-full bg-white/60 flex items-center justify-center text-primary shadow-sm">
                    <span className="material-symbols-outlined text-xl md:text-2xl">location_on</span>
                  </div>
                  <span className="font-semibold font-manrope text-sm md:text-base">
                    Remote / Worldwide
                  </span>
                </div>
              </div>
            </div>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] md:text-xs font-bold text-on-surface/50 uppercase tracking-widest ml-1 font-manrope">
                    Full Name
                  </label>
                  <input
                    className="w-full bg-white/40 border-white/40 rounded-2xl py-3 md:py-4 px-6 focus:ring-primary focus:border-primary transition-all placeholder:text-on-surface/30 outline-none font-manrope text-sm md:text-base"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] md:text-xs font-bold text-on-surface/50 uppercase tracking-widest ml-1 font-manrope">
                    Email
                  </label>
                  <input
                    className="w-full bg-white/40 border-white/40 rounded-2xl py-3 md:py-4 px-6 focus:ring-primary focus:border-primary transition-all placeholder:text-on-surface/30 outline-none font-manrope text-sm md:text-base"
                    placeholder="john@example.com"
                    type="email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface/50 uppercase tracking-widest ml-1 font-manrope">
                  Message
                </label>
                <textarea
                  className="w-full bg-white/40 border-white/40 rounded-2xl py-4 px-6 focus:ring-primary focus:border-primary transition-all placeholder:text-on-surface/30 outline-none font-manrope"
                  placeholder="How can I help you?"
                  rows={4}
                ></textarea>
              </div>
              <button
                className="w-full py-5 bg-on-surface text-white rounded-2xl font-bold shadow-xl hover:bg-primary hover:shadow-primary/20 transition-all font-manrope uppercase tracking-widest text-sm"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
