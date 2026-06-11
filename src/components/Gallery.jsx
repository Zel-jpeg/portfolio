import { useState, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';
import { motion, AnimatePresence } from 'framer-motion';

// Import all images from assets
import img1 from '../assets/images/Philhealth.png';
import img2 from '../assets/images/Sakyan-figma.png';
import img3 from '../assets/images/Sakyan.png';
import img4 from '../assets/images/Skillbridge.png';
import img5 from '../assets/images/capstone-skillbrige.jpeg';
import img6 from '../assets/images/pitching-booth.webp';
import img7 from '../assets/images/received_817936301116303.jpeg';
import img8 from '../assets/images/sakyan-app.jpg';
import img9 from '../assets/images/techno-pitch.jpeg';
import img10 from '../assets/images/techno-pitch2.jpeg';

const galleryImages = [
  { id: 1, src: img1, alt: 'PhilHealth Redesign Prototype' },
  { id: 2, src: img2, alt: 'Sakyan Figma Prototype' },
  { id: 3, src: img3, alt: 'Sakyan Platform' },
  { id: 4, src: img4, alt: 'SkillBridge UI' },
  { id: 5, src: img5, alt: 'Capstone Skillbridge Presentation' },
  { id: 6, src: img6, alt: 'Pitching Booth Event' },
  { id: 7, src: img7, alt: 'Event Photo' },
  { id: 8, src: img8, alt: 'Sakyan Mobile App Preview' },
  { id: 9, src: img9, alt: 'Techno Pitch Competition' },
  { id: 10, src: img10, alt: 'Techno Pitch Presentation' },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = (index) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  
  const showNext = (e) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };
  
  const showPrev = (e) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };
    
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedIndex]);

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <AnimatedSection>
          <h2 className="gallery-title" style={{ marginBottom: '16px' }}>Gallery</h2>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <div className="gallery-scroll">
            {galleryImages.map((img, index) => (
              <div 
                className="gallery-item" 
                key={img.id}
                onClick={() => openLightbox(index)}
              >
                <img src={img.src} alt={img.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div 
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">×</button>
            <button className="lightbox-nav prev" onClick={showPrev} aria-label="Previous">‹</button>
            
            <div className="lightbox-content-wrapper">
              <motion.img 
                key={selectedIndex}
                src={galleryImages[selectedIndex].src} 
                alt={galleryImages[selectedIndex].alt}
                className="lightbox-image"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
              />
              <div className="lightbox-caption">
                {galleryImages[selectedIndex].alt}
              </div>
            </div>
            
            <button className="lightbox-nav next" onClick={showNext} aria-label="Next">›</button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
