import { motion } from 'framer-motion'
import GlassCard from '../components/GlassCard.jsx'
import PageShell from '../components/PageShell.jsx'
import PageTransition from '../components/PageTransition.jsx'
import SectionReveal from '../components/SectionReveal.jsx'
import { skillGroups, skills } from '../data/profile.js'

export default function Skills() {
  return (
    <PageTransition>
      <PageShell title="Tools I work with daily" subtitle="Technical skills">
        <div className="content-grid">
          <SectionReveal>
            <GlassCard className="data-card h-full">
              <p className="section-title">My toolkit</p>
              <p className="mt-6 max-w-2xl">Strong focus on modern React architecture, API integrations, and developer tooling to ship reliable experiences quickly.</p>
              <div className="mt-10 grid gap-9">
                {skillGroups.map((group, index) => (
                  <div key={group.title}>
                    <div className="mb-3 flex items-center justify-between">
                      <h2 className="text-lg font-semibold tracking-[-0.04em] text-shell">{group.title}</h2>
                      <span className="text-xs font-semibold text-[color:var(--accent-2)]">0{index + 1}</span>
                    </div>
                    <div className="tag-list">
                      {group.items.map((item) => (
                        <motion.span key={item} whileHover={{ y: -4, scale: 1.03 }} className="tag accent">{item}</motion.span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </SectionReveal>

          <SectionReveal>
            <GlassCard className="data-card h-full">
              <p className="section-title">Full toolbox</p>
              <div className="mt-8 grid grid-cols-2 gap-x-5">
                {skills.map((skill, index) => (
                  <motion.div key={skill} whileHover={{ x: 5 }} className="flex items-center gap-3 border-b border-[color:var(--line)] py-4">
                    <span className="text-xs font-semibold text-[color:var(--accent-2)]">{String(index + 1).padStart(2, '0')}</span>
                    <span className="text-sm text-shell">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </SectionReveal>
        </div>
      </PageShell>
    </PageTransition>
  )
}
