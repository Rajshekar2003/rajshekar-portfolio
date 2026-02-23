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
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (!element) return;

        if (
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 w-full z-50 transition-all duration-500
        ${scrolled ? "backdrop-blur-xl bg-black/60 border-b border-white/10" : ""}
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

        {/* Links */}
        <div className="hidden md:flex gap-10 text-sm">

          {sections.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="relative group"
            >
              <span
                className={`
                  transition duration-300
                  ${active === item.id ? "text-white" : "text-gray-400"}
                  group-hover:text-white
                `}
              >
                {item.label}
              </span>

              {/* Animated underline */}
              <motion.span
                layoutId="underline"
                className={`
                  absolute left-0 -bottom-2 h-[2px]
                  bg-white
                `}
                initial={false}
                animate={{
                  width: active === item.id ? "100%" : "0%",
                }}
                transition={{ duration: 0.3 }}
              />
            </a>
          ))}

        </div>
      </div>
    </nav>
  );
}