import React from 'react';

import emailLogo from '../assets/email.svg';
import phoneLogo from '../assets/phone.svg';

import './MapSection.css';


const MapSection: React.FC = () => {
  return (
    <div className="map-section">
      <div className="map-section__map">
        <iframe
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d765.7223252405809!2d-117.16910567609696!3d32.71621725243078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d954abcf1c2c43%3A0xd7a4778778db0091!2s600%20W%20Broadway%2C%20San%20Diego%2C%20CA%2092101!5e1!3m2!1sen!2sus!4v1725059131129!5m2!1sen!2sus"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen={true}
          aria-hidden="false"
          tabIndex={0}
        ></iframe>
      </div>

      <div className="map-section__content">
        <h2 className="map-section__title">Healthcare Company</h2>
        <p className="map-section__address">
          600 W Broadway<br />
          Suite 222<br />
          San Diego, CA 92101
        </p>

        <a href="tel:222.444.9999" className="map-section__link">
          <span className="map-section__link-icon">
            <img
              loading="lazy"
              src={phoneLogo}
              alt="phone"
            />
          </span>
          222.444.9999
        </a>

        <a href="mailto:info@helixscribes.com" className="map-section__link">
          <span className="map-section__link-icon">
            <img
              loading="lazy"
              src={emailLogo}
              alt="mail"
            />
          </span>
          General Inquiries - info@example.com
        </a>

        <a href="mailto:sales@helixscribes.com" className="map-section__link">
          <span className="map-section__link-icon">
            <img
              loading="lazy"
              src={emailLogo}
              alt="mail"
            />
          </span>
          Sales Team - sales@example.com
        </a>

        <a href="mailto:credentialing@helixscribes.com" className="map-section__link">
          <span className="map-section__link-icon">
            <img
              loading="lazy"
              src={emailLogo}
              alt="mail"
            />
          </span>
          HR Inquiries - hr@example.com
        </a>

      </div>
    </div>
  );
};

export default MapSection;
