import PageShell from '../components/PageShell.jsx'
import GlassCard from '../components/GlassCard.jsx'
import PageTransition from '../components/PageTransition.jsx'
import SectionReveal from '../components/SectionReveal.jsx'
import { motion } from 'framer-motion'

const focusAreas = [
  'React performance patterns and Core Web Vitals',
  'Accessible UI and inclusive design systems',
  'Real-time collaboration and streaming experiences',
]

export default function Education() {
  return (
    <PageTransition>
      <PageShell title="Bachelor of Computer Application" subtitle="Education">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <SectionReveal>
            <GlassCard className="px-6 py-8">
              <h2 className="text-2xl font-semibold text-shell">Desh Bhagat University</h2>
              <p className="mt-2 text-sm text-slate">Graduated 2022</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate">Concentration</p>
                  <p className="mt-2 text-sm text-shell">Software Engineering Foundations</p>
                </div>
                <div className="rounded-2xl border border-white/10 px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate">Location</p>
                  <p className="mt-2 text-sm text-shell">Punjab, India</p>
                </div>
              </div>
            </GlassCard>
          </SectionReveal>
          <SectionReveal>
            <GlassCard className="px-6 py-8">
              <p className="section-title">Learning Focus</p>
              <h3 className="mt-3 text-2xl font-semibold text-shell">Always improving</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate">
                {focusAreas.map((area) => (
                  <motion.li
                    key={area}
                    whileHover={{ x: 6 }}
                    className="flex gap-3"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--accent)] shadow-glow" />
                    <span>{area}</span>
                  </motion.li>
                ))}
              </ul>
            </GlassCard>
          </SectionReveal>
        </div>
      </PageShell>
    </PageTransition>
  )
}
