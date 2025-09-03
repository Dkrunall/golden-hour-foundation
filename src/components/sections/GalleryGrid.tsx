"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { X, Play, Camera, Medal, Video } from "lucide-react";
import Image from "next/image";

interface MediaItem {
  id: number;
  type: "image" | "video";
  src: string;
  title: string;
  category: string;
  videoId?: string;
  embedUrl?: string;
}

const mediaItems: MediaItem[] = [
  // Images from MediaPreview component (local images)
  {
    id: 1,
    type: "image",
    src: "/media1.jpeg",
    title: "Golden Hour Foundation Training Session",
    category: "Training"
  },
  {
    id: 2,
    type: "image",
    src: "/media2.jpeg",
    title: "First Aid Workshop",
    category: "Training"
  },
  {
    id: 3,
    type: "image",
    src: "/media3.jpeg",
    title: "Medical Camp",
    category: "Camps"
  },
  // Hero background images
  {
    id: 4,
    type: "image",
    src: "/1.jpeg",
    title: "Foundation Activities",
    category: "Training"
  },
  {
    id: 6,
    type: "image",
    src: "/aboutsec.jpeg",
    title: "About Our Foundation",
    category: "About"
  },
  // Awards Images from home page
  {
    id: 9,
    type: "image",
    src: "/a1.jpeg",
    title: "Excellence in Healthcare",
    category: "Awards"
  },
  {
    id: 10,
    type: "image",
    src: "/a2.jpeg",
    title: "Community Service Recognition",
    category: "Awards"
  },
  {
    id: 11,
    type: "image",
    src: "/a3.jpeg",
    title: "Medical Training Achievement",
    category: "Awards"
  },
  {
    id: 12,
    type: "image",
    src: "/a4.jpeg",
    title: "First Aid Education Honor",
    category: "Awards"
  },
  {
    id: 13,
    type: "image",
    src: "/a5.jpeg",
    title: "Community Impact Award",
    category: "Awards"
  },
  // YouTube Videos from home page
  {
    id: 14,
    type: "video",
    src: "https://img.youtube.com/vi/C86gZrf3Yf4/maxresdefault.jpg",
    title: "Golden Hour Foundation Training Video",
    category: "Videos",
    videoId: "C86gZrf3Yf4",
    embedUrl: "https://www.youtube.com/embed/C86gZrf3Yf4"
  },
  {
    id: 15,
    type: "video",
    src: "https://img.youtube.com/vi/vAt63upFs0Q/maxresdefault.jpg",
    title: "Community Impact Stories",
    category: "Videos",
    videoId: "vAt63upFs0Q",
    embedUrl: "https://www.youtube.com/embed/vAt63upFs0Q"
  },
  // Newspaper Articles
  {
    id: 16,
    type: "image",
    src: "/new/n1.jpeg",
    title: "Press Coverage - Foundation Recognition",
    category: "Press"
  },
  {
    id: 17,
    type: "image",
    src: "/new/n2.jpeg",
    title: "Media Feature - Training Programs",
    category: "Press"
  },
  {
    id: 18,
    type: "image",
    src: "/new/n3.jpeg",
    title: "Newspaper Article - Community Impact",
    category: "Press"
  },
  {
    id: 19,
    type: "image",
    src: "/new/n4.jpeg",
    title: "Press Release - Medical Camp Success",
    category: "Press"
  },
  {
    id: 20,
    type: "image",
    src: "/new/n5.jpeg",
    title: "Media Coverage - Life-Saving Training",
    category: "Press"
  },
  {
    id: 21,
    type: "image",
    src: "/new/n6.jpeg",
    title: "Press Feature - Emergency Response",
    category: "Press"
  },
  {
    id: 22,
    type: "image",
    src: "/new/n7.jpeg",
    title: "News Article - First Aid Initiative",
    category: "Press"
  },
  {
    id: 23,
    type: "image",
    src: "/new/n8.jpeg",
    title: "Press Coverage - Health Awareness",
    category: "Press"
  },
  {
    id: 24,
    type: "image",
    src: "/new/n9.jpeg",
    title: "Media Report - Training Excellence",
    category: "Press"
  },
  {
    id: 25,
    type: "image",
    src: "/new/n10.jpeg",
    title: "Newspaper Feature - Golden Hour Foundation",
    category: "Press"
  },
  {
    id: 26,
    type: "image",
    src: "/new/n11.jpeg",
    title: "Press Article - Medical Training Impact",
    category: "Press"
  },
  {
    id: 27,
    type: "image",
    src: "/new/n12.jpeg",
    title: "Media Coverage - Community Outreach",
    category: "Press"
  },
  {
    id: 28,
    type: "image",
    src: "/new/n13.jpeg",
    title: "News Report - Emergency Training",
    category: "Press"
  },
  {
    id: 29,
    type: "image",
    src: "/new/n14.jpeg",
    title: "Press Feature - Healthcare Initiative",
    category: "Press"
  },
  {
    id: 30,
    type: "image",
    src: "/new/n15.jpeg",
    title: "Media Article - First Aid Excellence",
    category: "Press"
  },
  {
    id: 31,
    type: "image",
    src: "/new/n16.jpeg",
    title: "Newspaper Coverage - Foundation Success",
    category: "Press"
  }
];

