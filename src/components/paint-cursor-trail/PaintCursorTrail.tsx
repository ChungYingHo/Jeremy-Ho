import { useEffect } from 'react';
import styles from './index.module.css';

function getTrailStyle(index: number) {
  const baseSize = 30;
  const sizeIncrement = 6;
  const blurBase = 6;
  const blurIncrement = 2;
  const opacity = 1 - index * 0.12;

  const size = baseSize + index * sizeIncrement;
  const blur = blurBase + index * blurIncrement;

  const color = `hsla(190, 100%, 60%, 0.6)`; // 青色藍綠光暈，固定不隨主題改變

  return {
    width: `${size}px`,
    height: `${size}px`,
    opacity: `${opacity}`,
    filter: `blur(${blur}px)`,
    background: `radial-gradient(circle, ${color}, transparent 70%)`,
  };
}

export default function PaintCursorTrail() {
  useEffect(() => {
    // 🖼️ Skip if device is mobile
    if (window.innerWidth < 768) return;

    const trailCount = 6;
    const trails: HTMLDivElement[] = [];

    for (let i = 0; i < trailCount; i++) {
      const el = document.createElement('div');
      el.className = styles.cursorTrail;

      const styleObj = getTrailStyle(i);
      Object.assign(el.style, styleObj);

      document.body.appendChild(el);
      trails.push(el);
    }

    const coords = Array.from({ length: trailCount }, () => ({ x: 0, y: 0 }));
    let mouseX = 0;
    let mouseY = 0;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    document.addEventListener('mousemove', move);

    const animate = () => {
      coords[0].x += (mouseX - coords[0].x) * 0.2;
      coords[0].y += (mouseY - coords[0].y) * 0.2;

      for (let i = 1; i < trailCount; i++) {
        coords[i].x += (coords[i - 1].x - coords[i].x) * 0.2;
        coords[i].y += (coords[i - 1].y - coords[i].y) * 0.2;
      }

      for (let i = 0; i < trailCount; i++) {
        trails[i].style.transform = `translate(${coords[i].x}px, ${coords[i].y}px)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener('mousemove', move);
      trails.forEach(el => el.remove());
    };
  }, []);

  return null;
}
