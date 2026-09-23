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
      className="theme-toggle"
    >
      <span>{isSunset ? 'Night' : 'Day'}</span>
      <span className="theme-toggle-track">
        <span
          className={`theme-toggle-thumb${isSunset ? ' is-sunset' : ''}`}
        />
      </span>
    </button>
  )
}
