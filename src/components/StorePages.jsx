import { useMemo } from 'react';
import { motion } from 'framer-motion';

const WHATSAPP_BASE = 'https://wa.me/';

const STORES = [
  {
    slug: 'greenleaf',
    name: 'GreenLeaf',
    banner: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1400&auto=format&fit=crop',
    logo: 'https://images.unsplash.com/photo-1528097057830-972ff3f4d8a5?q=80&w=200&auto=format&fit=crop',
    plant: 'Monstera deliciosa',
    tagline: 'Rare Monstera for your home',
    images: [
      'https://images.unsplash.com/photo-1560785496-3c9f2f0e2f3c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1545245617-9465d2a55698?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1604937455095-efb4f6e295e7?q=80&w=1200&auto=format&fit=crop'
    ],
    pamphlet: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?q=80&w=1200&auto=format&fit=crop',
    whatsapp: '15551234567'
  },
  {
    slug: 'sunnysprouts',
    name: 'SunnySprouts',
    banner: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?q=80&w=1400&auto=format&fit=crop',
    logo: 'https://images.unsplash.com/photo-1498843053639-170ff2122f35?q=80&w=200&auto=format&fit=crop',
    plant: 'Assorted Succulents',
    tagline: 'Easy indoor succulents',
    images: [
      'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1498842812179-c81beecf902c?q=80&w=1200&auto=format&fit=crop'
    ],
    pamphlet: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
    whatsapp: '15557654321'
  },
  {
    slug: 'leafyluxe',
    name: 'LeafyLuxe',
    banner: 'https://images.unsplash.com/photo-1524594227084-4a829a38dacf?q=80&w=1400&auto=format&fit=crop',
    logo: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=200&auto=format&fit=crop',
    plant: 'Monstera adansonii',
    tagline: 'The Monstera that makes your room pop',
    images: [
      'https://images.unsplash.com/photo-1533674689012-136b4871b542?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1528920304568-7aa06b3dda8d?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop'
    ],
    pamphlet: 'https://images.unsplash.com/photo-1617957771880-2478d3d799c3?q=80&w=1200&auto=format&fit=crop',
    whatsapp: '15559876543'
  },
  {
    slug: 'terraflora',
    name: 'TerraFlora',
    banner: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?q=80&w=1400&auto=format&fit=crop',
    logo: 'https://images.unsplash.com/photo-1520975922193-1f8adf9be0e6?q=80&w=200&auto=format&fit=crop',
    plant: 'Fiddle Leaf Fig',
    tagline: 'Statement greens for bright corners',
    images: [
      'https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&w=1200&auto=format&fit=crop'
    ],
    pamphlet: 'https://images.unsplash.com/photo-1532960401447-7dd05bef7d97?q=80&w=1200&auto=format&fit=crop',
    whatsapp: '15550123456'
  },
  {
    slug: 'mossmood',
    name: 'MossMood',
    banner: 'https://images.unsplash.com/photo-1541873676-a18131494184?q=80&w=1400&auto=format&fit=crop',
    logo: 'https://images.unsplash.com/photo-1525120334885-38cc03a6ec3b?q=80&w=200&auto=format&fit=crop',
    plant: 'Moss Terrarium',
    tagline: 'Tiny forests for your desk',
    images: [
      'https://images.unsplash.com/photo-1505575967455-40e256f73376?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1589487391730-58c3f43d5c41?q=80&w=1200&auto=format&fit=crop'
    ],
    pamphlet: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
    whatsapp: '15550987654'
  },
  {
    slug: 'pepperpots',
    name: 'PepperPots',
    banner: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
    logo: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=200&auto=format&fit=crop',
    plant: 'Peperomia',
    tagline: 'Charming foliage, low fuss',
    images: [
      'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1587502536263-2cb8f1df8775?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1524594154908-ad6167c8f9b3?q=80&w=1200&auto=format&fit=crop'
    ],
    pamphlet: 'https://images.unsplash.com/photo-1550684848-86a5d8727436?q=80&w=1200&auto=format&fit=crop',
    whatsapp: '15552345678'
  }
];

export default function StorePages({ slug }) {
  const store = useMemo(() => STORES.find(s => s.slug === slug), [slug]);
  if (!store) return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <p className="text-brown-800">Store not found.</p>
    </div>
  );

  return (
    <div>
      <div className="h-60 w-full relative overflow-hidden rounded-b-3xl">
        <img src={store.banner} alt={`${store.name} banner`} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-brown-800">{store.name}</h1>
            <p className="text-brown-700/80">{store.plant} — {store.tagline}</p>
          </div>
          <img src={store.logo} alt={`${store.name} logo`} className="w-16 h-16 rounded-xl object-cover ring-4 ring-white shadow" />
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {store.images.map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt={`${store.plant} ${i + 1}`}
              className="w-full h-56 object-cover rounded-2xl shadow-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
            />
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="bg-white rounded-2xl p-6 border border-green-100 shadow-sm">
            <h2 className="text-xl font-semibold text-brown-800">Care Guide</h2>
            <ul className="mt-3 list-disc list-inside text-brown-700/90 space-y-2">
              <li>Light: bright, indirect sunlight; avoid harsh midday rays.</li>
              <li>Water: once every 10–14 days; let top soil dry between waterings.</li>
              <li>Humidity: enjoys moderate to high humidity; occasional misting.</li>
              <li>Soil: well-draining potting mix with perlite or bark.</li>
              <li>Tip: rotate the pot monthly to encourage even growth.</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-yellow-100 shadow-sm">
            <h2 className="text-xl font-semibold text-brown-800">Pamphlet</h2>
            <img src={store.pamphlet} alt={`${store.plant} pamphlet`} className="mt-3 w-full h-64 object-cover rounded-xl" />
            <a
              href={store.pamphlet}
              download
              className="mt-3 inline-block text-sm text-green-700 hover:text-green-800"
            >
              Download as image
            </a>
          </div>
        </div>

        <div className="mt-8">
          <a
            href={`${WHATSAPP_BASE}${store.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-yellow-400 text-brown-900 font-semibold shadow hover:shadow-md hover:bg-yellow-300 transition transform hover:-translate-y-0.5"
          >
            Chat with {store.name} Admin
          </a>
        </div>
      </div>
    </div>
  );
}
