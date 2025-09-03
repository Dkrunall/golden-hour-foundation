"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Trophy, Medal, Star } from "lucide-react";

const awardImages = [
  {
    src: "/a1.jpeg",
    alt: "Golden Hour Foundation Award 1",
    title: "Excellence in Healthcare"
  },
  {
    src: "/a2.jpeg", 
    alt: "Golden Hour Foundation Award 2",
    title: "Community Service Recognition"
  },
  {
    src: "/a3.jpeg",
    alt: "Golden Hour Foundation Award 3", 
    title: "Medical Training Achievement"
  },
  {
    src: "/a4.jpeg",
    alt: "Golden Hour Foundation Award 4",
    title: "First Aid Education Honor"
  },
  {
    src: "/a5.jpeg",
    alt: "Golden Hour Foundation Award 5",
    title: "Community Impact Award"
  }
];

export function Awards() {
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-100 text-secondary-800 rounded-full text-sm font-medium mb-6"
          >
            <Trophy className="w-4 h-4" />
            <span>Recognition</span>
          </motion.div>
          
          <h2 className="font-heading text-4xl lg:text-6xl font-bold text-gray-900 mb-6 text-balance">
            Awards &{" "}
            <span className="gradient-text bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Recognition</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mb-6"></div>
          <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            Celebrating our achievements in advancing healthcare education and community service excellence
          </p>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {awardImages.map((award, index) => (
            <motion.div
              key={award.src}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              {/* Award Card */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={award.src}
                    alt={award.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Award Icon */}
                  <div className="absolute top-4 right-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                      className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <Medal className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                      className="font-heading text-xl font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      {award.title}
                    </motion.h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl p-8 text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {/* Achievement Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="font-body text-primary-100 font-medium">Awards Received</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.0, duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold mb-2">5</div>
              <div className="font-body text-primary-100 font-medium">Years of Excellence</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="font-body text-primary-100 font-medium">Recognition Rate</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                <Medal className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold mb-2">Top</div>
              <div className="font-body text-primary-100 font-medium">Healthcare NGO</div>
            </motion.div>
          </div>

          {/* Bottom Message */}
          <div className="text-center mt-8 pt-8 border-t border-white/20">
            <h3 className="font-heading text-2xl font-bold mb-3">
              Committed to Excellence in Healthcare Education
            </h3>
            <p className="font-body text-primary-100 max-w-3xl mx-auto">
              These awards reflect our unwavering dedication to saving lives through education, training, and community service. Every recognition motivates us to reach more communities and save more lives.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}