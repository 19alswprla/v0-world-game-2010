"use client"

import { Cpu, Wrench, Users } from "lucide-react"
import { useEffect, useRef, useState } from "react"

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

function SlotReel({ 
  service, 
  index, 
  isSpinning, 
  hasStopped 
}: { 
  service: typeof services[0]
  index: number
  isSpinning: boolean
  hasStopped: boolean
}) {
  const reelRef = useRef<HTMLDivElement>(null)
  
  // Clone the content for seamless looping
  const ServiceCard = () => (
    <div className="h-[340px] w-full flex-shrink-0 p-6 flex flex-col">
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#d4a845] text-[#0a1628] mb-5 shadow-lg shadow-[#d4a845]/20">
        <service.icon className="h-7 w-7" />
      </div>
      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
      <p className="mt-3 text-white/60 leading-relaxed text-sm">
        {service.description}
      </p>
      <ul className="mt-5 space-y-2.5 flex-1">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3 text-sm text-white/80">
            <span className="flex h-1.5 w-1.5 rounded-full bg-[#d4a845]" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <div className="relative h-[340px] overflow-hidden rounded-xl border-2 border-[#d4a845]/30 bg-white/5">
      {/* Gradient overlays for depth effect */}
      <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#0a1628] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#0a1628] to-transparent z-10 pointer-events-none" />
      
      {/* Spinning reel container */}
      <div 
        ref={reelRef}
        className={`
          flex flex-col
          ${isSpinning && !hasStopped ? 'animate-spin-reel' : ''}
          ${hasStopped ? 'animate-none' : ''}
        `}
        style={{
          animationDuration: `${0.15 + index * 0.05}s`,
          transform: hasStopped ? 'translateY(0)' : undefined,
        }}
      >
        {/* Multiple copies for continuous spin effect */}
        {isSpinning && !hasStopped ? (
          <>
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </>
        ) : (
          <ServiceCard />
        )}
      </div>
      
      {/* Win glow effect */}
      {hasStopped && (
        <div 
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{
            boxShadow: 'inset 0 0 30px rgba(212, 168, 69, 0.2), 0 0 20px rgba(212, 168, 69, 0.15)'
          }}
        />
      )}
    </div>
  )
}

export function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isSpinning, setIsSpinning] = useState(false)
  const [stoppedReels, setStoppedReels] = useState([false, false, false])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          setIsSpinning(true)
          
          // Stop reels one by one with slot machine timing
          setTimeout(() => setStoppedReels(prev => [true, prev[1], prev[2]]), 1200)
          setTimeout(() => setStoppedReels(prev => [prev[0], true, prev[2]]), 1800)
          setTimeout(() => {
            setStoppedReels(prev => [prev[0], prev[1], true])
            setIsSpinning(false)
          }, 2400)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  return (
    <section ref={sectionRef} id="services" className="relative py-24 lg:py-32 bg-[#0a1628] overflow-hidden">
      {/* Abstract background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0a1628] via-[#0d2847] to-[#0a1628]" />
        <svg className="absolute w-full h-full opacity-10" viewBox="0 0 1000 600" fill="none" preserveAspectRatio="xMidYMid slice">
          <ellipse cx="500" cy="300" rx="400" ry="200" stroke="#d4a845" strokeWidth="1" />
          <ellipse cx="500" cy="300" rx="350" ry="175" stroke="#e8932c" strokeWidth="0.5" />
        </svg>
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

        {/* Slot Machine Frame */}
        <div className="mt-16 relative">
          {/* Top lights */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-3">
            {[0, 1, 2, 3, 4].map((i) => (
              <div 
                key={i}
                className="w-3 h-3 rounded-full animate-pulse"
                style={{ 
                  backgroundColor: i % 2 === 0 ? '#d4a845' : '#ef4444',
                  animationDelay: `${i * 0.2}s` 
                }} 
              />
            ))}
          </div>
          
          {/* Main slot display */}
          <div className="relative rounded-2xl border-4 border-[#d4a845]/40 bg-gradient-to-b from-[#0d2847] to-[#0a1628] p-6 lg:p-8 shadow-[0_0_60px_rgba(212,168,69,0.1)]">
            
            {/* Slot reels grid */}
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
              {services.map((service, index) => (
                <SlotReel
                  key={service.title}
                  service={service}
                  index={index}
                  isSpinning={isSpinning}
                  hasStopped={stoppedReels[index]}
                />
              ))}
            </div>
            
            {/* Jackpot banner */}
            <div className={`
              mt-8 py-3 px-6 rounded-lg bg-gradient-to-r from-[#d4a845]/10 via-[#d4a845]/20 to-[#d4a845]/10 
              border border-[#d4a845]/30 text-center transition-all duration-700
              ${stoppedReels.every(Boolean) ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
            `}>
              <p className="text-[#d4a845] font-semibold tracking-wider uppercase text-sm">
                Full Service Gaming Solutions
              </p>
            </div>
          </div>
          
          {/* Base shadow */}
          <div className="h-3 mx-12 bg-gradient-to-b from-[#d4a845]/20 to-transparent rounded-b-lg" />
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-reel {
          0% { transform: translateY(0); }
          100% { transform: translateY(-340px); }
        }
        
        .animate-spin-reel {
          animation: spin-reel linear infinite;
        }
      `}</style>
    </section>
  )
}
