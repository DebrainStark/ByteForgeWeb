import React from 'react';

const TechStack = ({ technologies }) => {
  return (
    <section className="tech-stack-section py-5 bg-forge-dark">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <div className="forge-accent-line mb-4"></div>
            <h2 className="mb-5 metallic-text">Our Technology Stack</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="tech-grid">
              {technologies.map((tech, index) => (
                <div 
                  key={index} 
                  className={`tech-item fade-in-element delay-${index % 5 + 1}`}
                >
                  <div className="tech-icon">
                    <i className={`bi bi-${tech.icon}`}></i>
                    <div className="tech-icon-glow"></div>
                  </div>
                  <h5 className="tech-name">{tech.name}</h5>
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <p className="tech-note">
                We choose our tools carefully, focusing on technologies that provide the best balance of 
                performance, reliability, and longevity for each specific project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;