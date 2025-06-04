import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer, {SocialLinks} from './components/Footer';
import Navbar from './components/Navbar';
import Introduction from './sections/Introduction';
import About from './sections/About';
import Projects from './sections/Projects';
import Projects2 from './sections/Projects2';
import Internship from './sections/Internship';
import Education from './sections/Education';
import CodingProfile from './sections/CodingProfile';
import BeyondWork from './pages/BeyondWork';


function HomePage(){
  return(
  
  <>
  <main className="space-y-10">
    <Introduction />
    <About />
    <Internship />
    <Education />
    <Projects2 />
    <CodingProfile />
    
  </main>
  <SocialLinks />
  <Footer />
  </>
  );
}


function App() {
  return (
    <Router>
      <div className="font-sans text-gray-800 bg-gray-50 min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/beyond-work" element={<BeyondWork />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
