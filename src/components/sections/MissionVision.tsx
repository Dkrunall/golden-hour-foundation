"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart, Users, GraduationCap, Shield, CheckCircle } from "lucide-react";

const objectives = [
  {
    icon: GraduationCap,
    title: "Educational Training",
    description: "Training at schools, colleges, industries, and housing societies",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Heart,
    title: "CPR Awareness",
    description: "Spreading awareness about CPR and life-saving techniques",
    gradient: "from-red-500 to-pink-500"
  },
  {
    icon: Shield,
    title: "Emergency Response",
    description: "Do's and don'ts during heart attacks and medical emergencies",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Users,
    title: "Prevention Education",
    description: "Teaching causes and prevention of common medical emergencies",
    gradient: "from-purple-500 to-indigo-500"
  }
];

export function MissionVision() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container">
        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20"
        >
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mr-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="font-body text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
              Golden Hour Foundation is dedicated to empowering individuals and communities 
              with essential first aid knowledge and emergency response skills. We believe 
              that proper training during the critical &ldquo;golden hour&rdquo; can mean the difference 
              between life and death.
            </p>
            <p className="font-body text-base sm:text-lg text-gray-600 leading-relaxed">
              Our mission is to make life-saving skills accessible to everyone, regardless 
              of their background or location, creating a safer and more prepared society.
            </p>
          </motion.div>
          
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center mr-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="font-body text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
              To create a society where every individual is equipped with the knowledge 
              and confidence to respond effectively to medical emergencies. We envision 
              communities where immediate, appropriate first aid becomes second nature.
            </p>
            <p className="font-body text-base sm:text-lg text-gray-600 leading-relaxed">
              Our goal is to significantly reduce preventable deaths and improve health 
              outcomes across India through comprehensive emergency preparedness.
            </p>
          </motion.div>
        </motion.div>

        {/* Objectives Header */}
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
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6"
          >
            <CheckCircle className="w-4 h-4" />
            <span>Our Objectives</span>
          </motion.div>
          
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-balance">
            How We{" "}
            <span className="gradient-text bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Make Impact</span>
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mb-6"></div>
          <p className="font-body text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            Our comprehensive approach focuses on education, awareness, and practical training to build safer communities
          </p>
        </motion.div>

        {/* Objectives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {objectives.map((objective, index) => (
            <motion.div
              key={objective.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${objective.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <objective.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-semibold text-gray-900 mb-3 text-center group-hover:text-primary-600 transition-colors duration-300">
                {objective.title}
              </h3>
              <p className="font-body text-sm sm:text-base text-gray-600 text-center leading-relaxed">{objective.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}