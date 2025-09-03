"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { BookOpen, Stethoscope } from "lucide-react";

const theoryTopics = [
  "Introduction to first aid",
  "Unconsciousness",
  "Head injury",
  "Falls",
  "Burns",
  "Drowning",
  "Snake bite",
  "Fractures",
  "Crush syndrome",
  "Main causes of death",
  "Heart attack",
  "CPR (Cardiopulmonary Resuscitation)"
];

const practicalTopics = [
  "Recovery position",
  "Handling casualty",
  "Stretcher drill",
  "Bandaging techniques",
  "Mouth-to-mouth resuscitation on mannequins",
  "Clearing airway obstruction",
  "Fireman's lift and carry techniques",
  "CPR practice on mannequins"
];

export function SyllabusSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Training Syllabus
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive curriculum covering both theoretical knowledge and practical skills
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Theory Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="h-full">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-primary-600" />
                </div>
                <CardTitle className="text-xl sm:text-2xl">Theory</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {theoryTopics.map((topic, index) => (
                    <motion.div
                      key={topic}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                      className="flex items-center p-3 bg-gray-50 rounded-lg"
                    >
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 text-sm sm:text-base">{topic}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Practical Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="h-full">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="w-8 h-8 text-secondary-600" />
                </div>
                <CardTitle className="text-xl sm:text-2xl">Practical</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {practicalTopics.map((topic, index) => (
                    <motion.div
                      key={topic}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                      className="flex items-center p-3 bg-gray-50 rounded-lg"
                    >
                      <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 text-sm sm:text-base">{topic}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}