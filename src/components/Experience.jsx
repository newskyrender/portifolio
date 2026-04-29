import { useEffect, useRef, useState } from 'react'
import { Building2, Briefcase, Calendar } from 'lucide-react'

const experiences = [
  {
    company: 'Shock Tecnologia Consultoria',
    role: 'Desenvolvedor Full Stack Sênior / Tech Lead',
    period: 'Jan/2026 – Atual',
    location: 'Remoto',
    icon: Briefcase,
    color: 'from-blue-500 to-cyan-500',
    tasks: [
      'Prestacao de servico para clientes como MatriBank e Matri Precatorios em arquitetura moderna e orientada a microsservicos',
      'MatriBank: APIs .NET Core com OAuth 2.0 e JWT; Azure App Services, Key Vault e Storage; CI/CD no Azure DevOps',
      'Microsservicos com RabbitMQ e MassTransit; PostgreSQL e Redis para estrategias de cache; Docker; GitHub e Bitbucket',
      'Vivencia em processos bancarios e meios de pagamento (PIX, TED, TEF e Open Finance), com rotinas de extrato e conciliacao',
      'Integracoes com provedores financeiros como Autbank e Celcoin',
      'Matri Precatorios: solucoes em AWS (Lambda, S3, RDS) e GCP; pipelines de automacao com Python',
      'Adocao de IA e LLMs (ChatGPT/Codex, Claude, Copilot, Ollama local) com engenharia de prompt para testes, refatoracao e documentacao',
      'ALM e controle de versao com GitHub, Bitbucket, Azure DevOps e TFS; code review, GitFlow e pipelines CI/CD automatizados',
    ],
  },
  {
    company: 'ITLean Consultoria',
    role: 'Desenvolvedor Full Stack Sênior',
    period: 'Jun/2024 – Jan/2026',
    location: 'Remoto',
    icon: Briefcase,
    color: 'from-indigo-500 to-sky-500',
    tasks: [
      'Prestacao de servico para clientes como GPA e Care Plus em modernizacao de sistemas e evolucao de plataformas criticas',
      'GPA: manutencao de sistemas de precos e etiquetagem com WebForms (.NET Framework 4.7) e Oracle',
      'Criacao de APIs em .NET 6/7/8 com CQRS, Clean Architecture e SOLID, integradas a sistemas legados (mainframe)',
      'Mensageria e processamento assincrono com MassTransit e RabbitMQ para escalabilidade e resiliencia',
      'Otimizacao de procedures e triggers em Oracle com apoio de LLMs (Claude, GitHub Copilot e Cursor), incluindo criacao de agentes',
      'Care Plus: migracao de legado Delphi/WebForms para .NET Core com microsservicos, CQRS e mensageria',
      'Desenvolvimento de APIs e interfaces com Angular e React para fluxos de cadastro, adesao e gestao de beneficiarios',
      'Automacao de testes de codigo e geracao de documentacao tecnica com LLMs para acelerar entregas e melhorar qualidade',
    ],
  },
  {
    company: 'Amil Assistência Médica Internacional S/A',
    role: 'Analista de Sistemas / Desenvolvedor Full Stack Sênior',
    period: 'Abr/2012 – Mai/2024',
    location: 'São Paulo – SP',
    icon: Building2,
    color: 'from-green-500 to-emerald-500',
    tasks: [
      'Desenvolvimento e manutenção de sistemas de alta criticidade para Saúde, Telemedicina e Faturamento Hospitalar (SOX / GMUD)',
      'Liderança técnica de squads: análise de requisitos, modelagem de dados, revisão de código e alinhamento com stakeholders',
      'Microservices com .NET Core (6 a 9), MassTransit, RabbitMQ — filas resilientes e desacopladas',
      'APIs REST com DDD, CQRS e Swagger/OpenAPI; autenticação OAuth 2.0 e JWT; integração SAP módulo FI para pagamento de médicos',
      'Sistema de agendamento on-line de consultas integrado a hospitais e consultórios',
      'Backend C# / ASP.NET (MVC e Web API) com Entity Framework Core e Dapper; SQL Server e Oracle 11g/19c',
      'Delphi 5/7/2007 (desktop e DataSnap) e Adobe Flex / Flash Builder 4 para sistema legado de prontuários',
      'Dashboards de observabilidade com Grafana e Zabbix; Python + MongoDB para métricas',
      'Uso intensivo de LLMs (GitHub Copilot, ChatGPT, Claude) e Engenharia de Prompt para acelerar entregas com código clean',
      'CI/CD com Azure DevOps e versionamento em GitHub/TFS',
    ],
  },
  {
    company: 'Voxel Informática',
    role: 'Analista Desenvolvedor Sênior – Delphi & .NET',
    period: 'Jan/2008 – Abr/2012',
    location: 'São Paulo – SP',
    icon: Building2,
    color: 'from-purple-500 to-pink-500',
    tasks: [
      'Desenvolvimento em Delphi (5, 7, 2006) e C# / ASP.NET com SQL Server 2000/2005',
      'Adobe Flex / Flash Builder 4 para interfaces ricas',
      'Construção do portal "Viajar Barato" (compra coletiva): back-office e site público',
      'Relatórios com Quick Report e Crystal Report',
    ],
  },
  {
    company: 'Br01 – Propaganda e Publicidade',
    role: 'Analista Desenvolvedor Pleno/Sênior – .NET & Delphi',
    period: 'Ago/2007 – Jan/2008',
    location: 'São Paulo – SP',
    icon: Briefcase,
    color: 'from-orange-500 to-amber-500',
    tasks: [
      'Sistemas web de alta visibilidade para Sony e OKI com C# ASP.NET e AJAX',
      'Modelagem de dados com ERWin; administração de Oracle 10g e SQL Server 2005',
      'Procedures, Triggers e manutenção de sistemas desktop em Delphi 2007',
    ],
  },
  {
    company: 'Prefeitura de Sorocaba',
    role: 'Analista de Sistemas e Desenvolvedor – Delphi',
    period: 'Abr/2007 – Ago/2007',
    location: 'Sorocaba – SP',
    icon: Building2,
    color: 'from-teal-500 to-cyan-500',
    tasks: [
      'Sistemas para secretarias de Educação, Guarda Municipal e HelpDesk',
      'Delphi (4 a 2006) + introdução a PHP e ASP.NET; Oracle, SQL Server e Firebird; Crystal Reports',
    ],
  },
  {
    company: 'Metalur Ltda',
    role: 'Analista Programador',
    period: 'Jan/2006 – Abr/2007',
    location: 'São Paulo – SP',
    icon: Briefcase,
    color: 'from-rose-500 to-pink-500',
    tasks: [
      'Módulos de ERP: Produção, Faturamento, Financeiro e Estoque em Delphi, VB6 e C# (.NET)',
      'Manutenção de Oracle 8i e SQL Server com otimização de queries PL/SQL',
    ],
  },
]

