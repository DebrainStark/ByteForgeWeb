import React from 'react';

const ServicesCTA = () => {
  return (
    <section className="services-cta-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="forge-cta-card">
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
                <h2 className="metallic-text mb-4">Ready to Forge Your Digital Solution?</h2>
                <p className="forge-tagline mb-4">
                  Let's discuss how our craftsman approach can elevate your digital presence 
                  and deliver <span className="text-accent">lasting results</span>.
                </p>
                <button className="forge-button forge-button-large">
                  <i className="bi bi-anvil button-icon"></i>
                  Start The Forge
                  <div className="button-glow"></div>
                </button>
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
    </section>
  );
};

export default ServicesCTA;