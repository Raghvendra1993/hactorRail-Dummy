'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import type { SiteSettings, Service } from '@/lib/strapi';

const FALLBACK_CONTACT = [
  { label: 'Address', value: 'Danderyd, Stockholm, Sweden' },
  { label: 'Standort', value: 'Bochum, Germany' },
  { label: 'Email', value: 'info@hectorrail.com' },
];

const FALLBACK_SERVICES = ['System Transport', 'Timber Transport', 'Wagon Load Transport', 'Intermodal'];

export default function ContactSection({
  siteSettings,
  services = [],
}: {
  siteSettings?: SiteSettings | null;
  services?: Service[];
}) {
  const [sent, setSent] = useState(false);

  const contactInfo = siteSettings
    ? [
        { label: 'Address', value: siteSettings.addressSe ?? 'Danderyd, Stockholm, Sweden' },
        { label: 'Standort', value: siteSettings.addressDe ?? 'Bochum, Germany' },
        { label: 'Email', value: siteSettings.email ?? 'info@hectorrail.com' },
      ]
    : FALLBACK_CONTACT;

  const responseTime = siteSettings?.contactResponseTime ?? '4 business hours';

  const serviceOptions =
    services.length > 0 ? services.map((s) => s.tag) : FALLBACK_SERVICES;

  return (
    <section id="contact" className="bg-brand-near-black py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none" />

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
              Get in Touch
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-black text-4xl md:text-6xl text-white uppercase leading-tight mb-6"
            >
              Start The<br />
              <span className="text-brand-yellow">Conversation.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/40 leading-relaxed mb-10"
            >
              Our team will get back to you within {responseTime}. Whether you have a single wagon or a full train — we want to hear from you.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              {contactInfo.map((item) => (
                <div key={item.label} className="flex gap-6 text-sm">
                  <span className="text-white/20 w-20 flex-shrink-0 uppercase tracking-widest text-xs">{item.label}</span>
                  <span className="text-white/60">{item.value}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {sent ? (
              <div className="border border-brand-yellow/30 bg-brand-yellow/5 p-12 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', duration: 0.6 }}
                  className="w-16 h-16 bg-brand-yellow/20 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <span className="text-brand-yellow text-2xl">✓</span>
                </motion.div>
                <h3 className="font-display font-bold text-white text-xl mb-2">Message Sent</h3>
                <p className="text-white/40 text-sm mb-6">Our team will get back to you within {responseTime}.</p>
                <button type="button" onClick={() => setSent(false)} className="text-sm text-brand-yellow/50 hover:text-brand-yellow transition-colors">
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'First Name', placeholder: 'Your name', type: 'text' },
                    { label: 'Company', placeholder: 'Your company', type: 'text' },
                  ].map((f) => (
                    <div key={f.label}>
                      <label className="text-xs text-white/30 uppercase tracking-widest block mb-2">{f.label}</label>
                      <input type={f.type} className="w-full bg-white/5 border border-white/10 text-white text-sm px-4 py-3 focus:border-brand-yellow focus:outline-none transition-colors placeholder-white/20" placeholder={f.placeholder} />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="text-xs text-white/30 uppercase tracking-widest block mb-2">Business Email</label>
                  <input required type="email" className="w-full bg-white/5 border border-white/10 text-white text-sm px-4 py-3 focus:border-brand-yellow focus:outline-none transition-colors placeholder-white/20" placeholder="name@company.com" />
                </div>
                <div>
                  <label htmlFor="service-select" className="text-xs text-white/30 uppercase tracking-widest block mb-2">Service</label>
                  <select id="service-select" aria-label="Select a service" className="w-full bg-white/5 border border-white/10 text-white/50 text-sm px-4 py-3 focus:border-brand-yellow focus:outline-none transition-colors">
                    <option value="">Select a service</option>
                    {serviceOptions.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs text-white/30 uppercase tracking-widest block mb-2">Message</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 text-white text-sm px-4 py-3 focus:border-brand-yellow focus:outline-none transition-colors resize-none placeholder-white/20" placeholder="Type your message..." />
                </div>
                <button type="submit" className="w-full py-4 bg-brand-yellow text-black font-bold text-sm uppercase tracking-widest hover:bg-brand-orange transition-colors">
                  Send Request
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
