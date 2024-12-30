"use client"

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const caseStudies = [
  {
    title: 'E-commerce Revolution',
    description: 'How we helped XYZ Corp increase their online sales by 200% in 6 months.',
    image: '/placeholder.svg?height=400&width=600',
  },
  {
    title: 'Cloud Migration Success',
    description: 'ABC Inc. reduced IT costs by 40% after our cloud migration strategy.',
    image: '/placeholder.svg?height=400&width=600',
  },
  {
    title: 'Mobile App Breakthrough',
    description: 'Our mobile app for LMN Co. reached 1 million downloads in just 3 months.',
    image: '/placeholder.svg?height=400&width=600',
  },
]

export default function CaseStudies() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === caseStudies.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? caseStudies.length - 1 : prevIndex - 1
    )
  }

  return (
    <section className="py-24 bg-muted">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Case Studies</h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center gap-8"
            >
              <div className="md:w-1/2">
                <Image
                  src={caseStudies[currentIndex].image}
                  alt={caseStudies[currentIndex].title}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4">{caseStudies[currentIndex].title}</h3>
                <p className="text-muted-foreground">{caseStudies[currentIndex].description}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-background/80 rounded-full p-2 shadow-md"
            aria-label="Previous case study"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-background/80 rounded-full p-2 shadow-md"
            aria-label="Next case study"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

