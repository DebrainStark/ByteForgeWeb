import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PortfolioHeader from '../components/portfolio/PortfolioHeader';
import FilterBar from '../components/portfolio/FilterBar';
import ProjectGrid from '../components/portfolio/ProjectGrid';
import FeaturedProject from '../components/portfolio/FeaturedProject';
import MetricsSection from '../components/portfolio/MetricsSection';
import PortfolioCTA from '../components/portfolio/PortfolioCTA';
import '../components/portfolio/styles/port.css'

function Portfolio() {
  // Sample projects data
  const projects = [
    {
      id: 'financial-app',
      name: 'Financial Service App',
      type: 'mobile',
      industry: 'finance',
      image: '/src/assets/images/portfolio/financial-app.jpg',
      description: 'A resilient financial application that withstood major DDOS attacks while competitors failed.',
      technologies: ['React Native', 'Node.js', 'MongoDB']
    },
    {
      id: 'healthcare-platform',
      name: 'Healthcare Platform',
      type: 'web',
      industry: 'healthcare',
      image: '/src/assets/images/portfolio/healthcare-platform.jpg',
      description: 'Comprehensive healthcare management platform with patient portal and provider dashboard.',
      technologies: ['React', 'Express', 'PostgreSQL']
    },
    {
      id: 'ecommerce-site',
      name: 'Custom E-commerce Platform',
      type: 'web',
      industry: 'retail',
      image: '/src/assets/images/portfolio/ecommerce-site.jpg',
      description: 'High-performance e-commerce solution with 35% higher conversion rates than previous platform.',
      technologies: ['Next.js', 'Stripe', 'MongoDB']
    },
    {
      id: 'logistics-software',
      name: 'Logistics Management System',
      type: 'software',
      industry: 'transportation',
      image: '/src/assets/images/portfolio/logistics-software.jpg',
      description: 'End-to-end logistics management system that streamlined operations and reduced costs.',
      technologies: ['Python', 'Django', 'PostgreSQL']
    },
    {
      id: 'educational-app',
      name: 'Interactive Learning Platform',
      type: 'mobile',
      industry: 'education',
      image: '/src/assets/images/portfolio/educational-app.jpg',
      description: 'Mobile application for interactive learning with gamification elements.',
      technologies: ['Flutter', 'Firebase', 'Node.js']
    },
    {
      id: 'restaurant-site',
      name: 'Restaurant Chain Website',
      type: 'web',
      industry: 'hospitality',
      image: '/src/assets/images/portfolio/restaurant-site.jpg',
      description: 'Brand-focused website with integrated ordering system for a multi-location restaurant chain.',
      technologies: ['React', 'GraphQL', 'Contentful']
    }
  ];

  // Filter state
  const [filters, setFilters] = useState({
    industry: 'all',
    type: 'all'
  });

  // Visibility state for animations
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Initialize ember effect
    const createEmber = () => {
      if (document.querySelector('.forge-ember-container')) {
        const ember = document.createElement('div');
        ember.classList.add('forge-ember');
        
        const size = Math.random() * 6 + 2;
        const posX = Math.random() * 100;
        const duration = Math.random() * 3 + 3;
        const delay = Math.random() * 2;
        
        ember.style.width = `${size}px`;
        ember.style.height = `${size}px`;
        ember.style.left = `${posX}%`;
        ember.style.backgroundColor = `rgba(${255}, ${Math.floor(Math.random() * 100) + 100}, ${0}, ${Math.random() * 0.4 + 0.6})`;
        ember.style.animationDuration = `${duration}s`;
        ember.style.animationDelay = `${delay}s`;
        
        document.querySelector('.forge-ember-container').appendChild(ember);
        
        setTimeout(() => {
          if (ember.parentNode) {
            ember.parentNode.removeChild(ember);
          }
        }, (duration + delay) * 1000);
      }
    };
    
    const emberInterval = setInterval(createEmber, 300);
    
    return () => {
      clearInterval(emberInterval);
    };
  }, []);

  // Apply filters
  const filteredProjects = projects.filter(project => {
    return (filters.industry === 'all' || project.industry === filters.industry) &&
           (filters.type === 'all' || project.type === filters.type);
  });

  // Handle filter changes
  const handleFilterChange = (filterType, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterType]: value
    }));
  };

  // Handle clearing all filters
  const clearFilters = () => {
    setFilters({ industry: 'all', type: 'all' });
  };

  return (
    <div className={`portfolio-page ${isVisible ? 'is-visible' : ''}`}>
      <PortfolioHeader />
      
      <FilterBar 
        filters={filters} 
        onFilterChange={handleFilterChange} 
      />
      
      <ProjectGrid 
        projects={filteredProjects} 
        onClearFilters={clearFilters} 
      />
      
      <FeaturedProject />
      
      <MetricsSection />
      
      <PortfolioCTA />
      
      <div className="forge-backdrop-deep"></div>
      <div className="forge-backdrop"></div>
      <div className="forge-grid-lines"></div>
      <div className="forge-accent-line"></div>
      <div className="forge-accent-glow left-glow"></div>
      <div className="forge-accent-glow right-glow"></div>
      <div className="forge-ember-container"></div>
    </div>
  );
}

export default Portfolio;