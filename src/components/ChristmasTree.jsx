import React, { useState } from 'react';
import { playBell, playChime } from '../utils/audio';

// Custom SVG Ornaments (No generic emojis)
function RubyBaubleIcon({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} viewBox="0 0 32 40" fill="none">
      <rect x="13.5" y="4" width="5" height="5" rx="1" fill="#c59b48" stroke="#876527" strokeWidth="0.8" />
      <path d="M16 1.5 C 13.5 1.5, 13.5 4, 16 4 C 18.5 4, 18.5 1.5, 16 1.5" stroke="#c59b48" strokeWidth="1" fill="none" />
      <circle cx="16" cy="22" r="13" fill="url(#rubyGrad)" />
      <path d="M11 14 Q 13 18 11 26" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" strokeLinecap="round" />
      <defs>
        <radialGradient id="rubyGrad" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#ff5a64" />
          <stop offset="45%" stopColor="#a31922" />
          <stop offset="100%" stopColor="#4a070c" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function GoldBaubleIcon({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} viewBox="0 0 32 40" fill="none">
      <rect x="13.5" y="4" width="5" height="5" rx="1" fill="#876527" stroke="#574116" strokeWidth="0.8" />
      <path d="M16 1.5 C 13.5 1.5, 13.5 4, 16 4 C 18.5 4, 18.5 1.5, 16 1.5" stroke="#b88d3d" strokeWidth="1" fill="none" />
      <circle cx="16" cy="22" r="13" fill="url(#goldGrad)" />
      <path d="M11 14 Q 13 18 11 26" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" strokeLinecap="round" />
      <defs>
        <radialGradient id="goldGrad" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#fff3cf" />
          <stop offset="50%" stopColor="#d4a34b" />
          <stop offset="100%" stopColor="#634512" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function EmeraldBaubleIcon({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} viewBox="0 0 32 40" fill="none">
      <rect x="13.5" y="4" width="5" height="5" rx="1" fill="#c59b48" stroke="#876527" strokeWidth="0.8" />
      <path d="M16 1.5 C 13.5 1.5, 13.5 4, 16 4 C 18.5 4, 18.5 1.5, 16 1.5" stroke="#c59b48" strokeWidth="1" fill="none" />
      <circle cx="16" cy="22" r="13" fill="url(#emeraldGrad)" />
      <path d="M11 14 Q 13 18 11 26" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" strokeLinecap="round" />
      <defs>
        <radialGradient id="emeraldGrad" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#76dca3" />
          <stop offset="45%" stopColor="#1f7a4d" />
          <stop offset="100%" stopColor="#0a311d" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function BrassBellIcon({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} viewBox="0 0 32 40" fill="none">
      <path d="M16 2 C 14 2, 14 5, 16 5 C 18 5, 18 2, 16 2" stroke="#c59b48" strokeWidth="1" fill="none" />
      <path d="M16 5 C 10 9, 8 20, 6 27 L 26 27 C 24 20, 22 9, 16 5 Z" fill="url(#bellGrad)" />
      <circle cx="16" cy="30" r="3" fill="#876527" />
      <defs>
        <linearGradient id="bellGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#b88d3d" />
          <stop offset="40%" stopColor="#f7e1a3" />
          <stop offset="70%" stopColor="#c59b48" />
          <stop offset="100%" stopColor="#694a15" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function GingerbreadIcon({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} viewBox="0 0 32 40" fill="none">
      <path d="M16 2 L 16 5" stroke="#deb869" strokeWidth="1" />
      <path d="M 16,6 C 13,6 11,8 11,11 C 11,12.5 12,13.5 10,15 C 8,16 6,17 6,19 C 6,21 8,21 10,20 C 11,20 11,21 11,24 L 9,30 C 8,32 11,33 12,31 L 14,26 L 18,26 L 20,31 C 21,33 24,32 23,30 L 21,24 C 21,21 21,20 22,20 C 24,21 26,21 26,19 C 26,17 24,16 22,15 C 20,13.5 21,12.5 21,11 C 21,8 19,6 16,6 Z" fill="#935b2e" stroke="#5c3617" strokeWidth="1" />
      <circle cx="16" cy="10" r="1" fill="#fff" />
      <circle cx="16" cy="18" r="1" fill="#c42732" />
      <circle cx="16" cy="22" r="1" fill="#fff" />
    </svg>
  );
}

const ORNAMENT_CATALOG = [
  { id: 'ruby', label: 'Esfera Rubí', Component: RubyBaubleIcon },
  { id: 'gold', label: 'Esfera Oro', Component: GoldBaubleIcon },
  { id: 'emerald', label: 'Esfera Esmeralda', Component: EmeraldBaubleIcon },
  { id: 'bell', label: 'Campana de Bronce', Component: BrassBellIcon },
  { id: 'cookie', label: 'Jengibre Glaseado', Component: GingerbreadIcon },
];

const TREE_BRANCH_SLOTS = [
  { id: 1, x: 50, y: 22 },
  { id: 2, x: 43, y: 29 },
  { id: 3, x: 57, y: 29 },
  { id: 4, x: 36, y: 39 },
  { id: 5, x: 50, y: 38 },
  { id: 6, x: 64, y: 40 },
  { id: 7, x: 29, y: 53 },
  { id: 8, x: 42, y: 52 },
  { id: 9, x: 58, y: 53 },
  { id: 10, x: 71, y: 54 },
  { id: 11, x: 22, y: 70 },
  { id: 12, x: 36, y: 69 },
  { id: 13, x: 50, y: 68 },
  { id: 14, x: 64, y: 70 },
  { id: 15, x: 78, y: 71 },
  { id: 16, x: 30, y: 81 },
  { id: 17, x: 45, y: 80 },
  { id: 18, x: 55, y: 80 },
  { id: 19, x: 70, y: 81 },
];

export default function ChristmasTree() {
  const [selectedItem, setSelectedItem] = useState(ORNAMENT_CATALOG[0]);
  const [decorations, setDecorations] = useState({
    1: 'gold',
    3: 'ruby',
    5: 'bell',
    7: 'emerald',
    9: 'gold',
    12: 'ruby',
    14: 'cookie',
    17: 'emerald',
  });
  const [starGleam, setStarGleam] = useState(true);

  const handleSlotToggle = (slotId) => {
    playChime(slotId);
    setDecorations((prev) => {
      if (prev[slotId] === selectedItem.id) {
        const copy = { ...prev };
        delete copy[slotId];
        return copy;
      }
      return { ...prev, [slotId]: selectedItem.id };
    });
  };

  const handleHarmonize = () => {
    playBell(880, 1.2, 0.25);
    const randomized = {};
    TREE_BRANCH_SLOTS.forEach((slot) => {
      if (Math.random() > 0.3) {
        const choice = ORNAMENT_CATALOG[Math.floor(Math.random() * ORNAMENT_CATALOG.length)];
        randomized[slot.id] = choice.id;
      }
    });
    setDecorations(randomized);
  };

  const handleReset = () => {
    playBell(440, 0.6, 0.2);
    setDecorations({});
  };

  const toggleStar = () => {
    playBell(1318.5, 1.4, 0.3);
    setStarGleam(!starGleam);
  };

  return (
    <section id="arbol-navideno" className="py-8 md:py-16 px-4 relative z-10 max-w-5xl mx-auto">
      <div className="text-center mb-6 md:mb-10">
        <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#c59b48] font-medium block mb-1 md:mb-2">
          El rincón del pino
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-normal text-[#f7f4ed]">
          Viste el Árbol de <span className="italic text-[#deb869]">Invierno</span>
        </h2>
        <p className="text-[#98a39c] text-xs sm:text-sm md:text-base max-w-md mx-auto font-light mt-2 md:mt-3 leading-relaxed">
          Toma una pieza del estuche y cuélgala en las ramas. La estrella polar corona la cúspide.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center">
        {/* Left Tree Presentation (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center relative">
          <div className="relative w-full max-w-xs sm:max-w-md aspect-[3/4] artisan-tree-wrap p-2 flex items-center justify-center">
            
            {/* Top Star of Bethlehem */}
            <div
              onClick={toggleStar}
              title="Toca para encender la Estrella de Belén"
              className={`absolute top-1 z-30 polaris-star ${starGleam ? 'lit' : 'opacity-40'}`}
            >
              <svg width="54" height="54" viewBox="0 0 100 100">
                <defs>
                  <linearGradient id="starMetal" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#fff8e1" />
                    <stop offset="40%" stopColor="#deb869" />
                    <stop offset="100%" stopColor="#7a5518" />
                  </linearGradient>
                </defs>
                {/* 8-pointed star */}
                <polygon
                  points="50,2 57,35 90,50 57,65 50,98 43,65 10,50 43,35"
                  fill="url(#starMetal)"
                  stroke="#593c0c"
                  strokeWidth="1"
                />
                <circle cx="50" cy="50" r="5" fill="#fffcee" />
              </svg>
            </div>

            {/* Tree SVG Illustration */}
            <svg
              className="w-full h-full select-none filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.65)]"
              viewBox="0 0 400 520"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Trunk */}
              <rect x="182" y="445" width="36" height="50" rx="3" fill="#2d1c10" />
              <rect x="187" y="445" width="8" height="50" fill="#1e120a" />

              {/* Foliage Tier 1 (Top) */}
              <path
                d="M 200,60 L 255,160 L 225,165 L 275,245 L 240,250 L 305,345 L 265,350 L 345,450 L 55,450 L 135,350 L 95,345 L 160,250 L 125,245 L 175,165 L 145,160 Z"
                fill="#132a1e"
              />

              {/* Foliage Inner Depth Shading */}
              <path
                d="M 200,60 L 200,450 L 55,450 L 135,350 L 95,345 L 160,250 L 125,245 L 175,165 L 145,160 Z"
                fill="#0a1a12"
                opacity="0.4"
              />

              {/* Delicate Snow Frosting on Needles */}
              <path
                d="M 138,162 Q 170,174 200,163 Q 230,174 262,162 Q 240,154 225,158 Z"
                fill="rgba(240, 245, 248, 0.45)"
              />
              <path
                d="M 118,247 Q 160,260 200,248 Q 240,260 282,247 Q 260,238 240,242 Z"
                fill="rgba(240, 245, 248, 0.4)"
              />
              <path
                d="M 88,347 Q 145,362 200,348 Q 255,362 312,347 Q 285,338 265,342 Z"
                fill="rgba(240, 245, 248, 0.35)"
              />
              <path
                d="M 48,450 Q 125,466 200,450 Q 275,466 352,450 Q 310,440 265,444 Z"
                fill="rgba(240, 245, 248, 0.45)"
              />
            </svg>

            {/* Tree Branch Slots & Hanging Ornaments */}
            {TREE_BRANCH_SLOTS.map((slot) => {
              const placed = decorations[slot.id];
              const itemData = ORNAMENT_CATALOG.find((o) => o.id === placed);
              const Comp = itemData?.Component;

              return (
                <div
                  key={slot.id}
                  onClick={() => handleSlotToggle(slot.id)}
                  style={{
                    left: `${slot.x}%`,
                    top: `${slot.y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  className={`absolute z-20 ${
                    placed ? 'hanging-ornament swaying' : 'branch-hook-point'
                  }`}
                  title={placed ? `${itemData.label} (Quitar)` : `Colgar ${selectedItem.label}`}
                >
                  {placed && Comp && (
                    <Comp className="w-7 h-7 sm:w-8 sm:h-8 pointer-events-none drop-shadow-md" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Ornament Tray & Controls (5 cols) */}
        <div className="lg:col-span-5 quiet-card p-5 sm:p-8 rounded-2xl border border-[#c59b48]/20 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-[#c59b48]/15 mb-4 sm:mb-5">
              <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#c59b48]">
                Estuche de Adornos
              </span>
              <span className="text-xs font-mono text-[#a4ada7]">
                {Object.keys(decorations).length} colgados
              </span>
            </div>

            <p className="text-xs text-[#9aa39d] mb-4 font-light leading-relaxed">
              Selecciona una pieza y toca cualquiera de los puntos guía sobre las ramas del pino:
            </p>

            {/* Catalog Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-2.5 mb-5 sm:mb-6">
              {ORNAMENT_CATALOG.map((item) => {
                const isSelected = selectedItem.id === item.id;
                const Comp = item.Component;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      playChime(1);
                      setSelectedItem(item);
                    }}
                    className={`flex items-center gap-2 sm:gap-3 p-2 sm:p-2.5 rounded-xl border text-left transition-all ${
                      isSelected
                        ? 'bg-[#c59b48]/15 border-[#deb869]/60 shadow-[0_4px_16px_rgba(197,155,72,0.2)]'
                        : 'bg-black/20 border-white/5 hover:border-[#c59b48]/30 hover:bg-black/30'
                    }`}
                  >
                    <Comp className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" />
                    <span className="text-[11px] sm:text-xs font-medium text-[#f0ede6] leading-tight line-clamp-1">
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-3 sm:pt-4 border-t border-[#c59b48]/15 flex items-center gap-3">
            <button
              onClick={handleHarmonize}
              className="flex-1 button-antique py-2.5 px-3 sm:px-4 text-[11px] sm:text-xs tracking-wider uppercase font-medium flex items-center justify-center gap-2"
            >
              <span>Arreglo Espontáneo</span>
            </button>
            <button
              onClick={handleReset}
              className="px-3 py-2.5 rounded-lg border border-white/10 text-xs text-[#8c948e] hover:text-[#f0ede6] hover:border-white/20 transition-colors"
            >
              Despejar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
