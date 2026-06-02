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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <div className="font-display font-black text-5xl md:text-6xl text-brand-yellow leading-none mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-white mb-1">{stat.label}</div>
              <div className="text-xs text-white/40">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
