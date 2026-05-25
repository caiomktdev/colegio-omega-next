'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ParallaxImageProps {
  children: ReactNode
  className?: string
  containerClassName?: string
  speed?: number
  scale?: boolean
}

export function ParallaxImage({
  children,
  className,
  containerClassName,
  speed = 15,
  scale = true,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [`-${speed}%`, `${speed}%`])
  const scaleVal = useTransform(scrollYProgress, [0, 1], [1.12, 1.0])

  return (
    <div ref={ref} className={cn('overflow-hidden', containerClassName)}>
      <motion.div
        className={cn('will-change-transform', className)}
        style={{
          y,
          scale: scale ? scaleVal : undefined,
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
