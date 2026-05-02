import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Kirtan Soni | Portfolio";
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="name-highlight">Kirtan Soni</span>
            </h1>
            <h2 className="hero-subtitle">
              Full Stack Developer
            </h2>
            <p className="hero-description">
              Passionate about creating innovative web solutions with modern technologies.
              I build responsive, user-friendly applications that deliver exceptional experiences.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => navigate('/projects')}>
                View My Work
              </button>
              <button className="btn-secondary" onClick={() => navigate('/about')}>
                About Me
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-card">
              <div className="profile-image-placeholder">
                <span>👨‍💻</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <h3>7+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat-item">
            <h3>3+</h3>
            <p>Technologies Mastered</p>
          </div>
          <div className="stat-item">
            <h3>1+</h3>
            <p>Years Learning</p>
          </div>
          <div className="stat-item">
            <h3>100%</h3>
            <p>Passion for Code</p>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card" onClick={() => navigate('/weather')}>
            <h3>Weather Dashboard</h3>
            <p>Real-time weather updates with geolocation support</p>
            <span className="tech-stack">React • API Integration</span>
          </div>
          <div className="project-card" onClick={() => navigate('/live-search')}>
            <h3>Live Search</h3>
            <p>Real-time country search with filtering functionality</p>
            <span className="tech-stack">React • useEffect</span>
          </div>
          <div className="project-card" onClick={() => navigate('/form')}>
            <h3>Form Validation</h3>
            <p>Interactive form with comprehensive validation</p>
            <span className="tech-stack">React • State Management</span>
          </div>
        </div>
        <button className="view-all-btn" onClick={() => navigate('/projects')}>
          View All Projects →
        </button>
      </section>
    </div>
  );
};

export default Home;
