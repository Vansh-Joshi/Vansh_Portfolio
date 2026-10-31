import React from 'react';

const groups = [
  ['Languages', ['C#', 'C++', 'TypeScript', 'SQL', 'PowerShell']],
  ['Services & data', ['.NET', 'REST APIs', 'Kusto', 'PostgreSQL']],
  ['Cloud & production', ['Azure', 'Azure DevOps', 'CI/CD', 'Observability', 'Incident-response automation', 'Git']],
  ['AI-enabled systems', ['AI agent workflows', 'Azure AI Foundry']],
];

export default function TechnicalSkills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-12 sm:py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 id="skills-heading" className="text-3xl font-semibold text-center mb-8">Technical Skills</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {groups.map(([title, skills]) => (
            <div key={title}>
              <h3 className="font-semibold mb-3">{title}</h3>
              <ul className="flex flex-wrap gap-2">
                {skills.map((skill) => <li key={skill} className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700">{skill}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
