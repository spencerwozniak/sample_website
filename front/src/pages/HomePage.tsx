import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Navigation from '../items/Navigation';
import Header from '../items/Header';
import Footer from '../items/Footer';
import ContactForm from '../items/ContactForm';
import Testimonials from '../items/Testimonials';
import ImpactSection from '../items/ImpactSection';
import Scribes1 from '../assets/healthcare_banner.jpg';
import healthcareBanner from '../assets/locations.jpg';
import handsBanner from '../assets/holding_hands.jpg';
import './HomePage.css';

function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="home-page">
      <Helmet>
        <title>Healthcare Company</title>
        <meta name="description" content="Helix Scribe Solutions provides medical scribe services for physician groups, healthcare systems, and hospitals in Michigan." />
        <meta name="keywords" content="scribe, medical scribe, scribe services, medical scribe services, healthcare, EMR systems, Helix, helix, solutions, physician groups, Michigan" />
        <meta property="og:title" content="Healthcare Company" />
        <meta property="og:description" content="Built by physicians. For physicians. We provide medical scribe services across various EMR systems." />
        <meta property="og:image" content="URL_to_a_representative_image" />
        <meta property="og:url" content="https://www.helixscribes.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.helixscribes.com" />
      </Helmet>

      <Navigation />
      
      <header className="home-header">
        <Header 
          title="Healthcare Company"
          subtitle="Your company motto."
          imageSrc={Scribes1}
        />
      </header>

      <main className="content-wrapper">
        <section className="home-section">
          <div className="home-box" data-aos="fade-up">
            <div className="home-image-container">
              <img src={handsBanner} alt="Healthcare professionals holding hands" loading="lazy" className="home-image" />
            </div>
            <div className="home-text-container">
              <h1>We are here to Help</h1>
              <p>Our company is one of the leading providers of medical services for healthcare systems and hospitals in California.</p>
              <p>We aim to achieve better patient outcomes through medical excellence and compassionate patient care.</p>
              <Link to='/what-we-do' className="home-nav-button">Learn more</Link>
            </div>
          </div>
        </section>

        <section className="home-section">
          <div className="home-box" data-aos="fade-up" data-aos-delay="100">
            <div className="home-text-container">
              <h1>Why us?</h1>
              <ul>
                <li>We implement a robust training program that tailors providers for your clinical environment.</li>
                <li>We requires quarterly continuing medical education modules to ensure consistent quality.</li>
                <li>We average over 99% shift coverage across all clients.</li>
              </ul>
              <Link to='/about' className="home-nav-button">Learn more</Link>
            </div>
            <div className="home-image-container">
              <img src={healthcareBanner} alt="Healthcare locations" loading="lazy" className="home-image" />
            </div>
          </div>
        </section>

        <div className="impact-testimonials-container">
          <ImpactSection />
          <Testimonials />
        </div>
      </main>

      <ContactForm />
      <Footer />
    </div>
  );
}

export default HomePage;
