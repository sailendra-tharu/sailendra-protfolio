import PageShell from '../components/PageShell.jsx'
import GlassCard from '../components/GlassCard.jsx'
import PageTransition from '../components/PageTransition.jsx'
import SectionReveal from '../components/SectionReveal.jsx'
import { motion } from 'framer-motion'
import { experience, highlights } from '../data/profile.js'

export default function Experience() {
  return (
    <PageTransition>
      <PageShell title="Recent roles & impact" subtitle="Experience">
        <div className="space-y-6">
        <SectionReveal>
          <GlassCard className="px-6 py-8">
          <p className="section-title">Impact Highlights</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {highlights.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-white/10 px-4 py-4"
              >
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-shell">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate">{item.text}</p>
              </motion.div>
            ))}
          </div>
          </GlassCard>
        </SectionReveal>

        {experience.map((job) => (
          <SectionReveal key={job.role}>
            <GlassCard className="px-6 py-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-shell">{job.role}</h3>
                <p className="text-sm text-slate">
                  {job.company} · {job.location}
                </p>
                <p className="mt-2 text-sm text-slate">{job.project}</p>
              </div>
              <span className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate">
                {job.period}
              </span>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-slate">
              {job.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--accent)] shadow-glow" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            </GlassCard>
          </SectionReveal>
        ))}
        </div>
      </PageShell>
    </PageTransition>
  )
}
