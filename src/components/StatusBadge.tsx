"use client";

import React from "react";

const StatusBadge = () => {
  return (
    <div className="fixed bottom-12 right-12 glass-card p-6 rounded-3xl border-serene-accent/40 flex items-center gap-6 shadow-[0_20px_40px_rgba(247,165,165,0.2)] z-50 floating-artifact">
      <div className="w-12 h-12 rounded-full bg-serene-accent flex items-center justify-center text-white">
        <span
          className="material-symbols-outlined"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          check
        </span>
      </div>
      <div>
        <p className="font-bold text-serene-blue">Available for Projects</p>
        <p className="text-xs opacity-60 uppercase tracking-widest">
          Q3-Q4 2024
        </p>
      </div>
    </div>
  );
};

export default StatusBadge;
