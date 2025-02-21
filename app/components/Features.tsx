"use client"

import { motion } from "framer-motion"
import { Ship, Globe, Clock, Shield, FileCheck, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Ship,
    title: "China-India Expertise",
    description: "Specialized knowledge of China-India trade routes and regulations",
  },
  {
    icon: Globe,
    title: "24/7 Support",
    description: "Round-the-clock customer service in both Chinese and Indian languages",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Optimized routes for quick shipping from China to India",
  },
  {
    icon: Shield,
    title: "Secure Shipping",
    description: "Full insurance coverage for China-India cargo",
  },
  {
    icon: FileCheck,
    title: "Customs Clearance",
    description: "Expert handling of Indian customs procedures",
  },
  {
    icon: TrendingUp,
    title: "Market Insights",
    description: "Up-to-date information on China-India trade trends",
  },
]

export default function Features() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Why Choose Safe Ship Logistics for China-India Imports?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Experience the difference with our comprehensive shipping solutions
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-blue-500/10 transition-all group-hover:bg-blue-500/20" />
              <feature.icon className="relative w-12 h-12 text-blue-600 mb-4 transition-transform group-hover:scale-110" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

