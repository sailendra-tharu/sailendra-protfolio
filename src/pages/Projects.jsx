import PageShell from '../components/PageShell.jsx'
import GlassCard from '../components/GlassCard.jsx'
import PageTransition from '../components/PageTransition.jsx'
import SectionReveal from '../components/SectionReveal.jsx'
import { motion } from 'framer-motion'
import { projects } from '../data/profile.js'
import clinicImg from '../assets/project-clinic.svg'
import calilioImg from '../assets/project-calilio.svg'
import shramsansarImg from '../assets/project-shramsansar.svg'

const projectImages = [clinicImg, calilioImg, shramsansarImg]

export default function Projects() {
  return (
    <PageTransition>
      <PageShell title="Selected work" subtitle="Projects">
        <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <SectionReveal key={project.name}>
            <motion.div
              whileHover={{ y: -8, rotate: -0.5 }}
              transition={{ type: 'spring', stiffness: 160, damping: 16 }}
            >
              <GlassCard className="flex h-full flex-col overflow-hidden">
              <img
                src={projectImages[index]}
                alt={`${project.name} preview`}
                className="h-44 w-full object-cover"
              />
              <div className="px-6 py-6">
              <h3 className="text-xl font-semibold text-shell">{project.name}</h3>
              <p className="mt-3 text-sm text-slate">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.focus.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-slate"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-slate"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              </div>
              </GlassCard>
            </motion.div>
          </SectionReveal>
        ))}
        </div>
      </PageShell>
    </PageTransition>
  )
}
