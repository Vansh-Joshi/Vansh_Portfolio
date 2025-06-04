import React from 'react';
import { motion } from "framer-motion";

export default function Introduction() {
  return (
    <motion.section
      className="py-10 px-4 text-center"
      initial={{ opacity: 0, y: 30 }}       // Start hidden and slightly down
      animate={{ opacity: 1, y: 0 }}        // Animate to fully visible and original position
      transition={{ duration: 0.6 }}        // Animation duration
    >
      <h1 className="text-4xl font-bold">Hi, I'm Vansh</h1>
      <p className="mt-4 text-lg max-w-2xl mx-auto">
        I'm a software engineer passionate about building impactful solutions in the real world.
      </p>
    </motion.section>
  );
}
