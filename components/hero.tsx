"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a1628] pt-16">
      {/* Abstract Background with Logo Colors */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Navy to teal gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0d2847] to-[#0a1628]" />
        
        {/* Golden orbital rings - inspired by logo */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] border-2 border-[#d4a845]/20 rounded-[50%] rotate-[-15deg]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] border border-[#e8932c]/15 rounded-[50%] rotate-[-15deg]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] border border-[#f5a623]/10 rounded-[50%] rotate-[-15deg]" />
        
        {/* Animated glowing orbs */}
        <div className="absolute top-20 right-[15%] w-3 h-3 bg-[#e8932c] rounded-full opacity-60 animate-pulse" />
        <div className="absolute top-32 right-[20%] w-2 h-2 bg-[#d4a845] rounded-full opacity-40 animate-pulse" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-40 left-[10%] w-4 h-4 bg-[#3498db] rounded-full opacity-30 animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-60 right-[25%] w-2 h-2 bg-[#2ecc71] rounded-full opacity-40 animate-pulse" style={{ animationDelay: "1.5s" }} />
        
        {/* Subtle grid pattern */}
        <svg className="absolute w-full h-full opacity-[0.03]" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="1" fill="#d4a845" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-[#d4a845] mb-6">
            Technology & Infrastructure
          </p>
          <h1 className="text-4xl font-serif font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
            Powering Georgia&apos;s COAM Infrastructure
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/70 max-w-2xl mx-auto text-pretty">
            Licensed COAM Master Company providing gaming systems, revenue optimization, and technical support across Georgia.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="min-w-[180px] bg-[#d4a845] hover:bg-[#c49935] text-[#0a1628]">
              <Link href="#contact">
                Partner With Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-w-[180px] border-white/30 text-white hover:bg-white/10">
              <Link href="#about">Learn More</Link>
            </Button>
          </div>
        </div>

        {/* Stats Preview */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
          <div className="text-center">
            <p className="text-3xl font-semibold text-white">2010</p>
            <p className="mt-1 text-sm text-white/50">Established</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-semibold text-white">50+</p>
            <p className="mt-1 text-sm text-white/50">Active Locations</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-semibold text-white">24/7</p>
            <p className="mt-1 text-sm text-white/50">Technical Support</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-semibold text-white">100%</p>
            <p className="mt-1 text-sm text-white/50">Compliant</p>
          </div>
        </div>
      </div>
    </section>
  )
}
