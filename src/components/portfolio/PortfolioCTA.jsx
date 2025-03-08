import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioCTA = () => {
  return (
    <section className="portfolio-cta-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="forge-cta-card slide-in-element">
              <div className="forge-fire">
                <div className="fire-base">
                  <div className="coal coal-1"></div>
                  <div className="coal coal-2"></div>
                  <div className="coal coal-3"></div>
                </div>
                <div className="fire-glow"></div>
                <div className="fire-flames">
                  <div className="flame flame-1"></div>
                  <div className="flame flame-2"></div>
                  <div className="flame flame-3"></div>
                </div>
                <div className="fire-sparks"></div>
              </div>
              
              <div className="forge-cta-content text-center">
                <h2 className="metallic-text mb-4">Ready to Start Your Digital Project?</h2>
                <p className="forge-tagline mb-4">
                  Let's discuss how our <span className="text-accent">digital craftsmanship</span> approach can 
                  help you build something that lasts.
                </p>
                <Link to="/contact" className="forge-button forge-button-large">
                  <i className="bi bi-anvil button-icon"></i>
                  Start Crafting
                  <div className="button-glow"></div>
                </Link>
              </div>
              
              <div className="forge-tools">
                <div className="tool-item tool-poker"></div>
                <div className="tool-tongs">
                  <div className="tongs-handle"></div>
                  <div className="tongs-head"></div>
                </div>
                <div className="forge-material"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-text">SCROLL UP</div>
        <div className="scroll-arrows">
          <div className="scroll-arrow scroll-arrow-1"></div>
          <div className="scroll-arrow scroll-arrow-2"></div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioCTA;