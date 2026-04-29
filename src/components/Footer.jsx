import { Heart, Code2 } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-dark-800">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-dark-500 text-sm">
          <Code2 size={16} className="text-primary-500" />
          <span className="font-mono">carlos.dev</span>
        </div>

        <p className="text-dark-500 text-sm flex items-center gap-1">
          Feito com <Heart size={14} className="text-red-500" fill="currentColor" /> por Carlos Eduardo S. Leme — 2026
        </p>
      </div>
    </footer>
  )
}
