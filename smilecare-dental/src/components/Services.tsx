import { motion } from 'framer-motion';
import {
  Sparkles,
  Syringe,
  Droplets,
  Bone,
  Braces,
  Ambulance,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Droplets,
    title: 'Teeth Cleaning',
    description:
      'Professional scaling and polishing to remove plaque and tartar, keeping your gums healthy and smile bright.',
    color: 'from-blue-400 to-cyan-400',
  },
  {
    icon: Bone,
    title: 'Dental Implants',
    description:
      'Permanent tooth replacement solutions that look, feel, and function just like natural teeth.',
    color: 'from-teal-400 to-emerald-400',
  },
  {
    icon: Sparkles,
    title: 'Teeth Whitening',
    description:
      'Professional-grade whitening treatments for a dramatically brighter, more confident smile.',
    color: 'from-amber-400 to-orange-400',
  },
  {
    icon: Syringe,
    title: 'Root Canal',
    description:
      'Pain-free root canal therapy to save infected teeth and restore your oral health.',
    color: 'from-purple-400 to-pink-400',
  },
  {
    icon: Braces,
    title: 'Orthodontics',
    description:
      'Advanced braces and clear aligners to straighten teeth and perfect your bite.',
    color: 'from-rose-400 to-red-400',
  },
  {
    icon: Ambulance,
    title: 'Emergency Dentistry',
    description:
      'Same-day emergency care for dental accidents, severe pain, or urgent oral issues.',
    color: 'from-sky-400 to-indigo-400',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-50/30 to-white" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-100/40 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="section-title mt-3">
            Comprehensive Dental Care
          </h2>
          <p className="section-subtitle mx-auto">
            From routine checkups to advanced procedures, we offer a full range
            of dental services tailored to your needs.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-100/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-500`}
              >
                <service.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 group/link"
              >
                Learn More
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </a>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
