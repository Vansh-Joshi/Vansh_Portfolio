import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Footer, { SocialLinks } from './components/Footer';
import Navbar from './components/Navbar';
import Introduction from './sections/Introduction';
import About from './sections/About';
import EngineeringImpact from './sections/EngineeringImpact';
import SelectedWork from './sections/SelectedWork';
import Experience from './sections/Experience';
import TechnicalSkills from './sections/TechnicalSkills';
import Contact from './sections/Contact';
import Education from './sections/Education';
import CodingProfile from './sections/CodingProfile';
import BeyondWork from './pages/BeyondWork';
function ScrollToLocation() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, hash, key]);
  return null;
}

function HomePage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <Introduction />
      <EngineeringImpact />
      <Experience />
      <SelectedWork />
      <TechnicalSkills />
      <About />
      <Education />
      <CodingProfile />
      <Contact />
    </main>
  );
}

function App() {
  return (
    <Router>
      <ScrollToLocation />
      <div className="font-sans text-gray-800 bg-gray-50 min-h-screen flex flex-col">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/beyond-work" element={<main id="main-content" tabIndex={-1}><BeyondWork /></main>} />
        </Routes>
        <SocialLinks />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
