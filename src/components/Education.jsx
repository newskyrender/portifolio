import { useEffect, useRef, useState } from 'react'
import { GraduationCap, BookOpen, Star, Zap, MessageSquare, Heart, Brain, Shield, Layers, Users } from 'lucide-react'

const qualities = [
  { icon: Zap, title: 'Alta Produtividade', desc: 'LLMs como copiloto de desenvolvimento diário — Engenharia de Prompt para código clean, testes e docs' },
  { icon: Layers, title: 'Versatilidade', desc: 'Atua em stack completa: backend, frontend, banco, cloud, observabilidade e IA' },
  { icon: Users, title: 'Liderança Técnica', desc: 'Mentoria de times, code review, definição de arquitetura e boas práticas' },
  { icon: Shield, title: 'Setor de Saúde', desc: '13+ anos em sistemas hospitalares, telemedicina e faturamento médico com conformidade SOX/GMUD' },
  { icon: MessageSquare, title: 'Comunicação', desc: 'Alinhamento com áreas de negócio, documentação técnica clara, metodologias ágeis (Scrum/Kanban)' },
]

const platforms = ['Alura', 'balta.io', 'desenvolvedor.io']
const specializations = ['Arquitetura .NET', 'Microservices', 'DDD', 'Cloud', 'IA']

export default function Education() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="education" className="py-24 px-4 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <p className="section-comment mb-4">{'// FORMAÇÃO'}</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
          Educação & <span className="gradient-text">Qualidades</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Graduation */}
          <div
            className={`glass rounded-xl p-6 text-center transition-all duration-700 hover:border-primary-500/30 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="w-16 h-16 bg-primary-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="text-primary-400" size={32} />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Sistemas de Informação</h3>
            <p className="text-dark-400 text-sm">Universidade de Sorocaba (UNISO) – 2007</p>
          </div>

          {/* Continuous Education */}
          <div
            className={`glass rounded-xl p-6 text-center transition-all duration-700 hover:border-primary-500/30 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <BookOpen className="text-green-400" size={32} />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Educação Contínua</h3>
            <p className="text-dark-400 text-sm mb-4">Aprendizado constante e atualização</p>
            <div className="flex flex-wrap justify-center gap-2 mb-3">
              {platforms.map((p) => (
                <span key={p} className="text-xs text-primary-300 bg-primary-500/10 px-3 py-1 rounded-full">
                  {p}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {specializations.map((s) => (
                <span key={s} className="text-xs text-dark-300 bg-dark-800 px-2.5 py-1 rounded-full border border-dark-700">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Personal Qualities / Diferenciais */}
          <div
            className={`glass rounded-xl p-6 transition-all duration-700 hover:border-primary-500/30 md:col-span-3 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Star className="text-purple-400" size={32} />
            </div>
            <h3 className="text-white font-bold text-lg mb-6 text-center">Diferenciais & Soft Skills</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {qualities.map((q) => (
                <div key={q.title} className="flex items-start gap-3 bg-dark-800/50 rounded-lg p-3 border border-dark-700">
                  <q.icon className="text-primary-400 flex-shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="text-white text-sm font-medium mb-1">{q.title}</p>
                    <p className="text-dark-400 text-xs leading-relaxed">{q.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-dark-500 text-xs text-center mt-6">
              Aberto a trabalho remoto / híbrido • Referências e portfólio disponíveis mediante solicitação
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
