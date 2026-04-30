"use client";

import React from "react";
import { useMotion, MotionMode } from "@/context/MotionContext";
import { motion, AnimatePresence } from "framer-motion";

const MotionSwitcher = () => {
  const { mode, setMode } = useMotion();

  const modes: { id: MotionMode; label: string }[] = [
    { id: "float", label: "1" },
    { id: "dynamic", label: "2" },
    { id: "experimental", label: "3" },
  ];

  return (
    <aside className="fixed left-8 top-1/2 -translate-y-1/2 z-[100] hidden lg:block">
      <div className="glass-card py-6 px-3 rounded-full flex flex-col gap-6 items-center shadow-lg border border-white/40">
        {modes.map((m) => (
          <button
            key={m.id}
            onClick={() => setMode(m.id)}
            className="relative w-10 h-10 flex items-center justify-center group"
          >
            {/* Active Highlight */}
            <AnimatePresence>
              {mode === m.id && (
                <motion.div
                  layoutId="active-mode"
                  className="absolute inset-0 bg-primary rounded-full shadow-lg"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                />
              )}
            </AnimatePresence>

            <span
              className={`relative z-10 font-bold text-sm transition-colors duration-300 ${
                mode === m.id
                  ? "text-white"
                  : "text-primary group-hover:text-primary/70"
              }`}
            >
              {m.label}
            </span>

            {/* Hover Indicator */}
            <motion.div
              className="absolute -right-16 bg-white/80 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-bold text-primary uppercase tracking-widest opacity-0 pointer-events-none group-hover:opacity-100 group-hover:-right-14 transition-all"
              initial={false}
            >
              {m.id}
            </motion.div>
          </button>
        ))}
      </div>
    </aside>
  );
};

export default MotionSwitcher;
