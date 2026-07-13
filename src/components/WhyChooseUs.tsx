import { motion } from 'motion/react';
import { Target, Sparkles, Gem, TrendingUp, Handshake, Clock } from 'lucide-react';

export function WhyChooseUs() {
  const whyChooseUsList = [
    {
      title: 'Strategic Thinking',
      icon: <Target className="w-6 h-6 text-cyan-400" />,
      description: 'We align creative execution with your business objectives, ensuring every design and line of code serves a measurable purpose.'
    },
    {
      title: 'Creative Excellence',
      icon: <Sparkles className="w-6 h-6 text-fuchsia-400" />,
      description: 'Pushing creative boundaries to craft stunning visual systems and immersive digital storytelling that captures attention.'
    },
    {
      title: 'Premium Quality',
      icon: <Gem className="w-6 h-6 text-purple-400" />,
      description: 'An uncompromising commitment to high-end aesthetics, robust engineering practices, and clean, modular execution.'
    },
    {
      title: 'Results-Driven',
      icon: <TrendingUp className="w-6 h-6 text-amber-400" />,
      description: 'We measure success by performance: high conversion rates, faster load speeds, and increased user engagement.'
    },
    {
      title: 'Transparent Collaboration',
      icon: <Handshake className="w-6 h-6 text-emerald-400" />,
      description: 'Clear milestones, continuous communication, and shared access to project channels make our partnership seamless.'
    },
    {
      title: 'On-Time Delivery',
      icon: <Clock className="w-6 h-6 text-rose-400" />,
      description: 'Rigorous project management and optimized development pipelines ensure your product goes live exactly on schedule.'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-24 sm:py-32 flex flex-col gap-12 relative z-10 text-white">
      <div className="max-w-2xl flex flex-col gap-4">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Why Partner With Us
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1]"
        >
          Built for scale, designed for impact.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-neutral-400 text-sm sm:text-base max-w-xl leading-relaxed"
        >
          We combine high-performance engineering with world-class design logic to build experiences that stand out and drive real metrics.
        </motion.p>
      </div>

      {/* Why Choose Us Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {whyChooseUsList.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="glass-panel p-6 sm:p-8 rounded-3xl flex flex-col gap-4 relative overflow-hidden group hover:bg-white/5 transition-colors duration-300"
          >
            <div className="p-3 bg-white/5 rounded-2xl w-fit border border-white/10 group-hover:scale-105 transition-transform duration-300">
              {item.icon}
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold text-white tracking-tight">
                {item.title}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
