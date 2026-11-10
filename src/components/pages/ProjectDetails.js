import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../../Data/projectData';
import './ProjectDetails.css';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === parseInt(id));
  const [activeShot, setActiveShot] = useState(null);
  const [openPs, setOpenPs] = useState(0);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} | Kirtan Soni`;
      window.scrollTo(0, 0);
      setOpenPs(0);
      setActiveShot(null);
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

            {project.problemSolution && (
              <section className="details-section">
                <h2>Problem &amp; Solution</h2>
                <div className="ps-accordion">
                  {project.problemSolution.map((ps, idx) => (
                    <div key={idx} className={`ps-acc-item ${openPs === idx ? 'open' : ''}`}>
                      <button
                        className="ps-acc-header"
                        onClick={() => setOpenPs(openPs === idx ? -1 : idx)}
                        aria-expanded={openPs === idx}
                      >
                        <span className="ps-acc-num">{idx + 1}</span>
                        <span className="ps-acc-problem">{ps.problem}</span>
                        <span className="ps-acc-chevron">›</span>
                      </button>
                      {openPs === idx && (
                        <div className="ps-acc-body">
                          <span className="ps-label">Solution</span>
                          <p>{ps.solution}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {project.screenshots && (
              <section className="details-section">
                <h2>Screenshots</h2>
                <div className="screenshots-grid">
                  {project.screenshots.map((shot, idx) => (
                    <figure
                      key={idx}
                      className="screenshot-item"
                      onClick={() => setActiveShot(shot)}
                    >
                      <img src={shot.src} alt={shot.caption} loading="lazy" />
                      <figcaption>{shot.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              </section>
            )}

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
              {project.github ? (
                <>
                  <h3>Project Links</h3>
                  <div className="action-buttons">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                      GitHub Repo
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        Live Demo
                      </a>
                    )}
                  </div>
                </>
              ) : project.live ? (
                <div className="action-buttons">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Live Demo
                  </a>
                </div>
              ) : (
                <>
                  <h3>Project Links</h3>
                  <div className="action-buttons">
                    <span className="locked-btn">🔒 Private Repository</span>
                  </div>
                </>
              )}
            </div>
          </aside>
        </div>
      </div>

      {activeShot && (
        <div className="screenshot-lightbox" onClick={() => setActiveShot(null)}>
          <img src={activeShot.src} alt={activeShot.caption} />
          <p>{activeShot.caption}</p>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
