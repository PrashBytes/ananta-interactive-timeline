import React, { useState, useEffect } from 'react';
import { useAppStore } from '../../store/appStore';
import { smoothScrollTo } from '../../utils/scrollToAnchor';
import { PERIODS } from '../../data/periods';

export default function GlobalNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const activePeriodId = useAppStore((state) => state.activePeriodId);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeIndex = PERIODS.findIndex((p) => p.id === activePeriodId);

  return (
    <nav className={`global-nav ${isScrolled ? 'is-scrolled' : ''}`}>
      <a className="nav__brand" href="#hero" onClick={(e) => { e.preventDefault(); smoothScrollTo('hero'); }}>
        INDIAN ART
      </a>
      <div className="nav__links">
        <a href="#journey" onClick={(e) => { e.preventDefault(); smoothScrollTo('journey'); }}>JOURNEY</a>
        <a href="#collection" onClick={(e) => { e.preventDefault(); smoothScrollTo('collection'); }}>ARTIFACTS</a>
        <a href="#about" onClick={(e) => { e.preventDefault(); smoothScrollTo('about'); }}>ABOUT</a>
      </div>
      <div className="nav__progress">
        <span className="current">{String(Math.max(0, activeIndex) + 1).padStart(2, '0')}</span>
        <span> / {String(PERIODS.length).padStart(2, '0')}</span>
      </div>
    </nav>
  );
}
