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
  const [translateX, setTranslateX] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const section = sectionRef.current
      const rect = section.getBoundingClientRect()
      const sectionHeight = section.offsetHeight
      const viewportHeight = window.innerHeight

      // Calculate how far into the section we've scrolled
      const scrollStart = rect.top
      const scrollEnd = rect.bottom - viewportHeight
      
      // Only animate when section is in view and sticky
      if (scrollStart <= 0 && scrollEnd >= 0) {
        const totalScrollDistance = sectionHeight - viewportHeight
        const currentScroll = -scrollStart
        const progress = Math.min(Math.max(currentScroll / totalScrollDistance, 0), 1)
        
        // Calculate the translation (from 0 to negative value)
        const maxTranslate = (projects.length - 1) * 420 // card width + gap
        setTranslateX(-progress * maxTranslate)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="h-[250vh]"
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        <div className="px-8 md:px-16 mb-6">
          <span className="text-sm font-medium text-primary tracking-wider uppercase">
            Featured Work
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mt-2">
            Projects
          </h2>
        </div>

        <div className="relative w-full overflow-visible">
          <div 
            className="flex gap-6 pl-8 md:pl-16 transition-transform duration-100 ease-out"
            style={{ transform: `translateX(${translateX}px)` }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-[380px] h-[280px] rounded-2xl p-6 ${project.color} border border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer group`}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-background/80 text-foreground rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="px-8 md:px-16 mt-6">
          <div className="flex gap-1">
            {projects.map((_, index) => (
              <div
                key={index}
                className="h-1 w-8 rounded-full bg-border overflow-hidden"
              >
                <div 
                  className="h-full bg-primary transition-all duration-300"
                  style={{
                    width: `${Math.min(100, Math.max(0, (-translateX - index * 420 + 200) / 4.2))}%`
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
