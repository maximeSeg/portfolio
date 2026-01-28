import React from 'react';
import GeometricShape from '../components/GeometricShape';
import './About.css';

const About = () => {
    const skills = {
        dataEngineering: [
            'Python', 'SQL', 'dbt', 'Airflow', 'PostgreSQL'
        ],
        dataAnalysis: [
            'Power BI', 'Power Query', 'Excel', 'Pandas', 'NumPy'
        ],
        geospatial: [
            'QGIS', 'Geopandas', 'PostGIS', 'OpenData'
        ],
        dataScience: [
            'scikit-learn', 'Matplotlib', 'Seaborn', 'Machine Learning'
        ]
    };

    return (
        <section id="about" className="about section bg-gray-50">
            <div className="container">
                <h2 className="section-title text-center">À propos</h2>

                <div className="about-grid">
                    <div className="about-image-container fade-in">
                        <img
                            src="/profile-photo.png"
                            alt="Maxime SEGRETAIN"
                            className="about-image"
                        />
                        <GeometricShape
                            type="circle"
                            color="green"
                            size={250}
                            top="-50px"
                            left="-50px"
                        />
                    </div>

                    <div className="about-content fade-in">
                        <p className="about-intro">
                            Développeur Python passionné par le monde de la donnée <strong>BIG DATA</strong>.
                            Ma carrière repose sur un solide socle de connaissances pratiques que j'ai développé
                            mes compétences au sein des entreprises comme la vôtre.
                        </p>

                        <p className="about-description">
                            Mon objectif est de <strong>développer l'aspect data driven pour les entreprises
                                en pleine évolution</strong>. Je me spécialise dans la transformation des données
                            géospatiales en insights actionnables, avec une expertise particulière en
                            géomarketing et analyse spatiale.
                        </p>

                        <div className="skills-section">
                            <h3 className="skills-title">Compétences principales</h3>

                            <div className="skills-grid">
                                <div className="skill-category">
                                    <h4 className="skill-category-title text-green">
                                        🔧 Data Engineering
                                    </h4>
                                    <ul className="skill-list">
                                        {skills.dataEngineering.map((skill, index) => (
                                            <li key={index}>{skill}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="skill-category">
                                    <h4 className="skill-category-title text-violet">
                                        📊 Data Analysis
                                    </h4>
                                    <ul className="skill-list">
                                        {skills.dataAnalysis.map((skill, index) => (
                                            <li key={index}>{skill}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="skill-category">
                                    <h4 className="skill-category-title text-green">
                                        🌍 Géo-données
                                    </h4>
                                    <ul className="skill-list">
                                        {skills.geospatial.map((skill, index) => (
                                            <li key={index}>{skill}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="skill-category">
                                    <h4 className="skill-category-title text-violet">
                                        🤖 Data Science
                                    </h4>
                                    <ul className="skill-list">
                                        {skills.dataScience.map((skill, index) => (
                                            <li key={index}>{skill}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Geometric Shapes */}
            <GeometricShape type="rectangle" color="violet" size={200} top="10%" right="-50px" outline />
            <GeometricShape type="circle" color="green" size={180} bottom="5%" right="10%" outline />
        </section>
    );
};

export default About;
