"use client"

import { motion } from 'framer-motion'
import { Users, Code, Briefcase, Award } from 'lucide-react'

const stats = [
  { icon: <Users className="h-6 w-6" />, value: '100+', label: 'Clients' },
  { icon: <Code className="h-6 w-6" />, value: '500+', label: 'Projects' },
  { icon: <Briefcase className="h-6 w-6" />, value: '10+', label: 'Years Experience' },
  { icon: <Award className="h-6 w-6" />, value: '25+', label: 'Awards' },
]

export default function Stats() {
  return (
    <section className="bg-primary py-16">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="text-background mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-background mb-1">{stat.value}</div>
              <div className="text-sm text-background/80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

