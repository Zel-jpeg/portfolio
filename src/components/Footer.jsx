import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <p>&copy; {year} {personalInfo.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
