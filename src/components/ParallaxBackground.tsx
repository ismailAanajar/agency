"use client"

import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxBackground() {
  const [windowHeight, setWindowHeight] = useState(0)
  const { scrollY } = useScroll()

  useEffect(() => {
    setWindowHeight(window.innerHeight)
  }, [])

  const y1 = useTransform(scrollY, [0, windowHeight], [0, windowHeight * 0.3])
  const y2 = useTransform(scrollY, [0, windowHeight], [0, windowHeight * 0.5])
  const y3 = useTransform(scrollY, [0, windowHeight], [0, windowHeight * 0.7])

  return (
    <div className="fixed inset-0 pointer-events-none">
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url("/placeholder.svg?height=200&width=200")',
          backgroundSize: '200px',
          y: y1
        }}
      />
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url("/placeholder.svg?height=150&width=150")',
          backgroundSize: '150px',
          y: y2
        }}
      />
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url("/placeholder.svg?height=100&width=100")',
          backgroundSize: '100px',
          y: y3
        }}
      />
    </div>
  )
}

