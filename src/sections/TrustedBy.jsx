import { motion } from 'framer-motion'
import { Building2, Users, Bell, Star } from 'lucide-react'
import { useCountUp } from '../hooks/useCountUp'

function StatItem({ icon: Icon, value, suffix, label, delay }) {
  const { count, ref } = useCountUp(value, 2000)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center gap-3 p-6 sm:p-8"
    >
      <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-950/50 flex items-center justify-center mb-1">
        <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" strokeWidth={1.8} />
      </div>
      <div className="text-center">
        <span className="block text-3xl sm:text-4xl font-display font-bold text-surface-900 dark:text-white">
          {count.toLocaleString()}{suffix}
        </span>
        <span className="text-sm text-surface-500 dark:text-surface-400 mt-1 block">
          {label}
        </span>
      </div>
    </motion.div>
  )
}

export default function TrustedBy() {
  const stats = [
    { icon: Building2, value: 500, suffix: '+', label: 'Institutions', delay: 0 },
    { icon: Users, value: 50000, suffix: '+', label: 'Students', delay: 0.1 },
    { icon: Bell, value: 1000000, suffix: '+', label: 'Notifications Delivered', delay: 0.2 },
    { icon: Star, value: 4.9, suffix: '/5', label: 'User Rating', delay: 0.3 },
  ]

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden" id="trusted-by">
      <div className="absolute inset-0 bg-surface-50/50 dark:bg-surface-900/50" />

      <div className="container-main mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-medium text-surface-500 dark:text-surface-400 uppercase tracking-wider mb-10"
        >
          Trusted by Students. Loved by Institutions.
        </motion.p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
