"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Reveal from "./Reveal";

const skills = [
  {
    title: "Frontend Engineering",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive UI",
      "Component Architecture",
    ],
  },
  {
    title: "Backend Engineering",
    items: [
      "Node.js",
      "Python",
      "Flask",
      "Express",
      "REST APIs",
      "Authentication & JWT",
      "API Security",
    ],
  },
  {
    title: "Database & Infrastructure",
    items: [
      "MySQL",
      "MongoDB",
      "Data Modeling",
      "Query Optimization",
      "Deployment (Vercel)",
      "Linux",
    ],
  },
  {
    title: "Computer Science Core",
    items: [
      "Data Structures",
      "Algorithms",
      "OOP",
      "System Design",
      "Clean Code",
      "Problem Solving",
    ],
  },
];

export default function Skills() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  return (
    <section id="skills" className="relative px-6 md:px-20 py-32">
      <div className="max-w-6xl mx-auto">

        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Technical Expertise
          </h2>

          {/* Professional Line Added */}
          <p className="text-gray-400 max-w-2xl mb-24 leading-relaxed">
            Core technologies and engineering principles applied to build scalable, maintainable, and performance-driven systems.
          </p>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12 },
            },
          }}
          className="grid md:grid-cols-2 gap-x-12 gap-y-12"
        >
          {skills.map((category, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 60, scale: 0.96 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setMouse({
                  x: e.clientX - rect.left,
                  y: e.clientY - rect.top,
                });
              }}
              className="relative group rounded-2xl p-8 border border-white/10 
                         bg-neutral-900/40 backdrop-blur-xl overflow-hidden 
                         transition duration-500 hover:border-white/30"
            >
              {/* Subtle Radial Hover Glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(500px circle at ${mouse.x}px ${mouse.y}px, rgba(255,255,255,0.06), transparent 40%)`,
                }}
              />

              {/* Title */}
              <h3 className="relative z-10 text-2xl font-semibold mb-10 tracking-tight">
                {category.title}
              </h3>

              {/* Divider */}
              <div className="relative z-10 h-[1px] bg-white/10 mb-10 group-hover:bg-white/30 transition duration-300" />

              {/* Skill Pills */}
              <div className="relative z-10 flex flex-wrap gap-4">
                {category.items.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.06, y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="px-4 py-2 text-sm rounded-full 
                               border border-white/20 
                               text-gray-300 
                               bg-black/40
                               hover:border-white/50 
                               hover:text-white
                               transition duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}