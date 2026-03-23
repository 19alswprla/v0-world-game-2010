import Image from "next/image"
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
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Image with light overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Attachment%2BI-1920w-3ugiBLt8Ed5KGcMeJ8FfX4wNwkiQ2e.webp"
          alt="Gaming entertainment"
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/85 to-white/90" />
      </div>
      
      {/* Abstract decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] border border-[#0a1628]/5 rounded-[50%] rotate-[-15deg]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[250px] border border-[#d4a845]/10 rounded-[50%] rotate-[-15deg]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-[#d4a845] mb-4">
            Who We Are
          </p>
          <h2 className="text-3xl font-serif font-semibold tracking-tight text-[#0a1628] sm:text-4xl text-balance">
            Building Georgia&apos;s COAM Ecosystem
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[#0a1628]/70 text-pretty">
            World Game 2010 is a licensed Georgia COAM Master Company established in 2010. We specialize in the distribution, maintenance, and technical support of coin-operated amusement machines across over 50 partner locations including convenience stores, gas stations, and entertainment venues.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group relative bg-white/80 backdrop-blur-sm rounded-lg border border-[#0a1628]/10 p-6 shadow-lg transition-all hover:bg-white hover:shadow-xl hover:border-[#d4a845]/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0a1628] text-[#d4a845] mb-4">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-[#0a1628]">{item.title}</h3>
              <p className="mt-2 text-sm text-[#0a1628]/60 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
