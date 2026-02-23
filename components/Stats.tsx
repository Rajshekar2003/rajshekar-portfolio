"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1400;
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(easeOut * target);

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [isInView, target]);

  return <span ref={ref}>{count}</span>;
}

export default function Stats() {
  return (
    <section className="py-28 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">

        {/* Glass Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-3xl border border-white/5 
                     bg-white/5 backdrop-blur-xl p-12"
        >
          {/* Subtle Hover Glow */}
          <div className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-100 transition duration-700 pointer-events-none
                          bg-gradient-to-br from-white/5 via-transparent to-transparent" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center relative z-10">

            <StatItem number={10} label="Projects Built" />
            <StatItem number={3} label="Production Deployments" />
            <StatItem number={2} label="Years Coding" />
            <StatItem number={100} label="Dedication" suffix="%" />

          </div>
        </motion.div>

      </div>
    </section>
  );
}

function StatItem({
  number,
  label,
  suffix = "+",
}: {
  number: number;
  label: string;
  suffix?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="group"
    >
      <h3 className="text-4xl md:text-5xl font-bold tracking-tight
                     bg-gradient-to-r from-white via-gray-300 to-white
                     bg-clip-text text-transparent">
        <Counter target={number} />
        {suffix}
      </h3>

      <p className="mt-3 text-gray-400 text-sm tracking-wide
                    group-hover:text-gray-300 transition">
        {label}
      </p>
    </motion.div>
  );
}