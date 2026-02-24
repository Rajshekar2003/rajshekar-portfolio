"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const projects = [
  {
    title: "HustleNote",
    description:
      "Habit tracking web application that allows users to create daily habits, mark completion, and visualize weekly and monthly performance through interactive graphs.",
    tech: ["Next.js", "Node.js", "MongoDB", "Chart.js"],
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c", // productivity / planning image
    link: "https://github.com/Rajshekar2003",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Responsive full-stack marketplace with authentication, cart management, and secure order handling built with structured backend architecture.",
    tech: ["Next.js", "Node.js", "MySQL"],
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c",
    link: "https://github.com/Rajshekar2003",
  },
  {
    title: "Campus Marketplace",
    description:
      "Student marketplace platform with optimized frontend performance and scalable backend integration.",
    tech: ["React", "Firebase", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    link: "https://github.com/Rajshekar2003",
  },
  {
    title: "Esophageal Cancer Detection",
    description:
      "Research-driven project applying quantum computing principles for advanced medical data classification.",
    tech: ["Python", "Quantum Computing"],
    image:
      "https://images.unsplash.com/photo-1581595219315-a187dd40c322",
    link: "https://github.com/Rajshekar2003",
  },
  {
    title: "Bird Species Identification (KNN)",
    description:
      "Machine learning classification model using KNN algorithm to identify bird species from structured dataset features.",
    tech: ["Python", "KNN", "Machine Learning"],
    image:
       "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=1200&q=80", // FIXED working bird image
    link: "https://github.com/Rajshekar2003",
  },
  {
    title: "Iris Detection System",
    description:
      "Real-time iris detection system using MediaPipe and computer vision techniques for precise eye tracking.",
    tech: ["Python", "MediaPipe", "Computer Vision"],
    image:
      "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
    link: "https://github.com/Rajshekar2003",
  },
  {
    title: "Intelligent Travel Recommendation",
    description:
      "Web application recommending travel destinations based on user preferences using structured backend logic.",
    tech: ["Python", "Web Development"],
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    link: "https://github.com/Rajshekar2003",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-6 md:px-20 py-28">
      <div className="max-w-6xl mx-auto">

        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-20 tracking-tight">
            Selected Work
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <Reveal key={index} delay={index * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="
                  group relative rounded-3xl overflow-hidden
                  border border-white/10
                  bg-neutral-900/40 backdrop-blur-xl
                  shadow-lg
                  hover:shadow-blue-500/10
                  transition-all duration-500
                "
              >

                {/* Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1 }}
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/75 group-hover:bg-black/65 transition duration-500" />

                {/* Content */}
                <div className="relative z-10 p-6 flex flex-col justify-between h-[300px]">

                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="
                            px-3 py-1 text-xs
                            border border-white/20
                            rounded-full
                            text-gray-300
                            hover:border-white/50
                            transition duration-300
                          "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      className="
                        text-sm
                        underline underline-offset-4
                        hover:opacity-70
                        transition
                      "
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