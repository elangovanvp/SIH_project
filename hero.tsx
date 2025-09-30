"use client"

import { InView } from "./in-view"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background:radial-gradient(1200px_600px_at_80%_-10%,rgba(14,165,164,0.15),transparent_60%)]"
      />
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <InView>
          <h1 className="title-accent text-balance text-4xl md:text-5xl font-semibold text-foreground">
            Build trust with a modern, professional presence
          </h1>
        </InView>
        <InView className="mt-6">
          <p className="max-w-2xl text-pretty text-[15px] leading-relaxed text-[hsl(var(--muted-foreground))]">
            A clean layout, strong typography, and subtle motion—designed for tech startups, agencies, and personal
            brands.
          </p>
        </InView>
        <InView className="mt-8">
          <div className="flex items-center gap-3">
            <Button className="btn-accent">Get Started</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </InView>
      </div>
    </section>
  )
}
