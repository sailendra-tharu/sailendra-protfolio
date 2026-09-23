import { motion } from 'framer-motion'
import PageShell from '../components/PageShell.jsx'
import PageTransition from '../components/PageTransition.jsx'
import SectionReveal from '../components/SectionReveal.jsx'
import { profile } from '../data/profile.js'

const focus = [
  'Product UI and dashboards',
  'Real-time communication UX',
  'Performance and frontend architecture',
]

export default function Contact() {
  return (
    <PageTransition>
      <PageShell
        title="Let’s work together"
        subtitle="Contact"
        description="For product work, frontend challenges, or a thoughtful conversation about what you’re building."
      >
        <div className="simple-contact-layout">
          <SectionReveal className="simple-contact-intro">
            <span className="section-title">Start a conversation</span>
            <h2>Have a project in mind?</h2>
            <p>I’m available for focused frontend work, product UI, performance improvements, and real-time experiences.</p>
            <div className="simple-contact-intro-actions">
              <a className="button-primary" href={`mailto:${profile.email}`}>Email me <span aria-hidden="true">↗</span></a>
              <a className="button-secondary" href={profile.resumeUrl} download>Download CV</a>
            </div>
          </SectionReveal>

          <SectionReveal className="simple-contact-card">
            <div className="simple-contact-card-heading">
              <span className="section-title">Direct contact</span>
              <span className="simple-contact-status"><i aria-hidden="true" /> Available</span>
            </div>
            <div className="simple-contact-details">
              <div>
                <span>Email</span>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>
              <div>
                <span>Phone</span>
                <a href={`tel:${profile.phone.replace(/\s+/g, '')}`}>{profile.phone}</a>
              </div>
              <div>
                <span>Location</span>
                <strong>{profile.location}</strong>
              </div>
              <div>
                <span>LinkedIn</span>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">View profile ↗</a>
              </div>
            </div>
          </SectionReveal>
        </div>
      </PageShell>
    </PageTransition>
  )
}
