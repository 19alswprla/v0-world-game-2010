"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Mail, Phone } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      
      if (!response.ok) {
        throw new Error("Failed to send message")
      }
      
      setSubmitted(true)
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("Error sending message:", error)
      alert("Failed to send message. Please try again or email us directly at info@worldgame2010.com")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-gradient-to-b from-[#f8f9fa] to-white overflow-hidden">
      {/* Abstract background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#d4a845]/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#3498db]/5 rounded-full blur-3xl translate-y-1/2" />
        {/* Subtle grid */}
        <svg className="absolute w-full h-full opacity-[0.03]" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="contact-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0a1628" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-grid)" />
        </svg>
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-[#d4a845] mb-4">
            Get In Touch
          </p>
          <h2 className="text-3xl font-serif font-semibold tracking-tight text-[#0a1628] sm:text-4xl text-balance">
            Start a Partnership
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[#0a1628]/70 text-pretty">
            Ready to optimize your location&apos;s revenue potential? Contact us to discuss how we can work together.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-xl border border-[#0a1628]/10 p-8 shadow-lg">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#d4a845] text-[#0a1628] mb-4">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-[#0a1628]">Message Sent!</h3>
                <p className="mt-2 text-[#0a1628]/60">
                  We&apos;ll be in touch with you shortly.
                </p>
                <Button
                  variant="outline"
                  className="mt-6 border-[#0a1628]/20 text-[#0a1628] hover:bg-[#0a1628]/5"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#0a1628] mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="bg-[#f8f9fa] border-[#0a1628]/10 text-[#0a1628] placeholder:text-[#0a1628]/40"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#0a1628] mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@company.com"
                    className="bg-[#f8f9fa] border-[#0a1628]/10 text-[#0a1628] placeholder:text-[#0a1628]/40"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#0a1628] mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your location and partnership interests..."
                    className="bg-[#f8f9fa] border-[#0a1628]/10 text-[#0a1628] placeholder:text-[#0a1628]/40 resize-none"
                  />
                </div>
                <Button type="submit" className="w-full bg-[#0a1628] hover:bg-[#0d2847] text-white" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Start a Partnership"}
                </Button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#0a1628] text-[#d4a845]">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0a1628]">Address</h3>
                  <p className="mt-1 text-[#0a1628]/60">
                    4413 Mendi Ct.<br />
                    Suwanee, GA 30024
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#0a1628] text-[#d4a845]">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0a1628]">Email</h3>
                  <a
                    href="mailto:info@worldgame2010.com"
                    className="mt-1 text-[#0a1628]/60 hover:text-[#d4a845] transition-colors"
                  >
                    info@worldgame2010.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#0a1628] text-[#d4a845]">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0a1628]">Phone</h3>
                  <a
                    href="tel:+17707976675"
                    className="mt-1 text-[#0a1628]/60 hover:text-[#d4a845] transition-colors"
                  >
                    (770) 797-6675
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-[#0a1628]/5 rounded-lg border border-[#0a1628]/10">
              <p className="text-sm text-[#0a1628]/60 leading-relaxed">
                <strong className="text-[#0a1628]">Office Hours:</strong><br />
                Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                Technical Support: 24/7
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
