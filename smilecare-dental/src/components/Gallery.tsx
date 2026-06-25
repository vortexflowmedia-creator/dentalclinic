import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const galleryItems = [
  {
    title: 'Complete Smile Makeover',
    description: 'Full mouth rehabilitation with implants and veneers',
    color: 'from-primary-400 to-accent-400',
  },
  {
    title: 'Teeth Whitening',
    description: 'Professional whitening — 8 shades brighter',
    color: 'from-amber-400 to-orange-400',
  },
  {
    title: 'Orthodontic Treatment',
    description: 'Invisalign clear aligners transformation',
    color: 'from-rose-400 to-pink-400',
  },
  {
    title: 'Dental Implants',
    description: 'Single implant restoration — lower molar',
    color: 'from-cyan-400 to-blue-400',
  },
  {
    title: 'Porcelain Veneers',
    description: 'Upper arch veneers for a flawless smile',
    color: 'from-purple-400 to-indigo-400',
  },
  {
    title: 'Gum Contouring',
    description: 'Laser gum reshaping for improved aesthetics',
    color: 'from-teal-400 to-emerald-400',
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-accent-50/20 to-white" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent-100/40 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
            Gallery
          </span>
          <h2 className="section-title mt-3">Before & After</h2>
          <p className="section-subtitle mx-auto">
            Real smile transformations by our expert team. See the difference
            SmileCare Dental can make.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              onClick={() => setSelected(index)}
            >
              <div
                className={`aspect-square bg-gradient-to-br ${item.color} flex items-center justify-center relative`}
              >
                <div className="text-center p-6">
                  <div className="flex justify-center gap-2 mb-4">
                    <span className="px-3 py-1 text-xs font-bold bg-black/20 text-white rounded-full">Before</span>
                    <span className="px-3 py-1 text-xs font-bold bg-white/20 text-white rounded-full">After</span>
                  </div>
                  <p className="text-white/30 text-8xl font-display font-bold">{String(index + 1).padStart(2, '0')}</p>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                <div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-white/80 text-sm mt-1">{item.description}</p>
                </div>
              </div>

              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                <Maximize2 className="w-4 h-4 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selected !== null && (
        <div
          className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-3xl w-full rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`aspect-video bg-gradient-to-br ${galleryItems[selected].color} flex items-center justify-center`}>
              <div className="text-center">
                <p className="text-white/20 text-6xl font-display font-bold">{String(selected + 1).padStart(2, '0')}</p>
              </div>
            </div>
            <div className="bg-white p-6">
              <h3 className="text-2xl font-bold text-gray-900">{galleryItems[selected].title}</h3>
              <p className="text-gray-600 mt-2">{galleryItems[selected].description}</p>
            </div>

            <button
              onClick={() => setSelected(selected > 0 ? selected - 1 : galleryItems.length - 1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-all"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={() => setSelected(selected < galleryItems.length - 1 ? selected + 1 : 0)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-all"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-white/80 hover:text-white"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
