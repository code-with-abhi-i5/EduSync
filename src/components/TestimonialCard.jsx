import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export default function TestimonialCard({ testimonial, index }) {
  const initials = testimonial.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()

  const avatarColors = [
    'from-primary-500 to-primary-600',
    'from-secondary-500 to-secondary-600',
    'from-accent-500 to-accent-600',
    'from-emerald-500 to-emerald-600',
    'from-rose-500 to-rose-600',
    'from-amber-500 to-amber-600',
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group glass-card p-6 sm:p-8 hover:shadow-xl hover:shadow-primary-500/5 dark:hover:shadow-primary-500/10 transition-all duration-500"
    >
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < testimonial.rating
                ? 'text-amber-400 fill-amber-400'
                : 'text-surface-300 dark:text-surface-600'
            }`}
          />
        ))}
      </div>

      <p className="text-surface-600 dark:text-surface-300 leading-relaxed mb-6 text-sm sm:text-base">
        &ldquo;{testimonial.feedback}&rdquo;
      </p>

      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarColors[index % avatarColors.length]} flex items-center justify-center text-white font-semibold text-sm shrink-0`}>
          {initials}
        </div>
        <div className="min-w-0">
          <p className="font-semibold text-surface-900 dark:text-white text-sm truncate">
            {testimonial.name}
          </p>
          <p className="text-xs text-surface-500 dark:text-surface-400 truncate">
            {testimonial.role} · {testimonial.institution}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
