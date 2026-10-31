import React from 'react';

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-white py-12 sm:py-16 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 id="contact-heading" className="text-3xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-600 leading-relaxed">Let's connect about software engineering, distributed systems, and building reliable services.</p>
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          <a href="https://linkedin.com/in/vansh-joshi21" target="_blank" rel="noreferrer" className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700">Connect on LinkedIn <span className="sr-only">(opens in a new tab)</span></a>
          <a href="https://github.com/Vansh-Joshi" target="_blank" rel="noreferrer" className="border border-gray-300 px-5 py-3 rounded-lg hover:bg-gray-100">GitHub <span className="sr-only">(opens in a new tab)</span></a>
          <a href="https://drive.google.com/file/d/1C5O4lzzsMpyeFYyb0ygXCp7iuXVqXJ6K/view?usp=sharing" target="_blank" rel="noreferrer" className="border border-gray-300 px-5 py-3 rounded-lg hover:bg-gray-100">View Resume <span className="sr-only">(Google Drive, opens in a new tab)</span></a>
        </div>
      </div>
    </section>
  );
}
