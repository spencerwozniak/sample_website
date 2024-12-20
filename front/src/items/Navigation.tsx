import { useState, useEffect } from 'react';  // Importing useState to manage component state.
import { Link } from "react-router-dom";  // Importing Link from react-router-dom for navigation between different routes/pages.
import MenuButton from './MenuButton';  // Importing a custom component called MenuButton.
import './Navigation.css';  // Importing the CSS file for the navigation styles.

let mobileThreshold: number = 960;

const Navigation = () => {
    // useState hook to track whether the submenu is open or closed. Initial state is 'false' (closed).
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < mobileThreshold); // Mobile view threshold

    // Function to toggle the submenu open and closed by flipping the boolean value.
    const toggleSubMenu = () => {
        setIsSubMenuOpen(!isSubMenuOpen);  // Sets isSubMenuOpen to the opposite of its current value.
    };

    // Update `isMobile` state on window resize
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < mobileThreshold);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header className="navigation-header">  {/* Defines the header section of the page, specifically for navigation */}
            <div className="nav-container">  {/* Container for the entire navigation bar */}
                
                    {/* Menu button to toggle the submenu */}
                    {isMobile ? (
                        <div className="left-section">
                            <div className="nav-menu-button">
                                <MenuButton onClick={toggleSubMenu} />  {/* The MenuButton triggers the toggleSubMenu function when clicked */}
                            </div>
                            <div className="nav-brand">
                                <a href="/">  {/* Clicking this link redirects to the homepage ("/") */}
                                    <img src="/helix_logo_text.png" alt="Logo" className="logo" />  {/* Displays the company logo */}
                                </a>
                            </div>
                        </div>
                    ) : (
                        <div className="left-section">
                            <div className="nav-brand">
                                <a href="/">  {/* Clicking this link redirects to the homepage ("/") */}
                                    <img src="/helix_logo_text.png" alt="Logo" className="logo" />  {/* Displays the company logo */}
                                </a>
                            </div>
                            <ul className="nav-main-links">
                                <li><Link to="/what-we-do" className="nav-main-link">What We Do</Link></li>
                                <li><Link to="/about" className="nav-main-link">About Us</Link></li>
                                <li><Link to="/media" className="nav-main-link">Media</Link></li>
                            </ul>
                        </div>
                    )}
                
                {/* Right section of the navigation bar */}
                <div className="right-section">
                    <ul className="right-side-links">  {/* List of links on the right side of the navigation bar */}
                        <li>
                            {/* Contact link */}
                            <a className="contact-link" href="/contact">CONTACT US</a>  {/* Navigates to the Contact Us page */}
                        </li>
                        <li className="right-side-links--big">
                            {/* A link with rotating text for Opportunities and Apply Now */}
                            <a className="right-side-links__link" href="/opportunities" rel="noopener noreferrer">
                                <span className="right-side-links__rotating-text">OPPORTUNITIES</span>  {/* First text item (OPPORTUNITIES) */}
                                <span className="right-side-links__rotating-text">APPLY NOW</span>  {/* Second text item (APPLY NOW) */}
                            </a>
                        </li>
                    </ul>
                </div>
                
                {/* Submenu dropdown section */}
                <div className={`dropdown-menu ${isSubMenuOpen ? 'open' : 'closed'}`}>  {/* Dynamically assigns 'open' or 'closed' class based on the state */}
                    {/* First column of the submenu */}
                    <section className="nav-column">
                        <Link to="/what-we-do" className="nav-column__heading">What We Do</Link>  {/* Link to What We Do page */}
                        <ul className="nav-column__links">
                            <li><Link to="/what-we-do/live-scribes" className="nav-column__link">Physicians</Link></li>  {/* Link to Live Scribes (Physicians) */}
                            <li><Link to="/what-we-do/remote-scribes" className="nav-column__link">Physician Associates</Link></li>  {/* Link to Remote Scribes (Physician Associates) */}
                            <li><Link to="/contact" className="nav-column__link">Contact Us</Link></li>  {/* Link to Contact Us page */}
                        </ul>
                    </section>

                    {/* Second column of the submenu */}
                    <section className="nav-column">
                        <Link to="/about" className="nav-column__heading">About Us</Link>  {/* Link to About Us page */}
                        <ul className="nav-column__links">
                            <li><Link to="/about/mission" className="nav-column__link">Our Mission</Link></li>  {/* Link to Our Mission */}
                            <li><Link to="/about/history" className="nav-column__link">Our History</Link></li>  {/* Link to Our History */}
                            <li><Link to="/team" className="nav-column__link">Our Team</Link></li>  {/* Link to Our Team */}
                        </ul>
                    </section>

                    {/* Third column of the submenu */}
                    <section className="nav-column">
                        <Link to="/media" className="nav-column__heading">Media</Link>  {/* Link to Media page */}
                        <ul className="nav-column__links">
                            <li><a href="https://www.facebook.com/helixscribes/" className="nav-column__link" target="_blank">Facebook</a></li>  {/* External link to Facebook page */}
                            <li><a href="https://www.instagram.com/helixscribes/" className="nav-column__link" target="_blank">Instagram</a></li>  {/* External link to Instagram page */}
                            <li><a href="https://www.linkedin.com/company/helixscribes/" className="nav-column__link" target="_blank">LinkedIn</a></li>  {/* External link to LinkedIn page */}
                        </ul>
                    </section>
                </div>
            </div>
        </header>
    );
};

export default Navigation;  // Exports the Navigation component so it can be used in other parts of the app.
