import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`project-card ${isHovered ? 'is-hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-image">
        <div className="project-image-placeholder">
          [Project Image: {project.name}]
        </div>
        <div className="project-image-overlay"></div>
        
        {isHovered && (
          <div className="project-sparks">
            {[...Array(6)].map((_, i) => (
              <div 
                key={i} 
                className="project-spark"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 4 + 2}px`,
                  height: `${Math.random() * 4 + 2}px`,
                  animationDuration: `${Math.random() * 1 + 0.5}s`,
                  animationDelay: `${Math.random() * 0.2}s`
                }}
              ></div>
            ))}
          </div>
        )}
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{project.name}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-tech">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-badge">
              {tech}
              <div className="badge-glow"></div>
            </span>
          ))}
        </div>
        
        <Link to={`/portfolio/${project.id}`} className="forge-button">
          <i className="bi bi-file-earmark-text button-icon"></i>
          View Case Study
          <div className="button-glow"></div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;