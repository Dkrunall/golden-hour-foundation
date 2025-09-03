"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const mediaItems = [
  // Original media images
  {
    src: "/media1.jpeg",
    alt: "Golden Hour Foundation Training Session",
    type: "training"
  },
  {
    src: "/media2.jpeg",
    alt: "First Aid Workshop",
    type: "training"
  },
  {
    src: "/media3.jpeg",
    alt: "Medical Camp",
    type: "training"
  },
  // Newspaper articles
  {
    src: "/new/n1.jpeg",
    alt: "Press Coverage - Foundation Recognition",
    type: "news"
  },
  {
    src: "/new/n2.jpeg",
    alt: "Media Feature - Training Programs",
    type: "news"
  },
  {
    src: "/new/n3.jpeg",
    alt: "Newspaper Article - Community Impact",
    type: "news"
  },
  {
    src: "/new/n4.jpeg",
    alt: "Press Release - Medical Camp Success",
    type: "news"
  },
  {
    src: "/new/n5.jpeg",
    alt: "Media Coverage - Life-Saving Training",
    type: "news"
  },
  {
    src: "/new/n6.jpeg",
    alt: "Press Feature - Emergency Response",
    type: "news"
  }
];

export function MediaPreview() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(mediaItems.length / itemsPerSlide);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };
  return (
    <section className="section-padding bg-gradient-to-br from-white via-gray-50 to-white">
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
            <Camera className="w-4 h-4" />
            <span>Media Gallery</span>
          </motion.div>
          
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-balance">
            Our Work in{" "}
            <span className="gradient-text bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Action</span>
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mb-6"></div>
          <p className="font-body text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            Witness the impact of our training programs, medical camps, and community outreach initiatives across India
          </p>
        </motion.div>

        {/* Media Slider */}
        <div className="relative mb-16">
          {/* Slider Container */}
          <div className="overflow-hidden rounded-3xl">
            <motion.div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-2">
                    {mediaItems
                      .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                      .map((item, index) => (
                        <motion.div
                          key={slideIndex * itemsPerSlide + index}
                          initial={{ opacity: 0, y: 40 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1, duration: 0.6 }}
                          className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                        >
                          {/* Image Container */}
                          <div className="relative h-80 overflow-hidden">
                            <Image
                              src={item.src}
                              alt={item.alt}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                              sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            
                            {/* Type Badge */}
                            <div className="absolute top-4 left-4 z-10">
                              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                                item.type === 'news' 
                                  ? 'bg-secondary-100 text-secondary-700' 
                                  : 'bg-primary-100 text-primary-700'
                              }`}>
                                {item.type === 'news' ? 'Press Coverage' : 'Training'}
                              </span>
                            </div>
                            
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="absolute bottom-4 left-4 right-4 text-white">
                                <p className="text-sm font-medium truncate">{item.alt}</p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))
                    }
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-primary-600 transition-colors" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-primary-600 transition-colors" />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-primary-500 scale-110'
                    : 'bg-gray-300 hover:bg-primary-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl p-8 text-white">
            <h3 className="font-heading text-xl sm:text-2xl font-bold mb-4">
              Explore Our Complete Gallery
            </h3>
            <p className="font-body text-primary-100 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              Discover more photos and videos from our training sessions, medical camps, and community initiatives
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/gallery" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-2xl hover:bg-gray-50 transition-all duration-300 shadow-lg"
              >
                <span>View Full Gallery</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}