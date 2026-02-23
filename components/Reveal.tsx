"use client";

import { motion } from "framer-motion";

type Direction = "up" | "down" | "left" | "right";

export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  distance = 60,
  duration = 1,
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: Direction;
  distance?: number;
  duration?: number;
}) {
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: distance };
      case "down":
        return { y: -distance };
      case "left":
        return { x: distance };
      case "right":
        return { x: -distance };
      default:
        return { y: distance };
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...getInitialPosition(),
        scale: 0.94,          // 👈 Subtle depth start
        filter: "blur(14px)", // 👈 Cinematic entry
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,             // 👈 Natural depth finish
        filter: "blur(0px)",
      }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Premium easing curve
      }}
      style={{
        willChange: "transform, opacity, filter",
      }}
    >
      {children}
    </motion.div>
  );
}