import React from 'react';

// Footer Component
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-center text-sm py-4">
      © {new Date().getFullYear()} Vansh Joshi. All rights reserved.
    </footer>
  );
}

// SocialLinks Component
export function SocialLinks() {
  return (
    <div className="w-full bg-gray-900 py-4 flex justify-center gap-6 text-gray-400">

      <a
        rel="noreferrer"
        href="https://linkedin.com/in/vansh-joshi21"
        aria-label="Vansh Joshi on LinkedIn (opens in a new tab)"
        target="_blank"
        className="text-xl hover:text-white transition duration-300"
      >
        <i className="fab fa-linkedin" aria-hidden="true"></i>
      </a>
      <a
        rel="noreferrer"
        href="https://github.com/Vansh-Joshi"
        aria-label="Vansh Joshi on GitHub (opens in a new tab)"
        target="_blank"
        className="text-xl hover:text-white transition duration-300"
      >
        <i className="fab fa-github" aria-hidden="true"></i>
      </a>
    </div>
  );
}
