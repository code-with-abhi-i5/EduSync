import SectionHeading from '../components/SectionHeading'
import FAQItem from '../components/FAQItem'
import { faqData } from '../data/faq'

export default function FAQ() {
  return (
    <section className="section-padding relative overflow-hidden" id="faq">
      <div className="container-main mx-auto relative z-10">
        <SectionHeading
          badge="FAQ"
          title="Frequently asked questions"
          description="Got questions? We have answers. If you can't find what you're looking for, reach out to our support team."
        />

        <div className="max-w-3xl mx-auto glass-card p-6 sm:p-8 lg:p-10">
          {faqData.map((item, index) => (
            <FAQItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
