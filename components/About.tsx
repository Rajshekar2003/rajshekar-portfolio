"use client";

import Reveal from "./Reveal";

export default function About() {
  return (
    <section className="min-h-screen px-6 md:px-20 py-32">
      <div className="max-w-6xl mx-auto">

        <Reveal>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
            About
          </h2>

          <div className="h-[1px] w-[60px] bg-white mt-4 mb-16" />

          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* LEFT SIDE — BIO */}
            <div>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                I am a Full Stack Software Engineer focused on building scalable,
                production-ready applications with modern UI and structured backend systems.
              </p>

              <p className="text-gray-500 leading-relaxed">
                My expertise spans frontend architecture, backend APIs, database
                modeling, and clean system design. I enjoy transforming complex
                problems into elegant, maintainable solutions.
              </p>
            </div>

            {/* RIGHT SIDE — HIGHLIGHTS */}
            <div className="space-y-8">

              <Highlight title="Architecture First" text="Designing scalable and maintainable systems." />
              <Highlight title="Performance Focused" text="Optimized builds, fast loading, clean code." />
              <Highlight title="Modern UI Systems" text="Smooth, minimal, premium experiences." />
              <Highlight title="Problem Solver" text="Strong DSA + analytical thinking." />

            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}

function Highlight({ title, text }: { title: string; text: string }) {
  return (
    <div className="group">
      <h3 className="text-lg font-medium mb-2 group-hover:text-white transition">
        {title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed">
        {text}
      </p>
    </div>
  );
}