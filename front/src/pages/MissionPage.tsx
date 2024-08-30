import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navigation from '../items/Navigation';
import Footer from '../items/Footer';
import Header from '../items/Header';
import ContactForm from '../items/ContactForm';
import missionBanner from '../assets/scribe_mission_banner.jpg';
import MissionImage1 from '../assets/scribe_working_1.jpg';
import MissionImage2 from '../assets/live_scribe.jpg';
import MissionImage3 from '../assets/scribe_core.jpg';
import MissionImage4 from '../assets/opportunities.jpg';
import MissionImage5 from '../assets/scribe_working_2.jpg';
import MissionImage6 from '../assets/joint_com.jpg';
import MissionImage7 from '../assets/senior_scribes.jpg';
import './MissionPage.css';

const MissionPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="mission-page">
      <Navigation />
      <header className="mission-header">
        <Header 
          title="Our Mission"
          subtitle="Enhancing healthcare with excellent medical scribing."
          imageSrc={missionBanner}
        />
      </header>

      <main className="content-wrapper">
        <section className="mission-section" data-aos="fade-up">
          <div className="mission-box">
            <div className="mission-text-container">
              <h1>Mission Statement</h1>
              <p>Our mission is very simple: to make providers more efficient. We take on the documentation and other administrative tasks so that the providers can focus on their patients. This results in consistent documentation standards and happier providers who are able to go home on time.</p> 
              <p>Our goal, while lofty, is achievable: to provide best in class scribe service to our clients. We do not want to be the biggest scribe company, but we will be the best.</p>
            </div>
            <div className="mission-image-container">
              <img src={MissionImage1} alt="Our Mission" loading="lazy" className="mission-image" />
            </div>
          </div>
        </section>

        <section className="mission-section" data-aos="fade-up" data-aos-delay="100">
          <div className="mission-box">
            <div className="mission-image-container">
              <img src={MissionImage2} alt="Dedicated to Providers" loading="lazy" className="mission-image" />
            </div>
            <div className="mission-text-container">
              <h1>Dedicated to Providers</h1>
              <p>We understand the challenges providers face with increasing administrative tasks. Our mission is to alleviate these burdens, allowing providers to spend more time with patients, leading to better outcomes for patients and more fulfilling careers for providers.</p>
            </div>
          </div>
        </section>

        <section className="mission-section" data-aos="fade-up" data-aos-delay="200">
          <div className="mission-box">
            <div className="mission-image-container">
              <img src={MissionImage3} alt="Commitment to Excellence" loading="lazy" className="mission-image" />
            </div>
            <div className="mission-text-container">
              <h1>Commitment to Excellence</h1>
              <p>Our commitment is not just to be efficient but to provide excellence in all that we do. We strive for continuous improvement, ensuring that we offer the best service possible to our clients and their patients.</p>
            </div>
          </div>
        </section>

        <section className="mission-section" data-aos="fade-up" data-aos-delay="300">
          <div className="mission-box">
            <div className="mission-text-container">
              <h1>Robust Training Program</h1>
              <p>Helix has developed a comprehensive training program to ensure our scribes are fully prepared for your clinical environment.</p>
              <ul className="commitment-list">
                <li>Candidates engage in 80 hours of training prior to becoming a scribe.</li>
                <li>Helix has teamed up with Grand Valley State University to create the Academy, which all scribes must complete.</li>
                <li>The Academy is a 6-week course with 40 hours of online training, as well as in-person simulations.</li>
                <li>Following completion of the Academy, candidates undergo an additional 40 hours of in-person clinical training.</li>
              </ul>
              <a href="https://www.gvsu.edu/scribe/" className="mission-nav-button" target="_blank">Learn More about Our Scribe Academy</a>
            </div>
            <div className="mission-image-container">
              <img src={MissionImage4} alt="Training Program" loading="lazy" className="mission-image" />
            </div>
          </div>
        </section>

        <section className="mission-section" data-aos="fade-up" data-aos-delay="400">
          <div className="mission-box">
            <div className="mission-text-container">
              <h1>Monthly Auditing</h1>
              <p>Our auditing program includes monthly chart reviews and one-on-one feedback sessions to maintain high standards of accuracy and quality. This continuous monitoring ensures that our scribes consistently deliver the best documentation possible.</p>
            </div>
            <div className="mission-image-container">
              <img src={MissionImage5} alt="Auditing Program" loading="lazy" className="mission-image" />
            </div>
          </div>
        </section>

        <section className="mission-section" data-aos="fade-up" data-aos-delay="500">
          <div className="mission-box">
            <div className="mission-text-container">
              <h1>Continuing Education</h1>
              <p>Helix requires all scribes to complete quarterly continuing medical education (CME) modules. These modules ensure that our team remains up-to-date with the latest practices and standards, consistently delivering top-tier service.</p>
            </div>
            <div className="mission-image-container">
              <img src={MissionImage6} alt="Continuing Education" loading="lazy" className="mission-image" />
            </div>
          </div>
        </section>

        <section className="mission-section" data-aos="fade-up" data-aos-delay="600">
          <div className="mission-box">
            <div className="mission-text-container">
              <h1>Unmatched Shift Coverage</h1>
              <p>Helix averages over 99% shift coverage across all clients. This reliability ensures that your practice runs smoothly without any disruptions, allowing providers to maintain their focus on patient care.</p>
            </div>
            <div className="mission-image-container">
              <img src={MissionImage7} alt="Shift Coverage" loading="lazy" className="mission-image" />
            </div>
          </div>
        </section>
      </main>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default MissionPage;
