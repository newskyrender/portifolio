import { useEffect, useRef, useState } from 'react'
import { Lock, Github } from 'lucide-react'

const projects = [
  {
    tags: ['.NET Core', 'Microservices', 'MassTransit', 'RabbitMQ', 'DDD', 'CQRS', 'Oracle'],
    confidential: true,
    gradient: 'from-green-600/20 to-emerald-600/20',
    border: 'hover:border-green-500/30',
  },
  {
    tags: ['.NET Core', 'OAuth 2.0', 'JWT', 'Azure', 'CI/CD'],
    confidential: true,
    gradient: 'from-blue-600/20 to-cyan-600/20',
    border: 'hover:border-blue-500/30',
  },
  {
    tags: ['Microservices', 'RabbitMQ', 'PostgreSQL', 'Redis', 'Docker'],
    confidential: true,
    gradient: 'from-purple-600/20 to-pink-600/20',
    border: 'hover:border-purple-500/30',
  },
  {
    tags: ['AWS', 'GCP', 'Oracle Cloud', 'Python', 'Lambda'],
    confidential: true,
    gradient: 'from-orange-600/20 to-amber-600/20',
    border: 'hover:border-orange-500/30',
  },
  {
    tags: ['.NET', 'SAP FI', 'Entity Framework', 'Grafana', 'Zabbix'],
    confidential: true,
    gradient: 'from-teal-600/20 to-cyan-600/20',
    border: 'hover:border-teal-500/30',
  },
  {
    tags: ['C# ASP.NET', 'Delphi', 'Adobe Flex', 'SQL Server'],
    confidential: false,
    githubUrl: 'https://github.com/newskyrender/portifolio',
    gradient: 'from-rose-600/20 to-pink-600/20',
    border: 'hover:border-rose-500/30',
  },
]

export default function Projects({ content }) {
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
        <p className="section-comment mb-4">{content.comment}</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          {content.headingPrefix} <span className="gradient-text">{content.headingHighlight}</span>
        </h2>
        <p className="text-dark-400 mb-12 max-w-2xl">
          {content.description}
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const copy = content.items[i]

            return (
              <div
                key={copy.title}
                className={`glass rounded-xl overflow-hidden transition-all duration-700 group ${project.border} ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient.replace('/20', '')}`} />

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3 gap-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                      {copy.title}
                    </h3>
                    {project.confidential ? (
                      <div className="flex items-center gap-1.5 text-dark-500 text-xs bg-dark-800 px-2.5 py-1 rounded-full whitespace-nowrap">
                        <Lock size={12} />
                        {content.confidential}
                      </div>
                    ) : (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-primary-400 text-xs bg-primary-500/10 px-2.5 py-1 rounded-full hover:bg-primary-500/20 transition-colors whitespace-nowrap"
                      >
                        <Github size={12} />
                        {content.githubLink}
                      </a>
                    )}
                  </div>

                  <p className="text-dark-400 text-sm mb-5 leading-relaxed">{copy.description}</p>

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
            )
          })}
        </div>
      </div>
    </section>
  )
}
