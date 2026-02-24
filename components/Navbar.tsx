"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  /* Smooth background change */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Active section detection */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`
        fixed top-0 w-full z-50 transition-all duration-500
        ${
          scrolled
            ? "backdrop-blur-2xl bg-black/60 border-b border-white/10"
            : ""
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">

        {/* Logo */}
        <a
          href="#home"
          className="text-lg font-semibold tracking-wide hover:opacity-70 transition"
        >
          Rajshekar
        </a>

        {/* Premium Glass Nav */}
        <div className="hidden md:flex relative items-center">

          <div className="flex gap-2 p-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 relative">

            {sections.map((item) => {
              const isActive = active === item.id;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="relative px-5 py-2 rounded-full group"
                >
                  {/* Glow Layer */}
                  {isActive && (
                    <>
                      <motion.div
                        layoutId="navbar-glow"
                        className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl"
                        transition={{
                          type: "spring",
                          stiffness: 450,
                          damping: 35,
                        }}
                      />

                      {/* Main Sliding Pill */}
                      <motion.div
                        layoutId="navbar-pill"
                        className="absolute inset-0 rounded-full bg-white/10 border border-white/20"
                        transition={{
                          type: "spring",
                          stiffness: 450,
                          damping: 35,
                        }}
                      />
                    </>
                  )}

                  <span
                    className={`
                      relative z-10 text-sm tracking-wide transition duration-300
                      ${
                        isActive
                          ? "text-white"
                          : "text-gray-400"
                      }
                      group-hover:text-white
                    `}
                  >
                    {item.label}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}