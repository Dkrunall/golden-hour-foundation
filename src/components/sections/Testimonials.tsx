"use client";

import { motion } from "framer-motion";
import { Play, Quote, Star, Users, Heart } from "lucide-react";

const testimonialVideos = [
  {
    id: "C86gZrf3Yf4",
    url: "https://www.youtube.com/watch?v=C86gZrf3Yf4",
    embedUrl: "https://www.youtube.com/embed/C86gZrf3Yf4",
    thumbnail: `https://img.youtube.com/vi/C86gZrf3Yf4/maxresdefault.jpg`,
    channel: "Gautam Bhansali's Golden Hour Foundation",
    title: "Golden Hour Foundation Training Program",
    description: "Learn life-saving first aid techniques with our expert medical team. This comprehensive training covers CPR, emergency response, and critical care basics."
  },
  {
    id: "vAt63upFs0Q", 
    url: "https://www.youtube.com/watch?v=vAt63upFs0Q",
    embedUrl: "https://www.youtube.com/embed/vAt63upFs0Q",
    thumbnail: `https://img.youtube.com/vi/vAt63upFs0Q/maxresdefault.jpg`,
    channel: "Gautam Bhansali's Golden Hour Foundation",
    title: "Community Impact Stories",
    description: "Real stories from community members who have been trained in first aid and CPR. Discover how our programs are making a difference in emergency situations."
  }
];

export function Testimonials() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50">
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
            <Heart className="w-4 h-4" />
            <span>Patient Stories</span>
          </motion.div>
          
          <h2 className="font-heading text-4xl lg:text-6xl font-bold text-gray-900 mb-6 text-balance">
            Patients Say About{" "}
            <span className="gradient-text bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Our Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mb-6"></div>
          <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            Real stories from our community members whose lives have been transformed through our training programs
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {testimonialVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group"
            >
              {/* Video Card */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Video Container */}
                <div className="relative aspect-video bg-gray-900 overflow-hidden">
                  {/* YouTube Embed */}
                  <iframe
                    src={video.embedUrl}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay for hover effect */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 pointer-events-none"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Video Title */}
                  <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {video.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="font-body text-gray-600 mb-4 leading-relaxed">
                    {video.description}
                  </p>

                  {/* Video Meta */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Users className="w-4 h-4" />
                      <span className="font-body">{video.channel}</span>
                    </div>
                    
                    {/* Watch Button */}
                    <motion.a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-sm font-medium rounded-xl hover:shadow-lg transition-all duration-300"
                    >
                      <Play className="w-4 h-4" />
                      <span>Watch Full</span>
                    </motion.a>
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
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Testimonial Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Quote className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
              <div className="font-body text-gray-600 font-medium">Success Stories</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-secondary-600 mb-2">4.9/5</div>
              <div className="font-body text-gray-600 font-medium">Average Rating</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-primary-600 mb-2">1000+</div>
              <div className="font-body text-gray-600 font-medium">Lives Impacted</div>
            </motion.div>
          </div>

          {/* Bottom Message */}
          <div className="text-center mt-8 pt-8 border-t border-gray-200">
            <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">
              Your Story Could Be Next
            </h3>
            <p className="font-body text-gray-600 max-w-2xl mx-auto">
              Join thousands of community members who have gained life-saving skills through our comprehensive training programs. Every story matters, every life saved makes a difference.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}