"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16
    }
  }

  return (
    <motion.div
      className="hidden md:block fixed top-0 left-0 w-8 h-8 bg-primary/30 rounded-full pointer-events-none z-50"
      variants={variants}
      animate="default"
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  )
}

