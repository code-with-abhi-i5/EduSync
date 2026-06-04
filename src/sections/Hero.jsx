import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Play } from 'lucide-react'
import heroImg from '../assets/heroimg.png'

export default function Hero() {
  const handleClick = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) {
      const offset = 80
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" id="hero">
      {/* Background decorations */}
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400/10 dark:bg-primary-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-400/10 dark:bg-secondary-400/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-400/5 rounded-full blur-3xl" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }} />

      <div className="container-main mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-20 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-primary-50 dark:bg-primary-950/50 border border-primary-200 dark:border-primary-800 rounded-full"
            >
              <Sparkles className="w-4 h-4 text-primary-600 dark:text-primary-400" />
              <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                Smart Campus. Smarter You.
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="heading-xl text-surface-900 dark:text-white mb-6"
            >
              Smart Campus.{' '}
              <br />
              <span className="gradient-text">Smarter Future.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-body max-w-lg mb-8"
            >
              Transform academics, communication, attendance tracking, notifications,
              campus engagement, and student productivity from a single intelligent platform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a
                href="/SmartSpire.apk"
                download
                className="btn-primary text-base px-7 py-3.5"
              >
                Download App
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#features"
                onClick={(e) => handleClick(e, '#features')}
                className="btn-secondary text-base px-7 py-3.5"
              >
                <Play className="w-4 h-4" />
                Explore Features
              </a>
            </motion.div>

            {/* Quick features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: '📋', title: 'Stay Updated', desc: 'Notices, events & announcements' },
                { icon: '📊', title: 'Track Progress', desc: 'Attendance, results & performance' },
                { icon: '💬', title: 'Quick Access', desc: 'All campus services in one place' },
                { icon: '🔒', title: 'Secure & Reliable', desc: 'Your data is safe with us' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/50 dark:hover:bg-surface-800/50 transition-colors"
                >
                  <span className="text-xl mt-0.5">{item.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-surface-900 dark:text-white">{item.title}</p>
                    <p className="text-xs text-surface-500 dark:text-surface-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right content — Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Floating decorative elements */}
            {/* Floating Educational UI Cards */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 sm:-top-8 -right-4 sm:-right-8 z-20"
            >
              <div className="glass px-4 py-2 rounded-xl flex items-center gap-3 shadow-lg">
                <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold">
                  A+
                </div>
                <div className="hidden sm:block">
                  <p className="text-xs font-bold text-surface-900 dark:text-white">Mathematics</p>
                  <p className="text-[10px] text-surface-500">Top 5% in class</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute top-24 sm:top-32 -left-2 sm:-left-8 z-30"
            >
              <div className="glass px-4 py-2 rounded-xl flex items-center gap-3 shadow-lg">
                <div className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400">
                  📚
                </div>
                <div className="hidden sm:block">
                  <p className="text-xs font-bold text-surface-900 dark:text-white">Physics Class</p>
                  <p className="text-[10px] text-surface-500">Starts in 10 mins</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [-8, 12, -8] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              className="absolute bottom-28 sm:bottom-32 -right-6 sm:-right-16 z-20"
            >
              <div className="glass px-4 py-2 rounded-xl flex items-center gap-3 shadow-lg">
                <div className="p-1.5 rounded-full bg-accent-100 dark:bg-accent-900/50 text-accent-600 dark:text-accent-400">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="hidden sm:block">
                  <p className="text-xs font-bold text-surface-900 dark:text-white">Assignment</p>
                  <p className="text-[10px] text-surface-500">Submitted on time</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [8, -8, 8] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              className="absolute bottom-8 sm:bottom-12 -left-4 sm:-left-12 z-20"
            >
              <div className="glass px-4 py-2 rounded-xl flex items-center gap-3 shadow-lg">
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold">
                  98%
                </div>
                <div className="hidden sm:block">
                  <p className="text-xs font-bold text-surface-900 dark:text-white">Attendance</p>
                  <p className="text-[10px] text-surface-500">Perfect this month</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [-5, 5, -5], scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-8 sm:top-12 left-4 sm:-left-4 z-30"
            >
              <div className="bg-rose-500 text-white px-3 py-1.5 rounded-full text-[10px] font-bold shadow-lg shadow-rose-500/30 flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                Live Event
              </div>
            </motion.div>

            {/* Phone frame */}
            <div className="relative w-[280px] sm:w-[320px] lg:w-[340px] z-10">
              {/* Glow effect behind phone */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 via-secondary-400/20 to-accent-400/20 rounded-[3rem] blur-2xl scale-105 -z-10" />

              {/* Phone bezel */}
              <div className="relative bg-surface-900 dark:bg-surface-800 rounded-[2.5rem] p-3 shadow-2xl shadow-surface-900/20 dark:shadow-black/40">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-surface-900 dark:bg-surface-800 rounded-b-2xl z-20" />

                {/* Screen */}
                <div className="relative rounded-[2rem] overflow-hidden bg-white">
                  <img
                    src={heroImg}
                    alt="SmartSpire App Interface"
                    className="w-full h-auto"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
