"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  Code,
  Cpu,
  Globe,
  Smartphone,
  Cloud,
  Lock,
} from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

const techIcons = [Code, Cpu, Globe, Smartphone, Cloud, Lock];

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-500, 500], [15, -15]);
  const rotateY = useTransform(x, [-500, 500], [-15, 15]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const moveX = clientX - window.innerWidth / 2;
      const moveY = clientY - window.innerHeight / 2;
      x.set(moveX);
      y.set(moveY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [x, y]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
  };

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background min-h-screen flex items-center justify-center py-24 md:py-32"
      onMouseMove={handleMouseMove}
    >
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            style={{ perspective: 2000 }}
            animate={{ rotateX, rotateY, z: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <motion.h1
              className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="block">Innovate.</span>{" "}
              <span className="block mt-2">
                <TypeAnimation
                  sequence={[
                    "Create.",
                    2000,
                    "Elevate.",
                    2000,
                    "Transform.",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </motion.h1>
          </motion.div>
          <motion.p
            className="mt-6 max-w-lg mx-auto text-xl text-muted-foreground sm:max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We're a cutting-edge IT agency delivering innovative solutions to
            elevate your business in the digital world.
          </motion.p>
          <motion.div
            className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
              <Button
                size="lg"
                className="w-full flex items-center justify-center group"
              >
                Discover Our Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="w-full">
                Our Projects
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-primary/[0.02] bg-[size:50px_50px]" />
        {[...Array(20)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute"
            initial={{
              x:
                typeof window !== "undefined"
                  ? Math.random() * window.innerWidth
                  : 0,
              y:
                typeof window !== "undefined"
                  ? Math.random() * window.innerHeight
                  : 0,
              scale: Math.random() * 0.5 + 0.5,
              opacity: Math.random() * 0.3 + 0.1,
            }}
            animate={{
              x:
                typeof window !== "undefined"
                  ? Math.random() * window.innerWidth
                  : 0,
              y:
                typeof window !== "undefined"
                  ? Math.random() * window.innerHeight
                  : 0,
              transition: {
                duration: Math.random() * 10 + 20,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
          >
            {React.createElement(techIcons[index % techIcons.length], {
              size: 24,
              className: "text-primary",
            })}
          </motion.div>
        ))}
      </div>

      {/* Custom cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full bg-primary/50 pointer-events-none z-50 hidden md:block"
        variants={variants}
        animate="default"
      />
    </section>
  );
}