export default function Experience() {
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
    <section id="experience" className="py-24 px-4 relative" ref={ref}>
      {/* Subtle bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-900/30 to-transparent" />

      <div className="max-w-4xl mx-auto relative z-10">
        <p className="section-comment mb-4">{'// TRAJETÓRIA'}</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Experiência <span className="gradient-text">Profissional</span>
        </h2>
        <p className="text-dark-400 mb-12 max-w-2xl">
          Uma trajetória sólida construindo sistemas de missão crítica em empresas de referência no mercado.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Center line - visible on md+ */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-purple-500/30 to-transparent hidden md:block -translate-x-1/2" />
          {/* Left line - mobile/sm */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-purple-500/30 to-transparent md:hidden" />

          <div className="space-y-16 md:space-y-24">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0

              return (
                <div
                  key={exp.company}
                  className={`relative transition-all duration-700 ${
                    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  {/* Dot - center on md+, left on mobile */}
                  <div className={`absolute md:left-1/2 left-3 top-6 md:-translate-x-1/2 w-7 h-7 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center z-10`}>
                    <div className="w-3 h-3 bg-dark-950 rounded-full" />
                  </div>

                  {/* Card container */}
                  <div className={`pl-14 md:pl-0 md:w-[calc(50%-2rem)] ${
                    isLeft ? 'md:mr-auto md:pr-0' : 'md:ml-auto md:pl-0'
                  }`}>
                    <div className="glass rounded-xl p-6 hover:border-primary-500/20 transition-all group text-center">
                      {/* Period */}
                      <div className="flex items-center justify-center gap-2 text-primary-400 text-sm font-mono mb-3">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>

                      {/* Company */}
                      <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors mb-2">
                        {exp.company}
                      </h3>

                      {/* Role */}
                      <div className="flex items-center justify-center gap-2 text-dark-400 text-sm mb-1">
                        <exp.icon size={14} />
                        <span>{exp.role}</span>
                      </div>

                      {/* Location */}
                      {exp.location && (
                        <p className="text-dark-500 text-xs mb-4">{exp.location}</p>
                      )}

                      {/* Tasks */}
                      <ul className="space-y-2 text-left">
                        {exp.tasks.map((task) => (
                          <li key={task} className="flex items-start gap-3 text-dark-300 text-sm">
                            <span className="text-primary-500 mt-1.5 flex-shrink-0">•</span>
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
