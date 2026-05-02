import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../../Data/projectData';
import { initializeAnimations } from '../../utils/animations';
import './Projects.css';

const Projects = () => {
  const navigate = useNavigate();
  const scrollAnimatorRef = useRef(null);

  useEffect(() => {
    document.title = 'Projects | Kirtan Soni';
    window.scrollTo(0, 0);
    
    // Initialize animations
    scrollAnimatorRef.current = initializeAnimations();

    // Cleanup on unmount
    return () => {
      if (scrollAnimatorRef.current) {
        scrollAnimatorRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="projects-page">
      <div className="container">
        <header className="page-header animate-fade-in-up">
          <h1 className="page-title text-gradient-hover">Featured Work</h1>
          <p className="page-subtitle scroll-slide-right">
            A collection of industrial-grade applications and algorithmic solutions.
          </p>
          <div className="projects-description scroll-fade-in">
            <p className="stagger-item">
              Each project represents a unique challenge solved through careful planning, modern technologies, 
              and attention to detail. From full-stack web applications to mobile solutions, these projects 
              showcase my ability to transform ideas into functional, user-friendly digital experiences.
            </p>
            <p className="stagger-item">
              Built with modern frameworks and best practices, focusing on performance, scalability, 
              and maintainable code architecture.
            </p>
          </div>
        </header>

        <div className="projects-grid stagger-container">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card-v2 stagger-item card-hover-effect hover-lift"
              onClick={() => navigate(`/projects/${project.id}`)}
            >
              <div className="card-image">
                <span className="project-emoji animate-float">{project.image}</span>
                <div className="card-overlay">
                  <span className="view-text hover-glow">View Details -></span>
                </div>
              </div>
              <div className="card-body">
                <div className="card-category animate-pulse">{project.category.toUpperCase()}</div>
                <h3 className="card-title text-gradient-hover">{project.title}</h3>
                <p className="card-tagline">{project.tagline}</p>
                <div className="card-tech">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span key={i} className="tech-tag hover-scale">{t}</span>
                  ))}
                  {project.tech.length > 3 && <span className="tech-tag hover-scale">+{project.tech.length - 3}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
