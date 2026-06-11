import BackToHome from '../components/BackToHome';
import Footer from '../components/Footer';
import { projects } from '../data/portfolioData';
import { motion } from 'framer-motion';

export default function AllProjectsPage() {
  return (
    <div className="page-container">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">All Projects</h1>
          <BackToHome />
        </div>

        <div className="full-page-grid">
          {projects.map((project, index) => (
            <motion.div
              className="full-page-item"
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.04, ease: 'easeOut' }}
            >
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <a
                href={project.url.startsWith('http') ? project.url : `https://${project.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="project-url"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>

        <Footer />
      </div>
    </div>
  );
}
