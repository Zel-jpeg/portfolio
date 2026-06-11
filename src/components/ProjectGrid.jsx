import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ProjectGrid({ projects, showUrl = true }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-30px' });

  return (
    <div className="project-grid" ref={ref}>
      {projects.map((project, index) => (
        <motion.div
          className="project-card"
          key={project.name}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: index * 0.06, ease: 'easeOut' }}
        >
          <h3 className="project-name">{project.name}</h3>
          <p className="project-description">{project.description}</p>
          {showUrl && (
            <a
              href={project.url.startsWith('http') ? project.url : `https://${project.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="project-url"
            >
              View Project
            </a>
          )}
        </motion.div>
      ))}
    </div>
  );
}
