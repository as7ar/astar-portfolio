"use client"

import { Mail, Github, ExternalLink } from "lucide-react"

const contacts = [
  {
    label: "Email",
    value: "apo2073@outlook.com",
    icon: Mail,
    link: "mailto:apo2073@outlook.com",
  },
  {
    label: "GitHub",
    value: "github.com/as7ar",
    icon: Github,
    link: "https://github.com/as7ar",
  },
  {
    label: "Portfolio",
    value: "astar-portfolio.vercel.app",
    icon: ExternalLink,
    link: "https://astar-portfolio.vercel.app",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-24 px-6 pb-32">
      <div className="max-w-3xl w-full">

        <h2 className="text-sm font-medium text-primary tracking-widest uppercase mb-8">
          Contact
        </h2>

        <div className="space-y-2">
          {contacts.map((item) => {
            const Icon = item.icon

            return (
              <a
                key={item.label}
                href={item.link}
                className="group flex items-center justify-between py-5 border-b border-border/50 hover:border-primary/20 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition" />

                  <div>
                    <p className="text-sm text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="text-base text-foreground">
                      {item.value}
                    </p>
                  </div>
                </div>

                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition" />
              </a>
            )
          })}
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 AS7AR
          </p>
        </div>
      </div>
    </section>
  )
}