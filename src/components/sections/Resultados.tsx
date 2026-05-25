'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { Award } from 'lucide-react'
import { TextReveal } from '@/components/motion/TextReveal'
import { FadeInWhenVisible } from '@/components/motion/FadeInWhenVisible'
import { VIEWPORT_ONCE, scrollRevealContainer, scrollRevealItem } from '@/lib/motion'

function Counter({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) {
  const [val, setVal] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  useEffect(() => {
    if (!inView) return
    const ctrl = animate(0, target, {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setVal(Math.round(v)),
    })
    return ctrl.stop
  }, [inView, target])

  return <span ref={ref}>{prefix}{val.toLocaleString('pt-BR')}{suffix}</span>
}

const METRICS = [
  { counter: <Counter target={94} suffix="%" />, label: 'de aprovação nas principais universidades' },
  { counter: <><Counter target={150} prefix="+" /></>, label: 'medalhas em olimpíadas de conhecimento' },
  { counter: <span className="font-display font-bold text-4xl text-white">Nota máx.</span>, label: 'nos indicadores IDEB e ENEM' },
]

const AWARDS = [
  'Nota máxima IDEB',
  'Top escola Muriaé 2024',
  'Excelência pedagógica',
]

export function Resultados() {
  return (
    <section id="resultados" className="section-pad gradient-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(5,134,249,0.2) 0%, transparent 70%)' }} />

      <div className="container-omega relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <FadeInWhenVisible>
              <span className="tag-label text-brand-blue bg-white/10 border border-white/15 px-4 py-2 rounded-full inline-block mb-5 text-white/90">
                Prêmios e resultados
              </span>
            </FadeInWhenVisible>
            <TextReveal
              text="Excelência comprovada em números"
              as="h2"
              className="heading-lg text-white"
              delay={0.1}
            />
            <FadeInWhenVisible delay={0.3}>
              <p className="mt-5 text-white/70 leading-relaxed max-w-lg">
                Décadas de compromisso com a formação integral de cada aluno. Nossos resultados
                refletem metodologia consistente, corpo docente de referência e acompanhamento
                personalizado em todas as etapas.
              </p>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.4} className="mt-8 flex flex-wrap gap-2">
              {AWARDS.map((a) => (
                <span
                  key={a}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/12 text-sm font-semibold text-white/90"
                >
                  <Award className="w-3.5 h-3.5 text-accent-yellow" />
                  {a}
                </span>
              ))}
            </FadeInWhenVisible>
          </div>

          <motion.div
            className="grid sm:grid-cols-3 lg:grid-cols-1 gap-4"
            variants={scrollRevealContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
          >
            {METRICS.map((m, i) => (
              <motion.div
                key={i}
                variants={scrollRevealItem}
                className="relative bg-white/5 border border-white/10 rounded-4xl p-6 md:p-8 flex flex-col gap-3 overflow-hidden group hover:bg-white/8 transition-colors duration-300"
              >
                <div className="font-display font-black text-4xl md:text-5xl text-white leading-none">
                  {m.counter}
                </div>
                <p className="text-sm text-white/65 leading-relaxed">{m.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
