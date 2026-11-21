import React, { useState, useEffect } from 'react';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(getTimeUntilChristmas());

  function getTimeUntilChristmas() {
    const now = new Date();
    const currentYear = now.getFullYear();
    let target = new Date(currentYear, 11, 25, 0, 0, 0);

    if (now > target) {
      target = new Date(currentYear + 1, 11, 25, 0, 0, 0);
    }

    const difference = target - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeUntilChristmas());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: 'Días', value: timeLeft.days },
    { label: 'Horas', value: timeLeft.hours },
    { label: 'Minutos', value: timeLeft.minutes },
    { label: 'Segundos', value: timeLeft.seconds },
  ];

  return (
    <section id="cuenta-regresiva" className="py-8 md:py-16 px-4 text-center relative z-10">
      <div className="max-w-3xl mx-auto">
        {/* Subtle eyebrow label */}
        <div className="inline-block mb-2 md:mb-3">
          <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#c59b48] font-medium">
            El paso del invierno
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-normal text-[#f7f4ed] tracking-tight mb-3 md:mb-4">
          Hacia la <span className="italic text-[#deb869]">Nochebuena</span>
        </h2>
        <p className="text-[#a4ada7] text-xs sm:text-sm md:text-base max-w-lg mx-auto font-light leading-relaxed mb-6 md:mb-10">
          El tiempo avanza despacio en la quietud de diciembre. Cada instante nos acerca a la mesa compartida y el calor del hogar.
        </p>

        {/* Typographic Countdown Display */}
        <div className="quiet-card p-5 sm:p-10 rounded-2xl max-w-2xl mx-auto border border-[#c59b48]/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="grid grid-cols-4 divide-x divide-[#c59b48]/15">
            {units.map((unit) => (
              <div key={unit.label} className="flex flex-col items-center px-1 sm:px-2">
                <span className="text-3xl sm:text-5xl md:text-6xl font-display font-light text-[#f7f4ed] tracking-tight">
                  {String(unit.value).padStart(2, '0')}
                </span>
                <span className="text-[9px] sm:text-xs font-sans tracking-[0.2em] uppercase text-[#c59b48]/80 mt-1 sm:mt-2">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 md:mt-8 pt-4 md:pt-5 border-t border-[#c59b48]/15 flex items-center justify-center gap-2 text-[11px] sm:text-xs text-[#8c9690] font-light">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c59b48]/60" />
            <span>25 de Diciembre • Llegada del Solsticio de Navidad</span>
          </div>
        </div>
      </div>
    </section>
  );
}
