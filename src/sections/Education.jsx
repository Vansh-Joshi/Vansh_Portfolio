import React from 'react';

const education = [
  {
    institute: "Dhirubhai Ambani Institute of Information and Communication Technology",
    degree: "B.Tech in Information & Communication Technology, Minor in Computational Science",
    duration: "Graduated May 2025",
    cpi: "9.11 / 10",
  },
];

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-heading" className="py-12 px-6 bg-gray-50 max-w-5xl mx-auto">
      <h2 id="education-heading" className="text-3xl font-semibold mb-6 text-center">Education</h2>
      {education.map((edu, i) => (
        <div key={i} className="bg-white p-6 rounded-xl shadow mb-6">
          <h3 className="text-xl font-semibold text-gray-800">{edu.institute}</h3>
          <p className="text-sm text-gray-700 mt-1">{edu.degree}</p>
          <p className="text-sm text-gray-600 mt-1">{edu.duration}</p>

          <p className="text-sm text-gray-600 mt-2">CPI: {edu.cpi}</p>
        </div>
      ))}
    </section>
  );
}
