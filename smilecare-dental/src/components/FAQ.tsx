import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How often should I visit the dentist?',
    answer: 'We recommend visiting every six months for routine checkups and cleanings. However, the frequency may vary based on your oral health needs. Some patients with gum disease or other conditions may need to visit more frequently.',
  },
  {
    question: 'Does teeth whitening damage enamel?',
    answer: 'Professional teeth whitening performed under dental supervision is safe and does not damage enamel. We use pharmaceutical-grade whitening agents with enamel-protecting ingredients. Over-the-counter products can be risky, which is why we recommend professional treatment.',
  },
  {
    question: 'What should I expect during my first visit?',
    answer: 'Your first visit includes a comprehensive exam, digital X-rays if needed, a professional cleaning, and a personalized treatment plan discussion. We take time to understand your concerns and goals. The entire visit typically takes about 60-90 minutes.',
  },
  {
    question: 'Do you accept dental insurance?',
    answer: 'Yes, we accept most major dental insurance plans including Delta Dental, Cigna, Aetna, MetLife, and many others. Our friendly staff will verify your benefits and maximize your coverage. We also offer flexible payment plans for treatments not covered by insurance.',
  },
  {
    question: 'Is it normal for gums to bleed when flossing?',
    answer: 'Occasional bleeding when you start flossing is common and usually indicates gum inflammation. With regular flossing, the bleeding should stop within a week. If bleeding persists, it could be a sign of gum disease and you should schedule an exam.',
  },
  {
    question: 'How long do dental implants last?',
    answer: 'With proper care and maintenance, dental implants can last a lifetime. The crown (visible part) typically needs replacement every 10-15 years. Good oral hygiene, regular checkups, and avoiding habits like smoking are key to implant longevity.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-50/20 to-white" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-100/20 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="section-title mt-3">Frequently Asked Questions</h2>
          <p className="section-subtitle mx-auto">
            Find answers to common questions about our dental services,
            procedures, and patient care.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`rounded-2xl transition-all duration-300 ${
                openIndex === index
                  ? 'bg-white shadow-xl border border-primary-100'
                  : 'bg-white/50 hover:bg-white/80 hover:shadow-md border border-gray-100'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-primary-500 shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
