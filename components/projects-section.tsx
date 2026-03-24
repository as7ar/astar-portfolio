"use client"

import React, { useLayoutEffect, useRef, useCallback } from 'react'
import type { ReactNode } from 'react'
import Lenis from 'lenis'

export interface ScrollStackItemProps {
  itemClassName?: string
  children: ReactNode
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ children, itemClassName = '' }) => (
  <div
    className={`scroll-stack-card relative w-full h-80 my-8 p-12 rounded-[40px] shadow-[0_0_30px_rgba(0,0,0,0.1)] box-border origin-top will-change-transform ${itemClassName}`.trim()}
    style={{
      backfaceVisibility: 'hidden',
      transformStyle: 'preserve-3d'
    }}
  >
    {children}
  </div>
)

interface ScrollStackProps {
  className?: string
  children: ReactNode
  itemDistance?: number
  itemScale?: number
  itemStackDistance?: number
  baseScale?: number
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  baseScale = 0.85
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number | null>(null)
  const lenisRef = useRef<Lenis | null>(null)
  const cardsRef = useRef<HTMLElement[]>([])

  const getScrollTop = () => window.scrollY
  const getViewportHeight = () => window.innerHeight

  const getOffset = (el: HTMLElement) => {
    const rect = el.getBoundingClientRect()
    return rect.top + window.scrollY
  }

  const update = useCallback(() => {
    if (!cardsRef.current.length) return

    const scrollTop = getScrollTop()
    const vh = getViewportHeight()

    cardsRef.current.forEach((card, i) => {
      const top = getOffset(card)
      const trigger = top - vh * 0.2 - itemStackDistance * i

      let progress = 0
      if (scrollTop > trigger) {
        progress = Math.min(1, (scrollTop - trigger) / vh)
      }

      const scale = 1 - progress * (1 - (baseScale + i * itemScale))
      const translateY = progress * itemStackDistance * i

      card.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`
    })
  }, [itemScale, itemStackDistance, baseScale])

  useLayoutEffect(() => {
    const cards = Array.from(
      document.querySelectorAll('.scroll-stack-card')
    ) as HTMLElement[]

    if (!cards.length) return

    cardsRef.current = cards

    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`
      }
    })

    const lenis = new Lenis({
      duration: 1.2,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    })

    lenis.on('scroll', update)

    const raf = (time: number) => {
      lenis.raf(time)
      animationFrameRef.current = requestAnimationFrame(raf)
    }

    animationFrameRef.current = requestAnimationFrame(raf)
    lenisRef.current = lenis

    update()

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      lenis.destroy()
      cardsRef.current = []
    }
  }, [update, itemDistance])

  return (
    <div ref={scrollerRef} className={`w-full ${className}`}>
      <div className="pt-[20vh] px-20 pb-[50rem] min-h-screen">
        {children}
      </div>
    </div>
  )
}

export default ScrollStack