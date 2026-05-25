'use client'

import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react'
import { TextReveal } from '@/components/motion/TextReveal'
import { FadeInWhenVisible } from '@/components/motion/FadeInWhenVisible'
import { Magnetic } from '@/components/motion/Magnetic'
import { VIEWPORT_ONCE, scrollRevealContainer, scrollRevealItem } from '@/lib/motion'
import { motion } from 'framer-motion'

const CONTACTS = [
  {
    Icon: MapPin,
    title: 'Visite o campus',
    desc: 'Muriaé – Minas Gerais',
    href: '#contato',
    cta: 'Agendar visita',
  },
  {
    Icon: Phone,
    title: 'Ligue para nós',
    desc: '(32) 3722-XXXX',
    href: 'tel:+5532372299999',
    cta: 'Ligar agora',
  },
  {
    Icon: Mail,
    title: 'Envie um e-mail',
    desc: 'contato@colegioomega.com.br',
    href: 'mailto:contato@colegioomega.com.br',
    cta: 'Enviar e-mail',
  },
]

export function FinalCTA() {
  return (
    <section id="contato" className="section-pad gradient-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)', backgroundSize: '22px 22px' }} />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(5,134,249,0.18) 0%, transparent 70%)' }} />

      <div className="container-omega relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <FadeInWhenVisible>
            <span className="tag-label text-white/80 bg-white/8 border border-white/15 px-4 py-2 rounded-full inline-block mb-5">
              Fale conosco
            </span>
          </FadeInWhenVisible>
          <TextReveal
            text="Pronto para começar a jornada?"
            as="h2"
            className="heading-lg text-white justify-center"
            delay={0.1}
          />
          <FadeInWhenVisible delay={0.3}>
            <p className="mt-4 md:mt-5 text-white/65 text-base md:text-lg leading-relaxed">
              Turma 2026 com vagas limitadas. Agende uma visita, tire suas dúvidas ou garanta a matrícula do seu filho.
            </p>
          </FadeInWhenVisible>
        </div>

        <motion.div
          className="grid sm:grid-cols-3 gap-4 md:gap-5 mb-10 md:mb-14"
          variants={scrollRevealContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          {CONTACTS.map((c) => {
            const Icon = c.Icon
            return (
              <motion.a
                key={c.title}
                href={c.href}
                variants={scrollRevealItem}
                className="group flex items-center gap-4 bg-white/6 border border-white/10 rounded-3xl p-5 hover:bg-white/10 hover:border-white/20 transition-colors duration-200"
              >
                <span className="flex items-center justify-center w-11 h-11 rounded-2xl bg-brand-blue/20 text-brand-blue shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </span>
                <div className="min-w-0">
                  <p className="font-display font-bold text-sm text-white">{c.title}</p>
                  <p className="text-xs text-white/55 mt-0.5 truncate">{c.desc}</p>
                  <p className="text-xs font-semibold text-accent-yellow mt-2 group-hover:underline">{c.cta}</p>
                </div>
              </motion.a>
            )
          })}
        </motion.div>

        <FadeInWhenVisible className="text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Magnetic strength={0.3}>
              <a
                href="https://wa.me/5532999999999?text=Olá! Gostaria de agendar uma visita ao Colégio Ômega para 2026."
                target="_blank"
                rel="noreferrer"
                className="btn-yellow text-base px-8 py-4 flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <MessageCircle className="w-4 h-4" />
                Fale no WhatsApp
              </a>
            </Magnetic>
            <a
              href="tel:+5532372299999"
              className="btn-ghost text-base px-8 py-4 !text-white !border-white/20 hover:!bg-white/10 hover:!border-white/30 hover:!text-white w-full sm:w-auto flex items-center justify-center"
            >
              Ligar agora
            </a>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.25} className="mt-12 md:mt-16">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 opacity-50">
            {['27+ anos de história', 'Nota máxima IDEB', '+150 medalhas olímpicas', '94% aprovação nas universidades'].map((t) => (
              <div key={t} className="flex items-center gap-2 text-sm text-white">
                <span className="w-1 h-1 rounded-full bg-accent-yellow" />
                {t}
              </div>
            ))}
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  )
}
