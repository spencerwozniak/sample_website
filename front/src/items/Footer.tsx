import React from 'react';
import './Footer.css';
import FacebookIcon from '../assets/facebook.png';
import InstagramIcon from '../assets/instagram.png';
import LinkedInIcon from '../assets/linkedin.png';
import HelixLogoWhite from '../../public/helix_logo_white.png';

const Footer: React.FC = () => {
    return (
        <div className="footer-wrapper">
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-widget">
                        <div className="footer-logo">
                            <a href="/"><img src={HelixLogoWhite} className="img-fluid" alt="Helix logo" /></a>
                        </div>
                        <p className='footer-motto'>Built by physicians. For physicians.</p>
                        <div className="footer-social">
                            <div className="social-icons">
                                <a href="https://www.facebook.com/helixscribes/" target="_blank"><img src={FacebookIcon} alt="Facebook" /></a>
                                <a href="https://www.instagram.com/helixscribes/" target="_blank"><img src={InstagramIcon} alt="Instagram" /></a>
                                <a href="https://www.linkedin.com/company/helixscribes/" target="_blank"><img src={LinkedInIcon} alt="LinkedIn" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-menu">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/what-we-do">What We Do</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/team">Our Team</a></li>
                            <li><a href="/media">Media</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                            <li><a href="/opportunities">Opportunities</a></li>
                        </ul>
                    </div>
                    <div className="copyright">
                        <p>Copyright &copy; 2024 Helix Scribe Solutions</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
