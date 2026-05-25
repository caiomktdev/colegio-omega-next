import type { Metadata, Viewport } from 'next'
import { Sora, Inter } from 'next/font/google'
import { LenisProvider } from '@/lib/lenis'
import './globals.css'

const sora = Sora({
  variable: '--font-sora',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Colégio Ômega | Excelência em Educação — Muriaé, MG',
  description:
    'Uma proposta pedagógica inovadora que combina alta performance acadêmica, inteligência emocional e acolhimento estruturado. Matrículas 2026 abertas.',
  keywords: ['colégio ômega', 'educação muriaé', 'escola muriaé', 'ensino médio muriaé', 'matrículas 2026'],
  authors: [{ name: 'Colégio Ômega' }],
  icons: {
    icon: [{ url: '/favicon/favicon.webp', type: 'image/webp' }],
    apple: [{ url: '/favicon/favicon.webp', type: 'image/webp' }],
  },
  openGraph: {
    title: 'Colégio Ômega | Excelência em Educação',
    description: 'Formando alunos preparados para conquistar qualquer futuro. Muriaé, MG.',
    type: 'website',
    locale: 'pt_BR',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0586f9',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${sora.variable} ${inter.variable}`}
    >
      <body className="font-sans antialiased bg-white text-slate-dark overflow-x-hidden">
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  )
}
