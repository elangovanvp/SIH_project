"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const audience = [
  {
    title: "Progressive Farmers",
    desc: "Tech-savvy farmers seeking real-time, data-driven insights to optimize crop yield and farm efficiency.",
  },
  {
    title: "Rural & Smallholder Farmers",
    desc: "Farmers in remote areas who need accessible, offline, and language-friendly AI guidance for effective farm management.",
  },
  {
    title: "Agronomists & Researchers",
    desc: "Experts who require detailed field-level analytics, predictive insights, and customizable reports for advisory and research purposes.",
  },
  {
    title: "Field Technicians & Extension Officers",
    desc: "On-ground professionals who need quick alerts, actionable recommendations, and interactive visuals for efficient farm interventions.",
  },
  {
    title: "Agricultural Departments & Policy Makers",
    desc: "Organizations monitoring regional agriculture, needing aggregated data, risk models, and strategic insights for planning and policy decisions.",
  },
]

export default function HomeSections() {
  return (
    <div className="space-y-8">
      <header className="relative space-y-6 py-16 px-8 rounded-2xl overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/background_img.jpg" 
            alt="Agricultural background" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/10 to-black/30"></div>
        </div>
        
        <div className="relative z-10">
          {/* New bold headline above Home */}
          <h1 id="home-heading" className="text-5xl md:text-7xl font-black tracking-tighter text-white drop-shadow-2xl animate-pulse hover:animate-none transition-all duration-700 hover:scale-105">{"FarmEasy - AI Satellite based Crop Monitoring Compliance"}</h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed animate-fade-in-up opacity-0 animation-delay-500 max-w-4xl drop-shadow-lg">Revolutionary AI-powered satellite technology transforming agriculture through precision monitoring and intelligent insights.</p>
        </div>
        {/* Intentionally not altering any wording in cards below */}
      </header>



      <div className="space-y-8">
        {/* First 3 cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {audience.slice(0, 3).map((item, index) => (
            <Card key={item.title} className="card-hover group h-full flex flex-col bg-card animate-bounce-in opacity-0 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-3 hover:rotate-1" style={{animationDelay: `${index * 0.2}s`}}>
              <CardHeader className="pb-4">
                <CardTitle className="text-balance text-xl md:text-2xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
                  <span className="title-pill text-lg md:text-xl font-extrabold">{item.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 flex-1">
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg group-hover:text-foreground/90 transition-all duration-300">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Last 2 cards centered */}
        <div className="flex justify-center">
          <div className="grid gap-8 sm:grid-cols-2 max-w-4xl">
            {audience.slice(3).map((item, index) => (
              <Card key={item.title} className="card-hover group h-full flex flex-col bg-card animate-bounce-in opacity-0 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-3 hover:rotate-1" style={{animationDelay: `${(index + 3) * 0.2}s`}}>
                <CardHeader className="pb-4">
                  <CardTitle className="text-balance text-xl md:text-2xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
                    <span className="title-pill text-lg md:text-xl font-extrabold">{item.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 flex-1">
                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg group-hover:text-foreground/90 transition-all duration-300">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* POC Videos Section */}
      <div className="space-y-6">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-black text-center">Proof of Concept</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Video 1 Placeholder */}
          <div className="group cursor-pointer rounded-xl bg-card p-4 transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-primary/30 hover:bg-card/80 hover:border-primary/50 border border-transparent hover:-translate-y-2">
            <div className="aspect-video">
              <video 
                className="h-full w-full rounded-lg object-cover transition-all duration-300 group-hover:brightness-110"
                controls
                preload="metadata"
                muted
              >
                <source src="/videos/WhatsApp%20Video%202025-09-30%20at%202.11.37%20AM.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="mt-4 text-center text-lg font-semibold transition-all duration-500 group-hover:text-primary group-hover:tracking-wide">Software Demo</p>
          </div>

          {/* Video 2 - Hardware POC */}
          <div className="group cursor-pointer rounded-xl bg-card p-4 transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-primary/30 hover:bg-card/80 hover:border-primary/50 border border-transparent hover:-translate-y-2">
            <div className="aspect-video">
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
            </div>
            <p className="mt-4 text-center text-lg font-semibold transition-all duration-500 group-hover:text-primary group-hover:tracking-wide">Hardware POC</p>
          </div>
        </div>
      </div>
    </div>
  )
}
