import { Link, NavLink } from 'react-router-dom';
import { Leaf, Home, Info, Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-green-100">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-green-100 text-green-700">
            <Leaf size={18} />
          </span>
          <span className="font-semibold text-brown-700 text-lg">Sproutly</span>
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `inline-flex items-center gap-1 text-brown-700/80 hover:text-brown-700 transition ${
                isActive ? 'font-semibold text-brown-700' : ''
              }`
            }
          >
            <Home size={16} /> Home
          </NavLink>
          <a href="#about" className="inline-flex items-center gap-1 text-brown-700/80 hover:text-brown-700 transition">
            <Info size={16} /> About
          </a>
          <a href="#contact" className="inline-flex items-center gap-1 text-brown-700/80 hover:text-brown-700 transition">
            <Phone size={16} /> Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
