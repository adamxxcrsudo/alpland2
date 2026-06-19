import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Check, Loader2, Snowflake, Mountain } from 'lucide-react';
import { isSupabaseConfigured, supabase } from '../lib/supabase';

interface WaitlistFormProps {
  variant?: 'hero' | 'cta';
}

export default function WaitlistForm({ variant = 'hero' }: WaitlistFormProps) {
  const [email, setEmail] = useState('');
  const [riderType, setRiderType] = useState<'skier' | 'snowboarder' | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const isHero = variant === 'hero';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || status === 'loading') return;

    if (!isSupabaseConfigured || !supabase) {
      setErrorMessage('The waitlist is not connected yet. Please check back soon.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert({ email: email.trim().toLowerCase(), rider_type: riderType });

      if (error) {
        if (error.code === '23505') {
          setErrorMessage('This email is already on the waitlist.');
          setStatus('error');
        } else {
          throw error;
        }
      } else {
        setStatus('success');
        setEmail('');
        setRiderType(null);
      }
    } catch {
      setErrorMessage('Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`text-center ${isHero ? 'py-8' : 'py-6'}`}
      >
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
          <Check className="w-7 h-7 text-emerald-400" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">You&apos;re on the list.</h3>
        <p className="text-glacier-400 text-sm">
          We&apos;ll let you know when Alpline launches.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className={`flex flex-col ${isHero ? 'gap-4' : 'gap-3'}`}>
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-glacier-500" />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-glacier-600 focus:outline-none focus:border-icy/40 focus:ring-1 focus:ring-icy/20 transition-all text-sm"
          />
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setRiderType(riderType === 'skier' ? null : 'skier')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg border text-sm font-medium transition-all ${
              riderType === 'skier'
                ? 'border-icy/40 bg-icy/10 text-icy'
                : 'border-white/10 bg-white/5 text-glacier-400 hover:bg-white/10'
            }`}
          >
            <Mountain className="w-4 h-4" />
            Skier
          </button>
          <button
            type="button"
            onClick={() => setRiderType(riderType === 'snowboarder' ? null : 'snowboarder')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg border text-sm font-medium transition-all ${
              riderType === 'snowboarder'
                ? 'border-icy/40 bg-icy/10 text-icy'
                : 'border-white/10 bg-white/5 text-glacier-400 hover:bg-white/10'
            }`}
          >
            <Snowflake className="w-4 h-4" />
            Snowboarder
          </button>
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full py-3.5 rounded-xl bg-gradient-to-r from-icy-dark to-icy text-alpine-950 font-semibold text-sm hover:from-icy hover:to-icy-light transition-all disabled:opacity-50 flex items-center justify-center gap-2 glow-icy"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Joining...
            </>
          ) : (
            'Join the Waitlist'
          )}
        </button>
      </div>

      <AnimatePresence>
        {errorMessage && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="mt-3 text-sm text-red-400 text-center"
          >
            {errorMessage}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
