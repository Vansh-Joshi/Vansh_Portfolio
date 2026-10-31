import React from 'react';
import { Link } from 'react-router-dom';
import vanshProfile from '../assets/vansh-profile-2026.jpeg';

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-12 sm:py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 id="about-heading" className="text-3xl font-semibold text-center mb-8">About</h2>
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <img src={vanshProfile} alt="Vansh Joshi" loading="lazy" className="rounded-xl shadow-lg w-full max-w-[300px] h-auto object-cover" />
          <div className="flex-1 text-gray-600 leading-relaxed">
            <p className="mb-4 text-lg">I enjoy difficult, ambiguous problems that demand a deep understanding of systems. I value questioning assumptions, sharing context, and working with teammates to find practical solutions.</p>
            <p className="mb-4">I want to take responsibility from design through production operation, collaborating across teams and balancing reliability, performance, security, and customer needs.</p>
            <p className="mb-5">I use AI as an accelerator; testing and independent engineering judgment remain essential.</p>
            <Link to="/beyond-work" className="text-blue-700 font-medium underline underline-offset-4">Beyond Work: music, photography, and community</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
