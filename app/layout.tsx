import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "iCarCare - Professional Auto Repair Workshop",
    template: "%s | iCarCare",
  },
  description:
    "Professional automotive repair services including engine repair, oil changes, AC service, brake repair, and more. Expert mechanics with years of experience.",
  keywords: [
    "car repair",
    "auto service",
    "engine repair",
    "oil change",
    "brake repair",
    "AC service",
    "automotive workshop",
  ],
  authors: [{ name: "iCarCare Workshop" }],
  creator: "iCarCare",
  publisher: "iCarCare",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://icarcare.com",
    title: "iCarCare - Professional Auto Repair Workshop",
    description: "Professional automotive repair services with expert mechanics and quality service.",
    siteName: "iCarCare",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "iCarCare Auto Repair Workshop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "iCarCare - Professional Auto Repair Workshop",
    description: "Professional automotive repair services with expert mechanics and quality service.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
