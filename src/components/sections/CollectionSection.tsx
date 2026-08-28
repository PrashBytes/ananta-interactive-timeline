import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ARTIFACTS } from '../../data/artifacts';
import { FILTER_LABELS } from '../../data/periods';
import type { FilterKey } from '../../data/types';
import { useAppStore } from '../../store/appStore';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import ArtifactCard from '../artifact/ArtifactCard';
import { Grid3X3 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FILTER_KEYS: FilterKey[] = ['ALL', 'ANCIENT', 'MEDIEVAL', 'MUGHAL', 'REGIONAL', 'MODERN'];

export default function CollectionSection() {
  const collectionFilter = useAppStore((state) => state.collectionFilter);
  const setCollectionFilter = useAppStore((state) => state.setCollectionFilter);
  const reducedMotion = usePrefersReducedMotion();
  const gridRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);

  const filteredArtifacts =
    collectionFilter === 'ALL'
      ? ARTIFACTS
      : ARTIFACTS.filter((a) => a.category === collectionFilter);

  useEffect(() => {
    if (reducedMotion) {
      cardsRef.current.forEach((card) => {
        if (card) {
          gsap.set(card, { opacity: 1, filter: 'blur(0px)', scale: 1 });
        }
      });
      return;
    }

    const ctx = gsap.context(() => {
      ScrollTrigger.batch('.reveal--blur', {
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            filter: 'blur(0px)',
            scale: 1,
            duration: 0.8,
            ease: 'power2.out',
            stagger: 0.08,
          });
        },
        start: 'top 85%',
      });
    }, gridRef);

    return () => ctx.revert();
  }, [reducedMotion, filteredArtifacts]);

  return (
    <section className="collection" id="collection">
      <div className="container">
        <div className="collection__header">
          <p className="collection__eyebrow">
            <Grid3X3 style={{ display: 'inline-block', verticalAlign: 'middle', width: 14, height: 14, marginRight: 8 }} />
            THE ARCHIVE
          </p>
          <h2 className="collection__title">THE COLLECTION</h2>
          <p className="collection__lead">
            A curated selection of artifacts spanning five thousand years of Indian artistic expression — from the bronze-casting workshops of the Indus Valley to the canvas of the modern Progressive Artists.
          </p>
        </div>

        <div className="filter-bar">
          {FILTER_KEYS.map((key) => (
            <button
              key={key}
              className={`filter-btn ${collectionFilter === key ? 'is-active' : ''}`}
              onClick={() => setCollectionFilter(key)}
            >
              {FILTER_LABELS[key]}
            </button>
          ))}
        </div>

        <div className="artifact-grid" ref={gridRef}>
          {filteredArtifacts.map((artifact, idx) => (
            <div
              key={artifact.id}
              ref={(el) => {
                cardsRef.current[idx] = el;
              }}
              className="reveal--blur"
            >
              <ArtifactCard artifact={artifact} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
