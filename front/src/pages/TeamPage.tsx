import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navigation from '../items/Navigation';
import TeamCard from '../items/TeamCard';
import Header from '../items/Header';
import Footer from '../items/Footer';
import ContactForm from '../items/ContactForm';

import jTImage from '../assets/john_throop.jpg';
import tMImage from '../assets/tammy_munger.jpg';
import rCImage from '../assets/ryan_cook.jpg';
import jLImage from '../assets/jackson_lanphear.jpg';
import cVImage from '../assets/clark_vredevoogd.jpg';
import cCImage from '../assets/cass_crandle.jpg';

import scribesImage from '../assets/scribes_1.jpg';
import associateScribesImage from '../assets/scribe_core.jpg';
import seniorScribesImage from '../assets/senior_scribes.jpg';
import teamImage from '../assets/joint_com.jpg';
import scribeTeamImage from '../assets/healthcare_banner.jpg';

import './TeamPage.css';

function TeamPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="team-page">
      <Navigation className="team-navigation" />
      <div className='team-header'>
        <Header 
          title="Our Team"
          subtitle='Meet our team!'
          imageSrc={teamImage}
        />
      </div>
      <div className='team-page-subheading'>
        <h2 className='team-page-first-line'>Helix Advisory Board</h2>
      </div>
      <div className="team-page-container" data-aos="fade-up" data-aos-delay="100">
        <TeamCard 
          imgSrc={jTImage}
          name="John Throop, MD"
          title="Title"
          description="Some text that describes me lorem ipsum ipsum lorem."
          email="john@example.com"
        />
        <TeamCard 
          imgSrc={tMImage}
          name="Tammy Munger"
          title="Title"
          description="Some text that describes me lorem ipsum ipsum lorem."
          email="john@example.com"
        />
        <TeamCard 
          imgSrc={rCImage}
          name="Ryan Cook"
          title="Title"
          description="Some text that describes me lorem ipsum ipsum lorem."
          email="john@example.com"
        />
      </div>

      <div className='team-page-subheading'>
        <h2>Helix Leadership Team</h2>
      </div>
      <div className="team-page-container" data-aos="fade-up" data-aos-delay="300">
        <TeamCard 
          imgSrc={jLImage}
          name="Jackson Lanphear, MD"
          title="Executive Director"
          description="Some text that describes me lorem ipsum ipsum lorem."
          email="john@example.com"
        />
        <TeamCard 
          imgSrc={cVImage}
          name="Clark Vredevoogd"
          title="Director of Operations & Sales"
          description="Some text that describes me lorem ipsum ipsum lorem."
          email="john@example.com"
        />
        <TeamCard 
          imgSrc={cCImage}
          name="Cass Crandle"
          title="Director of Talent"
          description="Some text that describes me lorem ipsum ipsum lorem."
          email="john@example.com"
        />
      </div>
      <br/><br/><br/>
      <div className='team-header' data-aos="fade-up" data-aos-delay="100">
        <Header 
          title="Our Scribes"
          subtitle=''
          imageSrc={scribeTeamImage}
        />
      </div>
      <section className="team-section" data-aos="fade-up" data-aos-delay="100">
        <div className="team-box">
          <div className="team-image-container">
            <img src={scribesImage} alt="Our Scribes" className="team-image" />
          </div>
          <div className="team-text-container">
            <h1>Scribe Core</h1>
            <p>The scribe core is the backbone of our operations. These scribes are typically college-aged individuals who are on a pre-health track; pre-med, pre-PA, or nursing and have a strong background in medical terminology before they enter our training program.</p>
          </div>
        </div>
      </section>

      <section className="team-section" data-aos="fade-up" data-aos-delay="200">
        <div className="team-box">
          <div className="team-image-container">
            <img src={associateScribesImage} alt="Associate Scribes" className="team-image" />
          </div>
          <div className="team-text-container">
            <h1>Associate Scribes</h1>
            <p>The Associate Scribe serves as a trainer and quality assurance team member of a client and is responsible with getting new team members up to speed. They work in collaboration with Senior Scribes on scribe training, auditing, and screening/onboarding of new applicants.</p>
          </div>
        </div>
      </section>

      <section className="team-section" data-aos="fade-up" data-aos-delay="300">
        <div className="team-box">
          <div className="team-image-container">
            <img src={seniorScribesImage} alt="Senior Scribes" className="team-image" />
          </div>
          <div className="team-text-container">
            <h1>Senior Scribes</h1>
            <p>Senior scribes mentor and train our incoming scribes and manage our team members for their specific sites. These employees have demonstrated their mastery of the medical note, displayed professional interactions with providers, and have created and maintained excellent personal relations within our team. Seniors are tasked with working as a scribe, performing monthly audits, assisting with ongoing training, scheduling and any additional task needed from the sites they service.</p>
          </div>
        </div>
      </section>
      <ContactForm />
      <br/>
      <Footer />
    </div>
  );
}

export default TeamPage;
