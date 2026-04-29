"use client";

const EDUCATION = [
  {
    year: "2021 — 2025",
    title: <>B.E. <em>Computer Science Engineering</em></>,
    place: "P.E.S. Institute of Technology & Management, Shivamogga",
    description:
      "Focused on full-stack development, data structures, algorithms, system design, and scalable application architecture.",
    tags: "Bachelor's",
  },
  {
    year: "2019 — 2021",
    title: <>Pre-University <em>(PCMC)</em></>,
    place: "PSSEMR School & PU College, Davanagere",
    description:
      "Physics, Chemistry, Mathematics, Computer Science — the years where curiosity about software became a decision.",
    tags: "Science",
  },
  {
    year: "2019",
    title: <>SSLC <em>(10th Grade)</em></>,
    place: "Smt Pushpa Shamanur Mahalingappa CBSE Residential School, Davanagere",
    description:
      "Foundation years. Discipline, structure, and the first seeds of an interest in how computers work.",
    tags: "Foundation",
  },
];

export default function Education() {
  return (
    <section id="education" className="education-section">
      <div className="section-header">
        <div className="section-label">
          <span className="num">03</span>Education
        </div>
        <h2 className="section-title">Academic <em>foundation.</em></h2>
      </div>

      <div className="education-inner">
        <div />
        <div className="education-list">
          {EDUCATION.map((item, idx) => (
            <div className="education-row" key={idx}>
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
