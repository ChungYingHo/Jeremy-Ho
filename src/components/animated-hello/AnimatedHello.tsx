import React, { useEffect } from 'react';
import { animate } from 'animejs';
import styles from './index.module.css';
import { useHistory } from '@docusaurus/router';

export default function AnimatedHello() {
  const text = 'HELLO WORLD!';
  const history = useHistory();

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
    <div className={styles.wrapper}>
      <h2 className={styles.helloWrapper}>
        {text.split('').map((char, idx) => (
          <span key={idx} className={styles.letter}>
            <span className={styles.ghost}>{char === ' ' ? '\u00A0' : char}</span>
            <span className={styles.char}>{char === ' ' ? '\u00A0' : char}</span>
          </span>
        ))}
      </h2>

      <div className={styles.intro}>
        <p className={styles.name}>Jeremy Ho</p>
        <p className={styles.subtitle}>前端工程師 aka 遊戲開發設計師</p>
      </div>

      <div className={styles.buttons}>
        <button onClick={() => history.push('/docs/notes')}>筆記</button>
        <button onClick={() => history.push('/docs/series')}>系列</button>
        <button onClick={() => history.push('/blog')}>Blog</button>
      </div>
    </div>
  );
}
