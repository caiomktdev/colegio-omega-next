'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Trophy, GraduationCap, BookOpen } from 'lucide-react'
import { heroContainer, heroItem, EASE_PREMIUM } from '@/lib/motion'
import { Magnetic } from '@/components/motion/Magnetic'
import { HeroTrail } from '@/components/sections/HeroTrail'

const HERO_VIDEO = '/logo/video-hero/hero.mp4'

const FLOATING_ICONS = [
  {
    Icon: Trophy,
    label: 'Excelência',
    position: 'top-6 -right-3',
    bg: 'bg-accent-yellow text-slate-dark',
    delay: 0,
    duration: 3.2,
  },
  {
    Icon: GraduationCap,
    label: 'Formação',
    position: 'top-[42%] -left-5',
    bg: 'gradient-brand text-white',
    delay: 0.4,
    duration: 3.8,
  },
  {
    Icon: BookOpen,
    label: 'Aprendizado',
    position: 'bottom-4 right-4',
    bg: 'bg-emerald-500 text-white',
    delay: 0.8,
    duration: 3.5,
  },
] as const

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center overflow-hidden pt-20 sm:pt-24 md:pt-28"
      style={{ background: 'linear-gradient(145deg, #ffffff 0%, #F5F7FA 45%, #EEF2F7 100%)' }}
    >
      <div className="absolute -top-40 -right-20 sm:right-0 w-[min(700px,120vw)] h-[min(700px,120vw)] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(5,134,249,0.14) 0%, transparent 65%)' }} />
      <div className="absolute bottom-0 -left-20 sm:-left-40 w-[min(500px,100vw)] h-[min(500px,100vw)] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,212,59,0.12) 0%, transparent 70%)' }} />
      <div className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.08) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
      <HeroTrail />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/25 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="container-omega relative z-10 w-full py-10 sm:py-16 lg:py-24">
        <div className="grid grid-cols-12 gap-5 sm:gap-6 xl:gap-12 items-start">

          {/* Texto + CTAs — define a altura da linha no desktop */}
          <motion.div
            className="col-span-12 lg:col-span-7 lg:row-start-1 flex flex-col gap-5 sm:gap-7"
            variants={heroContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={heroItem}>
              <span className="badge-gradient-border gradient-flow-bg shadow-card">
                <span className="badge-gradient-border-inner">
                  <span className="text-sm leading-none" aria-hidden>💙</span>
                  Excelência em cada detalhe
                </span>
              </span>
            </motion.div>

            <motion.h1
              variants={heroItem}
              className="font-display font-black tracking-tight text-slate-dark leading-[1.08] text-[1.875rem] min-[400px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Formando alunos{' '}
              <span className="text-gradient-blue">preparados</span>{' '}
              para conquistar qualquer futuro.
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="text-sm md:text-base text-slate-text leading-relaxed max-w-[500px]"
            >
              Uma proposta pedagógica inovadora que combina alta performance acadêmica,
              inteligência emocional e acolhimento estruturado para impulsionar o
              potencial do seu filho.
            </motion.p>

            <motion.div variants={heroItem} className="flex flex-row items-center gap-2 w-full sm:w-auto">
              <Magnetic strength={0.25} className="flex-1 sm:flex-initial">
                <a
                  href="#contato"
                  className="btn-yellow flex items-center justify-center gap-1.5 text-[11px] min-[360px]:text-xs min-[400px]:text-sm sm:text-base px-2.5 min-[360px]:px-4 sm:px-7 py-3 sm:py-4 w-full sm:w-auto font-bold text-center"
                >
                  Agende uma Visita <ArrowRight className="w-3 h-3 min-[360px]:w-4 min-[360px]:h-4 shrink-0" />
                </a>
              </Magnetic>
              <a
                href="#matriculas"
                className="btn-ghost flex-1 sm:flex-initial flex items-center justify-center text-[11px] min-[360px]:text-xs min-[400px]:text-sm sm:text-base px-2.5 min-[360px]:px-4 sm:px-7 py-3 sm:py-4 w-full sm:w-auto font-bold text-center border-slate-300 hover:border-brand-blue"
              >
                Conheça as Matrículas
              </a>
            </motion.div>
          </motion.div>

          {/* Vídeo — mesma linha do texto; altura limitada pelos botões */}
          <motion.div
            className="hidden lg:flex lg:col-span-5 lg:row-start-1 relative self-stretch min-h-0"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: EASE_PREMIUM, delay: 0.35 }}
          >
            <div className="relative mx-auto w-full max-w-[400px] h-full min-h-[280px]">
              <div className="relative h-full w-full rounded-[2rem] overflow-hidden border border-slate-200/80 shadow-card-lg bg-slate-100">
                <video
                  src={HERO_VIDEO}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  aria-label="Colégio Ômega em ação"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/15 via-transparent to-brand-blue/5 pointer-events-none" />
              </div>

              {FLOATING_ICONS.map(({ Icon, label, position, bg, delay, duration }) => (
                <motion.div
                  key={label}
                  className={`absolute ${position} z-10 flex flex-col items-center gap-1.5`}
                  animate={{ y: [0, -14, 0] }}
                  transition={{
                    duration,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay,
                  }}
                >
                  <span
                    className={`flex items-center justify-center w-12 h-12 rounded-2xl shadow-card-lg border-2 border-white ${bg}`}
                  >
                    <Icon className="w-5 h-5" strokeWidth={2.2} />
                  </span>
                  <span className="text-[10px] font-bold text-slate-dark bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full shadow-card">
                    {label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="col-span-12 lg:hidden grid grid-cols-2 gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: EASE_PREMIUM }}
          >
            <div
              className="col-span-2 rounded-3xl p-5 border border-blue-200/80 bg-white"
              style={{ background: 'linear-gradient(135deg, #ffffff 0%, #e8f3ff 100%)', boxShadow: 'var(--shadow-card-md)' }}
            >
              <p className="text-[10px] font-bold text-brand-blue uppercase tracking-widest mb-1.5">Matrículas 2026</p>
              <p className="font-display font-bold text-xl text-slate-dark mb-3">Inscrições abertas!</p>
              <a href="#contato" className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-blue">
                Garantir vaga <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="rounded-2xl p-4 border border-slate-100 bg-white" style={{ boxShadow: 'var(--shadow-card)' }}>
              <p className="font-display font-black text-3xl text-slate-dark">27+</p>
              <p className="text-[11px] text-slate-muted mt-1">anos de excelência</p>
            </div>
            <div className="rounded-2xl p-4 border border-slate-100 bg-white" style={{ boxShadow: 'var(--shadow-card)' }}>
              <p className="font-display font-black text-3xl text-slate-dark">94%</p>
              <p className="text-[11px] text-slate-muted mt-1">aprovação nas universidades</p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
      >
        <span className="text-[9px] font-bold tracking-[0.15em] uppercase text-slate-muted">Role</span>
        <div className="w-5 h-8 border-[1.5px] border-slate-300 rounded-full flex items-start justify-center pt-1.5">
          <motion.div
            className="w-1 h-1.5 bg-brand-blue rounded-full"
            animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  )
}
