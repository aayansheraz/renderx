import { motion } from 'motion/react';
import { Palette, Crown, Film, Globe, TrendingUp } from 'lucide-react';

export function ServicesPage() {
  const servicesList = [
    {
      id: 'graphic-design',
      title: 'Graphic Design',
      icon: <Palette className="w-6 h-6 text-cyan-400" />,
      description: 'Professional design assets that elevate your brand and capture attention across all physical and digital touchpoints.',
      bullets: [
        'Brand Identity & Logo Design',
        'Social Media & Thumbnail Design',
        'Marketing & Print Materials',
        'Packaging & Merchandise Design',
        'Presentations & Custom Graphics'
      ],
      tags: ['Figma', 'Illustrator', 'Photoshop', 'Print Design']
    },
    {
      id: 'branding',
      title: 'Branding',
      icon: <Crown className="w-6 h-6 text-fuchsia-400" />,
      description: 'Strategic positioning and cohesive visual identity systems built to differentiate your brand and drive long-term equity.',
      bullets: [
        'Brand Strategy & Positioning',
        'Visual Identity Systems',
        'Brand Guidelines',
        'Rebranding & Brand Refresh',
        'Brand Assets & Collateral'
      ],
      tags: ['Brand Strategy', 'Guidelines', 'Identity Systems', 'Rebranding']
    },
    {
      id: 'video-editing',
      title: 'Video Editing',
      icon: <Film className="w-6 h-6 text-purple-400" />,
      description: 'High-production-value video content engineered for maximum narrative impact, pacing, sound design, and retention.',
      bullets: [
        'Short-Form (Reels, Shorts, TikTok)',
        'Long-Form (YouTube, Podcasts)',
        'Commercials & Promotional Ads',
        'Motion Graphics & Animations',
        'Color Grading & Sound Design'
      ],
      tags: ['Premiere Pro', 'After Effects', 'Color Grading', 'Sound Design']
    },
    {
      id: 'web-app-development',
      title: 'Web & App Development',
      icon: <Globe className="w-6 h-6 text-emerald-400" />,
      description: 'Blazing-fast, responsive, and secure custom web properties and software products built using modern frameworks.',
      bullets: [
        'Business & Portfolio Websites',
        'E-commerce Solutions',
        'Landing Pages',
        'Web & Mobile Applications',
        'UI/UX Design & Optimization'
      ],
      tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
    },
    {
      id: 'performance-marketing',
      title: 'Performance Marketing',
      icon: <TrendingUp className="w-6 h-6 text-amber-400" />,
      description: 'Data-driven advertising campaigns focused on lead generation, conversion optimization, and clear return on ad spend.',
      bullets: [
        'Meta & Google Ads',
        'TikTok & Social Media Advertising',
        'Lead Generation Campaigns',
        'Conversion Rate Optimization',
        'Analytics & Performance Reporting'
      ],
      tags: ['Meta Ads', 'Google Ads', 'Analytics', 'CRO']
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-24 sm:py-32 flex flex-col gap-16 relative z-10 text-white">
      {/* Services Header */}
      <div className="max-w-2xl flex flex-col gap-4">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Our Agency Services
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1]"
        >
          We turn bold ideas into digital masterpieces.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-neutral-400 text-sm sm:text-base max-w-xl leading-relaxed"
        >
          Everything we do to grow your brand, in one place. From design and branding to development and marketing — explore each service below or reach out for custom inquiries.
        </motion.p>
      </div>

      {/* Services Cards Grid */}
      <div className="flex flex-row flex-wrap justify-center gap-6">
        {servicesList.map((service, index) => {
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel glass-panel-hover p-8 rounded-3xl flex flex-col gap-6 relative overflow-hidden group w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)]"
            >
              <div className="p-3 bg-white/5 rounded-2xl w-fit border border-white/10 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 text-neutral-300 text-xs sm:text-sm pl-1">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-white/5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-white/5 border border-white/10 text-neutral-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
