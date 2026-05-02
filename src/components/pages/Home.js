import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../../Data/projectData';
import { TypeWriter, ScrollAnimator, initializeAnimations } from '../../utils/animations';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const typewriterRef = useRef(null);
  const scrollAnimatorRef = useRef(null);

  useEffect(() => {
    document.title = 'Kirtan Soni | Full Stack Developer';
    
    // Initialize animations
    scrollAnimatorRef.current = initializeAnimations();
    
    // Initialize typewriter effect for subtitle
    if (typewriterRef.current) {
      const words = [
        'Full Stack Developer',
        'Software Engineering Enthusiast',
        'Problem Solver',
        'Code Architect'
      ];
      const typewriter = new TypeWriter(typewriterRef.current, words, {
        speed: 100,
        deleteSpeed: 50,
        pauseTime: 2000
      });
      typewriter.start();
    }

    // Cleanup on unmount
    return () => {
      if (scrollAnimatorRef.current) {
        scrollAnimatorRef.current.disconnect();
      }
    };
  }, []);

  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text animate-fade-in-up">
              <div className="hero-badge animate-bounce">
                <span className="badge-dot animate-pulse"></span>
                Available for Opportunities
              </div>
              
              <h1 className="hero-title text-reveal">
                Hi, I am
                <span className="text-gradient gradient-text-animated"> Kirtan</span>
              </h1>
              
              <h2 className="hero-subtitle scroll-fade-in" ref={typewriterRef}>
                Full Stack Developer & Software Engineering Enthusiast
              </h2>
              
              <p className="hero-description scroll-slide-right">
                I help businesses and individuals bring their ideas to life through robust, scalable, and beautifully designed applications. Whether it's a web platform or a complex mobile application, I deliver high-quality solutions tailored to your unique needs.
              </p>
              
              <div className="hero-cta stagger-container">
                <button 
                  className="btn btn-primary hover-lift btn-animated stagger-item"
                  onClick={() => navigate('/contact')}
                >
                  <span>Hire Me</span>
                  <span className="btn-icon">→</span>
                </button>
                <button 
                  className="btn btn-secondary hover-lift btn-animated stagger-item"
                  onClick={() => navigate('/projects')}
                >
                  <span>View My Work</span>
                  <span className="btn-icon">💼</span>
                </button>
              </div>
            </div>

            <div className="hero-visual animate-fade-in animate-float">
              <div className="code-window card-hover-effect">
                <div className="code-header">
                  <span className="dot dot-red hover-scale"></span>
                  <span className="dot dot-yellow hover-scale"></span>
                  <span className="dot dot-green hover-scale"></span>
                  <span className="code-title">secure-developer.js</span>
                </div>
                <div className="code-content">
                  <pre className="code-block scroll-fade-in">
{`const developer = {
  name: "Kirtan Soni",
  expertise: [
    "Web Applications",
    "Mobile Development",
    "API Integration"
  ],
  focus: "Scalable & Elegant Solutions",
  status: "Accepting New Clients",
  availability: true
};

// Ready to transform your idea into reality
developer.startProject();`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="featured-projects scroll-fade-in">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title text-gradient-hover scroll-slide-left">Featured Projects</h2>
            <p className="section-description scroll-slide-right">
              Real-world applications solving actual business problems
            </p>
          </div>

          <div className="projects-grid-modern stagger-container">
            {featuredProjects.map((project, index) => (
              <div 
                key={index}
                className="project-card-modern stagger-item card-hover-effect hover-lift"
              >
                <div className="project-image-placeholder">
                  <div className="project-icon-large animate-float">{project.image}</div>
                  <div className="project-overlay">
                    <span className="category-tag animate-pulse">{project.category}</span>
                  </div>
                </div>

                <div className="project-content">
                  <h3 className="project-title-modern text-gradient-hover">{project.title}</h3>
                  <p className="project-tagline-modern">{project.tagline}</p>
                  
                  <div className="project-details" style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                    <p>{project.description}</p>
                  </div>

                  <div className="project-tech-modern">
                    {project.tech.slice(0, 4).map((tech, i) => (
                      <span key={i} className="tech-badge-modern hover-scale">{tech}</span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="tech-badge-modern more hover-scale">+{project.tech.length - 4}</span>
                    )}
                  </div>

                  <div className="project-actions-modern">
                    <button 
                      className="btn btn-primary btn-sm hover-lift btn-animated"
                      onClick={() => navigate(`/projects/${project.id}`)}
                    >
                      View Details
                    </button>
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-secondary btn-sm hover-lift btn-animated"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center scroll-scale-in" style={{ marginTop: 'var(--spacing-3xl)' }}>
            <button 
              className="btn btn-ghost btn-lg hover-lift btn-animated"
              onClick={() => navigate('/projects')}
            >
              <span>View All Projects</span>
              <span className="btn-icon">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta scroll-fade-in" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="cta-content" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="cta-title text-shadow-glow scroll-slide-left" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Ready to bring your ideas to life?</h2>
            <p className="cta-description scroll-slide-right" style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions. Let's build something amazing together.
            </p>
            <div className="cta-buttons scroll-scale-in" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button 
                className="btn btn-primary btn-lg hover-lift btn-animated"
                onClick={() => navigate('/contact')}
              >
                <span>Hire Me Today</span>
                <span className="btn-icon">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
