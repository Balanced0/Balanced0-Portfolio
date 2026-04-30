"use client";

import React from "react";

const SideNav = () => {
  return (
    <aside className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <div className="glass-card py-6 px-3 rounded-full flex flex-col gap-6 items-center shadow-lg border border-white/40">
        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-sm cursor-pointer">
          1
        </div>
        <div className="w-8 h-8 rounded-full bg-white/40 text-primary flex items-center justify-center font-bold text-sm hover:bg-primary/10 transition-colors cursor-pointer">
          2
        </div>
        <div className="w-8 h-8 rounded-full bg-white/40 text-primary flex items-center justify-center font-bold text-sm hover:bg-primary/10 transition-colors cursor-pointer">
          3
        </div>
      </div>
    </aside>
  );
};

export default SideNav;
