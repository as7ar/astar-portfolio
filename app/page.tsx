"use client"

import { useState, useEffect } from "react"
import { HeroSection } from "@/components/hero-section"
import { ProfileSection } from "@/components/profile-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContentSection } from "@/components/content-section"
import { BottomNav } from "@/components/bottom-nav"

export default function Home() {
  const [activeSection, setActiveSection] = useState("profile")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["profile", "projects", "content"]
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavigate = (section: string) => {
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main className="relative">
      <HeroSection />
      <ProfileSection />
      <ProjectsSection />
      <ContentSection />
      <BottomNav activeSection={activeSection} onNavigate={handleNavigate} />
    </main>
  )
}
