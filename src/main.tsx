import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import App from './App';
import './index.css';

gsap.registerPlugin(ScrollTrigger);

if (typeof window !== 'undefined') {
  gsap.defaults({
    ease: 'power3.out',
    duration: 1,
  });
}

function GSAPGlobalSetup() {
  useEffect(() => {
    let resizeTimer: number | undefined;
    const handleResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => ScrollTrigger.refresh(), 150);
    };
    window.addEventListener('resize', handleResize);
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', refresh);
      window.clearTimeout(resizeTimer);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);
  return null;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GSAPGlobalSetup />
    <App />
  </StrictMode>,
);
