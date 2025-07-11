import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import FreelanceSection from './components/FreelanceSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import { useScrollAnimations } from './components/ScrollAnimations';

function App() {
  useScrollAnimations();
  
  return (
    <Router>
      <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
        <ParticleBackground />
        <Navigation />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={
              <main>
                <Hero />
                <About />
                <Achievements />
                <Projects />
                <Experience />
                <Skills />
                <FreelanceSection />
                <Contact />
              </main>
            } />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;