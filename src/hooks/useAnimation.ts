"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useMotion } from "@/context/MotionContext";

/**
 * Magnetic effect for buttons and icons
 */
export const useMagnetic = (intensity = 0.5) => {
  const ref = useRef<HTMLDivElement>(null);
  const { mode } = useMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || mode === "experimental") return; // Disable for experimental to use other effects

    const xTo = gsap.quickTo(el, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const yTo = gsap.quickTo(el, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = el.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      xTo(x * intensity);
      yTo(y * intensity);
    };

    const onMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mouseleave", onMouseLeave);

    return () => {
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [intensity, mode]);

  return ref;
};

/**
 * Parallax effect for images and backgrounds
 */
export const useParallax = (speed = 100) => {
  const ref = useRef<HTMLDivElement>(null);
  const { mode } = useMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        y: -speed,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: mode === "float" ? 1 : 0.5,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [speed, mode]);

  return ref;
};
