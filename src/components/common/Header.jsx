import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navigation from './Navigation';
import './styles/header.css'

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Handle scroll event to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`forge-header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-backdrop"></div>
      <div className="header-accent-line"></div>
      
      <div className="container position-relative">
        <nav className="forge-navbar">
          <div className="navbar-container">
            {/* Logo with forge icon */}
            <Link className="forge-brand" to="/">
              <div className="brand-icon">
                <svg viewBox="0 0 30 30" width="30" height="30" aria-hidden="true">
                  <path d="M5,20 L25,20 L23,27 L7,27 Z" className="logo-anvil-body" />
                  <path d="M10,12 L20,12 L20,20 L10,20 Z" className="logo-anvil-top" />
                  <path d="M12,8 L18,8 L18,12 L12,12 Z" className="logo-anvil-neck" />
                </svg>
              </div>
              <div className="brand-text">
                <span className="brand-name">BYTE<span className="text-accent">FORGE</span></span>
              </div>
            </Link>
            
            {/* Hamburger menu with forge styling */}
            <button 
              className={`forge-toggler ${menuOpen ? 'toggler-active' : ''}`}
              type="button"
              onClick={toggleMenu}
              aria-controls="navbarMain" 
              aria-expanded={menuOpen}
              aria-label="Toggle navigation"
            >
              <div className="toggler-bar bar-1"></div>
              <div className="toggler-bar bar-2"></div>
              <div className="toggler-bar bar-3"></div>
              <div className="toggler-glow"></div>
            </button>
            
            {/* Navigation component with additional props */}
            <Navigation isOpen={menuOpen} toggleMenu={toggleMenu} />
          </div>
        </nav>
      </div>
      
      {/* Small ember effect in header */}
      <div className="header-ember-container">
        <div className="header-ember ember-1"></div>
        <div className="header-ember ember-2"></div>
        <div className="header-ember ember-3"></div>
      </div>
    </header>
  );
}

export default Header;