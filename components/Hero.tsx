"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  const name = "Rajshekar RC";

  const roles = [
    "Full Stack Developer",
    "Frontend Engineer",
    "Backend Engineer",
    "React & Next.js Specialist",
    "Software Engineer",
  ];

  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden"
    >
      {/* Deep Dark Base */}
      <div className="absolute inset-0 -z-30 bg-gradient-to-br from-black via-neutral-950 to-black" />

      {/* Subtle Accent Glow (Very Soft) */}
      <div className="absolute w-[700px] h-[700px] bg-blue-600/10 blur-[160px] rounded-full -top-40 -right-40 -z-20" />
      <div className="absolute w-[600px] h-[600px] bg-indigo-600/10 blur-[160px] rounded-full bottom-0 -left-40 -z-20" />

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.08)]"
      >
        {name}
      </motion.h1>

      {/* Animated Role */}
      <motion.div
        key={currentRole}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 mt-6 text-xl md:text-2xl font-medium text-blue-400"
      >
        {roles[currentRole]}
      </motion.div>

      {/* Accent Line */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "120px" }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="h-[2px] bg-blue-500 mt-6 rounded-full"
      />

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="relative z-10 mt-6 text-gray-400 max-w-2xl text-lg leading-relaxed"
      >
        Computer Science Engineer building scalable full-stack systems
        with clean architecture, performance-driven design,
        and modern user experiences.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="relative z-10 mt-10 flex gap-6 flex-wrap justify-center"
      >
        <a href="#projects">
          <MagneticButton
            className="px-8 py-3 bg-blue-600 hover:bg-blue-500 
            text-white rounded-full font-medium 
            shadow-lg shadow-blue-500/30 transition duration-300"
          >
            View Projects
          </MagneticButton>
        </a>

        <a href="#contact">
          <MagneticButton
            className="px-8 py-3 border border-blue-500/40 rounded-full 
            font-medium text-blue-400 
            hover:bg-blue-600 hover:text-white 
            transition duration-300"
          >
            Contact Me
          </MagneticButton>
        </a>
      </motion.div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 flex flex-col items-center gap-3 z-10"
      >
        <span className="text-gray-500 text-sm tracking-wide">
          Scroll to explore
        </span>

        <div className="relative w-6 h-10 border border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{
              y: [2, 14, 2],
              opacity: [1, 0.3, 1],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1.5 h-1.5 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}