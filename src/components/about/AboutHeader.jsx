import React from 'react';

const AboutHeader = () => {
  return (
    <section className="forge-hero-section about-header py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <div className="forge-logo-container fade-in-element">
              <div className="forge-logo">
                <div className="anvil-container">
                  <svg width="80" height="80" viewBox="0 0 100 100">
                    <path className="anvil-body" d="M20,60 L80,60 L70,80 L30,80 Z" />
                    <path className="anvil-neck" d="M40,40 L60,40 L60,60 L40,60 Z" />
                    <path className="anvil-top" d="M30,30 L70,30 L70,40 L30,40 Z" />
                    <circle className="anvil-highlight" cx="65" cy="35" r="3" />
                  </svg>
                </div>
                <div className="forge-hammer">
                  <svg width="60" height="120" viewBox="0 0 60 120">
                    <rect className="hammer-handle" x="25" y="30" width="10" height="90" />
                    <path className="hammer-head" d="M10,10 L50,10 L55,30 L5,30 Z" />
                  </svg>
                  <div className="hammer-sparks"></div>
                </div>
              </div>
            </div>
            
            <h1 className="forge-title slide-in-element">
              <span className="title-line">
                <span className="metallic-text">About <span className="highlight-word">ByteForge</span></span>
                <span className="accent-line"></span>
              </span>
              <span className="title-line-small delay-1">Our story, our team, and our approach to digital craftsmanship</span>
            </h1>
            
            <div className="forge-ember-container"></div>
          </div>
        </div>
      </div>
      
      <div className="forge-backdrop-deep"></div>
      <div className="forge-backdrop"></div>
      <div className="forge-grid-lines"></div>
    </section>
  );
};

export default AboutHeader;