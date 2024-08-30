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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5843.861020876374!2d-85.5694833232738!3d42.916506499764765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88184d737a400001%3A0x6ac0756a42628f17!2sHelix%20Scribe%20Solutions!5e0!3m2!1sen!2sus!4v1724533576583!5m2!1sen!2sus"
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
        <h2 className="map-section__title">Helix Scribe Solutions</h2>
        <p className="map-section__address">
          4100 Embassy Drive SE<br />
          Suite 400<br />
          Grand Rapids, MI 49546
        </p>

        <a href="tel:616.426.3659" className="map-section__link">
          <span className="map-section__link-icon">
            <img
              loading="lazy"
              src={phoneLogo}
              alt="phone"
            />
          </span>
          616.426.3659
        </a>

        <a href="mailto:info@helixscribes.com" className="map-section__link">
          <span className="map-section__link-icon">
            <img
              loading="lazy"
              src={emailLogo}
              alt="mail"
            />
          </span>
          General Inquiries - info@helixscribes.com
        </a>

        <a href="mailto:sales@helixscribes.com" className="map-section__link">
          <span className="map-section__link-icon">
            <img
              loading="lazy"
              src={emailLogo}
              alt="mail"
            />
          </span>
          Sales Team - sales@helixscribes.com
        </a>

        <a href="mailto:credentialing@helixscribes.com" className="map-section__link">
          <span className="map-section__link-icon">
            <img
              loading="lazy"
              src={emailLogo}
              alt="mail"
            />
          </span>
          HR Inquiries - credentialing@helixscribes.com
        </a>

      </div>
    </div>
  );
};

export default MapSection;
