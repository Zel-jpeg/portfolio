import { personalInfo } from '../data/portfolioData';
import AnimatedSection from './AnimatedSection';
import ThemeToggle from './ThemeToggle';
import { IconMapPin, IconMail, IconFileText } from './Icons';
import profilePic from '../assets/images/profile-zel.webp';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container" style={{ position: 'relative' }}>
        <ThemeToggle />
        <AnimatedSection>
          <div className="hero-content">
            <img
              src={profilePic}
              alt={`${personalInfo.name} profile photo`}
              className="hero-avatar"
              onError={(e) => {
                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(personalInfo.name)}&size=200&background=1a1a1a&color=fff&bold=true&font-size=0.4`;
              }}
            />
            <div className="hero-info">
              <h1 className="hero-name">
                {personalInfo.name}
                <svg className="verified-badge" viewBox="0 0 24 24" aria-label="Verified">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </h1>
              <p className="hero-location">
                <IconMapPin /> {personalInfo.location}
              </p>
              <p className="hero-tagline">{personalInfo.tagline}</p>

              <div className="hero-actions">
                <a href={`mailto:${personalInfo.email}`} className="btn-secondary" id="send-email">
                  <IconMail className="icon" />
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
