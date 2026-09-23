import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Skills from './pages/Skills.jsx'
import Experience from './pages/Experience.jsx'
import Projects from './pages/Projects.jsx'
import Education from './pages/Education.jsx'
import References from './pages/References.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  const location = useLocation()
  return (
    <div className="site-shell text-shell">
      <div className="site-grid" aria-hidden="true" />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/references" element={<References />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}
