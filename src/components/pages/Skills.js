import React, { useEffect } from 'react';
import './Skills.css';

const Skills = () => {
  useEffect(() => {
    document.title = 'Skills | Kirtan Soni';
  }, []);

  const skillsData = [
    {
      category: 'Frontend Development',
      icon: '🎨',
      skills: [
        { name: 'React', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 85 },
        { name: 'Tailwind CSS', level: 75 },
        { name: 'Angular', level: 70 }
      ]
    },
    {
      category: 'Backend Development',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 75 },
        { name: 'Python', level: 75 },
        { name: 'FastAPI', level: 70 },
        { name: 'MongoDB', level: 70 },
        { name: 'REST APIs', level: 85 }
      ]
    },
    {
      category: 'Tools & Technologies',
      icon: '🛠️',
      skills: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'Postman', level: 80 },
        { name: 'npm/yarn', level: 80 },
        { name: 'Docker', level: 60 },
        { name: 'Linux', level: 70 }
      ]
    }
  ];

  const tools = [
    { name: 'VS Code', icon: '💻' },
    { name: 'Git', icon: '🔀' },
    { name: 'Postman', icon: '📮' },
    { name: 'Figma', icon: '🎨' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Docker', icon: '🐳' }
  ];

  return (
    <div className="skills-page">
      <div className="container">
        {/* Header */}
        <header className="page-header">
          <h1 className="page-title">Skills & Expertise</h1>
          <p className="page-subtitle">
            Technologies I work with and continuously learning to build modern applications
          </p>
        </header>

        {/* Technical Skills */}
        <section className="technical-skills">
          {skillsData.map((category, index) => (
            <div key={index} className="skill-section">
              <div className="skill-section-header">
                <span className="skill-icon">{category.icon}</span>
                <h2 className="skill-category-title">{category.category}</h2>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Tools Section */}
        <section className="tools-section">
          <h2 className="section-heading">Tools I Use</h2>
          <div className="tools-grid">
            {tools.map((tool, index) => (
              <div key={index} className="tool-card">
                <span className="tool-icon">{tool.icon}</span>
                <span className="tool-name">{tool.name}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;
