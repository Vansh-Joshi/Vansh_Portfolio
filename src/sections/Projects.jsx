import React from 'react';
import { motion } from "framer-motion";

const projects = [
  { title: "Academic Networking Platform", description: "A platform for students to share academic resources and collaborate." },
  { title: "Healthcare ML App", description: "An app for early diagnosis of heart disease and diabetes using ML." },
];

export default function Projects() {
  return (
    <section className="py-10 px-4">
      <h2 className="text-3xl font-semibold mb-6 text-center">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="bg-white p-6 rounded-xl shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold">{p.title}</h3>
            <p className="text-sm mt-2 text-gray-600">{p.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
