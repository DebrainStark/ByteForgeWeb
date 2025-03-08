import React from 'react';

const PhilosophySection = () => {
  return (
    <section className="philosophy-section py-5">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <div className="forge-accent-line mb-4 mx-auto"></div>
            <h2 className="section-title metallic-text mb-4">
              The Digital Blacksmith's Code
              <span className="accent-line centered-line"></span>
            </h2>
            <p className="section-lead fade-in-element">
              Our approach to development is grounded in the timeless principles of craftsmanship, 
              adapted for the <span className="text-accent">digital age</span>.
            </p>
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="philosophy-card template-card slide-in-element">
              <div className="card-glow"></div>
              <div className="card-content">
                <h4 className="philosophy-title mb-3">Template Farms</h4>
                <ul className="philosophy-list">
                  <li className="philosophy-item">
                    <i className="bi bi-x-circle negative-icon"></i>
                    <span>Mass-produced solutions</span>
                  </li>
                  <li className="philosophy-item">
                    <i className="bi bi-x-circle negative-icon"></i>
                    <span>One-size-fits-all approach</span>
                  </li>
                  <li className="philosophy-item">
                    <i className="bi bi-x-circle negative-icon"></i>
                    <span>Quick but inflexible</span>
                  </li>
                  <li className="philosophy-item">
                    <i className="bi bi-x-circle negative-icon"></i>
                    <span>Bloated with unnecessary features</span>
                  </li>
                  <li className="philosophy-item">
                    <i className="bi bi-x-circle negative-icon"></i>
                    <span>Difficult to maintain and scale</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 mb-4">
            <div className="philosophy-card forge-card slide-in-element delay-1">
              <div className="card-glow"></div>
              <div className="card-content">
                <h4 className="philosophy-title mb-3">ByteForge Craftsmanship</h4>
                <ul className="philosophy-list">
                  <li className="philosophy-item">
                    <i className="bi bi-check-circle positive-icon"></i>
                    <span>Custom-built for specific needs</span>
                  </li>
                  <li className="philosophy-item">
                    <i className="bi bi-check-circle positive-icon"></i>
                    <span>Tailor-made solutions</span>
                  </li>
                  <li className="philosophy-item">
                    <i className="bi bi-check-circle positive-icon"></i>
                    <span>Thoughtful and deliberate</span>
                  </li>
                  <li className="philosophy-item">
                    <i className="bi bi-check-circle positive-icon"></i>
                    <span>Lean and efficient code</span>
                  </li>
                  <li className="philosophy-item">
                    <i className="bi bi-check-circle positive-icon"></i>
                    <span>Built to evolve and scale</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="forge-ember-container"></div>
    </section>
  );
};

export default PhilosophySection;