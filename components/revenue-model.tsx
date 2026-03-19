"use client"

const revenueBreakdown = [
  { label: "Operator (Master)", percentage: 43.5, color: "bg-primary" },
  { label: "Location Owner", percentage: 43.5, color: "bg-accent" },
  { label: "State (Georgia Lottery Fund)", percentage: 13, color: "bg-muted-foreground" },
]

export function RevenueModel() {
  return (
    <section id="revenue" className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary-foreground/70 mb-4">
            Revenue Distribution
          </p>
          <h2 className="text-3xl font-serif font-semibold tracking-tight sm:text-4xl text-balance">
            Transparent Revenue Model
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80 text-pretty">
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
                  stroke="currentColor"
                  strokeWidth="20"
                  strokeDasharray="109.3 251.3"
                  strokeDashoffset="0"
                  className="text-primary-foreground"
                />
                {/* Location Owner slice - 43.5% */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="20"
                  strokeDasharray="109.3 251.3"
                  strokeDashoffset="-109.3"
                  className="text-accent"
                />
                {/* State slice - 13% */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="20"
                  strokeDasharray="32.7 251.3"
                  strokeDashoffset="-218.6"
                  className="text-primary-foreground/40"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-4xl font-semibold">100%</p>
                  <p className="text-sm text-primary-foreground/70">Total Revenue</p>
                </div>
              </div>
            </div>
          </div>

          {/* Breakdown Cards */}
          <div className="space-y-4">
            {revenueBreakdown.map((item) => (
              <div
                key={item.label}
                className="bg-primary-foreground/10 rounded-lg p-6 backdrop-blur-sm border border-primary-foreground/10"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg font-medium">{item.label}</span>
                  <span className="text-2xl font-semibold">{item.percentage}%</span>
                </div>
                <div className="h-2 rounded-full bg-primary-foreground/20 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${item.color === "bg-primary" ? "bg-primary-foreground" : item.color === "bg-accent" ? "bg-accent" : "bg-primary-foreground/50"}`}
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
            <p className="text-sm text-primary-foreground/60 mt-6 leading-relaxed">
              This distribution model ensures fair compensation for all parties while supporting Georgia&apos;s educational initiatives through the Lottery Fund.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
