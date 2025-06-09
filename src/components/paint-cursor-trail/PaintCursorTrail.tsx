import { useEffect } from 'react';
import styles from './index.module.css';

function getTrailStyle(index: number, hidden = false) {
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
    opacity: hidden ? '0' : `${opacity}`,
    filter: `blur(${blur}px)`,
    background: `radial-gradient(circle, ${color}, transparent 70%)`,
    transition: 'opacity 0.3s ease',
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: '9999',
    top: '0',
    left: '0',
  };
}

export default function PaintCursorTrail() {
  useEffect(() => {
    if (window.innerWidth < 768) return;

    const trailCount = 6;
    const trails: HTMLDivElement[] = [];

    for (let i = 0; i < trailCount; i++) {
      const el = document.createElement('div');
      el.className = styles.cursorTrail;
      Object.assign(el.style, getTrailStyle(i, true)); // 初始隱藏
      document.body.appendChild(el);
      trails.push(el);
    }

    const coords = Array.from({ length: trailCount }, () => ({ x: 0, y: 0 }));
    let mouseX = 0;
    let mouseY = 0;
    let started = false;

    const updateMouse = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const init = (e: PointerEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      coords.forEach(c => {
        c.x = mouseX;
        c.y = mouseY;
      });

      trails.forEach((el, i) => {
        el.style.opacity = `${1 - i * 0.12}`;
      });

      started = true;
      animate();
      document.addEventListener('mousemove', updateMouse);
    };

    document.addEventListener('pointermove', init, { once: true });

    const animate = () => {
      if (!started) return;

      coords[0].x += (mouseX - coords[0].x) * 0.2;
      coords[0].y += (mouseY - coords[0].y) * 0.2;

      for (let i = 1; i < trailCount; i++) {
        coords[i].x += (coords[i - 1].x - coords[i].x) * 0.2;
        coords[i].y += (coords[i - 1].y - coords[i].y) * 0.2;
      }

      for (let i = 0; i < trailCount; i++) {
        trails[i].style.transform = `translate(${coords[i].x}px, ${coords[i].y}px) translate(-50%, -50%)`;
      }

      requestAnimationFrame(animate);
    };

    return () => {
      document.removeEventListener('pointermove', init);
      document.removeEventListener('mousemove', updateMouse);
      trails.forEach(el => el.remove());
    };
  }, []);

  return null;
}
