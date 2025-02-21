"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Ship, MapPin } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-600">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[url('/grid.svg')] opacity-20" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30"
        />
        {/* Floating elements */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              scale: 0.5,
              opacity: 0.3,
            }}
            animate={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              scale: [0.5, 0.8, 0.5],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <Ship className="text-white/10 w-24 h-24" />
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="container relative z-10 mx-auto px-4 py-32 lg:py-40">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-200 ring-1 ring-inset ring-blue-500/20">
              <span>Trusted by 1000+ businesses for China-India imports</span>
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl xl:text-7xl/none">
              Expert China to India Import Solutions
            </h1>
            <p className="text-xl text-blue-100">
              Seamless logistics for importing from China to India. We handle everything from sourcing to delivery.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Watch Demo
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px]"
          >
            <div className="absolute inset-0">
              <motion.div
                animate={{
                  scale: [1, 1.02, 1],
                  rotate: [0, 1, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="w-full h-full"
              >
                <img src="/placeholder.svg" alt="Shipping Illustration" className="w-full h-full object-contain" />
              </motion.div>
            </div>

            {/* Floating location markers */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${20 + i * 30}%`,
                  top: `${30 + i * 20}%`,
                }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              >
                <MapPin className="text-cyan-400 w-6 h-6" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Wave effect */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-white">
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}

