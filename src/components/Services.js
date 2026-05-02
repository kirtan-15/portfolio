import React from 'react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies like React, Node.js, and MongoDB.',
      features: [
        'Responsive Design',
        'Modern UI/UX',
        'Fast Performance',
        'SEO Optimized'
      ],
      price: 'Starting from ₹15,000'
    },
    {
      icon: '⚛️',
      title: 'React Applications',
      description: 'Interactive single-page applications with React.js, featuring dynamic components and state management.',
      features: [
        'Component-based Architecture',
        'State Management',
        'API Integration',
        'Reusable Components'
      ],
      price: 'Starting from ₹20,000'
    },
    {
      icon: '🔧',
      title: 'API Development',
      description: 'RESTful APIs and backend services using Node.js, Express, and MongoDB for robust data management.',
      features: [
        'RESTful Architecture',
        'Database Design',
        'Authentication',
        'Data Validation'
      ],
      price: 'Starting from ₹12,000'
    },
    {
      icon: '📱',
      title: 'Responsive Design',
      description: 'Mobile-first, responsive designs that work perfectly across all devices and screen sizes.',
      features: [
        'Mobile-First Approach',
        'Cross-browser Compatibility',
        'Touch-friendly Interface',
        'Fast Loading'
      ],
      price: 'Starting from ₹8,000'
    },
    {
      icon: '🔍',
      title: 'Website Optimization',
      description: 'Performance optimization, SEO improvements, and code refactoring for existing websites.',
      features: [
        'Performance Audit',
        'Code Optimization',
        'SEO Implementation',
        'Speed Improvements'
      ],
      price: 'Starting from ₹10,000'
    },
    {
      icon: '🎓',
      title: 'Consultation & Training',
      description: 'Technical consultation, code reviews, and training sessions for teams or individuals.',
      features: [
        'Code Review',
        'Best Practices',
        'Technology Guidance',
        'Mentoring'
      ],
      price: '₹2,000/hour'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We discuss your project requirements, goals, and timeline to understand your vision.'
    },
    {
      step: '02', 
      title: 'Planning',
      description: 'I create a detailed project plan, wireframes, and technical specifications.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Building your project with regular updates and feedback sessions throughout.'
    },
    {
      step: '04',
      title: 'Testing',
      description: 'Thorough testing across devices and browsers to ensure everything works perfectly.'
    },
    {
      step: '05',
      title: 'Deployment',
      description: 'Launching your project and providing documentation and training if needed.'
    },
    {
      step: '06',
      title: 'Support',
      description: 'Ongoing maintenance and support to keep your project running smoothly.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Small Business Owner',
      comment: 'Kirtan delivered an amazing website for my business. Professional, fast, and exactly what I needed!',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'Startup Founder',
      comment: 'Great communication and technical skills. The React app he built exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Priya Patel',
      role: 'Marketing Manager',
      comment: 'Very responsive and delivered on time. The website looks great and performs excellently.',
      rating: 5
    }
  ];

  return (
    <div className="services-container">
      <div className="services-header">
        <h1>My Services</h1>
        <p>Professional web development solutions tailored to your needs</p>
      </div>

      {/* Services Grid */}
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <ul className="service-features">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex}>✓ {feature}</li>
              ))}
            </ul>
            <div className="service-price">{service.price}</div>
            <button 
              className="service-btn"
              onClick={() => navigate('/contact')}
            >
              Get Quote
            </button>
          </div>
        ))}
      </div>

      {/* Process Section */}
      <div className="process-section">
        <h2>My Development Process</h2>
        <div className="process-grid">
          {process.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-number">{step.step}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Me */}
      <div className="why-choose-section">
        <h2>Why Choose Me?</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <span className="benefit-icon">⚡</span>
            <h3>Fast Delivery</h3>
            <p>Quick turnaround times without compromising on quality</p>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">💡</span>
            <h3>Modern Technologies</h3>
            <p>Using the latest tools and frameworks for optimal performance</p>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🎯</span>
            <h3>Attention to Detail</h3>
            <p>Pixel-perfect designs and clean, maintainable code</p>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🤝</span>
            <h3>Great Communication</h3>
            <p>Regular updates and transparent project management</p>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🔧</span>
            <h3>Ongoing Support</h3>
            <p>Post-launch support and maintenance services</p>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">💰</span>
            <h3>Competitive Pricing</h3>
            <p>Quality work at affordable rates for all budgets</p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonials-section">
        <h2>What Clients Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-rating">
                {'⭐'.repeat(testimonial.rating)}
              </div>
              <p className="testimonial-comment">"{testimonial.comment}"</p>
              <div className="testimonial-author">
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <h2>Ready to Start Your Project?</h2>
        <p>Let's discuss how I can help bring your ideas to life</p>
        <div className="cta-buttons">
          <button 
            className="btn-primary"
            onClick={() => navigate('/contact')}
          >
            Get In Touch
          </button>
          <button 
            className="btn-secondary"
            onClick={() => navigate('/projects')}
          >
            View My Work
          </button>
        </div>
      </div>

      <div className="navigation-buttons">
        <button onClick={() => navigate(-1)}>← Back</button>
        <button onClick={() => navigate('/contact')}>Contact Me</button>
        <button onClick={() => navigate('/projects')}>View Projects</button>
      </div>
    </div>
  );
};

export default Services;
