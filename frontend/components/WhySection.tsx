'use client';
import { motion } from 'framer-motion';
import type { Principle } from '@/lib/strapi';

const FALLBACK: Principle[] = [
  { id: 1, documentId: '', order: 0, number: '01', title: 'Safety First', desc: 'Safety is our license to operate. We maintain the highest standards across our entire fleet and operations. No compromises.' },
  { id: 2, documentId: '', order: 1, number: '02', title: 'Dedicated Capacity', desc: 'Your consist. Your schedule. No shared trains, no delays caused by other cargo. We deliver on our promises.' },
  { id: 3, documentId: '', order: 2, number: '03', title: 'Agile Culture', desc: 'Short decision paths and a flat hierarchy where your expertise is valued. Short reaction times, real solutions.' },
  { id: 4, documentId: '', order: 3, number: '04', title: 'Certified Excellence', desc: 'Industry-leading punctuality and reliability. Verified and certified. We set the standard for European rail freight.' },
];

export default function WhySection({ principles = [] }: { principles?: Principle[] }) {
  const items = principles.length > 0 ? principles : FALLBACK;

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
            Why Hector Rail
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-black text-4xl md:text-6xl text-white uppercase leading-tight"
          >
            The Principles<br />
            <span className="text-white/20">That Drive Us.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {items.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="bg-brand-dark p-8 md:p-10 group hover:bg-brand-near-black transition-colors duration-300"
            >
              {p.number && (
                <div className="font-display font-black text-5xl text-brand-yellow/15 mb-6 group-hover:text-brand-yellow/30 transition-colors duration-300">
                  {p.number}
                </div>
              )}
              <h3 className="font-display font-bold text-xl text-white mb-3">{p.title}</h3>
              {p.desc && <p className="text-sm text-white/40 leading-relaxed">{p.desc}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
