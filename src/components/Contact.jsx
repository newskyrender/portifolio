import { useEffect, useRef, useState } from 'react'
import { Mail, Phone, MapPin, MessageCircle, Send, Github, Download } from 'lucide-react'

const contactInfoMeta = [
  {
    icon: Mail,
    value: 'stramandinoli.consultoria@gmail.com',
    href: 'mailto:stramandinoli.consultoria@gmail.com',
  },
  {
    icon: Mail,
    value: 'newskyrender@gmail.com',
    href: 'mailto:newskyrender@gmail.com',
  },
  {
    icon: Phone,
    value: '(15) 99177-4430',
    href: 'tel:+5515991774430',
  },
  {
    icon: MapPin,
    value: 'Mairinque – SP, Brasil',
    href: null,
  },
]

const actionMeta = [
  {
    icon: MessageCircle,
    key: 'whatsapp',
    href: 'https://wa.me/5515991774430',
    color: 'bg-green-600 hover:bg-green-700',
  },
  {
    icon: Send,
    key: 'email',
    href: 'mailto:stramandinoli.consultoria@gmail.com',
    color: 'bg-primary-600 hover:bg-primary-700',
  },
  {
    icon: Github,
    key: 'github',
    href: 'https://github.com/newskyrender',
    color: 'bg-dark-700 hover:bg-dark-600',
  },
  {
    icon: Download,
    key: 'resume',
    href: '/doc/Curriculo_Carlos_Eduardo_Stramandinoli_2026.pdf',
    downloadName: 'Curriculo_Carlos_Eduardo_Stramandinoli_2026.pdf',
    color: 'bg-purple-600 hover:bg-purple-700',
  },
]

export default function Contact({ content }) {
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

  const contactInfo = [
    { ...contactInfoMeta[0], label: content.infoLabels.email },
    { ...contactInfoMeta[1], label: content.infoLabels.alternateEmail },
    { ...contactInfoMeta[2], label: content.infoLabels.phone },
    { ...contactInfoMeta[3], label: content.infoLabels.location },
  ]

  const actions = [
    { ...actionMeta[0], label: 'WhatsApp' },
    { ...actionMeta[1], label: content.actions.email },
    { ...actionMeta[2], label: 'GitHub' },
    { ...actionMeta[3], label: content.actions.resume },
  ]

  return (
    <section id="contact" className="py-24 px-4 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/5 to-transparent" />

      <div className="max-w-4xl mx-auto relative z-10">
        <p className="section-comment mb-4">{content.comment}</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          {content.headingPrefix} <span className="gradient-text">{content.headingHighlight}</span>
        </h2>
        <p className="text-dark-400 mb-12 max-w-xl">
          {content.description}
        </p>

        <div
          className={`glass rounded-2xl p-8 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-primary-400" size={20} />
                </div>
                <div>
                  <p className="text-dark-500 text-xs uppercase tracking-wider mb-1">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-dark-200 text-sm hover:text-primary-400 transition-colors break-all"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-dark-200 text-sm">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {actions.map((action) => (
              <a
                key={action.key}
                href={action.href}
                target={action.href.startsWith('http') ? '_blank' : undefined}
                rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                download={action.downloadName ?? (action.href.endsWith('.pdf') ? true : undefined)}
                className={`${action.color} text-white flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-medium transition-all`}
              >
                <action.icon size={16} />
                <span className="hidden sm:inline">{action.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
