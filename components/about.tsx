import { Shield, MapPin, Headphones, Calendar } from "lucide-react"

const highlights = [
  {
    icon: Shield,
    title: "Licensed & Compliant",
    description: "Fully licensed Georgia COAM Master Company operating in strict accordance with state regulations.",
  },
  {
    icon: MapPin,
    title: "50+ Active Locations",
    description: "Serving convenience stores, gas stations, and entertainment venues across Georgia.",
  },
  {
    icon: Headphones,
    title: "24/7 Technical Support",
    description: "Round-the-clock support ensuring minimal downtime and maximum operational efficiency.",
  },
  {
    icon: Calendar,
    title: "Established 2010",
    description: "Over a decade of experience building trusted partnerships throughout the state.",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
            Who We Are
          </p>
          <h2 className="text-3xl font-serif font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
            Building Georgia&apos;s COAM Ecosystem
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            World Game 2010 is a licensed Georgia COAM Master Company established in 2010. We specialize in the distribution, maintenance, and technical support of coin-operated amusement machines across over 50 partner locations including convenience stores, gas stations, and entertainment venues.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group relative bg-card rounded-lg border border-border p-6 transition-all hover:shadow-lg hover:border-accent/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground mb-4">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
