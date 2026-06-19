import { motion } from 'framer-motion';
import WaitlistForm from './WaitlistForm';

export default function WaitlistCTA() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-alpine-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(34,211,238,0.08)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Be First On <span className="text-gradient">The Mountain.</span>
          </h2>
          <p className="text-base sm:text-lg text-glacier-400 mb-10 max-w-lg mx-auto">
            Join the waitlist and get early access when Alpline launches.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-md mx-auto"
        >
          <div className="glass-strong rounded-2xl p-6 sm:p-8">
            <WaitlistForm variant="cta" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
