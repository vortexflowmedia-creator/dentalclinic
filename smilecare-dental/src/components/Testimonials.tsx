import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Regular Patient',
    avatar: 'SJ',
    color: 'from-pink-400 to-rose-400',
    rating: 5,
    text: 'I have always been anxious about dental visits, but SmileCare completely changed that. The team is incredibly gentle and made me feel at ease from the moment I walked in. My smile has never looked better!',
  },
  {
    name: 'Michael Torres',
    role: 'New Patient',
    avatar: 'MT',
    color: 'from-blue-400 to-indigo-400',
    rating: 5,
    text: 'The best dental experience I\'ve ever had. From the modern facility to the friendly staff, everything was top-notch. Dr. Chen explained every step and my Invisalign results are amazing.',
  },
  {
    name: 'Emily Watson',
    role: 'Long-term Patient',
    avatar: 'EW',
    color: 'from-purple-400 to-pink-400',
    rating: 5,
    text: 'I\'ve been coming here for years and wouldn\'t trust anyone else with my dental care. The consistency in quality and the personal attention they give each patient is remarkable.',
  },
  {
    name: 'David Kim',
    role: 'Emergency Patient',
    avatar: 'DK',
    color: 'from-cyan-400 to-teal-400',
    rating: 5,
    text: 'Had a dental emergency on a Saturday and they got me in within an hour. Professional, pain-free treatment and very reasonable pricing. Truly a lifesaver!',
  },
  {
    name: 'Lisa Anderson',
    role: 'Cosmetic Patient',
    avatar: 'LA',
    color: 'from-amber-400 to-orange-400',
    rating: 5,
    text: 'My smile makeover exceeded all expectations. Dr. Rodriguez is an artist! The veneers look completely natural and I can\'t stop smiling. Worth every penny.',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const goNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const goPrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <section id="testimonials" className="relative py-24 overflow-hidden bg-gray-50">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-100/40 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="section-title mt-3">What Our Patients Say</h2>
          <p className="section-subtitle mx-auto">
            Real stories from real patients. Discover why SmileCare Dental is
            the trusted choice for thousands.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative min-h-[320px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="w-full"
              >
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
                  <Quote className="w-12 h-12 text-primary-100 mb-6" />

                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
                    "{testimonials[current].text}"
                  </p>

                  <div className="mt-8 flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonials[current].color} flex items-center justify-center text-white font-semibold text-sm`}
                    >
                      {testimonials[current].avatar}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{testimonials[current].name}</p>
                      <p className="text-gray-500 text-sm">{testimonials[current].role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goPrev}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === current
                      ? 'w-8 h-3 bg-gradient-to-r from-primary-500 to-accent-500'
                      : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
