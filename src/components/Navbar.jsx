import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle.jsx'

const links = [
  { to: '/', label: 'Home' },
  { to: '/skills', label: 'Skills' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
  { to: '/education', label: 'Education' },
  { to: '/references', label: 'References' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-20 border-b border-white/5 bg-[color:var(--surface-strong)]/80 backdrop-blur-lg">
      <div className="mx-auto flex w-full max-w-8xl items-center justify-between gap-4 px-6 py-4">
        <div className="flex items-center gap-4">
          <NavLink
            to="/"
            className="text-sm font-semibold uppercase tracking-[0.3em] text-slate hover:text-[color:var(--accent)]"
          >
            Portfolio
          </NavLink>
        </div>
        <div className="hidden items-center gap-6 text-xs uppercase tracking-[0.35em] text-slate lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? 'text-[color:var(--accent)]'
                  : 'text-slate hover:text-[color:var(--accent)]'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <a
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-shell transition hover:border-[color:var(--accent)] hover:bg-white/10"
            href="mailto:sailendradastharu2000@gmail.com"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  )
}
