import { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import CaseStudies from "@/components/CaseStudies";
import Team from "@/components/Team";
import Blog from "@/components/Blog";
import Newsletter from "@/components/Newsletter";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "TechAgency - Innovative IT Solutions for Your Business",
  description:
    "TechAgency delivers cutting-edge web development, mobile app, cloud solutions, and IT consulting services to elevate your business in the digital world.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/50 dark:from-background dark:to-background/20">
      <StructuredData />
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <CaseStudies />
        <About />
        <Team />
        <Testimonials />
        <Blog />
        {/* <Newsletter /> */}
        {/* <Contact /> */}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
