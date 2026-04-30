"use client";

import React from "react";

const SideNav = () => {
  return (
    <aside className="fixed left-6 top-1/2 -translate-y-1/2 h-[400px] w-20 flex flex-col items-center justify-around py-8 z-40 bg-serene-bg/80 backdrop-blur-2xl rounded-full border border-white/40 shadow-[30px_0_60px_-15px_rgba(247,165,165,0.1)] floating-artifact">
      <div className="flex flex-col items-center gap-6">
        <div className="p-3 bg-serene-accent text-white rounded-full shadow-[0_0_20px_rgba(247,165,165,0.4)]">
          <span className="material-symbols-outlined">grid_view</span>
        </div>
        <div className="p-3 text-serene-blue opacity-70 hover:opacity-100 hover:translate-x-1 transition-all cursor-pointer">
          <span className="material-symbols-outlined">inventory_2</span>
        </div>
        <div className="p-3 text-serene-blue opacity-70 hover:opacity-100 hover:translate-x-1 transition-all cursor-pointer">
          <span className="material-symbols-outlined">science</span>
        </div>
        <div className="p-3 text-serene-blue opacity-70 hover:opacity-100 hover:translate-x-1 transition-all cursor-pointer">
          <span className="material-symbols-outlined">mail</span>
        </div>
      </div>
    </aside>
  );
};

export default SideNav;
