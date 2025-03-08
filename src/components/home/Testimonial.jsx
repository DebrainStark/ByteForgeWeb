import React, { useState, useEffect, useRef } from 'react';
import './styles/test.css'

function RecognitionSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const sectionRef = useRef(null);
  
  // Expanded testimonials data
  const testimonials = [
    {
      id: 1,
      quote: "ByteForge delivers websites that don't just look beautiful—they perform beautifully. Their attention to detail and focus on quality craftsmanship sets them apart in a world of template solutions.",
      author: "Jane Doe",
      position: "CEO, TechInnovate",
      initials: "JD"
    },
    {
      id: 2,
      quote: "Working with ByteForge transformed our digital presence. Their team approached our project with the precision of master craftsmen, forging a solution that exceeded our expectations.",
      author: "Thomas Wright",
      position: "Marketing Director, Apex Solutions",
      initials: "TW"
    },
    {
      id: 3,
      quote: "ByteForge's attention to performance optimization resulted in a 45% increase in our conversion rate. Their work stands as testament to their commitment to excellence.",
      author: "Sarah Chen",
      position: "Founder, NexGen Retail",
      initials: "SC"
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
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  // Select testimonial
  const handleSelectTestimonial = (index) => {
    setActiveTestimonial(index);
  };

  return (
    <section ref={sectionRef} className="forge-recognition">
      <div className="forge-texture-overlay"></div>
      <div className="horizontal-accent"></div>
      
      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className={`forge-testimonial-container ${isVisible ? 'animate-in' : ''}`}>
              <div className="forge-accent-corner top-left"></div>
              <div className="forge-accent-corner top-right"></div>
              <div className="forge-accent-corner bottom-left"></div>
              <div className="forge-accent-corner bottom-right"></div>
              
              <div className="testimonial-header">
                <h3 className="forge-subtitle">WHAT CLIENTS SAY</h3>
                <h2 className="forge-title">RECOGNITION OF OUR <span className="text-accent">CRAFT</span></h2>
                <div className="anvil-divider">
                  <svg viewBox="0 0 60 20" width="60" height="20">
                    <path d="M5,5 L55,5 L50,15 L10,15 Z" className="anvil-shape" />
                  </svg>
                </div>
              </div>
              
              <div className="testimonial-content">
                <div className="quote-marks">
                  <svg viewBox="0 0 40 40" width="40" height="40">
                    <path d="M10,10 L10,20 L5,30 L15,30 L20,20 L20,10 Z M30,10 L30,20 L25,30 L35,30 L40,20 L40,10 Z" 
                          className="quote-mark-shape" />
                  </svg>
                </div>
                
                <div className="testimonial-carousel">
                  {testimonials.map((testimonial, index) => (
                    <div 
                      key={testimonial.id} 
                      className={`testimonial-item ${activeTestimonial === index ? 'active' : ''}`}
                    >
                      <p className="testimonial-quote">{testimonial.quote}</p>
                      
                      <div className="testimonial-author">
                        <div className="author-avatar">
                          <div className="avatar-circle">
                            <div className="avatar-glow"></div>
                            {testimonial.initials}
                          </div>
                        </div>
                        <div className="author-info">
                          <h4 className="author-name">{testimonial.author}</h4>
                          <p className="author-position">{testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="testimonial-nav">
                {testimonials.map((_, index) => (
                  <button 
                    key={index} 
                    className={`nav-dot ${activeTestimonial === index ? 'active' : ''}`}
                    onClick={() => handleSelectTestimonial(index)}
                    aria-label={`View testimonial ${index + 1}`}
                  >
                    <span className="dot-inner"></span>
                  </button>
                ))}
              </div>
              
              <div className="decorative-element left-decor">
                <svg viewBox="0 0 20 100" width="20" height="100">
                  <path d="M10,0 L10,100" className="decor-line" />
                  <circle cx="10" cy="25" r="3" className="decor-dot" />
                  <circle cx="10" cy="50" r="3" className="decor-dot" />
                  <circle cx="10" cy="75" r="3" className="decor-dot" />
                </svg>
              </div>
              
              <div className="decorative-element right-decor">
                <svg viewBox="0 0 20 100" width="20" height="100">
                  <path d="M10,0 L10,100" className="decor-line" />
                  <circle cx="10" cy="25" r="3" className="decor-dot" />
                  <circle cx="10" cy="50" r="3" className="decor-dot" />
                  <circle cx="10" cy="75" r="3" className="decor-dot" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecognitionSection;