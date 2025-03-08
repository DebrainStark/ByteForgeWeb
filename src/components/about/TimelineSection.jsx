import React from 'react';

const TimelineSection = () => {
  const timelineEvents = [
    {
      year: 2020,
      title: 'The Beginning',
      description: 'ByteForge founded during a power outage, with a vision to bring craftsmanship to digital development.',
      right: true
    },
    {
      year: 2021,
      title: 'First Major Client',
      description: 'Secured our first enterprise client and demonstrated the power of custom solutions over templates.',
      right: false
    },
    {
      year: 2022,
      title: 'The Financial App Success',
      description: 'Developed the resilient financial service app that survived a major DDOS attack while competitors failed.',
      right: true
    },
    {
      year: 2023,
      title: 'Team Expansion',
      description: 'Grew our team of digital craftsmen while maintaining our core philosophy and commitment to quality.',
      right: false
    },
    {
      year: 2024,
      title: 'Industry Recognition',
      description: 'Received recognition for our unique approach to web development and the lasting quality of our work.',
      right: true
    },
    {
      year: 2025,
      title: 'Looking Forward',
      description: 'Expanding our forge with new technologies while remaining true to our craftsmanship principles.',
      right: false
    }
  ];

  return (
    <section className="timeline-section py-5">
      <div className="container">
        <div className="section-header text-center mb-5">
          <div className="forge-accent-line mb-4 mx-auto"></div>
          <h2 className="section-title metallic-text">
            Our Journey
            <span className="accent-line centered-line"></span>
          </h2>
        </div>
        
        <div className="timeline-container">
          <div className="timeline-track"></div>
          
          {timelineEvents.map((event, index) => (
            <div 
              key={event.year} 
              className={`timeline-event ${event.right ? 'event-right' : 'event-left'}`}
            >
              <div className="timeline-node">
                <div className="node-year">{event.year}</div>
                <div className="node-dot"></div>
                <div className="node-glow"></div>
              </div>
              
              <div className={`timeline-card slide-in-element delay-${index % 3}`}>
                <div className="card-content">
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-description">{event.description}</p>
                </div>
                <div className="card-accent"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="forge-ember-container"></div>
    </section>
  );
};

export default TimelineSection;