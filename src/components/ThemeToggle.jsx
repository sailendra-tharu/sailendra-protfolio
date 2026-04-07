import { useEffect, useState } from 'react'

const themes = ['theme-ocean', 'theme-sunset']

export default function ThemeToggle() {
  const [theme, setTheme] = useState('theme-ocean')

  useEffect(() => {
    const stored = window.localStorage.getItem('portfolio-theme')
    const initial = stored || 'theme-ocean'
    setTheme(initial)
    document.body.classList.remove(...themes)
    document.body.classList.add(initial)
  }, [])

  const handleToggle = () => {
    const next = theme === 'theme-ocean' ? 'theme-sunset' : 'theme-ocean'
    setTheme(next)
    document.body.classList.remove(...themes)
    document.body.classList.add(next)
    window.localStorage.setItem('portfolio-theme', next)
  }

  const isSunset = theme === 'theme-sunset'

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label="Toggle color theme"
      className="flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-2 py-1 text-xs uppercase tracking-[0.25em] text-shell"
    >
      <span className="hidden text-[10px] text-slate sm:inline">{isSunset ? 'Sunset' : 'Ocean'}</span>
      <span className="relative h-6 w-11 rounded-full border border-white/20 bg-black/30">
        <span
          className={`absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-[color:var(--accent)] shadow-glow transition-all ${
            isSunset ? 'left-6' : 'left-1'
          }`}
        />
      </span>
    </button>
  )
}
