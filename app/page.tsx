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
import ParallaxSection from "../components/ParallaxSection";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">

      {/* HERO */}
      <Hero />

      {/* ABOUT */}
      <ParallaxSection speed={30}>
        <section
          id="about"
          className="relative section-spacing section-divider overflow-hidden"
        >
          <SectionBackground />
          <Reveal>
            <About />
          </Reveal>
        </section>
      </ParallaxSection>

      {/* STATS */}
      <ParallaxSection speed={20}>
        <section className="relative section-spacing section-divider overflow-hidden">
          <SectionBackground />
          <Reveal>
            <Stats />
          </Reveal>
        </section>
      </ParallaxSection>

      {/* SKILLS */}
      <ParallaxSection speed={35}>
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
      </ParallaxSection>

      {/* EDUCATION */}
      <ParallaxSection speed={25}>
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
      </ParallaxSection>

      {/* EXPERIENCE */}
      <ParallaxSection speed={28}>
        <section
          id="experience"
          className="relative section-spacing section-divider overflow-hidden"
        >
          <SectionBackground />
          <Reveal>
            <Experience />
          </Reveal>
        </section>
      </ParallaxSection>

      {/* PROJECTS */}
      <ParallaxSection speed={35}>
        <section
          id="projects"
          className="relative section-spacing section-divider overflow-hidden"
        >
          <SectionBackground />
          <Reveal>
            <Projects />
          </Reveal>
        </section>
      </ParallaxSection>

      {/* CERTIFICATIONS */}
      <ParallaxSection speed={32}>
        <section
          id="certifications"
          className="relative section-spacing section-divider overflow-hidden"
        >
          <SectionBackground />
          <Reveal>
            <Certifications />
          </Reveal>
        </section>
      </ParallaxSection>

      {/* CONTACT */}
      <ParallaxSection speed={18}>
        <section
          id="contact"
          className="relative section-spacing overflow-hidden"
        >
          <SectionBackground />
          <Reveal>
            <Contact />
          </Reveal>
        </section>
      </ParallaxSection>

      {/* FOOTER */}
      <Footer />

    </main>
  );
}