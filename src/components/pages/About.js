import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  useEffect(() => {
    document.title = 'About | Kirtan Soni';
  }, []);

  const education = [
    
    {
      year: '2025 - 2027',
      degree: 'MSc IT, LJ University',
      description: 'Advanced academic track focused on modern software, systems, and applied technology.'
    },
    {
      year: '2022 - 2025',
      degree: 'BSc IT, LJ University',
      description: 'Graduated with a strong base in software development fundamentals and applied projects.'
    }
  ];

  const achievements = [
    {
      title: 'Research Publication',
      description: 'The paper explores how virtual environments and humanoids interaction, along with future opportunities, challenges, and real-world impact. Published in Journal of Statistics and Management Systems (JSMS) in 2025.',
      link: '#'
    },
    
  ];



  const skills = {
    frontend: ['React', 'Angular', 'JavaScript', 'HTML5', 'CSS3', 'Responsive design', 'Design systems'],
    backend: ['Node.js', 'FastAPI', 'Django', 'REST API', 'Authentication systems', 'API Integration'],
    database: ['MongoDB', 'Firebase', 'Cloud Firestore', 'Real-time Database', 'Database Design'],
    tools: ['Git', 'VS Code', 'Postman', 'GitHub', 'Vercel']
  };

  return (
    <div className="about-page">
      <div className="container">
        {/* About Me Introduction */}
        <section className="about-section intro-section">
          <div className="section-label">ABOUT ME</div>
          <h2 className="section-title">Developer, learner, and builder of digital experiences</h2>
          
          <div className="intro-content-text">
            <p className="intro-paragraph">
              Hello! I'm <strong>Kirtan Soni</strong>, a passionate Software Engineer specializing in building robust, 
              scalable applications. With expertise across the full stack—from intuitive frontend interfaces to secure 
              backend architectures and AI-driven solutions—I create end-to-end development experiences that make a difference.
            </p>
            <p className="intro-paragraph">
              My approach focuses on writing clean, maintainable code while prioritizing user experience and security. 
              I believe in continuous learning and staying updated with emerging technologies to deliver modern, 
              efficient solutions.
            </p>
            <p className="intro-paragraph">
              Whether it's building a dynamic web application, developing RESTful APIs, or exploring machine learning 
              models, I bring technical excellence and problem-solving skills to every project. I'm currently seeking 
              opportunities to collaborate on innovative projects and contribute to meaningful digital transformations.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="about-section skills-section">
          <div className="section-label">SKILLS & EXPERTISE</div>
          <h2 className="section-title">Full-stack development expertise</h2>
          <p className="section-subtitle">Expertise in frontend, backend, API integration, and cloud-based database solutions</p>
          
          <div className="skills-categories">
            <div className="skill-category">
              <h3 className="skill-category-title">Frontend and Product UI</h3>
              <div className="skill-tags">
                {skills.frontend.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3 className="skill-category-title">Backend and APIs</h3>
              <div className="skill-tags">
                {skills.backend.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3 className="skill-category-title">Database & Cloud Integration</h3>
              <div className="skill-tags">
                {skills.database.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3 className="skill-category-title">Tools & Technologies</h3>
              <div className="skill-tags">
                {skills.tools.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="about-section education-section">
          <div className="section-label">EDUCATION</div>
          <h2 className="section-title">Academic foundation</h2>
          <p className="section-subtitle">Continuous learning and professional development</p>
          
          <div className="education-grid">
            {education.map((edu, index) => (
              <div key={index} className="education-card">
                <div className="education-year">{edu.year}</div>
                <h3 className="education-degree">{edu.degree}</h3>
                <p className="education-description">{edu.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Recognition Section */}
        <section className="about-section recognition-section">
          <div className="section-label">RECOGNITION</div>
          <h2 className="section-title">Achievements and contributions</h2>
          <p className="section-subtitle">Milestones that reflect growth and impact</p>
          
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-description">{achievement.description}</p>
                {achievement.link && (
                  <a href={achievement.link} className="achievement-link">
                    Read paper →
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta">
          <div className="cta-content">
            <h2 className="cta-title">Let's build something amazing together</h2>
            <p className="cta-subtitle">Ready to discuss your next project or how I can help with your goals?</p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Start a conversation →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
