"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { Building2, GraduationCap, Award, Users } from "lucide-react";

const trainingPrograms = [
  {
    icon: Building2,
    title: "Industrial Training",
    description: "Comprehensive first aid training specifically designed for factory premises and corporate environments. Our tailored programs ensure workplace safety compliance and emergency preparedness.",
    features: [
      "On-site training at factory premises",
      "Customized training structure for industrial needs",
      "Certified training programs with certificates",
      "Pan-India coverage and support",
      "Emergency response protocols for industrial accidents"
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: GraduationCap,
    title: "Social Training Programs",
    description: "Community-focused training programs for educational institutions, residential societies, and public spaces. Building a network of trained individuals in every community.",
    features: [
      "Training at schools and colleges",
      "Disaster management awareness",
      "Housing society emergency preparedness",
      "Gym and fitness center training",
      "Training for GPs and senior citizen clubs",
      "Bank and office emergency protocols"
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export function TrainingBlocks() {
  return (
    <section className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            First Aid Training Programs
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Specialized training designed for different environments and communities
          </p>
        </motion.div>

        <div className="space-y-12">
          {trainingPrograms.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <Card className="overflow-hidden">
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>
                  <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="flex items-center mb-4">
                      <program.icon className="w-8 h-8 text-primary-600 mr-3" />
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{program.title}</h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 mb-6">{program.description}</p>
                    <ul className="space-y-2 mb-6">
                      {program.features.map((feature) => (
                        <li key={feature} className="flex items-center text-gray-700 text-sm sm:text-base">
                          <Award className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild>
                      <Link href="/contact">Request a Session</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}