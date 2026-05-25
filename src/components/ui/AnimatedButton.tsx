'use client'

import type { ReactNode } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { EASE_PREMIUM } from '@/lib/motion'
import { cn } from '@/lib/utils'

type AnimatedButtonProps = HTMLMotionProps<'button'> & {
  children: ReactNode
}

export function AnimatedButton({
  children,
  className,
  initial = { opacity: 0, y: 20 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.5, ease: EASE_PREMIUM },
  whileHover = { scale: 1.05 },
  whileTap = { scale: 0.95 },
  ...props
}: AnimatedButtonProps) {
  return (
    <motion.button
      type="button"
      initial={initial}
      animate={animate}
      transition={transition}
      whileHover={whileHover}
      whileTap={whileTap}
      className={cn(
        'px-6 py-3 bg-brand-blue text-white font-medium rounded-lg shadow-md hover:bg-brand-blue-dark transition-colors cursor-pointer',
        className,
      )}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default AnimatedButton
