import { motion } from 'framer-motion'
import { Download, Smartphone } from 'lucide-react'
import heroImg from '../assets/heroimg.png'

export default function DownloadCTA() {
  return (
    <section className="section-padding relative overflow-hidden" id="download">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-700" />
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '32px 32px',
      }} />

      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-400/20 rounded-full blur-3xl" />

      <div className="container-main mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/10 border border-white/20 rounded-full"
            >
              <Smartphone className="w-4 h-4 text-white/80" />
              <span className="text-sm font-medium text-white/90">Available on Android & iOS</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4 leading-tight">
              Get the SmartSpire App
            </h2>

            <p className="text-lg text-white/80 mb-8 max-w-lg leading-relaxed">
              Download now and experience smart learning at your fingertips. Join 50,000+ students already transforming their campus experience.
            </p>

            <div className="flex flex-wrap gap-4">
              {/* Google Play Button */}
              <motion.a
                href="/SmartSpire.apk"
                download
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-black hover:bg-surface-900 text-white rounded-xl transition-colors shadow-lg"
              >
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302L15.394 12l2.304-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302L5.864 2.658z"/>
                </svg>
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-wider text-white/60 leading-none">Get it on</p>
                  <p className="text-base font-semibold leading-tight mt-0.5">Google Play</p>
                </div>
              </motion.a>

              {/* App Store Button */}
              <motion.a
                href="/SmartSpire.apk"
                download
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-black hover:bg-surface-900 text-white rounded-xl transition-colors shadow-lg"
              >
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-wider text-white/60 leading-none">Download on the</p>
                  <p className="text-base font-semibold leading-tight mt-0.5">App Store</p>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-[250px] sm:w-[280px]">
              <div className="absolute inset-0 bg-white/10 rounded-[3rem] blur-2xl scale-110" />
              <div className="relative bg-surface-900 rounded-[2.5rem] p-3 shadow-2xl shadow-black/30">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-surface-900 rounded-b-2xl z-20" />
                <div className="rounded-[2rem] overflow-hidden bg-white">
                  <img
                    src={heroImg}
                    alt="SmartSpire App"
                    className="w-full h-auto"
                    loading="lazy"
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
