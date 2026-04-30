"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type MotionMode = "float" | "dynamic" | "experimental";

interface MotionContextType {
  mode: MotionMode;
  setMode: (mode: MotionMode) => void;
  isInitialRender: boolean;
}

const MotionContext = createContext<MotionContextType | undefined>(undefined);

export const MotionProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<MotionMode>("float");
  const [isInitialRender, setIsInitialRender] = useState(true);

  // Transition handling can be added here
  const handleSetMode = (newMode: MotionMode) => {
    if (newMode === mode) return;
    setIsInitialRender(false);
    setMode(newMode);
  };

  return (
    <MotionContext.Provider
      value={{ mode, setMode: handleSetMode, isInitialRender }}
    >
      {children}
    </MotionContext.Provider>
  );
};

export const useMotion = () => {
  const context = useContext(MotionContext);
  if (!context) {
    throw new Error("useMotion must be used within a MotionProvider");
  }
  return context;
};
