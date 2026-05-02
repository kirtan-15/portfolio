import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../../Data/projectData';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Projects | Kirtan Soni';
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'mobile', name: 'Mobile & AI' },
    { id: 'backend', name: 'Backend' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="projects-page">
      <div className="container">
        <header className="page-header animate-fade-in-up">
          <h1 className="page-title">Featured Work</h1>
          <p className="page-subtitle">
            A collection of industrial-grade applications and algorithmic solutions.
          </p>
        </header>

        <div className="project-controls animate-fade-in">
          <div className="filter-container">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${filter === category.id ? 'active' : ''}`}
                onClick={() => setFilter(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          <div className="project-count">
            Showing <span>{filteredProjects.length}</span> {filteredProjects.length === 1 ? 'Project' : 'Projects'}
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="project-card-v2 animate-fade-in-up"
              onClick={() => navigate(`/projects/${project.id}`)}
            >
              <div className="card-image">
                <span className="project-emoji">{project.image}</span>
                <div className="card-overlay">
                  <span className="view-text">View Details →</span>
                </div>
              </div>
              <div className="card-body">
                <div className="card-category">{project.category.toUpperCase()}</div>
                <h3 className="card-title">{project.title}</h3>
                <p className="card-tagline">{project.tagline}</p>
                <div className="card-tech">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                  ))}
                  {project.tech.length > 3 && <span className="tech-tag">+{project.tech.length - 3}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-results">
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
