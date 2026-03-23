"use client"

import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Neural Canvas",
    description: "AI-powered design tool for generative art creation",
    tags: ["Next.js", "AI SDK", "Canvas API"],
    link: "#",
  },
  {
    title: "DevFlow",
    description: "Streamlined workflow automation for development teams",
    tags: ["TypeScript", "Node.js", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Synthwave UI",
    description: "Modern component library with retro aesthetics",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    link: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-24 px-6">
      <div className="max-w-4xl w-full">
        <h2 className="text-sm font-medium text-primary tracking-widest uppercase mb-8">Projects</h2>
        
        <div className="space-y-6">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.link}
              className="group block p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs text-muted-foreground font-mono">0{index + 1}</span>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-xs px-2.5 py-1 bg-muted text-muted-foreground rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
