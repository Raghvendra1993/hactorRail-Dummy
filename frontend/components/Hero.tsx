export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end bg-brand-dark overflow-hidden">
      {/* Background gradient + pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-black to-brand-near-black" />
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(rgba(245,200,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(245,200,0,0.3) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        {/* Yellow glow */}
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-brand-yellow/5 rounded-full blur-3xl" />
      </div>

      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <span className="font-display font-black text-[20vw] leading-none text-white/[0.03] select-none whitespace-nowrap">
          HECTORRAIL
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24 pt-40 w-full">
        <div className="max-w-4xl">
          <p className="section-label mb-6">Tailored Rail Freight Solutions</p>
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-white mb-8 uppercase">
            CONNECTING
            <br />
            <span className="text-brand-yellow">THE HEART</span>
            <br />
            OF EUROPE.
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mb-12 leading-relaxed">
            Tailored rail freight solutions, running Sweden to Germany since 2004. Two markets. Any volume.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              className="px-8 py-4 bg-brand-yellow text-black font-semibold text-sm uppercase tracking-wide hover:bg-brand-orange transition-colors"
            >
              View Our Services
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-white/30 text-white font-semibold text-sm uppercase tracking-wide hover:border-brand-yellow hover:text-brand-yellow transition-colors"
            >
              Start the Conversation
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 flex items-center gap-3 text-white/40">
          <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
          <div className="w-px h-12 bg-white/20" />
        </div>
      </div>
    </section>
  );
}
