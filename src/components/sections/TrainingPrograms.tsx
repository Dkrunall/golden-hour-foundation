"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Factory, Users, Building, GraduationCap, Heart, Shield } from "lucide-react";

const industrialFeatures = [
  { icon: Factory, title: "Factory Premises", description: "On-site training at factory locations" },
  { icon: Shield, title: "Safety Focus", description: "Designed per factory requirements" },
  { icon: GraduationCap, title: "Certification", description: "Official certificates for all candidates" },
];

const socialLocations = [
  "Schools & Colleges",
  "Leisure Centers", 
  "Disaster Management Areas",
  "Housing Societies",
  "GYMs & Fitness Centers",
  "General Physicians",
  "Senior Citizen Clubs",
  "Banks & Offices"
];

export function TrainingPrograms() {
  return (
    <section className="section-padding bg-gradient-to-br from-white via-gray-50 to-white">
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
            <Building className="w-5 h-5 mr-2" />
            Training Categories
          </motion.div>
          <h2 className="font-heading text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
            Our Training{" "}
            <span className="gradient-text bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              Programs
            </span>
          </h2>
          <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Specialized training programs tailored for different environments and requirements
          </p>
        </motion.div>

        {/* Industrial Training */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Content */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mr-4">
                    <Factory className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading text-3xl font-bold text-gray-900">Industrial Training</h3>
                </div>
                
                <p className="font-body text-lg text-gray-600 leading-relaxed mb-8">
                  These programs are organized in the factory premises only. The course structure is designed as per the factory requirements. At the end all candidates are rewarded by the certificates. The program can be conducted PAN India.
                </p>

                <div className="space-y-4">
                  {industrialFeatures.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="flex items-start"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center mr-4 mt-1">
                        <feature.icon className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-gray-900 mb-1">{feature.title}</h4>
                        <p className="font-body text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Image */}
              <div className="relative h-80 lg:h-full">
                <Image
                  src="/media2.jpeg"
                  alt="Industrial Training"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social Training Programs */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-80 lg:h-full order-2 lg:order-1">
                <Image
                  src="/media3.jpeg"
                  alt="Social Training Programs"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Content */}
              <div className="p-8 lg:p-12 order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center mr-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading text-3xl font-bold text-gray-900">Social Training Programs</h3>
                </div>
                
                <p className="font-body text-lg text-gray-600 leading-relaxed mb-8">
                  The program can be organized at various community locations to reach maximum people and create awareness about first aid and emergency response.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {socialLocations.map((location, index) => (
                    <motion.div
                      key={location}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05, duration: 0.6 }}
                      className="flex items-center p-3 bg-secondary-50 rounded-xl border border-secondary-100"
                    >
                      <Heart className="w-5 h-5 text-secondary-600 mr-3 flex-shrink-0" />
                      <span className="font-body text-gray-800 font-medium text-sm">{location}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}