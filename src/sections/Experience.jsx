import React from 'react';

const experiences = [
  {
    role: 'Software Engineer',
    duration: 'July 2025 - Present',
    bullets: [
      ['Production cloud services', 'Built archival cleanup and AI incident-response workflows; co-developed release automation.'],
      ['Rate-limit resilience', 'Implemented bounded Retry-After backoff and header propagation across partner clients and resource-provider APIs, validated with unit, canary, and end-to-end tests.'],
      ['Customer-facing integration', 'Owned end-to-end delivery and production launch of the New Relic Azure Kubernetes Service (AKS) extension for monitoring and lifecycle management. Publicly available and adopted by customers.'],
      ['Security investigation & design', 'Investigated a cloud-service authorization issue and proposed remediation designs, weighing security, customer compatibility, and operational requirements.'],
    ],
  },
  {
    role: 'Software Engineer Intern',
    duration: 'May 2024 - July 2024',
    bullets: [
      ['Azure service delivery', 'Delivered a customer-facing Azure service feature for 4 independent software vendors (ISVs), covering integration and production readiness.'],
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-12 sm:py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 id="experience-heading" className="text-3xl font-semibold mb-8 text-center">Experience</h2>
        <div className="space-y-6">
          {experiences.map((experience) => (
            <article key={experience.role} className="bg-white p-6 sm:p-8 rounded-xl shadow">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold">Microsoft</h3>
                  <p className="font-medium text-blue-700 mt-1">{experience.role}</p>
                  <p className="text-sm text-gray-500 mt-1">Hyderabad, India</p>
                </div>
                <p className="text-sm text-gray-500">{experience.duration}</p>
              </div>
              <ul className="mt-5 space-y-3 list-disc pl-5 text-gray-600 leading-relaxed">
                {experience.bullets.map(([label, text]) => (
                  <li key={label}><strong className="text-gray-800">{label}: </strong>{text}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
