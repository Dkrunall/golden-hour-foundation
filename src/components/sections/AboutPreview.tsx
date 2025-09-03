"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Users, Award, Ambulance, ArrowRight, CheckCircle } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Qualified Doctors",
    description: "Expert medical professionals leading our training programs",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Ambulance,
    title: "Emergency Services",
    description: "24/7 emergency response and support services",
    gradient: "from-red-500 to-pink-500"
  },
  {
    icon: Award,
    title: "Certified Training",
    description: "Standardized first aid training with official certification",
    gradient: "from-amber-500 to-orange-500"
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Building stronger, more prepared communities together",
    gradient: "from-green-500 to-emerald-500"
  }
];

export function AboutPreview() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50" id="about">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Section Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium"
            >
              <CheckCircle className="w-4 h-4" />
              <span>Our Foundation</span>
            </motion.div>

            <div>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">
                About{" "}
                <span className="gradient-text bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Golden Hour Foundation</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-6"></div>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="font-body text-lg">
                Dr. Gautam Bhansali deals with medical and accidental emergency cases. The unnecessary deaths before hospitalization in case of accidents and even in heart can be prevented by imparting knowledge about first aid and simple life saving techniques.
              </p>
              
              <p className="font-body text-lg">
                Dr. Gautam Bhansali in association with other cardiologists & intensivists designed an organized first aid training program to spread knowledge of First aid to general public.
              </p>
              
              <p className="font-body text-lg">
                The Golden Hour Foundation was launched in the year 2018 with our motto being <span className="font-semibold text-primary-600">&ldquo;Save Golden Hour, Save Life&rdquo;</span>. The head office is located at Wadala. The Institution is committed to create awareness about First aid and CPR techniques.
              </p>
            </div>
          </motion.div>

          {/* Enhanced Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/aboutsec.jpeg"
                alt="Golden Hour Foundation Team"
                width={800}
                height={500}
                className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                priority
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              
              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute top-6 right-6 glass-card p-4 text-center"
              >
                <div className="text-2xl font-bold text-primary-700">1000+</div>
                <div className="text-sm text-gray-600">Lives Impacted</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="absolute bottom-6 left-6 glass-card p-4 text-center"
              >
                <div className="text-2xl font-bold text-secondary-700">50+</div>
                <div className="text-sm text-gray-600">Free Camps</div>
              </motion.div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full blur-2xl opacity-60 -z-10"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-secondary-200 to-primary-200 rounded-full blur-2xl opacity-60 -z-10"></div>
          </motion.div>
        </div>

        {/* Four Pillars Section */}
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading font-bold text-gray-900 mb-2 text-xl">Qualified Doctors</h3>
              <p className="font-body text-gray-600">Expert medical professionals leading our training programs</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto mb-4">
                <Ambulance className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading font-bold text-gray-900 mb-2 text-xl">Emergency Services</h3>
              <p className="font-body text-gray-600">24/7 emergency response and support services</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading font-bold text-gray-900 mb-2 text-xl">Certified Training</h3>
              <p className="font-body text-gray-600">Standardized first aid training with official certification</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading font-bold text-gray-900 mb-2 text-xl">Community Support</h3>
              <p className="font-body text-gray-600">Building stronger, more prepared communities together</p>
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            <Link 
              href="/about" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-2xl hover:from-primary-700 hover:to-primary-800 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <span>Discover Our Story</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}