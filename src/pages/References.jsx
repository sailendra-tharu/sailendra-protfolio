import { motion } from 'framer-motion'
import GlassCard from '../components/GlassCard.jsx'
import PageShell from '../components/PageShell.jsx'
import PageTransition from '../components/PageTransition.jsx'
import SectionReveal from '../components/SectionReveal.jsx'
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
        <div className="content-grid">
          <div className="grid gap-4">
            {references.map((ref, index) => (
              <SectionReveal key={ref.name}>
                <GlassCard className="data-card">
                  <div className="card-heading">
                    <div>
                      <p className="section-title">Reference 0{index + 1}</p>
                      <h2 className="mt-7">{ref.name}</h2>
                      <p className="mt-2 text-sm text-slate">{ref.title}</p>
                    </div>
                    <span className="text-3xl text-[color:var(--accent)]">✦</span>
                  </div>
                  <div className="mt-8 grid gap-3 border-t border-[color:var(--line)] pt-5 text-sm text-shell">
                    <a className="hover:text-[color:var(--accent-2)]" href={`mailto:${ref.email}`}>{ref.email}</a>
                    <a className="hover:text-[color:var(--accent-2)]" href={`tel:${ref.phone.replace(/\s+/g, '')}`}>{ref.phone}</a>
                  </div>
                </GlassCard>
              </SectionReveal>
            ))}
          </div>
          <SectionReveal>
            <GlassCard className="data-card h-full">
              <p className="section-title">Collaboration style</p>
              <h2 className="mt-8 text-4xl font-semibold tracking-[-0.08em] text-shell">What teams can expect.</h2>
              <ul className="mt-10 grid gap-5">
                {collaboration.map((item, index) => (
                  <motion.li key={item} whileHover={{ x: 6 }} className="list-check border-t border-[color:var(--line)] pt-4">
                    <span className="sr-only">0{index + 1}</span>{item}
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
