"use client";

import { useRef } from "react";

const certs = [
  {
    num: "CERT / 01",
    title: <>Generative AI <em>Mastermind</em></>,
    issuer: "Outskill · Mar 2025",
    desc: "Applied generative AI systems, prompt structuring, and AI-driven workflows for real-world implementation.",
  },
  {
    num: "CERT / 02",
    title: <>Python <em>using AI</em></>,
    issuer: "AI For Techies · Aug 2025",
    desc: "Python fundamentals strengthened with AI-assisted development and structured problem-solving approaches.",
  },
  {
    num: "CERT / 03",
    title: <>Microsoft <em>Excel</em></>,
    issuer: "Microsoft / Simplilearn · Sep 2024",
    desc: "Structured data handling, spreadsheet logic, and foundational data analysis techniques.",
  },
  {
    num: "CERT / 04",
    title: <>Generate Images <em>with AI</em></>,
    issuer: "Microsoft Learn · Oct 2025",
    desc: "Computer vision fundamentals and image generation workflows using modern AI tools and services.",
  },
  {
    num: "CERT / 05",
    title: <>Face Detection <em>& Recognition</em></>,
    issuer: "Microsoft Learn · Nov 2025",
    desc: "Facial recognition concepts, detection pipelines, and applied AI vision model usage.",
  },
  {
    num: "CERT / 06",
    title: <>Object <em>Detection</em></>,
    issuer: "Microsoft Learn",
    desc: "Object detection systems, model evaluation basics, and applied image recognition techniques.",
  },
];

function CertCard({ cert, index }: { cert: typeof certs[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(1000px) rotateY(${px * 8}deg) rotateX(${py * -8}deg) translateZ(10px)`;
  }

  function handleMouseLeave() {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0)";
  }

  return (
    <div
      ref={cardRef}
      className="cert-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-cursor="hover"
    >
      <div className="seal" />
      <div className="cert-num">{cert.num}</div>
      <h4>{cert.title}</h4>
      <div className="issuer">{cert.issuer}</div>
      <p>{cert.desc}</p>
    </div>
  );
}

export default function Certifications() {
  return (
    <section id="certs" className="certs-section">
      <div className="section-header certs-header">
        <div className="section-label">
          <span className="num">06</span>Certifications
        </div>
        <h2 className="section-title">Continuous <em>learning.</em></h2>
      </div>

      <div className="certs-inner">
        <div />
        <div className="certs-grid">
          {certs.map((cert, i) => (
            <CertCard key={i} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
