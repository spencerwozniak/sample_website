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
      {imageSrc && (
        <div className="header-image-container">
          <div
            className="header-image"
            style={{
              backgroundImage: `url(${imageSrc})`,
            }}
          >
            <div className="header-image-overlay"></div>
            <div className="header-content-wrapper">
              <div className="header-text-container">
                <h1>{title}</h1>
                {subtitle && <p>{subtitle}</p>}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Header;
