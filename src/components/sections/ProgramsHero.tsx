"use client";

import { motion } from "framer-motion";

export function ProgramsHero() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Training Programs"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white max-w-4xl mx-auto"
        >
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Programs</h1>
          <p className="text-xl lg:text-2xl text-gray-200">
            Comprehensive training programs designed to save lives and build safer communities
          </p>
        </motion.div>
      </div>
    </section>
  );
}