import React, { useState, useEffect, useRef } from 'react';
import './styles/different.css'

function Differentiators() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  // Custom differentiator icons with forge theme
  const differentiators = [
    {
      id: 'craftsmanship',
      title: 'MASTERFUL CRAFTSMANSHIP',
      description: 'Custom solutions built from the ground up, with attention to every detail and line of code.',
      icon: (
        <svg viewBox="0 0 40 40" width="80" height="80" className="differentiator-icon">
          <g className="icon-craftsmanship">
            <rect x="5" y="10" width="30" height="5" rx="1" className="icon-primary" />
            <rect x="15" y="5" width="10" height="25" rx="1" className="icon-secondary" />
            <path d="M10,15 L30,15 L25,30 L15,30 Z" className="icon-highlight" />
          </g>
        </svg>
      ),
      color: '#ff7a00'
    },
    {
      id: 'quality',
      title: 'ENDURING QUALITY',
      description: 'Products that scale and adapt over time, built with technologies and practices that stand the test of time.',
      icon: (
        <svg viewBox="0 0 40 40" width="80" height="80" className="differentiator-icon">
          <g className="icon-quality">
            <path d="M20,5 L33,14 L28,29 L12,29 L7,14 Z" className="icon-primary" />
            <circle cx="20" cy="18" r="6" className="icon-secondary" />
            <path d="M17,18 L19,21 L23,16" className="icon-check" stroke="#fff" strokeWidth="2" fill="none" />
          </g>
        </svg>
      ),
      color: '#4a88ff'
    },
    {
      id: 'performance',
      title: 'PERFORMANCE-FIRST',
      description: 'Optimized for speed, security, and reliability, with performance baked into every aspect of development.',
      icon: (
        <svg viewBox="0 0 40 40" width="80" height="80" className="differentiator-icon">
          <g className="icon-performance">
            <circle cx="20" cy="20" r="14" className="icon-primary" />
            <circle cx="20" cy="20" r="11" className="icon-secondary" fill="none" stroke="#5a5a5a" strokeWidth="2" />
            <path d="M20,20 L20,12" className="icon-needle" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            <path d="M20,20 L26,24" className="icon-needle" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            <circle cx="20" cy="20" r="2" className="icon-center" />
          </g>
        </svg>
      ),
      color: '#46cf8e'
    }
  ];
  
  // Intersection observer to trigger animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  
  // Generate random floating particle positions
  const generateParticles = () => {
    const particles = [];
    for (let i = 0; i < 15; i++) {
      particles.push({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 5 + 2,
        duration: Math.random() * 15 +.5,
        delay: Math.random() * 5
      });
    }
    return particles;
  };
  
  const particles = generateParticles();

  return (
    <section ref={sectionRef} className="forge-differentiators">
      <div className="forge-texture-overlay"></div>
      
      {/* Ember particles */}
      {particles.map((particle, index) => (
        <div 
          key={index}
          className="forge-particle"
          style={{
            top: particle.top,
            left: particle.left,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`
          }}
        ></div>
      ))}
      
      <div className="container position-relative">
        <div className={`section-heading text-center mb-5 ${isVisible ? 'animate-in' : ''}`}>
          <h2 className="forge-title">THE BYTE<span className="text-accent">FORGE</span> DIFFERENCE</h2>
          <div className="forge-title-underline"></div>
          <p className="forge-subtitle">What sets our digital craftsmanship apart</p>
        </div>
        
        <div className="row g-4">
          {differentiators.map((diff, index) => (
            <div 
              key={diff.id} 
              className={`col-md-4 ${isVisible ? 'animate-in' : ''}`}
              style={{ '--animation-delay': `${0.2 + index * 0.15}s` }}
            >
              <div 
                className="forge-differentiator-card"
                style={{ '--card-color': diff.color }}
              >
                <div className="diff-card-inner">
                  <div className="card-glow"></div>
                  
                  <div className="diff-icon">
                    <div className="icon-glow"></div>
                    {diff.icon}
                  </div>
                  
                  <h3 className="diff-title">{diff.title}</h3>
                  
                  <div className="diff-divider">
                    <div className="diff-divider-line"></div>
                    <div className="diff-divider-dot"></div>
                    <div className="diff-divider-line"></div>
                  </div>
                  
                  <p className="diff-text">{diff.description}</p>
                </div>
                
                <div className="card-border-top"></div>
                <div className="card-border-right"></div>
                <div className="card-border-bottom"></div>
                <div className="card-border-left"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Differentiators;