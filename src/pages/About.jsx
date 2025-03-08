import React, { useState, useEffect } from 'react';
import AboutHeader from '../components/about/AboutHeader';
import StorySection from '../components/about/StorySection';
import PhilosophySection from '../components/about/PhilosophySection';
import FoundersSection from '../components/about/FoundersSection';
import TimelineSection from '../components/about/TimelineSection';
import '../components/about/styles/about.css'

function About() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Initialize ember effect
    const createEmber = () => {
      const emberContainers = document.querySelectorAll('.forge-ember-container');
      if (emberContainers.length > 0) {
        emberContainers.forEach(container => {
          const ember = document.createElement('div');
          ember.classList.add('forge-ember');
          
          const size = Math.random() * 6 + 2;
          const posX = Math.random() * 100;
          const duration = Math.random() * 3 + 3;
          const delay = Math.random() * 2;
          
          ember.style.width = `${size}px`;
          ember.style.height = `${size}px`;
          ember.style.left = `${posX}%`;
          ember.style.backgroundColor = `rgba(${255}, ${Math.floor(Math.random() * 100) + 120}, ${0}, ${Math.random() * 0.4 + 0.6})`;
          ember.style.animationDuration = `${duration}s`;
          ember.style.animationDelay = `${delay}s`;
          
          container.appendChild(ember);
          
          setTimeout(() => {
            if (ember.parentNode) {
              ember.parentNode.removeChild(ember);
            }
          }, (duration + delay) * 1000);
        });
      }
    };
    
    const emberInterval = setInterval(createEmber, 300);
    
    return () => {
      clearInterval(emberInterval);
    };
  }, []);

  return (
    <div className={`about-page ${isVisible ? 'is-visible' : ''}`}>
      <AboutHeader />
      <StorySection />
      <PhilosophySection />
      <FoundersSection />
      <TimelineSection />
      
      <div className="forge-backdrop-deep"></div>
      <div className="forge-backdrop"></div>
      <div className="forge-grid-lines"></div>
      <div className="forge-accent-line"></div>
      <div className="forge-accent-glow left-glow"></div>
      <div className="forge-accent-glow right-glow"></div>
    </div>
  );
}

export default About;