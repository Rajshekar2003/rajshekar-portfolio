"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function SectionBackground() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const ySlow = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const yMedium = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <div ref={ref} className="absolute inset-0 -z-10 overflow-hidden">

      {/* Large Soft Glow */}
      <motion.div
        style={{ y: ySlow }}
        className="absolute w-[600px] h-[600px] 
        bg-blue-500/10 rounded-full blur-[160px] 
        -top-40 -left-40"
      />

      {/* Secondary Glow */}
      <motion.div
        style={{ y: yMedium }}
        className="absolute w-[500px] h-[500px] 
        bg-indigo-500/10 rounded-full blur-[160px] 
        bottom-0 -right-40"
      />

    </div>
  );
}