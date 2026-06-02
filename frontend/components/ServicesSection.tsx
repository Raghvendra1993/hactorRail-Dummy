const services = [
  {
    tag: 'SYSTEM TRANSPORT',
    title: 'Dedicated Capacity.\nNo Compromise.',
    desc: 'Your consist. Your schedule. No shared trains, no delays caused by other cargo. Full dedicated trains built around your volume.',
    features: ['Direct Point-to-Point Routes', 'Customized Schedules', 'Dedicated Full Trains'],
  },
  {
    tag: 'TIMBER',
    title: 'The Backbone of\nthe Timber Industry.',
    desc: 'Specialized equipment and expertise for the forestry sector. Direct delivery to sawmills, paper mills, or export terminals.',
    features: ['Specialized Timber Wagons', 'Direct to Sawmills', 'Cross-Border Operation'],
  },
  {
    tag: 'WAGON LOAD',
    title: 'Scalable Solutions\nfor Any Volume.',
    desc: 'Whether you have a single wagon or a growing volume, we provide the flexibility you need to scale your rail logistics.',
    features: ['Scalable Solutions', 'Any Volume', 'Diverse Wagon Types'],
  },
  {
    tag: 'INTERMODAL',
    title: 'Seamless\nMulti-Modal Logistics.',
    desc: 'Combining rail and road for maximum efficiency and sustainability. Your Container. Our Network.',
    features: ['Terminal-to-Terminal', 'Unified Logistics', 'CO2 Reduction'],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-brand-dark py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="section-label">What We Do</p>
          <h2 className="font-display font-black text-4xl md:text-6xl text-white uppercase leading-tight max-w-2xl">
            Built Around<br />Your Cargo
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/10">
          {services.map((s) => (
            <div
              key={s.tag}
              className="group bg-brand-dark p-10 md:p-12 hover:bg-brand-near-black transition-colors duration-300 cursor-pointer"
            >
              <p className="text-xs font-medium tracking-widest uppercase text-brand-yellow/70 mb-6 group-hover:text-brand-yellow transition-colors">
                {s.tag}
              </p>
              <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-4 whitespace-pre-line leading-tight">
                {s.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-8">{s.desc}</p>
              <ul className="space-y-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-white/60">
                    <span className="w-1 h-1 bg-brand-yellow rounded-full flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-center gap-2 text-sm font-medium text-white/40 group-hover:text-brand-yellow transition-colors">
                <span>View all solutions</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
