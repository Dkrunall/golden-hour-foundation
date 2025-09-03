"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Heart, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Training", href: "/training" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Main Header - Floating Glass Design */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 p-2"
      >
        <nav className="mx-auto max-w-7xl">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-lg px-6 lg:px-8 py-1">
            <div className="flex justify-between items-center w-full">
              {/* Logo Only - Larger Width, No Box */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-shrink-0"
              >
                <Link href="/" className="flex items-center">
                  <div className="relative">
                    <Image
                      src="/logo.png"
                      alt="Golden Hour Foundation Logo"
                      width={180}
                      height={80}
                      className="w-45 h-20 object-contain drop-shadow-lg"
                      priority
                    />
                  </div>
                </Link>
              </motion.div>

              {/* Desktop Navigation - Center Aligned */}
              <div className="hidden lg:flex items-center justify-center flex-1">
                <div className="flex items-center space-x-1">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <Link
                        href={item.href}
                        className="px-4 py-2 text-gray-700 hover:text-primary-500 font-medium transition-all duration-300 rounded-xl hover:bg-gray-50"
                      >
                        <span className="relative z-10">{item.name}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Right Side Button */}
              <div className="hidden lg:flex items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <Link
                    href="/contact"
                    className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    <span className="relative z-10">Get Involved</span>
                  </Link>
                </motion.div>
              </div>

              {/* Enhanced Mobile Menu Button */}
              <div className="lg:hidden">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-3 rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-700 shadow-lg transition-all duration-300"
                >
                  <motion.div
                    animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                  </motion.div>
                </motion.button>
              </div>
            </div>

            {/* Enhanced Mobile Navigation */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: -20 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="lg:hidden overflow-hidden"
                >
                  <div className="py-4 space-y-2 border-t border-gray-200 mt-4">
                    {navigation.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block px-6 py-3 text-gray-700 hover:text-primary-500 font-semibold hover:bg-gray-50 rounded-2xl mx-2 transition-all duration-300"
                        >
                          <span className="relative z-10">{item.name}</span>
                        </Link>
                      </motion.div>
                    ))}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.4 }}
                      className="pt-4 px-2"
                    >
                      <Link
                        href="/contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block w-full text-center px-6 py-4 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                      >
                        Get Involved
                      </Link>
                    </motion.div>
                    
                    {/* Mobile Contact Info */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7, duration: 0.4 }}
                      className="pt-6 px-6 border-t border-gray-200 space-y-3"
                    >
                      <div className="flex items-center space-x-3 text-gray-600">
                        <Phone className="w-4 h-4 text-primary-500" />
                        <span className="text-sm">+91 22 22067676</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-600">
                        <Mail className="w-4 h-4 text-primary-500" />
                        <span className="text-sm">drgautambhansali@gmail.com</span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>
      </motion.header>
    </>
  );
}