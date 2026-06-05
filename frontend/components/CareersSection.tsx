'use client';
import { motion } from 'framer-motion';

const roles = [
  { title: 'Train Driver', location: 'Stockholm, Sweden', type: 'Full-time' },
  { title: 'Shunting Driver', location: 'Bochum, Germany', type: 'Full-time' },
  { title: 'Communications Director', location: 'Danderyd, Sweden', type: 'Full-time' },
];

export default function CareersSection() {
  return (
    <section id="careers" className="bg-brand-near-black py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-yellow/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-24 items-start">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="section-label"
            >
              Careers
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-black text-4xl md:text-6xl text-white uppercase leading-tight mb-6"
            >
              Work With<br />
              <span className="text-brand-yellow">HectorRail</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/40 leading-relaxed mb-8"
            >
              Become part of a welcoming and safe workplace where we challenge the status quo of rail freight. We offer a modern fleet and a culture built on expertise and reliability.
            </motion.p>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-3 mb-10"
            >
              {[
                'Comprehensive health care and wellness allowances',
                'Short decision paths and a flat hierarchy',
                'Internal training programs and certifications',
                'Directly contribute to sustainable European logistics',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/50">
                  <span className="w-1.5 h-1.5 bg-brand-yellow rounded-full mt-1.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </motion.ul>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              href="#contact"
              className="px-8 py-4 bg-brand-yellow text-black text-sm font-bold uppercase tracking-widest hover:bg-brand-orange transition-colors inline-block"
            >
              View Open Positions
            </motion.a>
          </div>

          <div className="space-y-3">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs text-white/20 uppercase tracking-widest mb-6"
            >
              Open Positions
            </motion.p>
            {roles.map((role, i) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex items-center justify-between p-6 border border-white/10 hover:border-brand-yellow/40 hover:bg-white/5 transition-all duration-300 cursor-pointer"
              >
                <div>
                  <h3 className="font-display font-bold text-white group-hover:text-brand-yellow transition-colors duration-300">
                    {role.title}
                  </h3>
                  <p className="text-xs text-white/30 mt-1">{role.location} · {role.type}</p>
                </div>
                <span className="text-white/20 group-hover:text-brand-yellow group-hover:translate-x-1 transition-all duration-300 text-xl">→</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
