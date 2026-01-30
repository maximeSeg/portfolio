import React from 'react';
import ProjectCard from '../components/ProjectCard';
import GeometricShape from '../components/GeometricShape';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Pipeline Data Engineering - dbt + Airflow',
            description: 'Architecture de données en couches Bronze-Silver-Gold pour la transformation et l\'orchestration de données à grande échelle. Pipeline automatisé assurant la qualité des données et le versioning.',
            technologies: ['dbt', 'Airflow', 'SQL', 'Python', 'PostgreSQL'],
            imageSrc: `${import.meta.env.BASE_URL}project-dbt-airflow.png`,
            imageAlt: 'Schéma pipeline Bronze-Silver-Gold'
        },
        {
            title: 'SIG Entreprise - OpenData',
            description: 'Système d\'Information Géographique basé sur des données ouvertes pour l\'analyse spatiale et la cartographie métier. Solution complète de géomarketing et d\'analyse territoriale.',
            technologies: ['QGIS', 'Geopandas', 'PostgreSQL', 'PostGIS', 'Python'],
            imageSrc: `${import.meta.env.BASE_URL}project-sig.png`,
            imageAlt: 'Carte SIG avec données géographiques'
        },
        {
            title: 'Catégorisation Consommations Électriques',
            description: 'Classification et analyse des consommations électriques de silos industriels. Machine learning pour identifier les patterns de consommation et optimiser l\'efficacité énergétique.',
            technologies: ['Python', 'scikit-learn', 'Pandas', 'Power BI', 'Machine Learning'],
            imageSrc: `${import.meta.env.BASE_URL}project-elec.png`,
            imageAlt: 'Dashboard analyse consommations électriques'
        }
    ];

    return (
        <section id="projects" className="projects section">
            <div className="container">
                <h2 className="section-title text-center">Projets Réalisés</h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            {...project}
                        />
                    ))}
                </div>
            </div>

            {/* Geometric Shapes */}
            <GeometricShape type="circle" color="violet" size={300} top="0" left="-100px" />
            <GeometricShape type="rectangle" color="green" size={250} bottom="-50px" right="-80px" />
            <GeometricShape type="circle" color="green" size={120} top="30%" right="5%" outline />
        </section>
    );
};

export default Projects;
