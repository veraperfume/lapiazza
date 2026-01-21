
import React from 'react';
import { RESTAURANT_PHONE, WHATSAPP_LINK } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t border-white/5 bg-black pb-32 pt-16 px-6 text-center">
      <div className="max-w-2xl mx-auto flex flex-col items-center">
        <h3 className="text-2xl font-brand text-red-600 mb-2 uppercase">LA PIAZZA</h3>
        <p className="text-neutral-500 text-sm mb-8 leading-relaxed max-w-sm">
          Crafting authentic Italian-style pizzas with passion and the finest ingredients.
        </p>
        
        <div className="flex flex-col gap-4 w-full sm:w-auto">
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-xl shadow-green-900/20 active:scale-95"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.522-2.961-2.638-.087-.117-.708-.941-.708-1.793 0-.852.449-1.27.608-1.439.159-.169.347-.211.463-.211h.333c.101 0 .231-.038.361.272.13.317.448 1.091.487 1.169.04.077.065.166.014.267-.051.101-.077.164-.153.253-.076.089-.159.198-.227.267-.076.077-.156.161-.067.315.089.154.394.65.845 1.051.582.518 1.072.679 1.226.754.154.076.244.064.334-.038.091-.102.391-.456.496-.61.106-.155.212-.13.359-.077.147.054.935.441 1.095.52.16.079.266.117.305.183.039.066.039.382-.105.787zM12 2C6.48 2 2 6.48 2 12c0 1.92.54 3.7 1.48 5.21L2 22l4.94-1.29C8.36 21.56 10.11 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.71 0-3.31-.47-4.68-1.29l-.34-.2-2.88.75.77-2.79-.22-.35C3.84 14.8 3.33 13.46 3.33 12c0-4.78 3.89-8.67 8.67-8.67s8.67 3.89 8.67 8.67-3.89 8.67-8.67 8.67z" />
            </svg>
            Order via WhatsApp
          </a>
          
          <div className="text-neutral-600 text-[10px] tracking-widest uppercase flex flex-col gap-1">
            <span>La Piazza Della Pizza</span>
            <span>All rights reserved &copy; 2024</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
