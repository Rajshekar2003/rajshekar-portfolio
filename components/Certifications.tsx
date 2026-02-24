"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const certifications = [
  {
    title: "Generative AI Mastermind",
    issuer: "Outskill",
    description:
      "Explored applied generative AI systems, prompt structuring, and practical AI-driven workflows for real-world implementation.",
  },
  {
    title: "Python Using AI",
    issuer: "AI For Techies",
    description:
      "Strengthened Python fundamentals while leveraging AI-assisted development and structured problem-solving approaches.",
  },
  {
    title: "Introduction to Microsoft Excel",
    issuer: "Microsoft | Simplilearn SkillUp",
    description:
      "Learned structured data handling, spreadsheet logic, and foundational data analysis techniques.",
  },
  {
    title: "Generate Images with AI",
    issuer: "Microsoft Learn",
    description:
      "Understood computer vision fundamentals and image generation workflows using AI-based tools and services.",
  },
  {
    title: "Detect, Analyze, and Recognize Faces",
    issuer: "Microsoft Learn",
    description:
      "Studied facial recognition concepts, detection pipelines, and applied AI vision model usage.",
  },
  {
    title: "Detect Objects in Images",
    issuer: "Microsoft Learn",
    description:
      "Explored object detection systems, model evaluation basics, and applied image recognition techniques.",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="min-h-screen px-6 md:px-20 py-32">
      <div className="max-w-6xl mx-auto">

        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Certifications
          </h2>

          <p className="text-gray-400 max-w-2xl mb-16 leading-relaxed">
            Continuous learning through structured programs and applied experimentation.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {certifications.map((cert, index) => (
            <Reveal key={index} delay={index * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="
                  relative
                  group
                  p-8
                  rounded-2xl
                  border border-neutral-800
                  bg-neutral-900/60
                  backdrop-blur-xl
                  transition-all duration-300
                  hover:border-white/30
                "
              >
                {/* Minimal Certification Seal */}
                <div className="absolute top-6 right-6">
                  <motion.div
                    whileHover={{ rotate: 6 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="
                      w-10 h-10
                      rounded-full
                      border border-white/20
                      bg-white/5
                      flex items-center justify-center
                      backdrop-blur-md
                    "
                  >
                    <svg
                      className="w-4 h-4 text-white/70"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 12l2 2 4-4" />
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                  </motion.div>
                </div>

                <h3 className="text-lg font-semibold mb-3 transition group-hover:text-white">
                  {cert.title}
                </h3>

                <p className="text-sm text-gray-400 mb-4">
                  {cert.issuer}
                </p>

                <p className="text-sm text-gray-500 leading-relaxed">
                  {cert.description}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}