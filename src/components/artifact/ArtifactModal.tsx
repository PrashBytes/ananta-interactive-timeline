import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { useAppStore } from '../../store/appStore';
import { getArtImageUrl } from '../../utils/imageUrls';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

export default function ArtifactModal() {
  const openArtifact = useAppStore((state) => state.openArtifact);
  const closeArtifactModal = useAppStore((state) => state.closeArtifactModal);
  const reducedMotion = usePrefersReducedMotion();
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!openArtifact) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeArtifactModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [openArtifact, closeArtifactModal]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) {
      closeArtifactModal();
    }
  };

  if (!openArtifact) return null;

  return (
    <div
      className={`modal-overlay is-open`}
      onClick={handleOverlayClick}
      ref={overlayRef}
      style={reducedMotion ? { transition: 'none' } : undefined}
    >
      <div className="modal" style={reducedMotion ? { transition: 'none' } : undefined}>
        <button
          className="modal__close"
          onClick={closeArtifactModal}
          aria-label="Close modal"
        >
          <X style={{ width: 20, height: 20 }} />
        </button>

        <div className="modal__image" ref={contentRef}>
          <img
            src={getArtImageUrl(openArtifact.imagePrompt, 'portrait_4_3', openArtifact.imageUrl)}
            alt={openArtifact.name}
          />
        </div>

        <div className="modal__content">
          <p className="modal__period">
            {openArtifact.periodLabel} · {openArtifact.year}
          </p>
          <h2 className="modal__name">{openArtifact.name}</h2>

          <div className="modal__meta">
            <div className="modal__meta-item">
              <span className="modal__meta-label">Region</span>
              <span className="modal__meta-value">{openArtifact.region}</span>
            </div>
            <div className="modal__meta-item">
              <span className="modal__meta-label">Material</span>
              <span className="modal__meta-value">{openArtifact.material}</span>
            </div>
            <div className="modal__meta-item">
              <span className="modal__meta-label">Technique</span>
              <span className="modal__meta-value">{openArtifact.technique}</span>
            </div>
            <div className="modal__meta-item">
              <span className="modal__meta-label">Category</span>
              <span className="modal__meta-value">{openArtifact.category}</span>
            </div>
          </div>

          <div className="modal__section">
            <p className="modal__section-label">About</p>
            <p className="modal__section-text">{openArtifact.about}</p>
          </div>

          <div className="modal__section">
            <p className="modal__section-label">Historical Context</p>
            <p className="modal__section-text">
              {openArtifact.historicalContext}
            </p>
          </div>

          <div className="modal__section">
            <p className="modal__section-label">Artistic Significance</p>
            <p className="modal__section-text">
              {openArtifact.artisticSignificance}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
