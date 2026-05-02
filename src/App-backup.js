import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Page Components
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Skills from './components/pages/Skills';
import Experience from './components/pages/Experience';
import Contact from './components/pages/Contact';

// Practice Components (hidden from main navigation)
import Counter from './components/counter';
import StateWithArray from './components/statewitharray';
import StateWithObject from './components/StateObject';
import Formvalid from './components/Formvalid';
import LiveSearch from './components/LiveSearch';
import Weather from './components/Weather';
import Services from './components/Services';

const App = () => {
  const [theme, setTheme] = useState('light');
  const [count, setCount] = useState(0);

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const incrementCount = () => setCount(prev => prev + 1);

  return (
    <div className="app">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main className="main-content">
        <Routes>
          {/* Main Portfolio Pages */}
          <Route path="/" element={<Home count={count} />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          
          {/* Hidden practice components (no navbar links) */}
          <Route path="/playground/counter" element={<Counter />} />
          <Route path="/playground/state-array" element={<StateWithArray />} />
          <Route path="/playground/state-object" element={<StateWithObject />} />
          <Route path="/playground/form-validation" element={<Formvalid onSuccess={incrementCount} count={count} />} />
          <Route path="/playground/live-search" element={<LiveSearch />} />
          <Route path="/playground/weather" element={<Weather />} />
          
          {/* 404 - Redirect to home */}
          <Route path="*" element={<Home count={count} />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
