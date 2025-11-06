import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/5bmZ3b3WkI8K-Placeholder/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-sm mb-4">Welcome to Sproutly</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-brown-800 leading-tight">
            Your Cute Houseplant Shop
          </h1>
          <p className="mt-4 text-brown-700/80 text-lg">
            Discover hand-picked plants from six delightful mini-stores. Friendly care tips, cheerful vibes, and greenery that makes your space smile.
          </p>
        </motion.div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/90"></div>
    </section>
  );
}
