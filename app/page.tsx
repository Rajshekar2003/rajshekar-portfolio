import Hero from "../components/Hero";
import About from "../components/About";
import Stats from "../components/Stats";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import SectionBackground from "../components/SectionBackground";
import TechGrid from "../components/TechGrid";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">

      {/* HERO */}
      <Hero />

      {/* ABOUT */}
      <section
        id="about"
        className="relative section-spacing section-divider overflow-hidden"
      >
        <SectionBackground />
        <Reveal>
          <About />
        </Reveal>
      </section>

      {/* STATS */}
      <section
        className="relative section-spacing section-divider overflow-hidden"
      >
        <SectionBackground />
        <Reveal>
          <Stats />
        </Reveal>
      </section>

      {/* SKILLS (WITH GRID) */}
      <section
        id="skills"
        className="relative section-spacing section-divider overflow-hidden"
      >
        <TechGrid />
        <SectionBackground />
        <Reveal>
          <Skills />
        </Reveal>
      </section>

      {/* EDUCATION (WITH GRID) */}
      <section
        id="education"
        className="relative section-spacing section-divider overflow-hidden"
      >
        <TechGrid />
        <SectionBackground />
        <Reveal>
          <Education />
        </Reveal>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="relative section-spacing section-divider overflow-hidden"
      >
        <SectionBackground />
        <Reveal>
          <Experience />
        </Reveal>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="relative section-spacing section-divider overflow-hidden"
      >
        <SectionBackground />
        <Reveal>
          <Projects />
        </Reveal>
      </section>

      {/* CERTIFICATIONS */}
      <section
        id="certifications"
        className="relative section-spacing section-divider overflow-hidden"
      >
        <SectionBackground />
        <Reveal>
          <Certifications />
        </Reveal>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative section-spacing overflow-hidden"
      >
        <SectionBackground />
        <Reveal>
          <Contact />
        </Reveal>
      </section>

      {/* FOOTER */}
      <Footer />

    </main>
  );
}