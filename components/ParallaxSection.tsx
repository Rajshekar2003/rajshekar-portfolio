"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxSection({
  children,
  speed = 40, // pixels shift
}: {
  children: React.ReactNode;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-speed, speed]);

  return (
    <div ref={ref} className="relative overflow-hidden">
      {/* Parallax Background Layer */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 -z-10"
      >
        <div className="w-full h-full bg-gradient-to-b from-white/[0.015] to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}