'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
      {/* Background train image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1920&q=85"
          alt="HectorRail locomotive"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay — matches original cinematic look */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-32 w-full">
        <div className="max-w-3xl">
          {/* Main heading — matches original exactly */}
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-display font-black text-[13vw] md:text-[9vw] lg:text-[8vw] leading-[0.88] text-white uppercase"
            >
              YOUR FREIGHT.
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-display font-black text-[13vw] md:text-[9vw] lg:text-[8vw] leading-[0.88] text-white uppercase"
            >
              ON TIME.
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-10">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.34, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-display font-black text-[13vw] md:text-[9vw] lg:text-[8vw] leading-[0.88] text-brand-yellow uppercase"
            >
              ACROSS EUROPE.
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-lg md:text-xl text-white/80 max-w-xl mb-10 leading-relaxed"
          >
            Scandinavia's largest private rail freight operator — running
            Sweden to Germany since 2004.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="group px-8 py-4 bg-brand-yellow text-black font-bold text-base uppercase tracking-wide hover:bg-brand-orange transition-colors duration-300 flex items-center justify-center gap-3"
            >
              Get a Transport Quote
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
            <a
              href="#about"
              className="px-8 py-4 border border-white/40 bg-black/30 text-white font-bold text-base hover:border-white hover:bg-black/50 transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-sm"
            >
              <span className="text-sm">▶</span>
              Watch Our Story
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border border-white/30 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
