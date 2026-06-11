import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function CertificationList({ certifications }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-30px' });

  return (
    <div className="cert-list" ref={ref}>
      {certifications.map((cert, index) => (
        <motion.div
          className="cert-item"
          key={cert.name}
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.4, delay: index * 0.06, ease: 'easeOut' }}
        >
          <div className="cert-name">{cert.name}</div>
          <div className="cert-issuer">{cert.issuer}</div>
        </motion.div>
      ))}
    </div>
  );
}
