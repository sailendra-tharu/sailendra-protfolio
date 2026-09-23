import { motion } from 'framer-motion'
import PageShell from '../components/PageShell.jsx'
import PageTransition from '../components/PageTransition.jsx'
import SectionReveal from '../components/SectionReveal.jsx'

const focusAreas = [
  { title: 'Performance', text: 'Core Web Vitals, code splitting, lazy loading, caching, and perceived speed.' },
  { title: 'Accessible UI', text: 'Responsive interfaces and reusable patterns that stay clear across devices.' },
  { title: 'Real-time systems', text: 'Video, messaging, and data flows that keep product experiences responsive.' },
]

export default function Education() {
  return (
    <PageTransition>
      <PageShell
        title="Education & foundations"
        subtitle="Education"
        description="A formal foundation in computer applications, strengthened through hands-on product engineering."
      >
        <div className="simple-education-layout">
          <SectionReveal className="simple-education-degree">
            <div className="simple-education-degree-top">
              <span className="section-title">Academic background</span>
              <span className="simple-education-year">2022</span>
            </div>
            <div className="simple-education-degree-main">
              <h2>Bachelor of Computer Application</h2>
              <p>Desh Bhagat University</p>
              <span>Punjab, India</span>
            </div>
            <div className="simple-education-degree-bottom">
              <span>Graduated</span>
              <strong>Computer applications & software foundations</strong>
            </div>
          </SectionReveal>

          <SectionReveal className="simple-education-note">
            <span className="section-title">The practical part</span>
            <h2>Learning is most useful when it ships.</h2>
            <p>Since graduating, I’ve applied that foundation to healthcare, communication, and job platform products used by real teams and customers.</p>
            <a className="text-link" href="/experience">View professional experience <span aria-hidden="true">↗</span></a>
          </SectionReveal>
        </div>

        <SectionReveal className="simple-education-focus">
          <div className="simple-section-heading">
            <div>
              <p className="section-title">Continuous practice</p>
              <h2>What I keep improving.</h2>
            </div>
            <p>The degree was the starting point. Every project adds another layer of product, technical, and team experience.</p>
          </div>
          <div className="simple-focus-list">
            {focusAreas.map((area, index) => (
              <motion.article key={area.title} className="simple-focus-row" whileHover={{ x: 6 }}>
                <span>0{index + 1}</span>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
                <span className="simple-focus-arrow" aria-hidden="true">↗</span>
              </motion.article>
            ))}
          </div>
        </SectionReveal>
      </PageShell>
    </PageTransition>
  )
}
