import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Sparkles } from 'lucide-react'

export default function ContactSection() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      setResult("Message sent successfully!");
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <section className="section-padding relative overflow-hidden bg-surface-950 text-white" id="contact">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-secondary-800 to-slate-950 opacity-95" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[420px] h-[420px] bg-secondary-500/10 rounded-full blur-3xl" />

      <div className="container-main mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto lg:mx-0"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary-300" />
              <span className="font-medium">Contact SmartSpire</span>
            </div>

            <h2 className="mt-6 text-4xl sm:text-5xl font-display font-bold text-white leading-tight">
              Let&apos;s build the future of campus experience together.
            </h2>

            <p className="mt-5 text-lg text-white/75 max-w-xl leading-relaxed">
              Have a question, want a demo, or need support? Send us a message and our SmartSpire team will respond fast with a custom campus-ready solution.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_30px_80px_-60px_rgba(0,0,0,0.5)]">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-primary-500/15 text-primary-200">
                  <Phone className="w-6 h-6" />
                </div>
                <p className="mt-4 text-sm text-white/70">Call direct</p>
                <p className="mt-2 text-xl font-semibold">6206939304</p>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_30px_80px_-60px_rgba(0,0,0,0.5)]">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-secondary-500/15 text-secondary-200">
                  <Mail className="w-6 h-6" />
                </div>
                <p className="mt-4 text-sm text-white/70">Email us</p>
                <p className="mt-2 text-xl font-semibold">amankumar2005sep@gmail.com</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-[3rem] border border-white/10 bg-surface-900/95 p-6 sm:p-8 shadow-2xl shadow-black/40 backdrop-blur-xl"
          >
            <div className="grid gap-5">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-white/50">Quick contact</p>
                <h3 className="mt-4 text-3xl font-semibold text-white">Need help fast?</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  Share your campus vision and we&apos;ll match it with the right plan, integrations, and user onboarding strategy.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[2rem] bg-white/5 p-5">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-200">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <p className="mt-4 text-sm text-white/60">Office location</p>
                  <p className="mt-2 text-white">Bengaluru, India</p>
                </div>
                <div className="rounded-[2rem] bg-white/5 p-5">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary-500/10 text-secondary-200">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <p className="mt-4 text-sm text-white/60">Support hours</p>
                  <p className="mt-2 text-white">Mon–Fri, 9am–7pm IST</p>
                </div>
              </div>

              <form onSubmit={onSubmit} className="grid gap-4">
                <label className="block">
                  <span className="text-sm text-white/70">Your name</span>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Aman Kumar"
                    className="mt-3 w-full rounded-3xl border border-white/10 bg-surface-950/90 px-5 py-4 text-white placeholder:text-white/40 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                  />
                </label>

                <label className="block">
                  <span className="text-sm text-white/70">Email address</span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="mt-3 w-full rounded-3xl border border-white/10 bg-surface-950/90 px-5 py-4 text-white placeholder:text-white/40 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                  />
                </label>

                <label className="block">
                  <span className="text-sm text-white/70">How can we help?</span>
                  <textarea
                    rows="5"
                    name="message"
                    required
                    placeholder="Tell us about your campus requirements"
                    className="mt-3 w-full rounded-3xl border border-white/10 bg-surface-950/90 px-5 py-4 text-white placeholder:text-white/40 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 resize-none"
                  />
                </label>

                <button type="submit" className="inline-flex items-center justify-center rounded-3xl bg-primary-500 px-6 py-4 text-base font-semibold text-white transition hover:bg-primary-400">
                  Send message
                </button>
                {result && <p className="text-center text-sm text-white/80 mt-2">{result}</p>}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
