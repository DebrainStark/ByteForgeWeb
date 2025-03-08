import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './styles/header.css';

function Navigation({ isOpen, toggleMenu }) {
  const location = useLocation();

  // Close the mobile menu when route changes
  useEffect(() => {
    if (isOpen) {
      toggleMenu();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  // Check if the given path matches the current location
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className={`forge-navigation ${isOpen ? 'nav-open' : ''}`}>
      <ul className="forge-nav-list">
        <li className="forge-nav-item">
          <Link 
            className={`forge-nav-link ${isActive('/') ? 'active' : ''}`} 
            to="/" 
            onClick={() => isOpen && toggleMenu()}
          >
            Home
          </Link>
        </li>
        <li className="forge-nav-item">
          <Link 
            className={`forge-nav-link ${isActive('/services') ? 'active' : ''}`} 
            to="/services" 
            onClick={() => isOpen && toggleMenu()}
          >
            Services
          </Link>
        </li>
        <li className="forge-nav-item">
          <Link 
            className={`forge-nav-link ${isActive('/process') ? 'active' : ''}`} 
            to="/process" 
            onClick={() => isOpen && toggleMenu()}
          >
            Process
          </Link>
        </li>
        <li className="forge-nav-item">
          <Link 
            className={`forge-nav-link ${isActive('/about') ? 'active' : ''}`} 
            to="/about" 
            onClick={() => isOpen && toggleMenu()}
          >
            About
          </Link>
        </li>
        <li className="forge-nav-item">
          <Link 
            className={`forge-nav-link ${isActive('/contact') ? 'active' : ''}`} 
            to="/contact" 
            onClick={() => isOpen && toggleMenu()}
          >
            Contact
          </Link>
        </li>
      </ul>
      
      <div className="forge-nav-cta">
        <Link 
          className="forge-button" 
          to="/get-started" 
          onClick={() => isOpen && toggleMenu()}
        >
          Get Started
          <span className="button-glow"></span>
        </Link>
      </div>
      
      {/* Forge accents and effects for mobile */}
      <div className="nav-accent-line"></div>
      
      <div className="nav-ember-container">
        <div className="nav-ember nav-ember-1"></div>
        <div className="nav-ember nav-ember-2"></div>
        <div className="nav-ember nav-ember-3"></div>
      </div>
    </div>
  );
}

export default Navigation;