"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { InView } from "./in-view"

export function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format"
    if (!formData.message.trim()) newErrors.message = "Message is required"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return
    
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setFormData({ name: "", email: "", message: "" })
    alert("Message sent successfully!")
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
      <InView>
        <h2 className="title-accent text-2xl md:text-3xl font-semibold text-foreground">Contact Us</h2>
      </InView>
      <InView className="mt-8">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2" noValidate>
          <div className="col-span-1">
            <label htmlFor="name" className="sr-only">Your name</label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className={`w-full rounded-md border px-3 py-2 outline-none transition-[box-shadow,transform] focus:shadow-[0_0_0_3px_rgba(14,165,164,0.2)] focus:translate-y-[-1px] ${errors.name ? 'border-red-500' : 'border-border'}`}
              required
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && <p id="name-error" className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div className="col-span-1">
            <label htmlFor="email" className="sr-only">Email address</label>
            <input
              id="email"
              type="email"
              placeholder="Email address"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className={`w-full rounded-md border px-3 py-2 outline-none transition-[box-shadow,transform] focus:shadow-[0_0_0_3px_rgba(14,165,164,0.2)] focus:translate-y-[-1px] ${errors.email ? 'border-red-500' : 'border-border'}`}
              required
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && <p id="email-error" className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div className="md:col-span-2">
            <label htmlFor="message" className="sr-only">Your message</label>
            <textarea
              id="message"
              placeholder="Your message"
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              className={`w-full rounded-md border px-3 py-2 h-32 outline-none transition-[box-shadow,transform] focus:shadow-[0_0_0_3px_rgba(14,165,164,0.2)] focus:translate-y-[-1px] resize-vertical ${errors.message ? 'border-red-500' : 'border-border'}`}
              required
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && <p id="message-error" className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
          <div className="md:col-span-2">
            <Button 
              type="submit" 
              className="btn-accent" 
              disabled={isSubmitting}
              aria-describedby="submit-status"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
      </InView>
    </section>
  )
}
