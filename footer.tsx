"use client"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-8 flex items-center justify-between">
        <p className="text-sm text-[hsl(var(--muted-foreground))]">© {new Date().getFullYear()} Your Brand</p>
        <div className="flex items-center gap-4">
          <a href="#top" className="text-sm hover:text-[hsl(var(--brand))]" aria-label="Scroll to top">
            ↑ Top
          </a>
        </div>
      </div>
    </footer>
  )
}
