"use client";

import { ReactNode } from "react";

interface ExpertiseCategory {
  num: string;
  title: ReactNode;
  skills: string[];
}

const EXPERTISE: ExpertiseCategory[] = [
  {
    num: "i.",
    title: <>Languages <em>&amp; Core</em></>,
    skills: ["Python", "JavaScript", "TypeScript", "SQL", "Java", "OOP", "DSA", "System Design"],
  },
  {
    num: "ii.",
    title: <>Frontend <em>Engineering</em></>,
    skills: ["React", "Next.js", "Tailwind", "HTML5", "CSS3", "Framer Motion", "Component Architecture", "Responsive UI"],
  },
  {
    num: "iii.",
    title: <>Backend <em>Engineering</em></>,
    skills: ["Node.js", "Express", "Flask", "REST APIs", "Authentication", "JWT", "API Security"],
  },
  {
    num: "iv.",
    title: <>AI <em>&amp; ML</em></>,
    skills: ["LLMs", "RAG Pipelines", "Groq", "Pydantic", "ChromaDB", "Pandas", "NumPy", "KNN", "MediaPipe", "OpenCV", "Computer Vision", "Prompt Engineering"],
  },
  {
    num: "v.",
    title: <>Databases <em>&amp; Storage</em></>,
    skills: ["MongoDB", "MySQL", "Firebase Firestore", "ChromaDB", "Data Modeling", "Query Optimization"],
  },
  {
    num: "vi.",
    title: <>Tools <em>&amp; Platforms</em></>,
    skills: ["Git", "GitHub", "Vercel", "Render", "Linux", "VS Code", "Postman"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="expertise-section">
      <div className="section-header">
        <div className="section-label">
          <span className="num">02</span>Expertise
        </div>
        <h2 className="section-title">Core <em>competencies.</em></h2>
      </div>

      <div className="expertise-inner">
        <div />
        <div className="expertise-grid">
          {EXPERTISE.map((cat, idx) => (
            <div className="expertise-card" key={idx}>
              <div className="expertise-num">{cat.num}</div>
              <h4>{cat.title}</h4>
              <div className="skill-items">
                {cat.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="skill-pill"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
