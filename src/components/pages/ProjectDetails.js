import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../../Data/projectData';
import './ProjectDetails.css';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === parseInt(id));

  useEffect(() => {
    if (project) {
      document.title = `${project.title} | Kirtan Soni`;
      window.scrollTo(0, 0);
    } else {
      navigate('/projects');
    }
  }, [project, navigate]);

  if (!project) return null;

  return (
    <div className="project-details-page">
      <div className="container">
        <button className="back-link" onClick={() => navigate('/projects')}>
          ← Back to Projects
        </button>

        <header className="details-header animate-fade-in">
          <div className="header-icon">{project.image}</div>
          <div className="header-info">
            <h1 className="details-title">{project.title}</h1>
            <p className="details-tagline">{project.tagline}</p>
            <div className="details-meta">
              <span><strong>Role:</strong> {project.role}</span>
              <span><strong>Type:</strong> {project.projectType}</span>
              <span><strong>Status:</strong> {project.status}</span>
            </div>
          </div>
        </header>

        <div className="details-grid">
          <div className="details-main animate-fade-in-up">
            <section className="details-section">
              <h2>Overview</h2>
              <p>{project.description}</p>
            </section>

            <section className="details-section">
              <h2>Key Achievements & Advanced Features</h2>
              <div className="achievements-list">
                {project.achievements.map((ach, idx) => (
                  <div key={idx} className="achievement-item">
                    <h3>{ach.title}</h3>
                    <p>{ach.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {project.modules && (
              <section className="details-section">
                <h2>Core Modules</h2>
                <ul className="modules-list">
                  {project.modules.map((mod, idx) => (
                    <li key={idx}>
                      <span className="bullet"></span>
                      {mod}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          <aside className="details-sidebar animate-fade-in-right">
            <div className="sidebar-card">
              <h3>Technologies Used</h3>
              <div className="tech-pills">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="tech-pill">{t}</span>
                ))}
              </div>
            </div>

            <div className="sidebar-card actions">
              <h3>Project Links</h3>
              <div className="action-buttons">
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    GitHub Repo
                  </a>
                ) : (
                  <span className="locked-btn">🔒 Private Repository</span>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
