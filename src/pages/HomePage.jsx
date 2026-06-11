import Hero from '../components/Hero';
import About from '../components/About';
import TechStackPreview from '../components/TechStackPreview';
import ExperienceTimeline from '../components/ExperienceTimeline';
import ProjectGrid from '../components/ProjectGrid';
import CertificationList from '../components/CertificationList';
import FooterInfo from '../components/FooterInfo';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import SectionHeader from '../components/SectionHeader';
import AnimatedSection from '../components/AnimatedSection';
import { projects, certifications } from '../data/portfolioData';

export default function HomePage() {
  return (
    <div className="page-container">
      <Hero />

      <About />

      <section className="section" id="techstack">
        <div className="container">
          <TechStackPreview />
        </div>
      </section>

      <section className="section" id="experience">
        <div className="container">
          <ExperienceTimeline />
        </div>
      </section>

      <section className="section" id="recent-projects">
        <div className="container">
          <SectionHeader title="Recent Projects" viewAllLink="/projects" />
          <AnimatedSection delay={0.1}>
            <ProjectGrid projects={projects.slice(0, 4)} />
          </AnimatedSection>
        </div>
      </section>

      <section className="section" id="recent-certifications">
        <div className="container">
          <SectionHeader title="Recent Certifications" viewAllLink="/certifications" />
          <AnimatedSection delay={0.1}>
            <CertificationList certifications={certifications.slice(0, 4)} />
          </AnimatedSection>
        </div>
      </section>

      <section className="section" id="footer-links">
        <div className="container">
          <FooterInfo />
        </div>
      </section>

      <Gallery />

      <div className="container">
        <Footer />
      </div>
    </div>
  );
}
