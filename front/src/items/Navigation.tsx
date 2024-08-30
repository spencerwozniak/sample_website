import { useState } from 'react';
import { Link } from "react-router-dom";
import MenuButton from './MenuButton'; // Import the MenuButton component
import './Navigation.css';

const Navigation = () => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    const toggleSubMenu = () => {
        setIsSubMenuOpen(!isSubMenuOpen);
    };

    return (
        <header className="navigation-header">
            <div className="nav-container">
                <div className="left-section">
                    <div className="nav-menu-button">
                        <MenuButton onClick={toggleSubMenu} />
                    </div>
                    <div className="nav-brand">
                        <a href="/">
                            <img src="/helix_logo_text.png" alt="Logo" className="logo" />
                        </a>
                    </div>
                </div>
                <div className="right-section">
                    <ul className="right-side-links">
                        <li>
                            <a className="contact-link" href="/contact">CONTACT US</a>
                        </li>
                        <li className="right-side-links--big">
                            <a className="right-side-links__link" href="/opportunities" rel="noopener noreferrer">
                                <span className="right-side-links__rotating-text">OPPORTUNITIES</span>
                                <span className="right-side-links__rotating-text">APPLY NOW</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={`dropdown-menu ${isSubMenuOpen ? 'open' : 'closed'}`}>
                    <section className="nav-column">
                        <Link to="/what-we-do" className="nav-column__heading">What We Do</Link>
                        <ul className="nav-column__links">
                            <li><Link to="/what-we-do/live-scribes" className="nav-column__link">Live Scribes</Link></li>
                            <li><Link to="/what-we-do/remote-scribes" className="nav-column__link">Remote Scribes</Link></li>
                            <li><Link to="/contact" className="nav-column__link">Contact Us</Link></li>
                        </ul>
                    </section>
                    <section className="nav-column">
                        <Link to="/about" className="nav-column__heading">About Us</Link>
                        <ul className="nav-column__links">
                            <li><Link to="/about/mission" className="nav-column__link">Our Mission</Link></li>
                            <li><Link to="/about/history" className="nav-column__link">Our History</Link></li>
                            <li><Link to="/team" className="nav-column__link">Our Team</Link></li>
                        </ul>
                    </section>
                    <section className="nav-column">
                        <Link to="/media" className="nav-column__heading">Media</Link>
                        <ul className="nav-column__links">
                            <li><a href="https://www.facebook.com/helixscribes/" className="nav-column__link" target="_blank">Facebook</a></li>
                            <li><a href="https://www.instagram.com/helixscribes/" className="nav-column__link" target="_blank">Instagram</a></li>
                            <li><a href="https://www.linkedin.com/company/helixscribes/" className="nav-column__link" target="_blank">LinkedIn</a></li>
                        </ul>
                    </section>
                </div>
            </div>
        </header>
    );
};

export default Navigation;
