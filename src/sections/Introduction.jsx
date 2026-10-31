import React from 'react';
import { motion } from "framer-motion";

export default function Introduction() {
  return (
    <motion.section
      className="pt-16 pb-12 sm:pt-24 sm:pb-16 px-6 text-center bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <p className="text-sm font-semibold uppercase tracking-widest text-blue-700 mb-4">Software Engineer at Microsoft</p>
      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">Vansh Joshi</h1>
      <p className="mt-6 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto text-gray-600">
        Building distributed cloud services and AI-enabled systems, with a focus on reliability, performance, and production engineering.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a href="#experience" className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition-colors">Experience</a>
        <a href="#projects" className="border border-gray-300 px-5 py-3 rounded-lg hover:bg-gray-100 transition-colors">Selected Work</a>
        <a href="https://drive.google.com/file/d/1C5O4lzzsMpyeFYyb0ygXCp7iuXVqXJ6K/view?usp=sharing" target="_blank" rel="noreferrer" className="border border-gray-300 px-5 py-3 rounded-lg hover:bg-gray-100 transition-colors">View Resume <span className="sr-only">(Google Drive, opens in a new tab)</span></a>
      </div>
    </motion.section>
  );
}
