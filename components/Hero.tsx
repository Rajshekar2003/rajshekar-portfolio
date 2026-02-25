"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from "framer-motion";
import { useEffect, useState } from "react";
import MagneticButton from "./MagneticButton";
import { Github, Linkedin, Download, Mail } from "lucide-react";

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

  /* ---------------- Role Switch ---------------- */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  /* ---------------- Scroll Exit Animation ---------------- */
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 400], [1, 0.95]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  /* ---------------- Mouse Depth ---------------- */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  const rotateX = useTransform(smoothY, [-20, 20], [4, -4]);
  const rotateY = useTransform(smoothX, [-20, 20], [-4, 4]);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set((e.clientX - innerWidth / 2) / 60);
      mouseY.set((e.clientY - innerHeight / 2) / 60);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <motion.section
      id="home"
      style={{ scale, opacity }}
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-40 bg-gradient-to-br from-black via-neutral-950 to-black" />

      {/* Ambient Glow */}
      <motion.div
        style={{ x: smoothX, y: smoothY }}
        animate={{ opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[900px] h-[900px] bg-blue-600/5 blur-[200px] rounded-full -z-30 pointer-events-none"
      />

      {/* Content */}
      <motion.div
        style={{ rotateX, rotateY }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* Name */}
        <motion.h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white flex flex-wrap justify-center">
          {name.split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.04,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.h1>

        {/* Role */}
        <motion.div
          key={currentRole}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6 text-xl md:text-2xl font-medium text-blue-400"
        >
          {roles[currentRole]}
        </motion.div>

        {/* Accent Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "140px" }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-[2px] bg-blue-500 mt-6 rounded-full"
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-gray-400 max-w-2xl text-lg leading-relaxed"
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
          className="mt-12 flex gap-6 flex-wrap justify-center"
        >
          <a href="#contact">
            <MagneticButton className="px-8 py-3 border border-blue-500/40 rounded-full font-medium text-blue-400 hover:bg-blue-600 hover:text-white transition">
              Contact Me
            </MagneticButton>
          </a>

          <a href="/Rajshekar_RC_Resume.pdf" download>
            <MagneticButton className="flex items-center gap-2 px-8 py-3 border border-blue-500/40 rounded-full font-medium text-blue-400 hover:bg-blue-600 hover:text-white transition">
              <Download size={18} />
              Resume
            </MagneticButton>
          </a>

          <a href="#projects">
            <MagneticButton className="px-8 py-3 border border-blue-500/40 rounded-full font-medium text-blue-400 hover:bg-blue-600 hover:text-white transition">
              View Work
            </MagneticButton>
          </a>
        </motion.div>

        {/* Social Links */}
        <div className="mt-8 flex gap-6">
          <a
            href="https://github.com/Rajshekar2003"
            target="_blank"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition"
          >
            <Github size={18} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/rajshekarrc"
            target="_blank"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>

          {/* NEW EMAIL */}
          <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=rajshekar.r.c2003@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 text-gray-400 hover:text-white transition"
>
  <Mail size={18} />
  Email
</a>
        </div>
      </motion.div>

      {/* Scroll Mouse */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-12 flex flex-col items-center"
      >
        <div className="w-6 h-10 border border-white/30 rounded-full flex justify-center relative">
          <motion.div
            animate={{ y: [2, 14, 2], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </motion.section>
  );
}