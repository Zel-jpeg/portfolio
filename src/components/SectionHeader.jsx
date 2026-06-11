import { Link } from 'react-router-dom';

export default function SectionHeader({ title, viewAllLink, viewAllText = 'View All' }) {
  return (
    <div className="section-header">
      <h2 className="section-title">{title}</h2>
      {viewAllLink && (
        <Link to={viewAllLink} className="view-all-link" id={`view-all-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {viewAllText} <span className="arrow">›</span>
        </Link>
      )}
    </div>
  );
}
