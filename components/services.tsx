"use client"

import { Cpu, Wrench, Users, Zap, Shield, Headphones, Star, Trophy, Target, Gem } from "lucide-react"
import { useEffect, useRef, useState, useCallback } from "react"

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
    color: "#3498db",
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
    color: "#2ecc71",
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
    color: "#9b59b6",
  },
]

// Slot symbols for the spinning animation
const slotSymbols = [
  { icon: Star, color: "#f1c40f" },
  { icon: Zap, color: "#3498db" },
  { icon: Shield, color: "#2ecc71" },
  { icon: Trophy, color: "#e74c3c" },
  { icon: Target, color: "#9b59b6" },
  { icon: Gem, color: "#1abc9c" },
  { icon: Headphones, color: "#e67e22" },
  { icon: Cpu, color: "#34495e" },
]

const SYMBOL_HEIGHT = 80

function SlotReel({ 
  service, 
  reelIndex, 
  isSpinning, 
  hasStopped 
}: { 
  service: typeof services[0]
  reelIndex: number
  isSpinning: boolean
  hasStopped: boolean
}) {
  const [offset, setOffset] = useState(0)
  const animationRef = useRef<number>()
  const speedRef = useRef(0)
  
  const animate = useCallback(() => {
    if (isSpinning && !hasStopped) {
      // Accelerate to max speed
      speedRef.current = Math.min(speedRef.current + 2, 40 + reelIndex * 5)
      setOffset(prev => (prev + speedRef.current) % (slotSymbols.length * SYMBOL_HEIGHT))
      animationRef.current = requestAnimationFrame(animate)
    }
  }, [isSpinning, hasStopped, reelIndex])

  useEffect(() => {
    if (isSpinning && !hasStopped) {
      speedRef.current = 0
      animationRef.current = requestAnimationFrame(animate)
    } else if (hasStopped) {
      // Decelerate when stopping
      const decelerate = () => {
        speedRef.current *= 0.9
        if (speedRef.current > 0.5) {
          setOffset(prev => (prev + speedRef.current) % (slotSymbols.length * SYMBOL_HEIGHT))
          animationRef.current = requestAnimationFrame(decelerate)
        } else {
          setOffset(0) // Snap to final position
        }
      }
      decelerate()
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isSpinning, hasStopped, animate])

  return (
    <div className="relative h-[320px] overflow-hidden rounded-xl border-2 border-[#d4a845]/40 bg-[#0a0a12]">
      {/* Reel window shine effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none z-20" />
      
      {/* Top/bottom fade for depth */}
      <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#0a0a12] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#0a0a12] to-transparent z-10 pointer-events-none" />
      
      {/* Spinning symbols - visible during spin */}
      {(isSpinning || (!hasStopped && offset > 0)) && (
        <div 
          className="absolute inset-0 flex flex-col items-center justify-start pt-4"
          style={{ 
            transform: `translateY(-${offset}px)`,
          }}
        >
          {/* Render multiple copies of symbols for seamless loop */}
          {[...slotSymbols, ...slotSymbols, ...slotSymbols].map((symbol, idx) => {
            const Icon = symbol.icon
            return (
              <div 
                key={idx}
                className="flex-shrink-0 flex items-center justify-center"
                style={{ 
                  height: SYMBOL_HEIGHT,
                  filter: isSpinning && !hasStopped ? 'blur(2px)' : 'none',
                }}
              >
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg"
                  style={{ 
                    backgroundColor: symbol.color,
                    boxShadow: `0 0 20px ${symbol.color}40`
                  }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
              </div>
            )
          })}
        </div>
      )}
      
      {/* Final service card - revealed when stopped */}
      <div 
        className={`absolute inset-0 p-5 flex flex-col transition-all duration-700 ease-out ${
          hasStopped && offset === 0
            ? 'opacity-100 scale-100' 
            : 'opacity-0 scale-90'
        }`}
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#d4a845] text-[#0a1628] mb-4 shadow-lg shadow-[#d4a845]/30">
          <service.icon className="h-7 w-7" />
        </div>
        <h3 className="text-lg font-semibold text-white">{service.title}</h3>
        <p className="mt-2 text-sm text-white/60 leading-relaxed flex-grow">
          {service.description}
        </p>
        <ul className="mt-4 space-y-2">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-xs text-white/70">
              <span className="flex h-1.5 w-1.5 rounded-full bg-[#d4a845]" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      
      {/* Win glow effect */}
      {hasStopped && offset === 0 && (
        <div 
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{
            boxShadow: 'inset 0 0 60px rgba(212, 168, 69, 0.2), 0 0 40px rgba(212, 168, 69, 0.15)',
            animation: 'glow 2s ease-in-out infinite alternate'
          }}
        />
      )}
    </div>
  )
}

export function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const [hasTriggered, setHasTriggered] = useState(false)
  const [isSpinning, setIsSpinning] = useState(false)
  const [stoppedReels, setStoppedReels] = useState([false, false, false])
  const [showJackpot, setShowJackpot] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setHasTriggered(true)
          setIsSpinning(true)
          
          // Stop reels one by one with classic slot machine timing
          setTimeout(() => setStoppedReels([true, false, false]), 1800)
          setTimeout(() => setStoppedReels([true, true, false]), 2600)
          setTimeout(() => {
            setStoppedReels([true, true, true])
            setIsSpinning(false)
          }, 3400)
          setTimeout(() => setShowJackpot(true), 3800)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasTriggered])

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
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div 
                key={i}
                className="w-3 h-3 rounded-full shadow-lg"
                style={{ 
                  backgroundColor: isSpinning ? (i % 2 === 0 ? '#d4a845' : '#ef4444') : (stoppedReels.every(s => s) ? '#4ade80' : '#d4a845'),
                  animation: isSpinning ? 'blink 0.3s ease-in-out infinite' : 'none',
                  animationDelay: `${i * 0.1}s`,
                  boxShadow: `0 0 8px ${isSpinning ? (i % 2 === 0 ? '#d4a845' : '#ef4444') : (stoppedReels.every(s => s) ? '#4ade80' : '#d4a845')}`
                }} 
              />
            ))}
          </div>
          
          {/* Main slot display */}
          <div className="relative rounded-2xl border-4 border-[#d4a845]/60 bg-gradient-to-b from-[#0d1a2d] to-[#080c14] p-6 lg:p-8 shadow-[0_0_100px_rgba(212,168,69,0.1)]">
            {/* Inner frame glow */}
            <div className="absolute inset-2 rounded-xl border border-[#d4a845]/20 pointer-events-none" />
            
            {/* Slot reels grid - all same size */}
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
              {services.map((service, index) => (
                <SlotReel
                  key={service.title}
                  service={service}
                  reelIndex={index}
                  isSpinning={isSpinning}
                  hasStopped={stoppedReels[index]}
                />
              ))}
            </div>
            
            {/* Reel status lights */}
            <div className="flex justify-center gap-8 mt-6">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-4 h-4 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: stoppedReels[i] ? '#4ade80' : (isSpinning ? '#facc15' : '#374151'),
                    boxShadow: stoppedReels[i] 
                      ? '0 0 15px #4ade80' 
                      : (isSpinning ? '0 0 10px #facc15' : 'none'),
                    animation: isSpinning && !stoppedReels[i] ? 'pulse 0.5s ease-in-out infinite' : 'none'
                  }}
                />
              ))}
            </div>
            
            {/* Jackpot banner */}
            <div className={`
              mt-6 py-4 px-6 rounded-lg bg-gradient-to-r from-[#d4a845]/10 via-[#d4a845]/20 to-[#d4a845]/10 
              border-2 border-[#d4a845]/40 text-center transition-all duration-700
              ${showJackpot ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}>
              <p className="text-[#d4a845] font-bold tracking-wider uppercase text-sm">
                Full Service Gaming Solutions
              </p>
            </div>
          </div>
          
          {/* Base reflection */}
          <div className="h-6 mx-12 bg-gradient-to-b from-[#d4a845]/20 to-transparent rounded-b-xl" />
        </div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @keyframes glow {
          0% { box-shadow: inset 0 0 40px rgba(212, 168, 69, 0.15), 0 0 30px rgba(212, 168, 69, 0.1); }
          100% { box-shadow: inset 0 0 60px rgba(212, 168, 69, 0.25), 0 0 50px rgba(212, 168, 69, 0.2); }
        }
      `}</style>
    </section>
  )
}
