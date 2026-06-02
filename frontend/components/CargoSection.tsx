const cargo = [
  { name: 'Timber', icon: '🌲', desc: 'Specialized forestry logistics from forest to mill.' },
  { name: 'Steel', icon: '⚙️', desc: 'Heavy industry transport with dedicated wagons.' },
  { name: 'Chemicals', icon: '🧪', desc: 'Safe, certified chemical cargo handling.' },
  { name: 'Coal', icon: '⛏️', desc: 'High-volume bulk mineral transport.' },
  { name: 'Stone', icon: '🪨', desc: 'Aggregates and construction materials.' },
  { name: 'Agricultural', icon: '🌾', desc: 'Grain and agricultural product transport.' },
];

export default function CargoSection() {
  return (
    <section id="about" className="bg-brand-dark py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div>
            <p className="section-label">Cargo Types</p>
            <h2 className="font-display font-black text-4xl md:text-5xl text-white uppercase leading-tight mb-6">
              Connecting Sweden<br />and Germany.
              <span className="text-white/30"> Across Europe.</span>
            </h2>
            <p className="text-white/50 leading-relaxed mb-8">
              With operations in Sweden, Norway, and Germany, we provide seamless cross-border transport solutions that keep European industry moving. Connecting the heart of Europe since 2004.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-brand-yellow text-black text-sm font-semibold uppercase tracking-wide hover:bg-brand-orange transition-colors"
              >
                Book Your System Train
              </a>
              <a
                href="#services"
                className="px-6 py-3 border border-white/20 text-white text-sm font-semibold uppercase tracking-wide hover:border-brand-yellow hover:text-brand-yellow transition-colors"
              >
                View All Solutions
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {cargo.map((item) => (
              <div
                key={item.name}
                className="group bg-brand-near-black border border-white/5 p-6 hover:border-brand-yellow/30 transition-all duration-300"
              >
                <span className="text-2xl mb-3 block">{item.icon}</span>
                <h3 className="font-display font-bold text-white mb-1">{item.name}</h3>
                <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
