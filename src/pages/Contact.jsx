import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeframe: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    // For this example, we'll just simulate a successful submission
    
    try {
      // Simulating API call
      setTimeout(() => {
        setFormSubmitted(true);
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          projectType: '',
          budget: '',
          timeframe: '',
          message: ''
        });
      }, 1000);
    } catch (error) {
      setFormError(true);
    }
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-dark text-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold">Contact Us</h1>
              <p className="lead">Let's discuss how we can forge your digital solution</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <i className="bi bi-envelope text-primary display-4"></i>
                  </div>
                  <h3 className="h5 card-title">Email Us</h3>
                  <p className="card-text">
                    <a href="mailto:info@byteforge.com" className="text-decoration-none">info@byteforge.com</a>
                  </p>
                  <p className="text-muted small">We respond to all inquiries within 24 hours</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <i className="bi bi-telephone text-primary display-4"></i>
                  </div>
                  <h3 className="h5 card-title">Call Us</h3>
                  <p className="card-text">
                    <a href="tel:+1234567890" className="text-decoration-none">(123) 456-7890</a>
                  </p>
                  <p className="text-muted small">Available Monday-Friday, 9am-6pm ET</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <i className="bi bi-geo-alt text-primary display-4"></i>
                  </div>
                  <h3 className="h5 card-title">Visit Us</h3>
                  <p className="card-text">
                    123 Digital Forge Lane<br />
                    Tech City, TX 75001
                  </p>
                  <p className="text-muted small">By appointment only</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center mb-5">
              <h2>Start Your Project</h2>
              <p className="lead">
                Fill out the form below to tell us about your project, and we'll get back to you promptly to discuss how we can help.
              </p>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card border-0 shadow">
                <div className="card-body p-4 p-md-5">
                  {formSubmitted ? (
                    <div className="text-center py-5">
                      <div className="mb-4">
                        <i className="bi bi-check-circle text-success display-1"></i>
                      </div>
                      <h3 className="mb-3">Thank You!</h3>
                      <p className="lead mb-4">
                        Your message has been received. We'll contact you within 24 hours to discuss your project.
                      </p>
                      <button 
                        className="btn btn-primary" 
                        onClick={() => setFormSubmitted(false)}
                      >
                        Submit Another Request
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      {formError && (
                        <div className="alert alert-danger mb-4">
                          There was an error submitting your form. Please try again.
                        </div>
                      )}
                      
                      <div className="row g-3 mb-4">
                        <div className="col-md-6">
                          <label htmlFor="name" className="form-label">Name *</label>
                          <input 
                            type="text" 
                            className="form-control" 
                            id="name" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            required 
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="email" className="form-label">Email *</label>
                          <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                          />
                        </div>
                      </div>
                      
                      <div className="row g-3 mb-4">
                        <div className="col-md-6">
                          <label htmlFor="phone" className="form-label">Phone</label>
                          <input 
                            type="tel" 
                            className="form-control" 
                            id="phone" 
                            name="phone" 
                            value={formData.phone} 
                            onChange={handleChange} 
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="company" className="form-label">Company</label>
                          <input 
                            type="text" 
                            className="form-control" 
                            id="company" 
                            name="company" 
                            value={formData.company} 
                            onChange={handleChange} 
                          />
                        </div>
                      </div>
                      
                      <div className="row g-3 mb-4">
                        <div className="col-md-4">
                          <label htmlFor="projectType" className="form-label">Project Type *</label>
                          <select 
                            className="form-select" 
                            id="projectType" 
                            name="projectType" 
                            value={formData.projectType} 
                            onChange={handleChange} 
                            required
                          >
                            <option value="" disabled>Select type</option>
                            <option value="website">Website</option>
                            <option value="mobileApp">Mobile App</option>
                            <option value="software">Software Solution</option>
                            <option value="ecommerce">E-commerce</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div className="col-md-4">
                          <label htmlFor="budget" className="form-label">Budget Range</label>
                          <select 
                            className="form-select" 
                            id="budget" 
                            name="budget" 
                            value={formData.budget} 
                            onChange={handleChange}
                          >
                            <option value="" disabled>Select budget</option>
                            <option value="less10k">Less than $10,000</option>
                            <option value="10k-25k">$10,000 - $25,000</option>
                            <option value="25k-50k">$25,000 - $50,000</option>
                            <option value="50k-100k">$50,000 - $100,000</option>
                            <option value="more100k">$100,000+</option>
                            <option value="notSure">Not sure yet</option>
                          </select>
                        </div>
                        <div className="col-md-4">
                          <label htmlFor="timeframe" className="form-label">Timeframe</label>
                          <select 
                            className="form-select" 
                            id="timeframe" 
                            name="timeframe" 
                            value={formData.timeframe} 
                            onChange={handleChange}
                          >
                            <option value="" disabled>Select timeframe</option>
                            <option value="asap">ASAP</option>
                            <option value="1-3months">1-3 months</option>
                            <option value="3-6months">3-6 months</option>
                            <option value="6months+">6+ months</option>
                            <option value="notSure">Not sure yet</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="message" className="form-label">Project Details *</label>
                        <textarea 
                          className="form-control" 
                          id="message" 
                          name="message" 
                          rows="5" 
                          value={formData.message} 
                          onChange={handleChange} 
                          required
                          placeholder="Tell us about your project, goals, and any specific requirements..."
                        ></textarea>
                      </div>
                      
                      <div className="form-check mb-4">
                        <input className="form-check-input" type="checkbox" id="privacyPolicy" required />
                        <label className="form-check-label" htmlFor="privacyPolicy">
                          I agree to the <a href="#" className="text-decoration-none">Privacy Policy</a> and consent to being contacted about my inquiry.
                        </label>
                      </div>
                      
                      <div className="text-center">
                        <button type="submit" className="btn btn-primary btn-lg px-5">
                          Submit Request
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2>Frequently Asked Questions</h2>
              <p className="lead">
                Here are answers to some common questions about working with ByteForge.
              </p>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="accordion" id="contactFAQ">
                <div className="accordion-item border-0 mb-3 shadow-sm">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      What is your typical process for new projects?
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#contactFAQ">
                    <div className="accordion-body">
                      <p>
                        Our process begins with a thorough discovery phase where we learn about your business, goals, and requirements. 
                        We then create a detailed proposal and roadmap before moving into design, development, testing, and deployment. 
                        You can learn more on our <a href="/process" className="text-decoration-none">Process page</a>.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item border-0 mb-3 shadow-sm">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      How long does a typical project take?
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#contactFAQ">
                    <div className="accordion-body">
                      <p>
                        Project timelines vary based on complexity and scope. A standard website might take 6-8 weeks, 
                        while a custom software solution or complex e-commerce platform could take 3-6 months. 
                        During our initial consultation, we'll provide a more accurate timeline based on your specific needs.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item border-0 mb-3 shadow-sm">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Do you offer maintenance and support after launch?
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#contactFAQ">
                    <div className="accordion-body">
                      <p>
                        Yes, we offer several maintenance and support packages to ensure your digital product remains 
                        secure, up-to-date, and performing optimally. These range from basic security updates to 
                        comprehensive support with feature enhancements and strategic roadmapping.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item border-0 mb-3 shadow-sm">
                  <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      How much does a typical project cost?
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#contactFAQ">
                    <div className="accordion-body">
                      <p>
                        Project costs vary widely based on requirements, complexity, and scope. Our custom solutions typically 
                        start at $10,000 for smaller websites and can range to $100,000+ for enterprise software solutions. 
                        We provide detailed quotes after understanding your specific needs during our consultation.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item border-0 shadow-sm">
                  <h2 className="accordion-header" id="headingFive">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                      What makes ByteForge different from other development companies?
                    </button>
                  </h2>
                  <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#contactFAQ">
                    <div className="accordion-body">
                      <p>
                        ByteForge approaches digital development as craftsmen, not factory workers. We hand-code custom 
                        solutions rather than relying on templates or pre-built components. This craftsmanship approach 
                        results in faster, more secure, and more maintainable digital products that stand the test of time. 
                        Our focus is on long-term quality and performance, not quick turnarounds at the expense of durability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Placeholder */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="ratio ratio-21x9 bg-dark rounded shadow">
                {/* Placeholder for actual Google Map */}
                <div className="d-flex align-items-center justify-content-center text-light">
                  [Google Map: ByteForge Office Location]
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;