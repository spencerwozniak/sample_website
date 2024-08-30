import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ImpactSection.css';

const ImpactSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <section className="impact-section" data-aos="fade-up">
      <div className="content-wrapper">
        <h1 className="impact-title" data-aos="fade-up">Helix Impact</h1>
        <div className="stats-container">
          <div className="stat-item" data-aos="fade-up" data-aos-delay="100">
            <strong className="stat-value">9+</strong>
            <span className="stat-description">Years of excellence</span>
          </div>
          <div className="stat-item" data-aos="fade-up" data-aos-delay="200">
            <strong className="stat-value">2,000+</strong>
            <span className="stat-description">Scribes deployed</span>
          </div>
          <div className="stat-item" data-aos="fade-up" data-aos-delay="300">
            <strong className="stat-value">100+</strong>
            <span className="stat-description">Providers helped</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
