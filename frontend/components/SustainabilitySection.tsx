'use client';
import { motion } from 'framer-motion';
import type { SustainabilityData } from '@/lib/strapi';

const FALLBACK_METRICS = [
  { value: '70%',  label: 'CO₂ Reduction',        sub: 'Compared to road freight' },
  { value: '100%', label: 'Zero Direct Emissions', sub: 'Electric traction fleet' },
  { value: '2024', label: 'Verified Report',        sub: 'EcoTransIT certified' },
];

const FALLBACK: SustainabilityData = {
  id: 0,
  documentId: '',
  heading: 'Tracking the Future of Logistics.',
  body1: 'We are committed to making rail freight the most sustainable choice for European industry, with zero-emission operations at the core of our strategy.',
  body2: 'We use the industry-standard EcoTransIT tool to provide transparent, verified carbon footprint calculations for every route.',
  reportLabel: 'Sustainability Report 2024 ↓',
  reportUrl: '#',
  metrics: FALLBACK_METRICS,
};

export default function SustainabilitySection({ data }: { data?: SustainabilityData | null }) {
  const d = data ?? FALLBACK;
  const metrics = d.metrics && d.metrics.length > 0 ? d.metrics : FALLBACK_METRICS;

  // Split heading on <br> marker (the word "of") for the visual split
  const heading = d.heading ?? FALLBACK.heading!;

  return (
    <section id="sustainability" className="bg-brand-near-black py-32 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/10 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-teal/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="section-label text-[#4caf8f]"
            >
              Sustainability
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-black text-4xl md:text-6xl text-white uppercase leading-tight mb-6"
            >
              {heading}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/40 leading-relaxed mb-6"
            >
              {d.body1 ?? FALLBACK.body1}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/40 leading-relaxed mb-8"
            >
              {d.body2 ?? FALLBACK.body2}
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              href={d.reportUrl ?? '#'}
              className="inline-flex items-center gap-3 px-6 py-3 border border-white/20 text-white text-sm font-semibold uppercase tracking-widest hover:border-white/50 transition-colors"
            >
              {d.reportLabel ?? FALLBACK.reportLabel}
            </motion.a>
          </div>

          <div className="space-y-4">
            {metrics.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="flex items-center gap-8 p-6 border border-white/10 hover:border-brand-teal/40 transition-colors group"
              >
                <div className="font-display font-black text-4xl md:text-5xl flex-shrink-0 text-[#4caf8f]">
                  {item.value}
                </div>
                <div>
                  <div className="font-medium text-white">{item.label}</div>
                  <div className="text-xs text-white/30 mt-1">{item.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
