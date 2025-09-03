"use client";

import { motion } from "framer-motion";
import { BookOpen, Activity, Heart, Shield, AlertTriangle, Zap } from "lucide-react";

const theoryTopics = [
  "Introduction to First aid",
  "Unconsciousness", 
  "Examination of a serious casualty",
  "Head Injury",
  "Fall from height",
  "Burns- thermal, electrical and chemical",
  "Drowning",
  "Snake Bite",
  "Different types of injuries",
  "Fractures",
  "Crush Syndrome",
  "Main causes of death",
  "Heart Attack",
  "CPR"
];

const practicalSkills = [
  "Recovery",
  "Different methods of handling a casualty",
  "Stretcher drill",
  "Different types of bandaging by using triangular and roller bandage",
  "Mouth to mouth breathing technique on mannequins",
  "Removing Airway obstruction",
  "Fireman's Crawl and lift",
  "CPR practical on imported mannequins"
];

export function TheoryPractical() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 px-6 py-3 rounded-full font-medium mb-6 shadow-lg"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            Comprehensive Curriculum
          </motion.div>
          <h2 className="font-heading text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
            Theory &{" "}
            <span className="gradient-text bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              Practical
            </span>
          </h2>
          <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive training covering both theoretical knowledge and hands-on practical skills
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Theory Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl shadow-lg p-8 lg:p-10 border border-gray-100"
          >
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mr-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-heading text-3xl font-bold text-gray-900">Theory</h3>
                <p className="font-body text-gray-600">Essential knowledge and concepts</p>
              </div>
            </div>

            <div className="space-y-4">
              {theoryTopics.map((topic, index) => (
                <motion.div
                  key={topic}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.6 }}
                  className="flex items-start p-4 bg-primary-50 rounded-xl border border-primary-100 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mr-4 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                    {index < 4 ? <AlertTriangle className="w-4 h-4 text-white" /> :
                     index < 8 ? <Shield className="w-4 h-4 text-white" /> :
                     index < 12 ? <Zap className="w-4 h-4 text-white" /> :
                     <Heart className="w-4 h-4 text-white" />}
                  </div>
                  <span className="font-body text-gray-800 font-medium leading-relaxed">{topic}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Practical Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl shadow-lg p-8 lg:p-10 border border-gray-100"
          >
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center mr-4">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-heading text-3xl font-bold text-gray-900">Practical</h3>
                <p className="font-body text-gray-600">Hands-on training and skills</p>
              </div>
            </div>

            <div className="space-y-4">
              {practicalSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.6 }}
                  className="flex items-start p-4 bg-secondary-50 rounded-xl border border-secondary-100 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-lg flex items-center justify-center mr-4 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                    <Activity className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-body text-gray-800 font-medium leading-relaxed">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">14+</div>
              <div className="text-gray-600 font-medium">Theory Topics</div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">8+</div>
              <div className="text-gray-600 font-medium">Practical Skills</div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Life-Saving Focus</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}