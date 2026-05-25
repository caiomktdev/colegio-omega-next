'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ClipboardList, Users, Search, CheckCircle2 } from 'lucide-react'
import { VIEWPORT_ONCE, EASE_PREMIUM, scrollRevealContainer, scrollRevealItem } from '@/lib/motion'
import { TextReveal } from '@/components/motion/TextReveal'
import { FadeInWhenVisible } from '@/components/motion/FadeInWhenVisible'
import { Magnetic } from '@/components/motion/Magnetic'

const STEPS = [
  {
    num: '01',
    Icon: ClipboardList,
    title: 'Inscrição Online',
    desc: 'Preencha o formulário de interesse em nosso portal. Rápido, simples e sem compromisso.',
    cta: 'Iniciar inscrição',
  },
  {
    num: '02',
    Icon: Users,
    title: 'Vivência Pedagógica',
    desc: 'Seu filho visita o colégio, conhece os espaços, professores e experimenta um dia real de aula.',
    cta: null,
  },
  {
    num: '03',
    Icon: Search,
    title: 'Análise de Perfil',
    desc: 'Nossa equipe pedagógica avalia as necessidades e objetivos do aluno para garantir o melhor acolhimento.',
    cta: null,
  },
  {
    num: '04',
    Icon: CheckCircle2,
    title: 'Matrícula Concluída',
    desc: 'Documentação, contrato e boas-vindas à família Ômega! Seu filho já pode começar a jornada.',
    cta: null,
  },
]

function StepLine() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div ref={ref} className="hidden md:flex absolute top-[52px] left-0 right-0 items-center px-[calc(12.5%+26px)] z-0">
      {[0,1,2].map((i) => (
        <motion.div
          key={i}
          className="h-[2px] flex-1 bg-brand-blue origin-left"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.4 + i * 0.25, ease: EASE_PREMIUM }}
        />
      ))}
    </div>
  )
}

export function Jornada() {
  return (
    <section id="matriculas" className="section-pad bg-bg-light">
      <div className="container-omega">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16 max-w-xl mx-auto">
          <FadeInWhenVisible>
            <span className="tag-label text-brand-blue bg-brand-blue-dim border border-blue-200 px-4 py-2 rounded-full inline-block mb-5">
              Matrículas 2026
            </span>
          </FadeInWhenVisible>
          <TextReveal
            text="Como fazer parte do Ômega"
            as="h2"
            className="heading-lg text-slate-dark justify-center"
            delay={0.1}
          />
          <FadeInWhenVisible delay={0.3}>
            <p className="mt-4 md:mt-5 text-slate-text text-base md:text-lg leading-relaxed px-1">
              Quatro passos simples para iniciar uma jornada de excelência que vai transformar o futuro do seu filho.
            </p>
          </FadeInWhenVisible>
        </div>

        {/* Steps */}
        <div className="relative">
          <StepLine />

          <motion.div
            className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 relative z-10"
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
                  className="flex flex-col items-center text-center gap-4"
                >
                  {/* Step circle */}
                  <motion.div
                    className="relative flex items-center justify-center w-[52px] h-[52px] gradient-brand rounded-full text-white font-display font-black text-sm z-10 shrink-0"
                    style={{ boxShadow: '0 0 0 6px #EEF2F7, 0 0 0 8px rgba(5,134,249,0.15)' }}
                    whileInView={{ scale: [0.5, 1.15, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.15, ease: EASE_PREMIUM }}
                  >
                    {step.num}
                  </motion.div>

                  {/* Card */}
                  <div className="bg-white rounded-3xl p-5 w-full flex flex-col gap-3 flex-1"
                    style={{ boxShadow: 'var(--shadow-card)' }}>
                    <span className="flex items-center justify-center w-10 h-10 bg-brand-blue-dim rounded-2xl mx-auto">
                      <Icon className="w-5 h-5 text-brand-blue" />
                    </span>
                    <h3 className="font-display font-bold text-[15px] text-slate-dark">{step.title}</h3>
                    <p className="text-slate-text text-sm leading-relaxed">{step.desc}</p>
                    {step.cta && (
                      <a href="#contato" className="mt-2 text-xs font-bold text-brand-blue hover:underline">
                        → {step.cta}
                      </a>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <FadeInWhenVisible delay={0.5} className="mt-14 text-center">
          <p className="text-slate-text text-base mb-6">
            Pronto para dar o primeiro passo? Entre em contato com nossa equipe de matrículas.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Magnetic strength={0.25}>
              <a href="#contato" className="btn-yellow text-base px-8 py-4 flex items-center gap-2 w-full sm:w-auto justify-center">
                Iniciar Matrícula Online
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </Magnetic>
            <a href="tel:+5532372299999" className="btn-ghost w-full sm:w-auto text-base px-8 py-4 flex items-center justify-center">
              Ligar agora
            </a>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  )
}
