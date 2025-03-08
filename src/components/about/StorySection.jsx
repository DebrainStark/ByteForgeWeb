import React from 'react';

const StorySection = () => {
  return (
    <section className="story-section py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="story-content slide-in-element">
              <h2 className="section-title metallic-text mb-4">
                Our Story
                <span className="accent-line"></span>
              </h2>
              
              <p className="story-paragraph mb-3">
                ByteForge was born out of frustration with the cookie-cutter approach to web development that had become the industry standard. 
                In a world full of templates and drag-and-drop solutions, our founders saw a need for true digital <span className="text-accent">craftsmanship</span>.
              </p>
              
              <p className="story-paragraph mb-3">
                The company's name was conceived during a dramatic power outage, when co-founders Otoibhi "Stark" Anthony and Abe "AbleJohn" John 
                were working late into the night on a project that required custom solutions beyond what conventional tools could provide.
              </p>
              
              <p className="story-paragraph">
                As they worked by candlelight, AbleJohn was reminded of his grandfather's blacksmith forge where raw materials were transformed into 
                tools of lasting value through skill, precision, and patience. That night, ByteForge was born—a company dedicated to applying the 
                principles of traditional craftsmanship to the <span className="text-accent">digital realm</span>.
              </p>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="story-image-container fade-in-element delay-2">
              <div className="forge-image">
                <div className="image-placeholder">
                  [Image: ByteForge Origin Story]
                </div>
                <div className="image-overlay"></div>
                <div className="image-frame"></div>
                
                <div className="forge-embers">
                  <div className="ember ember-1"></div>
                  <div className="ember ember-2"></div>
                  <div className="ember ember-3"></div>
                </div>
              </div>
              
              <div className="image-caption">
                The fateful night when ByteForge was conceived
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;