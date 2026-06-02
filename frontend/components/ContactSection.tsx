'use client';
import { useState } from 'react';

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="bg-brand-near-black py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-24 items-start">
          <div>
            <p className="section-label">Get in Touch</p>
            <h2 className="font-display font-black text-4xl md:text-6xl text-white uppercase leading-tight mb-6">
              Start The<br />
              <span className="text-brand-yellow">Conversation.</span>
            </h2>
            <p className="text-white/50 leading-relaxed mb-10">
              Our team will get back to you within 4 business hours. Whether you have a single wagon or a full train — we want to hear from you.
            </p>
            <div className="space-y-4">
              {[
                { label: 'Address', value: 'Danderyd, Stockholm, Sweden' },
                { label: 'Standort', value: 'Bochum, Germany' },
                { label: 'Email', value: 'info@hectorrail.com' },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 text-sm">
                  <span className="text-white/30 w-20 flex-shrink-0">{item.label}</span>
                  <span className="text-white/70">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            {sent ? (
              <div className="border border-brand-yellow/30 bg-brand-yellow/5 p-10 text-center">
                <div className="text-brand-yellow text-4xl mb-4">✓</div>
                <h3 className="font-display font-bold text-white text-xl mb-2">Message Sent</h3>
                <p className="text-white/50 text-sm">Our team will get back to you within 4 business hours.</p>
                <button
                  className="mt-6 text-sm text-brand-yellow/60 hover:text-brand-yellow transition-colors"
                  onClick={() => setSent(false)}
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-white/40 uppercase tracking-widest block mb-2">First Name</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-white/5 border border-white/10 text-white text-sm px-4 py-3 focus:border-brand-yellow focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-white/40 uppercase tracking-widest block mb-2">Company</label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/10 text-white text-sm px-4 py-3 focus:border-brand-yellow focus:outline-none transition-colors"
                      placeholder="Your company"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-white/40 uppercase tracking-widest block mb-2">Business Email</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-white/5 border border-white/10 text-white text-sm px-4 py-3 focus:border-brand-yellow focus:outline-none transition-colors"
                    placeholder="name@company.com"
                  />
                </div>
                <div>
                  <label className="text-xs text-white/40 uppercase tracking-widest block mb-2">Service</label>
                  <select className="w-full bg-white/5 border border-white/10 text-white/70 text-sm px-4 py-3 focus:border-brand-yellow focus:outline-none transition-colors">
                    <option value="">Select a service</option>
                    <option>System Transport</option>
                    <option>Timber Transport</option>
                    <option>Wagon Load Transport</option>
                    <option>Intermodal</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-white/40 uppercase tracking-widest block mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 text-white text-sm px-4 py-3 focus:border-brand-yellow focus:outline-none transition-colors resize-none"
                    placeholder="Type your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-brand-yellow text-black font-bold text-sm uppercase tracking-wide hover:bg-brand-orange transition-colors"
                >
                  Send Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
