import React from 'react';
import medaiImg from '../assets/project/medai.png';
import dbmsImg from '../assets/project/dbms.jpg';
import ldpcImg from '../assets/project/ldpc.jpg';
import railwayImg from '../assets/project/railway.png';

const work = [
  {
    title: 'Archival cleanup & performance',
    category: 'Professional contribution / Microsoft',
    description: 'Built a configurable, self-scheduling cleanup service using transactional batching and bounded parallelism to control work and improve throughput.',
  },
  {
    title: 'AI-enabled incident response & releases',
    category: 'Professional contribution / Microsoft',
    description: 'Developed incident handlers combining Kusto diagnostics, environment-aware routing, operational actions, and historical-incident correlation.',
    evidence: 'Co-developed a configuration-driven Release Orchestrator Agent for 3 services, contributing workflow configuration, rollout reliability, and operator onboarding.',
  },
  {
    title: 'UAV path planning for environmental data',
    category: 'Completed research / IIT Roorkee / Jan 2025 - Jan 2026',
    description: 'Developed and evaluated UAV path-planning algorithms and wireless-sensor clustering for agricultural environmental data collection.',
    evidence: 'Research evaluation: 81% lower mission time and 45% lower path cost.',
  },
  {
    title: 'MedAI',
    category: 'Team project / Prototype',
    description: 'Led a team of 10 through Agile sprints, backlog management, and technical documentation. Built UI/model REST APIs and an automated retraining workflow.',
    evidence: 'Software prototype; not clinically validated.',
    image: medaiImg,
    source: 'https://github.com/Aksharpanchani/IT_314_Software_engineering_Project_G25',
    video: 'https://youtu.be/qq7-MiapkyM',
  },
];

const collegeProjects = [
  {
    title: 'IPL DBMS',
    description: 'Built a database for player profiles, match results, teams, and stadiums, supporting queries about cricket performance and logistics.',
    image: dbmsImg,
    source: 'https://github.com/Vansh-Joshi/IPL-DBMS',
  },
  {
    title: 'LDPC Decoding',
    description: 'Implemented an LDPC decoding scheme in MATLAB, applying data structures, algorithms, and communication-systems concepts.',
    image: ldpcImg,
    source: 'https://github.com/Vansh-Joshi/LDPC-Decoding',
  },
  {
    title: 'Railway Planning and Delivery System',
    description: 'Explored train routing, traffic control, and delivery planning using graph theory and optimization. Built a website and video walkthrough.',
    image: railwayImg,
    video: 'https://youtu.be/V7BJT0UsN10',
  },
];

export default function SelectedWork() {
  return (
    <section id="projects" aria-labelledby="work-heading" className="bg-white py-12 sm:py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 id="work-heading" className="text-3xl font-semibold text-center mb-3">Selected Work</h2>
        <p className="text-center text-gray-600 mb-8">Professional engineering contributions, completed research, and a team-built prototype.</p>
        <div className="grid md:grid-cols-2 gap-6">
          {work.map((item) => (
            <article key={item.title} className="rounded-xl border border-gray-200 p-6 sm:p-8">
              <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide">{item.category}</p>
              <h3 className="text-xl font-semibold mt-3 mb-4">{item.title}</h3>
              {item.image && <img src={item.image} alt="MedAI project interface" loading="lazy" className="rounded-lg mb-5 w-full h-40 object-contain bg-gray-50" />}
              <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>
              {item.evidence && <p className="text-sm font-medium text-gray-800 border-l-2 border-blue-600 pl-3">{item.evidence}</p>}
              {item.source && (
                <div className="flex flex-wrap gap-4 mt-5">
                  <a href={item.source} target="_blank" rel="noreferrer" className="text-blue-700 font-medium underline underline-offset-4">MedAI source <span className="sr-only">(opens in a new tab)</span></a>
                  <a href={item.video} target="_blank" rel="noreferrer" className="text-blue-700 font-medium underline underline-offset-4">Watch demo <span className="sr-only">(opens in a new tab)</span></a>
                </div>
              )}
            </article>
          ))}
        </div>
        <div className="mt-12 pt-10 border-t border-gray-200" aria-labelledby="college-projects-heading">
          <h3 id="college-projects-heading" className="text-2xl font-semibold text-center mb-3">College Projects</h3>
          <p className="text-center text-gray-600 mb-8">Earlier work exploring databases, communication systems, and graph-based planning.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {collegeProjects.map((project) => (
              <article key={project.title} className="rounded-xl border border-gray-200 p-6">
                <img src={project.image} alt={project.title} loading="lazy" className="rounded-lg mb-5 w-full h-40 object-contain bg-gray-50" />
                <h4 className="text-lg font-semibold mb-3">{project.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-4 mt-5">
                  {project.source && <a href={project.source} target="_blank" rel="noreferrer" className="text-blue-700 font-medium underline underline-offset-4">Source code <span className="sr-only">for {project.title} (opens in a new tab)</span></a>}
                  {project.video && <a href={project.video} target="_blank" rel="noreferrer" className="text-blue-700 font-medium underline underline-offset-4">Watch demo <span className="sr-only">of {project.title} (opens in a new tab)</span></a>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
