"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, Mail, Phone, MapPin, ArrowRight, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { motion } from "framer-motion";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Training", href: "/training" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ],
  programs: [
    { name: "Industrial Training", href: "/training#industrial" },
    { name: "Social Training", href: "/training#social" },
    { name: "Medical Camps", href: "/training#camps" },
    { name: "CPR Training", href: "/training#cpr" },
  ],
  resources: [
    { name: "First Aid Guide", href: "#" },
    { name: "Emergency Contacts", href: "#" },
    { name: "Training Materials", href: "#" },
    { name: "Certification", href: "#" },
  ]
};

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#", color: "hover:text-blue-600" },
  { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-400" },
  { name: "Instagram", icon: Instagram, href: "#", color: "hover:text-pink-600" },
  { name: "YouTube", icon: Youtube, href: "#", color: "hover:text-red-600" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gray-100">
      {/* Background */}
      <div className="absolute inset-0 bg-gray-200"></div>
      
      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [-20, 20, -20],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-24 h-24 bg-primary-500/10 rounded-full blur-2xl"
      />
      <motion.div
        animate={{
          y: [20, -20, 20],
          rotate: [0, -5, 5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-20 right-10 w-32 h-32 bg-secondary-500/10 rounded-full blur-2xl"
      />

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="border-b border-gray-200">
          <div className="container py-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h3 className="font-heading text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Stay Updated with Our{" "}
                <span className="gradient-text bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Life-Saving Mission</span>
              </h3>
              <p className="text-gray-600 text-lg mb-8">
                Get the latest updates on our training programs, medical camps, and community initiatives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 bg-gray-100 border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Logo with Image */}
                <Link href="/" className="inline-flex items-center mb-6 group">
                  <div className="relative">
                    <Image
                      src="/logo.png"
                      alt="Golden Hour Foundation Logo"
                      width={250}
                      height={250}
                      className="drop-shadow-lg group-hover:scale-105 transition-transform duration-300 -ml-10"
                      priority
                    />
                  </div>
                </Link>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-6 max-w-md">
                  Empowering communities with first aid and CPR awareness since 2018. 
                  <span className="text-primary-500 font-medium">Save Golden Hour, Save Life.</span>
                </p>
                
                {/* Contact Info Cards */}
                <div className="space-y-4 mb-8">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-200 hover:border-primary-500/50 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-gray-900 font-medium">Our Location</div>
                      <div className="text-gray-600 text-sm">Wadala (East), Mumbai – 400037</div>
                    </div>
                  </motion.div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <motion.a
                      href="tel:+912222067676"
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-200 hover:border-primary-500/50 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl flex items-center justify-center">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-gray-900 text-sm font-medium group-hover:text-primary-500 transition-colors">+91 22 22067676</div>
                      </div>
                    </motion.a>
                    
                    <motion.a
                      href="tel:+919819024445"
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-200 hover:border-primary-500/50 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl flex items-center justify-center">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-gray-900 text-sm font-medium group-hover:text-primary-500 transition-colors">+91 98190 24445</div>
                      </div>
                    </motion.a>
                  </div>
                  
                  <motion.a
                    href="mailto:drgautambhansali@gmail.com"
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-200 hover:border-primary-500/50 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-gray-900 font-medium">Email Us</div>
                      <div className="text-gray-600 text-sm group-hover:text-primary-500 transition-colors">drgautambhansali@gmail.com</div>
                    </div>
                  </motion.a>
                </div>
                
                {/* Social Media */}
                <div>
                  <h4 className="text-gray-900 font-semibold mb-4">Follow Our Mission</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-600 ${social.color} border border-gray-200 hover:border-current transition-all duration-300 group`}
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {navigation.main.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
                  >
                    <Link
                      href={item.href}
                      className="font-body text-gray-600 hover:text-primary-500 transition-colors duration-200 flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-6">Services</h3>
              <div className="mb-4">
                <h4 className="font-heading text-lg font-semibold text-primary-600 mb-3">CONDUCTED FREE CAMPS AT</h4>
                <ul className="space-y-3">
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                  >
                    <div className="font-body text-gray-600 flex items-center group">
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                      Nagpur
                    </div>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.55, duration: 0.4 }}
                  >
                    <div className="font-body text-gray-600 flex items-center group">
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                      Kelwan, Nashik
                    </div>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.4 }}
                  >
                    <div className="font-body text-gray-600 flex items-center group">
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                      Traffic Police, Mumbai
                    </div>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.65, duration: 0.4 }}
                  >
                    <div className="font-body text-gray-600 flex items-center group">
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                      GVK Staff
                    </div>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7, duration: 0.4 }}
                  >
                    <div className="font-body text-gray-600 flex items-center group">
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                      Govandi Slum Area
                    </div>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.75, duration: 0.4 }}
                  >
                    <div className="font-body text-gray-600 flex items-center group">
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                      Airport Staff
                    </div>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.4 }}
                  >
                    <div className="font-body text-gray-600 flex items-center group">
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                      Custom and CISF Staff
                    </div>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.85, duration: 0.4 }}
                  >
                    <div className="font-body text-gray-600 flex items-center group">
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                      St. Xavier&apos;s College, Mumbai
                    </div>
                  </motion.li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200">
          <div className="container py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col lg:flex-row justify-between items-center gap-4"
            >
              <div className="flex items-center space-x-4 text-gray-600 text-sm">
                <p>© 2025 Golden Hour Foundation. All rights reserved.</p>
                <span className="hidden lg:block">•</span>
                <div className="flex items-center space-x-1">
                  <Heart className="w-4 h-4 text-secondary-500 animate-pulse" />
                  <span>Made with care for saving lives</span>
                </div>
              </div>
              <div className="flex items-center space-x-6 text-gray-600 text-sm">
                <Link href="#" className="hover:text-primary-500 transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link href="#" className="hover:text-primary-500 transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link href="#" className="hover:text-primary-500 transition-colors duration-200">
                  Accessibility
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}