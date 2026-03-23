import { Check } from "lucide-react"

const reasons = [
  "Licensed Georgia COAM Master Company",
  "Proven track record across 50+ locations",
  "End-to-end system management",
  "Compliance-first operations",
  "Scalable solutions for new store openings",
  "Transparent revenue sharing model",
  "Dedicated account management",
  "Rapid deployment capabilities",
]

export function WhyUs() {
  return (
    <section id="why-us" className="relative py-24 lg:py-32 bg-[#0a1628] overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0a1628] via-[#0d2847] to-[#0a1628]" />
        <div className="absolute top-20 right-[10%] w-72 h-72 bg-[#d4a845]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-[5%] w-56 h-56 bg-[#3498db]/10 rounded-full blur-3xl" />
        <svg className="absolute top-1/2 right-0 w-40 h-40 text-white/5 -translate-y-1/2" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-[#d4a845] mb-4">
              Why Choose Us
            </p>
            <h2 className="text-3xl font-serif font-semibold tracking-tight text-white sm:text-4xl text-balance">
              Your Trusted COAM Partner
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/70 text-pretty">
              With over a decade of experience in Georgia&apos;s COAM industry, we&apos;ve built a reputation for reliability, compliance, and operational excellence.
            </p>
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#d4a845] text-[#0a1628]">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-white/80">{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 text-center">
                <p className="text-4xl font-semibold text-white">99.9%</p>
                <p className="mt-2 text-sm text-white/60">System Uptime</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 text-center">
                <p className="text-4xl font-semibold text-white">{"<"}4hr</p>
                <p className="mt-2 text-sm text-white/60">Response Time</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 text-center">
                <p className="text-4xl font-semibold text-white">15+</p>
                <p className="mt-2 text-sm text-white/60">Years Experience</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 text-center">
                <p className="text-4xl font-semibold text-white">100%</p>
                <p className="mt-2 text-sm text-white/60">Compliance Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
