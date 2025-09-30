import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import { ErrorBoundary } from "@/components/error-boundary"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "FarmEasy - AI Satellite Crop Monitoring & Compliance",
  description: "Advanced AI-powered satellite crop monitoring system for farmers. Real-time crop health analysis, pest detection, and agricultural compliance using hyperspectral imagery and IoT sensors.",
  keywords: "crop monitoring, satellite imagery, AI agriculture, farm management, hyperspectral analysis, IoT sensors, precision farming",
  authors: [{ name: "FarmEasy Team" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "FarmEasy - AI Satellite Crop Monitoring",
    description: "Revolutionary AI-powered satellite crop monitoring for modern agriculture",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "FarmEasy - AI Satellite Crop Monitoring",
    description: "Revolutionary AI-powered satellite crop monitoring for modern agriculture",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} font-sans antialiased`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <ErrorBoundary>
          <Suspense fallback={
            <div className="flex items-center justify-center min-h-screen">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          }>
            {children}
          </Suspense>
        </ErrorBoundary>
        <Analytics />
      </body>
    </html>
  )
}
