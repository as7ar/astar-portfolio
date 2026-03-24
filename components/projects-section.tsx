"use client"

import { useRef, useEffect, useState } from "react"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Neural Canvas",
    description: "AI-powered design tool for generative art creation",
    tags: ["Next.js", "AI SDK", "Canvas API"],
    link: "#",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop"
  },
  {
    title: "DevFlow",
    description: "Streamlined workflow automation for development teams",
    tags: ["TypeScript", "Node.js", "PostgreSQL"],
    link: "#",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
  },
  {
    title: "Synthwave UI",
    description: "Modern component library with retro aesthetics",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    link: "#",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop"
  },
  {
    title: "CloudSync Pro",
    description: "Enterprise-grade file synchronization solution",
    tags: ["Go", "AWS S3", "WebSocket"],
    link: "#",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <a
      href={project.link}
      className="group block w-[320px] md:w-[400px] shrink-0 bg-card rounded-2xl border border-border/50 overflow-hidden hover:border-primary/30 transition-all duration-500"
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="text-xs font-mono text-primary-foreground/80 bg-primary/80 backdrop-blur-sm px-2 py-1 rounded-md">
            0{index + 1}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shrink-0">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{project.description}</p>
        
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span 
              key={tag}
              className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}

export function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [translateX, setTranslateX] = useState(0)

  useEffect(() => {
    const section = sectionRef.current
    const track = trackRef.current
    if (!section || !track) return

    const updateTranslate = () => {
      const rect = section.getBoundingClientRect()
      const sectionTop = rect.top
      const sectionHeight = section.offsetHeight
      const viewportHeight = window.innerHeight
      const scrollableDistance = sectionHeight - viewportHeight

      // Calculate progress: 0 when section top hits viewport top, 1 when we've scrolled through the section
      let progress = 0
      
      if (sectionTop <= 0) {
        progress = Math.min(1, Math.abs(sectionTop) / scrollableDistance)
      }

      // Calculate max horizontal distance to travel
      const trackWidth = track.scrollWidth
      const containerWidth = window.innerWidth
      const maxTranslate = Math.max(0, trackWidth - containerWidth + 48)

      setTranslateX(-progress * maxTranslate)
    }

    window.addEventListener("scroll", updateTranslate, { passive: true })
    window.addEventListener("resize", updateTranslate, { passive: true })
    updateTranslate()

    return () => {
      window.removeEventListener("scroll", updateTranslate)
      window.removeEventListener("resize", updateTranslate)
    }
  }, [])

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="relative h-[250vh]"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="px-6 mb-6">
          <h2 className="text-sm font-medium text-primary tracking-widest uppercase">Projects</h2>
          <p className="mt-2 text-2xl md:text-3xl font-semibold text-foreground">Featured Work</p>
        </div>
        
        <div className="overflow-hidden">
          <div 
            ref={trackRef}
            className="flex gap-6 px-6"
            style={{ 
              transform: `translate3d(${translateX}px, 0, 0)`,
              willChange: 'transform'
            }}
          >
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
