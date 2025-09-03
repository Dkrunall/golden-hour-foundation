"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Award, FileText, MapPin } from "lucide-react";

export function TrainingSyllabus() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container max-w-7xl mx-auto">
        {/* Section Header */}
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
            transition={{ duration: 0.6 }}
            className="inline-flex items-center bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 px-6 py-3 rounded-full font-medium mb-6 shadow-lg"
          >
            <FileText className="w-5 h-5 mr-2" />
            Training Syllabus
          </motion.div>
          <h2 className="font-heading text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
            Expert{" "}
            <span className="gradient-text bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              Training Team
            </span>
          </h2>
          <p className="font-body text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our team of well qualified Doctors, First-aid Instructors & Assistants provide comprehensive training programs designed to save lives
          </p>
        </motion.div>

        {/* Team Description Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-lg p-8 lg:p-12 mb-16 border border-gray-100"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mr-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-3xl font-bold text-gray-900">Professional Training</h3>
              </div>
              <p className="font-body text-lg text-gray-600 leading-relaxed mb-6">
                Our experienced team consists of qualified medical professionals, certified first-aid instructors, and dedicated assistants who work together to deliver high-quality training programs.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-medium text-sm">
                  Certified Doctors
                </span>
                <span className="bg-secondary-100 text-secondary-700 px-4 py-2 rounded-full font-medium text-sm">
                  First-Aid Instructors
                </span>
                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium text-sm">
                  Training Assistants
                </span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/media1.jpeg"
                alt="Training Team"
                width={500}
                height={400}
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </motion.div>

        {/* Coverage Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="font-heading text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Training{" "}
            <span className="gradient-text bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              Coverage
            </span>
          </h3>
          <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
            Our programs can be conducted PAN India with customized course structures
          </p>
        </motion.div>

        {/* Coverage Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-heading text-2xl font-bold text-gray-900 mb-2">PAN India</h4>
            <p className="font-body text-gray-600">Coverage across all states and regions</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-heading text-2xl font-bold text-gray-900 mb-2">Certified</h4>
            <p className="font-body text-gray-600">Official certificates for all candidates</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-heading text-2xl font-bold text-gray-900 mb-2">Customized</h4>
            <p className="font-body text-gray-600">Course structure per requirements</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}