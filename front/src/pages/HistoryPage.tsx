import Navigation from '../items/Navigation';
import Header from '../items/Header';
import Footer from '../items/Footer';
import Timeline from '../items/Timeline';
import ContactForm from '../items/ContactForm';
import './HistoryPage.css';
import historyBanner from '../assets/history.jpg';

function HistoryPage() {
  return (
    <div className="history-page">
      <Navigation />
      <div className='history-header'>
        <Header 
          title="Our History"
          subtitle="Learn about our journey and milestones."
          imageSrc={historyBanner}
        />
      </div>

      <main className="content-wrapper">
        <section className="history-intro">
          <h1>Helix Scribe Solutions Timeline</h1>
          <p>Explore the key milestones in the history of Helix Scribe Solutions. From our founding to becoming a leader in the medical scribe industry, discover how we've evolved over the years.</p>
        </section>

        <Timeline /> {/* Timeline Component */}

      </main>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default HistoryPage;
