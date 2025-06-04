import React from 'react';
import { motion } from 'framer-motion';
import medaiImg from '../assets/project/medai.png';
import dbmsImg from '../assets/project/dbms.jpg';
import ldpcImg from '../assets/project/ldpc.jpg';
import railwayImg from '../assets/project/railway.png';

const projects = [
  {
    title: 'MED.Ai',
    bullets: [
      'MED.Ai offers medical professionals advanced algorithms using ML, enabling precise disease evaluation like Cardiovascular Disease and Diabetes.',
      'Led a team of 11, distributed work based on skill and learning speed, and ensured delivery of business requirements.',
      'Built APIs between User and ML model, integrated model I/O, and automated retraining with new data.'
    ],
    tech: 'Tech Stack: Django, REST framework.',
    img: medaiImg,
    video: 'https://youtu.be/qq7-MiapkyM',
    github: 'https://github.com/Aksharpanchani/IT_314_Software_engineering_Project_G25'
  },
  {
    title: 'IPL DBMS',
    bullets: [
      'Comprehensive database for IPL to manage player profiles, match results, team details, and stadium information.',
      'Helps IPL administration, sponsors, and teams analyze player performance and logistics.'
    ],
    tech: 'Tech Stack: pgAdmin',
    img: dbmsImg,
    github: 'https://github.com/Vansh-Joshi/IPL-DBMS'
  },
  {
    title: 'LDPC Decoding',
    bullets: [
      'Implemented entire LDPC decoding scheme in MATLAB using DSA and Communication Systems concepts.'
    ],
    img: ldpcImg,
    github: 'https://github.com/Vansh-Joshi/LDPC-Decoding'
  },
  {
    title: 'Railway Planning and Delivery System',
    bullets: [
      'Resolved train collision and traffic control issues; optimized delivery company routing.',
      'Used graph theory and optimization techniques from Discrete Mathematics.',
      'Built a full website and video walkthrough.'
    ],
    img: railwayImg,
    live: 'https://sakshipatadiya.com',
    video: 'https://youtu.be/V7BJT0UsN10'
  }
];

export default function Projects2() {
  return (
    <section id="projects" className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-semibold text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Projects
        </motion.h2>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row mb-16 gap-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Text Side */}
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                {project.bullets.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              {project.tech && <p className="mb-4 text-sm text-gray-700 italic">{project.tech}</p>}
              <div className="flex gap-4 flex-wrap">
                {project.video && (
                  <a
                    href={project.video}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
                  >
                    YouTube Video
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-gray-800 text-white px-4 py-2 rounded shadow hover:bg-gray-900"
                  >
                    Source Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700"
                  >
                    See Live
                  </a>
                )}
              </div>
            </div>

            {/* Image Side */}
            <div className="md:w-1/2 flex justify-center items-center">
              <img
                src={project.img}
                alt={project.title}
                className="rounded-xl shadow-lg w-full max-w-md object-cover"
              />
            </div>
          </motion.div>
        ))}

        <p className="text-center text-lg font-medium text-gray-700">
          Working on few more 🙂
        </p>
      </div>
    </section>
  );
}
