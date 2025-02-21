"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const services = [
  {
    title: "Sea Freight",
    description: "Reliable sea freight from major Chinese ports to Indian destinations",
    image: "/placeholder.svg",
    features: ["FCL Shipping", "LCL Shipping", "Special Cargo", "Port to Port"],
  },
  {
    title: "Air Freight",
    description: "Express air freight services from China to India",
    image: "/placeholder.svg",
    features: ["Next Day Delivery", "Charter Service", "Door to Door", "Time-Critical Shipments"],
  },
  {
    title: "Customs Clearance",
    description: "Expert handling of Indian customs procedures",
    image: "/placeholder.svg",
    features: ["Documentation Assistance", "Duty Calculation", "Compliance Management", "Customs Broker Services"],
  },
]

export default function Services() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">Our China-India Import Services</h2>
          <p className="text-xl text-gray-600">Comprehensive solutions for your China to India import needs</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <Card className="overflow-hidden bg-white hover:shadow-xl transition-all duration-300">
                <div className="relative h-64">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{service.title}</h3>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

