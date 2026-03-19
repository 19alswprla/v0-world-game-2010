import { Cpu, Wrench, Users } from "lucide-react"

const services = [
  {
    icon: Cpu,
    title: "Gaming Device Supply",
    description: "COAM-certified machines deployed and configured for optimal performance.",
    features: [
      "COAM-certified machines",
      "Slot-style and skill-based systems",
      "Deployment and configuration",
    ],
  },
  {
    icon: Wrench,
    title: "System Maintenance & Support",
    description: "Comprehensive technical support to keep your operations running smoothly.",
    features: [
      "24/7 technical support",
      "Operational consulting",
      "Performance optimization",
    ],
  },
  {
    icon: Users,
    title: "Partner Solutions",
    description: "End-to-end solutions for location owners looking to maximize revenue.",
    features: [
      "Installation & onboarding",
      "Software updates",
      "Security & compliance management",
    ],
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
            Our Services
          </p>
          <h2 className="text-3xl font-serif font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
            Comprehensive COAM Solutions
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            From device supply to ongoing technical support, we provide everything you need to operate successfully.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-card rounded-xl border border-border p-8 transition-all hover:shadow-xl hover:border-accent/30"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground mb-6">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              <ul className="mt-6 space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                    <span className="flex h-1.5 w-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
