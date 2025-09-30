"use client"

import { InView } from "./in-view"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const aboutParas = [
  "We are a team of innovators from Chennai Institute of Technology, united by the belief that satellites in the sky and sensors in the soil can revolutionize farming for every farmer.",
  "With expertise split across hardware engineering and software intelligence, we've built a system that connects space technology with ground reality — transforming raw data into simple, actionable insights that farmers can trust.",
  "Our platform integrates hyperspectral satellite imagery (Landsat, Sentinel-2, Indian Pines) with IoT sensor data from the field. Using AI and machine learning, we detect early signs of crop stress, soil degradation, and pest outbreaks — delivering timely alerts, advisories, and visual maps directly to the farmer's hands.",
  "We are not just building a project; we are building a bridge between farmers and the future of sustainable agriculture."
]

const team = [
  { name: "Arun Kumar – 3rd Year", role: "Sensor Integration & Field Data Collection Lead" },
  { name: "Harini K – 3rd Year", role: "IoT Deployment & Reliability Engineer" },
  { name: "Malini Sharmishra – 3rd Year", role: "Satellite Data Processing & ML Model Lead" },
  { name: "Priyadarshini R – 2nd Year", role: "Backend Developer & Interactive Satellite Map Designer" },
  { name: "Elangovan – 3rd Year", role: "Frontend Engineer & Satellite API Integrator" },
  { name: "Supriya RL – 3rd Year", role: "Cloud Architect & Data Fusion Specialist" },
]

export default function AboutSection() {
  return (
    <section className="space-y-8">
      <InView>
        <h2 id="about-heading" className="text-pretty text-4xl md:text-6xl font-black tracking-tighter text-black animate-fade-in-up">About Us</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-600 mt-4 animate-fade-in-up animation-delay-300"></div>
      </InView>

      <InView delay={60}>
        <div className="space-y-6">
          {aboutParas.map((p, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed text-lg md:text-xl hover:text-foreground/90 transition-colors duration-300 hover:transform hover:translateX-2">
              {p}
            </p>
          ))}
        </div>
      </InView>

      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 h-32 w-32 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 h-40 w-40 rounded-full bg-blue-500/5 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 h-24 w-24 rounded-full bg-green-500/5 blur-2xl"></div>
      </div>

      <InView delay={120}>
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold text-black">Meet Our Team</h3>
            <p className="text-muted-foreground">The innovators behind the future of farming</p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m, i) => (
              <Card
                key={m.name}
                className="group relative overflow-hidden border-border/60 bg-gradient-to-br from-card to-card/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10 text-center pb-4">
                  <div className="mx-auto mb-6 h-32 w-32 rounded-full overflow-hidden border-2 border-border/50 group-hover:border-primary/50 transition-colors duration-300">
                    <img 
                      src={`/images/team/${m.name.toLowerCase().includes('arun') ? 'arun kumar.jpg' : m.name.toLowerCase().includes('harini') ? 'harini.jpg' : m.name.toLowerCase().includes('malini') ? 'malini.jpg' : m.name.toLowerCase().includes('priyadarshini') ? 'priya darshini.jpg' : m.name.toLowerCase().includes('elangovan') ? 'elangovan.jpg' : 'supriya.jpg'}`}
                      alt={m.name} 
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <CardTitle className="text-pretty text-base md:text-lg group-hover:text-primary transition-colors duration-300">{m.name}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 text-center pb-6">
                  <p className="text-muted-foreground leading-relaxed text-sm group-hover:text-foreground/80 transition-colors duration-300">{m.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </InView>
    </section>
  )
}