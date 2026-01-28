import React from 'react';
import ContactForm from '../components/ContactForm';
import GeometricShape from '../components/GeometricShape';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact section bg-gray-50">
            <div className="container">
                <h2 className="section-title text-center">Me Contacter</h2>

                <div className="contact-grid">
                    <div className="contact-info fade-in">
                        <h3 className="contact-info-title">Discutons de votre projet</h3>
                        <p className="contact-info-text">
                            Je suis toujours ouvert aux nouvelles opportunités et collaborations
                            dans le domaine de la data engineering et de l'analyse de données.
                        </p>

                        <div className="contact-details">
                            <div className="contact-detail">
                                <div className="contact-icon">📧</div>
                                <div>
                                    <div className="contact-label">Email</div>
                                    <a href="mailto:mxim.segretain@gmail.com" className="contact-value">
                                        mxim.segretain@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="contact-detail">
                                <div className="contact-icon">📱</div>
                                <div>
                                    <div className="contact-label">Téléphone</div>
                                    <a href="tel:0628904851" className="contact-value">
                                        06 28 90 48 51
                                    </a>
                                </div>
                            </div>

                            <div className="contact-detail">
                                <div className="contact-icon">💼</div>
                                <div>
                                    <div className="contact-label">LinkedIn</div>
                                    <a
                                        href="https://www.linkedin.com/in/maximesegretain/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="contact-value"
                                    >
                                        maximesegretain
                                    </a>
                                </div>
                            </div>

                            <div className="contact-detail">
                                <div className="contact-icon">📍</div>
                                <div>
                                    <div className="contact-label">Localisation</div>
                                    <div className="contact-value">
                                        Angers, France
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="map-placeholder">
                            <div className="map-placeholder-content">
                                <span className="map-icon">🗺️</span>
                                <p>Carte géographique</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-container fade-in">
                        <ContactForm />
                    </div>
                </div>
            </div>

            {/* Geometric Shapes */}
            <GeometricShape type="circle" color="green" size={250} top="-50px" right="-80px" />
            <GeometricShape type="rectangle" color="violet" size={200} bottom="100px" left="-50px" outline />
        </section>
    );
};

export default Contact;
