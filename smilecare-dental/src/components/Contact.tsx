import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900" />
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent-300 uppercase tracking-wider">
            Contact Us
          </span>
          <h2 className="section-title mt-3 text-white">
            Get in Touch
          </h2>
          <p className="section-subtitle mx-auto text-gray-300">
            Ready to transform your smile? Book an appointment or reach out
            with any questions. We're here for you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-8">
                Send Us a Message
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-accent-500/20 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-accent-400" />
                  </div>
                  <p className="text-white text-lg font-semibold">Message Sent!</p>
                  <p className="text-gray-400 mt-2">We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <input
                      type="text"
                      placeholder="First Name"
                      required
                      className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-500/20 transition-all"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      required
                      className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-500/20 transition-all"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-500/20 transition-all"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-500/20 transition-all"
                  />
                  <select
                    className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/10 text-gray-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-500/20 transition-all"
                  >
                    <option value="" disabled selected className="text-gray-800">
                      Select Service
                    </option>
                    <option className="text-gray-800">Teeth Cleaning</option>
                    <option className="text-gray-800">Dental Implants</option>
                    <option className="text-gray-800">Teeth Whitening</option>
                    <option className="text-gray-800">Root Canal</option>
                    <option className="text-gray-800">Orthodontics</option>
                    <option className="text-gray-800">Emergency</option>
                    <option className="text-gray-800">General Checkup</option>
                  </select>
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    required
                    className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-500/20 transition-all resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full gradient-btn flex items-center justify-center gap-2 py-4 text-lg"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-400/20 to-accent-400/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent-300" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Our Address</p>
                    <p className="text-gray-400 mt-1">123 Health Avenue, Suite 200<br />New York, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-400/20 to-accent-400/20 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-accent-300" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Phone Number</p>
                    <p className="text-gray-400 mt-1">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-400/20 to-accent-400/20 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-accent-300" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email Address</p>
                    <p className="text-gray-400 mt-1">hello@smilecaredental.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-400/20 to-accent-400/20 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-accent-300" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Working Hours</p>
                    <p className="text-gray-400 mt-1">
                      Mon - Fri: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 3:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 h-64">
              <div className="w-full h-full bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-10 h-10 text-white/60 mx-auto mb-2" />
                  <p className="text-white/80 font-medium">Map location placeholder</p>
                  <p className="text-white/50 text-sm mt-1">123 Health Avenue, NYC</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
