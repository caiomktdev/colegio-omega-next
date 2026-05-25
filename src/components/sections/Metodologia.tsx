'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Lightbulb, Gamepad2, Brain, Rocket } from 'lucide-react'
import { VIEWPORT_ONCE, EASE_PREMIUM, scrollRevealContainer, scrollRevealItem } from '@/lib/motion'
import { TextReveal } from '@/components/motion/TextReveal'
import { FadeInWhenVisible } from '@/components/motion/FadeInWhenVisible'

const STEPS = [
  {
    Icon: Lightbulb,
    num: '01',
    title: 'Projetos Autorais',
    desc: 'Alunos desenvolvem projetos reais do início ao fim, aplicando conhecimentos de múltiplas disciplinas em soluções para problemas do mundo.',
  },
  {
    Icon: Gamepad2,
    num: '02',
    title: 'Gamificação',
    desc: 'Trilhas de aprendizado dinâmicas com recompensas, desafios e conquistas que mantêm o engajamento e tornam o aprendizado viciante.',
  },
  {
    Icon: Brain,
    num: '03',
    title: 'Autonomia do Aluno',
    desc: 'Metodologia que coloca o aluno como protagonista da própria jornada, desenvolvendo autoconsciência e gestão da aprendizagem.',
  },
  {
    Icon: Rocket,
    num: '04',
    title: 'Resultado Mensurável',
    desc: 'Avaliações contínuas e portfólios digitais que evidenciam a evolução real de cada aluno ao longo do ano letivo.',
  },
]

function TimelineLine() {
  const ref = useRef<SVGSVGElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div className="hidden lg:block absolute top-[52px] left-0 right-0 z-0 px-[12.5%]">
      <svg ref={ref} className="w-full h-[3px]" viewBox="0 0 100 2" preserveAspectRatio="none">
        <line x1="0" y1="1" x2="100" y2="1" stroke="#E2E8F0" strokeWidth="2" />
        <motion.line
          x1="0" y1="1" x2="100" y2="1"
          stroke="#0586f9"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="100"
          initial={{ strokeDashoffset: 100 }}
          animate={{ strokeDashoffset: inView ? 0 : 100 }}
          transition={{ duration: 1.4, ease: EASE_PREMIUM, delay: 0.3 }}
        />
      </svg>
    </div>
  )
}

export function Metodologia() {
  return (
    <section id="metodologia" className="section-pad bg-bg-light">
      <div className="container-omega">
        <div className="text-center mb-10 md:mb-16 max-w-2xl mx-auto">
          <FadeInWhenVisible>
            <span className="tag-label text-brand-blue bg-brand-blue-dim border border-blue-200 px-4 py-2 rounded-full inline-block mb-5">
              Nosso método
            </span>
          </FadeInWhenVisible>
          <TextReveal
            text="Jornada de aprendizado conectada"
            as="h2"
            className="heading-lg text-slate-dark justify-center"
            delay={0.1}
          />
          <FadeInWhenVisible delay={0.3}>
            <p className="mt-4 md:mt-5 text-slate-text text-base md:text-lg leading-relaxed px-1">
              Como transformamos potencial em excelência ao longo do ano letivo — passo a passo, com intencionalidade e método.
            </p>
          </FadeInWhenVisible>
        </div>

        {/* Timeline */}
        <div className="relative">
          <TimelineLine />

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
            variants={scrollRevealContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
          >
            {STEPS.map((step, i) => {
              const Icon = step.Icon
              return (
                <motion.div
                  key={step.num}
                  variants={scrollRevealItem}
                  className="flex flex-col items-start lg:items-center text-left lg:text-center gap-4"
                >
                  {/* Step number circle */}
                  <div className="relative">
                    <motion.div
                      className="flex items-center justify-center w-[52px] h-[52px] gradient-brand rounded-full text-white font-display font-black text-sm z-10 relative"
                      style={{ boxShadow: '0 0 0 6px #EEF2F7, 0 0 0 8px #e2e8f0' }}
                      whileInView={{ scale: [0.6, 1.1, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.15, ease: EASE_PREMIUM }}
                    >
                      {step.num}
                    </motion.div>
                  </div>

                  {/* Card */}
                  <div className="bg-white rounded-3xl p-6 flex flex-col gap-3 w-full"
                    style={{ boxShadow: 'var(--shadow-card)' }}>
                    <span className="flex items-center justify-center w-10 h-10 bg-brand-blue-dim rounded-2xl self-start lg:self-center">
                      <Icon className="w-5 h-5 text-brand-blue" />
                    </span>
                    <h3 className="font-display font-bold text-base text-slate-dark">{step.title}</h3>
                    <p className="text-slate-text text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Bottom CTA strip */}
        <FadeInWhenVisible delay={0.4} className="mt-14">
          <div className="gradient-brand rounded-4xl p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 relative overflow-hidden text-center md:text-left">
            <div className="absolute -right-16 -top-16 w-64 h-64 bg-white/5 rounded-full pointer-events-none" />
            <div>
              <p className="font-display font-bold text-xl sm:text-2xl text-white">Conheça nossa metodologia completa</p>
              <p className="text-white/70 mt-1 text-sm">Agende uma visita e experimente nosso ambiente de aprendizagem.</p>
            </div>
            <a href="#contato" className="btn-yellow w-full md:w-auto shrink-0 flex items-center justify-center gap-2 text-[15px] px-7 py-4">
              Agendar Visita
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  )
}
