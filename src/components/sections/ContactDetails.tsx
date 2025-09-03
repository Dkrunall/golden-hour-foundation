"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    title: "Address",
    content: "Wadala (East), Mumbai – 400037\nMaharashtra, India",
    color: "primary"
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+91 22 22067676\n+91 98190 24445",
    links: ["tel:+912222067676", "tel:+919819024445"],
    color: "secondary"
  },
  {
    icon: Mail,
    title: "Email",
    content: "drgautambhansali@gmail.com",
    links: ["mailto:drgautambhansali@gmail.com"],
    color: "primary"
  },
  {
    icon: Clock,
    title: "Operating Hours",
    content: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 9:00 AM - 2:00 PM\nSunday: Emergency Only",
    color: "secondary"
  }
];

export function ContactDetails() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        {/* Header */}
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
            <MessageSquare className="w-4 h-4" />
            <span>Contact Information</span>
          </motion.div>
          
          <h2 className="font-heading text-4xl lg:text-6xl font-bold text-gray-900 mb-6 text-balance">
            Get{" "}
            <span className="gradient-text bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">In Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mb-6"></div>
          <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            Ready to start your life-saving journey? Contact us for training programs, medical camps, or emergency services
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {contactDetails.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <motion.div
                key={detail.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                {/* Contact Card - Awards Style */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 p-8">
                  {/* Icon */}
                  <div className="mb-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                      className={`w-16 h-16 bg-gradient-to-br ${
                        detail.color === 'primary' 
                          ? 'from-primary-500 to-primary-600' 
                          : 'from-secondary-500 to-secondary-600'
                      } rounded-2xl flex items-center justify-center shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                      {detail.title}
                    </h3>
                    
                    <div className="space-y-2">
                      {detail.content.split('\n').map((line, lineIndex) => (
                        <p key={lineIndex} className="font-body text-gray-600 leading-relaxed">
                          {detail.links && detail.links[lineIndex] ? (
                            <a 
                              href={detail.links[lineIndex]}
                              className={`hover:text-${
                                detail.color === 'primary' ? 'primary' : 'secondary'
                              }-600 transition-colors duration-300 font-medium`}
                            >
                              {line}
                            </a>
                          ) : (
                            line
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 p-8"
        >
          <div className="text-center mb-8">
            <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
              Find Us on the Map
            </h3>
            <p className="font-body text-gray-600">
              Visit our headquarters in Mumbai for in-person consultations and training programs
            </p>
          </div>
          
          <div className="bg-gray-200 rounded-2xl overflow-hidden h-96 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <MapPin className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <p className="text-lg font-medium mb-2">Interactive Map</p>
              <p className="text-sm mb-2">Google Maps integration would go here</p>
              <p className="text-xs font-medium text-gray-600">Wadala (East), Mumbai – 400037</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}