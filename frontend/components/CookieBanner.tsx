'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieBanner() {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-brand-near-black border-t border-white/10"
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 border border-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs">🛡</span>
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-widest mb-1">GDPR & Cookie Policy</p>
                <p className="text-xs text-white/40 max-w-xl">
                  We use cookies for the best experience. By clicking "Accept All", you consent to our use of cookies.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={() => setVisible(false)}
                className="px-4 py-2 border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:border-white/50 transition-colors"
              >
                Settings
              </button>
              <button
                onClick={() => setVisible(false)}
                className="px-4 py-2 bg-brand-yellow text-black text-xs font-bold uppercase tracking-widest hover:bg-brand-orange transition-colors"
              >
                Accept All
              </button>
              <button onClick={() => setVisible(false)} className="text-white/30 hover:text-white transition-colors ml-2">
                ✕
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
