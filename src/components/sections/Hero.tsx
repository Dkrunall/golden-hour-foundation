"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, Play, Heart, Users, Award } from "lucide-react";
import { useState, useEffect } from "react";

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ['/1.jpeg', '/2.jpeg'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with Image Slider - Light Black Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div className="absolute inset-0 hero-pattern z-20"></div>
        
        {/* Image Slider */}
        <div className="relative w-full h-full overflow-hidden">
          {images.map((image, index) => (
            <motion.div
              key={image}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: index === currentImageIndex ? 1 : 0,
                scale: index === currentImageIndex ? 1.1 : 1
              }}
              transition={{ 
                opacity: { duration: 1.5, ease: "easeInOut" },
                scale: { duration: 10, ease: "linear" }
              }}
            >
              <Image
                src={image}
                alt={`Hero Background ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
                quality={90}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-40">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center max-w-6xl mx-auto min-h-screen flex flex-col justify-end pb-20"
        >
          {/* Main Headline at Bottom - Single Line */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-[1.1] text-white max-w-5xl mx-auto whitespace-nowrap"
          >
            Save{" "}
            <span className="relative inline-block">
              <span className="gradient-text bg-gradient-to-r from-primary-400 via-primary-300 to-secondary-400 bg-clip-text text-transparent">
                Golden Hour
              </span>
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 blur-xl -z-10 rounded-lg"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </span>
            {" "}
            <span className="text-white/90">
              Save Life
            </span>
          </motion.h1>
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
          <span className="font-body text-xs mb-2 font-medium group-hover:text-white transition-colors">Discover More</span>
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