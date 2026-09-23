import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
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
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const navClass = ({ isActive }) => `nav-link${isActive ? ' active' : ''}`

  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <NavLink to="/" className="brand-lockup" aria-label="Sailendra Das Tharu home">
          <span className="brand-mark">SD</span>
          <span>Sailendra / 01</span>
        </NavLink>

        <div className="desktop-nav">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={navClass}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="nav-actions">
          <ThemeToggle />
          <a
            className="button-secondary"
            href="mailto:sailendradastharu2000@gmail.com"
          >
            Let’s talk <span aria-hidden="true">↗</span>
          </a>
          <button
            type="button"
            className="mobile-menu-button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span aria-hidden="true">{menuOpen ? '×' : '☰'}</span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={navClass}>
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  )
}
