import React from 'react';

const experiences = [
  {
    company: "Microsoft",
    role: "Software Engineer Intern",
    location: "Hyderabad, Telangana",
    duration: "May 2024 – July 2024",
    description: [
      "Contributed to the Azure Liftr team by end-to-end development of a new feature while gaining in-depth knowledge of Liftr Architecture and excelling in the Azure Cloud Bootcamp.",
      "Designed and delivered a new customer-facing cloud service that met business requirements for over two Independent Software Vendors (ISVs), enhancing operational efficiency and scalability.",
    ],
    tech: "C#, .NET Framework, KnockoutJS, TypeScript, Microsoft Tools, Git",
    techname: "Tech Stack"
  },
  {
    company: "IIT Roorkee (Remote)",
    role: "Research Intern",
    location: "",
    duration: "Jan 2025 – Present",
    description: [
      "Working on optimizing sensor clustering and data collection methods in Wireless Sensor Networks (WSNs).",
      "Designing energy-efficient UAV path planning algorithms for enhanced data gathering.",
      "Focusing on applications in the agriculture industry to help farmers retrieve critical environmental data.",
    ],
    tech: "Optimization, Genetic Algorithms, Clustering and Routing Algorithms, Reinforcement Learning",
    techname: "Domain"
  },
];

export default function Internship() {
  return (
    <section className="py-10 px-6 bg-gray-50" id="experience">
      <h2 className="text-3xl font-semibold mb-6 text-center">Internship & Research</h2>
      
        {experiences.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow mb-6 hover:shadow-md hover:scale-[1.01] transition duration-300"
          >
            <div className="flex justify-between items-center mb-1">
              <h3 className="text-xl font-semibold text-gray-800">{item.company}</h3>
              <span className="text-sm text-gray-500">{item.duration}</span>
            </div>
            <p className="text-sm text-gray-700 font-medium">{item.role}</p>
            {item.location && <p className="text-sm text-gray-500">{item.location}</p>}
            <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-gray-600">
              {item.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-gray-500 italic">{item.techname}: {item.tech}</p>
          </div>
        ))}
      
    </section>
  );
}
