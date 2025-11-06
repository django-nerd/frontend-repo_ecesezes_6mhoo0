export default function Footer() {
  return (
    <footer className="mt-16 border-t border-green-100 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-6 sm:grid-cols-2">
        <div>
          <p className="text-brown-800 font-semibold">Sproutly</p>
          <p className="text-sm text-brown-700/80 mt-2">
            Cute, friendly houseplants and simple care. Designed with warm yellows, soft browns, and fresh greens.
          </p>
        </div>
        <div className="flex sm:justify-end items-start gap-6 text-sm text-brown-700/80">
          <a href="#about" className="hover:text-brown-800">About</a>
          <a href="#contact" className="hover:text-brown-800">Contact</a>
          <a href="#newsletter" className="hover:text-brown-800">Newsletter</a>
        </div>
      </div>
      <div className="border-t border-green-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-brown-700/70">
          © {new Date().getFullYear()} Sproutly. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
