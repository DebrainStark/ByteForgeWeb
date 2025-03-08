import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProcessHeader from '../components/process/ProcessHeader';
import ForgeIntro from '../components/process/ForgeIntro';
import ProcessStageCard from '../components/process/ProcessStageCard';
import ForgeVisualization from '../components/process/ForgeVisualization';
import CollaborationModel from '../components/process/CollaborationModel';
import '../components/process/styles/process.css';

function Process() {
  const [isVisible, setIsVisible] = useState(false);
  
  // Scroll reveal effect
  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const sections = document.querySelectorAll('.reveal-section');
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.85) {
          section.classList.add('is-visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Process stages data
  const processStages = [
    {
      id: 'discovery',
      icon: 'search',
      number: '01',
      title: 'Discovery & Planning',
      subtitle: 'The Blueprint',
      description: 'Just as a blacksmith first understands the purpose of the tool they are re creating, we begin by deeply understanding your business goals and user needs.',
      tasks: [
        'In-depth stakeholder interviews',
        'Market and competitor analysis',
        'User experience research',
        'Technical feasibility assessment',
        'Comprehensive documentation of requirements'
      ],
      conclusion: 'The result is a clear blueprint that guides our work, ensuring that every line of code serves a specific purpose aligned with your business objectives.',
      sidePanel: {
        title: 'Research Methodologies',
        items: [
          {
            title: 'Stakeholder Interviews',
            description: 'We conduct detailed interviews with key stakeholders to understand business goals, constraints, and success metrics from multiple perspectives.'
          },
          {
            title: 'User Research',
            description: 'Through surveys, interviews, and usability testing, we gain insight into user needs, behaviors, and pain points to inform our approach.'
          },
          {
            title: 'Technical Assessment',
            description: 'Our experts evaluate existing systems, integration requirements, and potential technical challenges to create a solid foundation for development.'
          }
        ]
      }
    },
    {
      id: 'architecture',
      icon: 'diagram-3',
      number: '02',
      title: 'Architecture & Design',
      subtitle: 'Selecting the Raw Materials',
      description: 'Like a blacksmith selecting the right metals and tools, we carefully choose the technologies and frameworks that will form the foundation of your solution.',
      tasks: [
        'Technology stack selection based on project requirements',
        'System architecture design with scalability in mind',
        'Database schema and data flow planning',
        'API design and integration strategy',
        'Creation of a comprehensive design system'
      ],
      conclusion: 'The architectures we design are built to last, with careful consideration of future growth, security needs, and performance requirements.',
      sidePanel: {
        title: 'Technical Foundation',
        items: [
          {
            title: 'Architecture Planning',
            description: 'We craft detailed architectural diagrams that outline system components, data flows, and integration points.'
          },
          {
            title: 'Technology Selection',
            description: 'We choose technologies not based on trends, but on their suitability for your specific needs and long-term viability.'
          },
          {
            title: 'Design Systems',
            description: 'We create comprehensive design systems that ensure consistency, accessibility, and scalability across your entire digital product.'
          },
          {
            title: 'Security Planning',
            description: 'Security is built into the architecture from the beginning, not added as an afterthought once vulnerabilities are discovered.'
          }
        ]
      }
    },
    {
      id: 'development',
      icon: 'code-square',
      number: '03',
      title: 'Development',
      subtitle: 'The Forge',
      description: 'This is where the actual forging happens. Our skilled developers craft your solution with precision and care, writing clean, efficient code that stands the test of time.',
      tasks: [
        'Iterative development with regular checkpoints',
        'Clean, well-documented code following best practices',
        'Regular code reviews to ensure quality and knowledge sharing',
        'Continuous integration and unit testing',
        'Performance optimization from the ground up'
      ],
      conclusion: 'Unlike mass-produced template solutions, we hand-craft each component of your digital product, ensuring that it is optimized, efficient, and built to your exact specifications.',
      sidePanel: {
        title: 'Code Quality Processes',
        items: [
          {
            title: 'Peer Code Reviews',
            description: 'All code undergoes thorough peer review to catch issues, share knowledge, and ensure adherence to coding standards.'
          },
          {
            title: 'Automated Testing',
            description: 'We implement comprehensive test suites to ensure functionality works as expected and continues to work as the codebase evolves.'
          },
          {
            title: 'Documentation',
            description: 'We produce clear, thorough documentation that makes maintenance and future development smoother and more efficient.'
          }
        ]
      }
    },
    {
      id: 'quality',
      icon: 'shield-check',
      number: '04',
      title: 'Quality Assurance',
      subtitle: 'Tempering the Metal',
      description: 'Just as a blacksmith tests and refines their work, we subject your solution to rigorous testing to ensure it meets our high standards of quality.',
      tasks: [
        'Comprehensive functional testing',
        'Performance and load testing',
        'Security audits and vulnerability testing',
        'Cross-browser and cross-device compatibility testing',
        'Accessibility compliance verification'
      ],
      conclusion: 'We do not just test for functionality; we test for exceptional performance, security, and user experience across all possible scenarios.',
      sidePanel: {
        title: 'Testing Methodologies',
        items: [
          {
            title: 'Performance Testing',
            description: 'We conduct load testing, stress testing, and endurance testing to ensure your application performs well under various conditions, including high traffic and extended use.'
          },
          {
            title: 'Security Testing',
            description: 'Our security testing includes penetration testing, vulnerability scanning, and security code reviews to identify and address potential security issues before deployment.'
          },
          {
            title: 'Usability Testing',
            description: 'We conduct user testing with real users to ensure the application is intuitive, accessible, and provides a positive user experience across different devices and browsers.'
          }
        ]
      }
    },
    {
      id: 'deployment',
      icon: 'rocket-takeoff',
      number: '05',
      title: 'Deployment',
      subtitle: 'Finishing Touches',
      description: 'When the product is ready, we deploy it with the same care and precision used throughout the development process.',
      tasks: [
        'Careful staging and production environment setup',
        'Deployment automation to minimize human error',
        'Comprehensive monitoring and alerting systems',
        'Zero-downtime deployment strategies',
        'Post-deployment verification and testing'
      ],
      conclusion: 'Our deployment process is designed to be smooth and risk-free, ensuring your users have immediate access to a stable, high-performing solution.',
      sidePanel: {
        title: 'Deployment Strategies',
        items: [
          {
            title: 'Blue-Green Deployment',
            description: 'We use blue-green deployment to minimize downtime and risk by maintaining two identical production environments, switching between them for each release.'
          },
          {
            title: 'Canary Releases',
            description: 'For high-traffic applications, we implement canary releases, gradually rolling out changes to a small subset of users before full deployment.'
          },
          {
            title: 'Automated Rollbacks',
            description: 'Our deployment systems include automated monitoring and rollback capabilities to quickly revert to the previous stable version if any issues are detected.'
          }
        ]
      }
    },
    {
      id: 'maintenance',
      icon: 'arrow-up-circle',
      number: '06',
      title: 'Maintenance & Growth',
      subtitle: 'Lasting Quality',
      description: 'Our relationship does not end at deployment. We provide ongoing support and enhancement to ensure your solution continues to deliver value over time.',
      tasks: [
        'Proactive monitoring and maintenance',
        'Regular security updates and patches',
        'Performance optimization based on real-world usage data',
        'Feature enhancements and expansions',
        'Strategic technology roadmapping for future growth'
      ],
      conclusion: 'We build long-term partnerships with our clients, helping them evolve their digital products to meet changing business needs and user expectations.',
      sidePanel: {
        title: 'Maintenance Packages',
        table: {
          headers: ['Service', 'Essential', 'Premium', 'Enterprise'],
          rows: [
            ['Monitoring', true, true, true],
            ['Security Updates', true, true, true],
            ['Bug Fixes', true, true, true],
            ['Performance Optimization', false, true, true],
            ['Feature Enhancements', false, true, true],
            ['Strategic Roadmapping', false, false, true],
            ['Dedicated Support', 'Business Hours', 'Extended Hours', '24/7']
          ]
        }
      }
    }
  ];

  return (
    <div className={`process-page ${isVisible ? 'is-visible' : ''}`}>
      <ProcessHeader />
      <ForgeIntro />
      <ForgeVisualization />
      
      <section className="process-stages-section">
        <div className="container">
          <div className="process-stages-container">
            {processStages.map((stage, index) => (
              <ProcessStageCard 
                key={stage.id}
                stage={stage}
                isEven={index % 2 !== 0}
                index={index}
              />
            ))}
          </div>
        </div>
        <div className="forge-ember-container bottom-embers"></div>
      </section>
      
      <CollaborationModel />
      
      <section className="process-cta-section reveal-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="forge-cta-card">
                <div className="forge-fire">
                  <div className="fire-base">
                    <div className="coal coal-1"></div>
                    <div className="coal coal-2"></div>
                    <div className="coal coal-3"></div>
                  </div>
                  <div className="fire-glow"></div>
                  <div className="fire-flames">
                    <div className="flame flame-1"></div>
                    <div className="flame flame-2"></div>
                    <div className="flame flame-3"></div>
                  </div>
                </div>
                
                <div className="forge-cta-content">
                  <h2 className="metallic-text mb-4">Ready to Start Your Project?</h2>
                  <p className="forge-tagline mb-4">
                    Let's discuss how our <span className="text-accent">craftsmanship approach</span> can transform your digital idea into reality.
                  </p>
                  <Link to="/contact" className="forge-button forge-button-large">
                    <i className="bi bi-anvil button-icon"></i>
                    Begin The Journey
                    <div className="button-glow"></div>
                  </Link>
                </div>
                
                <div className="forge-tools">
                  <div className="tool-item tool-poker"></div>
                  <div className="tool-tongs">
                    <div className="tongs-handle"></div>
                    <div className="tongs-head"></div>
                  </div>
                  <div className="forge-material"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="forge-backdrop-deep"></div>
      <div className="forge-backdrop"></div>
      <div className="forge-grid-lines"></div>
      <div className="forge-accent-line"></div>
      <div className="forge-accent-glow left-glow"></div>
      <div className="forge-accent-glow right-glow"></div>
    </div>
  );
}

export default Process;