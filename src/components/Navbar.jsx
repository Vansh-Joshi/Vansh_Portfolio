import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold">Vansh Joshi</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:text-blue-400 transition">Home</Link>
        <Link to="/beyond-work" className="hover:text-blue-400 transition">Beyond Work</Link>
      </div>
    </nav>
  );
}
