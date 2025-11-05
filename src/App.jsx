import React from 'react';
import Hero from './components/Hero.jsx';
import CaseStudies from './components/CaseStudies.jsx';
import Philosophy from './components/Philosophy.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900 antialiased">
      <Hero />
      <CaseStudies />
      <Philosophy />
      <Footer />
    </div>
  );
}

export default App;
