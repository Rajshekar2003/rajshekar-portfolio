"use client";

import { useEffect, useState } from "react";

const STATS = [
  { num: 10,  plus: "+", label: "Projects Built" },
  { num: 3,   plus: "+", label: "Production Deployments" },
  { num: 2,   plus: "+", label: "Years Coding" },
  { num: 100, plus: "%", label: "Dedication" },
];

function StatItem({ num, plus, label }: { num: number; plus: string; label: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = performance.now() + 200;
    const duration = 1400;
    const tick = (now: number) => {
      const elapsed = now - startTime;
      if (elapsed < 0) {
        requestAnimationFrame(tick);
        return;
      }
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * num));
      if (progress < 1) requestAnimationFrame(tick);
    };
    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [num]);

  return (
    <div className="stat">
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
