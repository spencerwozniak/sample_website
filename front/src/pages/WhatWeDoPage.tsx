import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '../items/Navigation';
import Footer from '../items/Footer';
import ContactForm from '../items/ContactForm';
import Header from '../items/Header';
import './WhatWeDoPage.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import wwdBanner from '../assets/scribe_working_1.jpg';
import liveScribeImage from '../assets/live_scribe.jpg';
import remoteScribesImage from '../assets/scribe_working_2.jpg';
import locationsImage from '../assets/gr_medical_mile.jpg';
import opportunitiesImage from '../assets/opportunities.jpg';

function WhatWeDoPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="what-we-do-page">
      <Helmet>
        <title>What We Do - Healthcare Company</title>
        <meta name="description" content="Learn more about the scribe and medical services provided by Helix Scribe Solutions, including live and remote scribes, specialties, and other medical professionals." />
        <meta name="keywords" content="scribe services, live scribes, remote scribes, healthcare, medical professionals, Helix, specialties, locations, professional" />
        <meta property="og:title" content="What We Do - Healthcare Company" />
        <meta property="og:description" content="Helix Scribe Solutions offers a range of scribe and medical services tailored to your healthcare needs." />
        <meta property="og:image" content="URL_to_a_representative_image" />
        <meta property="og:url" content="https://www.helixscribes.com/what-we-do" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.helixscribes.com/what-we-do" />
      </Helmet>

      <Navigation />
      <header className='what-we-do-header'>
        <Header 
          title="We provide healthcare!"
          subtitle="To advance patient care."
          imageSrc={wwdBanner}
        />
      </header>

      <main className="content-wrapper">
        <section className="what-we-do-section" data-aos="fade-up">
          <div className="what-we-do-box">
            <div className="what-we-do-image-container">
              <img src={liveScribeImage} alt="Live Scribes" className="what-we-do-image" />
            </div>
            <div className="what-we-do-text-container">
              <h1>Physicians</h1>
              <p>Highly trained professional physicians on-site at service locations providing comprehensive patient care and making critical decisions. This option is ideal for healthcare settings requiring a high volume of shifts or where the environment demands the physician's direct presence to ensure optimal patient outcomes and timely medical interventions.</p>
              <a href='/what-we-do/live-scribes' className='what-we-do-nav-button'><b>Learn more</b></a>
            </div>
          </div>
        </section>

        <section className="what-we-do-section" data-aos="fade-up" data-aos-delay="100">
          <div className="what-we-do-box">
            <div className="what-we-do-image-container">
              <img src={remoteScribesImage} alt="Remote Scribes" className="what-we-do-image" />
            </div>
            <div className="what-we-do-text-container">
              <h1>Physician Associates (PAs)</h1>
              <p>Highly trained professional physician associates on-site at service locations, providing essential support to physicians and delivering patient care. This option is ideal for healthcare settings requiring extensive coverage or where the environment benefits from having a physician associate present to assist with clinical tasks, patient management, and medical procedures.</p>
              <a href='/what-we-do/remote-scribes' className='what-we-do-nav-button'><b>Learn more</b></a>
            </div>
          </div>
        </section>

        <section className="what-we-do-section" data-aos="fade-up" data-aos-delay="200">
          <div className="what-we-do-box">
            <div className="what-we-do-image-container">
              <img src={locationsImage} alt="Locations & Specialties" className="what-we-do-image" />
            </div>
            <div className="what-we-do-text-container">
              <h1>Locations & Specialties</h1>
              <p>Each client receives customized services designed to meet their specific needs. While our roots are in the Emergency Department, our expertise extends across various specialties, including:</p>
              <div className="two-column-list">
                <ul>
                  <li>Gastroenterology</li>
                  <li>Cardiology</li>
                  <li>Urology</li>
                  <li>Pulmonology</li>
                </ul>
                <ul>
                  <li>Nephrology</li>
                  <li>Neurology</li>
                  <li>Infectious Disease</li>
                  <li>Endocrinology</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ContactForm />
      <Footer />
    </div>
  );
}

export default WhatWeDoPage;
