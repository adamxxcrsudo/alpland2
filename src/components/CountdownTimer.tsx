import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const LAUNCH_DATE = new Date('2026-10-01T00:00:00');

function getTimeLeft(): TimeLeft {
  const now = new Date();
  const diff = LAUNCH_DATE.getTime() - now.getTime();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        key={value}
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="relative glass-strong rounded-2xl px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 min-w-[64px] sm:min-w-[88px] md:min-w-[100px]"
      >
        <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tabular-nums">
          {String(value).padStart(2, '0')}
        </span>
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
      </motion.div>
      <span className="mt-2 text-[10px] sm:text-xs font-medium uppercase tracking-[0.15em] text-glacier-400">
        {label}
      </span>
    </div>
  );
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
      <TimeUnit value={timeLeft.days} label="Days" />
      <span className="text-xl sm:text-2xl md:text-3xl font-light text-glacier-500 -mt-6">:</span>
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <span className="text-xl sm:text-2xl md:text-3xl font-light text-glacier-500 -mt-6">:</span>
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <span className="text-xl sm:text-2xl md:text-3xl font-light text-glacier-500 -mt-6">:</span>
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
}
