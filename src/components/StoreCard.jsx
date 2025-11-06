import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

export default function StoreCard({ store }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      className="group rounded-2xl overflow-hidden bg-white border border-green-100 shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
    >
      <div className="h-36 w-full bg-gradient-to-br from-green-100 to-yellow-100 relative">
        <img
          src={store.logo}
          alt={`${store.name} logo`}
          className="absolute -bottom-6 left-6 w-16 h-16 rounded-xl object-cover ring-4 ring-white shadow-md"
        />
        <Leaf className="absolute right-4 top-4 text-green-500 opacity-40 group-hover:rotate-12 transition-transform" size={24} />
      </div>
      <div className="pt-8 px-6 pb-6">
        <h3 className="text-lg font-semibold text-brown-800">{store.name}</h3>
        <p className="mt-1 text-brown-700/80 text-sm">{store.tagline}</p>
        <div className="mt-4 inline-flex items-center gap-2 text-green-700 font-medium">
          <span className="group-hover:translate-x-0.5 transition-transform">Explore</span>
          <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </motion.div>
  );
}
