import { useEffect, useRef, useState } from 'react'

const skillCategories = [
  {
    skills: [
      { name: '.NET Framework / Core 2–9', level: 95 },
      { name: 'C# / ASP.NET MVC / Web API', level: 95 },
      { name: 'Node.js', level: 55 },
      { name: 'Python', level: 50 },
    ],
  },
  {
    skills: [
      { name: 'Microservices', level: 90 },
      { name: 'DDD / CQRS', level: 90 },
      { name: 'Hexagonal / Clean Architecture', level: 85 },
      { name: 'REST / SOAP / WCF', level: 90 },
    ],
  },
  {
    skills: [
      { name: 'React / Next.js', level: 65 },
      { name: 'Angular', level: 55 },
      { name: 'JavaScript / jQuery', level: 75 },
      { name: 'Bootstrap / Flex', level: 70 },
    ],
  },
  {
    skills: [
      { name: 'RabbitMQ / MassTransit', level: 90 },
      { name: 'Kafka / AWS SQS / SNS', level: 75 },
      { name: 'OAuth 2.0 / JWT', level: 85 },
      { name: 'Keycloak / OIDC', level: 80 },
    ],
  },
  {
    skills: [
      { name: 'SQL Server', level: 90 },
      { name: 'Oracle 11g / 19c', level: 85 },
      { name: 'MongoDB / Redis', level: 75 },
      { name: 'PostgreSQL / MySQL', level: 70 },
    ],
  },
  {
    skills: [
      { name: 'Entity Framework Core', level: 90 },
      { name: 'Dapper', level: 85 },
      { name: 'NHibernate', level: 70 },
      { name: 'GraphQL', level: 50 },
    ],
  },
  {
    skills: [
      { name: 'Azure (DevOps, App Services)', level: 85 },
      { name: 'AWS (Lambda, S3, RDS)', level: 65 },
      { name: 'Docker / Kubernetes / Helm', level: 75 },
      { name: 'GitHub / Bitbucket / CI/CD', level: 85 },
    ],
  },
  {
    skills: [
      { name: 'GitHub Copilot', level: 90 },
      { name: 'ChatGPT / OpenAI Codex', level: 90 },
      { name: 'Claude (Anthropic)', level: 85 },
      { name: 'Ollama (local) / Gemini', level: 60 },
    ],
  },
  {
    skills: [
      { name: 'Grafana', level: 80 },
      { name: 'Zabbix', level: 75 },
      { name: 'OpenTelemetry', level: 35 },
    ],
  },
  {
    skills: [
      { name: 'Delphi 5 / 7 / 2007', level: 90 },
      { name: 'VB6', level: 60 },
      { name: 'Flash Builder / Flex', level: 65 },
      { name: 'PL/SQL Developer', level: 75 },
    ],
  },
]

function getBarColor(level) {
  if (level >= 90) return 'from-blue-500 to-cyan-400'
  if (level >= 75) return 'from-blue-500 to-blue-400'
  if (level >= 60) return 'from-purple-500 to-blue-400'
  if (level >= 45) return 'from-amber-500 to-orange-400'
  return 'from-red-400 to-orange-400'
}

export default function Skills({ content }) {
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
    <section id="skills" className="py-24 px-4 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/5 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <p className="section-comment mb-4">{content.comment}</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          {content.headingPrefix} <span className="gradient-text">{content.headingHighlight}</span>
        </h2>
        <p className="text-dark-400 mb-12 max-w-2xl">
          {content.description}
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillCategories.map((cat, ci) => (
            <div
              key={content.categories[ci].title}
              className={`glass rounded-xl p-6 transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${ci * 100}ms` }}
            >
              <h3 className="text-primary-400 font-mono font-semibold text-sm mb-5 tracking-wider">
                {content.categories[ci].title}
              </h3>

              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-dark-200 text-sm font-medium">{skill.name}</span>
                      <span className="text-dark-400 text-xs font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-dark-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${getBarColor(skill.level)} skill-bar`}
                        style={{ width: visible ? `${skill.level}%` : '0%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
