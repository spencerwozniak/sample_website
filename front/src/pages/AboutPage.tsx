import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Helmet } from 'react-helmet';
import Navigation from '../items/Navigation';
import ContactForm from '../items/ContactForm';
import Footer from '../items/Footer';
import Header from '../items/Header';
import aboutBanner from '../assets/about_us_banner.jpg';
import ScribeWorking1 from '../assets/scribe_working_1.jpg';
import ourHistory from '../assets/history.jpg';
import ourTeam from '../assets/senior_scribes.jpg';
import scribeMission from '../assets/scribe_mission.jpg';
import './AboutPage.css';

const AboutPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="about-page">
      <Helmet>
        <title>About Us - Helix Scribe Solutions</title>
        <meta name="description" content="Learn more about Helix Scribe Solutions, our mission, history, and team of highly qualified medical scribes." />
        <meta name="keywords" content="about us, Helix, medical scribes, healthcare solutions, mission, history, team" />
        <meta property="og:title" content="About Us - Helix Scribe Solutions" />
        <meta property="og:description" content="Discover the mission, history, and team behind Helix Scribe Solutions." />
        <meta property="og:image" content="URL_to_a_representative_image" />
        <meta property="og:url" content="https://www.helixscribes.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.helixscribes.com/about" />
      </Helmet>

      <Navigation />
      <header className="about-header">
        <Header 
          title="About Us"
          subtitle="Helix Scribe Solutions provides highly qualified and trained medical scribes to various medical settings."
          imageSrc={aboutBanner}
        />
      </header>

      <main className="content-wrapper">
        <section className="about-section" data-aos="fade-up">
          <div className="about-box">
            <div className="about-image-container">
              <img src={scribeMission} alt="Our Mission" loading="lazy" className="about-image" />
            </div>
            <div className="about-text-container">
              <h1>Our Mission</h1>
              <p>Our mission is very simple: to make providers more efficient. We take on the documentation and other administrative tasks so providers can focus on their patients. This results in consistent documentation standards, happier providers, and happier patients.</p>
              <p>Our goal, while lofty, is achievable: to provide best-in-class scribe service to our clients. We do not want to be the biggest scribe company, but we will be the best.</p>
              <a href='/about/mission' className="about-nav-button"><b>Read more</b></a>
            </div>
          </div>
        </section>
        
        <section className="about-section" data-aos="fade-up" data-aos-delay="100">
          <div className="about-box">
            <div className="about-image-container">
              <img src={ourHistory} alt="Our History" loading="lazy" className="about-image" />
            </div>
            <div className="about-text-container">
              <h1>Our History</h1>
              <p>Helix Scribe Solutions began when a group of forward-thinking physicians saw the impact the introduction of the EMR was having around the nation on provider efficiency metrics.</p>
              <p>After reviewing companies offering scribe services, they decided to build their own organization with a focus on robust training, high-caliber scribes, and a commitment to excellence. The first scribes came online during the summer of 2015 and Helix has been expanding ever since.</p>
              <a href='/about/history' className="about-nav-button"><b>Learn more</b></a>
            </div>
          </div>
        </section>
        
        <section className="about-section" data-aos="fade-up" data-aos-delay="200">
          <div className="about-box">
            <div className="about-image-container">
              <img src={ourTeam} alt="Our Team" loading="lazy" className="about-image" />
            </div>
            <div className="about-text-container">
              <h1>Our Team</h1>
              <p>We are a family. Helix works with scribes to ensure that they are equipped and trained to be successful. A well-trained and well-supported medical scribe helps ensure that medical charts are properly and efficiently prepared, which allows both the provider and the patient to have a better experience.</p>
              <p>We perform monthly audits and offer continuing medical education so our scribes are constantly improving to better serve our providers and organizations.</p>
              <a href='/team' className="about-nav-button"><b>Meet our Team</b></a>
            </div>
          </div>
        </section>

        <section className="about-section" data-aos="fade-up" data-aos-delay="300">
          <div className="about-box">
            <div className="about-text-container">
              <h1>What is a medical scribe?</h1>
              <p>"A documentation assistant or scribe may be an unlicensed, certified, (MA, ophthalmic tech) or licensed person (RN, LPN, PA) who provides documentation assistance to a physician or other licensed practitioner (such as a nursing practitioner) consistent with the roles and responsibilities defined in the job description, and within the scope of his or her certification or licensure." - <a href='https://www.jointcommission.org/standards/standard-faqs/nursing-care-center/record-of-care-treatment-and-services-rc/000002210/' className="about-link" target="_blank"><b>The Joint Commission.</b></a></p>
              <p>Informally, the medical scribe is there to make providers (and others) more efficient. Their job is to handle the data entry so that the provider can focus on the patient. Having a scribe allows the provider to cognitively offload the more mundane parts of their job and focus on medical decision-making and diagnosis.</p>
            </div>
            <div className="about-image-container">
              <img src={ScribeWorking1} alt="What is a medical scribe?" loading="lazy" className="about-image" />
            </div>
          </div>
        </section>
      </main>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default AboutPage;
