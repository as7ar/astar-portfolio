"use client"

import { useEffect, useState, useCallback } from "react"

interface DecodeTextProps {
  text: string
  className?: string
  delay?: number
}

const characters = "!@#$%^&*()_+-=[]{}|;:',.<>?/\\~`"

export function DecodeText({ text, className = "", delay = 0 }: DecodeTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [isAnimating, setIsAnimating] = useState(false)

  const scrambleText = useCallback((
    finalText: string,
    currentIndex: number,
    iterations: number
  ): string => {
    return finalText
      .split("")
      .map((char, idx) => {
        if (char === " ") return " "
        if (idx < currentIndex) return char
        return characters[Math.floor(Math.random() * characters.length)]
      })
      .join("")
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(true)
      let currentIndex = 0
      const totalLength = text.length
      
      // Initial scramble
      setDisplayText(scrambleText(text, -1, 0))
      
      const interval = setInterval(() => {
        if (currentIndex <= totalLength) {
          setDisplayText(scrambleText(text, currentIndex, 0))
          currentIndex++
        } else {
          clearInterval(interval)
          setDisplayText(text)
        }
      }, 50)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timeout)
  }, [text, delay, scrambleText])

  return (
    <span 
      className={`inline-block ${className}`}
      style={{ 
        opacity: isAnimating ? 1 : 0,
        transition: "opacity 0.3s ease-in-out"
      }}
    >
      {displayText}
    </span>
  )
}
