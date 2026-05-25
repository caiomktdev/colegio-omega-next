'use client'

import { Star } from 'lucide-react'
import { TextReveal } from '@/components/motion/TextReveal'
import { FadeInWhenVisible } from '@/components/motion/FadeInWhenVisible'

const TESTIMONIALS = [
  {
    quote: 'Ver meu filho conquistar o que sonhava — aprovação em Medicina na UFJF — trouxe lágrimas de felicidade. A atenção individual do Ômega faz toda a diferença.',
    name: 'Patrícia Oliveira',
    role: 'Mãe do Bernardo, 3º EM',
    initials: 'PO',
    color: '#0586f9',
    rating: 5,
  },
  {
    quote: 'A comunicação com as famílias é transparente e constante. Sempre soubemos exatamente como nossa filha estava evoluindo.',
    name: 'Ricardo Souza',
    role: 'Pai da Larissa, 2º EM',
    initials: 'RS',
    color: '#10b981',
    rating: 5,
  },
  {
    quote: 'A base que recebi no Ômega me preparou para a faculdade e para a vida. Hoje sou engenheira e devolvo o que aprendi.',
    name: 'Fernanda Castro',
    role: 'Ex-aluna, turma 2019',
    initials: 'FC',
    color: '#a855f7',
    rating: 5,
  },
  {
    quote: 'Desde a Educação Infantil, nossa filha se sente acolhida, estimulada e feliz. O ambiente é seguro e inspirador.',
    name: 'Ana & Marcos Lima',
    role: 'Pais da Sofia, 4º ano',
    initials: 'AL',
    color: '#f59e0b',
    rating: 5,
  },
  {
    quote: 'Os laboratórios e projetos de ciências despertaram no meu filho uma paixão que hoje o leva à olimpíada estadual.',
    name: 'Carla Mendes',
    role: 'Mãe do Pedro, 8º ano',
    initials: 'CM',
    color: '#ec4899',
    rating: 5,
  },
  {
    quote: 'Matrícula simples, equipe atenciosa e uma escola que realmente entrega o que promete. Recomendo de olhos fechados.',
    name: 'João Ferreira',
    role: 'Pai do Lucas, 1º EM',
    initials: 'JF',
    color: '#06b6d4',
    rating: 5,
  },
]

function Card({ t }: { t: typeof TESTIMONIALS[number] }) {
  return (
    <div
      className="shrink-0 w-[min(85vw,300px)] sm:w-[320px] md:w-[360px] bg-white rounded-3xl border border-slate-100 p-6 flex flex-col gap-4 mr-4"
      style={{ boxShadow: 'var(--shadow-card-md)' }}
    >
      <div className="flex gap-0.5">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-accent-yellow text-accent-yellow" />
        ))}
      </div>
      <p className="text-slate-text text-sm leading-relaxed flex-1">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-xs font-bold shrink-0"
          style={{ backgroundColor: t.color }}
        >
          {t.initials}
        </div>
        <div>
          <p className="font-semibold text-sm text-slate-dark">{t.name}</p>
          <p className="text-xs text-slate-muted">{t.role}</p>
        </div>
      </div>
    </div>
  )
}

export function Depoimentos() {
  const row1 = [...TESTIMONIALS, ...TESTIMONIALS]
  const row2 = [...[...TESTIMONIALS].reverse(), ...[...TESTIMONIALS].reverse()]

  return (
    <section id="depoimentos" className="section-pad bg-bg-light overflow-hidden">
      <div className="container-omega mb-10 md:mb-14">
        <div className="text-center max-w-2xl mx-auto">
          <FadeInWhenVisible>
            <span className="tag-label text-brand-blue bg-brand-blue-dim border border-blue-200 px-4 py-2 rounded-full inline-block mb-5">
              Histórias de famílias
            </span>
          </FadeInWhenVisible>
          <TextReveal
            text="O que dizem sobre nós"
            as="h2"
            className="heading-lg text-slate-dark justify-center"
            delay={0.1}
          />
          <FadeInWhenVisible delay={0.3}>
            <p className="mt-4 text-slate-text text-base md:text-lg leading-relaxed">
              A confiança das famílias é o nosso maior reconhecimento. Conheça algumas histórias da comunidade Ômega.
            </p>
          </FadeInWhenVisible>
        </div>
      </div>

      <div className="relative mb-5">
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-bg-light to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-bg-light to-transparent z-10 pointer-events-none" />
        <div className="flex overflow-hidden pb-2">
          <div className="flex animate-marquee">
            {row1.map((t, i) => (
              <Card key={`r1-${t.initials}-${i}`} t={t} />
            ))}
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-bg-light to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-bg-light to-transparent z-10 pointer-events-none" />
        <div className="flex overflow-hidden pb-2">
          <div className="flex animate-marquee-reverse">
            {row2.map((t, i) => (
              <Card key={`r2-${t.initials}-${i}`} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
