import { useEffect, useRef, useState } from 'react'
import { Building2, Briefcase, Calendar } from 'lucide-react'

const experienceMeta = [
  { icon: Briefcase, color: 'from-blue-500 to-cyan-500' },
  { icon: Briefcase, color: 'from-cyan-500 to-teal-500' },
  { icon: Briefcase, color: 'from-indigo-500 to-sky-500' },
  { icon: Building2, color: 'from-green-500 to-emerald-500' },
  { icon: Building2, color: 'from-purple-500 to-pink-500' },
  { icon: Briefcase, color: 'from-orange-500 to-amber-500' },
  { icon: Building2, color: 'from-teal-500 to-cyan-500' },
  { icon: Briefcase, color: 'from-rose-500 to-pink-500' },
]

export default function Experience({ content }) {
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
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-900/30 to-transparent" />

      <div className="max-w-4xl mx-auto relative z-10">
        <p className="section-comment mb-4">{content.comment}</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          {content.headingPrefix} <span className="gradient-text">{content.headingHighlight}</span>
        </h2>
        <p className="text-dark-400 mb-12 max-w-2xl">
          {content.description}
        </p>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-purple-500/30 to-transparent hidden md:block -translate-x-1/2" />
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-purple-500/30 to-transparent md:hidden" />

          <div className="space-y-16 md:space-y-24">
            {content.items.map((exp, i) => {
              const isLeft = i % 2 === 0
              const meta = experienceMeta[i]
              const Icon = meta.icon

              return (
                <div
                  key={`${exp.company}-${exp.period}`}
                  className={`relative transition-all duration-700 ${
                    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className={`absolute md:left-1/2 left-3 top-6 md:-translate-x-1/2 w-7 h-7 rounded-full bg-gradient-to-br ${meta.color} flex items-center justify-center z-10`}>
                    <div className="w-3 h-3 bg-dark-950 rounded-full" />
                  </div>

                  <div className={`pl-14 md:pl-0 md:w-[calc(50%-2rem)] ${
                    isLeft ? 'md:mr-auto md:pr-0' : 'md:ml-auto md:pl-0'
                  }`}>
                    <div className="glass rounded-xl p-6 hover:border-primary-500/20 transition-all group text-center">
                      <div className="flex items-center justify-center gap-2 text-primary-400 text-sm font-mono mb-3">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>

                      <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors mb-2">
                        {exp.company}
                      </h3>

                      <div className="flex items-center justify-center gap-2 text-dark-400 text-sm mb-1">
                        <Icon size={14} />
                        <span>{exp.role}</span>
                      </div>

                      {exp.location && (
                        <p className="text-dark-500 text-xs mb-4">{exp.location}</p>
                      )}

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
