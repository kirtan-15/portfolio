// Animation Utilities

// Typewriter Effect
export class TypeWriter {
  constructor(element, words, options = {}) {
    this.element = element;
    this.words = words;
    this.speed = options.speed || 100;
    this.deleteSpeed = options.deleteSpeed || 50;
    this.pauseTime = options.pauseTime || 2000;
    this.loop = options.loop !== false;
    this.currentWordIndex = 0;
    this.currentText = '';
    this.isDeleting = false;
    this.isPaused = false;
  }

  start() {
    this.type();
  }

  type() {
    const currentWord = this.words[this.currentWordIndex];
    
    if (this.isPaused) {
      setTimeout(() => {
        this.isPaused = false;
        this.type();
      }, this.pauseTime);
      return;
    }

    if (this.isDeleting) {
      this.currentText = currentWord.substring(0, this.currentText.length - 1);
    } else {
      this.currentText = currentWord.substring(0, this.currentText.length + 1);
    }

    this.element.textContent = this.currentText;

    let typeSpeed = this.isDeleting ? this.deleteSpeed : this.speed;

    if (!this.isDeleting && this.currentText === currentWord) {
      this.isPaused = true;
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentText === '') {
      this.isDeleting = false;
      this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
      
      if (!this.loop && this.currentWordIndex === 0) {
        return;
      }
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Scroll Animation Observer
export class ScrollAnimator {
  constructor(options = {}) {
    this.threshold = options.threshold || 0.1;
    this.rootMargin = options.rootMargin || '0px 0px -50px 0px';
    this.observer = null;
    this.init();
  }

  init() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // Add stagger effect for children
          const children = entry.target.querySelectorAll('.stagger-item');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('animate-fade-in-up');
            }, index * 100);
          });
        }
      });
    }, {
      threshold: this.threshold,
      rootMargin: this.rootMargin
    });
  }

  observe(elements) {
    if (typeof elements === 'string') {
      elements = document.querySelectorAll(elements);
    }
    
    if (elements instanceof NodeList || Array.isArray(elements)) {
      elements.forEach(el => this.observer.observe(el));
    } else {
      this.observer.observe(elements);
    }
  }

  disconnect() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

// Text Reveal Animation
export function animateTextReveal(element, delay = 0) {
  setTimeout(() => {
    element.classList.add('text-reveal');
  }, delay);
}

// Stagger Animation for Lists
export function staggerAnimation(container, itemSelector = 'li', delay = 100) {
  const items = container.querySelectorAll(itemSelector);
  items.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      item.style.transition = 'all 0.6s ease-out';
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }, index * delay);
  });
}

// Counter Animation
export function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    element.textContent = Math.floor(current);

    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    }
  }, 16);
}

// Particle System
export class ParticleSystem {
  constructor(container, options = {}) {
    this.container = container;
    this.particleCount = options.count || 50;
    this.particleColor = options.color || '#00c6ff';
    this.particles = [];
    this.init();
  }

  init() {
    this.container.style.position = 'relative';
    this.container.style.overflow = 'hidden';

    for (let i = 0; i < this.particleCount; i++) {
      this.createParticle();
    }
  }

  createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 6 + 's';
    particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
    
    this.container.appendChild(particle);
    this.particles.push(particle);

    // Remove particle after animation
    setTimeout(() => {
      if (particle.parentNode) {
        particle.parentNode.removeChild(particle);
      }
    }, 6000);
  }

  start() {
    setInterval(() => {
      if (this.particles.length < this.particleCount) {
        this.createParticle();
      }
    }, 200);
  }

  stop() {
    this.particles.forEach(particle => {
      if (particle.parentNode) {
        particle.parentNode.removeChild(particle);
      }
    });
    this.particles = [];
  }
}

// Smooth Scroll to Element
export function smoothScrollTo(element, offset = 0) {
  const targetPosition = element.offsetTop - offset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 1000;
  let start = null;

  function animation(currentTime) {
    if (start === null) start = currentTime;
    const timeElapsed = currentTime - start;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

// Loading Animation
export function showLoadingAnimation(element, text = 'Loading') {
  element.innerHTML = `
    <div class="loading-container">
      <span>${text}</span>
      <div class="loading-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  `;
}

// Initialize all animations on page load
export function initializeAnimations() {
  // Initialize scroll animations
  const scrollAnimator = new ScrollAnimator();
  
  // Observe elements with scroll animation classes
  scrollAnimator.observe('.scroll-fade-in');
  scrollAnimator.observe('.scroll-slide-left');
  scrollAnimator.observe('.scroll-slide-right');
  scrollAnimator.observe('.scroll-scale-in');
  
  // Initialize typewriter effects
  const typewriterElements = document.querySelectorAll('[data-typewriter]');
  typewriterElements.forEach(element => {
    const words = element.dataset.typewriter.split(',');
    const typewriter = new TypeWriter(element, words);
    typewriter.start();
  });

  // Initialize stagger animations
  const staggerContainers = document.querySelectorAll('.stagger-container');
  staggerContainers.forEach(container => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          staggerAnimation(entry.target, '.stagger-item');
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(container);
  });

  return scrollAnimator;
}

// Cleanup function
export function cleanupAnimations(scrollAnimator) {
  if (scrollAnimator) {
    scrollAnimator.disconnect();
  }
}