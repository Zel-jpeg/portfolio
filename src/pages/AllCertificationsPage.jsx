import BackToHome from '../components/BackToHome';
import Footer from '../components/Footer';
import { certifications } from '../data/portfolioData';
import { motion } from 'framer-motion';

export default function AllCertificationsPage() {
  return (
    <div className="page-container">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">All Certifications</h1>
          <BackToHome />
        </div>

        <div className="full-page-grid">
          {certifications.map((cert, index) => (
            <motion.div
              className="full-page-item"
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.04, ease: 'easeOut' }}
            >
              <div className="cert-name">{cert.name}</div>
              <div className="cert-issuer">{cert.issuer}</div>
            </motion.div>
          ))}
        </div>

        <Footer />
      </div>
    </div>
  );
}
