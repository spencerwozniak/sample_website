import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navigation from '../items/Navigation';
import Footer from '../items/Footer';
import ContactForm from '../items/ContactForm';
import Header from '../items/Header';
import remoteScribesImage from '../assets/virtual_scribes.jpg';
import remoteScribeImage from '../assets/scribe_working_2.jpg';
import './RemoteScribesPage.css';

const RemoteScribesPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="remote-scribes-page">
      <Navigation />
      <div className="remote-scribes-header">
        <Header 
          title="Remote Scribes"
          subtitle="Virtual scribe services to support your practice"
          imageSrc={remoteScribeImage}
        />
      </div>

      <main className="content-wrapper">
        <section className="remote-scribes-section" data-aos="fade-up">
          <div className="remote-scribes-box">
            <div className="remote-scribes-text-container">
              <h1>Remote Scribes Service</h1>
              <p>
                Helix Remote Scribes are designed for locations that require intermittent or limited coverage where using a live scribe is not an option.
                Our remote scribes provide comprehensive documentation services to physicians anywhere in the United States.
              </p>
              <p>
                Using remote EMR access and a strong internet connection, our scribes ensure that your documentation is accurate and timely, 
                allowing you to focus on providing quality care to your patients.
              </p>
            </div>
            <div className="remote-scribes-image-container">
              <img src={remoteScribesImage} alt="Remote Scribes" className="remote-scribes-image" />
            </div>
          </div>
        </section>
      </main>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default RemoteScribesPage;
