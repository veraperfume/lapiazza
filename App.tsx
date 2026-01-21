
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';
import { MENU_DATA, WHATSAPP_LINK } from './constants';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState('section-0');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
      
      // Intelligent active category tracking
      const sections = MENU_DATA.map((_, i) => `section-${i}`);
      const scrollPos = window.scrollY + 200;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          if (el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
            setActiveCategory(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 120; // Adjust for sticky nav height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveCategory(id);
    }
  };

  return (
    <div className="min-h-screen selection:bg-red-600 selection:text-white pb-10">
      {/* Floating Top Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 flex justify-between items-center ${scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl' : 'bg-transparent'}`}>
        <div className="flex items-center gap-2">
          <span className="font-brand font-black text-red-600 text-xl tracking-tighter uppercase">LA PIAZZA</span>
          <div className="hidden sm:block h-4 w-[1px] bg-white/20 mx-2"></div>
          <span className="hidden sm:block text-[10px] text-white/50 tracking-[0.2em] font-bold uppercase">Menu</span>
        </div>
        <a 
          href={WHATSAPP_LINK}
          className="bg-red-600 hover:bg-red-700 text-white text-[11px] font-black px-5 py-2.5 rounded-full uppercase tracking-widest shadow-lg shadow-red-900/30 transition-all hover:scale-105 active:scale-95"
        >
          Call Us
        </a>
      </nav>

      <Header />

      {/* Sticky Category Quick-Links */}
      <div className={`sticky top-[68px] z-40 transition-all duration-300 ${scrolled ? 'bg-black/95 shadow-xl' : 'bg-black/80'} border-b border-white/5 backdrop-blur-md`}>
        <div className="flex gap-3 px-6 py-4 max-w-7xl mx-auto overflow-x-auto no-scrollbar scroll-smooth items-center">
          <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest mr-2 flex-shrink-0">Categories:</span>
          {MENU_DATA.map((cat, i) => {
            const id = `section-${i}`;
            const isActive = activeCategory === id;
            return (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.1em] transition-all duration-300 flex-shrink-0 border ${
                  isActive 
                    ? 'bg-red-600 text-white border-red-600 shadow-lg shadow-red-900/40 scale-105' 
                    : 'text-neutral-500 hover:text-white border-white/5 bg-white/5 hover:bg-white/10'
                }`}
              >
                {cat.title}
              </button>
            );
          })}
        </div>
      </div>
      
      <main className="relative z-10 pt-12 space-y-12">
        <div className="max-w-7xl mx-auto">
          {MENU_DATA.map((category, idx) => (
            <MenuSection key={idx} id={`section-${idx}`} category={category} />
          ))}
        </div>
      </main>

      <Footer />

      {/* Persistent Mobile Bottom Bar */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-sm sm:hidden pointer-events-none">
        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto flex items-center justify-center gap-4 bg-green-600 text-white font-black py-5 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.5),0_0_20px_rgba(22,163,74,0.3)] uppercase tracking-widest text-xs transform transition-all active:scale-95 border border-green-500/50"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.522-2.961-2.638-.087-.117-.708-.941-.708-1.793 0-.852.449-1.27.608-1.439.159-.169.347-.211.463-.211h.333c.101 0 .231-.038.361.272.13.317.448 1.091.487 1.169.04.077.065.166.014.267-.051.101-.077.164-.153.253-.076.089-.159.198-.227.267-.076.077-.156.161-.067.315.089.154.394.65.845 1.051.582.518 1.072.679 1.226.754.154.076.244.064.334-.038.091-.102.391-.456.496-.61.106-.155.212-.13.359-.077.147.054.935.441 1.095.52.16.079.266.117.305.183.039.066.039.382-.105.787zM12 2C6.48 2 2 6.48 2 12c0 1.92.54 3.7 1.48 5.21L2 22l4.94-1.29C8.36 21.56 10.11 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.71 0-3.31-.47-4.68-1.29l-.34-.2-2.88.75.77-2.79-.22-.35C3.84 14.8 3.33 13.46 3.33 12c0-4.78 3.89-8.67 8.67-8.67s8.67 3.89 8.67 8.67-3.89 8.67-8.67 8.67z" />
          </svg>
          Order on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default App;
