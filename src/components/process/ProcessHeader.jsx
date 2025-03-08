import React, { useState, useEffect } from 'react';

const ProcessHeader = () => {
  const [hammerActive, setHammerActive] = useState(false);
  
  // Hammer animation effect
  useEffect(() => {
    const animateHammer = () => {
      setHammerActive(true);
      setTimeout(() => {
        setHammerActive(false);
      }, 500);
      
      // Create sparks
      const sparksContainer = document.querySelector('.hammer-sparks1');
      if (sparksContainer) {
        for (let i = 0; i < 5; i++) {
          const spark = document.createElement('div');
          spark.classList.add('spark');
          
          const size = Math.random() * 3 + 1;
          const angle = Math.random() * Math.PI * 2;
          const distance = Math.random() * 15 + 10;
          const duration = Math.random() * 0.5 + 0.3;
          
          spark.style.width = `${size}px`;
          spark.style.height = `${size}px`;
          
          spark.animate([
            { 
              transform: 'translate(0, 0)', 
              opacity: 1 
            },
            { 
              transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`, 
              opacity: 0 
            }
          ], {
            duration: duration * 1000,
            easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
            fill: 'forwards'
          });
          
          sparksContainer.appendChild(spark);
          
          setTimeout(() => {
            if (spark.parentNode === sparksContainer) {
              sparksContainer.removeChild(spark);
            }
          }, duration * 1000);
        }
      }
    };
    
    // Initial animation
    const timer = setTimeout(() => {
      animateHammer();
    }, 1000);
    
    // Periodic animations
    const intervalTimer = setInterval(() => {
      animateHammer();
    }, 10000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(intervalTimer);
    };
  }, []);

  return (
    <section className="forge-hero-section process-header reveal-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <div className="forge-logo-container fade-in-element">
              <div className="forge-logo">
                <div className="anvil-container">
                  <svg width="100" height="100" viewBox="0 0 100 100">
                    <path className="anvil-body" d="M20,60 L80,60 L70,80 L30,80 Z" />
                    <path className="anvil-neck" d="M40,40 L60,40 L60,60 L40,60 Z" />
                    <path className="anvil-top" d="M30,30 L70,30 L70,40 L30,40 Z" />
                    <circle className="anvil-highlight" cx="65" cy="35" r="3" />
                  </svg>
                </div>
                <div className={`forge-hammer1 ${hammerActive ? 'hammer-active1' : ''}`}>
                  <svg width="60" height="120" viewBox="0 0 60 120">
                    <rect className="hammer-handle1" x="25" y="30" width="10" height="90" />
                    <path className="hammer-head1" d="M10,10 L50,10 L55,30 L5,30 Z" />
                  </svg>
                  <div className="hammer-sparks1"></div>
                </div>
              </div>
            </div>
            
            <div className="header-content">
              <h1 className="forge-title slide-in-element">
                <span className="title-line">
                  <span className="metallic-text">Our <span className="highlight-word">Process</span></span>
                  <span className="accent-line"></span>
                </span>
                <span className="title-line-small delay-1">From Raw Bytes to Polished Products</span>
              </h1>
              
              <div className="header-description slide-in-element delay-2">
                <p>
                  A methodical approach to digital development, drawing on centuries-old craftsmanship 
                  principles to forge solutions that stand the test of time.
                </p>
              </div>
              
              <div className="header-cta slide-in-element delay-3">
                <a href="#forge-intro" className="forge-button">
                  <span className="button-icon">
                    <i className="bi bi-arrow-down"></i>
                  </span>
                  Explore Our Process
                  <div className="button-glow"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="moving-particles">
        {[...Array(15)].map((_, index) => (
          <div 
            key={index} 
            className="metal-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 20}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="forge-ember-container"></div>
    </section>
  );
};

export default ProcessHeader;