"use client"

import { motion } from "framer-motion"

const stats = [
  { value: "10+", label: "Years of China-India Trade Experience" },
  { value: "50+", label: "Indian Cities Served" },
  { value: "10K+", label: "Successful China-India Shipments" },
  { value: "99%", label: "Customer Satisfaction" },
]

export default function Stats() {
  return (
    <section className="relative py-24 bg-blue-900 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-blue-500/30"
          style={{
            backgroundSize: "200% 200%",
          }}
        />
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                  delay: index * 0.1,
                }}
                className="text-5xl font-bold text-white mb-2"
              >
                {stat.value}
              </motion.div>
              <p className="text-blue-200">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

