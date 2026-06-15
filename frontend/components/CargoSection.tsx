'use client';
import { motion } from 'framer-motion';
import type { CargoType } from '@/lib/strapi';

const FALLBACK: CargoType[] = [
  { id: 1, documentId: '', order: 0, name: 'Timber', icon: '🌲', desc: 'Specialized forestry logistics from forest to mill.' },
  { id: 2, documentId: '', order: 1, name: 'Steel', icon: '⚙️', desc: 'Heavy industry transport with dedicated wagons.' },
  { id: 3, documentId: '', order: 2, name: 'Chemicals', icon: '🧪', desc: 'Safe, certified chemical cargo handling.' },
  { id: 4, documentId: '', order: 3, name: 'Coal', icon: '⛏️', desc: 'High-volume bulk mineral transport.' },
  { id: 5, documentId: '', order: 4, name: 'Stone', icon: '🪨', desc: 'Aggregates and construction materials.' },
  { id: 6, documentId: '', order: 5, name: 'Agricultural', icon: '🌾', desc: 'Grain and agricultural product transport.' },
];

export default function CargoSection({ cargoTypes = [] }: { cargoTypes?: CargoType[] }) {
  const items = cargoTypes.length > 0 ? cargoTypes : FALLBACK;

  return (
    <section id="about" className="bg-brand-dark py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="section-label"
            >
              Cargo Types
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-black text-4xl md:text-5xl text-white uppercase leading-tight mb-6"
            >
              Connecting Sweden<br />and Germany.
              <span className="text-white/20"> Across Europe.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/40 leading-relaxed mb-8"
            >
              With operations in Sweden, Norway, and Germany, we provide seamless cross-border transport solutions that keep European industry moving since 2004.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#contact" className="px-6 py-3 bg-brand-yellow text-black text-sm font-bold uppercase tracking-widest hover:bg-brand-orange transition-colors">
                Book Your System Train
              </a>
              <a href="#services" className="px-6 py-3 border border-white/20 text-white text-sm font-semibold uppercase tracking-widest hover:border-brand-yellow hover:text-brand-yellow transition-colors">
                View All Solutions
              </a>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {items.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-brand-near-black border border-white/5 p-6 hover:border-brand-yellow/30 transition-all duration-300"
              >
                {item.icon && <span className="text-2xl mb-3 block">{item.icon}</span>}
                <h3 className="font-display font-bold text-white mb-1">{item.name}</h3>
                {item.desc && <p className="text-xs text-white/30 leading-relaxed">{item.desc}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
