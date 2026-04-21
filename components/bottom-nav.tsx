"use client"

import { User, FolderKanban, FileText } from "lucide-react"

interface BottomNavProps {
  activeSection: string
  onNavigate: (section: string) => void
}

const navItems = [
  { id: "profile", label: "PROFILE", icon: User },
  { id: "projects", label: "PROJECTS", icon: FolderKanban },
  { id: "contact", label: "CONTACT", icon: FileText },
]

export function BottomNav({ activeSection, onNavigate }: BottomNavProps) {
  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 px-4 py-3 bg-card/70 backdrop-blur-xl border border-border/50 rounded-full shadow-lg shadow-primary/5">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeSection === item.id
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300
                ${isActive 
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20" 
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }
              `}
            >
              <Icon className="w-4 h-4" />
              <span className="text-xs font-medium tracking-wide">{item.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
