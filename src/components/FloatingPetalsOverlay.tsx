import React, { useEffect, useRef } from 'react';

type FlowerType = 'marigold' | 'rose' | 'jasmine' | 'lotus';

interface FlowerParticle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotSpeed: number;
  wobbleSpeed: number;
  wobbleDistance: number;
  wobbleAngle: number;
  flowerType: FlowerType;
  color: string;
  secondaryColor: string;
  centerColor: string;
  opacity: number;
}

export const FloatingPetalsOverlay: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const isMobile = width < 768;
    const count = isMobile ? 22 : 40;

    const flowerConfigs = [
      {
        type: 'marigold' as FlowerType,
        color: '#F59E0B',
        secondaryColor: '#EA580C',
        centerColor: '#78350F',
      },
      {
        type: 'marigold' as FlowerType,
        color: '#FBBF24',
        secondaryColor: '#D97706',
        centerColor: '#92400E',
      },
      {
        type: 'rose' as FlowerType,
        color: '#E11D48',
        secondaryColor: '#BE123C',
        centerColor: '#881337',
      },
      {
        type: 'rose' as FlowerType,
        color: '#FB7185',
        secondaryColor: '#E11D48',
        centerColor: '#9F1239',
      },
      {
        type: 'jasmine' as FlowerType,
        color: '#FFFBEB',
        secondaryColor: '#FEF08A',
        centerColor: '#F59E0B',
      },
      {
        type: 'lotus' as FlowerType,
        color: '#F472B6',
        secondaryColor: '#DB2777',
        centerColor: '#FBBF24',
      },
    ];

    const flowers: FlowerParticle[] = [];

    for (let i = 0; i < count; i++) {
      const config = flowerConfigs[Math.floor(Math.random() * flowerConfigs.length)];
      flowers.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 10 + Math.random() * (isMobile ? 12 : 18),
        speedX: -0.4 + Math.random() * 0.8,
        speedY: 0.6 + Math.random() * 1.1,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (-1 + Math.random() * 2) * 0.015,
        wobbleSpeed: 0.01 + Math.random() * 0.02,
        wobbleDistance: 1 + Math.random() * 2,
        wobbleAngle: Math.random() * Math.PI * 2,
        flowerType: config.type,
        color: config.color,
        secondaryColor: config.secondaryColor,
        centerColor: config.centerColor,
        opacity: 0.65 + Math.random() * 0.3,
      });
    }

    let animId: number;

    // Draw Realistic Marigold Flower (गेंदा फूल) with layered ruffled petals
    const drawMarigold = (size: number, color: string, secColor: string, centerColor: string) => {
      const petals = 12;
      const radius = size * 0.85;

      // Outer petals
      for (let i = 0; i < petals; i++) {
        const angle = (i * Math.PI * 2) / petals;
        ctx.save();
        ctx.rotate(angle);
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(radius * 0.55, 0, radius * 0.42, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Middle petals (darker/saffron depth)
      for (let i = 0; i < petals; i++) {
        const angle = (i * Math.PI * 2) / petals + Math.PI / petals;
        ctx.save();
        ctx.rotate(angle);
        ctx.beginPath();
        ctx.fillStyle = secColor;
        ctx.arc(radius * 0.35, 0, radius * 0.3, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Flower Center
      ctx.beginPath();
      ctx.fillStyle = centerColor;
      ctx.arc(0, 0, radius * 0.22, 0, Math.PI * 2);
      ctx.fill();
    };

    // Draw Realistic Rose Blossom (गुलाब)
    const drawRose = (size: number, color: string, secColor: string, centerColor: string) => {
      const radius = size * 0.85;
      const numPetals = 6;

      // Outer wide petals
      for (let i = 0; i < numPetals; i++) {
        const angle = (i * Math.PI * 2) / numPetals;
        ctx.save();
        ctx.rotate(angle);
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.ellipse(radius * 0.45, 0, radius * 0.5, radius * 0.35, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Inner whorl
      for (let i = 0; i < numPetals; i++) {
        const angle = (i * Math.PI * 2) / numPetals + 0.5;
        ctx.save();
        ctx.rotate(angle);
        ctx.beginPath();
        ctx.fillStyle = secColor;
        ctx.ellipse(radius * 0.25, 0, radius * 0.35, radius * 0.22, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Rose core
      ctx.beginPath();
      ctx.fillStyle = centerColor;
      ctx.arc(0, 0, radius * 0.18, 0, Math.PI * 2);
      ctx.fill();
    };

    // Draw Jasmine/Mogra Flower (मोगरा)
    const drawJasmine = (size: number, color: string, secColor: string, centerColor: string) => {
      const radius = size * 0.9;
      const petals = 5;

      for (let i = 0; i < petals; i++) {
        const angle = (i * Math.PI * 2) / petals;
        ctx.save();
        ctx.rotate(angle);
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.moveTo(0, 0);
        ctx.quadraticCurveTo(radius * 0.5, radius * 0.3, radius, 0);
        ctx.quadraticCurveTo(radius * 0.5, -radius * 0.3, 0, 0);
        ctx.fill();
        ctx.restore();
      }

      // Gentle golden pollen core
      ctx.beginPath();
      ctx.fillStyle = centerColor;
      ctx.arc(0, 0, radius * 0.16, 0, Math.PI * 2);
      ctx.fill();
    };

    // Draw Sacred Lotus Flower (कमल)
    const drawLotus = (size: number, color: string, secColor: string, centerColor: string) => {
      const radius = size * 0.85;
      const petals = 8;

      for (let i = 0; i < petals; i++) {
        const angle = (i * Math.PI * 2) / petals;
        ctx.save();
        ctx.rotate(angle);
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(radius * 0.3, radius * 0.4, radius * 0.7, radius * 0.3, radius, 0);
        ctx.bezierCurveTo(radius * 0.7, -radius * 0.3, radius * 0.3, -radius * 0.4, 0, 0);
        ctx.fill();
        ctx.restore();
      }

      ctx.beginPath();
      ctx.fillStyle = secColor;
      ctx.arc(0, 0, radius * 0.28, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.fillStyle = centerColor;
      ctx.arc(0, 0, radius * 0.14, 0, Math.PI * 2);
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      flowers.forEach((f) => {
        f.y += f.speedY;
        f.wobbleAngle += f.wobbleSpeed;
        f.x += f.speedX + Math.sin(f.wobbleAngle) * f.wobbleDistance;
        f.rotation += f.rotSpeed;

        if (f.y > height + 30) {
          f.y = -30;
          f.x = Math.random() * width;
        }
        if (f.x > width + 30) f.x = -30;
        if (f.x < -30) f.x = width + 30;

        ctx.save();
        ctx.translate(f.x, f.y);
        ctx.rotate(f.rotation);
        ctx.globalAlpha = f.opacity;

        switch (f.flowerType) {
          case 'marigold':
            drawMarigold(f.size, f.color, f.secondaryColor, f.centerColor);
            break;
          case 'rose':
            drawRose(f.size, f.color, f.secondaryColor, f.centerColor);
            break;
          case 'jasmine':
            drawJasmine(f.size, f.color, f.secondaryColor, f.centerColor);
            break;
          case 'lotus':
            drawLotus(f.size, f.color, f.secondaryColor, f.centerColor);
            break;
        }

        ctx.restore();
      });

      animId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 w-full h-full"
      aria-hidden="true"
    />
  );
};
