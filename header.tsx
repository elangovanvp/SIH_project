"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export type TopTab = "home" | "poc" | "about"

export function Header({
  onChange,
  value,
}: {
  value: TopTab
  onChange: (v: TopTab) => void
}) {
  return (
    <header className="w-full border-b bg-background" role="banner">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-primary">ALGO ARCHITECHS</h1>
        </div>
        <nav className="ml-auto" role="navigation" aria-label="Main navigation">
          <Tabs value={value} onValueChange={(v) => onChange(v as TopTab)}>
            <TabsList className="bg-transparent gap-2" role="tablist">
              <TabsTrigger
                value="home"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                role="tab"
                aria-selected={value === "home"}
              >
                Home
              </TabsTrigger>
              <TabsTrigger
                value="poc"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                role="tab"
                aria-selected={value === "poc"}
              >
                POC
              </TabsTrigger>
              <TabsTrigger
                value="about"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                role="tab"
                aria-selected={value === "about"}
              >
                About
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </nav>
      </div>
    </header>
  )
}
