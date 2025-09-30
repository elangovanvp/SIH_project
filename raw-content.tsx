"use client"

import useSWR from "swr"
import { InView } from "./in-view"

const fetcher = (url: string) => fetch(url).then((r) => r.text())

export function RawContent() {
  const { data } = useSWR("/content/source.txt", fetcher)
  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <InView>
        <h2 className="title-accent text-xl md:text-2xl font-semibold text-foreground">Provided Content (Exact)</h2>
      </InView>
      <div className="mt-4 overflow-auto rounded-md border bg-white p-4">
        <pre className="whitespace-pre-wrap text-[15px] leading-relaxed text-foreground">{data}</pre>
      </div>
    </section>
  )
}
