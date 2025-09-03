"use client";

import { motion } from "framer-motion";
import { Users, MapPin, Award, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "1000+",
    label: "People Trained",
    description: "Individuals equipped with life-saving skills",
    gradient: "from-blue-500 to-cyan-500",
    delay: 0.2
  },
  {
    icon: Award,
    number: "50+",
    label: "Free Camps Conducted",
    description: "Community health and training camps",
    gradient: "from-emerald-500 to-teal-500",
    delay: 0.4
  },
  {
    icon: MapPin,
    number: "8+",
    label: "Cities Impacted",
    description: "Locations across India where we operate",
    gradient: "from-purple-500 to-pink-500",
    delay: 0.6
  }
];

export function Impact() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
      <div className="absolute inset-0 hero-pattern opacity-30"></div>
      
      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [-30, 30, -30],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-24 h-24 bg-primary-500/10 rounded-full blur-xl"
      />
      <motion.div
        animate={{
          y: [30, -30, 30],
          rotate: [0, -10, 10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-20 right-10 w-32 h-32 bg-secondary-500/10 rounded-full blur-xl"
      />

      <div className="container relative z-10">
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
            className="inline-flex items-center gap-2 px-4 py-2 glass-card mb-6"
          >
            <TrendingUp className="w-4 h-4 text-primary-600" />
            <span className="text-gray-700 font-medium">Our Impact</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 text-balance">
            Lives Changed,{" "}
            <span className="gradient-text">Communities Strengthened</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-balance">
            Measurable results in building safer, more prepared communities across India
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: stat.delay, duration: 0.8, ease: "easeOut" }}
              className="group"
            >
              <div className="glass-card p-8 text-center hover:scale-105 transition-all duration-500 relative overflow-hidden">
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`relative w-20 h-20 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl`}
                >
                  <stat.icon className="w-10 h-10 text-white" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500`}></div>
                </motion.div>

                {/* Number */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: stat.delay + 0.3, duration: 0.8, type: "spring" }}
                  className={`text-5xl lg:text-6xl font-black mb-4 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                >
                  {stat.number}
                </motion.div>

                {/* Label */}
                <h3 className="text-xl font-bold text-gray-800 mb-3">{stat.label}</h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed">{stat.description}</p>
                
                {/* Progress Bar */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: stat.delay + 0.5, duration: 1 }}
                  className="mt-6 h-1 bg-gray-200 rounded-full overflow-hidden"
                >
                  <div className={`h-full bg-gradient-to-r ${stat.gradient} rounded-full transform origin-left`}></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Want to be part of these numbers?
            </h3>
            <p className="text-gray-600 mb-6">
              Join our mission and help us reach even more communities with life-saving training.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <span>Join Our Mission</span>
              <TrendingUp className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}