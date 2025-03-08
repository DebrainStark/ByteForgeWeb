import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedProject = () => {
  return (
    <section className="featured-project-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="featured-project-card slide-in-element">
              <div className="row align-items-center">
                <div className="col-lg-8 mb-4 mb-lg-0">
                  <h2 className="featured-title metallic-text mb-3">
                    Financial Service App 
                    <span className="highlight-word">Success Story</span>
                    <span className="accent-line"></span>
                  </h2>
                  <p className="featured-description mb-4">
                    Discover how our custom-built financial app remained online during a major DDOS attack 
                    that took down competitors using off-the-shelf solutions.
                  </p>
                  <Link to="/portfolio/financial-app" className="forge-button">
                    <i className="bi bi-book button-icon"></i>
                    Read the Case Study
                    <div className="button-glow"></div>
                  </Link>
                </div>
                <div className="col-lg-4">
                  <div className="featured-image">
                    <div className="image-placeholder">
                      [Featured Case Study Image]
                    </div>
                    <div className="featured-image-glow"></div>
                    <div className="featured-image-overlay"></div>
                    
                    <div className="featured-sparks">
                      {[...Array(10)].map((_, i) => (
                        <div 
                          key={i} 
                          className="featured-spark"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: `${Math.random() * 5 + 2}px`,
                            height: `${Math.random() * 5 + 2}px`,
                            animationDuration: `${Math.random() * 1.5 + 1}s`,
                            animationDelay: `${Math.random() * 0.5}s`
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="forge-flames">
                <div className="flame-1"></div>
                <div className="flame-2"></div>
                <div className="flame-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;