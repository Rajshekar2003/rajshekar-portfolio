"use client";

import { motion } from "framer-motion";

type Direction = "up" | "down" | "left" | "right";

export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  distance = 50,
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: Direction;
  distance?: number;
}) {
  const getInitial = () => {
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
        ...getInitial(),
        scale: 0.97,
        filter: "blur(6px)",
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}