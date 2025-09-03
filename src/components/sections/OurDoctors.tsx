"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Stethoscope, Award, Users, Facebook, Twitter, Instagram, Linkedin, ExternalLink } from "lucide-react";

const boardMembers = [
  {
    name: "Dr. Gautam Bhansali",
    title: "Consultant Physician and Intensivist",
    credentials: "DNB Medicine, FACC, FACP[USA]",
    image: "/Gautam-Bhansali.jpg",
    description: "Dr. Gautam Bhansali, Consultant Physician and Intensivist (DNB Medicine, FACC, FACP[USA]) at Bombay Hospital & Chief Coordinator for all Private Hospitals and Nursing Homes in Mumbai for COVID 19.",
    socialMedia: [
      { platform: "facebook", icon: Facebook, href: "#", color: "hover:text-blue-600" },
      { platform: "twitter", icon: Twitter, href: "#", color: "hover:text-blue-400" },
      { platform: "linkedin", icon: Linkedin, href: "#", color: "hover:text-blue-700" },
      { platform: "instagram", icon: Instagram, href: "#", color: "hover:text-pink-600" }
    ]
  },
  {
    name: "Mrs. Meghana Gemawat",
    title: "Co-founder & Social Worker",
    credentials: "Indian Social Worker",
    image: "/Meghana-Gemawat.jpg",
    description: "Meghana Gemawat is a Indian Social Worker. She is the co-founder of the organisation Golden Hour Foundation that has done pioneering work in creating awareness about first aid and simple life saving techniques.",
    socialMedia: [
      { platform: "facebook", icon: Facebook, href: "#", color: "hover:text-blue-600" },
      { platform: "twitter", icon: Twitter, href: "#", color: "hover:text-blue-400" },
      { platform: "linkedin", icon: Linkedin, href: "#", color: "hover:text-blue-700" },
      { platform: "instagram", icon: Instagram, href: "#", color: "hover:text-pink-600" }
    ]
  }
];

export function OurDoctors() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6"
          >
            <Stethoscope className="w-4 h-4" />
            <span>Leadership Team</span>
          </motion.div>
          
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
            Our{" "}
            <span className="gradient-text bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Doctors</span>
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mb-4"></div>
          <p className="font-body text-base sm:text-lg text-gray-600 max-w-2xl mx-auto text-balance">
            Meet our distinguished board members who lead the Golden Hour Foundation
          </p>
        </motion.div>

        {/* Board Members Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {boardMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group"
            >
              {/* Card Container */}
              <div className="bg-white rounded-2xl p-4 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                
                {/* Content Layout - Responsive */}
                <div className="flex flex-col sm:flex-row items-start sm:items-stretch gap-4 sm:gap-6">
                  {/* Profile Image */}
                  <div className="flex-shrink-0 w-full sm:w-auto">
                    <div className="relative w-32 sm:w-36 lg:w-40 h-40 sm:h-full sm:min-h-[200px] mx-auto sm:mx-0">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover rounded-xl shadow-md"
                        sizes="(max-width: 640px) 128px, (max-width: 1024px) 144px, 160px"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center sm:text-left">
                    {/* Name and Title */}
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="font-body text-sm sm:text-base text-primary-600 font-medium mb-1">{member.title}</p>
                    <p className="font-body text-xs sm:text-sm text-gray-500 mb-3">{member.credentials}</p>
                    
                    {/* Description */}
                    <p className="font-body text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                      {member.description}
                    </p>

                    {/* Social Media Links */}
                    <div className="flex gap-2 sm:gap-3 justify-center sm:justify-start">
                      {member.socialMedia.map((social, idx) => (
                        <motion.a
                          key={social.platform}
                          href={social.href}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className={`w-7 h-7 sm:w-8 sm:h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 ${social.color} hover:bg-gray-200 transition-all duration-200`}
                        >
                          <social.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-8 lg:mt-12"
        >
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-4 sm:p-6 text-white max-w-3xl mx-auto">
            <h3 className="font-heading text-lg sm:text-xl font-bold mb-2 sm:mb-3">
              Leading Healthcare Innovation
            </h3>
            <p className="font-body text-primary-100 text-xs sm:text-sm">
              Our board members drive our mission to create safer communities through education and training.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}