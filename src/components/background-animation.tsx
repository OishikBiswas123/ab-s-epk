"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  glow: number;
}

interface Beam {
  angle: number;
  speed: number;
  width: number;
  length: number;
  opacity: number;
  color: string;
}

function init(w: number, h: number) {
  const particles: Particle[] = Array.from({ length: 150 }, () => {
    const isLarge = Math.random() > 0.85;
    const isGlowing = Math.random() > 0.4;
    return {
      x: Math.random() * w,
      y: Math.random() * h,
      size: isLarge ? Math.random() * 4 + 2 : Math.random() * 1.8 + 0.3,
      speedY: -(Math.random() * 0.35 + 0.05),
      speedX: (Math.random() - 0.5) * 0.12,
      opacity: isGlowing ? Math.random() * 0.35 + 0.1 : Math.random() * 0.15 + 0.03,
      glow: isGlowing ? Math.random() * 18 + 6 : 0,
    };
  });

  const beams: Beam[] = Array.from({ length: 8 }, (_, i) => ({
    angle: (i / 8) * Math.PI * 2,
    speed: (0.0003 + Math.random() * 0.0006) * (i % 2 === 0 ? 1 : -1),
    width: 0.025 + Math.random() * 0.02,
    length: 0.9 + Math.random() * 0.3,
    opacity: 0.015 + Math.random() * 0.015,
    color:
      i % 3 === 0
        ? "rgba(251, 191, 36, "
        : i % 3 === 1
          ? "rgba(253, 186, 116, "
          : "rgba(255, 255, 255, ",
  }));

  return { particles, beams };
}

export default function BackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let time = 0;
    let cw = window.innerWidth;
    let ch = window.innerHeight;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      cw = window.innerWidth;
      ch = window.innerHeight;
      canvas.width = cw * dpr;
      canvas.height = ch * dpr;
      canvas.style.width = `${cw}px`;
      canvas.style.height = `${ch}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    const { particles, beams } = init(cw, ch);
    window.addEventListener("resize", resize);

    const drawBeam = (beam: Beam, cx: number, cy: number) => {
      const angle = beam.angle + time * beam.speed;
      const maxLen = Math.max(cw, ch) * beam.length;
      const halfW = beam.width;

      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(
        cx + Math.cos(angle - halfW) * maxLen,
        cy + Math.sin(angle - halfW) * maxLen,
      );
      ctx.lineTo(
        cx + Math.cos(angle + halfW) * maxLen,
        cy + Math.sin(angle + halfW) * maxLen,
      );
      ctx.closePath();

      const grad = ctx.createLinearGradient(
        cx,
        cy,
        cx + Math.cos(angle) * maxLen,
        cy + Math.sin(angle) * maxLen,
      );
      grad.addColorStop(0, `${beam.color}${beam.opacity * 2.5})`);
      grad.addColorStop(0.4, `${beam.color}${beam.opacity})`);
      grad.addColorStop(1, `${beam.color}0)`);
      ctx.fillStyle = grad;
      ctx.fill();
    };

    const draw = () => {
      time += 1;
      ctx.clearRect(0, 0, cw, ch);

      // Deep atmospheric haze — layered radial glows
      const haze1 = ctx.createRadialGradient(
        cw * 0.5,
        ch * 0.35,
        0,
        cw * 0.5,
        ch * 0.35,
        cw * 0.6,
      );
      haze1.addColorStop(0, "rgba(251, 191, 36, 0.04)");
      haze1.addColorStop(0.3, "rgba(251, 146, 36, 0.02)");
      haze1.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = haze1;
      ctx.fillRect(0, 0, cw, ch);

      const haze2 = ctx.createRadialGradient(
        cw * 0.3 + Math.sin(time * 0.002) * 50,
        ch * 0.6 + Math.cos(time * 0.0015) * 40,
        0,
        cw * 0.3,
        ch * 0.6,
        cw * 0.4,
      );
      haze2.addColorStop(0, "rgba(251, 191, 36, 0.02)");
      haze2.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = haze2;
      ctx.fillRect(0, 0, cw, ch);

      // Concert light beams from top-center
      const beamCx = cw * 0.5;
      const beamCy = ch * 0.05;
      ctx.globalCompositeOperation = "screen";
      for (const beam of beams) {
        drawBeam(beam, beamCx, beamCy);
      }
      ctx.globalCompositeOperation = "source-over";

      // Floating particles with glow
      for (const p of particles) {
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(time * 0.008 + p.x * 0.01) * 0.08;
        if (p.y < -10) {
          p.y = ch + 10;
          p.x = Math.random() * cw;
        }
        if (p.x < -10) p.x = cw + 10;
        if (p.x > cw + 10) p.x = -10;

        const breathe = 0.6 + 0.4 * Math.sin(time * 0.02 + p.x * 0.05);
        const alpha = p.opacity * breathe;

        if (p.glow > 0) {
          ctx.shadowBlur = p.glow;
          ctx.shadowColor = `rgba(251, 191, 36, ${alpha * 0.8})`;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * breathe, 0, Math.PI * 2);
        ctx.fillStyle =
          p.glow > 0
            ? `rgba(251, 191, 36, ${alpha})`
            : `rgba(255, 255, 255, ${alpha * 0.7})`;
        ctx.fill();

        if (p.glow > 0) {
          ctx.shadowBlur = 0;
          ctx.shadowColor = "transparent";
        }
      }

      // Subtle grain overlay (very faint noise)
      const imgData = ctx.getImageData(0, 0, 2, 2);
      for (let i = 0; i < imgData.data.length; i += 4) {
        const noise = (Math.random() - 0.5) * 6;
        imgData.data[i] += noise;
        imgData.data[i + 1] += noise;
        imgData.data[i + 2] += noise;
      }
      ctx.putImageData(imgData, 0, 0);

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  );
}
