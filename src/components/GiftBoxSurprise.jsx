import React, { useState } from 'react';
import { playUnwrap, playBell } from '../utils/audio';

const WINTER_AUGURIES = [
  {
    title: 'El Fuego del Hogar',
    quote: '«Que nunca falte en tu vida una conversación sincera al abrigo de una tarde fría, ni la certeza de saberte querido.»',
    token: 'Calor & Paz',
  },
  {
    title: 'El Brindis por lo Venidero',
    quote: '«Por los proyectos que nacen en silencio durante el invierno y que florecerán con fuerza en la primavera.»',
    token: 'Renovación',
  },
  {
    title: 'La Memoria Compartida',
    quote: '«El mejor adorno navideño no cuelga de ninguna rama: es la risa compartida con quienes hicieron nuestro año inolvidable.»',
    token: 'Gratitud',
  },
  {
    title: 'La Quietud de la Nieve',
    quote: '«Permítete una pausa. Que la serenidad de estas noches traiga calma a tus pensamientos y descanso a tu espíritu.»',
    token: 'Serenidad',
  },
];

export default function GiftBoxSurprise() {
  const [isUnwrapped, setIsUnwrapped] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = () => {
    if (!isUnwrapped) {
      playUnwrap();
      setIsUnwrapped(true);
    } else {
      playBell(880, 0.8, 0.2);
      setCurrentIndex((prev) => (prev + 1) % WINTER_AUGURIES.length);
    }
  };

  const handleReset = (e) => {
    e.stopPropagation();
    playBell(523.25, 0.5, 0.18);
    setIsUnwrapped(false);
  };

  const current = WINTER_AUGURIES[currentIndex];

  return (
    <section id="regalo-sorpresa" className="py-8 md:py-16 px-4 relative z-10 max-w-4xl mx-auto text-center">
      <div className="quiet-card p-6 sm:p-12 rounded-2xl border border-[#c59b48]/20 shadow-2xl relative overflow-hidden">
        
        <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#c59b48] font-medium block mb-1 md:mb-2">
          Un detalle para el alma
        </span>
        <h2 className="text-3xl sm:text-4xl font-display font-normal text-[#f7f4ed] mb-2 md:mb-3">
          El Estuche de <span className="italic text-[#deb869]">Buenos Augurios</span>
        </h2>
        <p className="text-[#98a39c] text-xs sm:text-sm max-w-md mx-auto font-light mb-6 md:mb-10 leading-relaxed">
          Desata el lazo de satén para descubrir una reflexión invernal reservada para ti en esta velada.
        </p>

        {/* Gift Box Container */}
        <div className="flex flex-col items-center justify-center my-2">
          {!isUnwrapped ? (
            <div
              onClick={handleOpen}
              className="cursor-pointer group flex flex-col items-center justify-center transition-transform duration-300 hover:scale-102"
            >
              {/* Box Presentation: Deep Velvet Crimson with Brushed Gold Ribbon */}
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 bg-gradient-to-br from-[#590e13] via-[#3d090d] to-[#260507] rounded-xl shadow-[0_20px_45px_rgba(0,0,0,0.7)] border border-[#c59b48]/30 flex items-center justify-center relative overflow-hidden group-hover:border-[#deb869]/60 transition-colors">
                
                {/* Gold Vertical Ribbon */}
                <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-6 bg-gradient-to-r from-[#9d7429] via-[#f7e0a3] to-[#876527] shadow-sm" />
                {/* Gold Horizontal Ribbon */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-6 bg-gradient-to-b from-[#9d7429] via-[#f7e0a3] to-[#876527] shadow-sm" />

                {/* Handcrafted Ribbon Bow Accent */}
                <div className="relative z-10 px-3.5 py-1.5 bg-[#0c1c14]/90 rounded-md border border-[#c59b48]/40 text-[#faedd0] text-[11px] sm:text-xs font-sans tracking-widest uppercase backdrop-blur-md group-hover:border-[#deb869] transition-colors">
                  Desatar lazo
                </div>
              </div>

              <span className="mt-3 sm:mt-4 text-xs text-[#8c948e] font-light tracking-wide">
                Toca la caja para abrir
              </span>
            </div>
          ) : (
            <div className="w-full max-w-md mx-auto p-5 sm:p-8 rounded-xl bg-[#0a1711]/90 border border-[#c59b48]/30 shadow-2xl animate-in fade-in zoom-in-95 duration-400">
              <span className="inline-block text-[10px] tracking-[0.25em] uppercase text-[#c59b48] border-b border-[#c59b48]/30 pb-1 mb-3 sm:mb-4 font-mono">
                {current.token}
              </span>

              <h3 className="text-xl sm:text-2xl font-display text-[#f7f4ed] mb-2 sm:mb-3 italic">
                {current.title}
              </h3>

              <p className="font-serif italic text-[#c8d1ca] text-sm sm:text-base leading-relaxed mb-5 sm:mb-6 font-normal">
                {current.quote}
              </p>

              <div className="flex items-center justify-center gap-3 pt-3 sm:pt-4 border-t border-[#c59b48]/15">
                <button
                  onClick={handleOpen}
                  className="px-4 py-2 button-antique text-xs uppercase tracking-wider font-medium"
                >
                  Siguiente augurio
                </button>
                <button
                  onClick={handleReset}
                  className="px-3.5 py-2 rounded-lg border border-white/10 text-xs text-[#8c948e] hover:text-[#f0ede6] hover:border-white/20 transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
