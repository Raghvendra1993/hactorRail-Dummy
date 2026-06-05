'use client';
import { motion } from 'framer-motion';

const stats = [
  { value: '20+', label: 'Years on the Rails', sub: 'Since 2004' },
  { value: '14', label: 'Daily Corridor Departures', sub: 'Sweden ↔ Germany' },
  { value: '70%', label: 'CO₂ Reduction', sub: 'Compared to road freight' },
  { value: '100%', label: 'Zero Direct Emissions', sub: 'Electric traction fleet' },
];

export default function StatsSection() {
  return (
    <section className="bg-brand-near-black border-y border-white/5 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center md:text-left"
            >
              <div className="font-display font-black text-5xl md:text-6xl text-brand-yellow leading-none mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-white mb-1">{stat.label}</div>
              <div className="text-xs text-white/30">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
