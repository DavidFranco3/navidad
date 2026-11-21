import React, { useState } from 'react';
import Navbar from './components/Navbar';
import GarlandLights from './components/GarlandLights';
import SnowCanvas from './components/SnowCanvas';
import CountdownTimer from './components/CountdownTimer';
import ChristmasTree from './components/ChristmasTree';
import GreetingCard from './components/GreetingCard';
import GiftBoxSurprise from './components/GiftBoxSurprise';
import Footer from './components/Footer';
import { playBell, playChime } from './utils/audio';

const MOBILE_TABS = [
  { id: 'arbol', label: 'El Árbol', icon: '🎄', subtitle: 'Pino y Adornos' },
  { id: 'espera', label: 'La Espera', icon: '⏳', subtitle: 'Cuenta Regresiva' },
  { id: 'carta', label: 'La Carta', icon: '✉️', subtitle: 'Correspondencia' },
  { id: 'augurios', label: 'Augurios', icon: '🎁', subtitle: 'Estuche de Regalo' },
];

export default function App() {
  const [snowIntensity, setSnowIntensity] = useState('copiosa');
  const [activeTab, setActiveTab] = useState('arbol');

  const handleHeroAction = (tabId, freq) => {
    playBell(freq, 0.7, 0.25);
    setActiveTab(tabId);
    // Smooth scroll to interactive view container on mobile
    const target = document.getElementById('mobile-tabs-container') || document.getElementById('interactive-experience');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTabChange = (tabId, index) => {
    playChime(index);
    setActiveTab(tabId);
  };

  return (
    <div className="relative min-h-screen bg-[#080f0b] text-[#e8ece9] flex flex-col antialiased selection:bg-[#78141b] selection:text-[#f7f4ed] overflow-hidden">
      {/* Interactive Depth-of-field Snow Canvas */}
      <SnowCanvas intensity={snowIntensity} />

      {/* Warm Ambient Hearth Glow */}
      <div className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[70vw] h-[450px] bg-[#c59b48]/[0.035] rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Main Top Navigation */}
      <Navbar
        snowIntensity={snowIntensity}
        setSnowIntensity={setSnowIntensity}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Vintage Edison Incandescent Garland */}
      <GarlandLights />

      <main className="flex-1 flex flex-col">
        {/* Editorial Hero Section (More compact on mobile) */}
        <section className="pt-4 pb-6 sm:pt-8 sm:pb-12 md:pt-10 md:pb-16 px-4 sm:px-6 text-center relative z-10 max-w-4xl mx-auto">
          <div className="inline-block mb-2 md:mb-4">
            <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.3em] uppercase text-[#c59b48] border-b border-[#c59b48]/30 pb-0.5 font-medium">
              Víspera de Diciembre
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-normal text-[#f7f4ed] tracking-tight leading-[1.1] mb-3 sm:mb-4 md:mb-6">
            La Calidez de la <br />
            <span className="italic font-normal text-[#deb869]">Nochebuena</span>
          </h1>

          <p className="text-[#a4ada7] text-xs sm:text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed mb-5 sm:mb-8 md:mb-10">
            Una experiencia serena de invierno: la espera de las fiestas, la tradición de vestir el pino, la correspondencia sincera y el calor del hogar.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4">
            <button
              onClick={() => handleHeroAction('arbol', 783.99)}
              className="button-antique px-5 sm:px-7 py-2.5 sm:py-3 rounded-lg text-[11px] sm:text-xs tracking-widest uppercase font-medium shadow-lg"
            >
              Vestir el Árbol
            </button>
            <button
              onClick={() => handleHeroAction('carta', 1046.5)}
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg border border-[#c59b48]/30 hover:border-[#deb869]/70 text-[#f7f4ed] text-[11px] sm:text-xs tracking-widest uppercase font-medium bg-black/20 hover:bg-black/40 transition-all"
            >
              Escribir Carta
            </button>
          </div>
        </section>

        {/* ======================================================== */}
        {/* MOBILE VIEW: Elegant Sticky Segmented Tabs Control (<md) */}
        {/* ======================================================== */}
        <div id="mobile-tabs-container" className="md:hidden sticky top-[53px] z-30 bg-[#080f0b]/95 backdrop-blur-md border-y border-[#c59b48]/20 px-3 py-2 shadow-[0_8px_20px_rgba(0,0,0,0.5)]">
          <div className="grid grid-cols-4 gap-1.5 p-1 rounded-xl bg-black/40 border border-[#c59b48]/15">
            {MOBILE_TABS.map((tab, idx) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id, idx)}
                  className={`flex flex-col items-center justify-center py-2 px-1 rounded-lg transition-all ${
                    isActive
                      ? 'bg-gradient-to-b from-[#c59b48]/25 to-[#876527]/25 text-[#fbf5e6] border border-[#deb869]/60 shadow-[0_2px_8px_rgba(197,155,72,0.3)]'
                      : 'text-[#8c948e] hover:text-[#d0d7d2]'
                  }`}
                >
                  <span className="text-base leading-none mb-1">{tab.icon}</span>
                  <span className="text-[10px] font-sans font-medium tracking-tight truncate w-full">
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Tab Content Section */}
        <div className="md:hidden flex-1 relative z-10 transition-opacity duration-300">
          {activeTab === 'arbol' && (
            <div className="animate-in fade-in zoom-in-[0.98] duration-300">
              <ChristmasTree />
            </div>
          )}
          {activeTab === 'espera' && (
            <div className="animate-in fade-in zoom-in-[0.98] duration-300">
              <CountdownTimer />
            </div>
          )}
          {activeTab === 'carta' && (
            <div className="animate-in fade-in zoom-in-[0.98] duration-300">
              <GreetingCard />
            </div>
          )}
          {activeTab === 'augurios' && (
            <div className="animate-in fade-in zoom-in-[0.98] duration-300">
              <GiftBoxSurprise />
            </div>
          )}
        </div>

        {/* ======================================================== */}
        {/* DESKTOP VIEW: Continuous Narrative Scroll Layout (>= md) */}
        {/* ======================================================== */}
        <div id="interactive-experience" className="hidden md:block">
          {/* 1. Countdown Section */}
          <CountdownTimer />

          {/* 2. Interactive Christmas Tree */}
          <ChristmasTree />

          {/* 3. Interactive Letter / Greeting Card */}
          <GreetingCard />

          {/* 4. Keepsake / Winter Reflection Box */}
          <GiftBoxSurprise />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
