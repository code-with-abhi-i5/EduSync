import SectionHeading from '../components/SectionHeading'
import FeatureCard from '../components/FeatureCard'
import { features } from '../data/features'

export default function Features() {
  return (
    <section className="section-padding relative overflow-hidden" id="features">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-400/5 dark:bg-primary-400/3 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-400/5 dark:bg-secondary-400/3 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container-main mx-auto relative z-10">
        <SectionHeading
          badge="Features"
          title="Everything your campus needs"
          description="A comprehensive suite of tools designed to transform every aspect of campus life — from attendance tracking to project management."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
