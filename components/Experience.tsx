"use client";

const EXPERIENCE = [
  {
    year: "May — Aug 2025",
    title: <>Full Stack Developer <em>Intern</em></>,
    place: "Global Quest Technologies, Bangalore",
    description:
      "Engineered a production-ready e-commerce platform with React, Express, and MongoDB — delivering 5+ core features end to end. Designed 10+ REST APIs, optimized database queries, and shipped 8+ responsive pages.",
    tags: "Full-stack",
  },
  {
    year: "2025",
    title: <>Independent <em>Engineer</em></>,
    place: "Bangalore, India",
    description:
      "Building full-stack applications with Next.js, React, and Python. Production AI systems, RAG pipelines, and computer vision projects.",
    tags: "Full-stack · AI",
  },
  {
    year: "2024",
    title: <>ML Project <em>Developer</em></>,
    place: "Academic Research",
    description:
      "Built a Python and Flask medical detection prototype. Optimized model performance and integrated a clean backend API around it.",
    tags: "Python · Flask",
  },
  {
    year: "2023",
    title: <>Frontend <em>Developer</em></>,
    place: "Project-based work",
    description:
      "Built responsive UI systems using React and Tailwind CSS with clean component architecture. First year of shipping real interfaces.",
    tags: "React · Tailwind",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="section-header">
        <div className="section-label">
          <span className="num">04</span>Experience
        </div>
        <h2 className="section-title">A short path, <em>full of</em> building.</h2>
      </div>

      <div className="experience-inner">
        <div />
        <div className="experience-list">
          {EXPERIENCE.map((item, idx) => (
            <div className="experience-row" key={idx}>
              <div className="year">{item.year}</div>
              <div>
                <h4>{item.title}</h4>
                <div className="place">{item.place}</div>
                <p>{item.description}</p>
              </div>
              <div className="tags">{item.tags}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
