"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const camps = [
  { location: "Nagpur", groups: ["Industrial Training Centers", "Educational Institutions"] },
  { location: "Kelwan/Nashik", groups: ["Rural Community Centers", "Local Schools"] },
  { location: "Mumbai", groups: ["Traffic Police Mumbai", "Municipal Staff"] },
  { location: "Mumbai", groups: ["GVK Staff", "Airport Operations Team"] },
  { location: "Mumbai", groups: ["Govandi Slum Community", "Residents Association"] },
  { location: "Mumbai", groups: ["Airport Staff", "Ground Handling Teams"] },
  { location: "Mumbai", groups: ["Customs & CISF", "Security Personnel"] },
  { location: "Mumbai", groups: ["St. Xavier&apos;s College", "Students & Faculty"] }
];

export function CampsList() {
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
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Free Camps Conducted
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our outreach programs have reached diverse communities across multiple cities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {camps.map((camp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {camp.location}
                  </h3>
                  <div className="space-y-1">
                    {camp.groups.map((group, groupIndex) => (
                      <p key={groupIndex} className="text-gray-600 text-sm">
                        • {group}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 text-center p-8 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Want to Organize a Free Camp in Your Area?
          </h3>
          <p className="text-gray-600 mb-4">
            We&apos;re always looking to expand our reach and help more communities stay prepared for emergencies.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors"
          >
            Contact Us Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}