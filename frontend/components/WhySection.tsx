'use client';
import { motion } from 'framer-motion';

const principles = [
  { number: '01', title: 'Safety First', desc: 'Safety is our license to operate. We maintain the highest standards across our entire fleet and operations. No compromises.' },
  { number: '02', title: 'Dedicated Capacity', desc: 'Your consist. Your schedule. No shared trains, no delays caused by other cargo. We deliver on our promises.' },
  { number: '03', title: 'Agile Culture', desc: 'Short decision paths and a flat hierarchy where your expertise is valued. Short reaction times, real solutions.' },
  { number: '04', title: 'Certified Excellence', desc: 'Industry-leading punctuality and reliability. Verified and certified. We set the standard for European rail freight.' },
];

export default function WhySection() {
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
          {principles.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="bg-brand-dark p-8 md:p-10 group hover:bg-brand-near-black transition-colors duration-300"
            >
              <div className="font-display font-black text-5xl text-brand-yellow/15 mb-6 group-hover:text-brand-yellow/30 transition-colors duration-300">
                {p.number}
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">{p.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
