import React, { useState } from 'react';
import { playChime } from '../utils/audio';

const BULB_PALETTES = ['bulb-warm-white', 'bulb-amber', 'bulb-cranberry', 'bulb-emerald'];

export default function GarlandLights() {
  const [bulbs, setBulbs] = useState(() => {
    return Array.from({ length: 22 }, (_, i) => ({
      id: i,
      palette: BULB_PALETTES[i % BULB_PALETTES.length],
      isOn: true,
    }));
  });

  const [mode, setMode] = useState('flicker'); // 'flicker' | 'steady' | 'off'

  const toggleBulb = (index) => {
    playChime(index);
    setBulbs((prev) =>
      prev.map((b, i) => (i === index ? { ...b, isOn: !b.isOn } : b))
    );
  };

  const handleModeChange = (newMode) => {
    setMode(newMode);
    if (newMode === 'off') {
      setBulbs((prev) => prev.map((b) => ({ ...b, isOn: false })));
    } else {
      setBulbs((prev) => prev.map((b) => ({ ...b, isOn: true })));
    }
  };

  return (
    <div className="vintage-garland select-none">
      {/* Handcrafted Braided Cord SVG */}
      <svg className="garland-cord" preserveAspectRatio="none" viewBox="0 0 1200 40">
        <path d="M 0,6 Q 60,34 120,6 Q 180,34 240,6 Q 300,34 360,6 Q 420,34 480,6 Q 540,34 600,6 Q 660,34 720,6 Q 780,34 840,6 Q 900,34 960,6 Q 1020,34 1080,6 Q 1140,34 1200,6" />
      </svg>

      {/* Edison Bulb Nodes */}
      <div className="lights-track">
        {bulbs.map((bulb, index) => {
          const isFlickering = mode === 'flicker' && bulb.isOn;
          return (
            <div
              key={bulb.id}
              onClick={() => toggleBulb(index)}
              title="Toca para encender o apagar"
              className={`vintage-bulb-node ${bulb.palette} ${isFlickering ? 'flicker' : ''}`}
            >
              <div className="socket" />
              <div className={`glass-envelope ${!bulb.isOn ? 'off' : ''}`}>
                <div className="filament" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Discrete, elegant mode controls */}
      <div className="flex justify-center items-center gap-4 mt-2 text-[11px] font-sans tracking-wide text-[#a1a8a3]">
        <span className="opacity-60 hidden sm:inline">Iluminación vintage:</span>
        <div className="inline-flex rounded-full bg-black/40 p-0.5 border border-[#c59b48]/20 backdrop-blur-sm">
          <button
            onClick={() => handleModeChange('flicker')}
            className={`px-3 py-1 rounded-full transition-all ${
              mode === 'flicker'
                ? 'bg-[#c59b48]/20 text-[#f5ecd5] font-medium border border-[#c59b48]/40'
                : 'text-[#8c948e] hover:text-[#d0d7d2]'
            }`}
          >
            Vela natural
          </button>
          <button
            onClick={() => handleModeChange('steady')}
            className={`px-3 py-1 rounded-full transition-all ${
              mode === 'steady'
                ? 'bg-[#c59b48]/20 text-[#f5ecd5] font-medium border border-[#c59b48]/40'
                : 'text-[#8c948e] hover:text-[#d0d7d2]'
            }`}
          >
            Luz fija
          </button>
          <button
            onClick={() => handleModeChange('off')}
            className={`px-3 py-1 rounded-full transition-all ${
              mode === 'off'
                ? 'bg-white/10 text-white font-medium'
                : 'text-[#8c948e] hover:text-[#d0d7d2]'
            }`}
          >
            Apagar
          </button>
        </div>
      </div>
    </div>
  );
}
