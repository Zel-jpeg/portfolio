import { journey } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ExperienceTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref}>
      <h2 className="section-title" style={{ marginBottom: '16px' }}>Education & Journey</h2>
      <div className="timeline">
        {journey.map((item, index) => (
          <motion.div
            className="timeline-item"
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
          >
            <div className="timeline-dot-wrapper">
              <div className={`timeline-dot ${item.current ? 'active' : 'hollow'}`} />
              {index < journey.length - 1 && <div className="timeline-line" />}
            </div>
            <div className="timeline-content">
              <div className="timeline-role">{item.role}</div>
              <div className="timeline-company">{item.company}</div>
            </div>
            <div className="timeline-year">{item.year}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
