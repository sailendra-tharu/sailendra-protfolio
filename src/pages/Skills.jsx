import GlassCard from '../components/GlassCard.jsx'
import PageShell from '../components/PageShell.jsx'
import PageTransition from '../components/PageTransition.jsx'
import SectionReveal from '../components/SectionReveal.jsx'
import { motion } from 'framer-motion'
import { skillGroups, skills } from '../data/profile.js'

export default function Skills() {
  return (
    <PageTransition>
      <PageShell title="Tools I work with daily" subtitle="Technical Skills">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <SectionReveal>
            <GlassCard className="px-6 py-8">
          <p className="max-w-2xl text-sm text-slate">
            Strong focus on modern React architecture, API integrations, and developer tooling to ship
            reliable experiences quickly.
          </p>
          <div className="mt-8 space-y-6">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-lg font-semibold text-shell">{group.title}</h3>
                <div className="mt-3 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{ y: -4, scale: 1.03 }}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </div>
            </GlassCard>
          </SectionReveal>
          <SectionReveal>
            <GlassCard className="px-6 py-8">
          <p className="section-title">Full Toolbox</p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {skills.map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-white/10 px-4 py-3"
              >
                <p className="text-sm text-shell">{skill}</p>
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
