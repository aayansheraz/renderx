import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Mail, Send, Phone, MapPin, MessageCircle } from 'lucide-react';

export function ContactPage() {
  const serviceOptions = [
    'Graphic Design',
    'Branding',
    'Video Editing',
    'Web & App Development',
    'Performance Marketing',
    'Other'
  ];

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Web & App Development',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', service: 'Web & App Development', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-16 sm:py-24 flex flex-col justify-center min-h-[85vh] lg:min-h-screen relative z-10 text-white">
      {/* Repeating and reversing background glows for premium atmospheric effect (radial gradient - no blur filters) */}
      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.3, 0.85, 1],
          opacity: [0.6, 0.9, 0.6, 0.6],
        }}
        transition={{
          duration: 15,
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
          x: [0, -40, 50, 0],
          y: [0, 30, -40, 0],
          scale: [1, 0.9, 1.25, 1],
          opacity: [0.6, 0.6, 0.9, 0.6],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        style={{
          background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, rgba(6,182,212,0) 70%)',
        }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] pointer-events-none -z-10"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left side content */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent w-fit"
          >
            Contact RenderX
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight"
          >
            Let's render the <br /> future together.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-md"
          >
            Have a project in mind or need technical consultations? Fill out the details, and our engineering team will get back to you within 24 hours.
          </motion.p>

          {/* Agency Details */}
          <div className="flex flex-col gap-4 mt-6">
            <a
              href="mailto:renderxmotion@gmail.com"
              className="flex items-center gap-3 text-neutral-300 hover:text-fuchsia-300 transition-colors group w-fit decoration-transparent"
            >
              <div className="p-2.5 bg-white/5 border border-white/10 rounded-xl group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5 text-fuchsia-400" />
              </div>
              <span className="text-sm font-medium">renderxmotion@gmail.com</span>
            </a>
            <a
              href="tel:+923413689771"
              className="flex items-center gap-3 text-neutral-300 hover:text-purple-300 transition-colors group w-fit decoration-transparent"
            >
              <div className="p-2.5 bg-white/5 border border-white/10 rounded-xl group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5 text-purple-400" />
              </div>
              <span className="text-sm font-medium">+92 341 3689771</span>
            </a>
            <a
              href="https://wa.me/923413689771?text=Hi%20RenderX,%20I'm%20interested%20in%20working%20with%20you!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-neutral-300 hover:text-emerald-300 transition-colors group w-fit decoration-transparent"
            >
              <div className="p-2.5 bg-white/5 border border-white/10 rounded-xl group-hover:scale-105 transition-transform">
                <MessageCircle className="w-5 h-5 text-emerald-400" />
              </div>
              <span className="text-sm font-medium">Chat on WhatsApp</span>
            </a>
            <div className="flex items-center gap-3 text-neutral-300">
              <div className="p-2.5 bg-white/5 border border-white/10 rounded-xl">
                <MapPin className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="text-sm font-medium">Lahore, Pakistan</span>
            </div>
          </div>
        </div>

        {/* Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl relative overflow-hidden"
        >
          <form onSubmit={handleFormSubmit} className="flex flex-col gap-6 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 focus:border-cyan-400 rounded-xl px-4 py-3 text-white text-sm outline-hidden transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 focus:border-cyan-400 rounded-xl px-4 py-3 text-white text-sm outline-hidden transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="service" className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
                Select Service
              </label>
              <select
                id="service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full bg-neutral-900 border border-white/10 focus:border-cyan-400 rounded-xl px-4 py-3 text-white text-sm outline-hidden transition-colors cursor-pointer"
              >
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt} className="bg-neutral-950 text-white">
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
                Project Details
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white/5 border border-white/10 focus:border-cyan-400 rounded-xl px-4 py-3 text-white text-sm outline-hidden transition-colors resize-none"
                placeholder="Tell us about your timeline, scope, and goals..."
              />
            </div>

            <div className="mt-2 flex flex-col sm:flex-row gap-4 w-full">
              <button
                type="submit"
                disabled={isSubmitting || submitSuccess}
                className="w-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 hover:opacity-95 text-white font-semibold py-3.5 rounded-xl text-xs uppercase tracking-widest cursor-pointer flex justify-center items-center gap-2 shadow-lg shadow-fuchsia-500/10 transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                ) : submitSuccess ? (
                  <>
                    <Check className="w-4 h-4" /> Inquiry Received!
                  </>
                ) : (
                  <>
                    <Send className="w-4.5 h-4.5" /> Submit Inquiry
                  </>
                )}
              </button>

              <a
                href="https://wa.me/923413689771?text=Hi%20RenderX,%20I'd%20like%20to%20inquire%20about%20a%20project!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3.5 rounded-xl text-xs uppercase tracking-widest cursor-pointer flex justify-center items-center gap-2 shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/25 transition-all duration-300 decoration-transparent"
              >
                <MessageCircle className="w-4.5 h-4.5" /> WhatsApp Inquiry
              </a>
            </div>
          </form>

          {/* Glowing bottom line decoration */}
          <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500 opacity-80" />
        </motion.div>
      </div>
    </div>
  );
}
