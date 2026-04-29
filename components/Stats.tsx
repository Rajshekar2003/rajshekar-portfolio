"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { num: 10,  plus: "+", label: "Projects Built" },
  { num: 3,   plus: "+", label: "Production Deployments" },
  { num: 2,   plus: "+", label: "Years Coding" },
  { num: 100, plus: "%", label: "Dedication" },
];

function StatItem({ num, plus, label }: { num: number; plus: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const startTime = performance.now();
          const duration = 1400;

          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * num));
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [num]);

  return (
    <div className="stat" ref={ref}>
      <div className="stat-num">
        {count}
        <em className="plus">{plus}</em>
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="stats-section">
      <div className="stats-shell">
        <div className="stats-grid">
          {STATS.map((s) => (
            <StatItem key={s.label} num={s.num} plus={s.plus} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
