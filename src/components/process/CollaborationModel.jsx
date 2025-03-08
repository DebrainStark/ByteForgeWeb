import React from 'react';

const CollaborationModel = () => {
  const collaborationItems = [
    {
      icon: 'people',
      title: 'Regular Touchpoints',
      description: 'We maintain consistent communication through scheduled check-ins, demos, and progress updates, ensuring alignment throughout the project lifecycle.'
    },
    {
      icon: 'card-checklist',
      title: 'Clear Expectations',
      description: 'We establish detailed project roadmaps, timelines, and deliverables from the start, with regular reviews to ensure we arere meeting your needs.'
    },
    {
      icon: 'kanban',
      title: 'Collaborative Tools',
      description: 'We utilize project management platforms, shared documentation, and collaborative design tools to keep everyone informed and involved.'
    }
  ];

  return (
    <section className="collaboration-section reveal-section">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <div className="forge-accent-line mb-4 mx-auto"></div>
            <h2 className="section-title metallic-text mb-4">
              Client Collaboration Model
              <span className="accent-line centered-line"></span>
            </h2>
            <p className="section-lead fade-in-element">
              We believe in transparent, collaborative partnerships with our clients throughout the development process. 
              Your involvement is <span className="text-accent">integral</span> to forging a solution that perfectly fits your needs.
            </p>
          </div>
        </div>
        
        <div className="collaboration-items">
          <div className="row g-4">
            {collaborationItems.map((item, index) => (
              <div key={index} className="col-lg-4">
                <div className={`collaboration-card slide-in-element delay-${index + 1}`}>
                  <div className="card-glow"></div>
                  
                  <div className="card-icon">
                    <i className={`bi bi-${item.icon}`}></i>
                    <div className="icon-ring"></div>
                  </div>
                  
                  <div className="card-content">
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-description">{item.description}</p>
                  </div>
                  
                  <div className="card-accent"></div>
                  
                  <div className="metal-corners">
                    <div className="corner corner-tl">
                      <div className="corner-inner"></div>
                    </div>
                    <div className="corner corner-tr">
                      <div className="corner-inner"></div>
                    </div>
                    <div className="corner corner-bl">
                      <div className="corner-inner"></div>
                    </div>
                    <div className="corner corner-br">
                      <div className="corner-inner"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="collaboration-quote-container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="collaboration-quote fade-in-element">
                <div className="quote-icon">
                  <i className="bi bi-quote"></i>
                </div>
                <blockquote>
                  <p>
                    True craftsmanship requires a deep understanding between the craftsman and the client. 
                    We forge this relationship with the same care we put into our code.
                  </p>
                </blockquote>
                <div className="quote-author">
                  <div className="author-name">Otoibhi "Stark" Anthony</div>
                  <div className="author-title">Co-Founder & Technical Lead</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="forge-ember-container"></div>
      <div className="section-bg-ornament"></div>
    </section>
  );
};

export default CollaborationModel;