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

import teamImage from '../assets/joint_com.jpg';

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
        <h2 className='team-page-first-line'>Our Leadership Team</h2>
      </div>
      <div className="team-page-container" data-aos="fade-up" data-aos-delay="100">
        <TeamCard 
          imgSrc={jTImage}
          name="Eugene Krabs"
          title="Founder"
          description="Some text that describes me lorem ipsum ipsum lorem."
          email="krabs@example.com"
        />
        <TeamCard 
          imgSrc={tMImage}
          name="Benson Dunwoody"
          title="Cheif Operating Officer"
          description="Some text that describes me lorem ipsum ipsum lorem."
          email="benson@example.com"
        />
        <TeamCard 
          imgSrc={rCImage}
          name="Montgomery Burns"
          title="Chief Financial Officer"
          description="Some text that describes me lorem ipsum ipsum lorem."
          email="john@example.com"
        />
      </div>


      <ContactForm />
      <br/>
      <Footer />
    </div>
  );
}

export default TeamPage;
