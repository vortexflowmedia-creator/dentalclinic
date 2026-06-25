import { motion } from 'framer-motion';
import { Stethoscope, Award, Users, Microscope } from 'lucide-react';

const stats = [
  { icon: Users, value: '10,000+', label: 'Happy Patients' },
  { icon: Award, value: '15+', label: 'Years Experience' },
  { icon: Microscope, value: '50+', label: 'Expert Dentists' },
  { icon: Stethoscope, value: '98%', label: 'Satisfaction Rate' },
];

const features = [
  {
    title: 'State-of-the-Art Technology',
    description: 'Digital X-rays, 3D imaging, and laser dentistry for precise, comfortable treatments.',
  },
  {
    title: 'Comfort-First Approach',
    description: 'Sedation options, massage chairs, and calming ambiance for a stress-free visit.',
  },
  {
    title: 'Personalized Treatment Plans',
    description: 'Every smile is unique. We craft custom treatment plans tailored to your goals.',
  },
  {
    title: 'Insurance & Payment Options',
    description: 'We work with all major insurance providers and offer flexible payment plans.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-primary-400/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent-300 uppercase tracking-wider">
            About Us
          </span>
          <h2 className="section-title mt-3 text-white">
            Where Excellence Meets Compassion
          </h2>
          <p className="section-subtitle mx-auto text-gray-300">
            For over a decade, SmileCare Dental has been transforming smiles and
            changing lives with advanced dentistry in a warm, caring environment.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto rounded-full bg-white/20 flex items-center justify-center mb-4">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-white/80 text-lg">Your smile is our mission</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 hidden lg:block">
              <p className="text-3xl font-bold gradient-text">15+</p>
              <p className="text-sm text-gray-600">Years of Excellence</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex gap-4 p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center shrink-0">
                  <div className="w-5 h-5 rounded-full bg-white/80" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="text-gray-300 mt-1 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-primary-400/20 to-accent-400/20 flex items-center justify-center mb-4">
                <stat.icon className="w-7 h-7 text-accent-300" />
              </div>
              <p className="text-3xl lg:text-4xl font-bold gradient-text">{stat.value}</p>
              <p className="text-gray-400 mt-1 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
