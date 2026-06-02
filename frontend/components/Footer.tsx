import Link from 'next/link';

const footerLinks = {
  Services: ['System Transport', 'Timber Transport', 'Wagon Load', 'Intermodal'],
  Company: ['About Us', 'Why Hector Rail', 'Sustainability', 'Careers'],
  Resources: ['News', 'Sustainability Report', 'Cookie Policy', 'Contact'],
};

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <Link href="/" className="font-display text-2xl font-black text-white mb-4 block">
              Hector<span className="text-brand-yellow">Rail</span>
            </Link>
            <p className="text-sm text-white/40 leading-relaxed mb-6">
              Connecting Sweden and Germany with sustainable, high-performance logistics since 2004.
            </p>
            <div className="flex gap-3">
              {['in', 'tw', 'fb'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 border border-white/20 flex items-center justify-center text-xs text-white/40 hover:border-brand-yellow hover:text-brand-yellow transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-medium uppercase tracking-widest text-white/30 mb-6">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} HectorRail AB. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Cookie Policy', 'Terms'].map((item) => (
              <a key={item} href="#" className="text-xs text-white/30 hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
