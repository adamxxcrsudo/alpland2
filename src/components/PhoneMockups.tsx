import { motion } from 'framer-motion';

function PhoneFrame({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Phone bezel */}
      <div className="relative bg-alpine-900 rounded-[2.5rem] p-2 shadow-2xl shadow-black/50 border border-white/5">
        {/* Screen */}
        <div className="relative bg-alpine-950 rounded-[2rem] overflow-hidden aspect-[9/19.5] w-[220px]">
          {/* Dynamic island */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-20" />
          {children}
        </div>
      </div>
      {/* Reflection */}
      <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none z-10" />
    </div>
  );
}

function PlannerScreen() {
  return (
    <div className="h-full flex flex-col p-4 pt-10">
      <div className="text-center mb-4">
        <p className="text-[10px] text-glacier-500 uppercase tracking-wider">Today</p>
        <h3 className="text-lg font-bold text-white">Whistler Blackcomb</h3>
        <p className="text-[10px] text-glacier-400">BC, Canada</p>
      </div>
      <div className="flex-1 space-y-2">
        <div className="glass rounded-xl p-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-icy/20 flex items-center justify-center">
              <span className="text-[8px] text-icy font-bold">1</span>
            </div>
            <span className="text-[10px] text-white font-medium">Morning: Fresh Powder</span>
          </div>
          <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
            <div className="h-full w-3/4 bg-gradient-to-r from-icy to-icy-light rounded-full" />
          </div>
        </div>
        <div className="glass rounded-xl p-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-icy/20 flex items-center justify-center">
              <span className="text-[8px] text-icy font-bold">2</span>
            </div>
            <span className="text-[10px] text-white font-medium">Midday: Alpine Lunch</span>
          </div>
          <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
            <div className="h-full w-1/2 bg-gradient-to-r from-icy to-icy-light rounded-full" />
          </div>
        </div>
        <div className="glass rounded-xl p-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-icy/20 flex items-center justify-center">
              <span className="text-[8px] text-icy font-bold">3</span>
            </div>
            <span className="text-[10px] text-white font-medium">Afternoon: Tree Runs</span>
          </div>
          <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
            <div className="h-full w-2/3 bg-gradient-to-r from-icy to-icy-light rounded-full" />
          </div>
        </div>
      </div>
      <div className="mt-3 glass rounded-xl p-2.5">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-[8px] text-glacier-500">Snowfall</p>
            <p className="text-sm font-bold text-white">24cm</p>
          </div>
          <div className="text-right">
            <p className="text-[8px] text-glacier-500">Temp</p>
            <p className="text-sm font-bold text-white">-4°C</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ResortScreen() {
  return (
    <div className="h-full flex flex-col p-4 pt-10">
      <div className="text-center mb-4">
        <h3 className="text-lg font-bold text-white">Resorts</h3>
      </div>
      <div className="flex-1 space-y-2">
        {[
          { name: 'Aspen Snowmass', rating: 4.9, lifts: '18/25', color: 'from-amber-500/20 to-orange-500/20' },
          { name: 'Zermatt', rating: 4.8, lifts: '32/38', color: 'from-icy/20 to-cyan-500/20' },
          { name: 'Niseko', rating: 4.7, lifts: '12/15', color: 'from-violet-500/20 to-purple-500/20' },
          { name: 'Chamonix', rating: 4.6, lifts: '20/24', color: 'from-emerald-500/20 to-green-500/20' },
        ].map((resort) => (
          <div key={resort.name} className="glass rounded-xl p-2.5 flex items-center gap-2.5">
            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${resort.color} flex items-center justify-center`}>
              <span className="text-[8px] font-bold text-white">{resort.name[0]}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] text-white font-medium truncate">{resort.name}</p>
              <p className="text-[8px] text-glacier-500">Lifts: {resort.lifts}</p>
            </div>
            <div className="flex items-center gap-0.5">
              <span className="text-[10px] text-icy font-bold">{resort.rating}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 glass rounded-xl p-2.5">
        <div className="flex items-center justify-between">
          <span className="text-[8px] text-glacier-500">Global Coverage</span>
          <span className="text-[10px] text-white font-bold">2,400+ Resorts</span>
        </div>
      </div>
    </div>
  );
}

function ConditionsScreen() {
  return (
    <div className="h-full flex flex-col p-4 pt-10">
      <div className="text-center mb-4">
        <h3 className="text-lg font-bold text-white">Conditions</h3>
      </div>
      <div className="flex-1 space-y-2">
        <div className="glass rounded-xl p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] text-glacier-500">Snow Quality</span>
            <span className="text-[10px] text-icy font-bold">Excellent</span>
          </div>
          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
            <div className="h-full w-[92%] bg-gradient-to-r from-icy to-icy-light rounded-full" />
          </div>
        </div>
        <div className="glass rounded-xl p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] text-glacier-500">Visibility</span>
            <span className="text-[10px] text-amber-400 font-bold">Moderate</span>
          </div>
          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
            <div className="h-full w-[65%] bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full" />
          </div>
        </div>
        <div className="glass rounded-xl p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] text-glacier-500">Wind</span>
            <span className="text-[10px] text-emerald-400 font-bold">Calm</span>
          </div>
          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
            <div className="h-full w-[30%] bg-gradient-to-r from-emerald-400 to-green-400 rounded-full" />
          </div>
        </div>
        <div className="glass rounded-xl p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] text-glacier-500">Crowds</span>
            <span className="text-[10px] text-red-400 font-bold">High</span>
          </div>
          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
            <div className="h-full w-[85%] bg-gradient-to-r from-red-400 to-orange-400 rounded-full" />
          </div>
        </div>
      </div>
      <div className="mt-3 glass rounded-xl p-2.5">
        <div className="flex items-center justify-between">
          <span className="text-[8px] text-glacier-500">Last Updated</span>
          <span className="text-[10px] text-white font-bold">2 min ago</span>
        </div>
      </div>
    </div>
  );
}

export default function PhoneMockups() {
  return (
    <div className="relative w-[500px] h-[500px]">
      {/* Back phone - Resort Discovery */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-0 top-8"
      >
        <PhoneFrame className="opacity-60 scale-90">
          <ResortScreen />
        </PhoneFrame>
      </motion.div>

      {/* Back phone - Conditions */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute right-0 top-12"
      >
        <PhoneFrame className="opacity-60 scale-90">
          <ConditionsScreen />
        </PhoneFrame>
      </motion.div>

      {/* Front phone - Planner */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute left-1/2 -translate-x-1/2 top-0 z-10"
      >
        <PhoneFrame>
          <PlannerScreen />
        </PhoneFrame>
      </motion.div>

      {/* Glow effect */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-icy/10 rounded-full blur-[100px] pointer-events-none" />
    </div>
  );
}
