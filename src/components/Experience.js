import React from 'react';
import { useNavigate } from 'react-router-dom';

const Experience = () => {
  const navigate = useNavigate();

  const workExperience = [
    {
      year: "2024 - Present",
      title: "Freelance Web Developer",
      company: "Self-Employed",
      description: "Building custom web solutions for clients, specializing in responsive design and modern JavaScript frameworks. Focus on delivering high-quality, user-centric applications.",
      responsibilities: [
        "Design and develop responsive web applications",
        "Collaborate with clients to understand requirements",
        "Implement modern UI/UX principles",
        "Optimize performance and accessibility"
      ],
      skills: ["React", "Node.js", "MongoDB", "Express"],
      type: "work"
    }
  ];

  const education = [
    {
      year: "2024",
      degree: "B.Sc. Computer Science",
      institution: "LJ University",
      description: "Completed Bachelor's degree with focus on software development, data structures, algorithms, and web technologies.",
      achievements: [
        "Strong foundation in programming fundamentals",
        "Hands-on experience with multiple projects",
        "Studied modern web development practices"
      ]
    }
  ];

  const certifications = [
    {
      year: "2023-2024",
      title: "Full Stack Web Development",
      issuer: "LJ University",
      description: "Comprehensive certification covering MERN stack, responsive design, and deployment.",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "MongoDB"]
    }
  ];

  return (
    <div className="experience-container">
      <div className="experience-header">
        <h1>Experience & Education</h1>
        <p>My professional journey and academic background</p>
      </div>

      {/* Work Experience Section */}
      <div className="experience-section">
        <h2 className="section-title">💼 Work Experience</h2>
        <div className="timeline">
          {workExperience.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker" style={{ backgroundColor: '#4ea8de' }}>
                <span className="timeline-icon">💼</span>
              </div>
              <div className="timeline-content">
                <div className="timeline-year">{item.year}</div>
                <h3 className="timeline-title">{item.title}</h3>
                <h4 className="timeline-company">{item.company}</h4>
                <p className="timeline-description">{item.description}</p>
                <div className="responsibilities-list">
                  <h5>Key Responsibilities:</h5>
                  <ul>
                    {item.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
                <div className="timeline-skills">
                  {item.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="education-section">
        <h2 className="section-title">🎓 Education</h2>
        <div className="education-grid">
          {education.map((item, index) => (
            <div key={index} className="education-card">
              <div className="education-icon">🎓</div>
              <div className="education-year">{item.year}</div>
              <h3 className="education-degree">{item.degree}</h3>
              <h4 className="education-institution">{item.institution}</h4>
              <p className="education-description">{item.description}</p>
              <div className="achievements-list">
                <h5>Key Highlights:</h5>
                <ul>
                  {item.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div className="certifications-section">
        <h2 className="section-title">📜 Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((item, index) => (
            <div key={index} className="certification-card">
              <div className="certification-icon">📜</div>
              <div className="certification-year">{item.year}</div>
              <h3 className="certification-title">{item.title}</h3>
              <h4 className="certification-issuer">{item.issuer}</h4>
              <p className="certification-description">{item.description}</p>
              <div className="certification-skills">
                {item.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Future Goals */}
      <div className="goals-section">
        <h2>Future Goals</h2>
        <div className="goals-list">
          <div className="goal-item">
            <span className="goal-icon">🚀</span>
            <div>
              <h3>Full Stack </h3>
              <p>Become proficient in advanced MERN stack development</p>
            </div>
          </div>
          
          <div className="goal-item">
            <span className="goal-icon">📱</span>
            <div>
              <h3>Mobile Development</h3>
              <p>Expand into React Native for mobile applications</p>
            </div>
          </div>
        </div>
      </div>

      <div className="navigation-buttons">
        <button onClick={() => navigate(-1)}>← Back</button>
        <button onClick={() => navigate('/skills')}>My Skills</button>
        <button onClick={() => navigate('/projects')}>View Projects</button>
      </div>
    </div>
  );
};

export default Experience;
