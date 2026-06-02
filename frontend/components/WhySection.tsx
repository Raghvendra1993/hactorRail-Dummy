const principles = [
  {
    number: '01',
    title: 'Safety First',
    desc: 'Safety is our license to operate. We maintain the highest standards across our entire fleet and operations. No compromises.',
  },
  {
    number: '02',
    title: 'Dedicated Capacity',
    desc: 'Your consist. Your schedule. No shared trains, no delays caused by other cargo. We deliver on our promises.',
  },
  {
    number: '03',
    title: 'Agile Culture',
    desc: 'Short decision paths and a flat hierarchy where your expertise is valued. Short reaction times, real solutions.',
  },
  {
    number: '04',
    title: 'Certified Excellence',
    desc: 'We deliver high-capacity rail solutions with industry-leading punctuality and reliability. Verified and certified.',
  },
];

export default function WhySection() {
  return (
    <section className="bg-brand-dark py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="section-label">Why Hector Rail</p>
          <h2 className="font-display font-black text-4xl md:text-6xl text-white uppercase leading-tight">
            The Principles<br />
            <span className="text-white/30">That Drive Us.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {principles.map((p) => (
            <div key={p.number} className="bg-brand-dark p-8 md:p-10 group hover:bg-brand-near-black transition-colors">
              <div className="font-display font-black text-5xl text-brand-yellow/20 mb-6 group-hover:text-brand-yellow/40 transition-colors">
                {p.number}
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">{p.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
