import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';

const ProjectGrid = ({ projects, onClearFilters }) => {
  return (
    <section className="projects-grid-section py-5">
      <div className="container">
        <div className="row g-4">
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <div key={project.id} className="col-md-6 col-lg-4">
                <div className={`slide-in-element delay-${index % 5 + 1}`}>
                  <ProjectCard project={project} />
                </div>
              </div>
            ))
          ) : (
            <div className="col-12">
              <div className="no-projects-container text-center py-5">
                <div className="anvil-container mb-4">
                  <svg width="60" height="60" viewBox="0 0 100 100">
                    <path className="anvil-body" d="M20,60 L80,60 L70,80 L30,80 Z" />
                    <path className="anvil-neck" d="M40,40 L60,40 L60,60 L40,60 Z" />
                    <path className="anvil-top" d="M30,30 L70,30 L70,40 L30,40 Z" />
                    <circle className="anvil-highlight" cx="65" cy="35" r="3" />
                  </svg>
                </div>
                <h3 className="metallic-text mb-4">No projects match your current filters</h3>
                <button 
                  className="forge-button"
                  onClick={onClearFilters}
                >
                  <i className="bi bi-arrow-repeat button-icon"></i>
                  Clear Filters
                  <div className="button-glow"></div>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;