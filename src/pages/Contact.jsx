import PageShell from '../components/PageShell.jsx'
import GlassCard from '../components/GlassCard.jsx'
import PageTransition from '../components/PageTransition.jsx'
import SectionReveal from '../components/SectionReveal.jsx'
import { motion } from 'framer-motion'
import { profile } from '../data/profile.js'

const focus = ['Product UI and dashboards', 'Real-time communication UX', 'Performance optimization']

export default function Contact() {
  return (
    <PageTransition>
      <PageShell title="Let’s Build" subtitle="Contact">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <SectionReveal>
            <GlassCard className="px-6 py-8">
              <h2 className="text-2xl font-semibold text-shell">Ready to ship your next product?</h2>
              <p className="mt-3 max-w-xl text-sm text-slate">
                Reach out for front-end builds, performance improvements, or real-time experiences.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  className="gradient-border relative inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-shell"
                  href={`mailto:${profile.email}`}
                >
                  Start a Project
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-shell hover:border-[color:var(--accent)]"
                  href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                >
                  Book a Call
                </a>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {focus.map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ y: -4 }}
                    className="rounded-2xl border border-white/10 px-4 py-4"
                  >
                    <p className="text-sm text-shell">{item}</p>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </SectionReveal>
          <SectionReveal>
            <GlassCard className="px-6 py-8">
              <p className="section-title">Direct</p>
              <div className="mt-4 space-y-3 text-sm text-shell">
                <p>
                  <span className="text-slate">Email:</span>{' '}
                  <a className="hover:text-[color:var(--accent)]" href={`mailto:${profile.email}`}>
                    {profile.email}
                  </a>
                </p>
                <p>
                  <span className="text-slate">Phone:</span>{' '}
                  <a
                    className="hover:text-[color:var(--accent)]"
                    href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                  >
                    {profile.phone}
                  </a>
                </p>
                <p>
                  <span className="text-slate">Location:</span> {profile.location}
                </p>
                <p>
                  <span className="text-slate">LinkedIn:</span>{' '}
                  <a className="hover:text-[color:var(--accent)]" href={profile.linkedin} target="_blank" rel="noreferrer">
                    linkedin.com/in/sailendra-das-tharu
                  </a>
                </p>
              </div>
            </GlassCard>
          </SectionReveal>
        </div>
      </PageShell>
    </PageTransition>
  )
}
