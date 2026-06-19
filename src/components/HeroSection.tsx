import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';
import WaitlistForm from './WaitlistForm';
import PhoneMockups from './PhoneMockups';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-alpine-950" />
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(34,211,238,0.06)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(31,66,106,0.3)_0%,transparent_50%)]" />

      {/* Mountain silhouettes */}
      <div className="absolute bottom-0 left-0 right-0 h-[40vh] pointer-events-none">
        <svg viewBox="0 0 1440 400" className="absolute bottom-0 w-full h-full opacity-[0.07]" preserveAspectRatio="none">
          <path d="M0,400 L0,250 L200,100 L400,200 L600,80 L800,180 L1000,60 L1200,160 L1440,100 L1440,400 Z" fill="currentColor" className="text-white" />
        </svg>
        <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-[70%] opacity-[0.04]" preserveAspectRatio="none">
          <path d="M0,320 L0,180 L180,80 L360,160 L540,50 L720,140 L900,40 L1080,130 L1260,60 L1440,120 L1440,320 Z" fill="currentColor" className="text-white" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium text-icy tracking-wide uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-icy animate-pulse" />
                Coming October 2026
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
            >
              <span className="text-gradient-warm">Mountain Intelligence.</span>
              <br />
              <span className="text-white">Powered by AI.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-glacier-300 max-w-lg leading-relaxed mb-10"
            >
              Alpline helps skiers and snowboarders discover resorts, track conditions, generate intelligent itineraries, and plan better days on the mountain.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mb-10"
            >
              <CountdownTimer />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="w-full max-w-md"
            >
              <WaitlistForm variant="hero" />
            </motion.div>
          </div>

          {/* Right - Phone mockups */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:flex justify-center items-center"
          >
            <PhoneMockups />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
