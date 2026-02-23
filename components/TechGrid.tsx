"use client";

import { motion } from "framer-motion";

export default function TechGrid() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.4 }}
      transition={{ duration: 2 }}
      className="absolute inset-0 -z-10 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(59,130,246,0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(59,130,246,0.08) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        maskImage:
          "radial-gradient(circle at center, black 40%, transparent 90%)",
      }}
    />
  );
}