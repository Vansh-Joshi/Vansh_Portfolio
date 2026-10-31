import React from 'react';

const impact = [
  { value: '~70M', label: 'messages processed per day', context: 'Archival cleanup across 22 regions.' },
  { value: '~19x', label: 'faster cleanup benchmark', context: 'Comparable 170,000-entity run: 16 minutes to 50 seconds, not the full daily workload.' },
  { value: '40', label: 'incident cases evaluated', context: 'Across 3 cloud-service partners. Evaluation scope, not a response-time metric.' },
];

export default function EngineeringImpact() {
  return (
    <section aria-labelledby="impact-heading" className="py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 id="impact-heading" className="text-3xl font-semibold text-center mb-8">Engineering Impact</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {impact.map((item) => (
            <div key={item.label} className="bg-white border-t-4 border-blue-600 rounded-xl shadow p-6">
              <p className="text-4xl font-bold text-blue-700">{item.value}</p>
              <h3 className="font-semibold mt-3">{item.label}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mt-3">{item.context}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
