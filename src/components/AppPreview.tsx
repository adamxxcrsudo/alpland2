import { motion } from 'framer-motion';

function AppScreen({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="relative bg-alpine-900 rounded-[1.5rem] p-1.5 shadow-2xl shadow-black/40 border border-white/5">
        <div className="relative bg-alpine-950 rounded-[1.25rem] overflow-hidden aspect-[9/19]">
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-16 h-5 bg-black rounded-full z-20" />
          <div className="h-full flex flex-col p-3 pt-8">
            <div className="text-center mb-3">
              <h4 className="text-sm font-bold text-white">{title}</h4>
            </div>
            <div className="flex-1 overflow-hidden">
              {children}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none z-10" />
    </div>
  );
}

function PlannerAppContent() {
  return (
    <div className="space-y-2">
      <div className="glass rounded-lg p-2.5">
        <div className="flex items-center gap-2 mb-1.5">
          <div className="w-5 h-5 rounded-full bg-icy/20 flex items-center justify-center">
            <span className="text-[7px] text-icy font-bold">1</span>
          </div>
          <span className="text-[9px] text-white font-medium">Morning Powder Session</span>
        </div>
        <div className="h-1 bg-white/5 rounded-full overflow-hidden">
          <div className="h-full w-3/4 bg-gradient-to-r from-icy to-icy-light rounded-full" />
        </div>
      </div>
      <div className="glass rounded-lg p-2.5">
        <div className="flex items-center gap-2 mb-1.5">
          <div className="w-5 h-5 rounded-full bg-icy/20 flex items-center justify-center">
            <span className="text-[7px] text-icy font-bold">2</span>
          </div>
          <span className="text-[9px] text-white font-medium">Alpine Lunch Break</span>
        </div>
        <div className="h-1 bg-white/5 rounded-full overflow-hidden">
          <div className="h-full w-1/2 bg-gradient-to-r from-icy to-icy-light rounded-full" />
        </div>
      </div>
      <div className="glass rounded-lg p-2.5">
        <div className="flex items-center gap-2 mb-1.5">
          <div className="w-5 h-5 rounded-full bg-icy/20 flex items-center justify-center">
            <span className="text-[7px] text-icy font-bold">3</span>
          </div>
          <span className="text-[9px] text-white font-medium">Afternoon Tree Runs</span>
        </div>
        <div className="h-1 bg-white/5 rounded-full overflow-hidden">
          <div className="h-full w-2/3 bg-gradient-to-r from-icy to-icy-light rounded-full" />
        </div>
      </div>
      <div className="glass rounded-lg p-2 mt-2">
        <div className="flex justify-between">
          <div>
            <p className="text-[7px] text-glacier-500">Snow</p>
            <p className="text-[10px] font-bold text-white">24cm</p>
          </div>
          <div className="text-right">
            <p className="text-[7px] text-glacier-500">Temp</p>
            <p className="text-[10px] font-bold text-white">-4°C</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DiscoveryAppContent() {
  return (
    <div className="space-y-1.5">
      {[
        { name: 'Aspen Snowmass', loc: 'Colorado', color: 'bg-amber-500/20', letter: 'A' },
        { name: 'Zermatt', loc: 'Switzerland', color: 'bg-icy/20', letter: 'Z' },
        { name: 'Niseko', loc: 'Japan', color: 'bg-violet-500/20', letter: 'N' },
        { name: 'Chamonix', loc: 'France', color: 'bg-emerald-500/20', letter: 'C' },
        { name: 'Whistler', loc: 'Canada', color: 'bg-rose-500/20', letter: 'W' },
      ].map((r) => (
        <div key={r.name} className="glass rounded-lg p-2 flex items-center gap-2">
          <div className={`w-6 h-6 rounded-md ${r.color} flex items-center justify-center`}>
            <span className="text-[7px] font-bold text-white">{r.letter}</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[9px] text-white font-medium truncate">{r.name}</p>
            <p className="text-[7px] text-glacier-500">{r.loc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function ConditionsAppContent() {
  return (
    <div className="space-y-2">
      {[
        { label: 'Snow Quality', value: 'Excellent', pct: '92%', color: 'from-icy to-icy-light' },
        { label: 'Visibility', value: 'Moderate', pct: '65%', color: 'from-amber-400 to-yellow-400' },
        { label: 'Wind', value: 'Calm', pct: '30%', color: 'from-emerald-400 to-green-400' },
        { label: 'Crowds', value: 'High', pct: '85%', color: 'from-red-400 to-orange-400' },
      ].map((item) => (
        <div key={item.label} className="glass rounded-lg p-2">
          <div className="flex justify-between items-center mb-1">
            <span className="text-[8px] text-glacier-500">{item.label}</span>
            <span className="text-[8px] text-white font-bold">{item.value}</span>
          </div>
          <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
            <div className={`h-full bg-gradient-to-r ${item.color} rounded-full`} style={{ width: item.pct }} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function AppPreview() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-alpine-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(34,211,238,0.05)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Your Mountain, <span className="text-gradient">Intelligent</span>
          </h2>
          <p className="text-base text-glacier-400 max-w-xl mx-auto">
            Three powerful tools. One seamless experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <AppScreen title="Planner">
              <PlannerAppContent />
            </AppScreen>
            <p className="text-center mt-4 text-sm text-glacier-400 font-medium">Smart Itineraries</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <AppScreen title="Discover">
              <DiscoveryAppContent />
            </AppScreen>
            <p className="text-center mt-4 text-sm text-glacier-400 font-medium">Resort Discovery</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <AppScreen title="Live">
              <ConditionsAppContent />
            </AppScreen>
            <p className="text-center mt-4 text-sm text-glacier-400 font-medium">Live Conditions</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
