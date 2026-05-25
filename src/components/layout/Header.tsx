'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { EASE_PREMIUM, SPRING_SNAPPY } from '@/lib/motion'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Sobre',       href: '#sobre' },
  {
    label: 'Ensino',
    href: '#matriculas',
    sub: [
      { label: 'Educação Infantil',     href: '#matriculas' },
      { label: 'Ensino Fundamental',    href: '#matriculas' },
      { label: 'Ensino Médio',          href: '#matriculas' },
    ],
  },
  { label: 'Estrutura',   href: '#estrutura' },
  { label: 'Resultados',  href: '#resultados' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato',     href: '#contato' },
]

function SubMenu({ items }: { items: { label: string; href: string }[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1, transition: SPRING_SNAPPY }}
      exit={{ opacity: 0, y: -4, transition: { duration: 0.15 } }}
      className="absolute top-full left-0 mt-2 w-52 bg-white rounded-2xl shadow-card-lg border border-slate-100 py-1.5 z-50"
    >
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="block px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-brand-blue hover:bg-brand-blue-dim transition-colors"
        >
          {item.label}
        </a>
      ))}
    </motion.div>
  )
}

function NavLink({ link }: { link: typeof NAV_LINKS[number] }) {
  const [open, setOpen] = useState(false)

  if (!('sub' in link) || !link.sub) {
    return (
      <a
        href={link.href}
        className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors"
      >
        {link.label}
      </a>
    )
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">
        {link.label}
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={SPRING_SNAPPY}>
          <ChevronDown className="w-3.5 h-3.5" />
        </motion.span>
      </button>
      <AnimatePresence>{open && <SubMenu items={link.sub} />}</AnimatePresence>
    </div>
  )
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [expanded, setExpanded] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <motion.header
        className="fixed top-0 inset-x-0 z-50 flex justify-center px-3 sm:px-4 pt-3 sm:pt-5"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE_PREMIUM }}
      >
        <div
          className={cn(
            'w-full max-w-6xl flex items-center justify-between px-4 sm:px-5 md:px-7 h-[52px] sm:h-[58px] md:h-[64px] rounded-2xl transition-all duration-300 border',
            scrolled
              ? 'bg-white/95 backdrop-blur-md border-slate-100 shadow-card-lg'
              : 'bg-white/80 backdrop-blur-sm border-white/60 shadow-card',
          )}
        >
          <a href="#" className="flex items-center shrink-0" aria-label="Colégio Ômega — início">
            <img
              src="/logo/logo-colegio-site.webp"
              alt="Colégio Ômega"
              width={180}
              height={52}
              className="h-8 sm:h-9 md:h-10 w-auto object-contain object-left logo-shadow"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
            {NAV_LINKS.map((link) => <NavLink key={link.label} link={link} />)}
          </nav>

          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <a
              href="https://omegamuriae.escolaweb.com.br/login.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-brand-blue hover:underline"
            >
              Portal do Aluno
            </a>
            <a href="#matriculas" className="btn-yellow text-sm px-5 py-2.5">
              Matrículas
            </a>
          </div>

          <button
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl text-slate-600 hover:bg-slate-50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-slate-dark/20 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className="fixed top-[68px] sm:top-[82px] inset-x-3 sm:inset-x-4 z-40 lg:hidden bg-white rounded-3xl border border-slate-100 overflow-hidden max-h-[calc(100dvh-5rem)] overflow-y-auto shadow-card-lg"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1, transition: SPRING_SNAPPY }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
            >
              <nav className="p-4 flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <div key={link.label}>
                    {'sub' in link && link.sub ? (
                      <>
                        <button
                          className="w-full flex items-center justify-between py-3 text-sm font-medium text-slate-700"
                          onClick={() => setExpanded(expanded === link.label ? null : link.label)}
                        >
                          {link.label}
                          <ChevronDown className={cn('w-4 h-4 transition-transform', expanded === link.label && 'rotate-180')} />
                        </button>
                        {expanded === link.label && (
                          <div className="pl-4 pb-2 flex flex-col gap-1">
                            {link.sub.map((s) => (
                              <a
                                key={s.label}
                                href={s.href}
                                onClick={() => setMenuOpen(false)}
                                className="py-2 text-sm text-slate-muted hover:text-brand-blue"
                              >
                                {s.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <a
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="block py-3 text-sm font-medium text-slate-700 hover:text-brand-blue"
                      >
                        {link.label}
                      </a>
                    )}
                  </div>
                ))}
                <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-2">
                  <a
                    href="https://omegamuriae.escolaweb.com.br/login.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                    className="py-3 text-center text-sm font-semibold text-brand-blue"
                  >
                    Portal do Aluno
                  </a>
                  <a
                    href="#matriculas"
                    onClick={() => setMenuOpen(false)}
                    className="btn-yellow w-full py-3"
                  >
                    Matrículas
                  </a>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
