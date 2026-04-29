import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { portfolioContent } from './content/portfolioContent'

function App() {
  const [language, setLanguage] = useState(() => window.localStorage.getItem('portfolio-language') ?? 'pt')
  const content = portfolioContent[language]

  useEffect(() => {
    window.localStorage.setItem('portfolio-language', language)
  }, [language])

  return (
    <div className="min-h-screen bg-dark-950">
      <Navbar
        language={language}
        onLanguageChange={setLanguage}
        content={content.navbar}
      />
      <Hero content={content.hero} />
      <About content={content.about} />
      <Experience content={content.experience} />
      <Skills content={content.skills} />
      <Projects content={content.projects} />
      <Education content={content.education} />
      <Contact content={content.contact} />
      <Footer content={content.footer} />
    </div>
  )
}

export default App
