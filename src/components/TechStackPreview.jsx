import { techStack } from '../data/portfolioData';
import SectionHeader from './SectionHeader';
import AnimatedSection from './AnimatedSection';

export default function TechStackPreview() {
  const previewCategories = Object.keys(techStack).slice(0, 3);

  return (
    <div>
      <SectionHeader title="Tech Stack" viewAllLink="/tech-stack" />
      <AnimatedSection delay={0.1}>
        <div>
          {previewCategories.map((category) => (
            <div className="tech-category" key={category}>
              <h3 className="tech-category-title">{category}</h3>
              <div className="tech-inline">
                {techStack[category].slice(0, category === 'Frontend' ? 7 : 5).map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
