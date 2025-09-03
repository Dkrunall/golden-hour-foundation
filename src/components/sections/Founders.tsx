"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Award, Star, Heart, Shield, Target } from "lucide-react";

const founders = [
  {
    name: "Mrs. Meghana Gemawat",
    role: "Founder & Director",
    bio: "Dedicated to community health and emergency preparedness initiatives. Leading the foundation's mission to save lives through comprehensive first aid training.",
    image: "/Meghana-Gemawat.jpg",
    achievements: ["10+ Years Experience", "500+ Lives Saved", "Community Leader"]
  },
  {
    name: "Dr. Gautam Bhansali",
    role: "Medical Director & COVID Coordinator",
    bio: "Experienced medical professional leading our training programs and emergency response initiatives. Specialized in emergency medicine and critical care.",
    image: "/Gautam-Bhansali.jpg",
    achievements: ["Emergency Medicine Expert", "1000+ Trainings", "Medical Innovation"]
  }
];

const advisors = [
  { 
    name: "Dr. Rajesh Kumar", 
    credentials: "MBBS, MD Emergency Medicine",
    icon: Shield,
    color: "from-red-500 to-pink-500"
  },
  { 
    name: "Mrs. Priya Sharma", 
    credentials: "MSW, Community Health Specialist",
    icon: Heart,
    color: "from-blue-500 to-cyan-500"
  },
  { 
    name: "Mr. Anil Gupta", 
    credentials: "Training & Development Expert",
    icon: Target,
    color: "from-green-500 to-emerald-500"
  },
  { 
    name: "Dr. Sunita Rao", 
    credentials: "MBBS, Public Health Professional",
    icon: Award,
    color: "from-purple-500 to-indigo-500"
  }
];

export function Founders() {
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
            <Users className="w-5 h-5 mr-2" />
            Leadership Team
          </motion.div>
          <h2 className="font-heading text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
            Meet Our{" "}
            <span className="gradient-text bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              Founders
            </span>
          </h2>
          <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Visionary leaders dedicated to transforming emergency preparedness and saving lives through innovative training programs
          </p>
        </motion.div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group"
            >
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group-hover:border-primary-200">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex flex-wrap gap-2">
                      {founder.achievements.map((achievement, idx) => (
                        <span
                          key={idx}
                          className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium border border-white/30"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mr-3" />
                    <h3 className="font-heading text-2xl font-bold text-gray-900">
                      {founder.name}
                    </h3>
                  </div>
                  <p className="font-medium text-lg text-primary-600 mb-4">{founder.role}</p>
                  <p className="font-body text-gray-600 leading-relaxed">{founder.bio}</p>
                  
                  <div className="flex items-center mt-6 pt-6 border-t border-gray-100">
                    <Star className="w-5 h-5 text-yellow-500 mr-2" />
                    <span className="font-medium text-gray-700">Experienced Leader</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Advisors Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="font-heading text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Expert{" "}
            <span className="gradient-text bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              Advisors
            </span>
          </h3>
          <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
            Renowned professionals providing strategic guidance and expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advisors.map((advisor, index) => {
            const IconComponent = advisor.icon;
            return (
              <motion.div
                key={advisor.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100 group-hover:border-primary-200 h-full">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${advisor.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-heading font-bold text-gray-900 mb-2 text-lg">{advisor.name}</h4>
                  <p className="font-body text-sm text-gray-600 leading-relaxed">{advisor.credentials}</p>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-center">
                      <Award className="w-4 h-4 text-primary-500 mr-2" />
                      <span className="text-xs font-medium text-primary-600">Expert Advisor</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}