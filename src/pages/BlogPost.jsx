import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function BlogPost() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real application, you would fetch this from an API
    // For this example, we'll use mock data
    setTimeout(() => {
      // Sample blog post data
      const blogPosts = {
        'crafting-secure-finance-apps': {
          id: 'crafting-secure-finance-apps',
          title: 'Crafting Secure Financial Applications: Lessons from the Front Lines',
          excerpt: 'How our craftsmanship approach helped a financial services app withstand a major DDOS attack while competitors failed.',
          content: `
            <p>In the financial services industry, security isn't just a feature—it's the foundation upon which everything else is built. When SecureFinance approached ByteForge to develop their mobile banking application, they were clear about their primary concern: creating a platform that could withstand increasingly sophisticated cyber threats while still delivering an exceptional user experience.</p>
            
            <h2>The Template Trap</h2>
            
            <p>Many financial applications are built on standardized frameworks and templates that prioritize speed of deployment over security and resilience. While these approaches have their place, they create a dangerous homogeneity in the financial services ecosystem—when a vulnerability is discovered in one application, it often affects dozens or hundreds of others built on the same foundation.</p>
            
            <p>SecureFinance had previously experienced this firsthand when a vulnerability in a third-party library affected their web platform, along with numerous competitors using the same technology stack. They approached ByteForge with a clear mandate: build something different.</p>
            
            <h2>The Craftsmanship Approach to Security</h2>
            
            <p>Rather than beginning with a template or framework, we started from first principles, asking fundamental questions about the security model:</p>
            
            <ul>
              <li>What are the most sensitive data elements, and how can we minimize their exposure?</li>
              <li>How can we create defense-in-depth, with multiple security layers that don't rely on a single point of protection?</li>
              <li>How can we architect the system to remain resilient even when under attack?</li>
              <li>How can we detect and respond to threats in real-time?</li>
            </ul>
            
            <p>This first-principles approach led us to hand-code critical security components rather than relying exclusively on third-party libraries. While this required more upfront development time, it created a unique security architecture that wasn't susceptible to the same vulnerabilities as template-based solutions.</p>
            
            <h2>Key Security Innovations</h2>
            
            <p>Some of the custom security measures we implemented included:</p>
            
            <h3>1. Distributed Authentication System</h3>
            
            <p>Rather than centralizing authentication, we created a distributed system that prevented attackers from targeting a single point of failure. This included:</p>
            
            <ul>
              <li>Multi-factor authentication with device fingerprinting</li>
              <li>Behavioral analytics to detect unusual access patterns</li>
              <li>Geographically distributed authentication nodes</li>
            </ul>
            
            <h3>2. Custom Encryption Implementation</h3>
            
            <p>While we used standard encryption algorithms (never roll your own crypto!), we implemented a custom key management system that significantly improved resilience against common attack vectors:</p>
            
            <ul>
              <li>Dynamic key rotation based on usage patterns</li>
              <li>Layered encryption for different data sensitivity levels</li>
              <li>Secure key storage with hardware-level protection</li>
            </ul>
            
            <h3>3. Resilient Architecture</h3>
            
            <p>Perhaps most importantly, we designed the system architecture with resilience as a primary goal:</p>
            
            <ul>
              <li>Redundant systems with automated failover</li>
              <li>Intelligent rate limiting and traffic analysis</li>
              <li>Regional isolation to contain potential breaches</li>
              <li>Graceful degradation capabilities during attack conditions</li>
            </ul>
            
            <h2>The Attack That Proved Our Approach</h2>
            
            <p>Six months after deployment, the financial services industry was hit with a widespread DDOS attack that targeted mobile banking applications. Multiple institutions experienced significant downtime, with some platforms remaining offline for 12+ hours.</p>
            
            <p>SecureFinance's application, however, maintained 100% uptime throughout the attack. The distributed architecture and custom traffic management systems were able to identify and mitigate the attack vectors in real-time, without disrupting legitimate user traffic.</p>
            
            <p>In the post-attack analysis, a clear pattern emerged: applications built on popular templates and frameworks were disproportionately affected, while custom-built solutions like SecureFinance's demonstrated significantly higher resilience.</p>
            
            <h2>The ROI of Craftsmanship</h2>
            
            <p>While the initial development of SecureFinance's application required approximately 30% more time and budget compared to a template-based approach, the ROI became clear during and after the attack:</p>
            
            <ul>
              <li>Zero downtime during a major industry-wide attack</li>
              <li>Preservation of customer trust and company reputation</li>
              <li>No emergency response costs or overtime expenses</li>
              <li>No post-attack remediation or repair costs</li>
              <li>Competitive advantage as competitors struggled to restore service</li>
            </ul>
            
            <p>SecureFinance estimates that the craftsmanship approach to their application development has already delivered a 250% ROI in the first year, purely from avoided costs and business continuity benefits.</p>
            
            <h2>Lessons for All Digital Products</h2>
            
            <p>While financial applications have unique security requirements, the craftsmanship approach offers valuable lessons for digital products across all industries:</p>
            
            <ol>
              <li><strong>Question standard approaches</strong>: Templates and frameworks have their place, but don't accept them uncritically, especially for mission-critical functionality.</li>
              <li><strong>Invest in resilience</strong>: System resilience under attack or high stress should be a design consideration from day one, not an afterthought.</li>
              <li><strong>Hand-craft critical components</strong>: Identify the most crucial elements of your system and consider custom development rather than off-the-shelf solutions.</li>
              <li><strong>Design for graceful degradation</strong>: Even the best systems will face challenges—design yours to maintain core functionality even when under stress.</li>
              <li><strong>Consider the full ROI</strong>: Development cost is just one factor in the total return on investment. Factor in resilience, maintenance, and potential downtime costs when making build-vs-buy decisions.</li>
            </ol>
            
            <h2>Conclusion</h2>
            
            <p>The digital craftsmanship approach isn't about reinventing every wheel—it's about thoughtfully evaluating where custom solutions deliver genuine value and applying craftsmanship principles to those critical components.</p>
            
            <p>In SecureFinance's case, this approach created a tangible competitive advantage and demonstrated that when it comes to mission-critical applications, the old adage holds true: quality remains long after price is forgotten.</p>
          `,
          category: 'Case Breakdowns',
          author: 'Otoibhi "Stark" Anthony',
          authorTitle: 'Co-Founder & Technical Lead',
          authorBio: 'With a background in systems engineering and a passion for clean, efficient code, Stark brings technical precision to every ByteForge project. His meticulous attention to detail ensures that every solution is not just functional but optimized for performance.',
          date: 'March 15, 2025',
          image: '/src/assets/images/blog/financial-app-security.jpg',
          readTime: '8 min read',
          tags: ['Security', 'Mobile Development', 'Financial Services', 'Case Study']
        },
        // Other blog posts would be defined here
      };

      // Find the requested blog post
      const foundPost = blogPosts[postId];
      setPost(foundPost);
      setLoading(false);
    }, 500);
  }, [postId]);

  // Related posts data (in a real application, this would be fetched or calculated)
  const relatedPosts = [
    {
      id: 'building-resilient-architecture',
      title: 'Building Resilient Architecture: Security by Design',
      excerpt: 'How to integrate security principles from the ground up for truly resilient digital applications.',
      category: 'Craft of Code',
      author: 'Otoibhi "Stark" Anthony',
      date: 'February 28, 2025',
      image: '/src/assets/images/blog/resilient-architecture.jpg'
    },
    {
      id: 'digital-blacksmithing-vs-templates',
      title: 'Digital Blacksmithing vs. Templates: The True Cost of Cheap Solutions',
      excerpt: 'A deep dive into why hand-crafted digital solutions ultimately provide better ROI than off-the-shelf templates.',
      category: 'Digital Blacksmithing',
      author: 'Abe "AbleJohn" John',
      date: 'March 5, 2025',
      image: '/src/assets/images/blog/blacksmithing-vs-templates.jpg'
    },
    {
      id: 'performance-optimization-techniques',
      title: 'Advanced Performance Optimization Techniques for Modern Web Applications',
      excerpt: 'Technical strategies we use to achieve 40% faster loading times than industry standards.',
      category: 'Craft of Code',
      author: 'Otoibhi "Stark" Anthony',
      date: 'February 15, 2025',
      image: '/src/assets/images/blog/performance-optimization.jpg'
    }
  ];

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">Loading article...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container py-5 text-center">
        <h2>Article Not Found</h2>
        <p>Sorry, the article you're looking for doesn't exist or has been moved.</p>
        <Link to="/blog" className="btn btn-primary mt-3">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-5 bg-dark text-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="mb-3">
                <span className="badge bg-primary px-3 py-2">{post.category}</span>
              </div>
              <h1 className="display-4 fw-bold mb-4">{post.title}</h1>
              <div className="d-flex justify-content-center align-items-center mb-4">
                <div className="rounded-circle bg-light text-dark d-flex justify-content-center align-items-center me-2" 
                     style={{width: '50px', height: '50px', flexShrink: 0}}>
                  {post.author.charAt(0)}
                </div>
                <div className="text-start">
                  <p className="mb-0">{post.author}</p>
                  <p className="mb-0 small text-light opacity-75">{post.date} · {post.readTime}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="bg-dark text-light ratio ratio-16x9 rounded shadow">
                {/* Placeholder for actual blog post image */}
                <div className="d-flex align-items-center justify-content-center">
                  [Featured Image: {post.title}]
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {/* Article content */}
              <div className="article-content" dangerouslySetInnerHTML={{ __html: post.content }}></div>
              
              {/* Tags */}
              <div className="mt-5 pt-4 border-top">
                <h4 className="h6 mb-3">Tagged with:</h4>
                <div className="d-flex flex-wrap">
                  {post.tags && post.tags.map((tag, index) => (
                    <a key={index} href="#" className="badge bg-light text-dark text-decoration-none me-2 mb-2 px-3 py-2">
                      {tag}
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Author Bio */}
              <div className="mt-5 pt-4 border-top">
                <div className="d-flex">
                  <div className="rounded-circle bg-dark text-light d-flex justify-content-center align-items-center me-3" 
                       style={{width: '70px', height: '70px', flexShrink: 0}}>
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="h5 mb-1">{post.author}</h4>
                    <p className="text-muted mb-2">{post.authorTitle}</p>
                    <p className="mb-0">{post.authorBio}</p>
                  </div>
                </div>
              </div>
              
              {/* Social Sharing */}
              <div className="mt-5 pt-4 border-top">
                <h4 className="h6 mb-3">Share this article:</h4>
                <div className="d-flex">
                  <a href="#" className="btn btn-outline-primary me-2">
                    <i className="bi bi-twitter me-2"></i>Twitter
                  </a>
                  <a href="#" className="btn btn-outline-primary me-2">
                    <i className="bi bi-linkedin me-2"></i>LinkedIn
                  </a>
                  <a href="#" className="btn btn-outline-primary me-2">
                    <i className="bi bi-facebook me-2"></i>Facebook
                  </a>
                  <a href="#" className="btn btn-outline-primary">
                    <i className="bi bi-envelope me-2"></i>Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12">
              <h2 className="h3">Related Articles</h2>
            </div>
          </div>
          <div className="row g-4">
            {relatedPosts.map(relatedPost => (
              <div key={relatedPost.id} className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="bg-dark text-light ratio ratio-16x9">
                    {/* Placeholder for actual related post image */}
                    <div className="d-flex align-items-center justify-content-center">
                      [Image: {relatedPost.title}]
                    </div>
                  </div>
                  <div className="card-body">
                    <span className="badge bg-secondary mb-2">{relatedPost.category}</span>
                    <h3 className="h5 card-title">
                      <Link to={`/blog/${relatedPost.id}`} className="text-decoration-none text-dark">
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <p className="card-text">{relatedPost.excerpt}</p>
                  </div>
                  <div className="card-footer bg-white border-0">
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">{relatedPost.date}</small>
                      <Link to={`/blog/${relatedPost.id}`} className="btn btn-sm btn-outline-primary">
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

      {/* Newsletter CTA */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 bg-primary text-white shadow">
                <div className="card-body p-5 text-center">
                  <h2 className="mb-3">Subscribe to Our Newsletter</h2>
                  <p className="lead mb-4">
                    Get more insights on digital craftsmanship delivered to your inbox.
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

export default BlogPost;