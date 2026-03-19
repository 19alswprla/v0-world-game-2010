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
    <section id="why-us" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
              Why Choose Us
            </p>
            <h2 className="text-3xl font-serif font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
              Your Trusted COAM Partner
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              With over a decade of experience in Georgia&apos;s COAM industry, we&apos;ve built a reputation for reliability, compliance, and operational excellence.
            </p>
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-foreground">{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card rounded-xl border border-border p-6 text-center">
                <p className="text-4xl font-semibold text-foreground">99.9%</p>
                <p className="mt-2 text-sm text-muted-foreground">System Uptime</p>
              </div>
              <div className="bg-card rounded-xl border border-border p-6 text-center">
                <p className="text-4xl font-semibold text-foreground">{"<"}4hr</p>
                <p className="mt-2 text-sm text-muted-foreground">Response Time</p>
              </div>
              <div className="bg-card rounded-xl border border-border p-6 text-center">
                <p className="text-4xl font-semibold text-foreground">15+</p>
                <p className="mt-2 text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="bg-card rounded-xl border border-border p-6 text-center">
                <p className="text-4xl font-semibold text-foreground">100%</p>
                <p className="mt-2 text-sm text-muted-foreground">Compliance Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
