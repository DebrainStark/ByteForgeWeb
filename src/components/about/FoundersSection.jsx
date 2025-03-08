import React from 'react';

const FoundersSection = () => {
  return (
    <section className="founders-section py-5">
      <div className="container">
        <div className="section-header text-center mb-5">
          <div className="forge-accent-line mb-4 mx-auto"></div>
          <h2 className="section-title metallic-text">
            Meet the Founders
            <span className="accent-line centered-line"></span>
          </h2>
        </div>
        
        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="founder-card slide-in-element">
              <div className="card-inner">
                <div className="founder-header text-center mb-4">
                  <div className="founder-image">
                    <div className="image-placeholder">
                      [Photo]
                    </div>
                    <div className="image-glow"></div>
                  </div>
                  <h3 className="founder-name">Otoibhi Anthony "Stark"</h3>
                  <p className="founder-title">Co-Founder & Technical Lead</p>
                </div>
                <div className="founder-content">
                  <p className="founder-bio">
                    With a background in systems engineering and a passion for clean, efficient code, Stark brings 
                    technical precision to every ByteForge project. His meticulous attention to detail ensures that 
                    every solution is not just functional but optimized for performance.
                  </p>
                  <div className="founder-quote">
                    <div className="quote-icon">
                      <i className="bi bi-quote"></i>
                    </div>
                    <blockquote>
                      <p>Code should be as much a pleasure to read as it is to write. That's the mark of true craftsmanship.</p>
                    </blockquote>
                  </div>
                </div>
                <div className="card-accent"></div>
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="founder-card slide-in-element delay-1">
              <div className="card-inner">
                <div className="founder-header text-center mb-4">
                  <div className="founder-image">
                    <div className="image-placeholder">
                      [Photo]
                    </div>
                    <div className="image-glow"></div>
                  </div>
                  <h3 className="founder-name">Abe John "AbleJohn"</h3>
                  <p className="founder-title">Co-Founder & Creative Director</p>
                </div>
                <div className="founder-content">
                  <p className="founder-bio">
                    Inspired by his grandfather's blacksmithing legacy, AbleJohn brings a unique perspective that 
                    bridges traditional craftsmanship with digital innovation. His design philosophy emphasizes 
                    both aesthetics and functionality, creating digital experiences that stand the test of time.
                  </p>
                  <div className="founder-quote">
                    <div className="quote-icon">
                      <i className="bi bi-quote"></i>
                    </div>
                    <blockquote>
                      <p>My grandfather taught me that quality endures beyond trends. That principle guides every digital product we forge.</p>
                    </blockquote>
                  </div>
                </div>
                <div className="card-accent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;