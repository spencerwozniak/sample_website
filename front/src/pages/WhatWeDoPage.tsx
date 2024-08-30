import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '../items/Navigation';
import Footer from '../items/Footer';
import ContactForm from '../items/ContactForm';
import Header from '../items/Header';
import './WhatWeDoPage.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import wwdBanner from '../assets/what_we_do_banner.jpg';
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
        <title>What We Do - Helix Scribe Solutions</title>
        <meta name="description" content="Learn more about the scribe and medical services provided by Helix Scribe Solutions, including live and remote scribes, specialties, and other medical professionals." />
        <meta name="keywords" content="scribe services, live scribes, remote scribes, healthcare, medical professionals, Helix, specialties, locations, professional" />
        <meta property="og:title" content="What We Do - Helix Scribe Solutions" />
        <meta property="og:description" content="Helix Scribe Solutions offers a range of scribe and medical services tailored to your healthcare needs." />
        <meta property="og:image" content="URL_to_a_representative_image" />
        <meta property="og:url" content="https://www.helixscribes.com/what-we-do" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.helixscribes.com/what-we-do" />
      </Helmet>

      <Navigation />
      <header className='what-we-do-header'>
        <Header 
          title="We provide scribes!"
          subtitle="and other medical professionals"
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
              <h1>Live Scribes</h1>
              <p>Highly trained professional scribes on-site at service location creating and documenting all information necessary in the EMR. This option is ideal for health settings requiring a large number of shifts covered or where the environment requires the scribe to be physically present for the patient encounter.</p>
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
              <h1>Remote Scribes</h1>
              <p>Helix Remote Scribes are designed for locations that require intermittent or limited coverage where using a live scribe is not an option. Using only Helix Certified Medical Scribes based in our office, the remote scribe provides scribe service to physicians anywhere in the United States. Remote EMR access and a strong internet connection are required.</p>
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
              <p>Each provider receives tailored service to best meet their needs. While we started in the Emergency Department, we are also proficient in:</p>
              <div className="two-column-list">
                <ul>
                  <li>Primary Care</li>
                  <li>Cardiology</li>
                  <li>Urology</li>
                  <li>ENT</li>
                </ul>
                <ul>
                  <li>Pain Management</li>
                  <li>Neuro/Spine Surgery</li>
                  <li>Oncology</li>
                  <li>Orthopedics</li>
                </ul>
              </div>
              <p>Have a unique specialty? We can learn that too.</p>
            </div>
          </div>
        </section>

        <section className="what-we-do-section" data-aos="fade-up" data-aos-delay="300">
          <div className="what-we-do-box">
            <div className="what-we-do-image-container">
              <img src={opportunitiesImage} alt="Other Opportunities" className="what-we-do-image" />
            </div>
            <div className="what-we-do-text-container">
              <h1>Other Medical Professionals</h1>
              <p>We are always working to find what opportunities allow for medical professionals and organizations to grow and thrive. Aside from medical scribes, we also offer:</p>
              <ul>
                <li>Cardiac telemetry services</li>
                <li>Patient safety attendants</li>
                <li>Administrative assistance</li>
                <li>Efficiency consultation</li>
              </ul>
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
