import { Variants, Easing } from "framer-motion";

export const FADE_UP: Record<string, Variants> = {
  float: {
    initial: { opacity: 0, y: 40 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as Easing },
    },
  },
  dynamic: {
    initial: { opacity: 0, y: 60, scale: 0.95 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.6, 0.01, -0.05, 0.95] as Easing },
    },
  },
  experimental: {
    initial: { opacity: 0, y: 100, skewY: 10 },
    animate: {
      opacity: 1,
      y: 0,
      skewY: 0,
      transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] as Easing },
    },
  },
};

export const STAGGER_CHILDREN: Record<string, Variants> = {
  float: {
    animate: { transition: { staggerChildren: 0.1 } },
  },
  dynamic: {
    animate: { transition: { staggerChildren: 0.05 } },
  },
  experimental: {
    animate: { transition: { staggerChildren: 0.2 } },
  },
};

export const CARD_HOVER: Record<string, Variants> = {
  float: {
    hover: {
      y: -10,
      transition: { duration: 0.6, ease: "easeOut" as Easing },
    },
  },
  dynamic: {
    hover: {
      scale: 1.05,
      rotateZ: 2,
      transition: { duration: 0.3, ease: "backOut" as Easing },
    },
  },
  experimental: {
    hover: {
      scale: 0.98,
      z: 50,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as Easing },
    },
  },
};

export const GSAP_CONFIGS = {
  float: {
    scrollSpeed: 1,
    lerp: 0.1,
    parallaxIntensity: 0.5,
  },
  dynamic: {
    scrollSpeed: 1.5,
    lerp: 0.2,
    parallaxIntensity: 1,
  },
  experimental: {
    scrollSpeed: 0.8,
    lerp: 0.05,
    parallaxIntensity: 1.5,
  },
};
