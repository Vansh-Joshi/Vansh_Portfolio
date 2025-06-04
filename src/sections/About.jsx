import React from 'react';
import { motion } from 'framer-motion';
import vanshProfile from '../assets/vansh_profile.jpeg'; // make sure this file exists

export default function About() {
  return (
    <section id="about" className="py-12 px-4 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-semibold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center md:gap-12">
          {/* Profile Image */}
          <motion.div
            className="md:w-1/2 w-full mb-8 md:mb-0 flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={vanshProfile}
              alt="Profile"
              className="rounded-xl shadow-lg w-[300px] h-auto object-cover"
            />
          </motion.div>

          {/* About Text */}
          <motion.div
            className="md:w-1/2 w-full"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="mb-4 text-lg">
              An enthusiastic learner and a great team player, motivated to take up new 
              challenges anytime. I have a good grip on concepts of Data Structure & Algorithms, DBMS, Computer Networks 
              as well as other core technical courses.
            </p>
            <p className="mb-4 text-lg">
              My greatest ambition is to create a positive impact & add value to the society with my utmost ability.
            </p>
            <a
              href="https://drive.google.com/file/d/1L7WTww5_BbECHWXNHVxAc2l8zIlJBzH0/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition-colors"
            >
              View Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
