"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Scalable full-stack marketplace with authentication, cart system, and secure database integration.",
    tech: ["Next.js", "Node.js", "MySQL"],
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1200",
    link: "https://github.com/Rajshekar2003",
  },
  {
    title: "ML Medical Detection System",
    description:
      "Machine learning classification model for predictive medical diagnosis and deployment-ready API integration.",
    tech: ["Python", "Flask", "Scikit-learn"],
    image:
      "https://images.unsplash.com/photo-1581093458791-9f3c3c8e9f55?q=80&w=1200",
    link: "https://github.com/Rajshekar2003",
  },
  {
    title: "Campus Marketplace",
    description:
      "Student-focused buying and selling platform with optimized frontend performance and structured backend.",
    tech: ["React", "Firebase", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200",
    link: "https://github.com/Rajshekar2003",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-6 md:px-20 py-32">
      <div className="max-w-6xl mx-auto">

        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-20 tracking-tight">
            Selected Work
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="group relative rounded-2xl overflow-hidden border border-white/10 bg-neutral-900/50 backdrop-blur-xl"
              >

                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    absolute inset-0 w-full h-full object-cover
                    opacity-0 group-hover:opacity-100
                    scale-105 group-hover:scale-110
                    transition duration-700 ease-out
                  "
                />

                {/* Dark Overlay */}
                <div className="
                  absolute inset-0
                  bg-black/80 group-hover:bg-black/70
                  transition duration-500
                " />

                {/* Content */}
                <div className="relative z-10 p-8 flex flex-col justify-between h-[350px]">

                  <div>
                    <h3 className="text-xl font-semibold mb-4 group-hover:text-white transition">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-3 mb-6 text-xs">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="
                            px-3 py-1 rounded-full
                            border border-white/20
                            text-gray-300
                            group-hover:border-white/40
                            transition duration-300
                          "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    <a
                      href={project.link}
                      target="_blank"
                      className="text-sm underline underline-offset-4 hover:opacity-70 transition"
                    >
                      View Project →
                    </a>

                  </div>
                </div>

              </motion.div>
            </Reveal>
          ))}

        </div>
      </div>
    </section>
  );
}