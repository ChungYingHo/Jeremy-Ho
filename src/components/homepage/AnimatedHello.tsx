import React, { useEffect } from 'react';
import { animate } from 'animejs';
import styles from './index.module.css';

export default function AnimatedHello() {
  const text = 'HELLO WORLD!';

  useEffect(() => {
    animate(`.${styles.char}`, {
      y: [
        { to: '-2.75rem', ease: 'outExpo', duration: 600 },
        { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
      ],
      rotate: {
        from: '-1turn',
        delay: 0
      },
      delay: (_, i) => i * 50,
      easing: 'inOutCirc',
      loopDelay: 1000,
      loop: true,
    });
  }, []);

  return (
    <h2 className={styles.helloWrapper}>
      {text.split('').map((char, idx) => (
        <span key={idx} className={styles.letter}>
          <span className={styles.ghost}>{char === ' ' ? '\u00A0' : char}</span>
          <span className={styles.char}>{char === ' ' ? '\u00A0' : char}</span>
        </span>
      ))}
    </h2>
  );
}
