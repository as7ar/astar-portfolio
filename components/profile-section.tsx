"use client"

import { Github, Linkedin, Twitter, Mail } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "#", label: "Email" },
]

const skills = [
  "React", "TypeScript", "Next.js", "Node.js", "Python", "Java", "Kotlin", "Go"
]

export function ProfileSection() {
  return (
    <section id="profile" className="min-h-screen flex items-center justify-center py-24 px-6">
      <div className="max-w-4xl w-full">
        <h2 className="text-sm font-medium text-primary tracking-widest uppercase mb-8">Profile</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* About */}
          <div className="space-y-6">
            {/* <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
              Building digital experiences with precision and passion.
            </h3>
            
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m a software engineer passionate about crafting clean, 
              performant, and accessible web applications. With a focus on 
              modern technologies and user-centric design, I bring ideas to 
              life through code.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Currently exploring the intersection of AI and web development,
              creating tools that enhance developer productivity and user experiences.
            </p> */}
          </div>

          {/* Skills & Social */}
          <div className="space-y-8">
            {/* Skills */}
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-4 tracking-wide">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-muted text-muted-foreground text-sm rounded-full border border-border/50 hover:border-primary/30 hover:text-foreground transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-4 tracking-wide">Connect</h4>
              <div className="flex gap-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      aria-label={link.label}
                      className="w-10 h-10 rounded-full bg-muted border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
