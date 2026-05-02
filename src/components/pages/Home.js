import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../../Data/projectData';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Kirtan Soni | Full Stack Developer';
  }, []);

  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text animate-fade-in-up">
              <div className="hero-badge">
                <span className="badge-dot"></span>
                Available for Opportunities
              </div>
              
              <h1 className="hero-title">
                Hi, I am
                <span className="text-gradient"> Kirtan</span>
              </h1>
              
              <h2 className="hero-subtitle">
                Full Stack Developer & Software Engineering Enthusiast
              </h2>
              
              <p className="hero-description">
                I help businesses and individuals bring their ideas to life through robust, scalable, and beautifully designed applications. Whether it's a web platform or a complex mobile application, I deliver high-quality solutions tailored to your unique needs.
              </p>
              

              
              <div className="hero-cta">
                <button 
                  className="btn btn-primary hover-lift"
                  onClick={() => navigate('/contact')}
                >
                  <span>Hire Me</span>
                  <span className="btn-icon">→</span>
                </button>
                <button 
                  className="btn btn-secondary hover-lift"
                  onClick={() => navigate('/projects')}
                >
                  <span>View My Work</span>
                  <span className="btn-icon">💼</span>
                </button>
              </div>

              {/* Tech Stack */}
              <div className="tech-stack">
                <p className="tech-label">Expertise:</p>
                <div className="tech-icons">
                  <span className="tech-icon" title="React">⚛️</span>
                  <span className="tech-icon" title="Android">📱</span>
                  <span className="tech-icon" title="Node.js">🟢</span>
                  <span className="tech-icon" title="Kotlin">⚡</span>
                  <span className="tech-icon" title="Firebase">🔥</span>
                </div>
              </div>
            </div>

            <div className="hero-visual animate-fade-in">
              <div className="code-window">
                <div className="code-header">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                  <span className="code-title">secure-developer.js</span>
                </div>
                <div className="code-content">
                  <pre className="code-block">
{`const developer = {
  name: "Kirtan Soni",
  role: "Freelance Software Engineer",
  expertise: [
    "Web Applications",
    "Mobile Development",
    "AI Integration"
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
      <section className="featured-projects">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-description">
              Real-world applications solving actual business problems
            </p>
          </div>

          <div className="projects-grid-modern">
            {featuredProjects.map((project, index) => (
              <div 
                key={index}
                className="project-card-modern stagger-item"
              >
                <div className="project-image-placeholder">
                  <div className="project-icon-large">{project.image}</div>
                  <div className="project-overlay">
                    <span className="category-tag">{project.category}</span>
                  </div>
                </div>

                <div className="project-content">
                  <h3 className="project-title-modern">{project.title}</h3>
                  <p className="project-tagline-modern">{project.tagline}</p>
                  
                  <div className="project-details" style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                    <p>{project.description}</p>
                  </div>

                  <div className="project-tech-modern">
                    {project.tech.slice(0, 4).map((tech, i) => (
                      <span key={i} className="tech-badge-modern">{tech}</span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="tech-badge-modern more">+{project.tech.length - 4}</span>
                    )}
                  </div>

                  <div className="project-actions-modern">
                    <button 
                      className="btn btn-primary btn-sm"
                      onClick={() => navigate(`/projects/${project.id}`)}
                    >
                      View Details
                    </button>
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-secondary btn-sm"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: 'var(--spacing-3xl)' }}>
            <button 
              className="btn btn-ghost btn-lg"
              onClick={() => navigate('/projects')}
            >
              <span>View All Projects</span>
              <span className="btn-icon">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="cta-content" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="cta-title" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Ready to bring your ideas to life?</h2>
            <p className="cta-description" style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions. Let's build something amazing together.
            </p>
            <div className="cta-buttons" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button 
                className="btn btn-primary btn-lg hover-lift"
                onClick={() => navigate('/contact')}
              >
                <span>Hire Me Today</span>
                <span className="btn-icon">→</span>
              </button>
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary btn-lg hover-lift"
              >
                <span>📄</span>
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
