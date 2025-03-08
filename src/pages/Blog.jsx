import { useState } from 'react';
import { Link } from 'react-router-dom';

function Blog() {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 'crafting-secure-finance-apps',
      title: 'Crafting Secure Financial Applications: Lessons from the Front Lines',
      excerpt: 'How our craftsmanship approach helped a financial services app withstand a major DDOS attack while competitors failed.',
      category: 'Case Breakdowns',
      author: 'Otoibhi "Stark" Anthony',
      date: 'March 15, 2025',
      image: '/src/assets/images/blog/financial-app-security.jpg',
      featured: true
    },
    {
      id: 'digital-blacksmithing-vs-templates',
      title: 'Digital Blacksmithing vs. Templates: The True Cost of Cheap Solutions',
      excerpt: 'A deep dive into why hand-crafted digital solutions ultimately provide better ROI than off-the-shelf templates.',
      category: 'Digital Blacksmithing',
      author: 'Abe "AbleJohn" John',
      date: 'March 5, 2025',
      image: '/src/assets/images/blog/blacksmithing-vs-templates.jpg',
      featured: true
    },
    {
      id: 'building-resilient-architecture',
      title: 'Building Resilient Architecture: Security by Design',
      excerpt: 'How to integrate security principles from the ground up for truly resilient digital applications.',
      category: 'Craft of Code',
      author: 'Otoibhi "Stark" Anthony',
      date: 'February 28, 2025',
      image: '/src/assets/images/blog/resilient-architecture.jpg',
      featured: true
    },
    {
      id: 'performance-optimization-techniques',
      title: 'Advanced Performance Optimization Techniques for Modern Web Applications',
      excerpt: 'Technical strategies we use to achieve 40% faster loading times than industry standards.',
      category: 'Craft of Code',
      author: 'Otoibhi "Stark" Anthony',
      date: 'February 15, 2025',
      image: '/src/assets/images/blog/performance-optimization.jpg',
      featured: false
    },
    {
      id: 'ecommerce-conversion-optimization',
      title: 'E-commerce Conversion Optimization: Beyond the Basics',
      excerpt: 'Advanced strategies for increasing conversion rates through thoughtful UX design and performance tuning.',
      category: 'Industry Insights',
      author: 'Abe "AbleJohn" John',
      date: 'February 5, 2025',
      image: '/src/assets/images/blog/ecommerce-optimization.jpg',
      featured: false
    },
    {
      id: 'future-of-digital-craftsmanship',
      title: 'The Future of Digital Craftsmanship in an AI-Dominated World',
      excerpt: 'How human craftsmanship remains relevant and essential even as AI tools transform the development landscape.',
      category: 'Digital Blacksmithing',
      author: 'Abe "AbleJohn" John',
      date: 'January 25, 2025',
      image: '/src/assets/images/blog/future-craftsmanship.jpg',
      featured: false
    },
    {
      id: 'healthcare-app-development',
      title: 'Healthcare Application Development: Balancing Compliance and User Experience',
      excerpt: 'How we navigate the complex requirements of healthcare applications while still delivering exceptional UX.',
      category: 'Case Breakdowns',
      author: 'Otoibhi "Stark" Anthony',
      date: 'January 15, 2025',
      image: '/src/assets/images/blog/healthcare-development.jpg',
      featured: false
    },
    {
      id: 'pwa-development-strategies',
      title: 'Progressive Web App Development Strategies for 2025',
      excerpt: 'Current best practices for PWAs that deliver native-like experiences with web technology advantages.',
      category: 'Craft of Code',
      author: 'Abe "AbleJohn" John',
      date: 'January 5, 2025',
      image: '/src/assets/images/blog/pwa-strategies.jpg',
      featured: false
    }
  ];

  // Filter state
  const [activeCategory, setActiveCategory] = useState('all');

  // Filter blog posts by category
  const filteredPosts = activeCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  // Get unique categories
  const categories = [...new Set(blogPosts.map(post => post.category))];

  return (
    <>
      {/* Featured Posts Section */}
      <section className="py-5 bg-dark text-light">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6">
              <h1 className="display-4 fw-bold">ByteForge Insights</h1>
              <p className="lead">
                Thoughts, stories, and ideas from our digital craftsmen
              </p>
            </div>
          </div>
          <div className="row g-4">
            {blogPosts.filter(post => post.featured).map(post => (
              <div key={post.id} className="col-md-4">
                <div className="card h-100 border-0 shadow">
                  <div className="bg-light ratio ratio-16x9">
                    {/* Placeholder for actual blog post image */}
                    <div className="d-flex align-items-center justify-content-center text-dark">
                      [Image: {post.title}]
                    </div>
                  </div>
                  <div className="card-body">
                    <span className="badge bg-primary mb-2">{post.category}</span>
                    <h3 className="h5 card-title">
                      <Link to={`/blog/${post.id}`} className="text-decoration-none text-dark">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="card-text">{post.excerpt}</p>
                  </div>
                  <div className="card-footer bg-white border-0">
                    <div className="d-flex align-items-center">
                      <div className="rounded-circle bg-dark text-light d-flex justify-content-center align-items-center me-2" 
                           style={{width: '40px', height: '40px', flexShrink: 0}}>
                        {post.author.charAt(0)}
                      </div>
                      <div>
                        <p className="mb-0 small">{post.author}</p>
                        <p className="mb-0 small text-muted">{post.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts List */}
      <section className="py-5">
        <div className="container">
          {/* Category Filter */}
          <div className="row mb-5">
            <div className="col-12">
              <div className="d-flex flex-wrap justify-content-center">
                <button 
                  className={`btn ${activeCategory === 'all' ? 'btn-primary' : 'btn-outline-primary'} me-2 mb-2`}
                  onClick={() => setActiveCategory('all')}
                >
                  All Posts
                </button>
                {categories.map(category => (
                  <button 
                    key={category}
                    className={`btn ${activeCategory === category ? 'btn-primary' : 'btn-outline-primary'} me-2 mb-2`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Posts Grid */}
          <div className="row g-4">
            {filteredPosts.map(post => (
              <div key={post.id} className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="bg-light ratio ratio-16x9">
                    {/* Placeholder for actual blog post image */}
                    <div className="d-flex align-items-center justify-content-center text-dark">
                      [Image: {post.title}]
                    </div>
                  </div>
                  <div className="card-body">
                    <span className="badge bg-secondary mb-2">{post.category}</span>
                    <h3 className="h5 card-title">
                      <Link to={`/blog/${post.id}`} className="text-decoration-none text-dark">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="card-text">{post.excerpt}</p>
                  </div>
                  <div className="card-footer bg-white border-0">
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">{post.date}</small>
                      <Link to={`/blog/${post.id}`} className="btn btn-sm btn-outline-primary">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Library */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <h2>Resource Library</h2>
              <p className="lead">
                Downloadable guides, webinars, and tools to help you implement digital craftsmanship principles.
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <i className="bi bi-file-earmark-pdf text-danger display-4"></i>
                  </div>
                  <h3 className="h5 card-title">Security-First Architecture Guide</h3>
                  <p className="card-text">Learn how to build resilient applications with security at their core.</p>
                  <a href="#" className="btn btn-outline-primary mt-2">Download PDF</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <i className="bi bi-camera-video text-primary display-4"></i>
                  </div>
                  <h3 className="h5 card-title">Performance Optimization Webinar</h3>
                  <p className="card-text">Watch our technical team explain advanced performance techniques.</p>
                  <a href="#" className="btn btn-outline-primary mt-2">Watch Recording</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <i className="bi bi-calculator text-success display-4"></i>
                  </div>
                  <h3 className="h5 card-title">Template vs. Custom ROI Calculator</h3>
                  <p className="card-text">Calculate the long-term ROI difference between template and custom solutions.</p>
                  <a href="#" className="btn btn-outline-primary mt-2">Use Calculator</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <i className="bi bi-book text-warning display-4"></i>
                  </div>
                  <h3 className="h5 card-title">Craftsmanship Best Practices E-Book</h3>
                  <p className="card-text">A comprehensive guide to implementing craftsmanship principles in development.</p>
                  <a href="#" className="btn btn-outline-primary mt-2">Download E-Book</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 bg-primary text-white shadow">
                <div className="card-body p-5 text-center">
                  <h2 className="mb-3">Subscribe to Our Newsletter</h2>
                  <p className="lead mb-4">
                    Receive monthly insights on digital craftsmanship, technical best practices, and industry trends.
                  </p>
                  <div className="row justify-content-center">
                    <div className="col-md-8">
                      <form className="d-flex">
                        <input 
                          type="email" 
                          className="form-control me-2" 
                          placeholder="Your email address" 
                          aria-label="Email" 
                        />
                        <button className="btn btn-light" type="submit">Subscribe</button>
                      </form>
                      <p className="small mt-2 mb-0">
                        We respect your privacy. Unsubscribe at any time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;