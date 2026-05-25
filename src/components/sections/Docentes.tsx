'use client'

import { motion } from 'framer-motion'
import { VIEWPORT_ONCE, scrollRevealContainer, scrollRevealItem, SPRING_SNAPPY } from '@/lib/motion'
import { TextReveal } from '@/components/motion/TextReveal'
import { FadeInWhenVisible } from '@/components/motion/FadeInWhenVisible'

const FACULTY = [
  { name: 'Ana Beatriz Silveira', role: 'Coord. Pedagógica',     area: 'Especialista em Metodologias Ativas e Educação Socioemocional',          initials: 'AB', gradient: 'from-brand-blue to-blue-600' },
  { name: 'Marcos Antônio Lima',  role: 'Prof. de Matemática',   area: 'Mestre em Matemática Aplicada — UFRJ. Orientador de olimpíadas.',        initials: 'ML', gradient: 'from-purple-500 to-violet-700' },
  { name: 'Renata Figueiredo',    role: 'Prof. de Ciências',     area: 'Doutora em Biologia Molecular — UFMG. Mentora científica.',               initials: 'RF', gradient: 'from-emerald-500 to-teal-600' },
  { name: 'João Carlos Mendes',   role: 'Prof. de Redação',      area: 'Especialista em Linguagem e Literatura — UFJF. +200 aprovações FUVEST.', initials: 'JM', gradient: 'from-rose-500 to-pink-600' },
  { name: 'Patrícia Oliveira',    role: 'Psicopedagoga',         area: 'Mestra em Psicologia Educacional. Referência em desenvolvimento cognitivo.', initials: 'PO', gradient: 'from-amber-500 to-orange-500' },
  { name: 'Lucas Rodrigues',      role: 'Prof. de Tecnologia',   area: 'Engenheiro de Software — USP. Fundador de startup EdTech premiada.',       initials: 'LR', gradient: 'from-cyan-500 to-blue-600' },
]

export function Docentes() {
  return (
    <section id="docentes" className="section-pad bg-white">
      <div className="container-omega">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14 max-w-2xl mx-auto">
          <FadeInWhenVisible>
            <span className="tag-label text-brand-blue bg-brand-blue-dim border border-blue-200 px-4 py-2 rounded-full inline-block mb-5">
              Corpo Docente
            </span>
          </FadeInWhenVisible>
          <TextReveal
            text="Mentes que Guiam Mentes"
            as="h2"
            className="heading-lg text-slate-dark justify-center"
            delay={0.1}
          />
          <FadeInWhenVisible delay={0.3}>
            <p className="mt-4 md:mt-5 text-slate-text text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-1">
              Educadores especialistas, mestres e mentores apaixonados por transformar vidas e impulsionar carreiras.
            </p>
          </FadeInWhenVisible>
        </div>

        {/* Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={scrollRevealContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          {FACULTY.map((f) => (
            <motion.div
              key={f.name}
              variants={scrollRevealItem}
              className="group bg-white rounded-4xl border border-slate-100 p-6 flex gap-4 items-start hover:border-blue-200 transition-colors duration-300"
              style={{ boxShadow: 'var(--shadow-card)' }}
              whileHover={{ y: -4, boxShadow: 'var(--shadow-card-md)', transition: SPRING_SNAPPY }}
            >
              {/* Avatar */}
              <div className={`flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${f.gradient} text-white font-display font-bold text-lg shrink-0`}>
                {f.initials}
              </div>

              {/* Info */}
              <div className="flex flex-col gap-1 min-w-0">
                <p className="font-display font-bold text-[15px] text-slate-dark leading-tight">{f.name}</p>
                <p className="text-xs font-semibold text-brand-blue">{f.role}</p>
                <p className="text-xs text-slate-muted leading-relaxed mt-1 line-clamp-2 group-hover:line-clamp-none transition-all duration-200">{f.area}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stat row */}
        <FadeInWhenVisible delay={0.3} className="mt-10">
          <div className="grid grid-cols-1 min-[360px]:grid-cols-3 gap-4 sm:gap-5 p-5 sm:p-6 bg-bg-light rounded-4xl border border-slate-100">
            {[
              { n: '100%', label: 'com pós-graduação' },
              { n: '12+', label: 'anos de experiência média' },
              { n: '98%', label: 'aprovação dos pais' },
            ].map(({ n, label }) => (
              <div key={label} className="flex flex-col items-center text-center gap-1 py-2 min-[360px]:py-0 border-b min-[360px]:border-b-0 border-slate-100 last:border-0 min-[360px]:last:border-0">
                <span className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-brand-blue">{n}</span>
                <span className="text-[11px] sm:text-xs text-slate-muted max-w-[140px]">{label}</span>
              </div>
            ))}
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  )
}
