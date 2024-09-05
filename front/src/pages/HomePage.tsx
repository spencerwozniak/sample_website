// Importing necessary modules and components
import { useEffect } from 'react';  // useEffect is a React Hook that allows us to run side effects in our component.
import AOS from 'aos';  // AOS is a JavaScript library used to animate elements on scroll.
import 'aos/dist/aos.css';  // Importing the CSS file for AOS animations.

import { Link } from 'react-router-dom';  // Link is used to create navigation links between different pages in a React Router application.
import { Helmet } from 'react-helmet';  // Helmet allows us to manage the document head, like setting the page title and meta tags.

import Navigation from '../items/Navigation';  // Importing the navigation bar component.
import Header from '../items/Header';  // Importing the header section for the page.
import Footer from '../items/Footer';  // Importing the footer section for the page.
import ContactForm from '../items/ContactForm';  // Importing the contact form component.
import Testimonials from '../items/Testimonials';  // Importing the testimonials section.
import ImpactSection from '../items/ImpactSection';  // Importing the impact section (likely showing the company's achievements or mission).
import Scribes1 from '../assets/healthcare_banner.jpg';  // Importing an image asset for use in the header.
import healthcareBanner from '../assets/locations.jpg';  // Importing an image for use in the "Why us?" section.
import handsBanner from '../assets/holding_hands.jpg';  // Importing an image for use in the "We are here to Help" section.
import './HomePage.css';  // Importing the CSS file that styles this component.

function HomePage() {
  // This hook runs the first time the HomePage component is rendered. It initializes the AOS library for scroll animations.
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration (1 second).
      once: true,  // The animation should happen only once, not every time you scroll back to the element.
    });
  }, []);  // Empty array as a second argument means this effect runs only once, after the component mounts.

  // The return statement defines what gets displayed on the screen when the HomePage component is rendered.
  return (
    <div className="home-page"> {/* The main container for the HomePage component, styled by the .home-page CSS class */}
      <Helmet>
        {/* The Helmet component is used to manage the document's head, like the title and meta tags */}
        <title>Healthcare Company</title> {/* Sets the page title displayed in the browser tab */}
        <meta name="description" content="Helix Scribe Solutions provides medical scribe services..." />
        <meta name="keywords" content="scribe, medical scribe, healthcare, EMR systems..." />
        {/* These meta tags are important for SEO and social media sharing */}
        <meta property="og:title" content="Healthcare Company" />
        <meta property="og:description" content="Built by physicians. For physicians..." />
        <meta property="og:image" content="URL_to_a_representative_image" />
        <meta property="og:url" content="https://www.helixscribes.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.helixscribes.com" />
      </Helmet>

      {/* Navigation bar component */}
      <Navigation />
      
      {/* Header section */}
      <header className="home-header"> {/* A container for the header, styled by the .home-header CSS class */}
        <Header 
          title="Healthcare Company"  // Passing title text to the Header component.
          subtitle="Your company motto."  // Passing subtitle text to the Header component.
          imageSrc={Scribes1}  // Passing the image to be displayed in the header.
        />
      </header>

      {/* Main content of the page */}
      <main className="content-wrapper">
        {/* First section with a banner and text */}
        <section className="home-section"> {/* Styled section containing image and text */}
          <div className="home-box" data-aos="fade-up"> {/* The data-aos attribute defines the scroll animation */}
            <div className="home-image-container"> {/* Container for the image in the first section */}
              <img src={handsBanner} alt="Healthcare professionals holding hands" loading="lazy" className="home-image" /> {/* Image with alt text for accessibility */}
            </div>
            <div className="home-text-container"> {/* Container for the text in the first section */}
              <h1>We are here to Help</h1> {/* Title in the first section */}
              <p>Our company is one of the leading providers of medical services...</p>
              <Link to='/what-we-do' className="home-nav-button">Learn more</Link> {/* Link to another page */}
            </div>
          </div>
        </section>

        {/* Second section explaining "Why us?" */}
        <section className="home-section"> 
          <div className="home-box" data-aos="fade-up" data-aos-delay="100"> {/* Animation starts with a delay */}
            <div className="home-text-container"> {/* Container for the text in the second section */}
              <h1>Why us?</h1>
              <ul> {/* List of company benefits */}
                <li>We implement a robust training program...</li>
                <li>We require quarterly continuing medical education...</li>
                <li>We average over 99% shift coverage across all clients.</li>
              </ul>
              <Link to='/about' className="home-nav-button">Learn more</Link> {/* Link to another page */}
            </div>
            <div className="home-image-container"> {/* Container for the image in the second section */}
              <img src={healthcareBanner} alt="Healthcare locations" loading="lazy" className="home-image" /> {/* Image with alt text */}
            </div>
          </div>
        </section>

        {/* Section combining the impact and testimonials components */}
        <div className="impact-testimonials-container">
          <ImpactSection />  {/* Component displaying the company's impact */}
          <Testimonials />  {/* Component displaying testimonials from clients or patients */}
        </div>
      </main>

      {/* Contact form component */}
      <ContactForm />

      {/* Footer component */}
      <Footer />
    </div>
  );
}

export default HomePage;  // Exporting the component so it can be imported and used in other parts of the application.
