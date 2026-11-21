import React, { useEffect, useRef } from 'react';

export default function SnowCanvas({ intensity = 'copiosa' }) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ targetWind: 0, currentWind: 0 });

  useEffect(() => {
    if (intensity === 'off') return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e) => {
      const normalizedX = (e.clientX / width - 0.5) * 2;
      mouseRef.current.targetWind = normalizedX * 0.9;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Multi-plane depth-of-field snow particle system
    const counts = {
      suave: 45,
      copiosa: 90,
      ventisca: 170,
    };
    const totalFlakes = counts[intensity] || 80;

    const flakes = [];
    for (let i = 0; i < totalFlakes; i++) {
      // Depth plane: 0 (far/blurred background), 1 (midground), 2 (crisp foreground)
      const plane = Math.random() < 0.25 ? 0 : Math.random() < 0.85 ? 1 : 2;

      let radius, speedY, opacity, blur;
      if (plane === 0) {
        radius = Math.random() * 3.5 + 2.5; // Large out-of-focus bokeh
        speedY = Math.random() * 0.6 + 0.3;
        opacity = Math.random() * 0.12 + 0.05;
        blur = 3;
      } else if (plane === 1) {
        radius = Math.random() * 1.6 + 0.8; // Midground crisp flakes
        speedY = Math.random() * 1.2 + 0.6;
        opacity = Math.random() * 0.5 + 0.3;
        blur = 0;
      } else {
        radius = Math.random() * 2.2 + 1.6; // Foreground drifting flakes
        speedY = Math.random() * 1.8 + 1.0;
        opacity = Math.random() * 0.6 + 0.4;
        blur = 1;
      }

      flakes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius,
        speedY,
        swaySpeed: Math.random() * 0.015 + 0.008,
        swayRange: Math.random() * 1.8 + 0.8,
        swayOffset: Math.random() * Math.PI * 2,
        opacity,
        blur,
      });
    }

    let tick = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth inertia wind interpolation
      mouseRef.current.currentWind +=
        (mouseRef.current.targetWind - mouseRef.current.currentWind) * 0.03;
      const wind = mouseRef.current.currentWind;

      tick++;

      for (let i = 0; i < flakes.length; i++) {
        const f = flakes[i];

        f.y += f.speedY;
        f.x += Math.sin(tick * f.swaySpeed + f.swayOffset) * f.swayRange + wind;

        // Wrap around viewport with gentle margin
        if (f.y > height + 10) {
          f.y = -10;
          f.x = Math.random() * width;
        }
        if (f.x > width + 15) f.x = -15;
        if (f.x < -15) f.x = width + 15;

        ctx.beginPath();
        ctx.arc(f.x, f.y, f.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(240, 245, 250, ${f.opacity})`;

        if (f.blur > 0) {
          ctx.shadowColor = 'rgba(255, 255, 255, 0.4)';
          ctx.shadowBlur = f.blur * 2;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [intensity]);

  if (intensity === 'off') return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-20"
      style={{ width: '100vw', height: '100vh' }}
    />
  );
}
