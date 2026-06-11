import { useState, useEffect } from 'react';
import { recommendations } from '../data/portfolioData';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

export default function Recommendations() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % recommendations.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h2 className="section-title" style={{ marginBottom: '20px' }}>Recommendations</h2>
      <AnimatedSection delay={0.1}>
        <div className="recommendations-carousel">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="recommendation-card"
            >
              <p className="recommendation-text">"{recommendations[current].text}"</p>
              <div className="recommendation-author">{recommendations[current].name}</div>
              <div className="recommendation-role">{recommendations[current].role}</div>
            </motion.div>
          </AnimatePresence>
          <div className="carousel-dots">
            {recommendations.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === current ? 'active' : ''}`}
                onClick={() => setCurrent(index)}
                aria-label={`Go to recommendation ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
