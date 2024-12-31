"use client";

import { useState, useRef, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Code,
  Cpu,
  Globe,
  Smartphone,
  Cloud,
  Lock,
  Bot,
  ChevronDown,
  Plus,
} from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: <Code className="h-8 w-8" />,
    title: "Web Development",
    description: "Custom web applications tailored to your business needs.",
    details:
      "Our expert team crafts responsive, scalable, and high-performance web applications using cutting-edge technologies like React, Next.js, and Node.js.",
    category: "development",
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Digital Marketing",
    description: "Boost your online presence and reach your target audience.",
    details:
      "We offer comprehensive digital marketing strategies including SEO, content marketing, social media management, and PPC campaigns to drive growth and engagement.",
    category: "marketing",
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: "IT Consulting",
    description:
      "Expert advice to optimize your IT infrastructure and processes.",
    details:
      "Our seasoned consultants provide strategic guidance on technology adoption, process optimization, and digital transformation to align your IT with business goals.",
    category: "consulting",
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Mobile App Development",
    description:
      "Create powerful, user-friendly mobile applications for iOS and Android.",
    details:
      "We develop native and cross-platform mobile apps that deliver exceptional user experiences, leveraging technologies like React Native and Flutter.",
    category: "development",
  },
  {
    icon: <Cloud className="h-8 w-8" />,
    title: "Cloud Solutions",
    description:
      "Scalable and secure cloud infrastructure for your growing business.",
    details:
      "Our cloud experts design, implement, and manage robust cloud solutions using AWS, Azure, or Google Cloud, ensuring scalability, security, and cost-efficiency.",
    category: "infrastructure",
  },
  {
    icon: <Lock className="h-8 w-8" />,
    title: "Cybersecurity",
    description:
      "Protect your digital assets with our advanced security solutions.",
    details:
      "We offer comprehensive cybersecurity services including threat assessment, penetration testing, security audits, and implementation of robust security measures.",
    category: "security",
  },
  {
    icon: <Bot className="h-8 w-8" />,
    title: "AI Agent Integration",
    description:
      "Enhance your business with cutting-edge AI agent technologies.",
    details:
      "We specialize in integrating advanced AI agents into your existing systems, automating processes, improving decision-making, and providing intelligent customer interactions using state-of-the-art language models and machine learning algorithms.",
    category: "ai",
  },
];

const categories = [
  "all",
  "development",
  "marketing",
  "consulting",
  "infrastructure",
  "security",
  "ai",
];

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (inView) {
      setIsInView(true);
    }
  }, [inView]);

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((service) => service.category === activeCategory);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-gradient-to-b from-background to-background/50"
    >
      <div className="absolute inset-0 bg-grid-primary/[0.02] -z-10" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Comprehensive IT solutions to drive your business forward in the
            digital age
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="capitalize transition-all duration-300 transform hover:scale-105"
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
              >
                <Card
                  className={cn(
                    "group relative overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer bg-card",
                    expandedIndex === index ? "shadow-lg" : ""
                  )}
                  onClick={() =>
                    setExpandedIndex(expandedIndex === index ? null : index)
                  }
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 z-10 relative">
                      <motion.div
                        className="p-2 rounded-full bg-primary/10 text-primary"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        {service.icon}
                      </motion.div>
                      <span className="text-xl">{service.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-2">
                      {service.description}
                    </CardDescription>
                    <AnimatePresence>
                      {expandedIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 text-sm text-muted-foreground"
                        >
                          {service.details}
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <motion.div
                      className="absolute bottom-4 right-4 text-primary"
                      animate={{ rotate: expandedIndex === index ? 45 : 0 }}
                    >
                      <Plus className="h-5 w-5" />
                    </motion.div>
                  </CardContent>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-tl from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <motion.div
        className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-30"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 4,
        }}
      />
    </section>
  );
}
