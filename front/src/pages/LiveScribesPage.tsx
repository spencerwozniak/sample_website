import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navigation from '../items/Navigation';
import Footer from '../items/Footer';
import ContactForm from '../items/ContactForm';
import Header from '../items/Header';
import liveScribesImage from '../assets/live_scribes.jpg';
import liveScribeImage from '../assets/live_scribe_banner.jpg';
import './LiveScribesPage.css';

const LiveScribesPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="live-scribes-page">
      <Navigation />
      <div className='live-scribes-header'>
        <Header 
          title="Live Scribes"
          subtitle="On-site medical scribe services to optimize your practice"
          imageSrc={liveScribeImage}
        />
      </div>

      <main className="content-wrapper">
        <section className="live-scribes-section" data-aos="fade-up">
          <div className="live-scribes-box">
            <div className="live-scribes-image-container">
              <img src={liveScribesImage} alt="Live Scribes" className="live-scribes-image" />
            </div>
            <div className="live-scribes-text-container">
              <h1>Live Scribes Service</h1>
              <p>
                Highly trained professional scribes on-site at service location creating and documenting all information necessary in the EMR. 
                This option is ideal for health settings requiring a large number of shifts covered or where the environment requires the scribe 
                to be physically present for the patient encounter.
              </p>
              <p>
                Our live scribes are dedicated to ensuring that medical providers can focus on what they do best—caring for patients. We handle the 
                documentation, so providers can concentrate on providing high-quality patient care.
              </p>
            </div>
          </div>
        </section>
      </main>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default LiveScribesPage;
