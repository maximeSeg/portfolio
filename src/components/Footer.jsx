import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3 className="footer-title">Maxime SEGRETAIN</h3>
                        <p className="footer-text">
                            Data Engineer & Analyst<br />
                            Spécialiste en géo-données
                        </p>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-subtitle">Navigation</h4>
                        <ul className="footer-links">
                            <li>
                                <a href="#home" onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                                }}>
                                    Accueil
                                </a>
                            </li>
                            <li>
                                <a href="#about" onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                                }}>
                                    À propos
                                </a>
                            </li>
                            <li>
                                <a href="#projects" onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                                }}>
                                    Projets
                                </a>
                            </li>
                            <li>
                                <a href="#contact" onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                }}>
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-subtitle">Contact</h4>
                        <ul className="footer-links">
                            <li>
                                <a href="mailto:mxim.segretain@gmail.com">
                                    mxim.segretain@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:0628904851">
                                    06 28 90 48 51
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/maximesegretain/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {currentYear} Maxime SEGRETAIN. Tous droits réservés.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
