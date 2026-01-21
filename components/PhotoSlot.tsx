
import React, { useState } from 'react';

interface Props {
  src?: string;
  alt?: string;
}

const PhotoSlot: React.FC<Props> = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="w-full aspect-[4/3] bg-neutral-900 border border-neutral-800 rounded-xl flex items-center justify-center group overflow-hidden relative shadow-inner">
      {src ? (
        <>
          {/* Loading Shimmer */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-neutral-800 animate-pulse"></div>
          )}
          <img 
            src={src} 
            alt={alt || "Menu Item"}
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
          {/* Gradient overlay for better text contrast if needed */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </>
      ) : (
        /* Placeholder View */
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/10 to-transparent"></div>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="32" 
            height="32" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-neutral-700 transition-all duration-300 group-hover:scale-110 group-hover:text-neutral-600"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
            <circle cx="9" cy="9" r="2"/>
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
          </svg>
          <span className="absolute bottom-3 left-0 right-0 text-center text-[10px] uppercase tracking-widest text-neutral-700 font-bold opacity-60">
            Image Coming Soon
          </span>
        </>
      )}
    </div>
  );
};

export default PhotoSlot;
