"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Newspaper, ExternalLink } from "lucide-react";

const newsArticles = [
  {
    id: 1,
    src: "/new/n1.jpeg",
    title: "Foundation Recognition in Leading Daily",
    description: "Golden Hour Foundation receives widespread recognition for community service",
    date: "2024"
  },
  {
    id: 2,
    src: "/new/n2.jpeg", 
    title: "Training Programs Feature",
    description: "Media highlights our comprehensive first aid training initiatives",
    date: "2024"
  },
  {
    id: 3,
    src: "/new/n3.jpeg",
    title: "Community Impact Coverage",
    description: "Press coverage of our life-saving community outreach programs",
    date: "2024"
  },
  {
    id: 4,
    src: "/new/n4.jpeg",
    title: "Medical Camp Success Story",
    description: "Newspaper article featuring our successful medical camp initiatives",
    date: "2024"
  },
  {
    id: 5,
    src: "/new/n5.jpeg",
    title: "Life-Saving Training Excellence", 
    description: "Media coverage of our award-winning training methodologies",
    date: "2024"
  },
  {
    id: 6,
    src: "/new/n6.jpeg",
    title: "Emergency Response Feature",
    description: "Press highlight of our emergency response training programs",
    date: "2024"
  }
];

export function NewsGallery() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-blue-50">
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
            <Newspaper className="w-4 h-4" />
            <span>Press Coverage</span>
          </motion.div>
          
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            In the{" "}
            <span className="gradient-text bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">News</span>
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mb-6"></div>
          <p className="font-body text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            See how our life-saving initiatives and training programs are making headlines across India
          </p>
        </motion.div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={article.src}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Read More Button */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs px-2 py-1 bg-secondary-100 text-secondary-700 rounded-full font-medium">
                      Press Coverage
                    </span>
                    <span className="text-xs text-gray-500">{article.date}</span>
                  </div>
                  
                  <h3 className="font-heading text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                    {article.title}
                  </h3>
                  
                  <p className="font-body text-sm text-gray-600 leading-relaxed">
                    {article.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-12"
        >
          <p className="font-body text-gray-600 mb-6">
            See more newspaper articles and press coverage in our complete gallery
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-secondary-500 to-primary-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Newspaper className="w-5 h-5" />
            <span>View All Press Coverage</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}