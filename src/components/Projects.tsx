"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A fully responsive online store with secure payment integration.',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Business Analytics Dashboard',
    description: 'Real-time data visualization for informed decision-making.',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['Vue.js', 'D3.js', 'Python'],
  },
  {
    title: 'Mobile App Development',
    description: 'Cross-platform app for seamless user experience.',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['React Native', 'Firebase', 'Redux'],
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="container relative py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Projects</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Innovative solutions we've delivered for our clients
        </p>
      </motion.div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card 
              className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden aspect-video">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">View Project</span>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-card p-6 rounded-lg shadow-xl max-w-2xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
              <div className="relative aspect-video mb-4">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <p className="text-muted-foreground mb-4">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                ))}
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

