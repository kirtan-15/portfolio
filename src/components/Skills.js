import React from 'react';
import { useNavigate } from 'react-router-dom';

const Skills = () => {
  const navigate = useNavigate();

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 85, icon: "⚛️" },
        { name: "JavaScript", level: 80, icon: "🟨" },
        { name: "HTML5", level: 90, icon: "🌐" },
        { name: "CSS3", level: 85, icon: "🎨" },
        { name: "Tailwind CSS", level: 75, icon: "💨" }
      ]
    },
    {
      title: "Backend Development", 
      skills: [
        { name: "Node.js", level: 70, icon: "🟢" },
        { name: "Express.js", level: 65, icon: "🚀" },
        { name: "MongoDB", level: 60, icon: "🍃" },
        // { name: "REST APIs", level: 70, icon: "🔗" }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", level: 80, icon: "📚" },
        { name: "VS Code", level: 90, icon: "💻" },
        { name: "Postman", level: 75, icon: "📮" },
        // { name: "NPM", level: 80, icon: "📦" }
      ]
    }
  ];

  return (
    <div className="skills-container">
      <div className="skills-header">
        <h1>My Skills & Expertise</h1>
        <p>Technologies I work with to bring ideas to life</p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="skill-category">
            <h2>{category.title}</h2>
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
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
      </div>

      {/* Learning Journey
      <div className="learning-section">
        <h2>Currently Learning</h2>
        <div className="learning-grid">
          <div className="learning-item">
            <span className="learning-icon">🔥</span>
            <h3>TypeScript</h3>
            <p>Adding type safety to JavaScript projects</p>
          </div>
          <div className="learning-item">
            <span className="learning-icon">🐳</span>
            <h3>Docker</h3>
            <p>Containerization and deployment</p>
          </div>
          <div className="learning-item">
            <span className="learning-icon">☁️</span>
            <h3>AWS</h3>
            <p>Cloud services and deployment</p>
          </div>
        </div>
      </div> */}

      <div className="navigation-buttons">
        <button onClick={() => navigate(-1)}>← Back</button>
        <button onClick={() => navigate('/about')}>About Me</button>
        <button onClick={() => navigate('/projects')}>View Projects</button>
      </div>
    </div>
  );
};

export default Skills;
