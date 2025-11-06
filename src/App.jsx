import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StoreCard from './components/StoreCard';
import StorePages from './components/StorePages';

const STORES = [
  {
    slug: 'greenleaf',
    name: 'GreenLeaf',
    logo: 'https://images.unsplash.com/photo-1528097057830-972ff3f4d8a5?q=80&w=200&auto=format&fit=crop',
    tagline: 'Rare Monstera for your home'
  },
  {
    slug: 'sunnysprouts',
    name: 'SunnySprouts',
    logo: 'https://images.unsplash.com/photo-1498843053639-170ff2122f35?q=80&w=200&auto=format&fit=crop',
    tagline: 'Easy indoor succulents'
  },
  {
    slug: 'leafyluxe',
    name: 'LeafyLuxe',
    logo: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=200&auto=format&fit=crop',
    tagline: 'The Monstera that makes your room pop'
  },
  {
    slug: 'terraflora',
    name: 'TerraFlora',
    logo: 'https://images.unsplash.com/photo-1520975922193-1f8adf9be0e6?q=80&w=200&auto=format&fit=crop',
    tagline: 'Statement greens for bright corners'
  },
  {
    slug: 'mossmood',
    name: 'MossMood',
    logo: 'https://images.unsplash.com/photo-1525120334885-38cc03a6ec3b?q=80&w=200&auto=format&fit=crop',
    tagline: 'Tiny forests for your desk'
  },
  {
    slug: 'pepperpots',
    name: 'PepperPots',
    logo: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=200&auto=format&fit=crop',
    tagline: 'Charming foliage, low fuss'
  }
];

function Home() {
  const navigate = useNavigate();
  const cards = useMemo(() => STORES, []);

  return (
    <main>
      <Hero />
      <section className="relative -mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((store) => (
              <div key={store.slug} onClick={() => navigate(`/store/${store.slug}`)}>
                <StoreCard store={store} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store/:slug" element={<DynamicStore />} />
    </Routes>
  );
}

function DynamicStore() {
  const slug = window.location.pathname.split('/').pop();
  return <StorePages slug={slug} />;
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-b from-green-50 via-yellow-50 to-white text-brown-800">
        <Navbar />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}
