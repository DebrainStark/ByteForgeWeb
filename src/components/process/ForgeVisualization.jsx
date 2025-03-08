import React, { useState, useEffect } from 'react';

const ForgeVisualization = () => {
  const [activeStage, setActiveStage] = useState(1);
  const totalStages = 6;
  
  // Auto-cycle through stages
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage(current => current < totalStages ? current + 1 : 1);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Stage definitions
  const stages = [
    { name: "Discovery", icon: "bi-search", color: "#ff7a00" },
    { name: "Architecture", icon: "bi-diagram-3", color: "#ff8a20" },
    { name: "Development", icon: "bi-code-square", color: "#ff9a40" },
    { name: "Quality", icon: "bi-shield-check", color: "#ffaa60" },
    { name: "Deployment", icon: "bi-rocket-takeoff", color: "#ffba80" },
    { name: "Maintenance", icon: "bi-arrow-up-circle", color: "#ffcaa0" }
  ];
  
  return (
    <section className="forge-visualization-section reveal-section">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <div className="forge-accent-line mb-4 mx-auto"></div>
            <h2 className="section-title metallic-text mb-4">
              The Forging Process
              <span className="accent-line centered-line"></span>
            </h2>
          </div>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="process-visualization-container">
              <div className="process-flow">
                <div className="anvil-container">
                  <svg width="120" height="120" viewBox="0 0 100 100">
                    <path className="anvil-body-large" d="M10,60 L90,60 L80,90 L20,90 Z" />
                    <path className="anvil-neck-large" d="M35,35 L65,35 L65,60 L35,60 Z" />
                    <path className="anvil-top-large" d="M25,20 L75,20 L75,35 L25,35 Z" />
                    <circle className="anvil-highlight-large" cx="70" cy="27" r="5" />
                  </svg>
                </div>
                
                <div className="process-stages">
                  {stages.map((stage, index) => (
                    <div 
                      key={index}
                      className={`process-stage ${activeStage === index + 1 ? 'active' : ''}`}
                      onClick={() => setActiveStage(index + 1)}
                    >
                      <div 
                        className="stage-node1"
                        style={{ 
                          '--node-color': stage.color,
                          '--node-delay': `${index * 0.15}s`
                        }}
                      >
                        <div className="stage-icon1">
                          <i className={`bi ${stage.icon}`}></i>
                        </div>
                        <div className="stage-number1">{index + 1}</div>
                        <div className="node-pulse"></div>
                      </div>
                      <div className="stage-name1">{stage.name}</div>
                      
                      {index < stages.length - 1 && (
                        <div 
                          className={`stage-connector1 ${activeStage > index + 1 ? 'active' : ''}`}
                          style={{ '--connector-delay': `${index * 0.15}s` }}
                        ></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="process-description">
                <p className="text-center">
                  Each stage of our process builds upon the previous, creating a foundation for quality that 
                  permeates every aspect of your digital solution.
                </p>
                <div className="scroll-indicator-container">
                  <div className="scroll-text">SCROLL DOWN TO EXPLORE EACH STAGE</div>
                  <div className="scroll-arrows">
                    <div className="scroll-arrow"></div>
                    <div className="scroll-arrow"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="forge-ember-container"></div>
      <div className="section-bg-ornament ornament-right"></div>
    </section>
  );
};

export default ForgeVisualization;