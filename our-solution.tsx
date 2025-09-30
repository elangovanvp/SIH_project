"use client"

import InView from "./in-view"

const steps = [
  {
    title: "Step 1: Seamless Login for Every Farmer",
    body: "Farmers access their field-level insights through a simple, secure login. Once logged in, the dashboard immediately presents an intuitive overview of your farm, combining real-time sensor data, satellite imagery, and AI-powered analysis.",
  },
  {
    title: "Step 2: Snapshots from Space – Precision at Your Fingertips",
    body: "Every visual on the dashboard is generated using satellite data from trusted sources like USGS and Copernicus. These high-resolution images are processed through advanced machine learning models to extract critical insights about your soil, crops, irrigation, and pest conditions.",
  },
  {
    title: "Step 3: Reports – Five Pillars of Actionable Insight",
    body: "Create five alternating sections with full content:",
  },
]

const reports = [
  {
    title: "Soil Condition Report",
    body: "The soil report analyzes moisture, organic matter, minerals (Ca, P, K), texture, and pH/salinity to detect early stress conditions, and provides simple, color-coded recommendations to guide irrigation, fertilization, and soil health management.",
    align: "right" as const,
    imgAlt: "Soil hyperspectral analysis dashboard",
    imgSrc: "/images/soil-hyperspectral-images.jpeg",
  },
  {
    title: "Crop Health Report",
    body: "The crop health report combines NDVI, EVI, Red Edge, chlorophyll, and reflectance indices along with structural features to monitor photosynthetic activity, detect hidden stress, track canopy vigor, and deliver early, color-coded insights for timely field action.",
    align: "left" as const,
    imgAlt: "Crop analysis dashboard",
    imgSrc: "/images/crop-analysis-dashboard.jpeg",
  },
  {
    title: "Pest & Disease Control Report",
    body: "The pest and disease risk report integrates stress indices, canopy damage patterns, temporal anomalies, and texture analysis to identify early warning signs of infestations, highlight affected patches, and guide farmers with timely, zone-specific alerts for intervention.",
    align: "right" as const,
    imgAlt: "Pest detection dashboard",
    imgSrc: "/images/pest-detection-dashboard.jpeg",
  },
  {
    title: "Irrigation Cycle Report",
    body: "The irrigation cycle report combines soil moisture trends, evapotranspiration patterns, weather forecasts, and crop growth stage data to recommend optimal watering schedules, helping farmers avoid under- or over-irrigation while conserving water and sustaining crop health.",
    align: "left" as const,
    imgAlt: "Irrigation hyperspectral analysis",
    imgSrc: "/images/irrigation-hyperspectral-images.jpeg",
  },
  {
    title: "Climate & Advisory Report",
    body: "The climate & advisory report integrates real-time weather forecasts, temperature and rainfall patterns, and seasonal anomalies with crop growth models to provide farmers with timely alerts and adaptive recommendations, ensuring better preparedness for heat, drought, or pest-conducive conditions.",
    align: "right" as const,
    imgAlt: "Climate predictive analysis dashboard",
    imgSrc: "/images/climate predictive analysis.jpeg",
  },
]

function ReportRow({
  title,
  body,
  align,
  idx,
  imgAlt,
  imgSrc,
}: {
  title: string
  body: string
  align: "left" | "right"
  idx: number
  imgAlt: string
  imgSrc?: string
}) {
  const image = (
    <div className="relative overflow-hidden rounded-lg border bg-card">
      <img
        src={imgSrc || `/placeholder.svg?height=360&width=560&query=report%20image%20placeholder`}
        alt={imgAlt}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
      />
    </div>
  )

  const copy = (
    <div className="space-y-4 group-hover:transform group-hover:scale-105 transition-all duration-500">
      <h4 className="text-pretty text-2xl md:text-3xl font-bold text-black hover:animate-pulse">{title}</h4>
      <p className="text-muted-foreground leading-relaxed text-lg md:text-xl group-hover:text-foreground/90 transition-colors duration-300">{body}</p>
    </div>
  )

  return (
    <InView delay={100 * (idx + 1)}>
      <div className="group grid items-center gap-6 md:grid-cols-2">
        {align === "left" ? (
          <>
            {copy}
            {image}
          </>
        ) : (
          <>
            {image}
            {copy}
          </>
        )}
      </div>
    </InView>
  )
}

export default function OurSolution() {
  return (
    <section className="space-y-10">
      <header className="space-y-4">
        <h2 className="text-pretty text-4xl md:text-6xl font-black tracking-tighter text-black animate-slide-in-left opacity-0">OUR SOLUTION</h2>
        <div className="w-32 h-1 bg-gradient-to-r from-primary to-blue-600 animate-fade-in-up opacity-0 animation-delay-300"></div>
      </header>

      <div className="space-y-8">
        {steps.map((s, i) => (
          <InView key={s.title} delay={50 * i}>
            <div className="space-y-4 hover:transform hover:scale-105 transition-all duration-500 p-6 rounded-lg hover:bg-card/50">
              <h3 className="text-balance text-2xl md:text-3xl font-bold text-black">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg md:text-xl">{s.body}</p>
            </div>
          </InView>
        ))}
      </div>

      <div className="space-y-10">
        {reports.map((r, i) => (
          <ReportRow key={r.title} title={r.title} body={r.body} align={r.align} idx={i} imgAlt={r.imgAlt} imgSrc={r.imgSrc} />
        ))}
      </div>
    </section>
  )
}
