"use client"

import { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { motion } from 'framer-motion'

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'We offer a wide range of IT services including web development, digital marketing, IT consulting, mobile app development, cloud solutions, and cybersecurity. Our team is equipped to handle projects of various scales and complexities.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines can vary depending on the scope and complexity. A simple website might take 4-6 weeks, while a complex web application could take several months. We provide detailed timelines during our initial consultation.',
  },
  {
    question: 'Do you offer ongoing support and maintenance?',
    answer: 'Yes, we offer ongoing support and maintenance packages for all our projects. This ensures your digital assets remain up-to-date, secure, and performing optimally.',
  },
  {
    question: 'What is your pricing model?',
    answer: 'Our pricing is project-based and depends on the specific requirements of each client. We provide detailed quotes after our initial consultation where we discuss your needs and objectives.',
  },
  {
    question: 'Can you work with our existing systems and technologies?',
    answer: 'We have experience integrating with a wide range of existing systems and technologies. Our team will work closely with you to ensure seamless integration and optimal performance.',
  },
]

export default function FAQ() {
  const [openItem, setOpenItem] = useState<string | null>(null)

  return (
    <section id="faq" className="container py-24">
      <motion.h2
        className="mb-12 text-center text-3xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Frequently Asked Questions
      </motion.h2>
      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger onClick={() => setOpenItem(`item-${index}`)}>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: openItem === `item-${index}` ? 1 : 0, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.div>
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </section>
  )
}

