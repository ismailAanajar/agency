"use client"

import { motion } from 'framer-motion'
import { CheckCircle, PenTool, Zap, Rocket } from 'lucide-react'

const steps = [
  { icon: <CheckCircle className="h-8 w-8" />, title: 'Discovery', description: 'We start by understanding your business needs and goals.' },
  { icon: <PenTool className="h-8 w-8" />, title: 'Design', description: 'Our team creates a tailored solution design for your project.' },
  { icon: <Zap className="h-8 w-8" />, title: 'Development', description: 'We build your solution using cutting-edge technologies.' },
  { icon: <Rocket className="h-8 w-8" />, title: 'Launch', description: 'We deploy your project and provide ongoing support.' },
]

export default function Process() {
  return (
    <section id="process" className="container py-24">
      <motion.h2
        className="mb-12 text-center text-3xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Our Process
      </motion.h2>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center mb-8 md:mb-0"
          >
            <div className="bg-primary/10 p-4 rounded-full mb-4">
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-sm text-muted-foreground max-w-[200px]">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

