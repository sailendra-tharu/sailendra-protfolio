import { motion } from 'framer-motion'
import PageShell from '../components/PageShell.jsx'
import PageTransition from '../components/PageTransition.jsx'
import SectionReveal from '../components/SectionReveal.jsx'

const focusAreas = [
  { title: 'Focused Learning', text: 'Built a strong technical foundation through structured study and hands-on practice.' },
  { title: 'Problem Solving', text: 'Learned to think logically, break systems down, and create practical solutions.' },
  { title: 'Continuous Growth', text: 'Always exploring new technologies and improving how I build products.' },
  { title: 'Future Ready', text: 'Building skills for a successful career in modern product engineering.' },
]

export default function Education() {
  return (
    <PageTransition>
      <PageShell
        title="Learning Builds a Better Future"
        subtitle="My Education"
        description=""
      >
        <div className="education-showcase">
          <div className="education-feature-grid">
            {focusAreas.map((area, index) => (
              <SectionReveal key={area.title} className="education-feature">
                <div className="education-feature-icon" aria-hidden="true">
                  {index === 0 && '🎓'}
                  {index === 1 && '💡'}
                  {index === 2 && '📈'}
                  {index === 3 && '</>'}
                </div>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
              </SectionReveal>
            ))}
          </div>

          <div className="education-main-grid">
            <SectionReveal className="education-major-card">
              <div className="education-major-header">
                <span className="section-title">Academic background</span>
                <span className="education-badge">2022</span>
              </div>

              <div className="education-major-visual" aria-hidden="true">
                <div className="education-cap" />
                <div className="education-book education-book-one" />
                <div className="education-book education-book-two" />
                <div className="education-book education-book-three" />
                <div className="education-plant" />
              </div>

              <div className="education-major-copy">
                <h2>Bachelor of Computer Application</h2>
                <p>Desh Bhagat University</p>
                <span>PUNJAB, INDIA</span>
              </div>

              <div className="education-major-summary">
                <p>
                  I completed my Bachelor&apos;s degree in Computer Application, where I gained a strong foundation in computer science,
                  programming, and problem solving. The curriculum helped me develop both technical knowledge and practical skills that continue
                  to support my growth as a developer.
                </p>
              </div>

              <div className="education-tags">
                <span>Key Learnings</span>
                <span>Programming</span>
                <span>Web Technologies</span>
                <span>Problem Solving</span>
                <span>Teamwork</span>
              </div>
            </SectionReveal>

            <SectionReveal className="education-practical-card">
              <span className="section-title">The practical part</span>
              <h2>Learning is most useful when it ships.</h2>
              <p>
                Since graduating, I&apos;ve applied that foundation to real-world projects, built applications, and worked with modern tools. I keep learning by building,
                exploring, and solving real problems.
              </p>
              <a className="education-link" href="/experience">
                View professional experience <span aria-hidden="true">↗</span>
              </a>

              <div className="education-laptop-illustration" aria-hidden="true">
                <div className="education-laptop">
                  <div className="education-screen">
                    <div className="education-code" />
                  </div>
                  <div className="education-keyboard" />
                </div>
                <div className="education-stack education-stack-one" />
                <div className="education-stack education-stack-two" />
                <div className="education-stack education-stack-three" />
              </div>
            </SectionReveal>
          </div>

          <SectionReveal className="education-practice-wrap">
            <div className="education-practice-head">
              <div>
                <p className="section-title">Continuous practice</p>
                <h2>What I keep improving.</h2>
              </div>
              <p>
                I&apos;m always learning, building, and improving — one project at a time.
              </p>
            </div>

            <div className="education-practice-list">
              {[
                { label: 'Academic foundation', text: 'Computer Science, Web Technologies, Problem Solving & Logical Thinking' },
                { label: '2022 - 2025', text: 'Building, shipping, iterating, and improving across products and customer-facing features.' },
                { label: 'Education goal', text: 'Education doesn&apos;t just give me a degree, it gave me the curiosity to keep learning and the confidence to build my own path.' },
              ].map((item, index) => (
                <motion.div key={item.label} className="education-practice-item" whileHover={{ x: 6 }}>
                  <span>{index + 1}</span>
                  <strong>{item.label}</strong>
                  <p>{item.text}</p>
                  <em aria-hidden="true">✈</em>
                </motion.div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </PageShell>
    </PageTransition>
  )
}
