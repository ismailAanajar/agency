import { Metadata } from "next";
import { Inter } from "next/font/google";
// import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TechAgency - Innovative IT Solutions for Your Business",
  description:
    "TechAgency delivers cutting-edge technology services to help your business thrive in the digital world. Explore our web development, mobile app, cloud solutions, and IT consulting services.",
  keywords:
    "IT agency, web development, mobile app development, cloud solutions, IT consulting",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.techagency.com",
    siteName: "TechAgency",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TechAgency - Innovative IT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@techagency",
    creator: "@techagency",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
