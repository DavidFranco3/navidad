import React, { useState } from 'react';
import { playBell, playChime } from '../utils/audio';

const REFINED_MESSAGES = [
  {
    title: 'Hogar y Serenidad',
    text: 'Que en la serenidad de estas fiestas encuentres el descanso más merecido y la compañía de quienes hacen de cualquier lugar un hogar cálido. Felices fiestas.',
  },
  {
    title: 'Gratitud y Amistad',
    text: 'Agradezco sinceramente haber compartido este año a tu lado. Que el invierno traiga renovación y que el nuevo año nos depare más momentos juntos.',
  },
  {
    title: 'Luz y Esperanza',
    text: 'Que la luz tenue y hermosa de estas noches ilumine los senderos que emprenderás el próximo año. Te deseo salud, paz y plenitud.',
  },
];

export default function GreetingCard() {
  const [isOpen, setIsOpen] = useState(false);
  const [recipient, setRecipient] = useState('Mi Querida Familia');
  const [sender, setSender] = useState('Con cariño, David');
  const [message, setMessage] = useState(REFINED_MESSAGES[0].text);
  const [copied, setCopied] = useState(false);

  const toggleEnvelope = () => {
    playBell(isOpen ? 659.25 : 880, 0.8, 0.25);
    setIsOpen(!isOpen);
  };

  const handleCopy = () => {
    playChime(3);
    const full = `${recipient}\n\n${message}\n\n— ${sender}`;
    navigator.clipboard.writeText(full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section id="carta-navidena" className="py-8 md:py-16 px-4 relative z-10 max-w-5xl mx-auto">
      <div className="text-center mb-6 md:mb-10">
        <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#c59b48] font-medium block mb-1 md:mb-2">
          Correspondencia de invierno
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-normal text-[#f7f4ed]">
          La Carta de <span className="italic text-[#deb869]">Nochebuena</span>
        </h2>
        <p className="text-[#98a39c] text-xs sm:text-sm md:text-base max-w-md mx-auto font-light mt-2 md:mt-3 leading-relaxed">
          Las palabras escritas a mano guardan el verdadero espíritu de estas fechas. Abre el sobre o escribe tu propia dedicatoria.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
        {/* Left: 3D Wax Seal Envelope Presentation (6 cols) */}
        <div className="lg:col-span-6 flex flex-col items-center">
          <div className="stationery-scene w-full py-4 sm:py-6 flex flex-col items-center">
            <div className="wax-envelope">
              {/* Envelope Base Pocket */}
              <div className="envelope-pocket flex flex-col justify-end p-4">
                {/* Laid Paper Card */}
                <div
                  className={`letterpress-card ${
                    isOpen ? 'unfolded' : 'translate-y-6 opacity-90'
                  }`}
                >
                  {/* Engraved Vintage Stamp */}
                  <div className="vintage-stamp select-none">
                    <div className="stamp-inner">
                      <span className="text-sm font-serif italic text-[#8b252b]">25</span>
                      <span className="text-[7px] font-sans tracking-widest uppercase text-[#8b252b]">DIC</span>
                    </div>
                  </div>

                  <div className="font-display text-[#5a1015] font-semibold text-lg sm:text-xl tracking-tight mb-2 pr-16">
                    {recipient || 'A quien corresponda'}
                  </div>

                  <p className="font-serif text-[#2a2825] text-xs sm:text-base leading-relaxed my-3 sm:my-4 italic min-h-[60px] sm:min-h-[75px] font-normal">
                    «{message || 'Escribe tus palabras aquí...'}»
                  </p>

                  <div className="text-right font-display italic font-semibold text-[#5a1015] text-sm sm:text-base pt-2 border-t border-[#d8cfbe]">
                    {sender || 'Con afecto'}
                  </div>
                </div>

                {/* Wax Seal with Monogram */}
                {!isOpen && (
                  <div
                    onClick={toggleEnvelope}
                    className="authentic-seal"
                    title="Haz clic para romper el sello de cera"
                  >
                    <span className="seal-monogram">N</span>
                  </div>
                )}
              </div>

              {/* Envelope Top Flap */}
              <div
                onClick={toggleEnvelope}
                className={`envelope-top-flap ${isOpen ? 'open' : ''}`}
              >
                <svg viewBox="0 0 490 146" fill="none">
                  <path
                    d="M 0,0 L 245,142 L 490,0 Z"
                    fill="#660e15"
                    stroke="#42090e"
                    strokeWidth="1"
                  />
                  <path
                    d="M 0,0 L 245,138 L 490,0 Z"
                    fill="#4d0a10"
                    opacity="0.35"
                  />
                  <path
                    d="M 10,2 L 245,134 L 480,2"
                    stroke="rgba(212, 175, 55, 0.25)"
                    strokeWidth="1"
                    fill="none"
                  />
                </svg>
              </div>
            </div>
          </div>

          <button
            onClick={toggleEnvelope}
            className="mt-3 text-xs tracking-wider uppercase text-[#c59b48] hover:text-[#faeed1] font-medium transition-colors"
          >
            {isOpen ? 'Guardar y cerrar sobre' : 'Tocar para abrir la carta'}
          </button>
        </div>

        {/* Right: Customization Controls (6 cols) */}
        <div className="lg:col-span-6 quiet-card p-5 sm:p-8 rounded-2xl border border-[#c59b48]/20">
          <h3 className="text-sm sm:text-base font-display text-[#f7f4ed] uppercase tracking-wider mb-4 sm:mb-5 pb-3 border-b border-[#c59b48]/15">
            Escribir dedicatoria
          </h3>

          <div className="space-y-3 sm:space-y-4">
            <div>
              <label className="block text-[11px] font-sans tracking-[0.15em] uppercase text-[#a4ada7] mb-1">
                Destinatario
              </label>
              <input
                type="text"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                maxLength={50}
                placeholder="Nombre o familia..."
                className="w-full px-3.5 py-2 sm:py-2.5 rounded-lg bg-black/30 border border-white/10 text-xs sm:text-sm text-[#f7f4ed] placeholder-white/20 focus:outline-none focus:border-[#c59b48]/60 transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] font-sans tracking-[0.15em] uppercase text-[#a4ada7] mb-1">
                Firma
              </label>
              <input
                type="text"
                value={sender}
                onChange={(e) => setSender(e.target.value)}
                maxLength={50}
                placeholder="Tu firma..."
                className="w-full px-3.5 py-2 sm:py-2.5 rounded-lg bg-black/30 border border-white/10 text-xs sm:text-sm text-[#f7f4ed] placeholder-white/20 focus:outline-none focus:border-[#c59b48]/60 transition-colors"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-[11px] font-sans tracking-[0.15em] uppercase text-[#a4ada7]">
                  Mensaje
                </label>
                <span className="text-[10px] text-[#6e7771]">
                  {message.length}/220
                </span>
              </div>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value.slice(0, 220))}
                rows={3}
                className="w-full px-3.5 py-2 sm:py-2.5 rounded-lg bg-black/30 border border-white/10 text-xs sm:text-sm text-[#f7f4ed] placeholder-white/20 focus:outline-none focus:border-[#c59b48]/60 transition-colors resize-none leading-relaxed"
              />
            </div>

            {/* Presets */}
            <div>
              <span className="block text-[11px] text-[#8c948e] mb-1.5">Inspiraciones:</span>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {REFINED_MESSAGES.map((preset) => (
                  <button
                    key={preset.title}
                    onClick={() => {
                      playChime(2);
                      setMessage(preset.text);
                    }}
                    className="text-[11px] sm:text-xs px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md bg-black/20 hover:bg-[#c59b48]/15 border border-[#c59b48]/20 text-[#dfba67] transition-all"
                  >
                    {preset.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Action */}
            <div className="pt-3 sm:pt-4 border-t border-[#c59b48]/15">
              <button
                onClick={handleCopy}
                className="w-full py-2.5 px-4 rounded-lg button-antique text-xs uppercase tracking-wider font-medium flex items-center justify-center gap-2"
              >
                <span>{copied ? '¡Copiado al portapapeles!' : 'Copiar texto para compartir'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
