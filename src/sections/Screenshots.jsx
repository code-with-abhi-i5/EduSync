import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import heroImg from '../assets/heroimg.png'
import img1 from '../assets/image.png'
import img2 from '../assets/image copy.png'
import img3 from '../assets/image copy 2.png'
import img4 from '../assets/image copy 3.png'
import img5 from '../assets/image copy 4.png'

const screenshots = [
  { id: 1, title: 'Home Dashboard', description: 'Your personalized campus command center', src: heroImg },
  { id: 2, title: 'Attendance Tracker', description: 'Real-time attendance monitoring', src: img1 },
  { id: 3, title: 'Results & Analytics', description: 'Comprehensive performance insights', src: img2 },
  { id: 4, title: 'Smart Notifications', description: 'Never miss important updates', src: img3 },
  { id: 5, title: 'Study Materials', description: 'All your notes in one place', src: img4 },
  { id: 6, title: 'Profile', description: 'View your profile', src: img5 },
]

export default function Screenshots() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const next = () => setActiveIndex((prev) => (prev + 1) % screenshots.length)
  const prev = () => setActiveIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)

  return (
    <section className="section-padding relative overflow-hidden bg-surface-50/50 dark:bg-surface-900/30" id="screenshots">
      <div className="container-main mx-auto relative z-10">
        <SectionHeading
          badge="Screenshots"
          title="See SmartSpire in action"
          description="Explore the beautiful, intuitive interface designed for the modern campus experience."
        />

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-4 sm:gap-8">
            {/* Prev button */}
            <button
              onClick={prev}
              className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-surface-800 border border-surface-200 dark:border-surface-700 flex items-center justify-center text-surface-600 dark:text-surface-300 hover:bg-surface-50 dark:hover:bg-surface-700 transition-all shadow-sm hover:shadow-md"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Phone mockups */}
            <div className="relative flex items-center justify-center h-[500px] sm:h-[580px] lg:h-[640px] w-full max-w-3xl">
              {screenshots.map((screenshot, i) => {
                const offset = i - activeIndex
                const absOffset = Math.abs(offset)

                if (absOffset > 2) return null

                return (
                  <motion.div
                    key={screenshot.id}
                    animate={{
                      x: offset * (window.innerWidth < 640 ? 80 : 160),
                      scale: absOffset === 0 ? 1 : absOffset === 1 ? 0.85 : 0.7,
                      opacity: absOffset === 0 ? 1 : absOffset === 1 ? 0.5 : 0.2,
                      zIndex: 10 - absOffset,
                    }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute cursor-pointer"
                    onClick={() => {
                      if (absOffset === 0) {
                        setLightboxOpen(true)
                      } else {
                        setActiveIndex(i)
                      }
                    }}
                  >
                    <div className="w-[220px] sm:w-[260px] lg:w-[280px]">
                      {/* Phone bezel */}
                      <div className="bg-surface-900 dark:bg-surface-800 rounded-[2rem] sm:rounded-[2.5rem] p-2.5 sm:p-3 shadow-2xl shadow-surface-900/20 dark:shadow-black/40">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-surface-900 dark:bg-surface-800 rounded-b-xl z-20" />
                        <div className="rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden bg-white">
                          <img
                            src={screenshot.src}
                            alt={screenshot.title}
                            className="w-full h-auto"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Next button */}
            <button
              onClick={next}
              className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-surface-800 border border-surface-200 dark:border-surface-700 flex items-center justify-center text-surface-600 dark:text-surface-300 hover:bg-surface-50 dark:hover:bg-surface-700 transition-all shadow-sm hover:shadow-md"
              aria-label="Next screenshot"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Caption */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center mt-8"
          >
            <h3 className="text-lg font-display font-semibold text-surface-900 dark:text-white">
              {screenshots[activeIndex].title}
            </h3>
            <p className="text-sm text-surface-500 dark:text-surface-400 mt-1">
              {screenshots[activeIndex].description}
            </p>
          </motion.div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {screenshots.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activeIndex
                  ? 'w-8 bg-primary-600 dark:bg-primary-400'
                  : 'bg-surface-300 dark:bg-surface-600 hover:bg-surface-400 dark:hover:bg-surface-500'
                  }`}
                aria-label={`Go to screenshot ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-sm w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-surface-900 rounded-[2.5rem] p-3 shadow-2xl">
                <div className="rounded-[2rem] overflow-hidden">
                  <img
                    src={screenshots[activeIndex].src}
                    alt={screenshots[activeIndex].title}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
