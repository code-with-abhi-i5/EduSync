import SectionHeading from '../components/SectionHeading'
import TestimonialCard from '../components/TestimonialCard'
import { testimonials } from '../data/testimonials'

export default function Testimonials() {
  return (
    <section className="section-padding relative overflow-hidden bg-surface-50/50 dark:bg-surface-900/30" id="testimonials">
      <div className="absolute top-0 right-0 w-72 h-72 bg-secondary-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-400/5 rounded-full blur-3xl" />

      <div className="container-main mx-auto relative z-10">
        <SectionHeading
          badge="Testimonials"
          title="Loved by students & educators"
          description="Hear from the people who use EduSync every day to transform their campus experience."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
