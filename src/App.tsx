import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProgramSelector from './components/ProgramSelector';
import Programs from './components/Programs';
import SuccessStories from './components/SuccessStories';
import CaseStudies from './components/CaseStudies';
import Footer from './components/Footer';

function App() {
  return (
    <div className="text-white">
      <Navbar />
      <Hero />
      <ProgramSelector />
      <Programs />
      <SuccessStories />
      <CaseStudies />
      <Footer />
    </div>
  );
}

export default App;