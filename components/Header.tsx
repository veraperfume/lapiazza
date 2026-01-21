
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="relative pt-16 pb-12 overflow-hidden bg-black flex flex-col items-center text-center">
      {/* Dynamic Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[300px] bg-red-600/15 blur-[100px] rounded-full"></div>
      
      <div className="relative z-10 flex flex-col items-center px-4 w-full max-w-[600px]">
        {/* Fixed Responsive Logo - Perfectly Matching Reference */}
        <div className="w-64 h-64 md:w-80 md:h-80 relative flex items-center justify-center">
          <svg 
            viewBox="0 0 400 400" 
            className="w-full h-full drop-shadow-[0_0_30px_rgba(220,38,38,0.4)]" 
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {/* Paths for curved text - radius adjusted to match reference curvature */}
              <path id="topTextCurve" d="M 60,180 A 140,140 0 0,1 340,180" />
              <path id="bottomTextCurve" d="M 60,240 A 140,140 0 0,0 340,240" />
            </defs>
            
            {/* LA PIAZZA - Arched Top */}
            <text className="fill-[#e11d48] font-brand font-black text-[52px] uppercase tracking-wide">
              <textPath href="#topTextCurve" startOffset="50%" textAnchor="middle">
                LA PIAZZA
              </textPath>
            </text>

            {/* Central Oven Icon */}
            <g transform="translate(130, 160)">
              {/* Top External Flame */}
              <path 
                d="M 70,-10 Q 80,-25 70,-45 Q 60,-25 70,-10" 
                fill="#e11d48" 
              />
              
              {/* Brick Arch - Multi-segmented for brick look */}
              <path 
                d="M 10,75 A 60,60 0 0,1 130,75" 
                fill="none" 
                stroke="#e11d48" 
                strokeWidth="16" 
                strokeDasharray="16 4"
              />

              {/* Internal Flame */}
              <path 
                d="M 70,35 Q 85,15 70,-5 Q 55,15 70,35" 
                fill="#e11d48" 
              />

              {/* Pizza on Peel/Stone */}
              <g transform="translate(25, 65)">
                <ellipse cx="45" cy="15" rx="42" ry="14" fill="#e11d48" />
                {/* Toppings Details */}
                <circle cx="25" cy="12" r="3" fill="black" opacity="0.3" />
                <circle cx="45" cy="18" r="3" fill="black" opacity="0.3" />
                <circle cx="65" cy="13" r="3" fill="black" opacity="0.3" />
              </g>

              {/* Green Leaf Accent - Bottom Right of Arch */}
              <g transform="translate(125, 60) rotate(10)">
                <path 
                  d="M 0,0 Q 15,-15 30,5 Q 15,25 0,0" 
                  fill="#16a34a" 
                />
                <path d="M 2,2 L 25,8" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
              </g>
            </g>

            {/* DELLA PIZZA - Arched Bottom */}
            <text className="fill-[#e11d48] font-brand font-black text-[46px] uppercase tracking-tighter">
              <textPath href="#bottomTextCurve" startOffset="50%" textAnchor="middle">
                DELLA PIZZA
              </textPath>
            </text>
          </svg>
        </div>

        {/* Subtitle & Italian Flag Accent */}
        <div className="flex flex-col gap-3 mt-4">
          <p className="text-white/70 font-script text-2xl md:text-3xl italic">Authentic Wood-Fired Pizza</p>
          <div className="flex items-center justify-center gap-1.5 h-1">
            <div className="h-full w-10 bg-green-600 rounded-full"></div>
            <div className="h-full w-10 bg-white rounded-full"></div>
            <div className="h-full w-10 bg-red-600 rounded-full"></div>
          </div>
        </div>
      </div>
      
      {/* Decorative Background Text */}
      <div className="absolute top-20 left-[-150px] rotate-[-25deg] opacity-[0.02] pointer-events-none select-none hidden lg:block">
        <span className="text-[300px] font-brand font-black text-white italic">ITALY</span>
      </div>
    </header>
  );
};

export default Header;
