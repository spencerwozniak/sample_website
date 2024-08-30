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
        <title>Job Opportunities - Helix Scribe Solutions</title>
        <meta name="description" content="Explore current job openings at Helix Scribe Solutions. Find your next career opportunity and apply today!" />
        <meta name="keywords" content="scribe, jobs, apply, application, hiring, job opportunities, careers, healthcare jobs, medical scribe jobs, Helix Scribe Solutions, employment" />
        <meta property="og:title" content="Job Opportunities - Helix Scribe Solutions" />
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
          <p>Get a leg up in your journey of furthering your medical career and join Helix! Our job openings are great opportunities for those looking for positions in the medical field. We complete in-house training for all positions, teaching you how to operate in fast-paced and exciting environments. Learn from medical professionals every day and gain valuable experience in the clinical settings we service.</p>
          <p>Helix recognizes that the healthcare industry is ever-changing and we strive to stay up-to-date on the opportunities that we can provide. We are in search of highly-motivated individuals that connect with our values:</p>
          <ol className="values-list">
            <li>Excellence</li>
            <li>Continuous Improvement</li>
            <li>Entrepreneurship</li>
            <li>Integrity</li>
            <li>Education</li>
            <li>Innovation</li>
            <li>Stewardship</li>
          </ol>
          <p>As a valued partner in providing excellent medical care, we have high expectations of our team members. Our team is family and we strive to help you engage and learn from the work you complete. Helix has your future interests in mind and are happy to work with you to excel in the work being completed, but also connect with the field of medicine and provide unique opportunities to help you further your career.</p>
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
