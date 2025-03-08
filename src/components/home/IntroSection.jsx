import React, { useEffect, useState, useRef } from 'react';
import './styles/intro.css'

function IntroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const hammerRef = useRef(null);
  const sparkRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && hammerRef.current && sparkRef.current) {
      // Start the forge animation sequence
      const hammerAnimation = () => {
        hammerRef.current.classList.add('hammer-strike');
        setTimeout(() => {
          sparkRef.current.classList.add('spark-burst');
          
          // Create multiple random spark elements
          const sparkContainer = document.querySelector('.spark-container');
          if (sparkContainer) {
            for (let i = 0; i < 15; i++) {
              const spark = document.createElement('div');
              spark.classList.add('spark-particle');
              
              // Random position and duration
              const angle = Math.random() * 360;
              const distance = 30 + Math.random() * 100;
              const duration = 0.5 + Math.random() * 1;
              
              spark.style.setProperty('--angle', `${angle}deg`);
              spark.style.setProperty('--distance', `${distance}px`);
              spark.style.setProperty('--duration', `${duration}s`);
              
              sparkContainer.appendChild(spark);
              
              // Remove spark after animation completes
              setTimeout(() => spark.remove(), duration * 1000);
            }
          }
          
          setTimeout(() => {
            hammerRef.current.classList.remove('hammer-strike');
            sparkRef.current.classList.remove('spark-burst');
            
            // Repeat the animation
            setTimeout(hammerAnimation, 2000);
          }, 500);
        }, 100);
      };
      
      // Start the animation
      setTimeout(hammerAnimation, 1000);
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="forge-intro-section py-5">
      <div className="forge-texture-overlay"></div>
      <div className="container position-relative">
        <div className="accent-line"></div>
        
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className={`section-heading mb-4 ${isVisible ? 'animate-in' : ''}`}>
              <h2 className="forge-title">FORGING DIGITAL <span className="text-accent">EXCELLENCE</span></h2>
            </div>
            
            <div className={`forge-description mb-5 ${isVisible ? 'animate-in' : ''}`}>
              <p className="lead">
                At <strong>ByteForge</strong>, we believe in the power of craftsmanship. Like traditional blacksmiths who transform raw metal into tools of lasting value, 
                we transform code into digital solutions built to withstand the test of time.
              </p>
              <p className="forge-tagline">
                Every project is <span className="hand-crafted">hand-crafted</span> with precision, care, and a deep 
                understanding of our clients' needs.
              </p>
            </div>
            
            <div className={`forge-animation ${isVisible ? 'animate-in' : ''}`}>
              <div className="forge-process-container">
                <div className="forge-backdrop"></div>
                
                <div className="forge-anvil">
                  <svg viewBox="0 0 100 40" width="100" height="40">
                    <path d="M10,30 L90,30 L80,40 L20,40 Z" className="anvil-top" />
                  </svg>
                </div>
                
                <div className="code-piece">
                  <div className="code-text">&lt;/&gt;</div>
                </div>
                
                <div ref={hammerRef} className="forge-hammer">
                  <svg viewBox="0 0 40 100" width="40" height="100">
                    <rect x="15" y="10" width="10" height="70" className="hammer-handle" />
                    <rect x="5" y="10" width="30" height="15" className="hammer-head" />
                  </svg>
                </div>
                
                <div ref={sparkRef} className="spark-effect">
                  <div className="spark-container"></div>
                </div>
                
                <div className="forge-glow"></div>
              </div>
              
              <div className="forge-stages">
                <div className="stage">
                  <div className="stage-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24">
                      <circle cx="12" cy="12" r="10" className="stage-icon-bg" />
                      <path d="M8,12 L11,15 L16,9" className="stage-icon-check" stroke="#fff" strokeWidth="2" fill="none" />
                    </svg>
                  </div>
                  <div className="stage-name">Plan</div>
                </div>
                <div className="stage-connector"></div>
                <div className="stage">
                  <div className="stage-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24">
                      <circle cx="12" cy="12" r="10" className="stage-icon-bg" />
                      <path d="M7,12 L17,12 M12,7 L12,17" className="stage-icon-plus" stroke="#fff" strokeWidth="2" />
                    </svg>
                  </div>
                  <div className="stage-name">Create</div>
                </div>
                <div className="stage-connector"></div>
                <div className="stage">
                  <div className="stage-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24">
                      <circle cx="12" cy="12" r="10" className="stage-icon-bg" />
                      <path d="M9,9 L15,15 M9,15 L15,9" className="stage-icon-refine" stroke="#fff" strokeWidth="2" />
                    </svg>
                  </div>
                  <div className="stage-name">Refine</div>
                </div>
                <div className="stage-connector"></div>
                <div className="stage">
                  <div className="stage-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24">
                      <circle cx="12" cy="12" r="10" className="stage-icon-bg" />
                      <path d="M8,10 L12,14 L16,10" className="stage-icon-deploy" stroke="#fff" strokeWidth="2" fill="none" />
                    </svg>
                  </div>
                  <div className="stage-name">Deploy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;