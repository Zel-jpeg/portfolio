import { personalInfo } from '../data/portfolioData';
import AnimatedSection from './AnimatedSection';
import { IconLinkedin, IconGithub, IconInstagram, IconMail, IconMessageCircle } from './Icons';

export default function FooterInfo() {
  return (
    <AnimatedSection>
      <div className="footer-info-grid" id="footer-info">
        <div className="footer-info-section">
          <h4>Social Links</h4>
          <div className="footer-info-item">
            <IconGithub className="icon icon-sm" />
            <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
          <div className="footer-info-item">
            <IconInstagram className="icon icon-sm" />
            <a href={personalInfo.social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>

        <div className="footer-info-section">
          <h4>Contact</h4>
          <div className="footer-info-item">
            <IconMail className="icon icon-sm" />
            <span>Email</span>
          </div>
          <div className="footer-info-item" style={{ fontSize: '12px', color: 'var(--text-tertiary)', paddingLeft: '22px' }}>
            {personalInfo.email}
          </div>
          <div className="footer-info-item" style={{ marginTop: '8px' }}>
            <IconMessageCircle className="icon icon-sm" />
            <span>Let's Talk</span>
          </div>
          <a href={`mailto:${personalInfo.email}`} className="footer-info-link" style={{ paddingLeft: '22px' }}>
            Email me <span className="arrow">›</span>
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}
