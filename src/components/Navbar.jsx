import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav aria-label="Main navigation" className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-4">
        <Link to="/" onClick={() => setMenuOpen(false)} className="text-xl font-bold">Vansh Joshi</Link>
        <button type="button" aria-expanded={menuOpen} aria-controls="navigation-links" onClick={() => setMenuOpen(!menuOpen)} className="md:hidden border border-gray-500 rounded-lg px-3 py-2">Menu</button>
        <div id="navigation-links" className={`${menuOpen ? 'flex' : 'hidden'} md:flex w-full md:w-auto flex-col md:flex-row gap-4 md:gap-6 text-sm`}>
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-300 transition">Home</Link>
          <Link to="/#experience" onClick={() => setMenuOpen(false)} className="hover:text-blue-300 transition">Experience</Link>
          <Link to="/#projects" onClick={() => setMenuOpen(false)} className="hover:text-blue-300 transition">Selected Work</Link>
          <Link to="/#contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-300 transition">Contact</Link>
          <Link to="/beyond-work" onClick={() => setMenuOpen(false)} className="hover:text-blue-300 transition">Beyond Work</Link>
        </div>
      </div>
    </nav>
  );
}
