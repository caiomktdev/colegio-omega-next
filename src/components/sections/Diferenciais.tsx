'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Globe2, LineChart, ArrowRight } from 'lucide-react'
import { scrollRevealContainer, scrollRevealItem, VIEWPORT_ONCE, SPRING_SNAPPY } from '@/lib/motion'
import { TextReveal } from '@/components/motion/TextReveal'
import { FadeInWhenVisible } from '@/components/motion/FadeInWhenVisible'

const PILLARS = [
  {
    Icon: GraduationCap,
    title: 'Educação de classe mundial',
    desc: 'Aprendizado premium com especialistas e professores qualificados, em um ambiente inovador e com excelente custo-benefício.',
    gradient: 'from-brand-blue to-blue-700',
    accent: 'text-brand-blue',
  },
  {
    Icon: Globe2,
    title: 'Visão global, raízes locais',
    desc: 'Currículo que desenvolve competências internacionais respeitando a realidade e a cultura de Muriaé e do Brasil.',
    gradient: 'from-emerald-500 to-teal-600',
    accent: 'text-emerald-600',
  },
  {
    Icon: LineChart,
    title: 'Acompanhamento constante',
    desc: 'Cada aluno é monitorado de perto e as famílias são informadas sobre a evolução acadêmica e socioemocional.',
    gradient: 'from-amber-500 to-orange-600',
    accent: 'text-amber-600',
  },
]

export function Diferenciais() {
  return (
    <section id="sobre" className="section-pad bg-white">
      <div className="container-omega">
        <div className="text-center mb-10 md:mb-16 max-w-2xl mx-auto">
          <FadeInWhenVisible>
            <span className="tag-label text-brand-blue bg-brand-blue-dim border border-blue-200 px-4 py-2 rounded-full inline-block mb-5">
              Nossos pilares
            </span>
          </FadeInWhenVisible>
          <TextReveal
            text="Por que escolher o Ômega"
            as="h2"
            className="heading-lg text-slate-dark justify-center"
            delay={0.1}
          />
          <FadeInWhenVisible delay={0.3}>
            <p className="mt-4 md:mt-5 text-slate-text text-base md:text-lg leading-relaxed px-1">
              Três pilares que sustentam nossa proposta pedagógica e garantem uma formação completa para o futuro do seu filho.
            </p>
          </FadeInWhenVisible>
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-5 lg:gap-6"
          variants={scrollRevealContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          {PILLARS.map((p) => {
            const Icon = p.Icon
            return (
              <motion.div
                key={p.title}
                variants={scrollRevealItem}
                className="group relative bg-white rounded-[1.75rem] border border-slate-100 overflow-hidden flex flex-col min-h-[300px]"
                style={{ boxShadow: 'var(--shadow-card)' }}
                whileHover={{ y: -6, transition: SPRING_SNAPPY }}
              >
                <div className={`h-2 bg-gradient-to-r ${p.gradient}`} />
                <div className="p-7 md:p-8 flex flex-col gap-5 flex-1">
                  <span className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${p.gradient} text-white`}>
                    <Icon className="w-7 h-7" strokeWidth={1.75} />
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-xl text-slate-dark leading-snug mb-3">
                      {p.title}
                    </h3>
                    <p className="text-slate-text text-sm leading-relaxed">{p.desc}</p>
                  </div>
                  <button
                    type="button"
                    className={`flex items-center gap-1.5 text-sm font-semibold ${p.accent} group-hover:gap-3 transition-all duration-200`}
                  >
                    Saiba mais <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
