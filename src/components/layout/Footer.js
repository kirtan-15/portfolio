import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();



  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Section */}
            <div className="footer-brand">
              <Link to="/" className="footer-logo">
                <span className="logo-text">KS</span>
                <span className="logo-dot">.</span>
              </Link>
              <p className="footer-tagline">
                Full Stack Developer specializing in secure, scalable web applications.
              </p>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="footer-link">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h3 className="footer-title">Services</h3>
              <ul className="footer-links">
                <li>
                  <span className="footer-text">Full Stack Development</span>
                </li>
                <li>
                  <span className="footer-text">Mobile Development</span>
                </li>
                <li>
                  <span className="footer-text">AI Integration</span>
                </li>
                <li>
                  <span className="footer-text">Custom Software Solutions</span>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h3 className="footer-title">Get In Touch</h3>
              <ul className="footer-links">
                <li>
                  <a href="mailto:kirtan0318@gmail.com" className="footer-link">
                    kirtan0318@gmail.com
                  </a>
                </li>
                <li>
                  <span className="footer-text">📍 Gujarat, India</span>
                </li>
                <li>
                  <span className="footer-text">🕐 Available Mon-Fri</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom">
            <p className="copyright">
              © {currentYear} Kirtan Soni. All rights reserved.
            </p>
            <p className="footer-credit">
              Built with <span className="heart">❤️</span> using React & Security Best Practices
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
