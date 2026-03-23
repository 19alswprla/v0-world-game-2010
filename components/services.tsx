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

// Slot reel items for the spinning effect
const slotSymbols = ["7", "BAR", "WIN", "777", "JACKPOT"]

export function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [spinComplete, setSpinComplete] = useState([false, false, false])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          // Stagger the stopping of each "reel"
          setTimeout(() => setSpinComplete(prev => [true, prev[1], prev[2]]), 1500)
          setTimeout(() => setSpinComplete(prev => [prev[0], true, prev[2]]), 2200)
          setTimeout(() => setSpinComplete(prev => [prev[0], prev[1], true]), 2900)
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

        {/* Slot Machine Frame */}
        <div className="mt-16 relative">
          {/* Decorative slot machine top */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
            <div className="w-3 h-3 rounded-full bg-[#d4a845] animate-pulse" style={{ animationDelay: "0.3s" }} />
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: "0.6s" }} />
          </div>
          
          {/* Main slot display area */}
          <div className="relative rounded-2xl border-4 border-[#d4a845]/50 bg-gradient-to-b from-[#0d2847] to-[#0a1628] p-4 lg:p-8 shadow-[0_0_60px_rgba(212,168,69,0.15)]">
            {/* Inner glow effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-[#d4a845]/5 to-transparent pointer-events-none" />
            
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="relative overflow-hidden"
                >
                  {/* Slot reel effect */}
                  <div 
                    className={`
                      relative rounded-xl border-2 border-[#d4a845]/30 overflow-hidden
                      ${isVisible && !spinComplete[index] ? 'animate-slot-spin' : ''}
                    `}
                    style={{
                      boxShadow: spinComplete[index] ? '0 0 20px rgba(212, 168, 69, 0.3), inset 0 0 20px rgba(212, 168, 69, 0.1)' : 'none'
                    }}
                  >
                    {/* Spinning overlay */}
                    {isVisible && !spinComplete[index] && (
                      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0a1628] via-transparent to-[#0a1628] pointer-events-none">
                        <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden">
                          {[...slotSymbols, ...slotSymbols, ...slotSymbols].map((symbol, i) => (
                            <div
                              key={i}
                              className="text-4xl font-bold text-[#d4a845] animate-slot-reel py-4"
                              style={{ animationDelay: `${i * 0.1}s` }}
                            >
                              {symbol}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Actual content */}
                    <div 
                      className={`
                        group relative bg-white/5 backdrop-blur-sm p-8 transition-all duration-700
                        ${spinComplete[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                        hover:bg-white/10
                      `}
                    >
                      {/* Win flash effect */}
                      {spinComplete[index] && (
                        <div className="absolute inset-0 bg-[#d4a845]/20 animate-flash rounded-xl" />
                      )}
                      
                      <div className="relative z-10">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#d4a845] text-[#0a1628] mb-6 shadow-lg shadow-[#d4a845]/20">
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
                    </div>
                  </div>
                  
                  {/* Reel separator lights */}
                  {index < 2 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 flex-col gap-2 z-20">
                      <div className="w-2 h-2 rounded-full bg-[#d4a845] animate-pulse" />
                      <div className="w-2 h-2 rounded-full bg-[#d4a845] animate-pulse" style={{ animationDelay: "0.2s" }} />
                      <div className="w-2 h-2 rounded-full bg-[#d4a845] animate-pulse" style={{ animationDelay: "0.4s" }} />
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Bottom jackpot banner */}
            <div className={`
              mt-8 py-3 px-6 rounded-lg bg-gradient-to-r from-[#d4a845]/20 via-[#d4a845]/30 to-[#d4a845]/20 
              border border-[#d4a845]/30 text-center transition-all duration-1000
              ${spinComplete.every(Boolean) ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
            `}>
              <p className="text-[#d4a845] font-semibold tracking-wider uppercase text-sm">
                Full Service Gaming Solutions
              </p>
            </div>
          </div>
          
          {/* Decorative base */}
          <div className="h-4 mx-8 bg-gradient-to-b from-[#d4a845]/30 to-transparent rounded-b-lg" />
        </div>
      </div>

      <style jsx>{`
        @keyframes slot-spin {
          0%, 100% { transform: translateY(0); }
          25% { transform: translateY(-2px); }
          50% { transform: translateY(2px); }
          75% { transform: translateY(-1px); }
        }
        
        @keyframes slot-reel {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        
        @keyframes flash {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        
        .animate-slot-spin {
          animation: slot-spin 0.1s ease-in-out infinite;
        }
        
        .animate-slot-reel {
          animation: slot-reel 0.3s linear infinite;
        }
        
        .animate-flash {
          animation: flash 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
