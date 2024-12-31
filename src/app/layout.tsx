import { Metadata } from "next";
import { Inter } from "next/font/google";
// import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";

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
        <Script id="agancy" strategy="afterInteractive">
          {`
             (function(d, t) {
      var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
      v.onload = function() {
        window.voiceflow.chat.load({
          verify: { projectID: '676fe1e7cbabbcd8e3fc3a56' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production'
        }).then(() => {
          window.voiceflow.chat.proactive.clear(); // clear all previous messages
        setTimeout(function () {
    window.voiceflow.chat.open();
  }, 1000)
          window.voiceflow.chat.proactive.push({ 
            type: 'text', 
            payload: { message: 'Are you interested in some 🔥🔥🔥 sneakers?' }
          }, { 
            type: 'text', 
            payload: { message: 'Click on the chat to learn more!' }
          });
        });;
      }
      v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
  })(document, 'script');
            `}
        </Script>
      </body>
    </html>
  );
}
