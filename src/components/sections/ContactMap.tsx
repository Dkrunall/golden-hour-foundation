"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export function ContactMap() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="sticky top-8"
    >
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 p-6">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">
            <MapPin className="w-4 h-4" />
            <span>Our Location</span>
          </div>
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-gray-900 mb-2">
            Find Us on the Map
          </h3>
          <p className="font-body text-sm text-gray-600">
            Golden Hour Foundation, Wadala (East), Mumbai
          </p>
        </div>
        
        <div className="rounded-2xl overflow-hidden shadow-inner">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15078.353462893654!2d72.8526!3d19.0176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce26e5e1a4d5%3A0x8b7b7b7b7b7b7b7b!2sWadala%2C%20Mumbai%2C%20Maharashtra%20400037!5e0!3m2!1sen!2sin!4v1635668800000!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[400px]"
            title="Golden Hour Foundation Location"
          />
        </div>
        
        <div className="mt-6 text-center">
          <p className="font-body text-sm text-gray-600 mb-2">
            <strong>Address:</strong> Wadala (East), Mumbai – 400037, Maharashtra, India
          </p>
          <a
            href="https://maps.google.com/maps?daddr=Wadala+East+Mumbai+400037"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full text-sm font-medium hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 transform hover:scale-105"
          >
            <MapPin className="w-4 h-4" />
            Get Directions
          </a>
        </div>
      </div>
    </motion.div>
  );
}