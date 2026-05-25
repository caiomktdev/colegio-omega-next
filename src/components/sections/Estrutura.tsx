'use client'

import { motion } from 'framer-motion'
import { FlaskConical, Dumbbell, Library, TreePine, ArrowRight } from 'lucide-react'
import { VIEWPORT_ONCE, scrollRevealContainer, scrollRevealItem, SPRING_SNAPPY } from '@/lib/motion'
import { TextReveal } from '@/components/motion/TextReveal'
import { FadeInWhenVisible } from '@/components/motion/FadeInWhenVisible'

const SPACES = [
  {
    Icon: FlaskConical,
    title: 'Laboratórios de Última Geração',
    desc: 'Espaços equipados com tecnologia de ponta para experimentos práticos em Ciências, Robótica e Computação.',
    tag: 'Ciência & Tech',
    gradient: 'from-brand-blue to-blue-700',
    stat: '4 labs',
  },
  {
    Icon: Dumbbell,
    title: 'Complexo Esportivo de Alta Performance',
    desc: 'Quadra poliesportiva coberta, piscina semiolímpica, pista de atletismo e academia equipada.',
    tag: 'Esportes',
    gradient: 'from-emerald-500 to-teal-600',
    stat: '3.200m²',
  },
  {
    Icon: Library,
    title: 'Biblioteca e Espaço de Cocriação',
    desc: 'Acervo com mais de 12.000 títulos, salas de leitura silenciosa, pods de estudo colaborativo e maker space.',
    tag: 'Conhecimento',
    gradient: 'from-purple-500 to-violet-700',
    stat: '+12k livros',
  },
  {
    Icon: TreePine,
    title: 'Áreas Verdes de Convivência',
    desc: 'Jardins projetados, horta pedagógica, anfiteatro ao ar livre e espaços de descanso e contemplação.',
    tag: 'Bem-estar',
    gradient: 'from-amber-500 to-orange-600',
    stat: '5.000m²',
  },
]

export function Estrutura() {
  return (
    <section id="estrutura" className="section-pad bg-white overflow-hidden">
      <div className="container-omega">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 sm:gap-6 mb-8 md:mb-12">
          <div className="max-w-xl">
            <FadeInWhenVisible>
              <span className="tag-label text-brand-blue bg-brand-blue-dim border border-blue-200 px-4 py-2 rounded-full inline-block mb-5">
                Estrutura Premium
              </span>
            </FadeInWhenVisible>
            <TextReveal
              text="Onde o Futuro Acontece"
              as="h2"
              className="heading-lg text-slate-dark"
              delay={0.1}
            />
            <FadeInWhenVisible delay={0.3}>
              <p className="mt-4 text-slate-text leading-relaxed">
                Explore nossos espaços projetados para inspirar criatividade, foco e alto desempenho.
              </p>
            </FadeInWhenVisible>
          </div>
          <FadeInWhenVisible delay={0.2} direction="left">
            <a href="#contato" className="btn-ghost w-full sm:w-auto shrink-0 flex items-center justify-center gap-2">
              Agende uma visita <ArrowRight className="w-4 h-4" />
            </a>
          </FadeInWhenVisible>
        </div>

        {/* Cards grid — asymmetric */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={scrollRevealContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          {SPACES.map((space, i) => {
            const Icon = space.Icon
            return (
              <motion.div
                key={space.title}
                variants={scrollRevealItem}
                className={`group relative rounded-4xl overflow-hidden flex flex-col cursor-pointer ${i === 0 ? 'sm:col-span-2 lg:col-span-1 lg:row-span-2 lg:min-h-[360px] min-h-[240px]' : 'min-h-[200px] sm:min-h-[220px]'}`}
                whileHover={{ y: -6, transition: SPRING_SNAPPY }}
              >
                {/* Gradient bg */}
                <div className={`absolute inset-0 bg-gradient-to-br ${space.gradient} transition-transform duration-700 group-hover:scale-105`} />

                {/* Noise texture */}
                <div className="absolute inset-0 opacity-[0.06]"
                  style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '18px 18px' }} />

                {/* Content */}
                <div className="relative flex flex-col justify-between h-full p-6 z-10">
                  <div className="flex items-start justify-between">
                    <span className="flex items-center justify-center w-11 h-11 bg-white/20 rounded-2xl">
                      <Icon className="w-5 h-5 text-white" />
                    </span>
                    <span className="text-[11px] font-bold text-white/60 bg-white/10 px-2.5 py-1 rounded-full">
                      {space.tag}
                    </span>
                  </div>

                  <div>
                    <p className="font-display font-black text-3xl text-white/30 mb-2">{space.stat}</p>
                    <h3 className="font-display font-bold text-lg text-white leading-snug mb-2">{space.title}</h3>
                    <p className="text-white/65 text-sm leading-relaxed hidden group-hover:block transition-all">{space.desc}</p>
                    <p className="text-white/65 text-sm leading-relaxed line-clamp-2 group-hover:hidden">{space.desc}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
