import React from 'react';
import PropTypes from 'prop-types';
import './ProjectCard.css';

const ProjectCard = ({
    title,
    description,
    technologies = [],
    imageSrc,
    imageAlt = 'Project screenshot'
}) => {
    return (
        <article className="project-card card hover-lift">
            <div className="project-image-container">
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="project-image"
                />
            </div>

            <div className="project-content">
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>

                {technologies.length > 0 && (
                    <div className="project-technologies">
                        {technologies.map((tech, index) => (
                            <span
                                key={index}
                                className={`tag ${index % 2 === 0 ? 'tag-green' : 'tag-violet'}`}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </article>
    );
};

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string),
    imageSrc: PropTypes.string.isRequired,
    imageAlt: PropTypes.string
};

export default ProjectCard;
