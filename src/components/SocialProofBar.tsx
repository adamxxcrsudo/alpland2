import { motion } from 'framer-motion';
import { Globe, Brain, ThermometerSnowflake, Users } from 'lucide-react';

const items = [
  { icon: Globe, label: 'Global Resort Coverage' },
  { icon: Brain, label: 'AI Trip Planning' },
  { icon: ThermometerSnowflake, label: 'Live Snow Intelligence' },
  { icon: Users, label: 'Built For Skiers & Snowboarders' },
];

export default function SocialProofBar() {
  return (
    <section className="relative py-8 border-y border-white/5 bg-alpine-950/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-full glass"
            >
              <item.icon className="w-4 h-4 text-icy" />
              <span className="text-sm font-medium text-glacier-200 whitespace-nowrap">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
