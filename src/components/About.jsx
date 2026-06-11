import { personalInfo } from '../data/portfolioData';
import AnimatedSection from './AnimatedSection';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-title" style={{ marginBottom: '12px' }}>About</h2>
        </AnimatedSection>
        <div className="about-layout">
          <AnimatedSection delay={0.1}>
            <div className="about-text">
              {personalInfo.about.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
