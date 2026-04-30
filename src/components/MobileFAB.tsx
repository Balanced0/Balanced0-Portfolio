"use client";

import React from "react";

const MobileFAB = () => {
  return (
    <button className="fixed bottom-8 right-8 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl z-50 hover:scale-110 active:scale-95 transition-all md:hidden">
      <span className="material-symbols-outlined text-3xl">chat_bubble</span>
    </button>
  );
};

export default MobileFAB;
