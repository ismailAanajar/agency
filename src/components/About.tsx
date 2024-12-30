"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="container py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">About TechAgency</h2>
          <p className="text-lg text-muted-foreground mb-6">
            TechAgency is a leading IT solutions provider with over a decade of experience in delivering innovative technology services to businesses of all sizes.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            Our team of expert developers, designers, and consultants are committed to helping our clients achieve their digital transformation goals and stay ahead in today's competitive market.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            At TechAgency, we believe in the power of technology to transform businesses. Our mission is to provide cutting-edge solutions that drive growth, improve efficiency, and create exceptional digital experiences for our clients and their customers.
          </p>
          <Button size="lg" className="group">
            Learn More About Us
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-foreground opacity-20 rounded-3xl transform rotate-3"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-primary to-primary-foreground opacity-20 rounded-3xl transform -rotate-3"></div>
          <Image
            src="/placeholder.svg?height=600&width=600"
            alt="About TechAgency"
            width={600}
            height={600}
            className="rounded-3xl shadow-2xl relative z-10"
          />
        </motion.div>
      </div>
    </section>
  )
}

