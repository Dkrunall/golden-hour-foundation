"use client";

import { motion } from "framer-motion";
import { User, Award, MapPin, ChevronRight } from "lucide-react";

const advisors = [
  {
    name: "Dr. Ajay S Chaurasia, MD.",
    title: "Cardiologist",
    experience: "28 years",
    hospitals: ["Bombay Hospital", "Saifee Hospital", "Dr. LH Hiranandani Hospital"],
    location: "Mumbai",
    description: "Dr. Ajay Chaurasia is a Cardiologist at Bombay Hospital, Saifee Hospital and Dr. LH Hiranandani Hospital in Powai, Mumbai. Dr. Ajay Chaurasia has 28 years of experience in this field. Dr. Chaurasia completed MBBS from Mumbai University in 1989, MD - General Medicine from Nagpur university in 1991 and DM - Cardiology from Mumbai University in 2000 He deals with conditions like congenital heart defects, coronary artery diseases, heart failures, valvular heart diseases and electrophysiology.",
    specialization: "Cardiology",
    gradient: "from-red-500 to-pink-500"
  },
  {
    name: "Dr. Vishal Kundnani",
    title: "Spine Specialist",
    experience: "15+ years",
    hospitals: ["Bombay Hospital Mumbai", "Shree Narayana Hospital Raipur", "Bhopal Fracture Hospital"],
    location: "Mumbai, Raipur, Bhopal",
    description: "Dr Vishal Kundnani heads the SPINE CLINIC - Centre for spinal reconstruction and minimal invasive spine surgery at Bombay Hospital Mumbai, Shree Narayana Hospital Raipur, Bhopal Fracture Hospital Bhopal and SK SONI HOSPITAL, JAIPUR. Having completed his basic qualifications from Bhopal, Jaipur he has been trained in various renowned spinal centers of repute across the globe.",
    specialization: "Spine Surgery",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    name: "Dr. Pankaj Mittal",
    title: "Orthopaedics Specialist",
    experience: "20+ years",
    hospitals: ["Multiple Renowned Centers"],
    location: "India",
    description: "An acclaimed name in his field, Dr. Pankaj Mittal is one of the most distinguished and recognized practitioners in the orthopaedics discipline of medicine. The doctor deals with the problems related to the musculoskeletal system which is concerned with the correction of spinal and bony deformities in children as well as adults.",
    specialization: "Orthopaedics",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    name: "Dr. Pooja Pokharna Jain",
    title: "Paediatrician & Neonatal Care Specialist",
    experience: "15+ years",
    hospitals: ["Royal Berkshire Hospital London", "Leading Medical Centers"],
    location: "London, UK",
    description: "Dr. Pooja Pokharna Jain is a very renowned paediatrician and neonatal care specialist currently working at Royal Berkshire Hospital London. With extensive expertise in pediatric medicine and neonatal intensive care, she brings invaluable knowledge to child healthcare and emergency care training. Her international experience and specialization in critical care for newborns and children make her an essential advisor for our life-saving training programs.",
    specialization: "Paediatrics & Neonatal Care",
    gradient: "from-teal-500 to-cyan-500"
  },
  {
    name: "Pankajj Bagrecha",
    title: "Media & Entertainment Expert",
    experience: "18+ years",
    hospitals: ["Media & Entertainment Industry"],
    location: "Mumbai",
    description: "He has experience of more than 18 years in Media and Entertainment Industry, Pankajj is a renowned name in the Media industry known for his unbeatable public relation and business development skills. He is the most reliable source when it comes to tv channel - new media - Bollywood celebrity, singers, and artists.",
    specialization: "Media Relations",
    gradient: "from-purple-500 to-indigo-500"
  }
];

export function Advisors() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container">
        {/* Header */}
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-100 text-secondary-800 rounded-full text-sm font-medium mb-6"
          >
            <Award className="w-4 h-4" />
            <span>Our Expert Team</span>
          </motion.div>
          
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 text-balance">
            Meet Our{" "}
            <span className="gradient-text bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Advisors</span>
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mb-6"></div>
          <p className="font-body text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            Leading medical professionals and industry experts guiding our mission to save lives through education and training
          </p>
        </motion.div>

        {/* Advisors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {advisors.map((advisor, index) => (
            <motion.div
              key={advisor.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group bg-white rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6">
                {/* Avatar */}
                <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${advisor.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto sm:mx-0`}>
                  <User className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                
                {/* Basic Info */}
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="font-heading text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                    {advisor.name}
                  </h3>
                  <p className="font-body text-sm sm:text-base lg:text-lg text-gray-600 mb-2">{advisor.title}</p>
                  
                  {/* Experience Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs sm:text-sm font-medium">
                    <Award className="w-3 h-3" />
                    <span>{advisor.experience} Experience</span>
                  </div>
                </div>
              </div>

              {/* Specialization */}
              <div className="mb-4 text-center sm:text-left">
                <span className={`inline-block px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r ${advisor.gradient} text-white text-xs sm:text-sm font-medium rounded-full`}>
                  {advisor.specialization}
                </span>
              </div>

              {/* Location */}
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-4 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span className="font-body text-sm">{advisor.location}</span>
              </div>

              {/* Hospitals/Organizations */}
              <div className="mb-6">
                <h4 className="font-heading text-xs sm:text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide text-center sm:text-left">
                  Affiliated With
                </h4>
                <div className="space-y-1">
                  {advisor.hospitals.slice(0, 2).map((hospital, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-gray-600">
                      <ChevronRight className="w-3 h-3 text-primary-500 mt-0.5 flex-shrink-0" />
                      <span className="font-body text-xs sm:text-sm">{hospital}</span>
                    </div>
                  ))}
                  {advisor.hospitals.length > 2 && (
                    <div className="flex items-center gap-2 text-gray-500">
                      <ChevronRight className="w-3 h-3" />
                      <span className="font-body text-xs sm:text-sm">+{advisor.hospitals.length - 2} more</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="relative">
                <p className="font-body text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-4">
                  {advisor.description}
                </p>
                <div className="mt-4 text-center sm:text-left">
                  <button className="font-body text-primary-600 hover:text-primary-700 text-xs sm:text-sm font-medium transition-colors duration-200 flex items-center gap-1 mx-auto sm:mx-0">
                    Read More
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
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
          className="text-center mt-12 lg:mt-16"
        >
          <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100 max-w-3xl mx-auto">
            <h3 className="font-heading text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">
              Expert Guidance for Life-Saving Education
            </h3>
            <p className="font-body text-sm sm:text-base text-gray-600 mb-4 lg:mb-6">
              Our distinguished panel of advisors brings decades of medical expertise and industry knowledge to ensure the highest quality training and community outreach programs.
            </p>
            <div className="text-center">
              <span className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold text-sm sm:text-base rounded-xl">
                <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                Trusted by Medical Professionals
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}