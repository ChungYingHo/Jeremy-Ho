import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import AnimatedHello from '../components/animated-hello/AnimatedHello';
import PaintCursorTrail from '../components/paint-cursor-trail/PaintCursorTrail';
import styles from './index.module.css';


export default function Home(): ReactNode {
  return (
    <Layout
      title={`前端工程師`}
      description="Personal portfolio site of Jeremy Ho – a front-end engineer and game developer."
    >
      
      <PaintCursorTrail />

      <main className={styles.main}>
        <AnimatedHello />
      </main>
    </Layout>
  );
}
