"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const educationData = [
  {
    year: "2021 — 2025",
    title: "B.E. in Computer Science Engineering",
    institution: "P.E.S. Institute of Technology and Management, Shimoga",
    description:
      "Focused on full-stack development, data structures, algorithms, system design and scalable application architecture.",
  },
  {
    year: "2019 — 2021",
    title: "Pre-University (PCMC - Science)",
    institution: "PSSEMR School & PU College, Davanagere",
    description:
      "Studied Physics, Chemistry, Mathematics and Computer Science with strong analytical foundation.",
  },
  {
    year: "2019",
    title: "SSLC (10th Grade)",
    institution:
      "Smt Pushpa Shamanur Mahalingappa CBSE Residential School, Davanagere",
    description:
      "Built academic fundamentals with strong discipline and structured learning approach.",
  },
];

export default function Education() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-28 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
        >
          Education
        </motion.h2>

        {/* Subtle Academic Focus Line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 text-sm mb-20 max-w-2xl"
        >
          Focused on data structures, scalable system design, and practical real-world implementation.
        </motion.p>

        {/* Timeline */}
        <div ref={ref} className="relative">

          {/* Base Line */}
          <div className="absolute left-5 top-0 w-[2px] h-full bg-white/10" />

          {/* Animated Line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-5 top-0 w-[2px] bg-gradient-to-b from-blue-500 to-indigo-500"
          />

          <div className="space-y-20">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative pl-20"
              >
                {/* Glow Pulse */}
                <motion.div
                  animate={{
                    scale: [1, 1.6, 1],
                    opacity: [0.4, 0.15, 0.4],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-5 top-2 -translate-x-1/2
                  w-4 h-4 rounded-full bg-blue-500 blur-md"
                />

                {/* Main Dot */}
                <div
                  className="absolute left-5 top-2 -translate-x-1/2
                  w-4 h-4 rounded-full
                  bg-gradient-to-r from-blue-500 to-indigo-500
                  border-2 border-black"
                />

                {/* Content */}
                <p className="text-sm text-blue-400 mb-2 tracking-wide">
                  {item.year}
                </p>

                <h3 className="text-xl font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm mb-3">
                  {item.institution}
                </p>

                <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}