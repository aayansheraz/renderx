import { motion } from 'motion/react';

const base = import.meta.env.BASE_URL;

const brandLogos = [
  { src: `${base}logos/brand-1.png`, alt: 'Rosyribbons' },
  { src: `${base}logos/brand-2.png`, alt: 'Libbas' },
  { src: `${base}logos/brand-3.png`, alt: 'Pakcare International' },
  { src: `${base}logos/brand-4.png`, alt: 'Peaxel' },
  { src: `${base}logos/brand-5.png`, alt: 'Pret by Abeeha' },
  { src: `${base}logos/brand-6.png`, alt: 'Ladlii' },
  { src: `${base}logos/brand-7.png`, alt: 'Auto World 555' },
  { src: `${base}logos/brand-8.png`, alt: 'Skates.pk' }
];

export function BrandsMarquee() {
  return (
    <div className="w-full py-24 sm:py-32 relative z-10 text-white overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col gap-4 items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Trusted Partnerships
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1]"
        >
          Brands we've worked with.
        </motion.h2>
      </div>

      {/* Infinite Rotating Logo Strip */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="relative w-full marquee-mask"
      >
        <div className="flex items-center w-max animate-marquee gap-20 sm:gap-28 pr-20 sm:pr-28 hover:[animation-play-state:paused]">
          {[...brandLogos, ...brandLogos].map((logo, index) => (
            <img
              key={`${logo.src}-${index}`}
              src={logo.src}
              alt={logo.alt}
              loading="lazy"
              draggable={false}
              className="h-24 sm:h-32 w-auto max-w-[280px] object-contain shrink-0 select-none opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
