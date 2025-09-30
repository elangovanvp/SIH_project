"use client"

import { InView } from "./in-view"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { useEffect, useState, useCallback } from "react"

type ActiveOverlay = "video1" | "video2" | "dashboard" | null

const dashboardImages = [
  "/images/dashboard/WhatsApp Unknown 2025-09-29 at 11.46.00 PM/WhatsApp Image 2025-09-29 at 11.08.30 PM.jpeg",
  "/images/dashboard/WhatsApp Unknown 2025-09-29 at 11.46.00 PM/WhatsApp Image 2025-09-29 at 11.08.30 PM (1).jpeg",
  "/images/dashboard/WhatsApp Unknown 2025-09-29 at 11.46.00 PM/WhatsApp Image 2025-09-29 at 11.08.30 PM (2).jpeg",
  "/images/dashboard/WhatsApp Unknown 2025-09-29 at 11.46.00 PM/WhatsApp Image 2025-09-29 at 11.08.30 PM (3).jpeg"
]

export default function PocSection() {
  const [active, setActive] = useState<ActiveOverlay>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [fullscreenImageIndex, setFullscreenImageIndex] = useState(0)

  const open = useCallback((key: Exclude<ActiveOverlay, null>) => {
    if (key === "dashboard") {
      const videos = document.querySelectorAll('video')
      videos.forEach(video => video.pause())
      setFullscreenImageIndex(currentImageIndex)
    }
    setActive(key)
  }, [currentImageIndex])
  const close = useCallback(() => setActive(null), [])

  const nextImage = useCallback(() => {
    setFullscreenImageIndex((prev) => (prev + 1) % dashboardImages.length)
  }, [])

  const prevImage = useCallback(() => {
    setFullscreenImageIndex((prev) => (prev - 1 + dashboardImages.length) % dashboardImages.length)
  }, [])

  // Auto-slide dashboard images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % dashboardImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (active === "dashboard") {
        if (e.key === "ArrowLeft") prevImage()
        if (e.key === "ArrowRight") nextImage()
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [close, active, nextImage, prevImage])

  return (
    <section className="space-y-6">
      <InView>
        <h2 id="poc-heading" className="title-accent text-4xl md:text-6xl font-black tracking-tighter text-black animate-fade-in-up">Proof of Concept</h2>
        <div className="w-32 h-1 bg-gradient-to-r from-primary to-blue-600 mt-4 animate-fade-in-up animation-delay-300"></div>
      </InView>

      <InView delay={60}>
        <p className="text-muted-foreground leading-relaxed text-lg md:text-xl hover:text-foreground/90 transition-colors duration-300">
          A demonstration of our workflow—from satellite ingestion and on-field sensors to AI analysis and actionable
          reports.
        </p>
      </InView>

      <InView delay={100}>
        <div className="grid gap-4 md:grid-cols-2">
          {/* Video 1 */}
          <div className="space-y-3">
            <div
              className="group cursor-pointer rounded-xl bg-card p-3 transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-primary/30 hover:bg-card/80 hover:border-primary/50 border border-transparent hover:-translate-y-1"
              onClick={() => {
                const videos = document.querySelectorAll('video')
                videos.forEach(video => video.pause())
                open("video1")
              }}
              role="button"
              aria-label="Open preview of Video 1"
            >
              <AspectRatio ratio={16 / 9}>
                <video 
                  className="h-full w-full rounded-lg object-cover transition-all duration-300 group-hover:brightness-110"
                  controls
                  preload="metadata"
                  muted
                >
                  <source src="/videos/WhatsApp%20Video%202025-09-30%20at%202.11.37%20AM.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </AspectRatio>
              <p className="mt-2 text-center text-sm transition-all duration-500 group-hover:text-primary group-hover:font-medium group-hover:tracking-wide md:text-base">Click to preview Software Demo</p>
            </div>
            <h4 className="text-center text-xl font-black bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 bg-clip-text text-transparent tracking-wider font-mono uppercase">Software POC</h4>
          </div>

          {/* Video 2 */}
          <div className="space-y-3">
            <div
              className="group cursor-pointer rounded-xl bg-card p-3 transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-primary/30 hover:bg-card/80 hover:border-primary/50 border border-transparent hover:-translate-y-1"
              onClick={() => {
                const videos = document.querySelectorAll('video')
                videos.forEach(video => video.pause())
                open("video2")
              }}
              role="button"
              aria-label="Open preview of Hardware POC Video"
            >
              <AspectRatio ratio={16 / 9}>
                <video 
                  className="h-full w-full rounded-lg object-cover transition-all duration-300 group-hover:brightness-110"
                  controls
                  preload="metadata"
                  muted
                >
                  <source src="/videos/IMG_2375 (1).MOV" type="video/quicktime" />
                  <source src="/videos/IMG_2375 (1).MOV" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </AspectRatio>
              <p className="mt-2 text-center text-sm transition-all duration-500 group-hover:text-primary group-hover:font-medium group-hover:tracking-wide md:text-base">Click to preview Hardware POC</p>
            </div>
            <h4 className="text-center text-xl font-black bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent tracking-wider font-mono uppercase">Hardware POC</h4>
          </div>
        </div>

        {/* Dashboard image centered below the two videos */}
        <div
          className="group mx-auto mt-6 max-w-3xl cursor-pointer rounded-xl bg-card p-3 transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-primary/30 hover:bg-card/80 hover:border-primary/50 border border-transparent hover:-translate-y-1"
          onClick={() => open("dashboard")}
          role="button"
          aria-label="Open preview of Dashboard image"
        >
          <AspectRatio ratio={16 / 9}>
            <div className="relative h-full w-full rounded-lg overflow-hidden">
              <img
                src={dashboardImages[currentImageIndex]}
                alt={`Dashboard view ${currentImageIndex + 1}`}
                className="h-full w-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:contrast-105 group-hover:saturate-110 group-hover:shadow-lg"
              />
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                {dashboardImages.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </AspectRatio>
          <p className="mt-2 text-center text-sm transition-all duration-500 group-hover:text-primary group-hover:font-medium group-hover:tracking-wide md:text-base">Click to preview Dashboard Slideshow</p>
        </div>
        <div className="text-center mt-4">
          <h4 className="text-xl font-black bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent tracking-wider font-mono uppercase">SNN Based Crop Monitoring Dashboard</h4>
        </div>
      </InView>

      {/* Fullscreen hover overlay */}
      {active && (
        <div
          className="fixed inset-0 z-50 animate-in fade-in duration-300 bg-black/90 p-4 backdrop-blur-sm md:p-10"
          onClick={(e) => {
            if (e.target === e.currentTarget) close()
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Fullscreen media preview"
        >
          <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-center">
            <div className="w-full animate-in fade-in zoom-in-95 duration-500 ease-out">
              <button 
                className="absolute top-4 right-4 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors"
                onClick={close}
                aria-label="Close preview"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              {active === "dashboard" ? (
                <div className="relative mx-auto w-full max-w-6xl">
                  <img
                    src={dashboardImages[fullscreenImageIndex]}
                    alt={`Dashboard view ${fullscreenImageIndex + 1} enlarged`}
                    className="max-h-[80vh] w-full rounded-xl object-contain shadow-2xl transition-all duration-300"
                  />
                  <button
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full bg-black/50 p-3 text-white hover:bg-black/70 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation()
                      prevImage()
                    }}
                    aria-label="Previous image"
                  >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full bg-black/50 p-3 text-white hover:bg-black/70 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation()
                      nextImage()
                    }}
                    aria-label="Next image"
                  >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {dashboardImages.map((_, index) => (
                      <button
                        key={index}
                        className={`h-3 w-3 rounded-full transition-all duration-300 ${
                          index === fullscreenImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                        onClick={(e) => {
                          e.stopPropagation()
                          setFullscreenImageIndex(index)
                        }}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              ) : active === "video2" ? (
                <div className="relative mx-auto w-full max-w-4xl">
                  <video 
                    className="max-h-[80vh] w-full rounded-xl shadow-2xl"
                    controls
                    onClick={(e) => e.stopPropagation()}
                  >
                    <source src="/videos/IMG_2375 (1).MOV" type="video/quicktime" />
                    <source src="/videos/IMG_2375 (1).MOV" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <div className="relative mx-auto w-full max-w-4xl">
                  <video 
                    className="max-h-[80vh] w-full rounded-xl shadow-2xl"
                    controls
                    onClick={(e) => e.stopPropagation()}
                  >
                    <source src="/videos/WhatsApp%20Video%202025-09-30%20at%202.11.37%20AM.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
