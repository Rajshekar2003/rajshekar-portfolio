"use client";


import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,      // lower = faster response
      lerp: 0.1,          // responsiveness
      wheelMultiplier: 1,
      touchMultiplier: 1,
    });

    let animationFrame: number;
    const raf = (time: number) => {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    };
    animationFrame = requestAnimationFrame(raf);

    // Patch: force update scroll on route changes or hash changes
    const onScroll = () => {
      lenis.raf(performance.now());
    };
    window.addEventListener('scroll', onScroll);
    window.addEventListener('hashchange', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('hashchange', onScroll);
      cancelAnimationFrame(animationFrame);
      lenis.destroy();
    };
  }, []);
  return null;
}