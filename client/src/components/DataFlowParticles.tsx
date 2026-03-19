import React, { useEffect, useRef } from 'react';

interface SignalTrack {
  x: number;
  width: number;
  speed: number;
  offset: number;
  color: string;
}

const DataFlowParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const tracks: SignalTrack[] = Array.from({ length: 14 }, (_, index) => ({
      x: ((index + 1) / 15) * canvas.width,
      width: Math.random() * 90 + 36,
      speed: Math.random() * 0.9 + 0.35,
      offset: Math.random() * canvas.height,
      color: index % 3 === 0 ? 'rgba(125, 255, 136, 0.5)' : 'rgba(76, 242, 255, 0.5)',
    }));

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = 'rgba(76, 242, 255, 0.07)';
      ctx.lineWidth = 1;
      for (let x = 0; x <= canvas.width; x += 88) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = 0; y <= canvas.height; y += 72) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    const draw = () => {
      drawGrid();

      tracks.forEach((track, index) => {
        const y = reduceMotion
          ? (index / tracks.length) * canvas.height
          : (track.offset + performance.now() * 0.04 * track.speed) % canvas.height;

        const gradient = ctx.createLinearGradient(track.x, y, track.x + track.width, y);
        gradient.addColorStop(0, 'rgba(76, 242, 255, 0)');
        gradient.addColorStop(0.25, track.color);
        gradient.addColorStop(1, 'rgba(76, 242, 255, 0)');

        ctx.beginPath();
        ctx.moveTo(track.x - track.width * 0.2, y);
        ctx.lineTo(track.x + track.width, y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(track.x + track.width * 0.25, y, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = track.color;
        ctx.shadowBlur = 16;
        ctx.shadowColor = track.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      if (!reduceMotion) {
        animationRef.current = requestAnimationFrame(draw);
      }
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full pointer-events-none opacity-70" />;
};

export default DataFlowParticles;
