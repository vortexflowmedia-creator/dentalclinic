import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const dentists = [
  {
    name: 'Dr. Sarah Mitchell',
    role: 'Chief Dental Surgeon',
    qualifications: 'BDS, MDS (Oral Surgery)',
    experience: '18+ years',
    image: null,
    color: 'from-pink-400 to-rose-400',
    initials: 'SM',
  },
  {
    name: 'Dr. James Chen',
    role: 'Orthodontics Specialist',
    qualifications: 'BDS, MOrth RCS',
    experience: '14+ years',
    image: null,
    color: 'from-blue-400 to-indigo-400',
    initials: 'JC',
  },
  {
    name: 'Dr. Emily Rodriguez',
    role: 'Cosmetic Dentist',
    qualifications: 'BDS, MSc Aesthetic Dentistry',
    experience: '12+ years',
    image: null,
    color: 'from-purple-400 to-pink-400',
    initials: 'ER',
  },
  {
    name: 'Dr. Michael Park',
    role: 'Periodontics Specialist',
    qualifications: 'BDS, MDS (Periodontology)',
    experience: '15+ years',
    image: null,
    color: 'from-cyan-400 to-teal-400',
    initials: 'MP',
  },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export default function Dentists() {
  return (
    <section id="dentists" className="relative py-24 overflow-hidden bg-gray-50">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-80 h-80 bg-primary-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-100/50 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
            Our Team
          </span>
          <h2 className="section-title mt-3">Meet Our Expert Dentists</h2>
          <p className="section-subtitle mx-auto">
            World-class professionals dedicated to giving you the healthiest,
            most beautiful smile possible.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {dentists.map((dentist, index) => (
            <motion.div
              key={dentist.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-72 overflow-hidden">
                  <div
                    className={`w-full h-full bg-gradient-to-br ${dentist.color} flex items-center justify-center`}
                  >
                    <span className="text-6xl font-bold text-white/40 select-none">
                      {dentist.initials}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex gap-2">
                      {socialLinks.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          aria-label={social.label}
                          className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-all"
                        >
                          <social.icon className="w-4 h-4 text-white" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="inline-block px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-semibold mb-3">
                    {dentist.experience}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {dentist.name}
                  </h3>
                  <p className="text-primary-600 font-medium text-sm mt-1">
                    {dentist.role}
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    {dentist.qualifications}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
