import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TechAgency - Innovative IT Solutions for Your Business',
  description: 'TechAgency delivers cutting-edge technology services to help your business thrive in the digital world. Explore our web development, mobile app, cloud solutions, and IT consulting services.',
}

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TechAgency",
    "url": "https://www.techagency.com",
    "logo": "https://www.techagency.com/logo.png",
    "description": "TechAgency delivers cutting-edge technology services to help your business thrive in the digital world.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Tech Street",
      "addressLocality": "Silicon Valley",
      "addressRegion": "CA",
      "postalCode": "94000",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://www.facebook.com/techagency",
      "https://www.twitter.com/techagency",
      "https://www.linkedin.com/company/techagency",
      "https://www.instagram.com/techagency"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

