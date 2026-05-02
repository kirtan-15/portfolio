import React, { useEffect } from 'react';
import './Experience.css';

const Experience = () => {
  useEffect(() => {
    document.title = 'Experience | Kirtan Soni';
  }, []);

  const experiences = [
    {
      icon: '💼',
      title: 'Independent Developer',
      company: 'Self-Employed',
      location: 'Gujarat, India',
      duration: '2024 - Present',
      description: 'Building full-stack web and mobile applications, focusing on scalable architecture and modern user interfaces.',
      responsibilities: [
        'Architected TOA_Pro, an AI-driven scheduling engine solving NP-hard institutional problems',
        'Implemented hybrid optimization using Genetic Algorithms and Gemini AI diagnostics',
        'Implementing secure authentication and database architectures',
        'Building responsive, accessible web interfaces with React',
        'Continuously learning and applying software engineering best practices'
      ],
      tech: ['React', 'Node.js', 'Kotlin', 'Firebase', 'Gemini AI']
    },
    {
      icon: '🏢',
      title: 'Full Stack Web Developer',
      company: 'Project: Enterprise CMS',
      location: 'Gujarat, India',
      duration: '2023 - 2024',
      description: 'Developed a comprehensive Corporate Management System focused on automation and efficiency.',
      responsibilities: [
        'Built a full-stack application using Angular and Node.js',
        'Implemented GPS-based attendance and automated workflows',
        'Designed role-based access control systems',
        'Integrated a payroll processing module'
      ],
      tech: ['Angular', 'Node.js', 'Express', 'MongoDB']
    },
    {
      icon: '🔐',
      title: 'Security-Focused Developer',
      company: 'Project: Security Toolkit',
      location: 'Gujarat, India',
      duration: '2023',
      description: 'Created a cybersecurity toolkit emphasizing data privacy and vulnerability detection.',
      responsibilities: [
        'Built password analysis tools with strength evaluation',
        'Integrated HaveIBeenPwned API for breach checking',
        'Implemented k-Anonymity for secure verification'
      ],
      tech: ['React', 'Python', 'FastAPI', 'Cryptography']
    }
  ];

  const education = [
    {
      icon: '🎓',
      degree: 'Bachelor of Technology',
      field: 'Computer Science & Engineering',
      school: 'Your University Name',
      year: '2020 - 2024',
      details: 'Focused on software development, algorithms, and web technologies'
    }
  ];

  return (
    <div className="experience-page">
      <div className="container experience-container">
        <header className="page-header">
          <h1 className="page-title">Experience & Education</h1>
          <p className="page-subtitle">
            My professional journey and learning path in software development
          </p>
        </header>

        {/* Experience Timeline */}
        <section className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-marker">
                <span>{exp.icon}</span>
              </div>
              
              <div className="experience-card">
                <div className="experience-header">
                  <div className="experience-title-group">
                    <h3>{exp.title}</h3>
                    <p className="experience-company">{exp.company}</p>
                    <p className="experience-location">📍 {exp.location}</p>
                  </div>
                  <span className="experience-duration">{exp.duration}</span>
                </div>

                <p className="experience-description">{exp.description}</p>

                <div className="experience-responsibilities">
                  <h4>Key Responsibilities:</h4>
                  <ul>
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>

                <div className="experience-technologies">
                  {exp.tech.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Education Section */}
        <section className="education-section">
          <h2 className="section-heading">Education</h2>
          <div className="education-grid">
            {education.map((edu, index) => (
              <div key={index} className="education-card">
                <div className="education-icon">{edu.icon}</div>
                <h3 className="education-degree">{edu.degree}</h3>
                <p className="education-field">{edu.field}</p>
                <p className="education-school">{edu.school}</p>
                <p className="education-year">{edu.year}</p>
                <p className="education-details">{edu.details}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experience;
