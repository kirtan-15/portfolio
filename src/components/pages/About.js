import React, { useEffect } from 'react';
import './About.css';

const About = () => {
  useEffect(() => {
    document.title = 'About | Kirtan Soni';
  }, []);

  const skills = {
    frontend: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
    backend: ['Python', 'FastAPI', 'Node.js', 'REST APIs'],
    tools: ['Git', 'VS Code', 'Postman', 'MongoDB'],
    learning: ['TypeScript', 'Docker', 'PostgreSQL', 'AWS']
  };

  const journey = [
    {
      year: '2023',
      title: 'Started Web Development',
      description: 'Began learning HTML, CSS, and JavaScript fundamentals'
    },
    {
      year: '2024',
      title: 'React & Python',
      description: 'Dove deep into React and Python backend development'
    },
    {
      year: '2025',
      title: 'Building Projects',
      description: 'Creating full-stack applications and learning cybersecurity'
    }
  ];

  return (
    <div className="about-page">
      <div className="container">
        {/* Header */}
        <header className="page-header animate-fade-in-up">
          <h1 className="page-title">About Me</h1>
          <p className="page-subtitle">
            Developer, learner, and builder of digital experiences
          </p>
        </header>

        {/* Introduction */}
        <section className="about-intro animate-fade-in-up">
          <div className="intro-content">
            <div className="intro-text">
              <h2 className="section-heading">Hello! I'm Kirtan Soni</h2>
              <p className="intro-paragraph">
                I am a professional Software Engineer specializing in building robust, scalable applications. 
                With expertise across the full stack—from intuitive frontend interfaces to secure backend 
                architectures and AI-driven mobile applications—I provide end-to-end development services tailored 
                to your business needs.
              </p>
              <p className="intro-paragraph">
                My approach focuses on writing clean, maintainable code and prioritizing user experience and 
                security. Whether you are a startup looking to build your MVP or an established business needing 
                to optimize your internal tools, I bring technical excellence and problem-solving skills to every project.
              </p>
              <p className="intro-paragraph">
                I am currently accepting freelance opportunities and consulting projects. Let's collaborate to transform 
                your digital ideas into high-performing reality.
              </p>
            </div>
            <div className="intro-image">
              <div className="image-placeholder">
                <span className="placeholder-icon">👨‍💻</span>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="skills-overview">
          <h2 className="section-heading text-center">Technical Skills</h2>
          <div className="skills-grid grid-4">
            <div className="skill-category card hover-lift">
              <div className="category-icon">🎨</div>
              <h3 className="category-title">Frontend</h3>
              <ul className="skill-list">
                {skills.frontend.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>

            <div className="skill-category card hover-lift">
              <div className="category-icon">⚙️</div>
              <h3 className="category-title">Backend</h3>
              <ul className="skill-list">
                {skills.backend.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>

            <div className="skill-category card hover-lift">
              <div className="category-icon">🛠️</div>
              <h3 className="category-title">Tools</h3>
              <ul className="skill-list">
                {skills.tools.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>

            <div className="skill-category card hover-lift">
              <div className="category-icon">📚</div>
              <h3 className="category-title">Learning</h3>
              <ul className="skill-list">
                {skills.learning.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Journey */}
        <section className="journey">
          <h2 className="section-heading text-center">My Journey</h2>
          <div className="timeline">
            {journey.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker">{item.year}</div>
                <div className="timeline-content card">
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="values">
          <h2 className="section-heading text-center">What Drives Me</h2>
          <div className="values-grid grid-3">
            <div className="value-card card hover-lift">
              <div className="value-icon">💡</div>
              <h3 className="value-title">Innovation</h3>
              <p className="value-description">
                Always exploring new technologies and approaches to solve problems creatively.
              </p>
            </div>

            <div className="value-card card hover-lift">
              <div className="value-icon">🎯</div>
              <h3 className="value-title">Quality</h3>
              <p className="value-description">
                Committed to writing clean, maintainable code that follows best practices.
              </p>
            </div>

            <div className="value-card card hover-lift">
              <div className="value-icon">🤝</div>
              <h3 className="value-title">Collaboration</h3>
              <p className="value-description">
                Believing in the power of teamwork and open communication to achieve great results.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
