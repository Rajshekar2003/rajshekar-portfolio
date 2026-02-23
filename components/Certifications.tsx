"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const certifications = [
  { title: "Generative AI Mastermind", issuer: "Outskill" },
  { title: "Python Using AI", issuer: "AI For Techies" },
  { title: "Introduction to Microsoft Excel", issuer: "Microsoft | Simplilearn SkillUp" },
  { title: "Generate Images with AI", issuer: "Microsoft Learn" },
  { title: "Detect, Analyze, and Recognize Faces", issuer: "Microsoft Learn" },
  { title: "Detect Objects in Images", issuer: "Microsoft Learn" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="min-h-screen px-6 md:px-20 py-32">
      <div className="max-w-6xl mx-auto">

        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">
            Certifications
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {certifications.map((cert, index) => (
            <Reveal key={index} delay={index * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="
                  group
                  p-8
                  rounded-2xl
                  border border-neutral-800
                  bg-neutral-900/60
                  backdrop-blur-xl
                  transition-all duration-300
                  hover:border-blue-500/60
                  hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]
                "
              >
                <h3 className="text-lg font-semibold mb-3 transition group-hover:text-white">
                  {cert.title}
                </h3>

                <p className="text-sm text-gray-400">
                  {cert.issuer}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}