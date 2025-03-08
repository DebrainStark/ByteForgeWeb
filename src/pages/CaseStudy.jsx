import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function CaseStudy() {
  const { caseStudyId } = useParams();
  const [caseStudy, setCaseStudy] = useState(null);
  const [loading, setLoading] = useState(true);

  // In a real application, you would fetch this data from an API
  // For this example, we'll use a mock object
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const caseStudies = {
        'financial-app': {
          id: 'financial-app',
          name: 'Financial Service App',
          clientName: 'SecureFinance LLC',
          clientIndustry: 'Financial Services',
          projectType: 'Mobile Application',
          projectDuration: '6 months',
          heroImage: '/src/assets/images/portfolio/case-studies/financial-service-app/hero.jpg',
          challenge: 'SecureFinance needed a mobile application that would allow their customers to securely manage financial transactions, view real-time account information, and conduct sensitive operations while maintaining the highest level of security and reliability.',
          goals: [
            'Create a highly secure mobile platform for financial transactions',
            'Ensure 99.99% uptime even under heavy load or attack conditions',
            'Provide intuitive user experience for complex financial operations',
            'Build a scalable architecture that can grow with the clients user base'
          ],
          constraints: [
            'Strict financial industry compliance requirements',
            'Integration with legacy systems',
            'High security demands for sensitive financial data'
          ],
          process: {
            discovery: 'Our team conducted extensive interviews with SecureFinance stakeholders and customers, analyzing competitor apps and identifying security vulnerabilities in standard approaches.',
            architecture: 'Rather than using off-the-shelf solutions, we designed a custom architecture with multiple redundancy layers and security protocols that exceeded industry standards.',
            development: 'Our craftsman approach involved hand-coding critical components rather than relying on third-party libraries that could introduce vulnerabilities.',
            qa: 'We conducted rigorous security testing, including penetration testing, stress testing, and simulated DDOS attacks to ensure the applications resilience.',
            launch: 'The application was deployed with a phased rollout strategy, allowing us to monitor performance and security at each stage.'
          },
          technologies: ['React Native', 'Node.js', 'Custom encryption libraries', 'MongoDB', 'AWS'],
          securityMeasures: [
            'End-to-end encryption for all data transmission',
            'Multi-layer authentication system',
            'Custom traffic monitoring and rate limiting',
            'Automated threat detection and response',
            'Distributed architecture to prevent single points of failure'
          ],
          results: {
            performance: 'The application maintained 100% uptime during a major DDOS attack that affected multiple financial institutions using standard template solutions.',
            business: 'SecureFinance reported a 45% increase in mobile engagement and a 30% reduction in call center volume.',
            userAdoption: '87% of existing customers migrated to the mobile platform within 3 months of launch.',
            roi: 'The client achieved 250% ROI within the first year through operational cost savings and increased customer retention.'
          },
          testimonial: {
            quote: "ByteForge's craftsmanship approach to our mobile app development paid dividends when our competitors' systems went down during a major cyber attack, while ours remained operational. Their attention to detail and focus on security created a truly resilient system that our customers trust implicitly.",
            author: 'Sarah Johnson',
            position: 'CTO, SecureFinance LLC'
          },
          galleryImages: [
            {
              src: '/src/assets/images/portfolio/case-studies/financial-service-app/screen1.jpg',
              caption: 'User dashboard with real-time account information'
            },
            {
              src: '/src/assets/images/portfolio/case-studies/financial-service-app/screen2.jpg',
              caption: 'Secure transaction interface with multi-factor authentication'
            },
            {
              src: '/src/assets/images/portfolio/case-studies/financial-service-app/screen3.jpg',
              caption: 'Financial analysis tools with interactive charts'
            },
            {
              src: '/src/assets/images/portfolio/case-studies/financial-service-app/architecture.jpg',
              caption: 'Simplified diagram of the applications security architecture'
            }
          ]
        },
        // Other case studies would be defined here
      };

      setCaseStudy(caseStudies[caseStudyId]);
      setLoading(false);
    }, 500);
  }, [caseStudyId]);

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">Loading case study...</p>
      </div>
    );
  }

  if (!caseStudy) {
    return (
      <div className="container py-5 text-center">
        <h2>Case Study Not Found</h2>
        <p>Sorry, the case study you're looking for doesn't exist.</p>
        <Link to="/portfolio" className="btn btn-primary">
          Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-dark text-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-3">{caseStudy.name}</h1>
              <div className="d-flex flex-wrap mb-4">
                <span className="badge bg-primary me-2 mb-2">
                  {caseStudy.clientIndustry}
                </span>
                <span className="badge bg-secondary me-2 mb-2">
                  {caseStudy.projectType}
                </span>
              </div>
              <p className="lead">
                A case study demonstrating ByteForge's approach to digital craftsmanship.
              </p>
            </div>
            <div className="col-lg-4 text-center text-lg-end mt-4 mt-lg-0">
              <Link to="/portfolio" className="btn btn-outline-light">
                Back to Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="bg-dark text-light ratio ratio-16x9 rounded mb-4">
                {/* Placeholder for actual project hero image */}
                <div className="d-flex align-items-center justify-content-center">
                  [Project Hero Image: {caseStudy.name}]
                </div>
              </div>
              <h2 className="mb-4">Project Overview</h2>
              <p className="lead mb-4">{caseStudy.challenge}</p>
              
              <div className="row mb-4">
                <div className="col-md-6">
                  <h4 className="mb-3">Client</h4>
                  <p>{caseStudy.clientName}</p>
                  <p>{caseStudy.clientIndustry}</p>
                </div>
                <div className="col-md-6">
                  <h4 className="mb-3">Project Scope</h4>
                  <p>Type: {caseStudy.projectType}</p>
                  <p>Duration: {caseStudy.projectDuration}</p>
                </div>
              </div>
              
              <h4 className="mb-3">Project Goals</h4>
              <ul className="mb-4">
                {caseStudy.goals.map((goal, index) => (
                  <li key={index}>{goal}</li>
                ))}
              </ul>
              
              <h4 className="mb-3">Key Constraints</h4>
              <ul className="mb-4">
                {caseStudy.constraints.map((constraint, index) => (
                  <li key={index}>{constraint}</li>
                ))}
              </ul>
            </div>
            
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body">
                  <h4 className="card-title mb-3">Technologies Used</h4>
                  <div className="d-flex flex-wrap">
                    {caseStudy.technologies.map((tech, index) => (
                      <span key={index} className="badge bg-light text-dark me-2 mb-2">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {caseStudy.testimonial && (
                <div className="card border-0 bg-primary text-white shadow-sm">
                  <div className="card-body p-4">
                    <i className="bi bi-quote fs-1 mb-3 d-block"></i>
                    <blockquote className="mb-4">
                      <p className="mb-3 fst-italic">{caseStudy.testimonial.quote}</p>
                      <footer className="blockquote-footer text-white">
                        <strong>{caseStudy.testimonial.author}</strong>
                        <br />
                        {caseStudy.testimonial.position}
                      </footer>
                    </blockquote>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* The Forging Process */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">The Forging Process</h2>
          
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="timeline">
                <div className="row mb-5">
                  <div className="col-md-6">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body p-4">
                        <div className="d-flex align-items-center mb-3">
                          <span className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" 
                               style={{width: '40px', height: '40px'}}>1</span>
                          <h3 className="h5 mb-0">Discovery & Planning</h3>
                        </div>
                        <p>{caseStudy.process.discovery}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="row mb-5">
                  <div className="col-md-6 offset-md-6">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body p-4">
                        <div className="d-flex align-items-center mb-3">
                          <span className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" 
                               style={{width: '40px', height: '40px'}}>2</span>
                          <h3 className="h5 mb-0">Architecture & Design</h3>
                        </div>
                        <p>{caseStudy.process.architecture}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="row mb-5">
                  <div className="col-md-6">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body p-4">
                        <div className="d-flex align-items-center mb-3">
                          <span className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" 
                               style={{width: '40px', height: '40px'}}>3</span>
                          <h3 className="h5 mb-0">Development</h3>
                        </div>
                        <p>{caseStudy.process.development}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="row mb-5">
                  <div className="col-md-6 offset-md-6">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body p-4">
                        <div className="d-flex align-items-center mb-3">
                          <span className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" 
                               style={{width: '40px', height: '40px'}}>4</span>
                          <h3 className="h5 mb-0">Quality Assurance</h3>
                        </div>
                        <p>{caseStudy.process.qa}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="row">
                  <div className="col-md-6">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body p-4">
                        <div className="d-flex align-items-center mb-3">
                          <span className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" 
                               style={{width: '40px', height: '40px'}}>5</span>
                          <h3 className="h5 mb-0">Launch & Optimization</h3>
                        </div>
                        <p>{caseStudy.process.launch}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Technical Details</h2>
          
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto">
              <div className="card border-0 shadow">
                <div className="card-body p-4">
                  <h3 className="h5 mb-4">Security Measures</h3>
                  <ul className="list-group list-group-flush">
                    {caseStudy.securityMeasures.map((measure, index) => (
                      <li key={index} className="list-group-item bg-transparent">
                        <i className="bi bi-shield-check text-success me-2"></i>
                        {measure}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="bg-dark text-light p-4 rounded text-center">
                <h4 className="mb-4">Architecture Diagram</h4>
                <div className="ratio ratio-16x9">
                  {/* Placeholder for actual architecture diagram */}
                  <div className="d-flex align-items-center justify-content-center">
                    [Architecture Diagram: Secure distributed system with redundancy layers]
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Gallery */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Visual Gallery</h2>
          
          <div className="row g-4">
            {caseStudy.galleryImages.map((image, index) => (
              <div key={index} className="col-md-6">
                <div className="card border-0 shadow-sm h-100">
                  <div className="bg-dark text-light ratio ratio-16x9">
                    {/* Placeholder for actual gallery images */}
                    <div className="d-flex align-items-center justify-content-center">
                      [Gallery Image: {image.caption}]
                    </div>
                  </div>
                  <div className="card-body">
                    <p className="card-text text-center">{image.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Measurable Results */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Measurable Results</h2>
          
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <i className="bi bi-shield-check text-primary display-4"></i>
                  </div>
                  <h3 className="h5 mb-3">Resilience</h3>
                  <p>{caseStudy.results.performance}</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <i className="bi bi-graph-up-arrow text-primary display-4"></i>
                  </div>
                  <h3 className="h5 mb-3">Business Impact</h3>
                  <p>{caseStudy.results.business}</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <i className="bi bi-people text-primary display-4"></i>
                  </div>
                  <h3 className="h5 mb-3">User Adoption</h3>
                  <p>{caseStudy.results.userAdoption}</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <i className="bi bi-currency-dollar text-primary display-4"></i>
                  </div>
                  <h3 className="h5 mb-3">ROI</h3>
                  <p>{caseStudy.results.roi}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps CTA */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mb-4 mb-lg-0">
              <h2 className="mb-3">Interested in similar results for your project?</h2>
              <p className="lead mb-0">
                Our digital craftsmen are ready to help you build a solution that stands the test of time.
              </p>
            </div>
            <div className="col-lg-4 text-center text-lg-end">
              <Link to="/contact" className="btn btn-light btn-lg">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Related Projects</h2>
          
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="bg-dark text-light ratio ratio-16x9">
                  <div className="d-flex align-items-center justify-content-center">
                    [Project Image: E-commerce Platform]
                  </div>
                </div>
                <div className="card-body">
                  <h3 className="h5 card-title">Custom E-commerce Platform</h3>
                  <p className="card-text">High-performance e-commerce solution with enhanced security and conversion optimization.</p>
                  <Link to="/portfolio/ecommerce-site" className="btn btn-outline-primary">View Case Study</Link>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="bg-dark text-light ratio ratio-16x9">
                  <div className="d-flex align-items-center justify-content-center">
                    [Project Image: Logistics Software]
                  </div>
                </div>
                <div className="card-body">
                  <h3 className="h5 card-title">Logistics Management System</h3>
                  <p className="card-text">End-to-end logistics management system with robust security and high availability.</p>
                  <Link to="/portfolio/logistics-software" className="btn btn-outline-primary">View Case Study</Link>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-4 mx-auto">
              <div className="card border-0 shadow-sm h-100">
                <div className="bg-dark text-light ratio ratio-16x9">
                  <div className="d-flex align-items-center justify-content-center">
                    [Project Image: Healthcare Platform]
                  </div>
                </div>
                <div className="card-body">
                  <h3 className="h5 card-title">Healthcare Platform</h3>
                  <p className="card-text">Secure healthcare management system with patient data protection and high availability.</p>
                  <Link to="/portfolio/healthcare-platform" className="btn btn-outline-primary">View Case Study</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CaseStudy;