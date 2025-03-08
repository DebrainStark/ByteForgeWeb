import { Link } from 'react-router-dom';
import { useEffect, useState, useRef, useCallback } from 'react';
import Button from '../common/Button';
import './styles/hero.css';

// Extracted SVG components for better readability
const AnvilSVG = () => (
  <svg viewBox="0 0 60 60" width="90" height="90" aria-hidden="true">
    <path d="M5,40 L55,40 L50,55 L10,55 Z" className="anvil-body" />
    <path d="M15,20 L45,20 L45,40 L15,40 Z" className="anvil-top" />
    <path d="M22,10 L38,10 L38,20 L22,20 Z" className="anvil-neck" />
    <circle cx="30" cy="30" r="3" className="anvil-highlight" />
  </svg>
);

const HammerSVG = () => (
  <svg viewBox="0 0 60 120" width="60" height="120" aria-hidden="true">
    <rect x="25" y="20" width="10" height="80" rx="2" className="hammer-handle" />
    <path d="M15,20 L45,20 L42,5 L18,5 Z" className="hammer-head" />
  </svg>
);

function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hammerActive, setHammerActive] = useState(false);
  const sectionRef = useRef(null);
  const emberInterval = useRef(null);
  const hammerInterval = useRef(null);
  const sparksContainerRef = useRef(null);
  const emberContainerRef = useRef(null);
  
  // Configurable constants
  const EMBER_MAX = 35;
  const EMBER_INTERVAL_MS = 200;
  const HAMMER_INTERVAL_MS = 3500;
  const HAMMER_ANIMATION_DELAY_MS = 1500;
  const SPARK_COUNT = 8;
  
  // Extracted ember creation for better performance
  const createEmber = useCallback(() => {
    const container = emberContainerRef.current;
    if (!container) return;
    
    // Count current embers and limit if needed
    const currentEmbers = container.querySelectorAll('.forge-ember').length;
    if (currentEmbers >= EMBER_MAX) {
      const oldestEmber = container.querySelector('.forge-ember:first-child');
      if (oldestEmber) oldestEmber.remove();
    }
    
    // Create new ember with more variation
    const ember = document.createElement('div');
    ember.classList.add('forge-ember');
    
    // Enhanced randomization for more natural look
    const size = 2 + Math.random() * 6;
    const posX = 10 + Math.random() * 80;
    const duration = 2.5 + Math.random() * 3;
    const delay = Math.random() * 1;
    const hue = Math.floor(Math.random() * 30);
    const brightness = 80 + Math.floor(Math.random() * 20);
    
    ember.style.cssText = `
      left: ${posX}%;
      width: ${size}px;
      height: ${size}px;
      opacity: ${0.5 + Math.random() * 0.3};
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
      background: radial-gradient(circle, rgba(255,${150+hue},${hue},1) 0%, rgba(255,${100+hue},${hue},0.3) 70%, transparent 100%);
      filter: brightness(${brightness}%);
    `;
    
    container.appendChild(ember);
    
    // Clean up ember after animation completes
    setTimeout(() => {
      if (ember.parentNode === container) {
        ember.remove();
      }
    }, (duration + delay) * 1000);
  }, [EMBER_MAX]);
  
  // Extracted hammer animation for reusability
  const hammerAnimation = useCallback(() => {
    setHammerActive(true);
    
    // Create spark effect when hammer hits
    setTimeout(() => {
      const sparksContainer = sparksContainerRef.current;
      if (sparksContainer) {
        // Clear previous sparks for better performance
        sparksContainer.innerHTML = '';
        
        for (let i = 0; i < SPARK_COUNT; i++) {
          const spark = document.createElement('div');
          spark.classList.add('hammer-spark');
          
          // Enhanced random position and animation
          const angle = Math.random() * 360;
          const distance = 20 + Math.random() * 30;
          const size = 2 + Math.random() * 3;
          const duration = 0.3 + Math.random() * 0.5;
          const brightness = 90 + Math.floor(Math.random() * 30);
          
          spark.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            animation-duration: ${duration}s;
            transform: rotate(${angle}deg) translateX(${distance}px);
            filter: brightness(${brightness}%);
          `;
          
          sparksContainer.appendChild(spark);
          
          // Remove spark after animation
          setTimeout(() => {
            if (spark.parentNode === sparksContainer) {
              spark.remove();
            }
          }, duration * 1000);
        }
      }
      
      // Reset hammer
      setTimeout(() => {
        setHammerActive(false);
      }, 300);
    }, 200);
  }, [SPARK_COUNT]);
  
  useEffect(() => {
    // Add slight delay for better loading appearance
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    // Intersection Observer setup
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px 100px 0px' }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    // Start ember animation
    emberInterval.current = setInterval(createEmber, EMBER_INTERVAL_MS);
    
    // Start hammer animation after a delay
    const hammerTimer = setTimeout(() => {
      hammerAnimation();
      hammerInterval.current = setInterval(hammerAnimation, HAMMER_INTERVAL_MS);
    }, HAMMER_ANIMATION_DELAY_MS);
    
    // More efficient cleanup
    return () => {
      clearTimeout(timer);
      clearTimeout(hammerTimer);
      if (emberInterval.current) clearInterval(emberInterval.current);
      if (hammerInterval.current) clearInterval(hammerInterval.current);
      observer.disconnect();
    };
  }, [createEmber, hammerAnimation, EMBER_INTERVAL_MS, HAMMER_INTERVAL_MS, HAMMER_ANIMATION_DELAY_MS]);

  // Scroll handler for enhanced interactivity
  const handleScrollIndicatorClick = () => {
    const nextSection = sectionRef.current?.nextElementSibling;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={sectionRef}
      className={`forge-hero-section ${isVisible ? 'is-visible' : ''}`}
    >
      {/* Optimized metallic background with depth layers */}
      <div className="forge-backdrop-deep"></div>
      <div className="forge-backdrop"></div>
      <div className="forge-grid-lines"></div>
      <div className="forge-accent-line"></div>
      <div className="forge-accent-glow left-glow"></div>
      <div className="forge-accent-glow right-glow"></div>
      
      {/* Enhanced ember container with ref for performance */}
      <div className="forge-ember-container" ref={emberContainerRef}></div>
      
      <div className="container position-relative">
        <div className="row min-vh-100 align-items-center">
          <div className="col-lg-7">
            {/* Interactive forge logo with extracted SVG components */}
            <div className="forge-logo-container">
              <div className="forge-logo fade-in-element">
                <div className="anvil-container">
                  <AnvilSVG />
                </div>
                
                <div className={`forge-hammer ${hammerActive ? 'hammer-active' : ''}`}>
                  <HammerSVG />
                  <div className="hammer-sparks" ref={sparksContainerRef}></div>
                </div>
              </div>
            </div>
            
            {/* Enhanced and more accessible headline */}
            <h1 className="forge-title" aria-label="Digital Craftsmanship for the Modern World">
              <span className="title-line slide-in-element">
                <span className="metallic-text">DIGITAL</span>
              </span> 
              <span className="title-line slide-in-element delay-1">
                <span className="metallic-text highlight-word">CRAFTSMANSHIP</span>
                <span className="accent-line"></span>
              </span>
              <span className="title-line-small slide-in-element delay-2">
                FOR THE MODERN WORLD
              </span>
            </h1>
            
            {/* Enhanced tagline with improved readability */}
            <p className="forge-tagline slide-in-element delay-3">
              We don't just build websites and apps. 
              <span className="d-block mt-2">We <span className="text-accent">FORGE</span> digital solutions that endure.</span>
            </p>
            
            {/* Improved call to action with semantic HTML */}
            <div className="forge-cta slide-in-element delay-4">
              <Link to="/portfolio" className="text-decoration-none" aria-label="View our portfolio">
                <Button 
                  variant="forge" 
                  size="lg" 
                  className="forge-button"
                >
                  <span className="button-icon" aria-hidden="true">⚒️</span>
                  <span>ENTER THE FORGE</span>
                  <span className="button-glow"></span>
                </Button>
              </Link>
              
              <Link to="/about" className="ms-4 text-decoration-none" aria-label="Learn about our craftsmanship">
                <Button 
                  variant="outline-forge" 
                  size="lg" 
                  className="forge-button-alt"
                >
                  OUR CRAFTSMANSHIP
                  <span className="button-border"></span>
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="col-lg-5 d-none d-lg-flex justify-content-center align-items-center">
            {/* Interactive forge illustration with better structure */}
            <div className="forge-illustration fade-in-element delay-2">
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
              
              <div className="forge-tools">
                <div className="tool-item tool-tongs">
                  <div className="tongs-handle"></div>
                  <div className="tongs-head"></div>
                </div>
                <div className="tool-item tool-poker"></div>
                <div className="forge-material"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Interactive scroll indicator */}
        <div 
          className="scroll-indicator fade-in-element delay-5" 
          onClick={handleScrollIndicatorClick}
          onKeyDown={(e) => e.key === 'Enter' && handleScrollIndicatorClick()}
          tabIndex={0}
          role="button"
          aria-label="Scroll to explore more content"
        >
          <span className="scroll-text">EXPLORE</span>
          <div className="scroll-arrows">
            <span className="scroll-arrow"></span>
            <span className="scroll-arrow scroll-arrow-2"></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;