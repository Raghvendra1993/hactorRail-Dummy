'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  {
    label: 'Services',
    href: '#services',
    dropdown: ['Services Overview', 'System Transport', 'Intermodal Transport', 'Wagon Load Transport', 'Timber Transport'],
  },
  { label: 'News & Insights', href: '#news' },
  { label: 'Sustainability', href: '#sustainability' },
  { label: 'About', href: '#about' },
  { label: 'Careers', href: '#careers' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-header' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between gap-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-8 h-8 bg-brand-yellow flex items-center justify-center font-black text-black text-lg">
            ⚡
          </div>
          <span className="font-display text-lg font-black text-white tracking-tight">
            HECTOR<span className="text-brand-yellow">RAIL</span>
          </span>
        </Link>

        {/* Desktop nav — centered */}
        <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center">
          {navLinks.map((link) => (
            <div key={link.label} className="relative">
              {link.dropdown ? (
                <button
                  className="flex items-center gap-1 text-sm font-bold text-white/80 hover:text-white transition-colors uppercase tracking-wide"
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  {link.label}
                  <span className="text-xs">▾</span>
                </button>
              ) : (
                <a href={link.href} className="text-sm font-bold text-white/80 hover:text-white transition-colors uppercase tracking-wide">
                  {link.label}
                </a>
              )}

              {/* Dropdown */}
              {link.dropdown && (
                <AnimatePresence>
                  {dropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-brand-dark border border-white/10 shadow-2xl"
                      onMouseEnter={() => setDropdown(true)}
                      onMouseLeave={() => setDropdown(false)}
                    >
                      {link.dropdown.map((item) => (
                        <a
                          key={item}
                          href="#services"
                          className="block px-5 py-3 text-xs font-semibold text-white/60 hover:text-white hover:bg-white/5 uppercase tracking-widest transition-colors border-b border-white/5 last:border-0"
                        >
                          {item}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
          {/* Language switcher */}
          <div className="flex items-center gap-1 text-xs text-white/40">
            <span className="font-bold text-white border-b border-white pb-0.5">EN</span>
            <span className="mx-1 text-white/20">|</span>
            <span className="hover:text-white/70 cursor-pointer transition-colors">SE</span>
            <span className="mx-1 text-white/20">|</span>
            <span className="hover:text-white/70 cursor-pointer transition-colors">DE</span>
          </div>
          {/* CTA pill */}
          <a
            href="#contact"
            className="px-6 py-2 bg-brand-yellow text-black text-sm font-bold uppercase tracking-wide rounded-full hover:bg-brand-orange transition-colors"
          >
            Talk to Us
          </a>
        </div>

        {/* Mobile menu button */}
        <button className="lg:hidden text-white p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 border-t border-white/10 px-6 py-6 flex flex-col gap-4 overflow-hidden"
          >
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-sm font-bold text-white/70 hover:text-brand-yellow uppercase tracking-widest transition-colors" onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="#contact" className="mt-2 px-5 py-3 bg-brand-yellow text-black text-sm font-bold text-center uppercase tracking-widest rounded-full" onClick={() => setMenuOpen(false)}>
              Talk to Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
