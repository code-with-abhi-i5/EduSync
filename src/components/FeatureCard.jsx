import { motion } from 'framer-motion'

export default function FeatureCard({ feature, index }) {
  const Icon = feature.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group glass-card p-6 sm:p-8 hover:shadow-xl hover:shadow-primary-500/5 dark:hover:shadow-primary-500/10 hover:-translate-y-1 transition-all duration-500"
    >
      <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className={`w-6 h-6 ${feature.iconColor}`} strokeWidth={1.8} />
      </div>

      <h3 className="text-lg font-display font-semibold text-surface-900 dark:text-white mb-2">
        {feature.title}
      </h3>

      <p className="text-sm text-surface-500 dark:text-surface-400 leading-relaxed">
        {feature.description}
      </p>

      <div className="mt-5 flex items-center gap-1.5 text-primary-600 dark:text-primary-400 text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
        <span>Learn more</span>
        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </motion.div>
  )
}
