"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-16">
      {/* Abstract Network Background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute w-full h-full opacity-[0.03]"
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="1" fill="currentColor" className="text-primary" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        
        {/* Animated circles */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-border opacity-20 animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full border border-border opacity-15 animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full border border-border opacity-10 animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent mb-6">
            Technology & Infrastructure
          </p>
          <h1 className="text-4xl font-serif font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Powering Georgia&apos;s COAM Infrastructure
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto text-pretty">
            Licensed COAM Master Company providing gaming systems, revenue optimization, and technical support across Georgia.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="min-w-[180px]">
              <Link href="#contact">
                Partner With Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-w-[180px]">
              <Link href="#about">Learn More</Link>
            </Button>
          </div>
        </div>

        {/* Stats Preview */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-12">
          <div className="text-center">
            <p className="text-3xl font-semibold text-foreground">2010</p>
            <p className="mt-1 text-sm text-muted-foreground">Established</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-semibold text-foreground">50+</p>
            <p className="mt-1 text-sm text-muted-foreground">Active Locations</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-semibold text-foreground">24/7</p>
            <p className="mt-1 text-sm text-muted-foreground">Technical Support</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-semibold text-foreground">100%</p>
            <p className="mt-1 text-sm text-muted-foreground">Compliant</p>
          </div>
        </div>
      </div>
    </section>
  )
}
