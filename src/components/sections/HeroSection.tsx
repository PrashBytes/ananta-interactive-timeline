import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ARTIFACTS } from '../../data/artifacts';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { getArtImageUrl } from '../../utils/imageUrls';
import { smoothScrollTo } from '../../utils/scrollToAnchor';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const reducedMotion = usePrefersReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const artifactImgRef = useRef<HTMLDivElement>(null);

  const heroArtifact = ARTIFACTS.find((a) => a.id === 'chola-nataraja') || ARTIFACTS[0];

  useEffect(() => {
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      if (artifactImgRef.current) {
        gsap.fromTo(
          artifactImgRef.current,
          { opacity: 0, y: 60, scale: 0.92 },
          { opacity: 1, y: 0, scale: 1, duration: 1.6, ease: 'power3.out', delay: 0.2 }
        );
      }
      const words = heroRef.current?.querySelectorAll('.hero__title .word');
      if (words) {
        gsap.fromTo(
          words,
          { yPercent: 120, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 1.1, ease: 'power3.out', stagger: 0.12, delay: 0.6 }
        );
      }
      const eyebrow = heroRef.current?.querySelector('.hero__eyebrow');
      if (eyebrow) {
        gsap.fromTo(
          eyebrow,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out', delay: 0.1 }
        );
      }
      const subtitle = heroRef.current?.querySelector('.hero__subtitle');
      if (subtitle) {
        gsap.fromTo(
          subtitle,
          { opacity: 0 },
          { opacity: 1, duration: 1.2, ease: 'power2.out', delay: 1.1 }
        );
      }
      const support = heroRef.current?.querySelector('.hero__support');
      if (support) {
        gsap.fromTo(
          support,
          { opacity: 0 },
          { opacity: 1, duration: 1.2, ease: 'power2.out', delay: 1.4 }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <div className="hero__artifact-wrap">
        <div
          className={`hero__artifact ${reducedMotion ? '' : 'hero__float'}`}
          ref={artifactImgRef}
        >
          <img
            src={getArtImageUrl(heroArtifact.imagePrompt, 'portrait_4_3', heroArtifact.imageUrl)}
            alt={heroArtifact.name}
            draggable={false}
          />
        </div>
      </div>

      <div className="hero__content">
        <p className="hero__eyebrow">INDIAN ART · 2500 BCE — PRESENT</p>
        <h1 className="hero__title hero__title--primary">
          <span className="word">INDIAN</span>{' '}
          <span className="word">ART</span>
        </h1>
        <h2 className="hero__subtitle hero__subtitle--big">
          A JOURNEY THROUGH TIME
        </h2>
        <p className="hero__support">
          Explore thousands of years of artistic traditions, stories, techniques and cultural expression.
        </p>
      </div>

      <button
        className="hero__scroll"
        onClick={() => smoothScrollTo('journey')}
      >
        <span>SCROLL TO BEGIN THE JOURNEY</span>
        <ChevronDown style={{ width: 18, height: 18 }} />
      </button>
    </section>
  );
}
