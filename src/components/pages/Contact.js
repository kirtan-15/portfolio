import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const contactEndpoint = process.env.REACT_APP_CONTACT_ENDPOINT;
  const inboxEmail = 'kirtan0318@gmail.com';

  useEffect(() => {
    document.title = 'Contact | Kirtan Soni';
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: 'error',
        message: 'Please fill in all fields.'
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email.'
      });
      return;
    }

    setStatus({
      type: 'loading',
      message: 'Sending your message...'
    });

    if (contactEndpoint) {
      try {
        const response = await fetch(contactEndpoint, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _replyto: formData.email,
            subject: `Portfolio message from ${formData.name}`
          })
        });

        if (!response.ok) {
          throw new Error('Message delivery failed.');
        }

        setStatus({
          type: 'success',
          message: `Thanks! Your message has been sent to ${inboxEmail}.`
        });

        setFormData({ name: '', email: '', message: '' });
      } catch (error) {
        setStatus({
          type: 'error',
          message: 'Message could not be sent right now. Please try again or email me directly.'
        });
      }

      return;
    }

    const subject = encodeURIComponent(`Portfolio message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${inboxEmail}?subject=${subject}&body=${body}`;

    setStatus({
      type: 'success',
      message: 'Your email app is opening with the message ready to send.'
    });

    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => {
      setStatus({ type: '', message: '' });
    }, 5000);
  };

  return (
    <div className="contact-page">
      <div className="container">
        <header className="page-header animate-fade-in-up">
          <h1 className="page-title">Get In Touch</h1>
          <p className="page-subtitle">
            Have a project or idea? Let's talk!
          </p>
        </header>

        <div className="contact-content">
          <aside className="contact-info">
            <div className="availability-badge">
              <span className="availability-dot"></span>
              Available for opportunities
            </div>
            <div className="contact-intro">
              <h2>Tell me what you want to build.</h2>
              <p>
                Share a project idea, collaboration opportunity, or role that fits full-stack,
                Android, API, or cloud-backed product work.
              </p>
            </div>
            <div className="response-time">
              <p><strong>Inbox:</strong> messages are prepared for {inboxEmail}. Add a contact endpoint in production for automatic delivery.</p>
            </div>
          </aside>

          <form className="contact-form card contact-form-wrapper" onSubmit={handleSubmit}>
            {status.message && (
              <div className={`form-status ${status.type}`}>
                {status.message}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name" className="form-label">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                placeholder="Your message..."
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-full">
              {status.type === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
