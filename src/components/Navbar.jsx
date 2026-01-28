import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [theme, setTheme] = useState(() => {
        // Get theme from localStorage or default to 'light'
        return localStorage.getItem('theme') || 'light';
    });

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Apply theme to body
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <button
                onClick={toggleTheme}
                className="theme-toggle"
                aria-label="Toggle dark mode"
                title={theme === 'light' ? 'Activer le mode sombre' : 'Activer le mode clair'}
            >
                {theme === 'light' ? '◐' : '◑'}
            </button>

            <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
                <div className="container">
                    <div className="navbar-content">
                        <a href="#home" className="navbar-logo" onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('home');
                        }}>
                            <span className="logo-text">Maxime</span>
                            <span className="logo-accent">SEGRETAIN</span>
                        </a>

                        <ul className="navbar-links">
                            <li>
                                <a href="#home" onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection('home');
                                }}>
                                    Accueil
                                </a>
                            </li>
                            <li>
                                <a href="#about" onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection('about');
                                }}>
                                    À propos
                                </a>
                            </li>
                            <li>
                                <a href="#projects" onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection('projects');
                                }}>
                                    Projets
                                </a>
                            </li>
                            <li>
                                <a href="#contact" onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection('contact');
                                }}>
                                    Contact
                                </a>
                            </li>
                        </ul>

                        <a
                            href="https://www.linkedin.com/in/maximesegretain/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary navbar-cta"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
