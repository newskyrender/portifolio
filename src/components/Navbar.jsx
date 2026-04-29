import { useState, useEffect } from 'react'
import { Menu, X, Code2 } from 'lucide-react'

function LanguageToggle({ language, onLanguageChange, label }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs uppercase tracking-[0.2em] text-dark-500">{label}</span>
      <div className="flex items-center rounded-full border border-dark-700 bg-dark-900/80 p-1">
        {['pt', 'en'].map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => onLanguageChange(value)}
            className={`rounded-full px-3 py-1 text-xs font-semibold uppercase transition-colors ${
              language === value
                ? 'bg-primary-600 text-white'
                : 'text-dark-400 hover:text-white'
            }`}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  )
}

export default function Navbar({ language, onLanguageChange, content }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <a href="#hero" className="flex items-center gap-2 text-primary-400 font-bold text-lg">
            <Code2 size={24} />
            <span className="font-mono">carlos.dev</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {content.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-dark-300 hover:text-primary-400 transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <LanguageToggle
              language={language}
              onLanguageChange={onLanguageChange}
              label={content.languageLabel}
            />
            <a
              href="#contact"
              className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              {content.cta}
            </a>
          </div>

          <button
            type="button"
            className="md:hidden text-dark-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass border-t border-dark-700">
          <div className="px-4 py-4 space-y-3">
            <LanguageToggle
              language={language}
              onLanguageChange={onLanguageChange}
              label={content.languageLabel}
            />
            {content.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-dark-300 hover:text-primary-400 transition-colors text-sm font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              {content.cta}
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
