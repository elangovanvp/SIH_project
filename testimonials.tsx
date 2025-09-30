"use client"

import { useEffect, useState } from "react"
import { InView } from "./in-view"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  { quote: "Polished, fast, and trustworthy.", author: "A. Sharma" },
  { quote: "The subtle animations feel premium.", author: "J. Alvarez" },
  { quote: "Clean design that converts.", author: "M. Chen" },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 4000)
    return () => clearInterval(id)
  }, [])
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <InView>
        <h2 className="title-accent text-2xl md:text-3xl font-semibold text-foreground">What Clients Say</h2>
      </InView>
      <div className="mt-8">
        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${index * 100}%)` }}>
            {testimonials.map((t, i) => (
              <div className="min-w-full px-2" key={i}>
                <Card>
                  <CardContent className="p-6">
                    <p className="text-lg text-foreground">“{t.quote}”</p>
                    <p className="mt-3 text-sm text-[hsl(var(--muted-foreground))]">— {t.author}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
