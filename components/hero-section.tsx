"use client"

import { DecodeText } from "./decode-text"

export function HeroSection() {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Subtle purple glow background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      {/* Main content */}
      <div className="relative z-10 text-center">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-foreground tracking-tight">
          <DecodeText text="<AS7AR/>" delay={300} />
        </h1>
        
        <p className="mt-6 text-muted-foreground text-lg sm:text-xl tracking-wide">
          Software Engineer
        </p>
        
        {/* Subtle accent line */}
        <div className="mt-8 flex justify-center">
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent rounded-full" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
