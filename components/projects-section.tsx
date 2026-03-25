"use client"

import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "AI Dashboard",
    description: "Real-time analytics platform with ML-powered insights and predictive modeling",
    tech: ["Next.js", "Python", "TensorFlow"],
    link: "#"
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack marketplace with payment integration and inventory management",
    tech: ["React", "Node.js", "Stripe"],
    link: "#"
  },
  {
    title: "Design System",
    description: "Comprehensive component library with accessibility-first approach",
    tech: ["TypeScript", "Storybook", "Figma"],
    link: "#"
  },
  {
    title: "Mobile App",
    description: "Cross-platform fitness tracking application with social features",
    tech: ["React Native", "Firebase", "Redux"],
    link: "#"
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-8 md:px-16 max-w-4xl mx-auto">

      {/* Header */}
      <div className="mb-16">
        <span className="text-xs tracking-widest text-primary uppercase">
          Featured Work
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold mt-2">
          Projects
        </h2>
      </div>

      {/* List */}
      <div className="space-y-6">
        {projects.map((project, i) => (
          <a
            key={i}
            href={project.link}
            className="group block border border-black/5 rounded-xl p-6 
            hover:border-black/20 transition-all duration-300"
          >
            <div className="flex items-start justify-between gap-4">

              <div>
                <h3 className="text-lg font-medium group-hover:underline">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition shrink-0" />
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 rounded-md bg-black/5"
                >
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}