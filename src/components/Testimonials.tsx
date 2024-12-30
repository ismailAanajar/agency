"use client"

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    name: 'Alice Johnson',
    role: 'CEO, TechStart',
    content: 'Working with this agency has been a game-changer for our business. Their innovative solutions have significantly improved our online presence.',
    avatar: '/placeholder.svg?height=40&width=40',
  },
  {
    name: 'Bob Smith',
    role: 'Marketing Director, GrowthCo',
    content: 'The team\'s expertise in digital marketing has helped us reach new audiences and increase our conversion rates. Highly recommended!',
    avatar: '/placeholder.svg?height=40&width=40',
  },
  {
    name: 'Carol Davis',
    role: 'CTO, InnovateTech',
    content: 'Their IT consulting services have streamlined our operations and reduced costs. We\'re now more efficient than ever.',
    avatar: '/placeholder.svg?height=40&width=40',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="bg-muted py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </motion.div>
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-background">
                <CardContent className="p-8">
                  <Quote className="h-10 w-10 text-primary mb-4" />
                  <p className="text-xl mb-6 italic">{testimonials[currentIndex].content}</p>
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} />
                      <AvatarFallback>{testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonials[currentIndex].name}</p>
                      <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-background rounded-full p-2 shadow-md hover:bg-muted transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-background rounded-full p-2 shadow-md hover:bg-muted transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

