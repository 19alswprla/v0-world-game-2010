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
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
            Get In Touch
          </p>
          <h2 className="text-3xl font-serif font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
            Start a Partnership
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            Ready to optimize your location&apos;s revenue potential? Contact us to discuss how we can work together.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="bg-card rounded-xl border border-border p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Message Sent!</h3>
                <p className="mt-2 text-muted-foreground">
                  We&apos;ll be in touch with you shortly.
                </p>
                <Button
                  variant="outline"
                  className="mt-6"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="bg-background"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@company.com"
                    className="bg-background"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your location and partnership interests..."
                    className="bg-background resize-none"
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Start a Partnership"}
                </Button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary text-foreground">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Address</h3>
                  <p className="mt-1 text-muted-foreground">
                    4413 Mendi Ct.<br />
                    Suwanee, GA 30024
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary text-foreground">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <a
                    href="mailto:info@worldgame2010.com"
                    className="mt-1 text-muted-foreground hover:text-accent transition-colors"
                  >
                    info@worldgame2010.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary text-foreground">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Phone</h3>
                  <a
                    href="tel:+17707976675"
                    className="mt-1 text-muted-foreground hover:text-accent transition-colors"
                  >
                    (770) 797-6675
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-secondary/50 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Office Hours:</strong><br />
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
