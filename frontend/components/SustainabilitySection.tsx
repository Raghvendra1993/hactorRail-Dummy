export default function SustainabilitySection() {
  return (
    <section id="sustainability" className="bg-brand-near-black py-32 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/10 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div>
            <p className="section-label" style={{ color: '#4caf8f' }}>Sustainability</p>
            <h2 className="font-display font-black text-4xl md:text-6xl text-white uppercase leading-tight mb-6">
              Tracking the<br />Future of<br />
              <span style={{ color: '#4caf8f' }}>Logistics.</span>
            </h2>
            <p className="text-white/50 leading-relaxed mb-8">
              We are committed to making rail freight the most sustainable choice for European industry, with zero-emission operations at the core of our strategy. Sourced across both markets from renewable energy providers.
            </p>
            <p className="text-white/50 leading-relaxed mb-8">
              We use the industry-standard EcoTransIT tool to provide transparent, verified carbon footprint calculations for every route we operate.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white text-sm font-semibold uppercase tracking-wide hover:border-white/50 transition-colors"
            >
              Sustainability Report 2024
              <span>↓</span>
            </a>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {[
              { value: '70%', label: 'CO₂ Reduction', sub: 'Compared to road freight' },
              { value: '100%', label: 'Zero Direct Emissions', sub: 'Electric traction fleet' },
              { value: '2024', label: 'Verified Report', sub: 'Certified Excellence' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-8 p-6 border border-white/10 hover:border-brand-teal/40 transition-colors group"
              >
                <div
                  className="font-display font-black text-4xl md:text-5xl flex-shrink-0"
                  style={{ color: '#4caf8f' }}
                >
                  {item.value}
                </div>
                <div>
                  <div className="font-medium text-white">{item.label}</div>
                  <div className="text-xs text-white/40 mt-1">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
