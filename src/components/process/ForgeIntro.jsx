import React from 'react';

const ForgeIntro = () => {
  return (
    <section id="forge-intro" className="forge-intro-section1 reveal-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="forge-accent-line mb-4 mx-auto"></div>
            <h2 className="section-title metallic-text mb-4">
              The Digital Blacksmith's Methodology
              <span className="accent-line centered-line"></span>
            </h2>
            <p className="section-lead fade-in-element">
              Just as traditional blacksmiths transform raw metal into tools of lasting value through 
              skill and patience, we transform your ideas and requirements into digital solutions built 
              to withstand the test of time. Our process emphasizes <span className="text-accent">craftsmanship</span> at every stage, 
              ensuring that the final product is not just functional, but exceptional.
            </p>
          </div>
        </div>
        
        <div className="row justify-content-center mt-5">
          <div className="col-lg-10">
            <div className="forge-card slide-in-element">
              <div className="forge-fire-icon">
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
              </div>
              
              <div className="forge-card-content text-center">
                <h3 className="forge-card-title">The Digital Forge</h3>
                <p className="forge-card-text">
                  Our methodology combines time-tested development principles with innovative approaches, 
                  creating a process that values quality, sustainability, and attention to detail over 
                  speed and shortcuts.
                </p>
                
                <div className="forge-tenets">
                  <div className="tenet">
                    <div className="tenet-icon">
                      <i className="bi bi-gem"></i>
                    </div>
                    <div className="tenet-text">Quality</div>
                  </div>
                  <div className="tenet">
                    <div className="tenet-icon">
                      <i className="bi bi-tools"></i>
                    </div>
                    <div className="tenet-text">Craft</div>
                  </div>
                  <div className="tenet">
                    <div className="tenet-icon">
                      <i className="bi bi-eye"></i>
                    </div>
                    <div className="tenet-text">Detail</div>
                  </div>
                  <div className="tenet">
                    <div className="tenet-icon">
                      <i className="bi bi-clock-history"></i>
                    </div>
                    <div className="tenet-text">Durability</div>
                  </div>
                </div>
              </div>
              
              <div className="forge-card-accents">
                <div className="card-corner card-corner-tl"></div>
                <div className="card-corner card-corner-tr"></div>
                <div className="card-corner card-corner-bl"></div>
                <div className="card-corner card-corner-br"></div>
                <div className="card-edge card-edge-t"></div>
                <div className="card-edge card-edge-r"></div>
                <div className="card-edge card-edge-b"></div>
                <div className="card-edge card-edge-l"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="section-bg-ornament"></div>
      <div className="forge-ember-container"></div>
    </section>
  );
};

export default ForgeIntro;