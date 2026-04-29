"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Count from 0 → 99 over 1800ms
    const totalSteps = 99;
    const intervalMs = 1800 / totalSteps;
    const countInterval = setInterval(() => {
      setCount((prev) => {
        if (prev >= totalSteps) {
          clearInterval(countInterval);
          return totalSteps;
        }
        return prev + 1;
      });
    }, intervalMs);

    // Start fade at 1800ms
    const fadeTimer = setTimeout(() => setDone(true), 1800);

    // Unmount after fade completes (1800ms + 600ms)
    const unmountTimer = setTimeout(() => setHidden(true), 2400);

    return () => {
      clearInterval(countInterval);
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div className={`preloader${done ? " done" : ""}`}>
      <div className="preload-mark">
        <span>R</span>
        <span>C</span>
      </div>
      <div className="preload-bar" />
      <div className="preload-count">
        {String(count).padStart(2, "0")}
      </div>
    </div>
  );
}
