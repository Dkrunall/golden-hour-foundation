"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, Images, Video } from "lucide-react";

export function GalleryHero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden pt-20">
      {/* Background with Static Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div className="absolute inset-0 hero-pattern z-20"></div>
        
        {/* Static Background Image */}
        <div className="relative w-full h-full overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={{ 
              opacity: 1,
              scale: 1.1
            }}
            transition={{ 
              opacity: { duration: 1.5, ease: "easeInOut" },
              scale: { duration: 10, ease: "linear" }
            }}
            className="absolute inset-0"
          >
            <Image
              src="/1.jpeg"
              alt="Gallery Hero Background"
              fill
              className="object-cover"
              priority
              quality={90}
            />
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-40">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center max-w-6xl mx-auto h-[500px] flex flex-col justify-end pb-20"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-8 mx-auto"
          >
            <Camera className="w-4 h-4" />
            <span>Visual Journey of Impact</span>
          </motion.div>
          
          {/* Main Headline at Bottom - Single Line */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-[1.1] text-white max-w-5xl mx-auto"
          >
            Our{" "}
            <span className="relative inline-block">
              <span className="gradient-text bg-gradient-to-r from-primary-400 via-primary-300 to-secondary-400 bg-clip-text text-transparent">
                Gallery
              </span>
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 blur-xl -z-10 rounded-lg"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="font-body text-xl lg:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Moments of training, healing, and community impact captured through time
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll Indicator - Enhanced */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 z-40"
      >
        <div className="flex flex-col items-center group cursor-pointer">
          <span className="font-body text-xs mb-2 font-medium group-hover:text-white transition-colors">Explore Gallery</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 border border-white/40 rounded-full flex justify-center group-hover:border-white/60 transition-colors"
          >
            <div className="w-0.5 h-2 bg-white/60 rounded-full mt-1.5 group-hover:bg-white/80 transition-colors"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}