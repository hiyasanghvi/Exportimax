'use client'

import { useEffect, useState } from 'react'

interface AnimatedCounterProps {
  from: number
  to: number
  duration?: number
  suffix?: string
}

export function AnimatedCounter({ from, to, duration = 2000, suffix = '' }: AnimatedCounterProps) {
  const [count, setCount] = useState(from)

  useEffect(() => {
    if (count === to) return

    const steps = 60
    const increment = (to - from) / steps
    const stepDuration = duration / steps
    
    let current = from
    const interval = setInterval(() => {
      current += increment
      if (current >= to) {
        setCount(to)
        clearInterval(interval)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(interval)
  }, [from, to, duration])

  return <>{count}{suffix}</>
}
