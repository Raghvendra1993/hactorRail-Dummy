'use client';
import { motion } from 'framer-motion';
import type { Service } from '@/lib/strapi';

const FALLBACK: Service[] = [
  {
    id: 1, documentId: '', order: 0,
    tag: 'SYSTEM TRANSPORT',
    title: 'Dedicated Capacity.\nNo Compromise.',
    desc: 'Your consist. Your schedule. No shared trains, no delays caused by other cargo. Full dedicated trains built around your volume.',
    features: ['Direct Point-to-Point Routes', 'Customized Schedules', 'Dedicated Full Trains'],
  },
  {
    id: 2, documentId: '', order: 1,
    tag: 'TIMBER',
    title: 'The Backbone of\nthe Timber Industry.',
    desc: 'Specialized equipment and expertise for the forestry sector. Direct delivery to sawmills, paper mills, or export terminals.',
    features: ['Specialized Timber Wagons', 'Direct to Sawmills', 'Cross-Border Operation'],
  },
  {
    id: 3, documentId: '', order: 2,
    tag: 'WAGON LOAD',
    title: 'Scalable Solutions\nfor Any Volume.',
    desc: 'Whether you have a single wagon or a growing volume, we provide the flexibility you need to scale your rail logistics.',
    features: ['Scalable Solutions', 'Any Volume', 'Diverse Wagon Types'],
  },
  {
    id: 4, documentId: '', order: 3,
    tag: 'INTERMODAL',
    title: 'Seamless\nMulti-Modal Logistics.',
    desc: 'Combining rail and road for maximum efficiency. Your Container. Our Network.',
    features: ['Terminal-to-Terminal', 'Unified Logistics', 'CO₂ Reduction'],
  },
];

export default function ServicesSection({ services = [] }: { services?: Service[] }) {
  const items = services.length > 0 ? services : FALLBACK;

  return (
    <section id="services" className="bg-brand-dark py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-label"
          >
            What We Do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-black text-4xl md:text-6xl text-white uppercase leading-tight max-w-2xl"
          >
            Built Around<br />Your Cargo
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/10">
          {items.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-brand-dark p-10 md:p-12 hover:bg-brand-near-black transition-colors duration-300 cursor-pointer"
            >
              <p className="text-xs font-medium tracking-[0.3em] uppercase text-brand-yellow/60 mb-6 group-hover:text-brand-yellow transition-colors">
                {s.tag}
              </p>
              <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-4 whitespace-pre-line leading-tight">
                {s.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed mb-8">{s.desc}</p>
              {s.features && s.features.length > 0 && (
                <ul className="space-y-2 mb-8">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-white/50">
                      <span className="w-1 h-1 bg-brand-yellow rounded-full flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              )}
              <div className="flex items-center gap-2 text-sm font-medium text-white/30 group-hover:text-brand-yellow transition-colors">
                <span>View all solutions</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
