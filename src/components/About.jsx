import { useEffect, useRef, useState } from 'react'
import { Clock, Layers, Users, Zap, Brain } from 'lucide-react'

const highlightIcons = [Clock, Layers, Users, Zap, Brain]

export default function About({ content }) {
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
        <p className="section-comment mb-4">{content.comment}</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          {content.headingPrefix} <span className="gradient-text">{content.headingHighlight}</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className={`space-y-5 text-dark-300 leading-relaxed transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {content.highlights.map((item, i) => {
              const Icon = highlightIcons[i]

              return (
                <div
                  key={item.title}
                  className={`glass rounded-xl p-6 hover:border-primary-500/30 transition-all duration-500 group ${
                    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <Icon className="text-primary-400 mb-3 group-hover:scale-110 transition-transform" size={28} />
                  <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-dark-400 text-sm">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
