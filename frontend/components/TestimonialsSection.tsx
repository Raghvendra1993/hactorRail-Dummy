'use client';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: 'A partner that understands base industry needs. Their dedicated system trains have optimized our volume flow significantly.',
    author: 'Anders Lindgren',
    role: 'Logistics Director',
    company: 'Stora Enso',
  },
  {
    quote: 'This successful operation shows that Hector Rail has the expertise and capability to run longer trains on the Swedish network.',
    author: 'SCA Logistics',
    role: 'Supply Chain Manager',
    company: 'SCA',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-brand-dark py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-label"
          >
            Trusted By
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-black text-4xl md:text-5xl text-white uppercase leading-tight"
          >
            Trusted by European<br />
            <span className="text-white/20">Industry Leaders</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-brand-near-black border border-white/10 p-10 hover:border-brand-yellow/20 transition-colors group"
            >
              <div className="text-brand-yellow text-5xl font-serif mb-6 opacity-30 leading-none">"</div>
              <p className="text-white/60 text-lg leading-relaxed mb-8 italic">{t.quote}</p>
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div className="w-10 h-10 bg-brand-yellow/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-display font-bold text-brand-yellow text-sm">{t.author[0]}</span>
                </div>
                <div>
                  <div className="font-medium text-white text-sm">{t.author}</div>
                  <div className="text-xs text-white/30">{t.role} · {t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
