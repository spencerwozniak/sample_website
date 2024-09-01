import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '../items/Navigation';
import Header from '../items/Header';
import Footer from '../items/Footer';
import jobData from './jobData.json';
import oppBanner from '../assets/opportunities_banner.jpg';
import './OpportunitiesPage.css';

function OpportunitiesPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredJobs = jobData.filter((job) => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.jobType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="opportunities-page">

      <Helmet>
        <title>Job Opportunities - Healthcare Company</title>
        <meta name="description" content="Explore current job openings at Helix Scribe Solutions. Find your next career opportunity and apply today!" />
        <meta name="keywords" content="scribe, jobs, apply, application, hiring, job opportunities, careers, healthcare jobs, medical scribe jobs, Helix Scribe Solutions, employment" />
        <meta property="og:title" content="Job Opportunities - Healthcare Company" />
        <meta property="og:description" content="Explore job opportunities at Helix Scribe Solutions. Start your career in healthcare today." />
        <meta property="og:image" content="URL_to_a_representative_image" />
        <meta property="og:url" content="https://www.helixscribes.com/opportunities" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.helixscribes.com/opportunities" />
      </Helmet>

      <Navigation />
      <header className='opportunities-header'>
        <Header 
          title="Job Opportunities"
          subtitle="Explore our current job openings and apply today!"
          imageSrc={oppBanner}
        />
      </header>

      <main className="content-wrapper">

      <section className="opportunities-section">

        <div className="box-container" data-aos="fade-up">
          <h1>Join our team!</h1>
          <p>Are you a passionate physician or physician associate dedicated to making a difference in patient care? We are committed to fostering a collaborative and innovative environment where your expertise can thrive. Join our team of compassionate professionals and be a part of a dynamic healthcare community that values excellence, continuous learning, and patient-centered care. Together, we can make a lasting impact on the health and well-being of our community.</p>
        </div>

      </section>


      <section className="opportunities-section">
        <div className="box-container" data-aos="fade-up">
          <div className="opportunities-search-sort">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search from below list"
                className="search-input"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>

            <div className="sort-options">
              <span>Sort by</span>
              <select className="sort-select">
                <option value="relevant">Most Relevant</option>
                <option value="date">Posting Date</option>
              </select>
            </div>
          </div>

          <div className="opportunities-list">
            {filteredJobs.map((job, index) => (
              <div className="job-card" key={index}>
                <div className="job-info">
                  <a
                    href={job.applyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="job-title"
                  >
                    {job.title}
                  </a>
                  <div className="job-location">
                    <span>{job.location}</span>
                  </div>
                  <div className="job-department">
                    <span>{job.department}</span>
                  </div>
                  <div className="job-type">
                    <strong>{job.jobType}</strong>
                  </div>
                </div>
                <div className="apply-button">
                  <a
                    href={job.applyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="apply-now-button"
                  >
                    APPLY NOW
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      </main>

      <Footer />
      
    </div>
  );
}

export default OpportunitiesPage;
