import PageShell from '../components/PageShell.jsx'
import GlassCard from '../components/GlassCard.jsx'
import PageTransition from '../components/PageTransition.jsx'
import SectionReveal from '../components/SectionReveal.jsx'
import { motion } from 'framer-motion'
import { references } from '../data/profile.js'

const collaboration = [
  'Clear communication and proactive updates',
  'Focus on accessibility and real-user impact',
  'Reusable components that scale with the team',
]

export default function References() {
  return (
    <PageTransition>
      <PageShell title="Trusted by leaders" subtitle="References">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-6">
          {references.map((ref) => (
            <SectionReveal key={ref.name}>
              <GlassCard className="px-6 py-6">
                <h3 className="text-lg font-semibold text-shell">{ref.name}</h3>
                <p className="text-sm text-slate">{ref.title}</p>
                <div className="mt-4 space-y-2 text-sm text-shell">
                  <p>
                    <span className="text-slate">Email:</span>{' '}
                    <a className="hover:text-[color:var(--accent)]" href={`mailto:${ref.email}`}>
                      {ref.email}
                    </a>
                  </p>
                  <p>
                    <span className="text-slate">Phone:</span>{' '}
                    <a
                      className="hover:text-[color:var(--accent)]"
                      href={`tel:${ref.phone.replace(/\s+/g, '')}`}
                    >
                      {ref.phone}
                    </a>
                  </p>
                </div>
              </GlassCard>
            </SectionReveal>
          ))}
        </div>
        <SectionReveal>
          <GlassCard className="px-6 py-8">
            <p className="section-title">Collaboration Style</p>
            <h3 className="mt-3 text-2xl font-semibold text-shell">What teams can expect</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate">
              {collaboration.map((item) => (
                <motion.li key={item} whileHover={{ x: 6 }} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--accent)] shadow-glow" />
                  <span>{item}</span>
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
