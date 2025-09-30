"use client"

import { useState } from "react"
import type { TopTab } from "@/components/header"
import { Header } from "@/components/header"
import HomeSections from "@/components/home-sections"
import OurSolution from "@/components/our-solution"
import PocSection from "@/components/poc-section"
import AboutSection from "@/components/about-section"

export default function Page() {
  const [tab, setTab] = useState<TopTab>("home")

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50">
        Skip to main content
      </a>
      <Header value={tab} onChange={setTab} />
      <main id="main-content" className="min-h-dvh" role="main">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          {tab === "home" && (
            <section className="space-y-10" aria-labelledby="home-heading">
              <HomeSections />
              <OurSolution />
            </section>
          )}
          {tab === "poc" && (
            <section className="space-y-10" aria-labelledby="poc-heading">
              <PocSection />
            </section>
          )}
          {tab === "about" && (
            <section className="space-y-10" aria-labelledby="about-heading">
              <AboutSection />
            </section>
          )}
        </div>
      </main>
    </>
  )
}
