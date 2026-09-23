import { motion } from 'framer-motion'
import PageShell from '../components/PageShell.jsx'
import PageTransition from '../components/PageTransition.jsx'
import SectionReveal from '../components/SectionReveal.jsx'
import { experience, highlights } from '../data/profile.js'

export default function Experience() {
  return (
    <PageTransition>
      <PageShell title="Recent roles & impact" subtitle="Experience">
        <SectionReveal>
          <div className="grid gap-4 md:grid-cols-3">
            {highlights.map((item, index) => (
              <motion.article key={item.title} className="glass-card data-card" whileHover={{ y: -7 }}>
                <p className="section-title">0{index + 1}</p>
                <h3 className="mt-8 text-xl font-semibold tracking-[-0.05em] text-shell">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </SectionReveal>

        <div className="timeline mt-16">
          {experience.map((job, index) => (
            <SectionReveal key={`${job.company}-${job.period}`} className="timeline-card">
              <span className="timeline-dot" aria-hidden="true" />
              <article className="glass-card data-card">
                <div className="card-heading">
                  <div>
                    <p className="section-title">Chapter 0{index + 1}</p>
                    <h2 className="mt-4">{job.role}</h2>
                    <p className="mt-2 text-sm text-slate">{job.company} · {job.location}</p>
                    <p className="mt-1 text-sm font-semibold text-[color:var(--accent-2)]">{job.project}</p>
                  </div>
                  <span className="period-pill">{job.period}</span>
                </div>
                <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                  {job.points.map((point) => (
                    <motion.li key={point} className="list-check" whileHover={{ x: 5 }}>{point}</motion.li>
                  ))}
                </ul>
              </article>
            </SectionReveal>
          ))}
        </div>
      </PageShell>
    </PageTransition>
  )
}
