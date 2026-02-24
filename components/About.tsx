"use client";

import Reveal from "./Reveal";

export default function About() {
  return (
    <section className="min-h-screen px-6 md:px-20 py-24">
      <div className="max-w-6xl mx-auto">

        <Reveal>

          {/* Section Header */}
          <div className="mb-24">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">
              About
            </h2>
            <div className="h-[1px] w-[60px] bg-white/40 mt-4" />
          </div>

          {/* Main Layout */}
          <div className="grid md:grid-cols-[380px_1fr] gap-16 items-center">

            {/* LEFT — IMAGE */}
            <div className="relative flex justify-center md:justify-start">

              {/* Subtle vertical accent line */}
              <div className="absolute -left-8 top-0 h-full w-[1px] bg-white/10 hidden md:block" />

              <div className="w-full max-w-[340px] h-[470px] overflow-hidden rounded-2xl border border-white/10">

                {/* Replace src with your actual image path */}
                <img
                  src="/my_img.jpeg"
                  alt="Rajshekar"
                  className="w-full h-full object-cover transition duration-700 ease-out"
                />

              </div>

              {/* Minimal caption */}
              <p className="absolute -bottom-8 text-xs text-gray-500 tracking-wide">
                Bangalore · 2026
              </p>

            </div>

            {/* RIGHT — CONTENT */}
            <div className="space-y-10">

              {/* Main Bio */}
              <div className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  I’m a Computer Science graduate who values clarity, discipline,
                  and steady growth. My journey into technology began with curiosity,
                  but what keeps me here is the satisfaction of building things that
                  work — reliably and thoughtfully.
                </p>

                <p className="text-gray-500 leading-relaxed">
                  I care about doing things the right way — understanding problems
                  deeply, writing clean and maintainable solutions, and improving
                  consistently over time. Whether working independently or in a team,
                  I focus on responsibility, learning, and long-term thinking.
                </p>
              </div>

              {/* Philosophy Line */}
              <div className="pt-8 border-t border-white/10">
                <p className="text-white text-xl font-medium tracking-tight">
                  Consistency over noise.
                </p>

                {/* Subtle 3-Column Philosophy Row */}
                <div className="mt-6 grid grid-cols-3 text-xs text-gray-500 tracking-wide">
                  <span>Clarity</span>
                  <span className="text-center">Discipline</span>
                  <span className="text-right">Long-term Thinking</span>
                </div>
              </div>

            </div>

          </div>

        </Reveal>

      </div>
    </section>
  );
}