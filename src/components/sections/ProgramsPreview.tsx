"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowRight, Award, Users } from "lucide-react";

const locations = [
  "Nagpur",
  "Kelwan, Nashik",
  "Traffic Police, Mumbai",
  "GVK Staff",
  "Govandi Slum Area",
  "Airport Staff",
  "Custom and CISF Staff",
  "St. Xavier&apos;s College"
];

export function ProgramsPreview() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50" id="services">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-100 text-secondary-800 rounded-full text-sm font-medium mb-6"
          >
            <Award className="w-4 h-4" />
            <span>Services</span>
          </motion.div>
          
          <h2 className="font-heading text-4xl lg:text-6xl font-bold text-gray-900 mb-6 text-balance">
            Our{" "}
            <span className="gradient-text bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mb-6"></div>
          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-heading text-2xl lg:text-3xl font-semibold text-primary-600 mb-8"
          >
            CONDUCTED FREE CAMPS AT
          </motion.h3>
        </motion.div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-16">
          {locations.map((location, index) => (
            <motion.div
              key={location}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-medium text-gray-900 text-base">
                      {location}
                    </h3>
                    <p className="font-body text-gray-500 text-xs">Free Training Camp</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 mx-4"
        >
          {/* Title */}
          <div className="text-center mb-8">
            <h3 className="font-heading text-2xl font-bold text-gray-900 mb-3">
              Making Communities Safer, One Training at a Time
            </h3>
            <p className="font-body text-gray-600 max-w-2xl mx-auto">
              Our free training camps have reached diverse communities across India, 
              empowering individuals with life-saving first aid and CPR skills.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-primary-600 mb-2">8+</div>
              <div className="font-body text-gray-600 font-medium">Locations Covered</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.0, duration: 0.5 }}
              className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-secondary-600 mb-2">1000+</div>
              <div className="font-body text-gray-600 font-medium">People Trained</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
              <div className="font-body text-gray-600 font-medium">Free Training</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}