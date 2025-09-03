"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, Users, BookOpen, Heart } from "lucide-react";

const trainingImages = [
  {
    src: "/t1.jpg",
    alt: "Professional Training Team",
    title: "Expert Training Team",
    description: "Our certified doctors and instructors",
    icon: Users
  },
  {
    src: "/t2.jpg", 
    alt: "Theory and Practical Training",
    title: "Comprehensive Learning",
    description: "Theory combined with hands-on practice",
    icon: BookOpen
  },
  {
    src: "/t3.jpg",
    alt: "Community Training Programs", 
    title: "Community Outreach",
    description: "Training programs across various locations",
    icon: Heart
  }
];

export function TrainingGallery() {
  return (
    <section className="section-padding bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="container max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 px-6 py-3 rounded-full font-medium mb-6 shadow-lg"
          >
            <Camera className="w-5 h-5 mr-2" />
            Training Gallery
          </motion.div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our Training{" "}
            <span className="gradient-text bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="font-body text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Glimpses from our comprehensive first aid training programs and community initiatives
          </p>
        </motion.div>

        {/* Image Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainingImages.map((image, index) => {
            const Icon = image.icon;
            return (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="group"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    
                    {/* Icon Overlay */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                      className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                      {image.title}
                    </h3>
                    <p className="font-body text-gray-600 leading-relaxed text-sm">
                      {image.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8 border border-gray-100">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Ready to Join Our Training Program?
            </h3>
            <p className="font-body text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands who have already learned life-saving skills through our comprehensive training programs.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:from-primary-600 hover:to-secondary-600">
                <Heart className="w-5 h-5 mr-2" />
                Start Your Training Journey
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}