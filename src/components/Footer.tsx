import { Logo } from './Logo';
import { Mail, Phone, MapPin } from 'lucide-react';

const footerNav = [
  { label: 'Home', id: 'home' },
  { label: 'Services', id: 'services' },
  { label: 'Why Us', id: 'why-choose-us' },
  { label: 'Contact', id: 'contact' }
];

export function Footer() {
  const scrollTo = (id: string) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-neutral-950/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-8 flex flex-col gap-12">
        {/* Top: brand + links + contact */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <button
              onClick={() => scrollTo('home')}
              className="flex items-center gap-3 cursor-pointer w-fit group"
            >
              <Logo size={32} className="group-hover:scale-105 transition-transform duration-300" />
              <span className="text-xl tracking-tight text-white font-medium select-none">RenderX</span>
            </button>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              A full-service creative agency helping brands grow through impactful design, strategic branding, and modern digital solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
              Quick Links
            </h3>
            <div className="flex flex-col gap-2.5">
              {footerNav.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-left text-sm text-neutral-400 hover:text-white transition-colors cursor-pointer w-fit"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
              Get In Touch
            </h3>
            <div className="flex flex-col gap-2.5 text-sm text-neutral-400">
              <a
                href="mailto:renderxmotion@gmail.com"
                className="flex items-center gap-2.5 hover:text-fuchsia-300 transition-colors w-fit decoration-transparent"
              >
                <Mail className="w-4 h-4 text-fuchsia-400 shrink-0" />
                renderxmotion@gmail.com
              </a>
              <a
                href="tel:+923413689771"
                className="flex items-center gap-2.5 hover:text-purple-300 transition-colors w-fit decoration-transparent"
              >
                <Phone className="w-4 h-4 text-purple-400 shrink-0" />
                +92 341 3689771
              </a>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                Lahore, Pakistan
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/5 flex items-center justify-center text-xs text-neutral-500 text-center">
          <span>© {new Date().getFullYear()} RenderX. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
