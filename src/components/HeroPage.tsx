import { motion } from 'motion/react';
import { useTypewriter } from '../hooks/useTypewriter';
import { ServiceSelector } from './ServiceSelector';

export function HeroPage() {
  const { displayed, done } = useTypewriter("we render the\nfuture of digital.", 38, 600);

  return (
    <main
      id="spade-hero"
      className="w-full max-w-7xl mx-auto px-6 flex flex-col justify-center min-h-[70vh] lg:min-h-[80vh] pt-32 pb-4 sm:pb-6 relative"
    >
      {/* Immersive ambient glows styled as hardware-friendly radial gradients (no slow blur filters) */}
      <motion.div
        animate={{
          x: [0, 45, -25, 0],
          y: [0, -35, 25, 0],
          scale: [1, 1.25, 0.9, 1],
          opacity: [0.6, 0.9, 0.6, 0.6],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        style={{
          background: 'radial-gradient(circle, rgba(217,70,239,0.15) 0%, rgba(217,70,239,0) 70%)',
        }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] pointer-events-none -z-10"
      />
      <motion.div
        animate={{
          x: [0, -35, 45, 0],
          y: [0, 25, -35, 0],
          scale: [1, 0.9, 1.25, 1],
          opacity: [0.6, 0.6, 0.9, 0.6],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        style={{
          background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, rgba(6,182,212,0) 70%)',
        }}
        className="absolute top-1/3 left-1/3 w-[500px] h-[500px] pointer-events-none -z-10"
      />

      {/* Animated Headline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <h1 className="text-5xl md:text-6xl lg:text-[76px] font-extrabold tracking-tight leading-[1.08] mb-6 select-none w-full whitespace-pre-wrap">
          <span className="bg-gradient-to-r from-fuchsia-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent filter drop-shadow-[0_2px_15px_rgba(217,70,239,0.15)]">
            {displayed}
          </span>
          {!done && (
            <span className="inline-block w-[3px] h-[1em] bg-cyan-400 align-middle ml-[4px] animate-blink shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
          )}
        </h1>
      </motion.div>

      {/* Animated Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="w-full"
      >
        <p className="text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed font-normal mb-8 max-w-3xl drop-shadow-xs">
          A full-service creative agency helping brands grow through impactful design, strategic branding, high-performance marketing, compelling video content, and modern digital solutions. We combine creativity with strategy to build experiences that drive attention, engagement, and measurable results.
        </p>
      </motion.div>

      {/* Service selector */}
      <ServiceSelector />
    </main>
  );
}
