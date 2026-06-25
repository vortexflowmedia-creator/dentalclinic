import { motion } from 'framer-motion';
import { SmilePlus, Facebook, Twitter, Instagram, Linkedin, Heart, ArrowUp } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Dentists', href: '#dentists' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const serviceLinks = [
  { label: 'Teeth Cleaning', href: '#services' },
  { label: 'Dental Implants', href: '#services' },
  { label: 'Teeth Whitening', href: '#services' },
  { label: 'Root Canal', href: '#services' },
  { label: 'Orthodontics', href: '#services' },
  { label: 'Emergency Care', href: '#services' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gray-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent-500/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a href="#hero" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <SmilePlus className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-display font-bold text-white">
                Smile<span className="text-accent-400">Care</span>
              </span>
            </a>
            <p className="text-gray-400 leading-relaxed">
              Your perfect smile starts here. Experience premium dental care
              in a comfortable, modern environment with cutting-edge technology.
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center hover:bg-gradient-to-br hover:from-primary-500 hover:to-accent-500 transition-all"
                >
                  <social.icon className="w-4 h-4 text-gray-400 hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-white font-bold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-accent-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white font-bold text-lg mb-5">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-accent-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-white font-bold text-lg mb-5">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe for dental tips, offers, and updates.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2"
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2.5 rounded-xl bg-gray-800 border border-gray-700 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-all"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-accent-500 text-white text-sm font-semibold hover:shadow-lg transition-all"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} SmileCare Dental. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> for your smile
          </p>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-gradient-to-r from-primary-600 to-accent-500 text-white shadow-xl flex items-center justify-center hover:shadow-2xl hover:scale-110 transition-all"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
