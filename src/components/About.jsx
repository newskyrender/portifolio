import { useEffect, useRef, useState } from 'react'
import { Clock, Layers, Users, Zap, Brain } from 'lucide-react'

const highlights = [
  { icon: Clock, title: '18+ Anos', desc: 'Experiência em desenvolvimento' },
  { icon: Layers, title: 'Microservices', desc: 'DDD, CQRS, Hexagonal, Clean' },
  { icon: Users, title: 'Liderança Técnica', desc: 'Mentoria e code review' },
  { icon: Zap, title: 'Saúde & Telemedicina', desc: '13+ anos no setor hospitalar' },
  { icon: Brain, title: 'IA & LLMs', desc: 'Copilot, ChatGPT, Claude, Ollama' },
]

export default function About() {
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
    <section id="about" className="py-24 px-4 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <p className="section-comment mb-4">{'// SOBRE MIM'}</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Experiência que gera <span className="gradient-text">resultados</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <div className={`space-y-5 text-dark-300 leading-relaxed transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p>
              Desenvolvedor Full Stack Sênior com mais de 18 anos de experiência em sistemas corporativos de alta
              complexidade, com forte atuação no setor de <span className="text-primary-400 font-medium">Saúde & Telemedicina</span>.
              Especialista no ecossistema .NET (Framework ao .NET 9), com domínio em arquiteturas modernas
              (Microservices, DDD, CQRS, Hexagonal) e mensageria com RabbitMQ/MassTransit.
            </p>
            <p>
              Atua com as principais LLMs do mercado (<span className="text-primary-400 font-medium">ChatGPT, Claude, GitHub Copilot, Codex, Ollama</span>)
              como ferramentas de alta produtividade e Engenharia de Prompt aplicada ao desenvolvimento.
              Autenticação avançada com OAuth 2.0, JWT e Keycloak.
            </p>
            <p>
              Experiência em Cloud (Azure, AWS, GCP, Oracle Cloud), CI/CD com Azure DevOps / GitHub / Bitbucket,
              observabilidade com Grafana e Zabbix, e bancos de dados relacionais e NoSQL. Minha abordagem
              combina visão estratégica de negócio com excelência técnica, sempre buscando soluções escaláveis
              e alinhadas com os objetivos do produto.
            </p>
          </div>

          {/* Highlight cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <div
                key={item.title}
                className={`glass rounded-xl p-6 hover:border-primary-500/30 transition-all duration-500 group ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <item.icon className="text-primary-400 mb-3 group-hover:scale-110 transition-transform" size={28} />
                <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-dark-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
