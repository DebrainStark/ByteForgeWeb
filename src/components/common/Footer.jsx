import { Link } from 'react-router-dom';
import { useState } from 'react';
import './styles/footer.css'

function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() !== '') {
      // Here you would typically call an API to handle the subscription
      setSubscribed(true);
      setEmail('');
      
      // Reset the subscribed message after a delay
      setTimeout(() => {
        setSubscribed(false);
      }, 5000);
    }
  };

  return (
    <footer className="forge-footer">
      {/* Metallic texture & accents */}
      <div className="footer-backdrop"></div>
      <div className="footer-grid-lines"></div>
      <div className="footer-accent-line"></div>
      
      {/* Ember container for visual effect */}
      <div className="footer-ember-container">
        <div className="footer-ember ember-1"></div>
        <div className="footer-ember ember-2"></div>
        <div className="footer-ember ember-3"></div>
      </div>
      
      <div className="container position-relative">
        <div className="row">
          {/* Brand section */}
          <div className="col-lg-4 mb-5 mb-lg-0">
            <div className="footer-brand">
              <div className="brand-icon">
                <svg viewBox="0 0 30 30" width="40" height="40" aria-hidden="true">
                  <path d="M5,20 L25,20 L23,27 L7,27 Z" className="logo-anvil-body" />
                  <path d="M10,12 L20,12 L20,20 L10,20 Z" className="logo-anvil-top" />
                  <path d="M12,8 L18,8 L18,12 L12,12 Z" className="logo-anvil-neck" />
                </svg>
              </div>
              <div className="brand-text">
                <h3 className="brand-name">BYTE<span className="text-accent">FORGE</span></h3>
              </div>
            </div>
            
            <div className="footer-tagline">
              <p className="tagline-primary">Digital Craftsmanship for the Modern World</p>
              <p className="tagline-secondary">We don't just build websites and apps. We <span className="text-accent">forge</span> digital solutions that endure.</p>
            </div>
            
            <div className="footer-certification">
              <div className="cert-badge">
                <span className="cert-icon">✓</span>
                <span className="cert-text">Quality Craftsmanship</span>
              </div>
            </div>
          </div>
          
          {/* Navigation links */}
          <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
            <div className="row">
              <div className="col-6">
                <h4 className="footer-heading">
                  <span className="heading-text">Explore</span>
                  <span className="heading-line"></span>
                </h4>
                <ul className="footer-links">
                  <li><Link className="footer-link" to="/">Home</Link></li>
                  <li><Link className="footer-link" to="/about">About</Link></li>
                  <li><Link className="footer-link" to="/services">Services</Link></li>
                  <li><Link className="footer-link" to="/portfolio">Portfolio</Link></li>
                </ul>
              </div>
              
              <div className="col-6">
                <h4 className="footer-heading">
                  <span className="heading-text">Resources</span>
                  <span className="heading-line"></span>
                </h4>
                <ul className="footer-links">
                  <li><Link className="footer-link" to="/process">Process</Link></li>
                  <li><Link className="footer-link" to="/testimonials">Testimonials</Link></li>
                  <li><Link className="footer-link" to="/blog">Blog</Link></li>
                  <li><Link className="footer-link" to="/contact">Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Newsletter subscription */}
          <div className="col-md-6 col-lg-4">
            <h4 className="footer-heading">
              <span className="heading-text">Stay Connected</span>
              <span className="heading-line"></span>
            </h4>
            
            <p className="subscribe-text">Join our newsletter for insights on digital craftsmanship and exclusive tips.</p>
            
            <form className="subscribe-form" onSubmit={handleSubscribe}>
              <div className="form-content">
                <input 
                  type="email" 
                  className="subscribe-input" 
                  placeholder="Your Email Address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button className="subscribe-button" type="submit">
                  <span className="button-text">Subscribe</span>
                  <span className="button-icon">→</span>
                </button>
              </div>
              
              {subscribed && (
                <div className="subscribe-success">
                  <div className="success-icon">✓</div>
                  <div className="success-message">Thank you for subscribing!</div>
                </div>
              )}
            </form>
            
            <div className="social-links">
              <h5 className="social-heading">Follow Our Craft</h5>
              <div className="social-icons">
                <a href="#" className="social-icon" aria-label="Follow us on Facebook">
                  <i className="bi bi-facebook"></i>
                  <span className="icon-glow"></span>
                </a>
                <a href="#" className="social-icon" aria-label="Follow us on Twitter">
                  <i className="bi bi-twitter-x"></i>
                  <span className="icon-glow"></span>
                </a>
                <a href="#" className="social-icon" aria-label="Follow us on LinkedIn">
                  <i className="bi bi-linkedin"></i>
                  <span className="icon-glow"></span>
                </a>
                <a href="#" className="social-icon" aria-label="Follow us on Instagram">
                  <i className="bi bi-instagram"></i>
                  <span className="icon-glow"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative divider */}
        <div className="footer-divider">
          <div className="divider-line"></div>
          <div className="divider-icon">
            <svg viewBox="0 0 30 15" width="30" height="15" aria-hidden="true">
              <path d="M0,7.5 L30,7.5" className="hammer-line" />
              <rect x="10" y="0" width="10" height="15" rx="2" className="hammer-head" />
            </svg>
          </div>
          <div className="divider-line"></div>
        </div>
        
        {/* Copyright & legal */}
        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-md-6 mb-3 mb-md-0">
              <p className="copyright">&copy; 2025 ByteForge. All rights reserved.</p>
            </div>
            <div className="col-md-6">
              <div className="legal-links">
                <a href="#" className="legal-link">Privacy Policy</a>
                <span className="link-separator">|</span>
                <a href="#" className="legal-link">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;