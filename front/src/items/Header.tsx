import React from 'react';
import './Header.css';

interface HeaderProps {
  title: string;
  subtitle?: string;
  imageSrc?: string; // Optional image prop
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, imageSrc }) => {
  return (
    <section className="header-section">
      <div className="header-content">
        <div className="header-text-container">
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
          <a href="#learn-more" className="header-button">Learn More</a>
        </div>
        {imageSrc && (
          <div className="header-image-container">
            <img src={imageSrc} alt="Header" className="header-image" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Header;
