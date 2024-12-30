"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Code, Cpu, Globe, Smartphone, Cloud, Lock } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const services = [
  {
    icon: <Code className="h-10 w-10" />,
    title: 'Web Development',
    description: 'Custom web applications tailored to your business needs.',
    details: 'Our expert team crafts responsive, scalable, and high-performance web applications using cutting-edge technologies like React, Next.js, and Node.js.',
  },
  {
    icon: <Globe className="h-10 w-10" />,
    title: 'Digital Marketing',
    description: 'Boost your online presence and reach your target audience.',
    details: 'We offer comprehensive digital marketing strategies including SEO, content marketing, social media management, and PPC campaigns to drive growth and engagement.',
  },
  {
    icon: <Cpu className="h-10 w-10" />,
    title: 'IT Consulting',
    description: 'Expert advice to optimize your IT infrastructure and processes.',
    details: 'Our seasoned consultants provide strategic guidance on technology adoption, process optimization, and digital transformation to align your IT with business goals.',
  },
  {
    icon: <Smartphone className="h-10 w-10" />,
    title: 'Mobile App Development',
    description: 'Create powerful, user-friendly mobile applications for iOS and Android.',
    details: 'We develop native and cross-platform mobile apps that deliver exceptional user experiences, leveraging technologies like React Native and Flutter.',
  },
  {
    icon: <Cloud className="h-10 w-10" />,
    title: 'Cloud Solutions',
    description: 'Scalable and secure cloud infrastructure for your growing business.',
    details: 'Our cloud experts design, implement, and manage robust cloud solutions using AWS, Azure, or Google Cloud, ensuring scalability, security, and cost-efficiency.',
  },
  {
    icon: <Lock className="h-10 w-10" />,
    title: 'Cybersecurity',
    description: 'Protect your digital assets with our advanced security solutions.',
    details: 'We offer comprehensive cybersecurity services including threat assessment, penetration testing, security audits, and implementation of robust security measures.',
  },
]

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section id="services" className="container relative py-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Services</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Comprehensive IT solutions to drive your business forward
        </p>
      </motion.div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card 
              className="group relative overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer"
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              <CardHeader>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardTitle className="flex items-center gap-2 z-10 relative">
                  <motion.span 
                    className="p-2 rounded-full bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {service.icon}
                  </motion.span>
                  <span>{service.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 text-sm text-muted-foreground"
                    >
                      {service.details}
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <motion.div
                  className="text-primary"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  {service.icon}
                </motion.div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
      <motion.div 
        className="absolute -top-20 -left-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-50"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div 
        className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-50"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 4,
        }}
      />
    </section>
  )
}

