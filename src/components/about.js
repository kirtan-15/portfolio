import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Me</h1>
        <p>Get to know the person behind the code</p>
      </div>

      <div className="about-content">
        <div className="about-intro">
          <div className="profile-section">
            <div className="profile-image-about">
              <span>👨‍💻</span>
            </div>
            <div className="profile-info">
              <h2>Kirtan Soni</h2>
              <p className="title">Full Stack Developer</p>
              <p className="location">📍 Gujarat, India</p>
            </div>
          </div>

          <div className="about-text">
            <p>
              I am a passionate web developer with a keen interest in creating dynamic
              and responsive web applications. My journey in web development began
              with a fascination for how websites work and the technologies behind
              them.
            </p>
            <p>
              I enjoy learning new technologies and continuously improving my skills.
              My goal is to build user-friendly applications that provide great user
              experiences while solving real-world problems through code.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open-source projects, or learning about the latest 
              trends in web development.
            </p>
          </div>
        </div>

        <div className="about-details">
          <div className="detail-card">
            <h3>🎓 Education</h3>
            <div className="education-item">
              <h4>B.Sc. Computer Science</h4>
              <p>LJ University • 2024</p>
              <span>Focus on programming fundamentals, data structures, and software development</span>
            </div>
            <div className="education-item">
              <h4>Full-Stack Web Development Certification</h4>
              <p>LJ University• 2024-202</p>
              <span>Comprehensive training in modern web development technologies</span>
            </div>
          </div>

          <div className="detail-card">
            <h3>💼 What I Do</h3>
            <div className="what-i-do-grid">
              <div className="service-item">
                <span className="service-icon">🌐</span>
                <h4>Web Development</h4>
                <p>Building responsive, modern websites and web applications</p>
              </div>
              <div className="service-item">
                <span className="service-icon">⚛️</span>
                <h4>React Development</h4>
                <p>Creating interactive user interfaces with React.js</p>
              </div>
              <div className="service-item">
                <span className="service-icon">🔧</span>
                <h4>Backend Development</h4>
                <p>Developing APIs and server-side applications</p>
              </div>
              <div className="service-item">
                <span className="service-icon">📱</span>
                <h4>Responsive Design</h4>
                <p>Ensuring great user experience across all devices</p>
              </div>
            </div>
          </div>

          

          <div className="detail-card">
            <h3>🎯 Goals & Interests</h3>
            <div className="interests-grid">
              <div className="interest-item">
                <span>🚀</span>
                <p>Mastering advanced React patterns and state management</p>
              </div>
              <div className="interest-item">
                <span>☁️</span>
                <p>Learning cloud technologies and DevOps practices</p>
              </div>
              <div className="interest-item">
                <span>📱</span>
                <p>Exploring mobile app development with React Native</p>
              </div>
              <div className="interest-item">
                <span>🤖</span>
                <p>Understanding AI integration in web applications</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-cta">
          <h3>Let's Work Together!</h3>
          <p>I'm always excited to take on new challenges and collaborate on interesting projects.</p>
          <div className="cta-buttons">
            <button className="btn-primary" onClick={() => navigate('/contact')}>
              Get In Touch
            </button>
            <button className="btn-secondary" onClick={() => navigate('/projects')}>
              View My Work
            </button>
          </div>
        </div>
      </div>

      <div className="navigation-buttons">
        <button onClick={() => navigate(-1)}>← Back</button>
        <button onClick={() => navigate('/skills')}>My Skills</button>
        <button onClick={() => navigate('/experience')}>Experience</button>
      </div>
    </div>
  );
}

export default About;