import { motion } from 'framer-motion';
import { Calendar, FlaskConical, Rocket } from 'lucide-react';

const phases = [
  {
    icon: Calendar,
    date: 'Today',
    title: 'Join Waitlist',
    description: 'Reserve your spot for early access and exclusive updates.',
    active: true,
  },
  {
    icon: FlaskConical,
    date: 'Summer 2026',
    title: 'Private Testing',
    description: 'Closed beta with select skiers and snowboarders worldwide.',
    active: false,
  },
  {
    icon: Rocket,
    date: 'October 2026',
    title: 'Public Launch',
    description: 'Alpline goes live. The mountain intelligence revolution begins.',
    active: false,
  },
];

export default function LaunchTimeline() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-alpine-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(31,66,106,0.2)_0%,transparent_50%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            The Road To <span className="text-gradient">Launch</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-icy/40 via-icy/20 to-transparent" />

          <div className="space-y-12">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative flex items-start gap-6 sm:gap-0 ${
                  i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 sm:px-12 ${i % 2 === 0 ? 'sm:text-right' : 'sm:text-left'}`}>
                  <div className={`inline-block text-left ${i % 2 === 0 ? 'sm:text-right' : ''}`}>
                    <span className="text-xs font-medium uppercase tracking-wider text-icy mb-1 block">
                      {phase.date}
                    </span>
                    <h3 className="text-xl font-semibold text-white mb-2">{phase.title}</h3>
                    <p className="text-sm text-glacier-400 max-w-xs">{phase.description}</p>
                  </div>
                </div>

                {/* Icon */}
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
                      phase.active
                        ? 'bg-icy/10 border-icy text-icy'
                        : 'bg-alpine-900 border-white/10 text-glacier-500'
                    }`}
                  >
                    <phase.icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden sm:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
