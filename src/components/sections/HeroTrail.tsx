const TRAIL_PATH_LEFT =
  'M 72 0 C 232 168 56 312 208 488 C 360 664 80 808 216 1000'

/** Trilha direita — mais torta, espelhada no eixo X (viewBox 400) */
const TRAIL_PATH_RIGHT =
  'M 336 0 C 100 95 382 205 90 295 C 15 385 392 495 105 585 C 28 675 388 785 115 875 C 42 965 358 1000 202 1000'

const TRAIL_BASE = {
  stroke: 'rgba(148, 163, 184, 0.1)',
  strokeWidth: 40,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

const TRAIL_SNAKE = {
  stroke: 'rgba(148, 163, 184, 0.22)',
  strokeWidth: 40,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

/** Trilha decorativa de fundo — referência Severna */
export function HeroTrail() {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden>
      <svg
        className="absolute top-0 left-0 h-[115%] w-[min(520px,55vw)] max-w-[520px]"
        viewBox="0 0 400 1000"
        fill="none"
        preserveAspectRatio="xMinYMin slice"
      >
        <path d={TRAIL_PATH_LEFT} {...TRAIL_BASE} />
        <path d={TRAIL_PATH_LEFT} pathLength={1000} className="hero-trail-path" {...TRAIL_SNAKE} />
      </svg>
      <svg
        className="absolute top-0 right-0 h-[115%] w-[min(520px,55vw)] max-w-[520px]"
        viewBox="0 0 400 1000"
        fill="none"
        preserveAspectRatio="xMaxYMin slice"
      >
        <path d={TRAIL_PATH_RIGHT} {...TRAIL_BASE} />
        <path
          d={TRAIL_PATH_RIGHT}
          pathLength={1000}
          className="hero-trail-path hero-trail-path--reverse"
          {...TRAIL_SNAKE}
        />
      </svg>
    </div>
  )
}
