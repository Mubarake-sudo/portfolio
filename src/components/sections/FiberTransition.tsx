'use client';

import { useEffect, useRef } from 'react';

/* ──────────────────────────────────────────────────────────────
   FiberTransition
   Animated canvas: sinusoidal filaments that spread outward
   as the user scrolls the section into view.
   Charte graphique : #0A84FF · #00D9FF · #A78BFA · #FF6B35
────────────────────────────────────────────────────────────── */

const FIBER_COLORS = [
  '#0A84FF',
  '#00D9FF',
  '#A78BFA',
  '#FF6B35',
  '#34D399',
  '#0A84FF',
  '#00D9FF',
  '#A78BFA',
];

interface Fiber {
  color: string;
  amplitude: number;
  frequency: number;
  phase: number;
  yBase: number;   // vertical base position (0–1 relative to canvas height)
  width: number;
  speed: number;
}

function buildFibers(count: number, _h: number): Fiber[] {
  return Array.from({ length: count }, (_, i) => ({
    color: FIBER_COLORS[i % FIBER_COLORS.length],
    amplitude: 30 + Math.random() * 70,
    frequency: 0.003 + Math.random() * 0.004,
    phase: (i / count) * Math.PI * 2,
    yBase: 0.25 + (i / (count - 1)) * 0.5,
    width: 0.6 + Math.random() * 1.2,
    speed: 0.008 + Math.random() * 0.012,
  }));
}

export default function FiberTransition() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let fibers: Fiber[] = [];
    let w = 0;
    let h = 0;

    const resize = () => {
      w = canvas.width = section.offsetWidth;
      h = canvas.height = section.offsetHeight;
      fibers = buildFibers(8, h);
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      timeRef.current += 1;

      /* How much of the section is in view (0 → 1) */
      const rect = section.getBoundingClientRect();
      const progress = Math.min(
        Math.max(1 - rect.top / window.innerHeight, 0),
        1
      );

      ctx.clearRect(0, 0, w, h);

      fibers.forEach((fiber) => {
        /* Extend filament length based on scroll progress */
        const spreadX = w * progress;
        const cx = w / 2; // center X where fibers converge

        /* Points along the fiber */
        const points: [number, number][] = [];
        const steps = 120;

        for (let s = 0; s <= steps; s++) {
          const t = s / steps;
          /* Map t to x: from center outward in both directions */
          const xLeft = cx - t * spreadX;
          const xRight = cx + t * spreadX;
          void xLeft; // used for the mirrored left draw below

          // sinusoidal Y deviation – grows with distance from center
          const sinVal =
            Math.sin(
              t * Math.PI * 4 * fiber.frequency * w +
                fiber.phase +
                timeRef.current * fiber.speed
            ) *
            fiber.amplitude *
            Math.sin(t * Math.PI); // envelope: 0 at ends, max in middle

          const y = fiber.yBase * h + sinVal;
          points.push([xRight, y]);
          // we'll draw left side separately
        }

        // Draw right side
        ctx.beginPath();
        ctx.moveTo(cx, fiber.yBase * h);
        points.forEach(([px, py]) => ctx.lineTo(px, py));
        ctx.strokeStyle = fiber.color;
        ctx.lineWidth = fiber.width;
        ctx.globalAlpha = 0.5 * progress;
        ctx.stroke();

        // Draw left side (mirror)
        ctx.beginPath();
        ctx.moveTo(cx, fiber.yBase * h);
        points.forEach(([px, py]) => ctx.lineTo(w - px, py));
        ctx.strokeStyle = fiber.color;
        ctx.lineWidth = fiber.width;
        ctx.globalAlpha = 0.5 * progress;
        ctx.stroke();
      });

      ctx.globalAlpha = 1;
      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ height: '320px', background: 'transparent' }}
      aria-hidden
    >
      {/* Fade edges so it blends with sections */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#050816] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#050816] to-transparent" />
      </div>

      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
