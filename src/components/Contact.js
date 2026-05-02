import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'kirtan.soni@example.com',
      link: 'mailto:kirtan.soni@example.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+91 98765 43210',
      link: 'tel:+919876543210'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Gujarat, India',
      link: '#'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/kirtansoni',
      link: 'https://linkedin.com/in/kirtansoni'
    }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: '🐙', url: 'https://github.com/kirtansoni' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/kirtansoni' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/kirtansoni' },
    { name: 'Instagram', icon: '📷', url: 'https://instagram.com/kirtansoni' }
  ];

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p>Let's discuss your project or just say hello!</p>
      </div>

      <div className="contact-content">
        {/* Contact Information */}
        <div className="contact-info">
          <h2>Contact Information</h2>
          <div className="contact-details">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-item">
                <span className="contact-icon">{info.icon}</span>
                <div className="contact-text">
                  <h3>{info.title}</h3>
                  <a href={info.link} className="contact-link">
                    {info.value}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="social-section">
            <h3>Follow Me</h3>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="social-icon">{social.icon}</span>
                  <span className="social-name">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          
        </div>

        {/* Contact Form
        <div className="contact-form-section">
          <h2>Send Me a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What's this about?"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Tell me about your project or just say hi!"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus === 'success' && (
              <div className="success-message">
                ✅ Message sent successfully! I'll get back to you soon.
              </div>
            )}
          </form>
        </div> */}
      </div>

      

      <div className="navigation-buttons">
        <button onClick={() => navigate(-1)}>← Back</button>
        <button onClick={() => navigate('/about')}>About Me</button>
        <button onClick={() => navigate('/projects')}>View Projects</button>
      </div>
    </div>
  );
};

export default Contact;
