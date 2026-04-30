"use client";

import React, { useEffect, useRef, ReactNode } from "react";
import { useMotion } from "@/context/MotionContext";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface MotionEngineProviderProps {
  children: ReactNode;
}

export const MotionEngineProvider = ({
  children,
}: MotionEngineProviderProps) => {
  const { mode } = useMotion();
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  // Initialize Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: mode === "float" ? 1.5 : mode === "dynamic" ? 1 : 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Sync ScrollTrigger with Lenis
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(raf);
    };
  }, [mode]);

  // Handle Mode Changes & Cleanup
  useEffect(() => {
    // Clear existing ScrollTriggers on mode change for a clean state
    const triggers = ScrollTrigger.getAll();
    triggers.forEach((trigger) => trigger.kill());

    // Refresh ScrollTrigger
    ScrollTrigger.refresh();

    // Cinematic fade-in transition for the whole page when switching modes
    gsap.fromTo(
      "body",
      { opacity: 0.8, filter: "blur(5px)" },
      { opacity: 1, filter: "blur(0px)", duration: 0.8, ease: "power2.inOut" }
    );
  }, [mode]);

  // Handle Page Navigation
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
    ScrollTrigger.refresh();
  }, [pathname]);

  return <>{children}</>;
};
