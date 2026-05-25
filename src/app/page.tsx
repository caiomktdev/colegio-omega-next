import { Header }        from '@/components/layout/Header'
import { Footer }        from '@/components/layout/Footer'
import { Hero }          from '@/components/sections/Hero'
import { Diferenciais }  from '@/components/sections/Diferenciais'
import { Resultados }    from '@/components/sections/Resultados'
import { Estrutura }     from '@/components/sections/Estrutura'
import { Metodologia }   from '@/components/sections/Metodologia'
import { Docentes }      from '@/components/sections/Docentes'
import { Depoimentos }   from '@/components/sections/Depoimentos'
import { InstagramFeed } from '@/components/sections/InstagramFeed'
import { Jornada }       from '@/components/sections/Jornada'
import { FinalCTA }      from '@/components/sections/FinalCTA'

export default function Page() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Diferenciais />
        <Resultados />
        <Estrutura />
        <Metodologia />
        <Docentes />
        <Depoimentos />
        <InstagramFeed />
        <Jornada />
        <FinalCTA />
      </main>

      <Footer />
    </>
  )
}
