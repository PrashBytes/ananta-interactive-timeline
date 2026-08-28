import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { Period } from '../../data/types';
import { ARTIFACTS } from '../../data/artifacts';
import { REGIONAL_TRADITIONS } from '../../data/traditions';
import { useAppStore } from '../../store/appStore';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { getArtImageUrl } from '../../utils/imageUrls';

gsap.registerPlugin(ScrollTrigger);

interface PeriodSectionProps {
  period: Period;
}

export default function PeriodSection({ period }: PeriodSectionProps) {
  const reducedMotion = usePrefersReducedMotion();
  const openArtifactModal = useAppStore((state) => state.openArtifactModal);
  const sectionRef = useRef<HTMLElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [activeTraditionId, setActiveTraditionId] = useState(REGIONAL_TRADITIONS[0]?.id || null);

  const heroArtifact = ARTIFACTS.find((a) => a.id === period.heroArtifactId);
  const secondaryArtifacts = period.artifactIds
    .map((id) => ARTIFACTS.find((a) => a.id === id))
    .filter((a) => a && a.id !== period.heroArtifactId);

  const activeTradition = REGIONAL_TRADITIONS.find((t) => t.id === activeTraditionId);

  useEffect(() => {
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      const metaEl = innerRef.current?.querySelector('.period__meta');
      const artifactEl = innerRef.current?.querySelector('.period__artifact-col');
      const secondaryEl = innerRef.current?.querySelector('.period__secondary');

      if (metaEl) {
        gsap.fromTo(
          metaEl,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              end: 'top 30%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      if (artifactEl) {
        gsap.fromTo(
          artifactEl,
          { opacity: 0, x: 40, scale: 0.96 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1,
            ease: 'power2.out',
            delay: 0.15,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              end: 'top 30%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      if (secondaryEl) {
        gsap.fromTo(
          secondaryEl,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power2.out',
            delay: 0.3,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              end: 'top 20%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion, period.id]);

  const handleArtifactClick = (e: React.MouseEvent, artifactId: string) => {
    const artifact = ARTIFACTS.find((a) => a.id === artifactId);
    if (artifact) {
      const originRect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      openArtifactModal(artifact, originRect);
    }
  };

  const isRegionalPeriod = period.id === 'period-5';

  return (
    <section
      className={`period ${period.bgClass}`}
      id={period.id}
      ref={sectionRef}
    >
      <div className="period__pinned">
        <div className="period__inner" ref={innerRef}>
          <div className="period__meta">
            <p className="period__number">
              {String(period.number).padStart(2, '0')} · {period.code}
            </p>
            <h2 className="period__title">{period.title}</h2>
            <p className="period__subtitle">{period.subtitle}</p>
            <p className="period__date">{period.date}</p>
            <p className="period__body">{period.bodyText}</p>
            <p className="period__body">{period.secondaryText}</p>
          </div>

          {isRegionalPeriod ? (
            <div className="period__artifact-col period__regional">
              <div className="traditions-column">
                <div className="traditions-list">
                  {REGIONAL_TRADITIONS.map((t) => (
                    <button
                      key={t.id}
                      className={`tradition-item ${
                        activeTraditionId === t.id ? 'is-active' : ''
                      }`}
                      onClick={() => setActiveTraditionId(t.id)}
                    >
                      <div className="tradition-item__name">{t.name}</div>
                      <div className="tradition-item__meta">{t.origin}</div>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                {activeTradition && (
                  <div className="tradition-detail">
                    <div className="tradition-detail__img">
                      <img
                        src={getArtImageUrl(activeTradition.imagePrompt, 'landscape_4_3', activeTradition.imageUrl)}
                        alt={activeTradition.name}
                      />
                    </div>
                    <h4>{activeTradition.name}</h4>
                    <div className="tradition-detail__meta">
                      {activeTradition.origin} · {activeTradition.period}
                    </div>
                    <p className="tradition-detail__desc">{activeTradition.about}</p>
                    <div className="tradition-detail__tags">
                      {activeTradition.themes.map((theme) => (
                        <span key={theme} className="tradition-tag">
                          {theme}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="period__artifact-col">
              {heroArtifact && (
                <div
                  className="hero-artifact"
                  onClick={(e) => handleArtifactClick(e, heroArtifact.id)}
                >
                  <div className="hero-artifact__frame" />
                  <img
                    src={getArtImageUrl(heroArtifact.imagePrompt, 'portrait_4_3', heroArtifact.imageUrl)}
                    alt={heroArtifact.name}
                  />
                  <div className="hero-artifact__caption">
                    <span className="strong">{heroArtifact.name}</span>
                    {heroArtifact.year} · {heroArtifact.material}
                  </div>
                </div>
              )}
            </div>
          )}

          {!isRegionalPeriod && (
            <div className="period__secondary">
              <div className="secondary-row">
                {secondaryArtifacts.slice(0, 3).map((artifact, idx) =>
                  artifact ? (
                    <button
                      key={artifact.id}
                      className="secondary-artifact"
                      onClick={(e) => handleArtifactClick(e, artifact.id)}
                    >
                      <div className="secondary-artifact__img">
                        <img
                          src={getArtImageUrl(artifact.imagePrompt, 'portrait_4_3', artifact.imageUrl)}
                          alt={artifact.name}
                        />
                      </div>
                      <div className="secondary-artifact__info">
                        <div className="secondary-artifact__num">
                          {String(period.number).padStart(2, '0')}.{String(idx + 2).padStart(2, '0')}
                        </div>
                        <div className="secondary-artifact__name">{artifact.name}</div>
                        <div className="secondary-artifact__meta">
                          {artifact.year} · {artifact.material}
                        </div>
                      </div>
                    </button>
                  ) : null
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
