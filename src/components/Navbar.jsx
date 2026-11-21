import React, { useState } from 'react';
import {
  setMuted,
  getMuted,
  toggleHolidayMelody,
  playBell
} from '../utils/audio';

export default function Navbar({
  snowIntensity,
  setSnowIntensity,
  activeTab,
  setActiveTab
}) {
  const [muted, setMutedState] = useState(getMuted());
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  const handleMuteToggle = () => {
    const nextMuted = !muted;
    setMuted(nextMuted);
    setMutedState(nextMuted);
    if (!nextMuted) {
      playBell(880, 0.6, 0.2);
    }
  };

  const handleMusicToggle = () => {
    toggleHolidayMelody((status) => {
      setIsPlayingMusic(status);
      if (status && muted) {
        setMuted(false);
        setMutedState(false);
      }
    });
  };

  const cycleSnow = () => {
    const options = ['suave', 'copiosa', 'ventisca', 'off'];
    const currentIdx = options.indexOf(snowIntensity);
    const next = options[(currentIdx + 1) % options.length];
    setSnowIntensity(next);
    playBell(1046.5, 0.4, 0.15);
  };

  const snowLabels = {
    suave: 'Nieve suave',
    copiosa: 'Nieve copiosa',
    ventisca: 'Ventisca',
    off: 'Sin nieve',
  };

  const handleNavClick = (tabId, anchorId) => {
    if (setActiveTab) {
      setActiveTab(tabId);
    }
    const el = document.getElementById(anchorId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[#080f0b]/90 border-b border-[#c59b48]/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-3.5 flex items-center justify-between gap-3 sm:gap-4">
        {/* Editorial Brand */}
        <a href="#" className="flex items-center gap-2.5 sm:gap-3 group">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#c59b48]/40 bg-[#0e2117] flex items-center justify-center text-[#deb869] shadow-inner group-hover:border-[#deb869] transition-colors">
            <span className="font-display italic text-base sm:text-lg leading-none">N</span>
          </div>
          <div>
            <span className="font-display text-base sm:text-lg tracking-wide text-[#f7f4ed] block leading-tight">
              Nochebuena
            </span>
            <span className="text-[9px] sm:text-[10px] font-sans tracking-[0.2em] uppercase text-[#8c948e] block">
              Solsticio de Invierno
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-sans tracking-wide text-[#a4ada7]">
          <button
            onClick={() => handleNavClick('espera', 'cuenta-regresiva')}
            className={`hover:text-[#deb869] transition-colors ${
              activeTab === 'espera' ? 'text-[#deb869] font-medium' : ''
            }`}
          >
            La Espera
          </button>
          <button
            onClick={() => handleNavClick('arbol', 'arbol-navideno')}
            className={`hover:text-[#deb869] transition-colors ${
              activeTab === 'arbol' ? 'text-[#deb869] font-medium' : ''
            }`}
          >
            El Árbol
          </button>
          <button
            onClick={() => handleNavClick('carta', 'carta-navidena')}
            className={`hover:text-[#deb869] transition-colors ${
              activeTab === 'carta' ? 'text-[#deb869] font-medium' : ''
            }`}
          >
            Correspondencia
          </button>
          <button
            onClick={() => handleNavClick('augurios', 'regalo-sorpresa')}
            className={`hover:text-[#deb869] transition-colors ${
              activeTab === 'augurios' ? 'text-[#deb869] font-medium' : ''
            }`}
          >
            Buenos Augurios
          </button>
        </nav>

        {/* Ambient Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          {/* Snowfall button */}
          <button
            onClick={cycleSnow}
            className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-black/30 hover:bg-black/50 border border-white/10 text-[#d0d7d2] text-[11px] sm:text-xs font-sans flex items-center gap-1.5 sm:gap-2 transition-all"
            title="Cambiar intensidad de la nevada"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#deb869]" />
            <span>{snowLabels[snowIntensity]}</span>
          </button>

          {/* Music Box */}
          <button
            onClick={handleMusicToggle}
            title={isPlayingMusic ? 'Pausar caja de música' : 'Escuchar caja de música'}
            className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border text-[11px] sm:text-xs font-sans flex items-center gap-1.5 transition-all ${
              isPlayingMusic
                ? 'bg-[#c59b48]/20 border-[#deb869] text-[#fbf5e6] shadow-[0_0_15px_rgba(197,155,72,0.3)]'
                : 'bg-black/30 hover:bg-black/50 border-white/10 text-[#a4ada7]'
            }`}
          >
            <span>{isPlayingMusic ? '♫ Melodía' : 'Música'}</span>
          </button>

          {/* Sound FX Mute */}
          <button
            onClick={handleMuteToggle}
            title={muted ? 'Activar sonido' : 'Silenciar sonido'}
            className="p-1 sm:p-1.5 rounded-full bg-black/30 hover:bg-black/50 border border-white/10 text-[#a4ada7] transition-colors"
          >
            <span className="text-[11px] sm:text-xs px-0.5 sm:px-1 font-mono">
              {muted ? '🔇' : '🔔'}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
