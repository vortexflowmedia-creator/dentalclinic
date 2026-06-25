import { motion } from 'framer-motion';
import { Calendar, Shield, Sparkles, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-100/20 to-accent-100/20 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-primary-200/50 shadow-sm mb-6">
              <Sparkles className="w-4 h-4 text-primary-500" />
              <span className="text-sm font-medium text-primary-700">Premium Dental Care</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight text-balance">
              Your Perfect{' '}
              <span className="gradient-text">Smile</span>
              <br />
              Starts Here
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg">
              Experience world-class dental care in a comfortable, modern environment.
              We bring your brightest smile to life with cutting-edge technology and
              a gentle touch.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="gradient-btn inline-flex items-center justify-center gap-2 text-lg"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border-2 border-gray-200 text-gray-700 font-semibold hover:border-primary-500 hover:text-primary-600 transition-all"
              >
                Our Services
              </a>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-primary-200 to-accent-200 shadow-sm"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-1">Trusted by 2,000+ patients</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-accent-400/20 rounded-full blur-3xl" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white/60 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-primary-100 via-white to-accent-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-xl">
                      <ToothIcon className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="mt-4 text-2xl font-display font-bold text-gray-800">SmileCare</h3>
                    <p className="text-gray-500">Excellence in Dentistry</p>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4"
              >
                <Shield className="w-8 h-8 text-primary-500" />
                <p className="text-xs font-semibold mt-1 text-gray-700">100% Sterile</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-2 -left-4 bg-white rounded-2xl shadow-xl p-4"
              >
                <Sparkles className="w-8 h-8 text-accent-500" />
                <p className="text-xs font-semibold mt-1 text-gray-700">Painless</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ToothIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C8 2 4 4 4 8c0 2.5 1.5 4.5 3 6 .5.5 1 1 1 1.5L9 22h6l1-6.5c0-.5.5-1 1-1.5 1.5-1.5 3-3.5 3-6 0-4-4-6-8-6z" />
      <path d="M8 6c2-1 4-1 6 0" />
    </svg>
  );
}
