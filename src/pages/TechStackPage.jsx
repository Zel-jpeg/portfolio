import BackToHome from '../components/BackToHome';
import Footer from '../components/Footer';
import { techStack } from '../data/portfolioData';
import { motion } from 'framer-motion';

export default function TechStackPage() {
  const categories = Object.entries(techStack);

  return (
    <div className="page-container">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Tech Stack</h1>
          <BackToHome />
        </div>

        {categories.map(([category, techs], catIndex) => (
          <motion.div
            className="tech-stack-category"
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: catIndex * 0.08, ease: 'easeOut' }}
          >
            <h2 className="tech-stack-category-title">{category}</h2>
            <div className="tech-pills">
              {techs.map((tech, techIndex) => (
                <motion.span
                  className="tech-pill"
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: catIndex * 0.08 + techIndex * 0.03,
                    ease: 'easeOut',
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}

        <Footer />
      </div>
    </div>
  );
}
