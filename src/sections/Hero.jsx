import React from 'react';
import GeometricShape from '../components/GeometricShape';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero section">
            <div className="container">
                <div className="hero-content fade-in">
                    <h1 className="hero-title">
                        Bonjour, je suis <br />
                        <span className="hero-name">Maxime SEGRETAIN</span>
                    </h1>

                    <p className="hero-subtitle">
                        <span className="text-green">Data Engineer</span> &
                        <span className="text-violet"> Data Analyst</span>
                    </p>

                    <p className="hero-description">
                        Spécialiste en <strong>géo-données</strong> (QGIS, Geopandas) avec une expertise
                        en ingénierie et analyse de données. Passionné par la transformation de données
                        complexes en insights actionnables.
                    </p>

                    <div className="hero-cta">
                        <a href="#projects" className="btn btn-primary" onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                        }}>
                            Voir mes projets
                        </a>
                        <a href="#contact" className="btn btn-outline" onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}>
                            Me contacter
                        </a>
                    </div>
                </div>
            </div>

            {/* Geometric Shapes */}
            <GeometricShape type="circle" color="green" size={400} top="-200px" right="-100px" />
            <GeometricShape type="rectangle" color="violet" size={300} bottom="100px" left="-150px" />
            <GeometricShape type="circle" color="violet" size={150} top="40%" right="10%" outline />
            <GeometricShape type="rectangle" color="green" size={200} bottom="20%" right="5%" outline />
        </section>
    );
};

export default Hero;
