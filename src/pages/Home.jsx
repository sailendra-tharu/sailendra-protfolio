import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition.jsx'
import SectionReveal from '../components/SectionReveal.jsx'
import { experience, profile, stats } from '../data/profile.js'
import profilePhoto from '../assets/sailendra.jpeg'

const ease = [0.22, 1, 0.36, 1]

const rise = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay, ease },
  }),
}

const practice = [
  { number: '01', title: 'Product interfaces', text: 'Clear, responsive UI for products people use every day.' },
  { number: '02', title: 'Performance systems', text: 'Fast loading experiences shaped by real user impact.' },
  { number: '03', title: 'Real-time features', text: 'Video, chat, data, and feedback loops that feel immediate.' },
  { number: '04', title: 'Quality by default', text: 'Reusable patterns, tests, monitoring, and maintainable code.' },
]

export default function Home() {
  const { scrollYProgress } = useScroll()
  const photoY = useTransform(scrollYProgress, [0, 0.4], [0, -45])
  const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 180])

  return (
    <PageTransition>
      <main className="home-page home-redesign">
        <section className="home-pro-hero page-width">
          <div className="home-pro-copy">
            <motion.div className="home-pro-kicker" initial="hidden" animate="show" variants={rise} custom={0.08}>
              <span className="status-dot" aria-hidden="true" />
              <span>Software Engineer</span>
              <span className="home-pro-kicker-line" />
              <span>Kathmandu, Nepal</span>
            </motion.div>

            <h1 className="home-pro-title">
              <motion.span initial="hidden" animate="show" variants={rise} custom={0.16}>Sailendra</motion.span>
              <motion.span className="home-pro-title-accent" initial="hidden" animate="show" variants={rise} custom={0.25}>Das Tharu</motion.span>
            </h1>

            <motion.p className="home-pro-subtitle" initial="hidden" animate="show" variants={rise} custom={0.38}>
              {profile.subtitle}
            </motion.p>
            <motion.p className="home-pro-summary" initial="hidden" animate="show" variants={rise} custom={0.45}>
              {profile.summary}
            </motion.p>

            <motion.div className="home-pro-actions" initial="hidden" animate="show" variants={rise} custom={0.56}>
              <Link className="button-primary" to="/projects">View selected work <span aria-hidden="true">↗</span></Link>
              <a className="button-secondary" href={`mailto:${profile.email}`}>Let’s talk</a>
            </motion.div>

            <motion.div className="home-pro-proof" initial="hidden" animate="show" variants={rise} custom={0.68}>
              {stats.map((stat) => (
                <div key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="home-pro-visual"
            initial={{ opacity: 0, x: 30, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.95, delay: 0.25, ease }}
          >
            <motion.div className="home-pro-ring" style={{ rotate: ringRotate }} aria-hidden="true" />
            <motion.div className="home-pro-photo-card" style={{ y: photoY }}>
              <img src={profilePhoto} alt="Sailendra Das Tharu in front of a mountain landscape" />
              <div className="home-pro-photo-caption">
                <span>Based in</span>
                <strong>Kathmandu / Nepal</strong>
              </div>
            </motion.div>
            <div className="home-pro-availability">
              <span className="status-dot" aria-hidden="true" />
              <span><strong>Open to work</strong> on thoughtful products</span>
            </div>
          </motion.div>
        </section>

        <motion.div className="home-pro-signal page-width" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.05, duration: 0.7 }}>
          <span>Currently focused on</span>
          <div className="home-pro-signal-track">
            {['React', 'TypeScript', 'React Native', 'Supabase', 'Performance', 'Real-time UX'].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <span className="home-pro-signal-arrow">↓</span>
        </motion.div>

        <SectionReveal className="home-pro-section page-width">
          <div className="home-pro-section-head">
            <div>
              <p className="section-title">What I do</p>
              <h2>Engineering with a product mindset.</h2>
            </div>
            <p>From first component to production feedback loop, I care about the full experience—not only the pixels.</p>
          </div>
          <div className="home-pro-practice-grid">
            {practice.map((item, index) => (
              <motion.article
                key={item.number}
                className="home-pro-practice-card"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease }}
                whileHover={{ y: -8 }}
              >
                <span>{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <span className="home-pro-card-arrow" aria-hidden="true">↗</span>
              </motion.article>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal className="home-pro-section home-pro-career page-width">
          <div className="home-pro-career-intro">
            <p className="section-title">Experience</p>
            <h2>Three years of making complex things feel simple.</h2>
            <Link className="text-link" to="/experience">See full experience <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="home-pro-career-list">
            {experience.map((job, index) => (
              <motion.div key={job.company} className="home-pro-career-row" whileHover={{ x: 8 }}>
                <span className="home-pro-career-number">0{index + 1}</span>
                <div>
                  <h3>{job.role}</h3>
                  <p>{job.company} · {job.project}</p>
                </div>
                <span className="home-pro-career-period">{job.period}</span>
              </motion.div>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal className="home-pro-endcap page-width">
          <div>
            <p className="section-title">Next up</p>
            <h2>Let’s build something people enjoy using.</h2>
          </div>
          <Link className="button-primary" to="/contact">Start a conversation <span aria-hidden="true">↗</span></Link>
        </SectionReveal>
      </main>
    </PageTransition>
  )
}
