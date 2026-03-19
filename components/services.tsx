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
    <section id="services" className="relative py-24 lg:py-32 bg-[#0a1628] overflow-hidden">
      {/* Abstract background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0a1628] via-[#0d2847] to-[#0a1628]" />
        {/* Subtle orbital curves */}
        <svg className="absolute w-full h-full opacity-10" viewBox="0 0 1000 600" fill="none" preserveAspectRatio="xMidYMid slice">
          <ellipse cx="500" cy="300" rx="400" ry="200" stroke="#d4a845" strokeWidth="1" />
          <ellipse cx="500" cy="300" rx="350" ry="175" stroke="#e8932c" strokeWidth="0.5" />
          <ellipse cx="500" cy="300" rx="300" ry="150" stroke="#f5a623" strokeWidth="0.5" />
        </svg>
        {/* Corner accents */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#3498db]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#2ecc71]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-[#d4a845] mb-4">
            Our Services
          </p>
          <h2 className="text-3xl font-serif font-semibold tracking-tight text-white sm:text-4xl text-balance">
            Comprehensive COAM Solutions
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/70 text-pretty">
            From device supply to ongoing technical support, we provide everything you need to operate successfully.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8 transition-all hover:bg-white/10 hover:border-[#d4a845]/30"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#d4a845] text-[#0a1628] mb-6">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-white/60 leading-relaxed">
                {service.description}
              </p>
              <ul className="mt-6 space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-white/80">
                    <span className="flex h-1.5 w-1.5 rounded-full bg-[#d4a845]" />
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
