"use client"

import { motion } from "framer-motion"
import { Search, Package, Ship, FileCheck } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Source Products",
    description: "We help you find the right suppliers in China",
  },
  {
    icon: Package,
    title: "Prepare Shipment",
    description: "Consolidate and prepare your goods for export",
  },
  {
    icon: Ship,
    title: "Ship to India",
    description: "Transport via the most efficient route",
  },
  {
    icon: FileCheck,
    title: "Customs Clearance",
    description: "Handle all Indian customs procedures",
  },
]

export default function Process() {
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
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">How We Import from China to India</h2>
          <p className="text-xl text-gray-600">Your hassle-free journey from sourcing to delivery</p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-blue-200 transform -translate-y-1/2 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-8 text-center relative z-10">
                  <div className="relative mx-auto w-16 h-16 mb-6">
                    <div className="absolute inset-0 bg-blue-100 rounded-full animate-pulse" />
                    <div className="relative z-10 flex items-center justify-center w-full h-full bg-white rounded-full border-2 border-blue-500">
                      <step.icon className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-500 rounded-full z-20">
                  <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75" />
                  <div className="absolute inset-2 bg-white rounded-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

