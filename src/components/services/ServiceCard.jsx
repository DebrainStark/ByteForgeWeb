import React, { useState } from 'react';

const ServiceCard = ({ title, description, benefits, imgName, reversed }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const sectionClass = reversed ? '' : 'bg-forge-dark';
  const orderClass = reversed ? 'order-lg-2' : '';
  const textOrderClass = reversed ? 'order-lg-1' : '';
  
  return (
    <section className={`service-card py-5 ${sectionClass}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div className="container">
        <div className="row align-items-center">
          <div className={`col-lg-6 mb-4 mb-lg-0 ${orderClass}`}>
            <div className="service-image-container">
              <div className={`service-image ${imgName} ${isHovered ? 'is-hovered' : ''}`}>
                <div className="service-image-overlay"></div>
                <div className="service-image-glow"></div>
                {isHovered && (
                  <div className="service-sparks">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i} 
                        className="service-spark"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          width: `${Math.random() * 5 + 2}px`,
                          height: `${Math.random() * 5 + 2}px`,
                          animationDuration: `${Math.random() * 1 + 0.5}s`,
                          animationDelay: `${Math.random() * 0.2}s`
                        }}
                      ></div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={`col-lg-6 ${textOrderClass}`}>
            <div className="service-content slide-in-element">
              <h2 className="service-title mb-4">
                <span className="metallic-text service-title-text">{title}</span>
                <span className="accent-line"></span>
              </h2>
              <p className="service-description mb-4">{description}</p>
              <h5 className="benefits-title mb-3">Benefits</h5>
              <ul className="service-benefits-list">
                {benefits.map((benefit, index) => (
                  <li key={index} className="service-benefit-item mb-2">
                    <div className="benefit-icon">
                      <i className={`bi bi-${benefit.icon}`}></i>
                      <div className="benefit-icon-glow"></div>
                    </div>
                    <span className="benefit-text">{benefit.text}</span>
                  </li>
                ))}
              </ul>
              <div className="service-buttons mt-4">
                <button className="forge-button">
                  View Portfolio
                  <div className="button-glow"></div>
                </button>
                <button className="forge-button-alt ms-3">
                  Contact Us
                  <span className="button-border"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;