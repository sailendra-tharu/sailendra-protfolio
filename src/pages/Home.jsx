import GlassCard from '../components/GlassCard.jsx'
import PageTransition from '../components/PageTransition.jsx'
import SectionReveal from '../components/SectionReveal.jsx'
import { motion } from 'framer-motion'
import { highlights, profile, services, stats } from '../data/profile.js'
import heroIllustration from '../assets/hero-illustration.svg'
import profilePhoto from '../assets/sailendra.jpeg'

export default function Home() {
  return (
    <PageTransition>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 mt-6">
        <SectionReveal className="grid gap-10 lg:grid-cols-2 items-start">
          <div className="max-w-2xl self-start -mt-20 lg:-mt-28">
            <p className="section-title fade-in">{profile.title}</p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-shell sm:text-5xl lg:text-6xl fade-in fade-delay-1">
              {profile.name}
            </h1>

            <p className="mt-4 text-lg text-slate fade-in fade-delay-2">
              {profile.subtitle}
            </p>

            <p className="mt-6 text-base leading-relaxed text-slate fade-in fade-delay-3">
              {profile.summary}
            </p>

            <p className='text-5xl'>
             Sailendra Das Tharu
            </p>

            <p className='mt-4'>
              I am Sailendra Das Tharu, a Software Engineer focused on building fast,
              reliable, and accessible web and mobile experiences. I specialize in
              React, TypeScript, and React Native, and I love crafting clean UI with
              real-time features that feel effortless to use.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate">
              <span>{profile.location}</span>
              <span className="text-[color:var(--accent)]">•</span>
              <span>Open to collaboration</span>
            </div>
          </div>

        <motion.div
          className="relative self-start"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute -left-6 -top-6 hidden h-28 w-28 overflow-hidden rounded-full sm:block">
          </div>
          <img
            src={profilePhoto}
            alt="Abstract illustration"
            className="w-full rounded-3xl shadow-2xl"
          />

            <div className="absolute -bottom-6 left-6 right-6 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -6, rotate: -1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 18 }}
                >
                  <GlassCard className="px-4 py-4 text-center">
                    <p className="text-lg font-semibold text-shell">
                      {stat.value}
                    </p>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate">
                      {stat.label}
                    </p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </SectionReveal>

        <SectionReveal className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <GlassCard className="px-6 py-6">
            <h2 className="text-2xl font-semibold text-shell">What I deliver</h2>
            <p className="mt-2 text-sm text-slate">
              End-to-end front-end engineering with a focus on speed, stability, and delightful user
              experiences.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <div key={service} className="rounded-2xl border border-white/10 px-4 py-4">
                  <p className="text-sm text-shell">{service}</p>
                </div>
              ))}
            </div>
          </GlassCard>
          <GlassCard className="px-6 py-6">
            <p className="section-title">Highlights</p>
            <div className="mt-6 space-y-4">
              {highlights.map((item) => (
                <div key={item.title} className="space-y-2">
                  <h3 className="text-lg font-semibold text-shell">{item.title}</h3>
                  <p className="text-sm text-slate">{item.text}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </SectionReveal>
      </div>
    </PageTransition>
  )
}
