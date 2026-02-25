"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const experienceData = [
  {
    year: "2025",
    role: "Full Stack Developer",
    company: "Independent / Academic Projects",
    description:
      "Built scalable full-stack applications using Next.js, React, Flask and MySQL with strong backend structure and performance optimization.",
  },
  {
    year: "2024",
    role: "Machine Learning Developer",
    company: "Academic Research",
    description:
      "Developed ML-based medical detection system using Python and Flask. Optimized model performance and integrated backend APIs.",
  },
  {
    year: "2023",
    role: "Frontend Developer",
    company: "Project Based Work",
    description:
      "Built responsive UI systems using React and Tailwind CSS with clean component architecture.",
  },
];

export default function Experience() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 10%", "end 80%"],
  });

  const height = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });

  return (
    <div ref={ref} className="max-w-5xl mx-auto px-6 md:px-20">

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-6"
      >
        Professional Journey
      </motion.h2>

      {/* Professional Line Added */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-400 max-w-2xl mb-20 leading-relaxed"
      >
        Practical experience shaped by ownership, execution, and continuous improvement.
      </motion.p>

      <div className="relative">

        {/* Static Line */}
        <div className="absolute left-4 md:left-1/2 top-0 w-[2px] h-full bg-white/10 transform md:-translate-x-1/2" />

        {/* Animated Progress Line */}
        <motion.div
          style={{ scaleY: height }}
          className="absolute left-4 md:left-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-indigo-500 to-blue-500 origin-top transform md:-translate-x-1/2"
        />

        {experienceData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`relative mb-20 flex flex-col md:flex-row md:items-center ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}
          >
            {/* Dot */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-indigo-500 rounded-full transform md:-translate-x-1/2 shadow-lg shadow-indigo-500/40" />

            {/* Card */}
            <div
              className={`ml-12 md:ml-0 md:w-1/2 ${
                index % 2 === 0
                  ? "md:pr-16"
                  : "md:pl-16 md:text-right"
              }`}
            >
              <div className="bg-neutral-900/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:border-indigo-500/40 transition duration-300">

                <p className="text-sm text-indigo-400 mb-2">
                  {item.year}
                </p>

                <h3 className="text-xl font-semibold mb-2">
                  {item.role}
                </h3>

                <p className="text-gray-400 text-sm mb-3">
                  {item.company}
                </p>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>

              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}