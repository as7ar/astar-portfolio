"use client"

import { useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

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
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-60%"])

  return (
    <section id="projects" ref={containerRef} className="py-24 overflow-hidden">
      <div className="px-6 mb-12 max-w-4xl mx-auto">
        <h2 className="text-sm font-medium text-primary tracking-widest uppercase">Projects</h2>
        <p className="mt-2 text-2xl md:text-3xl font-semibold text-foreground">Featured Work</p>
      </div>
      
      <motion.div 
        style={{ x }}
        className="flex gap-6 pl-6"
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </motion.div>
    </section>
  )
}
