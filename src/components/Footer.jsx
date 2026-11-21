import React from 'react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-20 md:mt-24 border-t border-[#c59b48]/15 bg-[#050b07] py-12 px-6 relative z-10 text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        
        <div className="w-6 h-6 rounded-full border border-[#c59b48]/30 flex items-center justify-center text-[#deb869] text-xs font-serif italic mb-4">
          N
        </div>

        <p className="font-display italic text-xl sm:text-2xl text-[#f7f4ed] mb-2 font-normal">
          Que la paz del invierno acompañe tu camino
        </p>

        <p className="text-[#8c948e] text-xs max-w-sm mx-auto mb-6 font-light leading-relaxed">
          Diseñado con sobriedad, tipografía cuidada y afecto navideño.
        </p>

        {/* Resaltado: David - Capsule Corp - Kazoku */}
        <div className="inline-flex items-center justify-center gap-2 sm:gap-3 px-5 py-2 rounded-full bg-gradient-to-r from-[#c59b48]/15 via-[#deb869]/25 to-[#c59b48]/15 border border-[#deb869]/50 shadow-[0_0_25px_rgba(222,184,105,0.2)] text-xs sm:text-sm font-sans tracking-wide">
          <span className="text-[#deb869] font-bold">David</span>
          <span className="text-[#deb869]/50 font-light">-</span>
          <span className="text-[#faedd0] font-semibold tracking-wider">Capsule Corp</span>
          <span className="text-[#deb869]/50 font-light">-</span>
          <span className="text-[#deb869] font-bold">Kazoku</span>
        </div>

        <button
          onClick={scrollToTop}
          className="mt-8 text-[11px] font-sans tracking-widest uppercase text-[#c59b48] hover:text-[#fbf5e6] transition-colors"
        >
          ↑ Volver arriba
        </button>
      </div>
    </footer>
  );
}
