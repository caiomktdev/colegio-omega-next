'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, type ReactNode } from 'react'
import { EASE_PREMIUM } from '@/lib/motion'
import { cn } from '@/lib/utils'

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: Direction
  once?: boolean
  amount?: number
}

const OFFSETS: Record<Direction, { x: number; y: number }> = {
  up:    { x: 0,   y: 40  },
  down:  { x: 0,   y: -40 },
  left:  { x: 48,  y: 0   },
  right: { x: -48, y: 0   },
  none:  { x: 0,   y: 0   },
}

export function FadeInWhenVisible({
  children,
  className,
  delay = 0,
  duration = 0.75,
  direction = 'up',
  once = true,
  amount = 0.15,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: '-80px' })
  const { x, y } = OFFSETS[direction]

  return (
    <motion.div
      ref={ref}
      className={cn('will-change-transform', className)}
      initial={{ opacity: 0, x, y }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration, delay, ease: EASE_PREMIUM }}
    >
      {children}
    </motion.div>
  )
}
