import type { Variants, Transition, TargetAndTransition } from 'framer-motion'

// ─── Easing Presets ───────────────────────────────────────────────────────────

export const EASE_PREMIUM   = [0.16, 1, 0.3, 1] as const
export const EASE_OUT_EXPO  = [0.19, 1, 0.22, 1] as const
export const EASE_IN_CIRCLE = [0.785, 0.135, 0.15, 0.86] as const

// ─── Spring Presets ───────────────────────────────────────────────────────────

export const SPRING_SNAPPY: Transition = {
  type: 'spring', stiffness: 500, damping: 40, mass: 0.8,
}

export const SPRING_SOFT: Transition = {
  type: 'spring', stiffness: 100, damping: 20, mass: 1,
}

export const SPRING_MAGNETIC: Transition = {
  type: 'spring', stiffness: 150, damping: 15, mass: 0.1,
}

// ─── Page / Hero entrance: y:40→0 with stagger ───────────────────────────────

export const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13, delayChildren: 0.2 },
  },
}

export const heroItem: Variants = {
  hidden:  { opacity: 0, y: 40 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.85, ease: EASE_PREMIUM },
  },
}

// ─── Scroll-reveal: y:20→0 ───────────────────────────────────────────────────

export const scrollRevealContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}

export const scrollRevealItem: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: EASE_PREMIUM },
  },
}

// ─── Word-by-word text reveal ─────────────────────────────────────────────────

export const wordContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.055, delayChildren: 0 },
  },
}

export const wordItem: Variants = {
  hidden:  { y: '110%', opacity: 0 },
  visible: {
    y: '0%', opacity: 1,
    transition: { duration: 0.65, ease: EASE_PREMIUM },
  },
}

// ─── Scale-in ────────────────────────────────────────────────────────────────

export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1, scale: 1,
    transition: { duration: 0.6, ease: EASE_PREMIUM },
  },
}

// ─── Slide from sides ────────────────────────────────────────────────────────

export const slideLeft: Variants = {
  hidden:  { opacity: 0, x: -48 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.8, ease: EASE_PREMIUM },
  },
}

export const slideRight: Variants = {
  hidden:  { opacity: 0, x: 48 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.8, ease: EASE_PREMIUM },
  },
}

// ─── Parallax image ──────────────────────────────────────────────────────────

export const parallaxImg: TargetAndTransition = {
  scale: 1.12,
}

// ─── Card hover ──────────────────────────────────────────────────────────────

export const cardHover = {
  whileHover: { y: -6, scale: 1.02, transition: SPRING_SNAPPY },
  whileTap:   { scale: 0.98, transition: SPRING_SNAPPY },
}

// ─── Viewport defaults ────────────────────────────────────────────────────────

export const VIEWPORT_ONCE = { once: true, margin: '-80px' } as const
export const VIEWPORT_EAGER = { once: true, margin: '-40px' } as const
