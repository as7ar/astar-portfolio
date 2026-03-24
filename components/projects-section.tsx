"use client"

import { ArrowUpRight } from "lucide-react"
import ScrollStack, { ScrollStackItem } from "./scroll-stack"

const projects = [
  {
    title: "Neural Canvas",
    description: "AI-powered design tool for generative art creation. Transform your ideas into stunning visual artwork with cutting-edge machine learning algorithms.",
    tags: ["Next.js", "AI SDK", "Canvas API"],
    link: "#",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop"
  },
  {
    title: "DevFlow",
    description: "Streamlined workflow automation for development teams. Automate repetitive tasks and boost your team's productivity with intelligent pipelines.",
    tags: ["TypeScript", "Node.js", "PostgreSQL"],
    link: "#",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
  },
  {
    title: "Synthwave UI",
    description: "Modern component library with retro aesthetics. Build beautiful interfaces with pre-designed components inspired by 80s design.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    link: "#",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop"
  },
  {
    title: "CloudSync Pro",
    description: "Enterprise-grade file synchronization solution. Keep your data secure and accessible across all devices with real-time sync.",
    tags: ["Go", "AWS S3", "WebSocket"],
    link: "#",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <a
      href={project.link}
      className="group block bg-card rounded-3xl border border-border/50 overflow-hidden hover:border-primary/30 transition-all duration-500"
    >
      <div className="aspect-[16/9] overflow-hidden relative">
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
      
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shrink-0">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
        
        <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span 
              key={tag}
              className="text-xs px-3 py-1.5 bg-muted text-muted-foreground rounded-full"
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
  return (
    <section id="projects" className="py-24">
      <div className="px-6 mb-8 max-w-4xl mx-auto">
        <h2 className="text-sm font-medium text-primary tracking-widest uppercase">Projects</h2>
      </div>
      
      <ScrollStack
        className="px-6"
        itemDistance={80}
        itemScale={0.02}
        itemStackDistance={20}
        stackPosition="15%"
        scaleEndPosition="5%"
        baseScale={0.9}
        blurAmount={2}
      >
        <div className="max-w-4xl mx-auto pt-8">
          {projects.map((project, index) => (
            <ScrollStackItem key={project.title}>
              <ProjectCard project={project} index={index} />
            </ScrollStackItem>
          ))}
        </div>
      </ScrollStack>
    </section>
  )
}
