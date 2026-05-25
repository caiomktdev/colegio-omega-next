'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { EASE_PREMIUM } from '@/lib/motion'
import { cn } from '@/lib/utils'

type As = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div'

interface TextRevealProps {
  text: string
  as?: As
  className?: string
  delay?: number
  stagger?: number
  once?: boolean
}

export function TextReveal({
  text,
  as: Tag = 'div',
  className,
  delay = 0,
  stagger = 0.055,
  once = true,
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once, margin: '-50px' })

  const words = text.split(' ')

  const MotionTag = motion[Tag as keyof typeof motion] as typeof motion.div

  return (
    <MotionTag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn('flex flex-wrap', className)}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden"
          aria-hidden="true"
        >
          <motion.span
            className="inline-block will-change-transform"
            initial={{ y: '115%', opacity: 0 }}
            animate={isInView ? { y: '0%', opacity: 1 } : {}}
            transition={{
              duration: 0.65,
              delay: delay + i * stagger,
              ease: EASE_PREMIUM,
            }}
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </MotionTag>
  )
}
