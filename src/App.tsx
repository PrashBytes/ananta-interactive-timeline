import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PERIODS } from './data/periods';
import { useAppStore } from './store/appStore';
import { usePrefersReducedMotion } from './hooks/usePrefersReducedMotion';
import GlobalNav from './components/layout/GlobalNav';
import TimelineProgress from './components/layout/TimelineProgress';
import HeroSection from './components/sections/HeroSection';
import PeriodSection from './components/sections/PeriodSection';
import CollectionSection from './components/sections/CollectionSection';
import ClosingSection from './components/sections/ClosingSection';
import AboutSection from './components/sections/AboutSection';
import ArtifactModal from './components/artifact/ArtifactModal';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const setPeriodProgress = useAppStore((state) => state.setPeriodProgress);
  const setActivePeriod = useAppStore((state) => state.setActivePeriod);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      setPeriodProgress(0, PERIODS.length, 0);
      return;
    }

    const totalPeriods = PERIODS.length;

    ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        const percent = self.progress * 100;
        const journeyEl = document.getElementById('journey');
        if (journeyEl) {
          const journeyTop = journeyEl.offsetTop;
          const journeyHeight = journeyEl.offsetHeight;
          const scrollY = window.scrollY;
          const journeyStart = journeyTop - window.innerHeight * 0.3;
          const journeyEnd = journeyTop + journeyHeight;
          
          if (scrollY >= journeyStart && scrollY <= journeyEnd) {
            const relativeProgress = Math.min(
              1,
              Math.max(0, (scrollY - journeyStart) / (journeyEnd - journeyStart))
            );
            const currentIndexFloat = relativeProgress * totalPeriods;
            const currentIndex = Math.min(totalPeriods - 1, Math.floor(currentIndexFloat));
            const indexPercent = (currentIndexFloat / (totalPeriods - 1)) * 100;
            setPeriodProgress(currentIndex, totalPeriods, indexPercent);
          } else if (scrollY < journeyStart) {
            setPeriodProgress(0, totalPeriods, 0);
          } else {
            setPeriodProgress(totalPeriods - 1, totalPeriods, 100);
          }
        } else {
          setPeriodProgress(0, totalPeriods, percent);
        }
      },
    });

    const observers: IntersectionObserver[] = [];
    
    PERIODS.forEach((period) => {
      const periodEl = document.getElementById(period.id);
      if (!periodEl) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const ratio = entry.intersectionRatio;
              if (ratio > 0.4) {
                setActivePeriod(period.id);
              }
            }
          });
        },
        {
          threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
          rootMargin: '-20% 0px -20% 0px',
        }
      );
      observer.observe(periodEl);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [reducedMotion, setPeriodProgress, setActivePeriod]);

  return (
    <>
      <GlobalNav />
      <TimelineProgress />
      <HeroSection />
      <div id="journey" className="journey">
        {PERIODS.map((period) => (
          <PeriodSection key={period.id} period={period} />
        ))}
      </div>
      <CollectionSection />
      <ClosingSection />
      <AboutSection />
      <footer className="site-footer">
        <div className="container">
          © {new Date().getFullYear()} · INDIAN ART — A JOURNEY THROUGH TIME ·
          Interactive Timeline with Artifacts · Academic Submission
        </div>
      </footer>
      <ArtifactModal />
    </>
  );
}
