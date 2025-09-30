"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { InView } from "./in-view"

const features = [
  { title: "Clarity", desc: "Straightforward messaging and structure that highlight value." },
  { title: "Performance", desc: "Fast-loading, responsive components for every device." },
  { title: "Accessibility", desc: "Semantic markup, clear contrast, and keyboard navigation." },
  { title: "Credibility", desc: "Testimonials, case studies, and proof of concept sections." },
  { title: "Conversion", desc: "Focused calls-to-action with clear next steps." },
  { title: "Maintainability", desc: "Structured components and minimal dependencies." },
]

export function FeaturesGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <InView>
        <h2 className="title-accent text-2xl md:text-3xl font-semibold text-foreground">Services & Features</h2>
      </InView>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <InView key={i}>
            <Card className="h-full transition-transform duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-lg font-semibold tracking-tight">
                  <span className="inline-block px-2 py-1 rounded border text-[hsl(var(--brand))]">{f.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[15px] leading-relaxed text-[hsl(var(--muted-foreground))]">{f.desc}</p>
              </CardContent>
            </Card>
          </InView>
        ))}
      </div>
    </section>
  )
}
