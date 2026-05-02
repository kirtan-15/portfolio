import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { initializeAnimations } from '../../utils/animations';
import './About.css';

const About = () => {
  const scrollAnimatorRef = useRef(null);

  useEffect(() => {
    document.title = 'About | Kirtan Soni';
    
    // Initialize animations
    scrollAnimatorRef.current = initializeAnimations();

    // Cleanup on unmount
    return () => {
      if (scrollAnimatorRef.current) {
        scrollAnimatorRef.current.disconnect();
      }
    };
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
    mobile: ['Android Development', 'Kotlin', 'Android Studio', 'Mobile UI/UX', 'Firebase Integration'],
    database: ['MongoDB', 'Firebase', 'Cloud Firestore', 'Real-time Database', 'Database Design']
  };

  return (
    <div className="about-page">
      <div className="container">
        {/* About Me Introduction */}
        <section className="about-intro-section scroll-fade-in">
          <div className="section-label animate-fade-in-up">ABOUT ME</div>
          <h2 className="section-title text-gradient-hover scroll-slide-left">Developer, learner, and builder of digital experiences</h2>
          
          <div className="intro-content-centered stagger-container">
            <p className="intro-paragraph-centered stagger-item">
              Hello! I'm <strong>Kirtan Soni</strong>, a passionate Software Engineer specializing in building robust, 
              scalable applications. With expertise across the full stack, from intuitive frontend interfaces to secure 
              backend architectures and mobile solutions, I create end-to-end development experiences that make a difference.
            </p>
            <p className="intro-paragraph-centered stagger-item">
              My approach focuses on writing clean, maintainable code while prioritizing user experience and security. 
              I believe in continuous learning and staying updated with emerging technologies to deliver modern, 
              efficient solutions.
            </p>
            <p className="intro-paragraph-centered stagger-item">
              Whether it's building a dynamic web application, developing RESTful APIs, or creating mobile applications, 
              I bring technical excellence and problem-solving skills to every project. I'm currently seeking 
              opportunities to collaborate on innovative projects and contribute to meaningful digital transformations.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="about-section skills-section scroll-fade-in">
          <div className="section-label animate-fade-in-up">SKILLS & EXPERTISE</div>
          <h2 className="section-title text-gradient-hover scroll-slide-left">Full-stack development expertise</h2>
          <p className="section-subtitle scroll-slide-right">Expertise in frontend, backend, mobile development, API integration, and cloud-based database solutions</p>
          
          <div className="skills-categories stagger-container">
            <div className="skill-category stagger-item card-hover-effect">
              <h3 className="skill-category-title">Frontend and Product UI</h3>
              <div className="skill-tags">
                {skills.frontend.map((skill, index) => (
                  <span key={index} className="skill-tag hover-scale">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-category stagger-item card-hover-effect">
              <h3 className="skill-category-title">Backend and APIs</h3>
              <div className="skill-tags">
                {skills.backend.map((skill, index) => (
                  <span key={index} className="skill-tag hover-scale">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-category stagger-item card-hover-effect">
              <h3 className="skill-category-title">Mobile App Development</h3>
              <div className="skill-tags">
                {skills.mobile.map((skill, index) => (
                  <span key={index} className="skill-tag hover-scale">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-category stagger-item card-hover-effect">
              <h3 className="skill-category-title">Database & Cloud Integration</h3>
              <div className="skill-tags">
                {skills.database.map((skill, index) => (
                  <span key={index} className="skill-tag hover-scale">{skill}</span>
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
                    Read paper ->
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta scroll-scale-in">
          <div className="cta-content">
            <h2 className="cta-title text-shadow-glow">Let's build something amazing together</h2>
            <p className="cta-subtitle">Ready to discuss your next project or how I can help with your goals?</p>
            <Link to="/contact" className="btn btn-primary btn-lg hover-lift btn-animated">
              Start a conversation ->
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
