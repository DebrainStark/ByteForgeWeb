import React from 'react';

const MetricsSection = () => {
  const metrics = [
    {
      icon: 'speedometer2',
      value: '40%',
      description: 'Faster loading times than industry standard'
    },
    {
      icon: 'graph-up-arrow',
      value: '35%',
      description: 'Average increase in conversion rates'
    },
    {
      icon: 'shield-check',
      value: '99.9%',
      description: 'Uptime across all deployed applications'
    },
    {
      icon: 'people',
      value: '100+',
      description: 'Satisfied clients across industries'
    }
  ];

  return (
    <section className="metrics-section py-5">
      <div className="container">
        <h2 className="section-title text-center metallic-text mb-5 slide-in-element">
          Our Impact By The Numbers
          <span className="accent-line centered-line"></span>
        </h2>
        
        <div className="row g-4 text-center">
          {metrics.map((metric, index) => (
            <div key={index} className="col-md-3">
              <div className={`metric-card fade-in-element delay-${index + 1}`}>
                <div className="metric-icon">
                  <i className={`bi bi-${metric.icon}`}></i>
                  <div className="metric-icon-glow"></div>
                </div>
                
                <h3 className="metric-value">{metric.value}</h3>
                <p className="metric-description">{metric.description}</p>
                
                <div className="metric-accent-line"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;