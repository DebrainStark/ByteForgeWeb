import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './styles/work.css'

function FeaturedWork() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  // Sample featured projects data with extended details
  const featuredProjects = [
    {
      id: 'financial-app',
      name: 'FINANCIAL SERVICE APP',
      subtitle: 'Enterprise Solution',
      image: '/src/assets/images/portfolio/project-finance.jpg',
      achievement: '40% faster loading times than industry standard',
      technologies: ['React', 'Node.js', 'GraphQL'],
      color: '#4285F4' // Project theme color
    },
    {
      id: 'healthcare-platform',
      name: 'HEALTHCARE PLATFORM',
      subtitle: 'Patient Management',
      image: '/src/assets/images/portfolio/project-health.jpg',
      achievement: 'Reduced workflow time by 60%',
      technologies: ['Vue.js', 'Python', 'AWS'],
      color: '#34A853' // Project theme color
    },
    {
      id: 'ecommerce-site',
      name: 'CUSTOM E-COMMERCE PLATFORM',
      subtitle: 'Retail Solution',
      image: '/src/assets/images/portfolio/project-ecommerce.jpg',
      achievement: '35% increase in conversion rate',
      technologies: ['Next.js', 'MongoDB', 'Stripe'],
      color: '#EA4335' // Project theme color
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
  
  // Auto-rotate projects
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % featuredProjects.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [featuredProjects.length]);

  // Function to handle manual project selection
  const handleSelectProject = (index) => {
    setActiveIndex(index);
  };

  return (
    <section ref={sectionRef} className="forge-featured-work py-5">
      <div className="forge-texture-overlay"></div>
      <div className="container position-relative">
        {/* Section heading with forge styling */}
        <div className={`section-heading text-center mb-5 ${isVisible ? 'animate-in' : ''}`}>
          <h2 className="forge-title">MASTER<span className="text-accent">WORKS</span></h2>
          <div className="forge-title-underline"></div>
          <p className="forge-subtitle">Exceptional digital creations forged with precision</p>
        </div>
        
        {/* Main project showcase */}
        <div className={`forge-showcase position-relative ${isVisible ? 'animate-in' : ''}`}>
          <div className="forge-accent-corner top-left"></div>
          <div className="forge-accent-corner top-right"></div>
          <div className="forge-accent-corner bottom-left"></div>
          <div className="forge-accent-corner bottom-right"></div>
          
          {/* Project cards with forge styling */}
          <div className="row g-0">
            <div className="col-lg-7">
              <div className="project-feature-container">
                {featuredProjects.map((project, index) => (
                  <div 
                    key={project.id} 
                    className={`project-feature ${activeIndex === index ? 'active' : ''}`}
                    style={{
                      '--project-color': project.color,
                      '--project-index': index,
                    }}
                  >
                    <div className="project-image-container">
                      {/* Project image or placeholder */}
                      <div className="project-image">
                        <div className="image-placeholder" aria-label={`Image for ${project.name}`}>
                          <div className="placeholder-text">{project.name}</div>
                          <div className="placeholder-icon">
                            <svg viewBox="0 0 24 24" width="40" height="40">
                              <rect x="2" y="2" width="20" height="20" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
                              <circle cx="8.5" cy="8.5" r="2.5" fill="currentColor" />
                              <path d="M22,15 L18,9 L14,12 L10,7 L2,18" stroke="currentColor" strokeWidth="2" fill="none" />
                            </svg>
                          </div>
                        </div>
                        
                        <div className="project-achievement">
                          <span className="achievement-number">{project.achievement.split(' ')[0]}</span>
                          <span className="achievement-text">{project.achievement.split(' ').slice(1).join(' ')}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="project-info">
                      <div className="project-header">
                        <h3 className="project-name">{project.name}</h3>
                        <div className="project-subtitle">{project.subtitle}</div>
                      </div>
                      
                      <div className="project-tech-stack">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="project-action">
                        <Link to={`/portfolio/${project.id}`} className="forge-button">
                          <span className="button-text">EXPLORE CASE STUDY</span>
                          <span className="button-icon">
                            <svg viewBox="0 0 24 24" width="18" height="18">
                              <path d="M5,12 L19,12 M12,5 L19,12 L12,19" stroke="currentColor" strokeWidth="2" fill="none" />
                            </svg>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="col-lg-5">
              <div className="project-navigator">
                <div className="navigator-header">
                  <h4 className="navigator-title">OUR FORGE</h4>
                  <div className="navigator-subtitle">Select a project</div>
                </div>
                
                <div className="navigator-projects">
                  {featuredProjects.map((project, index) => (
                    <div 
                      key={project.id}
                      className={`navigator-item ${activeIndex === index ? 'active' : ''}`}
                      onClick={() => handleSelectProject(index)}
                      style={{ '--project-color': project.color }}
                    >
                      <div className="item-number">{(index + 1).toString().padStart(2, '0')}</div>
                      <div className="item-details">
                        <div className="item-name">{project.name}</div>
                        <div className="item-achievement">{project.achievement}</div>
                      </div>
                      <div className="item-indicator">
                        <div className="indicator-bar"></div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="navigator-footer">
                  <Link to="/portfolio" className="view-all-link">
                    VIEW ALL PROJECTS
                    <span className="link-icon">
                      <svg viewBox="0 0 24 24" width="16" height="16">
                        <path d="M5,12 L19,12 M12,5 L19,12 L12,19" stroke="currentColor" strokeWidth="2" fill="none" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedWork;