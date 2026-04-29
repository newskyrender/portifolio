import { MapPin, Download, Github, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(148,163,184,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Avatar */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-36 h-36 rounded-full bg-gradient-to-br from-primary-500 to-purple-600 p-[3px]">
              <div className="w-full h-full rounded-full bg-dark-900 flex items-center justify-center overflow-hidden">
                <img src="/imagens/imagem_para_foto.png" alt="Carlos Eduardo" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 bg-green-500 w-5 h-5 rounded-full border-4 border-dark-950" />
          </div>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-4 py-1.5 mb-6">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-primary-300 text-sm font-medium">Disponível para novos projetos</span>
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-2">
          <span className="text-white">Carlos Eduardo</span>
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-text">Stramandinoli Leme</span>
        </h2>

        {/* Title */}
        <p className="text-xl sm:text-2xl text-dark-300 mb-2 font-light">
          Desenvolvedor Full Stack Sênior
        </p>
        <p className="text-dark-400 text-lg mb-2">
          Arquitetura de Software • IA & Produtividade com LLMs
        </p>
        <p className="text-dark-400 text-lg mb-8">
          +18 anos construindo sistemas de alta performance
        </p>

        {/* Location */}
        <div className="flex items-center justify-center gap-2 text-dark-400 mb-10">
          <MapPin size={16} />
          <span className="text-sm">Mairinque – SP, Brasil</span>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/doc/Curriculo_Carlos_Eduardo_Stramandinoli_2026.pdf"
            download="Curriculo_Carlos_Eduardo_Stramandinoli_2026.pdf"
            className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-primary-500/25"
          >
            <Download size={18} />
            Baixar Currículo
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-dark-600 hover:border-primary-500 text-dark-300 hover:text-primary-400 px-8 py-3 rounded-xl font-medium transition-all"
          >
            <Github size={18} />
            GitHub
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-dark-500 animate-bounce">
        <ChevronDown size={28} />
      </a>
    </section>
  )
}