const filters = ["All", "Images", "Videos", "Training", "Awards", "Press"];

export function GalleryGrid() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<MediaItem | null>(null);

  const filteredItems = selectedFilter === "All" 
    ? mediaItems 
    : selectedFilter === "Images" 
    ? mediaItems.filter(item => item.type === "image")
    : selectedFilter === "Videos"
    ? mediaItems.filter(item => item.type === "video")
    : mediaItems.filter(item => item.category === selectedFilter);

  return (
    <section className="section-padding">
      <div className="container">
        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap gap-2 bg-gray-100 p-2 rounded-lg">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={selectedFilter === filter ? "primary" : "ghost"}
                onClick={() => setSelectedFilter(filter)}
                className="rounded-md"
              >
                {filter}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`group ${item.type === "image" ? "cursor-pointer" : "cursor-default"}`}
                onClick={() => item.type === "image" ? setSelectedImage(item) : null}
              >
                {/* Gallery Card - Same as Awards for Images, Special handling for Videos */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                  {item.type === "video" ? (
                    /* Video Card - Like Home Page Testimonials */
                    <>
                      {/* Video Container */}
                      <div className="relative aspect-video bg-gray-900 overflow-hidden">
                        {/* YouTube Embed */}
                        <iframe
                          src={item.embedUrl}
                          title={item.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full object-cover"
                        />
                        
                        {/* Overlay for hover effect */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 pointer-events-none"></div>
                      </div>

                      {/* Video Content */}
                      <div className="p-6">
                        <h3 className="font-heading text-lg sm:text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                          {item.title}
                        </h3>
                        <div className="flex items-center justify-between">
                          <span className="inline-block px-3 py-1 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-sm rounded-full">
                            Video
                          </span>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-sm font-medium rounded-xl hover:shadow-lg transition-all duration-300"
                          >
                            <Play className="w-4 h-4" />
                            <span>Watch</span>
                          </motion.div>
                        </div>
                      </div>
                    </>
                  ) : (
                    /* Image Card - Awards Style */
                    <div className="relative h-80 overflow-hidden">
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Type Icon */}
                      <div className="absolute top-4 right-4">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                          className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center shadow-lg"
                        >
                          {item.category === "Awards" ? (
                            <Medal className="w-6 h-6 text-white" />
                          ) : (
                            <Camera className="w-6 h-6 text-white" />
                          )}
                        </motion.div>
                      </div>

                      {/* Title Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <motion.h3
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                          className="font-heading text-lg sm:text-xl font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-2"
                        >
                          {item.title}
                        </motion.h3>
                        <motion.span
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                          className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          {item.category === "Awards" ? "Awards" : "Image"}
                        </motion.span>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox - Only for Images */}
        <AnimatePresence>
          {selectedImage && selectedImage.type === "image" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full max-w-4xl max-h-[80vh] aspect-video">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    fill
                    className="object-contain rounded-lg"
                    sizes="(max-width: 768px) 95vw, 80vw"
                  />
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                  <h3 className="text-white text-lg sm:text-xl font-semibold mb-2">{selectedImage.title}</h3>
                  <span className="inline-block px-3 py-1 bg-primary-500 text-white text-sm rounded">
                    {selectedImage.category === "Awards" ? "Awards" : "Image"}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}