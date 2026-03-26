"use client"

import Image from "next/image"

const revenueBreakdown = [
  { label: "Operator (Master)", percentage: 43.5, color: "#0a1628" },
  { label: "Location Owner", percentage: 43.5, color: "#d4a845" },
  { label: "State (Georgia Lottery Fund)", percentage: 13, color: "#3498db" },
]

export function RevenueModel() {
  return (
    <section id="revenue" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background image with light overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jakub-zerdzicki-ykgLX_CwtDw-unsplash-2jCovKBCZGBJ3Xx9jqRHLq6XPF1Z0z.jpg"
          alt="Business analytics and financial reports"
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/85 to-white/90" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-[#d4a845] mb-4">
            Revenue Distribution
          </p>
          <h2 className="text-3xl font-serif font-semibold tracking-tight text-[#0a1628] sm:text-4xl text-balance">
            Transparent Revenue Model
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[#0a1628]/70 text-pretty">
            Revenue is generated from player activity and distributed in accordance with Georgia COAM regulations.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Visual Chart */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                {/* Operator slice - 43.5% */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  stroke="#0a1628"
                  strokeWidth="20"
                  strokeDasharray="109.3 251.3"
                  strokeDashoffset="0"
                />
                {/* Location Owner slice - 43.5% */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  stroke="#d4a845"
                  strokeWidth="20"
                  strokeDasharray="109.3 251.3"
                  strokeDashoffset="-109.3"
                />
                {/* State slice - 13% */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  stroke="#3498db"
                  strokeWidth="20"
                  strokeDasharray="32.7 251.3"
                  strokeDashoffset="-218.6"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-4xl font-semibold text-[#0a1628]">100%</p>
                  <p className="text-sm text-[#0a1628]/60">Total Revenue</p>
                </div>
              </div>
            </div>
          </div>

          {/* Breakdown Cards */}
          <div className="space-y-4">
            {revenueBreakdown.map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-lg p-6 shadow-lg border border-[#0a1628]/10"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg font-medium text-[#0a1628]">{item.label}</span>
                  <span className="text-2xl font-semibold text-[#0a1628]">{item.percentage}%</span>
                </div>
                <div className="h-2 rounded-full bg-[#0a1628]/10 overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${item.percentage}%`, backgroundColor: item.color }}
                  />
                </div>
              </div>
            ))}
            <p className="text-sm text-[#0a1628]/60 mt-6 leading-relaxed">
              This distribution model ensures fair compensation for all parties while supporting Georgia&apos;s educational initiatives through the Lottery Fund.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
