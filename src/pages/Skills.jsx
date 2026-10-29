import { motion } from 'framer-motion'
import PageShell from '../components/PageShell.jsx'
import PageTransition from '../components/PageTransition.jsx'
import { skillGroups, skills } from '../data/profile.js'

const groupAccent = {
  Frontend: 'skill-pill--blue',
  'Backend & APIs': 'skill-pill--violet',
  Payments: 'skill-pill--orange',
  'Quality & tooling': 'skill-pill--green',
}

export default function Skills() {
  return (
    <PageTransition>
      <PageShell
        title="Tools I work with daily"
        subtitle="Technical skills"
        description="I build modern digital products with a balance of product thinking, system reliability, and clean frontend craftsmanship."
      >
        <div className="skills-shell">
          <div className="skills-main">
            <div className="skills-grid">
              {skillGroups.map((group, index) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  className="skill-group-card"
                >
                  <div className="skill-group-header">
                    <div className="skill-group-title-wrap">
                      <span className="skill-group-icon" aria-hidden="true">
                        {index + 1}
                      </span>
                      <h2>{group.title}</h2>
                    </div>
                    <span className="skill-count">{group.items.length} tools</span>
                  </div>

                  <p className="skill-group-copy">
                    {group.title === 'Frontend' && 'Designing responsive interfaces and product experiences with scale in mind.'}
                    {group.title === 'Backend & APIs' && 'Connecting systems, shaping APIs, and keeping data flows reliable.'}
                    {group.title === 'Payments' && 'Enabling secure digital transactions and product monetization flows.'}
                    {group.title === 'Quality & tooling' && 'Shipping confidently with monitoring, testing, and production readiness.'}
                  </p>

                  <div className="skill-tag-list">
                    {group.items.map((item) => (
                      <motion.span
                        key={item}
                        whileHover={{ y: -3, scale: 1.02 }}
                        className={`skill-pill ${groupAccent[group.title] || 'skill-pill--blue'}`}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <aside className="skills-sidebar">
            <div className="toolkit-panel">
              <div className="toolkit-header">
                <div className="toolkit-brand">
                  <span className="toolkit-mini-mark" aria-hidden="true">▣</span>
                  <span>Tech Toolkit</span>
                </div>
              </div>

              <p className="toolkit-subtext">A quick look at the technologies I work with.</p>

              <label className="toolkit-search" aria-label="Search technologies">
                <span aria-hidden="true">⌕</span>
                <input type="text" placeholder="Search technologies..." readOnly />
              </label>

              <div className="toolkit-groups">
                {skillGroups.map((group) => (
                  <div key={group.title} className="toolkit-group">
                    <div className="toolkit-group-head">
                      <span className="toolkit-group-name">{group.title}</span>
                      <span className="toolkit-group-count">{group.items.length}</span>
                    </div>
                    <div className="toolkit-pills">
                      {group.items.map((item) => (
                        <span key={item} className={`toolkit-pill ${groupAccent[group.title] || 'skill-pill--blue'}`}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className="full-toolbox-block">
          <div className="full-toolbox-header">
            <p className="section-title">Full toolbox</p>
            <span>{skills.length} technologies</span>
          </div>

          <div className="full-toolbox-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                whileHover={{ x: 4 }}
                className="full-toolbox-item"
              >
                <span className="toolbox-number">{String(index + 1).padStart(2, '0')}</span>
                <span className="toolbox-name">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </PageShell>
    </PageTransition>
  )
}
