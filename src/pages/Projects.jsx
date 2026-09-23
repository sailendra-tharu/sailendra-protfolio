import { motion } from 'framer-motion'
import PageShell from '../components/PageShell.jsx'
import PageTransition from '../components/PageTransition.jsx'
import SectionReveal from '../components/SectionReveal.jsx'
import { projects } from '../data/profile.js'
import clinicImg from '../assets/project-clinic.svg'
import calilioImg from '../assets/project-calilio.svg'
import shramsansarImg from '../assets/project-shramsansar.svg'

const projectImages = [clinicImg, calilioImg, shramsansarImg]

const projectNumbers = ['01', '02', '03']

export default function Projects() {
  return (
    <PageTransition>
      <PageShell
        title="Work that shipped"
        subtitle="Selected projects"
        description="A selection of product work across healthcare, communication, and employment—built with care for the people using it and the teams maintaining it."
      >
        <div className="projects-pro-list">
          {projects.map((project, index) => (
            <SectionReveal key={project.name}>
              <motion.article
                className={`projects-pro-case${index % 2 ? ' projects-pro-case-reverse' : ''}`}
                whileHover="hover"
              >
                <motion.div className="projects-pro-media" variants={{ hover: { scale: 1.015 } }} transition={{ duration: 0.5 }}>
                  <img src={projectImages[index]} alt={`${project.name} preview`} />
                  <div className="projects-pro-media-shade" />
                  <span className="projects-pro-number">{projectNumbers[index]} <small>/ 03</small></span>
                  <span className="projects-pro-view">View case <span aria-hidden="true">↗</span></span>
                </motion.div>
                <div className="projects-pro-content">
                  <div className="projects-pro-heading">
                    <p className="section-title">{project.label}</p>
                    <span className="projects-pro-role">{project.role}</span>
                  </div>
                  <h2>{project.name}</h2>
                  <p className="projects-pro-description">{project.description}</p>
                  <p className="projects-pro-details">{project.details}</p>
                  <div className="projects-pro-data">
                    <div>
                      <span>Focus</span>
                      <div className="tag-list">
                        {project.focus.map((tag) => <span key={tag} className="tag accent">{tag}</span>)}
                      </div>
                    </div>
                    <div>
                      <span>Stack</span>
                      <div className="tag-list">
                        {project.tech.map((tag) => <span key={tag} className="tag">{tag}</span>)}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal className="projects-pro-note">
          <span className="section-title">Beyond the case studies</span>
          <p>Personal work has also included Supabase-backed full-stack applications and payment flows with eSewa and Khalti.</p>
        </SectionReveal>
      </PageShell>
    </PageTransition>
  )
}
