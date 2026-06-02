import { motion } from 'framer-motion'

export default function SectionHeading({ badge, title, description, align = 'center' }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-3xl mb-12 sm:mb-16 ${alignClass}`}
    >
      {badge && (
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-950/50 border border-primary-200 dark:border-primary-800 rounded-full"
        >
          {badge}
        </motion.span>
      )}
      <h2 className="heading-lg text-surface-900 dark:text-white mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-body max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  )
}
