import { MapPin, Phone, Mail } from 'lucide-react'

function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  )
}

const COLS = [
  {
    title: 'Ensino',
    links: [
      { label: 'Educação Infantil',     href: '#matriculas' },
      { label: 'Ensino Fundamental I',  href: '#matriculas' },
      { label: 'Ensino Fundamental II', href: '#matriculas' },
      { label: 'Ensino Médio',          href: '#matriculas' },
    ],
  },
  {
    title: 'Colégio',
    links: [
      { label: 'Sobre Nós',     href: '#sobre' },
      { label: 'Metodologia',   href: '#metodologia' },
      { label: 'Estrutura',     href: '#estrutura' },
      { label: 'Corpo Docente', href: '#docentes' },
    ],
  },
  {
    title: 'Comunidade',
    links: [
      { label: 'Depoimentos',     href: '#depoimentos' },
      { label: 'Vida no Campus',  href: '#instagram' },
      { label: 'Matrículas',      href: '#matriculas' },
      { label: 'Portal do Aluno', href: 'https://omegamuriae.escolaweb.com.br/login.html' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="gradient-dark text-white relative">
      <div className="absolute top-0 left-0 right-0 h-1 gradient-flow-bg" aria-hidden />

      <div className="container-omega pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          <div className="sm:col-span-2 lg:col-span-2 flex flex-col gap-5">
            <a href="#" className="flex items-center w-fit" aria-label="Colégio Ômega — início">
              <img
                src="/logo/logo-colegio-site.webp"
                alt="Colégio Ômega"
                width={180}
                height={52}
                className="h-10 w-auto object-contain object-left"
              />
            </a>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Formando cidadãos íntegros e líderes do futuro desde 1997. Excelência acadêmica com calor humano.
            </p>
            <div className="flex flex-col gap-2 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-blue shrink-0" />
                Muriaé – Minas Gerais
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-blue shrink-0" />
                (32) 3722-XXXX
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-blue shrink-0" />
                contato@colegioomega.com.br
              </div>
            </div>
            <a
              href="https://www.instagram.com/colegioomegamuriae/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/8 border border-white/12 text-white/70 hover:text-white hover:border-white/25 transition-colors w-fit"
            >
              <IconInstagram />
            </a>
          </div>

          {COLS.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <h4 className="font-display font-semibold text-sm text-white">{col.title}</h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => {
                  const isExternal = l.href.startsWith('http');
                  return (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        target={isExternal ? '_blank' : undefined}
                        rel={isExternal ? 'noopener noreferrer' : undefined}
                        className="text-sm text-slate-muted hover:text-white transition-colors"
                      >
                        {l.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Colégio Ômega. Todos os direitos reservados.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Acessibilidade</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
