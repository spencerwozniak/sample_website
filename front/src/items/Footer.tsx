import React from 'react';  // Import React to create components.
import './Footer.css';  // Import the CSS file for styling the footer.
import FacebookIcon from '../assets/facebook.png';  // Import the Facebook icon image.
import InstagramIcon from '../assets/instagram.png';  // Import the Instagram icon image.
import LinkedInIcon from '../assets/linkedin.png';  // Import the LinkedIn icon image.
import HelixLogoWhite from '../../public/helix_logo_white.png';  // Import the company logo.

const Footer: React.FC = () => {  // Define the Footer component.
    return (
        <div className="footer-wrapper">  {/* Wrapper div for the footer */}
            <footer className="footer">  {/* The main footer element */}
                <div className="footer-content">  {/* Container for the footer content */}
                    
                    {/* Footer logo and social icons section */}
                    <div className="footer-widget">
                        <div className="footer-logo">
                            {/* Link to the homepage with the company logo */}
                            <a href="/"><img src={HelixLogoWhite} className="img-fluid" alt="Helix logo" /></a>
                        </div>
                        {/* Company motto displayed below the logo */}
                        <p className='footer-motto'>Your company motto.</p>
                        <div className="footer-social">
                            <div className="social-icons">
                                {/* Link to the company's Facebook page with the Facebook icon */}
                                <a href="https://www.facebook.com/helixscribes/" target="_blank">
                                    <img src={FacebookIcon} alt="Facebook" />
                                </a>
                                {/* Link to the company's Instagram page with the Instagram icon */}
                                <a href="https://www.instagram.com/helixscribes/" target="_blank">
                                    <img src={InstagramIcon} alt="Instagram" />
                                </a>
                                {/* Link to the company's LinkedIn page with the LinkedIn icon */}
                                <a href="https://www.linkedin.com/company/helixscribes/" target="_blank">
                                    <img src={LinkedInIcon} alt="LinkedIn" />
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    {/* Footer navigation menu */}
                    <div className="footer-menu">
                        <ul>
                            {/* List of footer navigation links */}
                            <li><a href="/">Home</a></li>
                            <li><a href="/what-we-do">What We Do</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/team">Our Team</a></li>
                            <li><a href="/media">Media</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                            <li><a href="/opportunities">Opportunities</a></li>
                        </ul>
                    </div>
                    
                    {/* Copyright information */}
                    <div className="copyright">
                        <p>Copyright &copy; 2024 Healthcare Company</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;  // Export the Footer component so it can be used in other parts of the app.
