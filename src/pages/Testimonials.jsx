function Testimonials() {
    // Sample testimonials data
    const testimonials = [
      {
        id: 1,
        client: 'Sarah Johnson',
        position: 'CTO',
        company: 'SecureFinance LLC',
        industry: 'Finance',
        quote: "ByteForge's craftsmanship approach to our mobile app development paid dividends when our competitors' systems went down during a major cyber attack, while ours remained operational. Their attention to detail and focus on security created a truly resilient system that our customers trust implicitly.",
        projectType: 'Mobile Application',
        image: '/src/assets/images/testimonials/sarah-johnson.jpg'
      },
      {
        id: 2,
        client: 'Michael Chen',
        position: 'Director of Digital',
        company: 'HealthPlus',
        industry: 'Healthcare',
        quote: "The healthcare platform ByteForge built for us has transformed our patient management process. What sets them apart is their understanding that this isn't just a technical solution – it's a critical tool that impacts patient care. Their meticulous approach to both security and usability has made all the difference.",
        projectType: 'Healthcare Platform',
        image: '/src/assets/images/testimonials/michael-chen.jpg'
      },
      {
        id: 3,
        client: 'Elena Rodriguez',
        position: 'CEO',
        company: 'Artisan Retailers',
        industry: 'E-commerce',
        quote: "After struggling with template-based e-commerce platforms that couldn't handle our unique inventory management needs, ByteForge built us a custom solution that's increased our conversion rates by 35% and dramatically simplified our operations. Their team truly understands the difference between mass-produced solutions and crafted excellence.",
        projectType: 'E-commerce Platform',
        image: '/src/assets/images/testimonials/elena-rodriguez.jpg'
      },
      {
        id: 4,
        client: 'James Wilson',
        position: 'Operations Director',
        company: 'GlobalLogistics',
        industry: 'Transportation',
        quote: "The logistics management system ByteForge developed has given us a competitive edge in a crowded market. Their team took the time to truly understand our complex workflows and created a solution that's both powerful and remarkably user-friendly. We've seen a 28% improvement in operational efficiency since implementation.",
        projectType: 'Software Solution',
        image: '/src/assets/images/testimonials/james-wilson.jpg'
      },
      {
        id: 5,
        client: 'Aisha Patel',
        position: 'Marketing Director',
        company: 'TechInnovate',
        industry: 'Technology',
        quote: "ByteForge delivered a website that doesn't just look beautiful—it performs beautifully. Their focus on performance optimization has given us lightning-fast load times that have measurably improved our user engagement metrics and SEO rankings. Their team's attention to both aesthetics and technical excellence is truly rare.",
        projectType: 'Website',
        image: '/src/assets/images/testimonials/aisha-patel.jpg'
      },
      {
        id: 6,
        client: 'Thomas Greene',
        position: 'Founder',
        company: 'EduTech Solutions',
        industry: 'Education',
        quote: "Our interactive learning platform required a delicate balance between engaging design and rock-solid performance. ByteForge not only delivered on both fronts but exceeded our expectations with innovative features that have made our platform stand out in a crowded market. Their commitment to quality at every stage made all the difference.",
        projectType: 'Mobile Application',
        image: '/src/assets/images/testimonials/thomas-greene.jpg'
      }
    ];
  
    // Sample success stories (longer format testimonials)
    const successStories = [
      {
        id: 1,
        client: 'SecureFinance LLC',
        industry: 'Financial Services',
        image: '/src/assets/images/testimonials/securefinance-logo.jpg',
        problem: "SecureFinance needed a mobile application that would allow customers to securely manage financial transactions while meeting strict industry compliance requirements. Their previous solution was built on a template-based framework that had proven vulnerable to security threats.",
        solution: "ByteForge designed a custom mobile application with a security-first architecture, hand-coding critical components rather than relying on third-party libraries that could introduce vulnerabilities. The team implemented advanced encryption, multi-factor authentication, and a distributed architecture to eliminate single points of failure.",
        result: "When a major DDOS attack hit the financial sector, SecureFinance's app remained 100% operational while competitors experienced significant downtime. The application has seen 87% user adoption among existing customers, and SecureFinance reported a 45% increase in mobile engagement and a 30% reduction in call center volume.",
        quote: "ByteForge's approach to digital craftsmanship isn't just marketing language—it's a genuine philosophy that delivers tangible results. They built us a solution that's not just functional but truly resilient.",
        spokesperson: "Sarah Johnson, CTO"
      },
      {
        id: 2,
        client: 'Artisan Retailers',
        industry: 'E-commerce',
        image: '/src/assets/images/testimonials/artisan-retailers-logo.jpg',
        problem: "Artisan Retailers was struggling with an off-the-shelf e-commerce platform that couldn't handle their unique inventory management needs for handcrafted products. Their product catalog included thousands of one-of-a-kind items, each with unique attributes that standard platforms couldn't accommodate.",
        solution: "ByteForge developed a custom e-commerce solution with a flexible product catalog structure and sophisticated inventory management. The platform included custom-built features for tracking artisan-specific attributes and a dynamic pricing engine that could account for unique materials and crafting time.",
        result: "The new platform increased conversion rates by 35% and reduced inventory management time by 60%. The improved user experience and search functionality allowed customers to find exactly what they were looking for, leading to a 28% increase in average order value.",
        quote: "ByteForge understood that our business couldn't be forced into the constraints of standard e-commerce platforms. The custom solution they built has transformed our business by embracing our uniqueness rather than trying to standardize it.",
        spokesperson: "Elena Rodriguez, CEO"
      }
    ];
  
    // Client logos
    const clientLogos = [
      { id: 1, name: 'SecureFinance', image: '/src/assets/images/clients/securefinance.jpg', industry: 'Finance' },
      { id: 2, name: 'HealthPlus', image: '/src/assets/images/clients/healthplus.jpg', industry: 'Healthcare' },
      { id: 3, name: 'Artisan Retailers', image: '/src/assets/images/clients/artisan-retailers.jpg', industry: 'Retail' },
      { id: 4, name: 'GlobalLogistics', image: '/src/assets/images/clients/globallogistics.jpg', industry: 'Transportation' },
      { id: 5, name: 'TechInnovate', image: '/src/assets/images/clients/techinnovate.jpg', industry: 'Technology' },
      { id: 6, name: 'EduTech Solutions', image: '/src/assets/images/clients/edutech.jpg', industry: 'Education' },
      { id: 7, name: 'Culinary Concepts', image: '/src/assets/images/clients/culinary-concepts.jpg', industry: 'Hospitality' },
      { id: 8, name: 'Urban Architects', image: '/src/assets/images/clients/urban-architects.jpg', industry: 'Architecture' }
    ];
  
    return (
      <>
        {/* Page Header */}
        <section className="bg-dark text-light py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <h1 className="display-4 fw-bold">Testimonials & Client Stories</h1>
                <p className="lead">Hear from businesses who'e experienced the ByteForge difference</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Featured Testimonial */}
        <section className="py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="card border-0 bg-primary text-white shadow">
                  <div className="card-body p-5">
                    <div className="row align-items-center">
                      <div className="col-lg-8 mb-4 mb-lg-0">
                        <i className="bi bi-quote fs-1 mb-3 d-block"></i>
                        <blockquote className="blockquote mb-4">
                          <p className="mb-3">{testimonials[0].quote}</p>
                          <footer className="blockquote-footer text-white">
                            <strong>{testimonials[0].client}</strong>
                            <br />
                            {testimonials[0].position}, {testimonials[0].company}
                          </footer>
                        </blockquote>
                      </div>
                      <div className="col-lg-4 text-center">
                        <div className="rounded-circle bg-white p-1 d-inline-flex mb-3" style={{width: '150px', height: '150px'}}>
                          <div className="rounded-circle bg-dark text-light w-100 h-100 d-flex align-items-center justify-content-center">
                            [Client Photo]
                          </div>
                        </div>
                        <p className="mb-0 badge bg-light text-dark px-3 py-2">
                          {testimonials[0].projectType}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Testimonials Grid */}
        <section className="py-5 bg-light">
          <div className="container">
            <h2 className="text-center mb-5">Client Testimonials</h2>
            <div className="row g-4">
              {testimonials.slice(1).map(testimonial => (
                <div key={testimonial.id} className="col-md-6 col-lg-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center mb-4">
                        <div className="rounded-circle bg-dark text-light d-flex justify-content-center align-items-center me-3" 
                             style={{width: '60px', height: '60px', flexShrink: 0}}>
                          [Photo]
                        </div>
                        <div>
                          <h5 className="card-title mb-0">{testimonial.client}</h5>
                          <p className="text-muted mb-0 small">{testimonial.position}, {testimonial.company}</p>
                        </div>
                      </div>
                      <p className="card-text fst-italic mb-3">"{testimonial.quote}"</p>
                      <div className="mt-auto">
                        <span className="badge bg-secondary">{testimonial.projectType}</span>
                        <span className="badge bg-light text-dark ms-2">{testimonial.industry}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Success Stories */}
        <section className="py-5">
          <div className="container">
            <div className="row justify-content-center text-center mb-5">
              <div className="col-lg-8">
                <h2>Success Stories</h2>
                <p className="lead">
                  Detailed accounts of how our craftsmanship approach has delivered lasting results for our clients.
                </p>
              </div>
            </div>
  
            {successStories.map((story, index) => (
              <div key={story.id} className={`row align-items-center mb-5 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                <div className="col-lg-6 mb-4 mb-lg-0">
                  <div className="bg-light p-4 rounded">
                    <div className="mb-4 text-center">
                      <div className="bg-white shadow rounded p-3 d-inline-block">
                        <div className="bg-dark text-light rounded p-5">
                          [Client Logo: {story.client}]
                        </div>
                      </div>
                    </div>
                    <blockquote className="blockquote text-center mb-0">
                      <p className="mb-3 fst-italic">"{story.quote}"</p>
                      <footer className="blockquote-footer">
                        <small>{story.spokesperson}</small>
                      </footer>
                    </blockquote>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card border-0 shadow">
                    <div className="card-body p-4">
                      <h3 className="h4 card-title mb-4">{story.client}</h3>
                      
                      <h4 className="h6 text-primary mb-2">The Challenge</h4>
                      <p className="mb-4">{story.problem}</p>
                      
                      <h4 className="h6 text-primary mb-2">Our Solution</h4>
                      <p className="mb-4">{story.solution}</p>
                      
                      <h4 className="h6 text-primary mb-2">The Results</h4>
                      <p>{story.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
  
        {/* Client Logos */}
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row justify-content-center text-center mb-5">
              <div className="col-lg-8">
                <h2>Our Clients</h2>
                <p className="lead">
                  We're proud to partner with innovative businesses across industries.
                </p>
              </div>
            </div>
            <div className="row g-4">
              {clientLogos.map(client => (
                <div key={client.id} className="col-6 col-md-3">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body p-4 d-flex flex-column align-items-center justify-content-center">
                      <div className="bg-light rounded p-3 mb-3">
                        <div className="bg-dark text-light p-4 d-flex align-items-center justify-content-center">
                          [Logo: {client.name}]
                        </div>
                      </div>
                      <h5 className="card-title h6 mb-1 text-center">{client.name}</h5>
                      <p className="card-text small text-muted text-center">{client.industry}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Impact Metrics */}
        <section className="py-5">
          <div className="container">
            <div className="row justify-content-center text-center mb-5">
              <div className="col-lg-8">
                <h2>Our Impact By The Numbers</h2>
                <p className="lead">
                  Measurable results across our client portfolio.
                </p>
              </div>
            </div>
            <div className="row g-4 text-center">
              <div className="col-6 col-md-3">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="display-4 fw-bold text-primary mb-2">40%</div>
                    <p className="card-text">Faster Loading Times</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="display-4 fw-bold text-primary mb-2">35%</div>
                    <p className="card-text">Higher Conversion Rates</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="display-4 fw-bold text-primary mb-2">28%</div>
                    <p className="card-text">Operational Efficiency</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="display-4 fw-bold text-primary mb-2">99.9%</div>
                    <p className="card-text">Uptime Across Solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* CTA Section */}
        <section className="py-5 bg-primary text-white">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8 mb-4 mb-lg-0">
                <h2 className="mb-3">Ready to Join Our Success Stories?</h2>
                <p className="lead mb-0">
                  Let's discuss how our craftsmanship approach can help you achieve similar results.
                </p>
              </div>
              <div className="col-lg-4 text-lg-end">
                <a href="/contact" className="btn btn-light btn-lg">Contact Us</a>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
  
  export default Testimonials;