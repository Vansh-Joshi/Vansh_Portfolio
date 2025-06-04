import React from 'react';

const education = [
  {
    institute: "Dhirubhai Ambani Institute of Information and Communication Technology",
    degree: "B.Tech in ICT with Minor in Computational Science",
    duration: "2021 - 2025",
    cpi: "9.11 / 10",
  },
];

export default function Education() {
  return (
    <section className="py-10 px-6 bg-gray-50">
      <h2 className="text-3xl font-semibold mb-6 text-center">Education</h2>
      {education.map((edu, i) => (
        <div key={i} className="bg-white p-6 rounded-xl shadow mb-6">
          <h3 className="text-xl font-semibold text-gray-800">{edu.institute}</h3>
          <p className="text-sm text-gray-700 mt-1">{edu.degree}</p>
          <p className="text-sm text-gray-600 mt-1">{edu.duration}</p>

          {/* Subtle CPI display */}
          <p className="text-sm text-gray-500 mt-2 italic">CPI: {edu.cpi} (≈ 3.64 / 4.0 GPA)</p>
        </div>
      ))}
    </section>
  );
}
