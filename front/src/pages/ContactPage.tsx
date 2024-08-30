import { Helmet } from 'react-helmet';
import Navigation from '../items/Navigation';
import ContactForm from '../items/ContactForm';
import Header from '../items/Header';
import Footer from '../items/Footer';
import MapSection from '../items/MapSection';

import './ContactPage.css';

function ContactPage() {
  return (
    <div className="contact-us-page">
      <Helmet>
        <title>Contact Us - Helix Scribe Solutions</title>
        <meta name="description" content="Get in touch with Helix Scribe Solutions. Contact us for more information on our services or any inquiries." />
        <meta name="keywords" content="contact, Helix Scribe Solutions, medical scribe services, inquiries" />
        <meta property="og:title" content="Contact Us - Helix Scribe Solutions" />
        <meta property="og:description" content="Contact Helix Scribe Solutions for more information or inquiries." />
        <meta property="og:image" content="URL_to_a_representative_image" />
        <meta property="og:url" content="https://www.helixscribes.com/contact" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.helixscribes.com/contact" />
      </Helmet>

      <Navigation />
      <header className="contact-header">
        <Header 
          title="Contact Us"
          subtitle="Get in touch!"
        />
      </header>

      <main>
        <MapSection />
        <div className="contact-form-section">
          <ContactForm />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ContactPage;
