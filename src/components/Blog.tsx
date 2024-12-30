"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const blogPosts = [
  {
    title: 'The Future of AI in Web Development',
    excerpt: 'Explore how artificial intelligence is shaping the future of web development and revolutionizing user experiences.',
    image: '/placeholder.svg?height=200&width=300',
    date: '2023-06-15',
    author: 'Jane Smith',
    tags: ['AI', 'Web Development'],
  },
  {
    title: 'Cybersecurity Best Practices for Small Businesses',
    excerpt: 'Learn essential cybersecurity measures to protect your small business from digital threats.',
    image: '/placeholder.svg?height=200&width=300',
    date: '2023-06-10',
    author: 'Mike Johnson',
    tags: ['Cybersecurity', 'Small Business'],
  },
  {
    title: 'The Rise of Progressive Web Apps',
    excerpt: 'Discover how progressive web apps are bridging the gap between web and mobile experiences.',
    image: '/placeholder.svg?height=200&width=300',
    date: '2023-06-05',
    author: 'Sarah Brown',
    tags: ['PWA', 'Web Development'],
  },
]

export default function Blog() {
  return (
    <section className="container py-24">
      <motion.h2
        className="mb-12 text-center text-3xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Latest from Our Blog
      </motion.h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                width={300}
                height={200}
                className="object-cover w-full h-48"
              />
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <div className="text-sm text-muted-foreground">
                  {post.date} by {post.author}
                </div>
                <div className="flex gap-2">
                  {post.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link href="/blog" className="text-primary hover:underline">
          View all posts
        </Link>
      </div>
    </section>
  )
}

