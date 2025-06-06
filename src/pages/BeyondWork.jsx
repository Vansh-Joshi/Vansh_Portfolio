import React from 'react';
import { motion } from 'framer-motion';
import BeyondGallery from '../components/BeyondGallery';

const beyondWork = [
  {
    section: "Leadership & Clubs",
    items: [
      {
        role: "President, Music Club",
        description:
          "Organized and performed in multiple events, mentored junior artists, and led the club for 2 years.",
      },
      {
        role: "Core Member, Alumni Association",
        description:
          "Actively involved in alumni engagement, networking initiatives, and event coordination.",
      },
    ],
  },
  {
    section: "Passions & Hobbies",
    items: [
      {
        role: "Musician",
        description:
          "Play drums and Indian classical instruments. Performed at institute fests and cultural nights.",
      },
      {
        role: "Photography Enthusiast",
        description:
          "Enjoys capturing live moments and landscapes during travel.",
      },
    ],
  },
  {
    section: "Volunteering & Social Work",
    items: [
      {
        role: "JEE Mentor",
        description:
          "Guided students in preparing for competitive exams through outreach initiatives and Quora.",
      },
      {
        role: "Event Volunteer, NGO Drives",
        description:
          "Contributed to food and education drives organized in collaboration with local NGOs during college breaks.",
      },
    ],
  },
];

export default function BeyondWork() {
  return (
    <section className="py-10 px-6 bg-gray-50" id="beyond">
      <motion.h2
        className="text-3xl font-semibold mb-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Beyond Work
      </motion.h2>
      {/* <BeyondGallery /> */}
      <div className="max-w-5xl mx-auto space-y-16">
        {beyondWork.map((section, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              {section.section}
            </h3>

            {/* Responsive grid for items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {section.items.map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-white p-5 rounded-xl shadow hover:shadow-md transition duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <p className="text-lg font-medium text-gray-700">
                    {item.role}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      
    </section>
    
  );
}
