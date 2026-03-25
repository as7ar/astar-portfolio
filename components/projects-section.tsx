"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "AI Dashboard",
    description: "Real-time analytics platform with ML-powered insights and predictive modeling",
    tech: ["Next.js", "Python", "TensorFlow"],
    color: "bg-gradient-to-br from-violet-100 to-purple-50",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack marketplace with payment integration and inventory management",
    tech: ["React", "Node.js", "Stripe"],
    color: "bg-gradient-to-br from-blue-100 to-indigo-50",
  },
  {
    title: "Design System",
    description: "Comprehensive component library with accessibility-first approach",
    tech: ["TypeScript", "Storybook", "Figma"],
    color: "bg-gradient-to-br from-pink-100 to-rose-50",
  },
  {
    title: "Mobile App",
    description: "Cross-platform fitness tracking application with social features",
    tech: ["React Native", "Firebase", "Redux"],
    color: "bg-gradient-to-br from-emerald-100 to-teal-50",
  },
]

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let rafId: number

    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const vh = window.innerHeight

      if (rect.top <= 0 && rect.bottom >= vh) {
        const total = sectionRef.current.offsetHeight - vh
        const current = -rect.top

        const raw = current / total
        const eased = 1 - Math.pow(1 - raw, 3) // easeOutCubic

        setProgress(Math.min(Math.max(eased, 0), 1))
      }
    }

    const loop = () => {
      handleScroll()
      rafId = requestAnimationFrame(loop)
    }

    loop()

    return () => cancelAnimationFrame(rafId)
  }, [])

  const getTranslate = () => {
    if (!trackRef.current) return 0

    const trackWidth = trackRef.current.scrollWidth
    const viewport = window.innerWidth

    const max = trackWidth - viewport + 120
    return -progress * max
  }

  const getActiveIndex = () => {
    return Math.round(progress * (projects.length - 1))
  }

  return (
    <section ref={sectionRef} className="h-[240vh]">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">

        {/* Header */}
        <div className="px-8 md:px-16 mb-8">
          <span className="text-xs tracking-widest text-primary uppercase">
            Featured Work
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mt-2">
            Projects
          </h2>
        </div>

        {/* Track */}
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-8 px-8 md:px-16 will-change-transform"
            style={{
              transform: `translate3d(${getTranslate()}px,0,0)`
            }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className={`w-[360px] shrink-0 rounded-2xl p-6 ${project.color}
                border border-black/5 backdrop-blur-sm
                hover:shadow-lg hover:-translate-y-1
                transition-all duration-500 ease-out group`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
                </div>

                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-white/70 backdrop-blur border border-black/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicator */}
        <div className="px-8 md:px-16 mt-8">
          <div className="flex gap-2">
            {projects.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 w-6 rounded-full transition-all duration-300 ${getActiveIndex() === i
                    ? "bg-primary w-10"
                    : "bg-black/10"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}