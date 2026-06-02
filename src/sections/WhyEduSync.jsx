import { motion } from 'framer-motion'
import {
  Building,
  MessageSquare,
  TrendingUp,
  Shield,
  Zap,
  CheckCircle2,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const reasons = [
  {
    icon: Building,
    title: 'Centralized Campus Management',
    description: 'One platform to manage academics, attendance, events, and administration. No more switching between dozens of disconnected tools.',
    highlights: ['Single sign-on', 'Unified dashboard', 'Role-based access'],
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-950/30',
    iconColor: 'text-blue-600 dark:text-blue-400',
  },
  {
    icon: MessageSquare,
    title: 'Better Communication',
    description: 'Real-time announcements, direct messaging, and smart notifications ensure that no important information is ever missed.',
    highlights: ['Real-time updates', 'Push notifications', 'Group channels'],
    color: 'from-violet-500 to-violet-600',
    bgColor: 'bg-violet-50 dark:bg-violet-950/30',
    iconColor: 'text-violet-600 dark:text-violet-400',
  },
  {
    icon: TrendingUp,
    title: 'Academic Performance Insights',
    description: 'Track grades, attendance patterns, and learning progress with beautiful analytics that help identify strengths and improvement areas.',
    highlights: ['Visual analytics', 'Trend tracking', 'Performance reports'],
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950/30',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
  },
  {
    icon: Shield,
    title: 'Secure Data Handling',
    description: 'Enterprise-grade security with AES-256 encryption, RBAC, and compliance with educational data privacy standards.',
    highlights: ['End-to-end encryption', 'GDPR compliant', 'Regular audits'],
    color: 'from-rose-500 to-rose-600',
    bgColor: 'bg-rose-50 dark:bg-rose-950/30',
    iconColor: 'text-rose-600 dark:text-rose-400',
  },
  {
    icon: Zap,
    title: 'Student Productivity',
    description: 'From task management to study materials, everything students need to excel academically is right at their fingertips.',
    highlights: ['Task boards', 'Note sharing', 'Calendar sync'],
    color: 'from-amber-500 to-amber-600',
    bgColor: 'bg-amber-50 dark:bg-amber-950/30',
    iconColor: 'text-amber-600 dark:text-amber-400',
  },
]

export default function WhyEduSync() {
  return (
    <section className="section-padding relative overflow-hidden" id="why-edusync">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-400/5 dark:bg-primary-400/3 rounded-full blur-3xl" />

      <div className="container-main mx-auto relative z-10">
        <SectionHeading
          badge="Why EduSync"
          title="Why campuses choose EduSync"
          description="See why hundreds of institutions trust EduSync to power their digital campus transformation."
        />

        <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group glass-card p-6 sm:p-8 hover:shadow-xl hover:shadow-primary-500/5 dark:hover:shadow-primary-500/10 transition-all duration-500"
              >
                <div className="flex flex-col sm:flex-row gap-5 sm:gap-6">
                  <div className={`w-14 h-14 rounded-2xl ${reason.bgColor} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 ${reason.iconColor}`} strokeWidth={1.8} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-display font-semibold text-surface-900 dark:text-white mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-sm sm:text-base text-surface-500 dark:text-surface-400 leading-relaxed mb-4">
                      {reason.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {reason.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-950/50 border border-primary-100 dark:border-primary-800/50 rounded-full"
                        >
                          <CheckCircle2 className="w-3 h-3" />
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
