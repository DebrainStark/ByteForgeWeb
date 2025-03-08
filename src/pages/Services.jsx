import React, { useState, useEffect } from 'react';
import ServicesHeader from '../components/services/ServicesHeader';
import ServiceCard from '../components/services/ServiceCard';
import TechStack from '../components/services/TechStack';
import ServicesCTA from '../components/services/ServicesCTA';
import '../components/services/styles/services.css'

function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 1,
      title: "Websites Forged for Performance",
      description: "Our websites aren't just visually stunning; they're hand-coded masterpieces optimized for speed, security, and user experience. We craft every line of code with purpose, resulting in websites that load faster, rank higher, and convert better than template-based alternatives.",
      benefits: [
        { icon: "lightning-charge-fill", text: "40% faster loading times than industry average" },
        { icon: "graph-up-arrow", text: "Improved SEO performance and higher rankings" },
        { icon: "fingerprint", text: "Unique user experiences tailored to your brand" },
        { icon: "shield-check", text: "Enhanced security through custom code" }
      ],
      imgName: "web-development",
      reversed: false
    },
    {
      id: 2,
      title: "Mobile Experiences Built to Last",
      description: "In a world of rapidly changing technology, our mobile applications stand the test of time. We focus on native development rather than cookie-cutter solutions, creating apps that deliver superior performance, seamless updates, and platform-specific optimizations.",
      benefits: [
        { icon: "speedometer2", text: "Smooth performance across devices" },
        { icon: "arrow-repeat", text: "Seamless update processes" },
        { icon: "phone", text: "Platform-specific optimizations" },
        { icon: "battery-charging", text: "Battery and resource efficiency" }
      ],
      imgName: "mobile-app-development",
      reversed: true
    },
    {
      id: 3,
      title: "Enterprise Software with Craftsman Quality",
      description: "Our custom software solutions address your unique business challenges with precision and elegance. Unlike off-the-shelf products, our solutions are built specifically for your workflows, integrating seamlessly with your existing systems and scaling as your business grows.",
      benefits: [
        { icon: "arrows-angle-expand", text: "Scalability for growing businesses" },
        { icon: "puzzle", text: "Seamless integration capabilities" },
        { icon: "clock-history", text: "Future-proofed architecture" },
        { icon: "currency-dollar", text: "Demonstrable ROI for clients" }
      ],
      imgName: "software-solutions",
      reversed: false
    },
    {
      id: 4,
      title: "Digital Storefronts That Drive Conversion",
      description: "Our e-commerce solutions go beyond standard templates to create unique shopping experiences tailored to your brand and customer base. We focus on conversion optimization, efficient inventory management, and seamless user journeys that turn visitors into loyal customers.",
      benefits: [
        { icon: "graph-up", text: "35% higher conversion rates on average" },
        { icon: "box-seam", text: "Improved inventory management" },
        { icon: "cart-check", text: "Unique shopping experiences" },
        { icon: "credit-card", text: "Secure, customized payment processing" }
      ],
      imgName: "ecommerce-platforms",
      reversed: true
    }
  ];

  const techStack = [
    { icon: "filetype-js", name: "JavaScript" },
    { icon: "filetype-tsx", name: "React" },
    { icon: "filetype-py", name: "Python" },
    { icon: "database", name: "MongoDB" },
    { icon: "phone", name: "React Native" },
    { icon: "server", name: "Node.js" },
    { icon: "code-slash", name: "TypeScript" },
    { icon: "cloud", name: "AWS" }
  ];

  return (
    <div className={`services-page ${isVisible ? 'is-visible' : ''}`}>
      <ServicesHeader />
      
      <section className="services-overview py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="forge-accent-line mb-4"></div>
              <h2 className="mb-4 metallic-text">Digital Craftsmanship In Action</h2>
              <p className="forge-tagline mb-5">
                At ByteForge, we reject the template-driven approach that has become the industry standard. 
                Instead, we <span className="text-accent">craft custom digital solutions</span> that are meticulously built for your specific needs, 
                ensuring better performance, scalability, and a unique user experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {services.map(service => (
        <ServiceCard
          key={service.id}
          title={service.title}
          description={service.description}
          benefits={service.benefits}
          imgName={service.imgName}
          reversed={service.reversed}
        />
      ))}
      
      <TechStack technologies={techStack} />
      
      <ServicesCTA />
      
      <div className="forge-backdrop-deep"></div>
      <div className="forge-backdrop"></div>
      <div className="forge-grid-lines"></div>
      <div className="forge-accent-line"></div>
      <div className="forge-accent-glow left-glow"></div>
      <div className="forge-accent-glow right-glow"></div>
    </div>
  );
}

export default Services;