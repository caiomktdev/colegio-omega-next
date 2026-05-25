'use client'

import { motion } from 'framer-motion'
import { Heart, MessageCircle } from 'lucide-react'
import { SPRING_SNAPPY } from '@/lib/motion'
import { TextReveal } from '@/components/motion/TextReveal'
import { FadeInWhenVisible } from '@/components/motion/FadeInWhenVisible'

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  )
}

const POSTS = [
  { caption: 'Feira de Ciências 2025 🔬 Projetos incríveis dos nossos alunos do Ensino Médio!', likes: '1.2k', comments: '84', gradient: 'from-[#0586f9] to-blue-700' },
  { caption: 'Campeonato Esportivo Intercolegial 🏆 Bronze no basquete, ouro nos nossos corações!', likes: '987', comments: '61', gradient: 'from-emerald-500 to-teal-600' },
  { caption: 'Formatura da turma 2025 🎓 Parabéns a todos que chegaram até aqui!', likes: '3.4k', comments: '217', gradient: 'from-purple-500 to-pink-600' },
  { caption: 'Olimpíada de Matemática: nossos medalhistas de ouro 🥇 Orgulho total!', likes: '2.1k', comments: '143', gradient: 'from-amber-500 to-orange-600' },
  { caption: 'Dia da Família na escola 👨‍👩‍👧‍👦 Que tarde inesquecível com nossa comunidade!', likes: '1.8k', comments: '102', gradient: 'from-rose-500 to-pink-600' },
  { caption: 'Horta pedagógica florescendo 🌱 Aprender cuidando do meio ambiente!', likes: '756', comments: '48', gradient: 'from-green-500 to-emerald-600' },
  { caption: 'Hackathon Ômega Tech 2025 💻 72h de criatividade e inovação pura!', likes: '1.5k', comments: '93', gradient: 'from-cyan-500 to-blue-600' },
  { caption: 'Teatro escolar: A Tempestade de Shakespeare 🎭 Que talento incrível!', likes: '892', comments: '67', gradient: 'from-violet-500 to-purple-700' },
]

function PostCard({ p }: { p: typeof POSTS[number] }) {
  return (
    <motion.div
      className="group relative shrink-0 w-[min(78vw,240px)] sm:w-[260px] md:w-[300px] rounded-4xl overflow-hidden cursor-pointer mr-3 sm:mr-4"
      style={{ boxShadow: 'var(--shadow-card-md)' }}
      whileHover={{ scale: 1.04, y: -4, transition: SPRING_SNAPPY }}
    >
      {/* Gradient "photo" */}
      <div className={`relative bg-gradient-to-br ${p.gradient} h-56 sm:h-64 md:h-72 overflow-hidden`}>
        <div className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)', backgroundSize: '16px 16px' }} />

        {/* Default icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-0 transition-opacity duration-300">
          <IconInstagram className="w-16 h-16 text-white" />
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#0586f9]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4 p-6">
          <IconInstagram className="w-10 h-10 text-white" />
          <div className="flex gap-5 text-white">
            <span className="flex items-center gap-1.5 font-semibold text-sm">
              <Heart className="w-4 h-4 fill-white" /> {p.likes}
            </span>
            <span className="flex items-center gap-1.5 font-semibold text-sm">
              <MessageCircle className="w-4 h-4" /> {p.comments}
            </span>
          </div>
          <p className="text-white/85 text-xs text-center leading-relaxed">{p.caption}</p>
        </div>
      </div>

      {/* Caption strip */}
      <div className="bg-white px-4 py-3 border-t border-slate-100">
        <p className="text-xs text-slate-500 line-clamp-1">{p.caption}</p>
        <div className="flex gap-3 mt-1">
          <span className="flex items-center gap-1 text-[11px] text-slate-400">
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> {p.likes}
          </span>
          <span className="flex items-center gap-1 text-[11px] text-slate-400">
            <MessageCircle className="w-3 h-3" /> {p.comments}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export function InstagramFeed() {
  const double = [...POSTS, ...POSTS]

  return (
    <section id="instagram" className="section-pad bg-white overflow-hidden">
      <div className="container-omega mb-8 md:mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div>
            <FadeInWhenVisible>
              <span className="tag-label text-[#0586f9] bg-[#e8f3ff] border border-blue-200 px-4 py-2 rounded-full inline-flex items-center gap-2 mb-5">
                <IconInstagram className="w-3.5 h-3.5" />
                @colegioomegamuriae
              </span>
            </FadeInWhenVisible>
            <TextReveal
              text="Vida no Campus"
              as="h2"
              className="heading-lg text-slate-dark"
              delay={0.1}
            />
            <FadeInWhenVisible delay={0.3}>
              <p className="mt-3 text-slate-500 leading-relaxed max-w-md">
                Acompanhe o dia a dia, eventos e a energia da nossa comunidade no Instagram.
              </p>
            </FadeInWhenVisible>
          </div>
          <FadeInWhenVisible delay={0.2} direction="left">
            <a
              href="https://www.instagram.com/colegioomegamuriae/"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost w-full md:w-auto flex items-center justify-center gap-2 shrink-0"
            >
              <IconInstagram className="w-4 h-4" /> Seguir no Instagram
            </a>
          </FadeInWhenVisible>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <div className="flex overflow-hidden pb-4">
          <div className="flex animate-marquee">
            {double.map((p, i) => <PostCard key={`${p.caption.slice(0, 24)}-${i}`} p={p} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
