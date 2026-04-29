import { useEffect, useRef, useState } from 'react'
import { Lock, ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Sistemas de Saúde & Telemedicina',
    description: 'Desenvolvimento e manutenção de sistemas de alta criticidade para Saúde, Telemedicina e Faturamento Hospitalar com conformidade SOX/GMUD. Agendamento on-line de consultas integrado a hospitais e consultórios.',
    tags: ['.NET Core', 'Microservices', 'MassTransit', 'RabbitMQ', 'DDD', 'CQRS', 'Oracle'],
    confidential: true,
    gradient: 'from-green-600/20 to-emerald-600/20',
    border: 'hover:border-green-500/30',
  },
  {
    title: 'APIs Financeiras – Banco Modal',
    description: 'APIs .NET Core com autenticação OAuth 2.0 / JWT. Integração com Azure (App Services, Key Vault, Storage) e deploy via CI/CD no Azure DevOps.',
    tags: ['.NET Core', 'OAuth 2.0', 'JWT', 'Azure', 'CI/CD'],
    confidential: true,
    gradient: 'from-blue-600/20 to-cyan-600/20',
    border: 'hover:border-blue-500/30',
  },
  {
    title: 'Microsserviços – MatriBank',
    description: 'Implementação de microsserviços com RabbitMQ/MassTransit, PostgreSQL e Redis para cache. Containerização com Docker e versionamento no GitHub/Bitbucket.',
    tags: ['Microservices', 'RabbitMQ', 'PostgreSQL', 'Redis', 'Docker'],
    confidential: true,
    gradient: 'from-purple-600/20 to-pink-600/20',
    border: 'hover:border-purple-500/30',
  },
  {
    title: 'Cloud Solutions – Shock Tecnologia',
    description: 'Soluções em AWS (Lambda, S3, RDS) e GCP. Uso de Oracle Cloud para workloads legados Oracle. Pipelines de automação com Python.',
    tags: ['AWS', 'GCP', 'Oracle Cloud', 'Python', 'Lambda'],
    confidential: true,
    gradient: 'from-orange-600/20 to-amber-600/20',
    border: 'hover:border-orange-500/30',
  },
  {
    title: 'Integração SAP & Faturamento Médico',
    description: 'Integração com SAP módulo FI para pagamento de médicos. Backend C# / ASP.NET com Entity Framework Core e Dapper. Dashboards de observabilidade com Grafana e Zabbix.',
    tags: ['.NET', 'SAP FI', 'Entity Framework', 'Grafana', 'Zabbix'],
    confidential: true,
    gradient: 'from-teal-600/20 to-cyan-600/20',
    border: 'hover:border-teal-500/30',
  },
  {
    title: 'Portal Viajar Barato',
    description: 'Portal de compra coletiva com back-office administrativo e site público. Desenvolvido com Delphi, C# ASP.NET, Adobe Flex/Flash Builder 4 e SQL Server.',
    tags: ['C# ASP.NET', 'Delphi', 'Adobe Flex', 'SQL Server'],
    confidential: false,
    gradient: 'from-rose-600/20 to-pink-600/20',
    border: 'hover:border-rose-500/30',
  },
]

export default function Projects() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-24 px-4 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-900/30 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <p className="section-comment mb-4">{'// PROJETOS'}</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Projetos em <span className="gradient-text">Destaque</span>
        </h2>
        <p className="text-dark-400 mb-12 max-w-2xl">
          Alguns dos projetos mais relevantes da minha carreira, desenvolvidos em ambientes de alta complexidade.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`glass rounded-xl overflow-hidden transition-all duration-700 group ${project.border} ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Gradient banner */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient.replace('/20', '')}`} />

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  {project.confidential ? (
                    <div className="flex items-center gap-1.5 text-dark-500 text-xs bg-dark-800 px-2.5 py-1 rounded-full">
                      <Lock size={12} />
                      Confidencial
                    </div>
                  ) : (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-primary-400 text-xs bg-primary-500/10 px-2.5 py-1 rounded-full hover:bg-primary-500/20 transition-colors"
                    >
                      <Github size={12} />
                      Ver mais no GitHub →
                    </a>
                  )}
                </div>

                <p className="text-dark-400 text-sm mb-5 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-primary-300 bg-primary-500/10 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
